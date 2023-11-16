# report

## 介绍

我们提供TCP数据上报功能，实时获取手臂的位置，速度等信息；端口30000，频率为200HZ；下面简单介绍如何使用数据上报获取并解析数据



## 端口30000定义

**固件要求：V2.1.0或以上版本。**

<table><thead><tr><th width="204">内容</th><th width="90">类型</th><th width="99">起始字节</th><th width="96">终止字节</th><th width="85">字节数</th><th>单位</th><th>描述</th></tr></thead><tbody><tr><td>字节数</td><td>U32</td><td>1</td><td>4</td><td>4</td><td></td><td></td></tr><tr><td>时间戳</td><td>U64</td><td>5</td><td>12</td><td>8</td><td>μs</td><td>控制器启动时间开始计算</td></tr><tr><td>运动状态与运动模式</td><td>U8</td><td>13</td><td>13</td><td>1</td><td></td><td></td></tr><tr><td>指令缓存数量</td><td>U16</td><td>14</td><td>15</td><td>2</td><td></td><td></td></tr><tr><td>状态信息预留</td><td>U16</td><td>16</td><td>32</td><td>17</td><td></td><td></td></tr><tr><td>规划关节位置</td><td>FP32</td><td>33</td><td>60</td><td>28</td><td>rad</td><td></td></tr><tr><td>规划关节速度</td><td>FP32</td><td>61</td><td>88</td><td>28</td><td>rad/s</td><td></td></tr><tr><td>规划关节加速度</td><td>FP32</td><td>89</td><td>116</td><td>28</td><td>rad/s²</td><td></td></tr><tr><td>实际关节位置</td><td>FP32</td><td>117</td><td>144</td><td>28</td><td>rad</td><td>编码器数据</td></tr><tr><td>实际关节速度</td><td>FP32</td><td>145</td><td>172</td><td>28</td><td>rad/s</td><td></td></tr><tr><td>实际关节加速度</td><td>FP32</td><td>173</td><td>200</td><td>28</td><td>rad/s²</td><td></td></tr><tr><td>实际关节电流</td><td>FP32</td><td>201</td><td>228</td><td>28</td><td>A</td><td></td></tr><tr><td>电流估算的关节力矩</td><td>FP32</td><td>229</td><td>256</td><td>28</td><td>N</td><td></td></tr><tr><td>关节预留字段</td><td>FP32</td><td>257</td><td>424</td><td>168</td><td></td><td></td></tr><tr><td>规划TCP位置</td><td>FP32</td><td>425</td><td>448</td><td>24</td><td>mm &#x26; rad</td><td>[x,y,z,rx,ry,rz]</td></tr><tr><td>规划TCP速度</td><td>FP32</td><td>449</td><td>472</td><td>24</td><td>mm/s &#x26; rad/s</td><td></td></tr><tr><td>实际TCP位置</td><td>FP32</td><td>473</td><td>496</td><td>24</td><td>mm &#x26;rad</td><td>[x,y,z,rx,ry,rz]</td></tr><tr><td>实际TCP速度</td><td>FP32</td><td>497</td><td>520</td><td>24</td><td>mm/s &#x26; rad/s</td><td></td></tr><tr><td>电流估算的TCP力矩</td><td>FP32</td><td>521</td><td>544</td><td>24</td><td>N &#x26; N·m</td><td>机械臂零点位置和奇异点附近区域数据不可信</td></tr><tr><td>笛卡尔预留字段</td><td>FP32</td><td>545</td><td>688</td><td>144</td><td></td><td></td></tr><tr><td>力矩传感器原始数据</td><td>FP32</td><td>689</td><td>712</td><td>24</td><td>N &#x26; N·m</td><td>[Fx,Fy,Fz,Tx,Ty,Tz]</td></tr><tr><td>处理后的力矩传感器数据</td><td>FP32</td><td>713</td><td>736</td><td>24</td><td>N &#x26; N·m</td><td>[Fx,Fy,Fz,Tx,Ty,Tz]</td></tr><tr><td>外设预留字段</td><td>FP32</td><td>737</td><td>784</td><td>48</td><td></td><td></td></tr></tbody></table>



## 示例

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







