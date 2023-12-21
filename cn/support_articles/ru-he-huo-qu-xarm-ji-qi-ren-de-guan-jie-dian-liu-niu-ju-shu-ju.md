# 如何获取 xArm 机器人的关节电流/扭矩数据

**示例适用于：**

**UFACTORY xArm Studio 版本：≥1.6.0**

**UFACTORY xArm固件版本：≥1.6.0**

**UFACTORY xArm Python-SDK：≥1.6.0**

**C++-SDK：** ≥1.6.0 **UFACTORYxArm**

当机械臂执行下面的Blockly实例时，执行附录1的Python实例或附录2的C++实例，即可得到机械臂的关节力矩数据/关节电流数据。 它连接到控制器端口 30003 以获取 100Hz 的数据报告。

#### 块状示例

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

#### 典型关节力矩图（J3）

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

#### 典型接头电流图（J3）

<figure><img src="broken-reference" alt=""><figcaption></figcaption></figure>

可以通过接口 **set\_report\_tau\_or\_i()**

获取关节力矩数据时， **单位：N·m** ：

```python
arm.set_report_tau_or_i(tau_or_i=0)
```

当你想获取关节电流数据时， **单位：A** ：

```python
arm.set_report_tau_or_i(tau_or_i=1)
```



下面的例子是获取关节力矩数据的例子。

```python
import socket
import struct
import os
import sys
import time

sys.path.append(os.path.join(os.path.dirname(__file__), '../../..'))

from xarm.wrapper import XArmAPI
arm = XArmAPI('192.168.1.106', debug=True)

def bytes_to_fp32(bytes_data, is_big_endian=False):
    """
    bytes to float
    :param bytes_data: bytes
    :param is_big_endian: is big endian or not，default is False.
    :return: fp32
    """
    return struct.unpack('>f' if is_big_endian else '<f', bytes_data)[0]

def bytes_to_fp32_list(bytes_data, n=0, is_big_endian=False):
    """
    bytes to float list
    :param bytes_data: bytes
    :param n: quantity of parameters need to be converted，default is 0，all bytes converted.
    :param is_big_endian: is big endian or not，default is False.
    :return: float list
    """
    ret = []
    count = n if n > 0 else len(bytes_data) // 4
    for i in range(count):
        ret.append(bytes_to_fp32(bytes_data[i * 4: i * 4 + 4], is_big_endian))
    return ret

def bytes_to_u32(data):
    data_u32 = data[0] << 24 | data[1] << 16 | data[2] << 8 | data[3]
    return data_u32

robot_ip = '192.168.1.106' # IP of controller
robot_port = 30003 # Port of controller

# create socket to connect controller
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
sock.setblocking(True)
sock.settimeout(1)
sock.connect((robot_ip, robot_port))

arm.set_report_tau_or_i(tau_or_i=0)

while True:
    data = sock.recv(4)
    length = bytes_to_u32(data)
    data += sock.recv(length - 4)
    joint_data = bytes_to_fp32_list(data[59:87]) #The acquired data is the data from J1 to J7
    print(joint_data)

```





