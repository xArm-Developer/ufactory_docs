# 如何通过TCP端口30000获取机械爪实时数据

## 1.介绍

* 固件要求： ≥V2.7.101;   [点击下载](http://update.ufactory.cc/xarmcontroller-x86_64-2.7.101.tar.gz)
* Python SDK：V1.17.0+ ; [点击下载](http://update.ufactory.cc/xArm-Python-SDK-develop.zip)
* TCP30000端口默认不上报机械爪的位置，速度，电流或力。若需要，需要调用SDK将上报打开。

机械爪上报说明如下：

| 参数           | 类型  | 字节数  | 长度 | 大小端 | 说明                                                         |
| -------------- | ----- | ------- | ---- | ------ | ------------------------------------------------------------ |
| 机械爪类型     | U8    | 737     | 1    | 大端   | 0：No End Effector， <br />1：Gripper， <br />2：Gripper G2， <br />3：BIO Gripper G2， <br />4：Robotiq Gripper 2F-85/2F-140 |
| 机械爪状态     | U8    | 738     | 1    | 大端   | 各款机械爪状态. <br />如果是Robotiq 机械爪状态使用bit 6和bit 7: <br />0：正在运动，未检测到物体； <br />1：开启方向提前接触； <br />2：闭合方向提前接触； <br />3：到达指令位置（未检测到物体或已丢失） |
| 机械爪位置     | INT16 | 739-740 | 2    | 大端   | 单位：mm。Robotiq 夹爪位置采用无量纲表示（范围：0~255）。实际开口距离（mm）需用户自行换算，具体换算公式请联系 Robotiq 技术支持。 |
| 机械爪速度     | INT16 | 741-742 | 2    | 大端   | 单位：mm/s。Robotiq机械爪无法获取到真实速度，固件使用0填充。 |
| 机械爪电流或力 | INT16 | 743-744 | 2    | 大端   | 单位：mA。Robotiq 夹爪电流反馈范围为 0~255。实际电流值（mA）需要用户通过原始值乘以 10 进行换算（例如：返回值 100 对应实际电流为 1000 mA）。 |

完整TCP 30000 端口上报数据请参考：
[TCP 端口数据说明](data-description-of-tcp-port.md)

## 2. Python接口

需要打开机械爪的上报。
参数1：上报类型

- 0-关闭上报;

*  1-机械爪； 
*  2-机械爪G2； 
*  3-BIO机械爪； 
*  4-Robotiq 2F-85/2F-140 机械爪；

参数2：频率
```python
//设置上报为机械爪G2，频率250HZ
ret = arm.set_external_device_monitor_params(2, 250)
```

## 3. Python示例

```python
"""
Description: Get xArm gripper position from TCP 30000 port
    1. Connect to xArm
    2. Enable external device monitor for Gripper on TCP port 30000
"""

import os
import sys
import time
import socket
import struct

sys.path.append(os.path.join(os.path.dirname(__file__), '../../..'))
from xarm.wrapper import XArmAPI

def bytes_to_u32(data):
    data_u32 = data[0] << 24 | data[1] << 16 | data[2] << 8 | data[3]
    return data_u32


def bytes_to_fp32(bytes_data, is_big_endian=False):
    return struct.unpack('>f' if is_big_endian else '<f', bytes_data)[0]


def bytes_to_int16(bytes_data, is_big_endian=False):
    return struct.unpack('>h' if is_big_endian else '<h', bytes_data)[0]


def hangle_err_warn_changed(item):
    print('ErrorCode: {}, WarnCode: {}'.format(item['error_code'], item['warn_code']))


robot_ip='192.168.1.36'
# Connect to xArm and enable external device monitor
arm = XArmAPI(robot_ip)


# Set mode: position control mode
arm.set_mode(0)
# Set state: motion state
arm.set_state(state=0)

time.sleep(0.5)

# Enable external device monitor for xArm gripper on TCP 30000
# dev_type, 1: Gripper, 2: Gripper G2, 3: BIO Gripper
# frequency=250: request frequency
print('Enabling external device monitor for xArm gripper...')
ret = arm.set_external_device_monitor_params(2, 250)
if ret == 0:
    print('External device monitor enabled successfully')
else:
    print('Failed to enable external device monitor, code:', ret)
    arm.disconnect()
    sys.exit(1)

# Wait for the setting to take effect
time.sleep(1)

# Connect to TCP 30000 port to get real-time data

robot_port = 30000
print('Connecting to TCP port 30000...')
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
sock.setblocking(True)
sock.settimeout(1)

try:
    sock.connect((robot_ip, robot_port))
    print('Connected to TCP 30000')
except Exception as e:
    print('Failed to connect to TCP 30000:', e)
    arm.disconnect()
    sys.exit(1)

# Read data header
buffer = sock.recv(4)
while len(buffer) < 4:
    buffer += sock.recv(4 - len(buffer))
size = bytes_to_u32(buffer[:4])

print('Reading gripper data (position, speed, current)...')
print('Press Ctrl+C to exit')
print('-' * 50)


try:
    while True:
        # Receive full data packet
        buffer += sock.recv(size - len(buffer))
        if len(buffer) < size:
            continue
        
        data = buffer[:size]
        buffer = buffer[size:]
        
        # Extract gripper data (INT16 big-endian format)
        if len(data) >= 744:
            gripper_type = data[736]
            gripper_state = data[737]
            gripper_pos = bytes_to_int16(data[738:740], is_big_endian=True)
            gripper_speed = bytes_to_int16(data[740:742], is_big_endian=True)
            gripper_force = bytes_to_int16(data[742:744], is_big_endian=True)
            print('Type: {}, State:{}, Position: {}, Speed: {}, Current: {}'.format(gripper_type,gripper_state,gripper_pos,gripper_speed, gripper_force/1000))
        else:
            print('Warning: data packet size {} is too small'.format(len(data)))

except KeyboardInterrupt:
    print('\nExiting...')
finally:
    sock.close()
    arm.disconnect()
    print('Disconnected')

```