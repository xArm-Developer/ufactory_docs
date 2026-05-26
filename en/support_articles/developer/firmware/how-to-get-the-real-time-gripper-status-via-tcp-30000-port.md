# How to Obtain Real-Time Gripper Status via TCP Port 30000

## Introduction

* Firmware: ≥V2.7.101; [Download](https://drive.google.com/drive/folders/1BVaVGUbnvQjmIUxTzW0uuFDwyIS89ze_?usp=sharing)
* Python SDK: V1.17.0+; [Download](https://drive.google.com/drive/folders/1BVaVGUbnvQjmIUxTzW0uuFDwyIS89ze_?usp=sharing)
* The TCP 30000 port does not report the gripper's position, speed, current/force by default. If you need this data, you must use the SDK to enable it.

The specifications for gripper data reporting are as follows:

| Items                    | Type  | Bytes   | Length | Big_endian | Description                                                  |
| ------------------------ | ----- | ------- | ------ | ---------- | ------------------------------------------------------------ |
| Gripper Type             | U8    | 737     | 1      | Big        | 0：No End Effector， <br />1：Gripper， <br />2：Gripper G2， <br />3：BIO Gripper G2， <br />4：Robotiq Gripper 2F-85/2F-140 |
| Griper State             | U8    | 738     | 1      | Big        | Status of  Gripper. <br />For Robotiq grippers, the status is determined by bits 6 and 7.<br />0: In motion, no object detected.<br />1: Object detected while opening (contact made before reaching the target position).<br />2: Object detected while closing (contact made before reaching the target position).<br />3: Target position reached (no object detected or object lost). |
| Gripper Position         | INT16 | 739-740 | 2      | Big        | unit: mm. The Robotiq gripper position is dimensionless, with a range of 0 to 255. To obtain the actual distance in millimeters (mm), users need to convert the value manually. Please contact Robotiq Technical Support for the specific conversion formula. |
| Gripper Speed            | INT16 | 741-742 | 2      | Big        | unit: mm/s. The actual velocity of the Robotiq gripper cannot be retrieved. The firmware fills this field with 0 by default |
| Gripper Current or Force | INT16 | 743-744 | 2      | Big        | unit: mA. The Robotiq gripper current range is 0 to 255. Users must convert the raw value to get the actual current in milliamperes (mA) by multiplying it by 10 (e.g., a returned value of 100 represents 1010 mA) |

For the complete TCP 30000 port reporting data, please refer to:
[Data Description of TCP port](data-description-of-tcp-port.md)

## 2. Python Interface
You need to enable gripper data reporting first.
Parameter 1: Reporting Type

- 0 - Disable reporting

* 1 - Gripper;
* 2 - Gripper G2;
* 3 - BIO Gripper;

Parameter 2: Frequency

```python
//set gripper report type as Gripper G2, Frequency=250HZ
ret = arm.set_external_device_monitor_params(2, 250)
```

## 3. Python Example

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