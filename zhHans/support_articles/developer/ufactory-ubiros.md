# UFactory 机械臂与 UbiRos 软夹爪的集成应用项目

## 项目概述

本项目演示了基于 **UFACTORY 机械臂** 和 **UbiRos GNT2508 软夹爪** 的应用。

遵循本指南后，用户可以将 UbiRos 软夹爪无缝集成到 xArm 开发者 Python SDK 中。
![](assets/IMG_1424.jpeg)

## 硬件需求

- 机械臂：[UFACTORY](https://www.ufactory.cc/)-850、xArm 系列（版本 1305）

- 软夹爪：[UBIROS](https://www.ubiros.com/products/gentle-duo/) - Gentle Duo GNT2508

## 硬件连接

### UFactory 机械臂末端执行器 IO 接口定义

- **插入式接口**

![](./assets/io.jpg)

| 引脚 | 颜色 |     信号     | 引脚 |  颜色  |       信号       |
| :--: | ---- | :----------: | :--: | :----: | :--------------: |
|  1   | 棕色 | +24V（电源） |  7   |  黑色  | 工具输出（TO0）  |
|  2   | 蓝色 | +24V（电源） |  8   |  灰色  | 工具输出 1 (TO1) |
|  3   | 白色 |  0V（GND）   |  9   |  红色  | 工具输入 0 (TI0) |
|  4   | 绿色 |  0V（GND）   |  10  |  紫色  | 工具输入 1 (TI1) |
|  5   | 粉色 |  用户 485-A  |  11  |  橙色  | 模拟输入 0 (AI0) |
|  6   | 黄色 |  用户 485-B  |  12  | 浅绿色 | 模拟输入 1 (AI1) |

### Gentle Duo GNT2508 夹爪

| 引脚 |  颜色  |       信号       |
| :--: | :----: | :--------------: |
|  1   |  灰色  |   +24V (电源)    |
|  2   | 亮粉色 |  0V (地线 GND)   |
|  3   |  粉色  | 数字输入 1 (DI1) |
|  4   |  蓝色  | 数字输入 2 (DI2) |
|  5   |  绿色  |  数字输出 (DO)   |

### 连接对应关系

| **连接** | UFactory 手臂末端信号  |    UbiRos 夹爪信号     |
| :------: | :--------------------: | :--------------------: |
|    1     |  棕色 + 蓝色  (+24V)   |      灰色  (+24V)      |
|    2     |     白色 0V  (GND)     |    亮粉色 0V  (GND)    |
|    3     | 黑色 工具输出 0  (TO0) | 粉色 数字输入 1  (DI1) |
|    4     | 灰色 工具输出 1  (TO1) | 蓝色 数字输入 2  (DI2) |
|    5     | 紫色 工具输入 1  (TI1) |  绿色 数字输出  (DO)   |

#### 1. 设置夹爪

通过 Wi-Fi 连接到夹爪。网络名称为其序列号，密码为 `__`。在本地网络中访问其 IP 地址（通常类似 192.168.4.1）。点击 "配置 WiFi" 按钮，找到您的本地网络并连接。

#### 2. 查找夹爪 IP 地址

登录您的 Wi-Fi 路由器（地址通常类似` 192.168.0.1 `或 `192.168.1.1`，并输入路由器背面的密码）。

导航到设备页面，通过夹爪的序列号找到夹爪。在夹爪的设置下，您会找到 IPv4 地址（类似：`192.168.1.xxx`）。请记下此地址。

#### 3. 将 UbiRos 类添加到 Python SDK

在 Python SDK 中添加一个新文件夹，命名为 **Ubiros**。将以下代码添加到名为 `ubiros_control.py` 的文件中。

```python
# xArm-Python-SDK/ubiros/ubiros_control.py
import socket
import time
from typing import Optional

class UbirosGripper:
    """
    Ubiros Gentle 双指夹爪的高级封装。
    支持手指 A 和 B 的命令、预设、偏移、感应、
    速度/i/k 参数、EEPROM 保存、WiFi 重置等。
    """

    def __init__(self, ip_address: str, port: int = 88,
                 timeout: float = 2.0, add_newline: bool = False,
                 read_reply: bool = False):
        self.ip = ip_address
        self.port = port
        self.timeout = timeout
        self.add_newline = add_newline
        self.read_reply = read_reply
        self._sock: Optional[socket.socket] = None

    # ---------------- 连接管理 (CONNECTION MGMT) ----------------
    def connect(self):
        if self._sock:
            return
        print(f"Connecting to Ubiros gripper at {self.ip}:{self.port} ...")
        s = socket.create_connection((self.ip, self.port), timeout=self.timeout)
        s.settimeout(self.timeout)
        time.sleep(0.15)
        self._sock = s
        print("Connected.")

    def disconnect(self):
        if self._sock:
            try:
                self._sock.close()
            finally:
                self._sock = None
                print("Disconnected.")

    def __enter__(self):
        self.connect()
        return self

    def __exit__(self, exc_t, exc_v, exc_tb):
        self.disconnect()

    # ---------------- 低级发送 (LOW-LEVEL SEND) ----------------
    def _send(self, body: str):
        if not self._sock:
            raise RuntimeError("Not connected. Call connect() first.")

        suffix = ">\n" if self.add_newline else ">"
        payload = (body + suffix).encode()

        self._sock.sendall(payload)
        if self.read_reply:
            try:
                return self._sock.recv(1024)
            except socket.timeout:
                return None
        return None

    # ---------------- 命令 (COMMANDS) ----------------

    # 1–2. 移动单个手指: "a60>", "b45>"
    def finger(self, finger_id: str, position: int):
        if finger_id not in ("a", "b"):
            raise ValueError("finger_id must be 'a' or 'b' for 2-finger gripper")
        self._validate_pos(position)
        return self._send(f"{finger_id}{position}")

    # 3. 读取当前位置: "a?" or "b?"
    def finger_position(self, finger_id: str):
        if finger_id not in ("a", "b"):
            raise ValueError("finger_id must be 'a' or 'b'")
        return self._send(f"{finger_id}?")

    # 组合命令: 例如, "a12>b12>"
    def combined(self, command_string: str):
        """
        示例:
            combined("a12>b12>")
        """
        if not command_string.endswith(">"):
            raise ValueError("Combined command must end with '>'")
        # Strip trailing > because _send() adds its own
        return self._send(command_string.rstrip(">"))

    # 4. 移动两个手指: "m55>"
    def move_all(self, position: int):
        self._validate_pos(position)
        return self._send(f"m{position}")

    # 友好辅助函数 (Friendly helpers)
    def open(self):
        return self.move_all(0)  # 适度打开 (moderate open)

    def close(self):
        return self.move_all(65)    # 完全关闭 (full close)

    # 5. 设置预设: "p1:65>"
    def set_preset(self, slot: int, position: int):
        self._validate_slot(slot)
        self._validate_pos(position)
        return self._send(f"p{slot}:{position}")

    # 6. 保存位置 N 到 EEPROM: "s1>"
    def save_preset(self, slot: int):
        self._validate_slot(slot)
        return self._send(f"s{slot}")

    # 7. 保存所有参数: "s>"
    def save_all(self):
        return self._send("s")

    # 8. 跳转到预设: "g1>", "g2>", 等
    def go_preset(self, slot: int):
        self._validate_slot(slot)
        return self._send(f"g{slot}")

    # 9. 调整手指偏移: "o1:-5>", "o2:7>"
    def set_offset(self, finger_number: int, offset: int):
        if finger_number not in (1, 2):
            raise ValueError("finger_number must be 1 or 2 for 2-finger gripper")
        return self._send(f"o{finger_number}:{offset}")

    # 10. 设置电流限制: "l2500>"
    def set_current_limit(self, milliamps: int):
        return self._send(f"l{milliamps}")

    # 11. 读取电流限制: "l?"
    def read_current_limit(self):
        return self._send("l?")

    # 12. 设置确认阈值: "t600>"
    def set_threshold(self, milliamps: int):
        return self._send(f"t{milliamps}")

    # 13. 读取负载电流: "f?"
    def read_load_current(self):
        return self._send("f?")

    # 14. 读取或设置位置控制系数: "k?" / "k87>"
    def read_k(self):
        return self._send("k?")

    def set_k(self, value: int):
        return self._send(f"k{value}")

    # 15. 读取或设置最大速度: "v?" / "v65>"
    def read_velocity(self):
        return self._send("v?")

    def set_velocity(self, value: int):
        return self._send(f"v{value}")

    # 16. 读取或设置电流控制系数: "i?" / "i79>"
    def read_i(self):
        return self._send("i?")

    def set_i(self, value: int):
        return self._send(f"i{value}")

    # 17. 重置 Wi-Fi: "x>"
    def wifi_reset(self):
        """
        强制夹爪再次进入 AP 模式。
        调用此函数后，您必须重新配置 Wi-Fi！
        """
        return self._send("x")

    # ---------------- 验证 (VALIDATION) ----------------
    @staticmethod
    def _validate_pos(pos: int):
        if not (0 <= pos <= 100):
            raise ValueError("Position must be 0–100 percent")

    @staticmethod
    def _validate_slot(slot: int):
        if slot not in (1, 2, 3, 4):
            raise ValueError("Preset slot must be 1,2,3,4")
```

#### 4. 用机械臂控制夹爪

示例代码：

```python
gripper_ip = "192.168.1.xxx" ###TODO: 替换为您的夹爪 IP 地址
speed=55

with UbirosGripper(gripper_ip, read_reply=True, add_newline=False) as grip:
    grip.open()               # m0>
    time.sleep(0.1)
    grip.set_preset(1, 30)    # p1:30>
    grip.go_preset(1)         # g1>
    time.sleep(0.1)
    grip.close()              # m65>
```

> [!Note]
>
> 夹爪的 IP 地址（`gripper_ip`）必须被修改为实际地址。

