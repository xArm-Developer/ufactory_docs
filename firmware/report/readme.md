# ReadMe



### 1. Introduction <a href="#1.-introduction" id="1.-introduction"></a>

&#x20;   We provide TCP port 30000 to get the robot data in real-time, the frequency is 200HZ. The following briefly describes how to use data reporting with the 30000 port.

### 2. Data definition of port 30000 <a href="#1.-introduction" id="1.-introduction"></a>

| Items                            | Type | First byte | Last byte | Length | Unit    | Description       |
| -------------------------------- | ---- | ---------- | --------- | ------ | ------- | ----------------- |
| Number of bytes                  | U32  | 1          | 4         | 4      |         |                   |
| Timestamp                        | U64  | 5          | 12        | 8      | μs      |                   |
| Raw Data of 6-Aixs Torque Sensor | FP32 | 689        | 712       | 24     | N & N·m | \[x,y,z,rx,ry,rz] |

&#x20;   &#x20;
