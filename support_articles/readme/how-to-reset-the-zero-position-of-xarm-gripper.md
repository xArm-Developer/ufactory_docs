# How to reset the zero position of xArm Gripper?

Product: xArm Gripper.

1. Press down the E stop button.
2. Remove 6 screws on the gripper cover and manually turn the motor of the gripper, to close the gripper.
3. Release the E stop button and Enable the robot.
4. Copy the Python code below to UFactoryStudio or local Python IDE.
5. Modify to the corresponding IP.
6. Run the script, it will set the current position of the gripper as 0. Press down the E stop button and release to take effect.
7. Try to control the gripper.&#x20;

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

```
