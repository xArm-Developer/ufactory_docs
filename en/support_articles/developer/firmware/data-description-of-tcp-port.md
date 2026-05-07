---
description: We use 30000, 30001, 30002, 30003 for TCP data reporting.
---

# Data Description of TCP port

### 1. Port 30000

#### Firmware: V2.7.101 or later

#### Frequency: 250HZ (200HZ with FT sensor)

| Items                                 | Type  | Bytes   | Length | Big_endian | Description                                                  |
| ------------------------------------- | ----- | ------- | ------ | ---------- | ------------------------------------------------------------ |
| Number of bytes                       | U32   | 1-4     | 4      | Big        |                                                              |
| Timestamp                             | U64   | 5-12    | 8      | Big        | us                                                           |
| Motion Status and Mode                | U8    | 13      | 1      | Big        | Bits 0-3: Motion State; <br />Bits 4-7: Motion Mode.         |
| Number of Cached Commands             | U16   | 14-15   | 2      | Big        |                                                              |
| Reserved for System Information       | U16   | 16-32   | 17     | Big        |                                                              |
| Target Joint Positions                | FP32  | 33-60   | 28     | Little     | rad                                                          |
| Target Joint Velocities               | FP32  | 61-88   | 28     | Little     | rad/s                                                        |
| Target Joint Accelerations            | FP32  | 89-116  | 28     | Little     | rad/s²                                                       |
| Actual Joint Positions                | FP32  | 117-144 | 28     | Little     | rad                                                          |
| Actual Joint Velocities               | FP32  | 145-172 | 28     | Little     | rad/s                                                        |
| Actual Joint Accelerations            | FP32  | 173-200 | 28     | Little     | rad/s²                                                       |
| Actual Joint Currents                 | FP32  | 201-228 | 28     | Little     | A                                                            |
| Estimated Joint Torques               | FP32  | 229-256 | 28     | Little     | N·m                                                          |
| Reserved for Joints                   | FP32  | 257-424 | 168    | Little     |                                                              |
| Target TCP Pose                       | FP32  | 425-448 | 24     | Little     | mm & rad                                                     |
| Target TCP Speed                      | FP32  | 449-472 | 24     | Little     | mm/s & rad/s                                                 |
| Actual TCP Pose                       | FP32  | 473-496 | 24     | Little     | mm &rad>[x,y,z,rx,ry,rz]                                     |
| Actual TCP Speed                      | FP32  | 497-520 | 24     | Little     | mm/s & rad/s                                                 |
| Estimated TCP Torques                 | FP32  | 521-544 | 24     | Little     | N & N·m                                                      |
| Target TCP Accelerations              | FP32  | 545-568 | 24     | Little     | mm/s² & rad/s²                                               |
| Actual TCP Accelerations              | FP32  | 569-592 | 24     | Little     | mm/s² & rad/s²                                               |
| Reserved for Cartesian                | FP32  | 593-688 | 96     | Little     |                                                              |
| Raw Data of 6-Axis Torque Sensor      | FP32  | 689-712 | 24     | Little     | N & N·m [Fx,Fy,Fz,Tx,Ty,Tz]                                  |
| Filtered Data of 6-Axis Torque Sensor | FP32  | 713-736 | 24     | Little     | N & N·m [Fx,Fy,Fz,Tx,Ty,Tz]                                  |
| Gripper Type                          | U8    | 737     | 1      | Big        | 0：No End Effector，<br />1：Gripper，<br />2：Gripper G2，<br />3：BIO Gripper G2，<br /> |
| Griper State                          | U8    | 738     | 1      | Big        | Status of  Gripper. <br />For Robotiq grippers, the status is determined by bits 6 and 7.<br />0: In motion, no object detected.<br />1: Object detected while opening (contact made before reaching the target position).<br />2: Object detected while closing (contact made before reaching the target position).<br />3: Target position reached (no object detected or object lost). |
| Gripper Position                      | INT16 | 739-740 | 2      | Big        | mm                                                           |
| Gripper Speed                         | INT16 | 741-742 | 2      | Big        | mm/s                                                         |
| Gripper Current or Force              | INT16 | 743-744 | 2      | Big        | mA                                                           |
| Reserved for External Devices         | NA    | 745-784 | 40     |            |                                                              |


### 2. Port 30001

#### Firmware: V1.8.0+

#### Frequency: 5HZ

<table><thead><tr><th width="273">Items</th><th width="82">Type</th><th width="102">Bytes</th><th width="88">Length</th><th width="202">Description</th></tr></thead><tbody><tr><td>Same as port 30003</td><td>-</td><td>1-87</td><td>-</td><td></td></tr><tr><td>Brake status</td><td>U8</td><td>88</td><td>1</td><td></td></tr><tr><td>Enable status</td><td>U8</td><td>89</td><td>1</td><td>0:disable  1:enable</td></tr><tr><td>Error code</td><td>U8</td><td>90</td><td>1</td><td></td></tr><tr><td>Warning code</td><td>U8</td><td>91</td><td>1</td><td></td></tr><tr><td>Tcp offset</td><td>FP32</td><td>92-115</td><td>24</td><td></td></tr><tr><td>Tcp payload</td><td>FP32</td><td>116-131</td><td>16</td><td></td></tr><tr><td>Collision detection sensitivity</td><td>U8</td><td>132</td><td>1</td><td></td></tr><tr><td>Teaching sensitivity</td><td>U8</td><td>133</td><td>1</td><td></td></tr><tr><td>Mounting way</td><td>FP32</td><td>134-145</td><td>12</td><td>Gravity direction(x,y,z)</td></tr></tbody></table>

### 3. Port 30002

#### Firmware: V1.8.0+

#### Frequency: 5HZ

<table><thead><tr><th width="227">Items</th><th width="82">Type</th><th width="113">Bytes</th><th width="84">Length</th><th width="202">Description</th></tr></thead><tbody><tr><td>Same as port 30001</td><td>-</td><td>1-145</td><td>-</td><td></td></tr><tr><td>Robot type</td><td>U8</td><td>146</td><td>1</td><td>5/6/7</td></tr><tr><td>The number of Joint</td><td>U8</td><td>147</td><td>1</td><td>5/6/7</td></tr><tr><td>Master ID</td><td>U8</td><td>148</td><td>1</td><td>0xAA fixed</td></tr><tr><td>Slaver ID</td><td>U8</td><td>149</td><td>1</td><td>0x55 fixed</td></tr><tr><td>-</td><td>-</td><td>150</td><td>1</td><td>Reserved</td></tr><tr><td>-</td><td>-</td><td>151</td><td>1</td><td>Reserved</td></tr><tr><td>Firmware Version</td><td></td><td>152-181</td><td>30</td><td></td></tr><tr><td>Tcp Jerk</td><td>FP32</td><td>182-201</td><td>20</td><td><p>current tcp jerk, </p><p>min tcp acc, max tcp acc,min tcp speed,</p><p>max tcp speed</p></td></tr><tr><td>Joint Jerk</td><td>FP32</td><td>202-221</td><td>20</td><td><p>current joint jerk, </p><p>min joint acc, max joint acc,min joint speed,max joint speed</p></td></tr><tr><td>Acceleration and Jerk for orientation change</td><td>FP32</td><td>222-229</td><td>8</td><td>Unconfigurable</td></tr><tr><td>Joint servo error code</td><td>U8</td><td>230-243</td><td>14</td><td></td></tr><tr><td>End IO error code</td><td>U8</td><td>244-245</td><td>2</td><td></td></tr><tr><td>Joint Temperature</td><td>int8</td><td>246-252</td><td>7</td><td></td></tr><tr><td>Target Tcp Speed</td><td>FP32</td><td>253-256</td><td>4</td><td>mm/s</td></tr><tr><td>Target Joint Speed</td><td>FP32</td><td>257-284</td><td>28</td><td>rad/s</td></tr><tr><td>Counter</td><td>U32</td><td>285-288</td><td>4</td><td></td></tr><tr><td>Usr Coordinates</td><td>FP32</td><td>289-312</td><td>24</td><td><p>mm &#x26; rad</p><p>[x,y,z,roll,pitch,yaw]</p></td></tr><tr><td><p>Configurable Controller</p><p>Output</p></td><td>U8</td><td>313</td><td>1</td><td>Clear the controller ouput when robot is stopped</td></tr><tr><td>Configurable Tool Output</td><td>U8</td><td>314</td><td>1</td><td>Clear the tool ouput when robot is stopped</td></tr><tr><td>Simulation Robot</td><td>U8</td><td>315</td><td>1</td><td></td></tr><tr><td>Self-collision Detection</td><td>U8</td><td>316</td><td>1</td><td></td></tr><tr><td>Self-collision tool type</td><td>U8</td><td>317</td><td>1</td><td></td></tr><tr><td>Self-collision model parameters</td><td>FP32</td><td>318-341</td><td>24</td><td>mm [x,y,z]</td></tr><tr><td>Joint Voltage</td><td>U16</td><td>342-355</td><td>14</td><td>Value has been *100</td></tr><tr><td>Joint Current</td><td>FP32</td><td>356-383</td><td>28</td><td>Ampere</td></tr><tr><td>GPIO module status</td><td>U8</td><td>384</td><td>1</td><td>0: normal  3: error 6:communication failed</td></tr><tr><td>Error code of GPIO module</td><td>U8</td><td>385</td><td>1</td><td></td></tr><tr><td>Digital input function IO status</td><td>U16</td><td>386-387</td><td>2</td><td></td></tr><tr><td>Digital input configuration IO status</td><td>U16</td><td>388-389</td><td>2</td><td></td></tr><tr><td>Digital output function IO status</td><td>U16</td><td>390-391</td><td>2</td><td></td></tr><tr><td>Digital output configuration IO status</td><td>U16</td><td>392-393</td><td>2</td><td></td></tr><tr><td>Analog input 1</td><td>U16</td><td>394-395</td><td>2</td><td></td></tr><tr><td>Analog input 2</td><td>U16</td><td>396-397</td><td>2</td><td></td></tr><tr><td>Analog output 1</td><td>U16</td><td>398-399</td><td>2</td><td></td></tr><tr><td>Analog output 2</td><td>U16</td><td>400-401</td><td>2</td><td></td></tr><tr><td>Digital input IO config information(CI0-7)</td><td>U8</td><td>402-409</td><td>8</td><td></td></tr><tr><td>Digital output IO config information(CO0-7)</td><td>U8</td><td>410-417</td><td>8</td><td></td></tr><tr><td>Digital input IO config information(DI0-7)</td><td>U8</td><td>418-425</td><td>8</td><td></td></tr><tr><td>Digital output IO config information(DO0-7)</td><td>U8</td><td>426-433</td><td>8</td><td></td></tr><tr><td>Filtered Data of FT sensor</td><td>FP32</td><td>434-457</td><td>24</td><td><p>N &#x26; N·m</p><p>[Fx,Fy,Fz,Tx,Ty,Tz]</p></td></tr><tr><td>Raw Data of FT sensor</td><td>FP32</td><td>458-481</td><td>24</td><td><p>N &#x26; N·m</p><p>[Fx,Fy,Fz,Tx,Ty,Tz]</p></td></tr><tr><td>Tcp identification progress</td><td>U8</td><td>482</td><td>1</td><td>percentage</td></tr><tr><td>Current Axis angle</td><td>FP32</td><td>483-494</td><td>12</td><td>Rx,Ry,Rz</td></tr><tr><td>Settings config</td><td>U8</td><td>495</td><td>1</td><td><p>bit0: Reduced Mode bit1: Safety Boundary bit2: report current/torque bit3:approximate solution </p><p>bit4: cartesian motion velocity continuous</p></td></tr><tr><td>Reduced Mode</td><td>U8</td><td>496</td><td>1</td><td>0:disable  1:enable</td></tr><tr><td>Safety Boundary</td><td>Int16</td><td>497-508</td><td>12</td><td><p>mm</p><p>[x_max,x_min,y_max,</p><p>y_min,z_max,z_min]</p></td></tr><tr><td>Max TCP Speed</td><td>FP32</td><td>509-512</td><td>4</td><td>mm/s</td></tr><tr><td>Max Joint Speed</td><td>FP32</td><td>513-516</td><td>4</td><td>rad/s</td></tr></tbody></table>

### 4. Port 30003

#### Firmware: V1.8.0+

#### Frequency: 100HZ

<table><thead><tr><th width="284">Items</th><th width="82">Type</th><th width="90">Bytes</th><th width="89">Length</th><th width="202">Description</th></tr></thead><tbody><tr><td>Number of Bytes</td><td>U32</td><td>1-4</td><td>4</td><td></td></tr><tr><td>Motion status and Mode</td><td>U8</td><td>5</td><td>1</td><td>Bits 0-3: Motion State;<br/> Bits 4-7: Motion Mode.</td></tr><tr><td>Number of Cached Commands</td><td>U16</td><td>6-7</td><td>2</td><td></td></tr><tr><td>Target Joint Angle</td><td>FP32</td><td>8-35</td><td>28</td><td></td></tr><tr><td>Target TCP Pose</td><td>FP32</td><td>36-59</td><td>24</td><td></td></tr><tr><td>Joint Torque</td><td>FP32</td><td>60-87</td><td>28</td><td></td></tr><tr><td>Filtered Data of FT sensor</td><td>FP32</td><td>88-111</td><td>24</td><td><p>N &#x26; N·m</p><p>[Fx,Fy,Fz,Tx,Ty,Tz]</p></td></tr><tr><td>Raw Data of FT sensor</td><td>FP32</td><td>112-135</td><td>24</td><td><p>N &#x26; N·m</p><p>[Fx,Fy,Fz,Tx,Ty,Tz]</p></td></tr></tbody></table>
