---
description: >-
  For simplified Chinese version: 简体中文版 For UFACTORY Lite 6 users, make sure you
  have followed the instructions before chapter 4.7 on this page, then switch to
  ReadMe for Lite6. For kinetic users, pleas
---

# ReadMe\_en

### 1. Introduction <a href="#1.-introduction" id="1.-introduction"></a>

&#x20;   We provide TCP port 30000 to get the robot data in real-time, **the frequency is 200HZ**. The following briefly describes how to use data reporting with the 30000 port.

### 2. Data definition of port 30000 <a href="#1.-introduction" id="1.-introduction"></a>

&#x20;    Firmware version: V2.0.3 or later

| Items                                 | Type | First byte | Last byte | Length | Unit         | Description       |
| ------------------------------------- | ---- | ---------- | --------- | ------ | ------------ | ----------------- |
| Number of bytes                       | U32  | 1          | 4         | 4      |              |                   |
| Timestamp                             | U64  | 5          | 12        | 8      | μs           |                   |
| Motion Status and Mode                | U8   | 13         | 13        | 1      |              |                   |
| Number of Cached Commands             | U16  | 14         | 15        | 2      |              |                   |
| Reserved for System Information       | U16  | 16         | 32        | 17     |              |                   |
| Target Joint Positions                | FP32 | 33         | 60        | 28     | rad          |                   |
| Target Joint Velocities               | FP32 | 61         | 88        | 28     | rad/s        |                   |
| Target Joint Accelerations            | FP32 | 89         | 116       | 28     | rad/s²       |                   |
| Actual Joint Positions                | FP32 | 117        | 144       | 28     | rad          |                   |
| Actual Joint Velocities               | FP32 | 145        | 172       | 28     | rad/s        |                   |
| Actual Joint Accelerations            | FP32 | 173        | 200       | 28     | rad/s²       |                   |
| Actual Joint Currents                 | FP32 | 201        | 228       | 28     | A            |                   |
| Estimated Joint Torques               | FP32 | 229        | 256       | 28     | N            |                   |
| Reserved for Joints                   | FP32 | 257        | 424       | 168    |              |                   |
| Target TCP Pose                       | FP32 | 425        | 448       | 24     | mm & rad     | \[x,y,z,rx,ry,rz] |
| Target TCP Speed                      | FP32 | 449        | 472       | 24     | mm/s & rad/s |                   |
| Actual TCP Pose                       | FP32 | 473        | 496       | 24     | mm \&rad     | \[x,y,z,rx,ry,rz] |
| Actual TCP Speed                      | FP32 | 497        | 520       | 24     | mm/s & rad/s |                   |
| Estimated TCP Torques                 | FP32 | 521        | 544       | 24     | N & N·m      |                   |
| Reserved for Cartesian                | FP32 | 545        | 688       | 144    |              |                   |
| Raw Data of 6-Aixs Torque Sensor      | FP32 | 689        | 712       | 24     | N & N·m      | \[x,y,z,rx,ry,rz] |
| Filtered Data of 6-Aixs Torque Sensor | FP32 | 713        | 736       | 24     | N & N·m      | \[x,y,z,rx,ry,rz] |
| Reserved for External Devices         | FP32 | 737        | 784       | 48     |              |                   |

&#x20;   &#x20;
