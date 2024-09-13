---
description: Take port 30000 as an example.
---

# How to get the reported data via TCP port?

### 1. Introduction <a href="#id-1.-introduction" id="id-1.-introduction"></a>

We provide TCP port 30000 to get the robot data in real-time, **the frequency is 200HZ**. The following briefly describes how to use data reporting with the 30000 port.

[Data Description of TCP port](data-description-of-tcp-port.md)

### 2. Python Example

```python
'''
Base on TCP port 30000, 200HZ.
Firmware version should be 2.1.101 or later.
Here is an example to get actual joint currents by TCP port 30000, unit: Ampere.
'''

import socket
import struct

def bytes_to_fp32(bytes_data, is_big_endian=False):
    return struct.unpack('>f' if is_big_endian else '<f', bytes_data)[0]

def bytes_to_fp32_list(bytes_data, n=0, is_big_endian=False):
    ret = []
    count = n if n > 0 else len(bytes_data) // 4
    for i in range(count):
        ret.append(bytes_to_fp32(bytes_data[i * 4: i * 4 + 4], is_big_endian))
    return ret


def bytes_to_u32(data):
    data_u32 = data[0] << 24 | data[1] << 16 | data[2] << 8 | data[3]
    return data_u32


robot_ip = '192.168.1.77'
robot_port = 30000

# create socket connection
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
sock.setblocking(True)
sock.settimeout(1)
sock.connect((robot_ip, robot_port))

buffer = sock.recv(4)
print(buffer)
while len(buffer) < 4:
    buffer += sock.recv(4 - len(buffer))
size = bytes_to_u32(buffer[:4])

cnt=0
while cnt<1000:
    buffer += sock.recv(size - len(buffer))
    if len(buffer) < size:
        continue
    cnt+=1
    data = buffer[:size]
    buffer = buffer[size:]
    actual_joint_currents=bytes_to_fp32_list(data[200:228])
    print("counter={},actual_joint_currents={}".format(cnt,actual_joint_currents))
```

3.
