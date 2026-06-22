# 如何重置 xArm 机械爪的零点？

**产品**：xArm 机械爪

---

### 步骤：
1. 按下急停按钮。
2. 拆下机械爪盖上的 6 颗螺丝，手动旋转机械爪的电机，使机械爪闭合。
    ![](assets/gripper_cover.png)
3. 松开急停按钮并启用机械臂。
4. 将以下 Python 代码复制到 UFactoryStudio 或本地 Python IDE 中。
5. 修改为对应的 IP 地址。
6. 运行脚本，脚本会将机械爪的当前位置设置为 0。按下急停按钮并松开以生效。
7. 尝试控制机械爪。

---

> [!Note]
>
> 仅适用于 xArm 机械爪，不适用于 xArm 机械爪 G2

----

### Python 代码：
```python
import os
import sys
import time
sys.path.append(os.path.join(os.path.dirname(__file__), '../../..'))

from xarm.wrapper import XArmAPI

arm = XArmAPI('192.168.1.202')
time.sleep(0.5)
if arm.warn_code != 0:
    arm.clean_warn()
if arm.error_code != 0:
    arm.clean_error()

def bytes_to_u16(data):
    """大端字节序"""
    data_u16 = data[0] << 8 | data[1]
    return data_u16
def u16_to_bytes(data):
    """大端字节序"""
    bts = bytes([data // 256 % 256])
    bts += bytes([data % 256])
    return bts

print(arm.get_gripper_version())

ret = arm.core.gripper_modbus_r16s(0x0105, 1)
# print(ret)
print("gripper io ctrl mode:%d"%bytes_to_u16(ret[5:7]))

ret=arm.core.gripper_modbus_w16s(0x1105,u16_to_bytes(1),1)
print(ret)


ret = arm.core.gripper_modbus_r16s(0x0105, 1)
# print(ret)
print("gripper io ctrl mode:%d"%bytes_to_u16(ret[5:7]))

ret=arm.core.gripper_modbus_w16s(0x1817,u16_to_bytes(1),1)
print(ret)