# Copy of Register (General)

## Joint motion (P2P motion)

**Register23（0x17）**

Request:

00 01 00 02 00 29 17 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C2 B8 B2 3E 58 A0 0B 41 00 00 00 00

| Transaction ID                                         | 2 Bytes | u16  | 0x00,0x01           |
| ------------------------------------------------------ | ------- | ---- | ------------------- |
| Protocol                                               | 2 Bytes | u16  | 0x00,0x02           |
| Length                                                 | 2 Bytes | u16  | 0x00,0x29           |
| Register                                               | 1 Byte  | u8   | 0x17                |
| Joint1（J1=π/3）                                         | 4 Bytes | fp32 | 0x92,0x0A,0x86,0x3F |
| Joint2（J2=0）                                           | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| Joint3（J3=0）                                           | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| Joint4（J4=0）                                           | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| Joint5（J5=0）                                           | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| Joint6（J6=0）                                           | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| Joint7（J7=0）                                           | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| <p>Parameter8</p><p>(speed=20*π/180rad/s)</p>          | 4 Bytes | fp32 | 0xC2,0xB8,0xB2,0x3E |
| <p>Parameter9</p><p>(acceleration=500*π/180rad/s2）</p> | 4 Bytes | fp32 | 0x58,0xA0,0x0B,0x41 |
| <p>Parameter10</p><p>(motion time=0)</p>               | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |

Response:

00 01 00 02 00 04 17 00 00 01

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x04 |
| Register       | 1 Byte  | u8  | 0x17      |
| State          | 1 Byte  | u8  | 0x00      |
| Parameter      | 2 Bytes | u16 | 0x00,0x01 |

##

## Set the maximum acceleration of TCP motion

**Register32（0x20）**

Request:

&#x20;00 01 00 02 00 05 20 00 00 7A 44

| Transaction ID                | 2 Bytes | u16  | 0x00,0x01           |
| ----------------------------- | ------- | ---- | ------------------- |
| Protocol                      | 2 Bytes | u16  | 0x00,0x02           |
| Length                        | 2 Bytes | u16  | 0x00,0x05           |
| Register                      | 1 Byte  | u8   | 0x20                |
| Parameter1 (maxacc=1000mm/s2) | 4 Bytes | fp32 | 0x00,0x00,0x7A,0x44 |

Response:

00 01 00 02 00 04 20 00 00 01

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x04 |
| Register       | 1 Byte  | u8  | 0x20      |
| State          | 1 Byte  | u8  | 0x00      |
| Parameter      | 2 Bytes | u16 | 0x00,0x01 |



## Get Cartesian position

**Register41（0x29）**

Request:

00 01 00 02 00 01 29

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x01 |
| Register       | 1 Byte  | u8  | 0x29      |

Response:

00 01 00 02 00 1A 29 00 00 00 4F 43 5F F1 23 29 00 00 E0 42 DB 0F 49 C0 00 00 00 80 00 00 00 09

| Transaction ID      | 2 Bytes | u16  | 0x00,0x01           |
| ------------------- | ------- | ---- | ------------------- |
| Protocol            | 2 Bytes | u16  | 0x00,0x02           |
| Length              | 2 Bytes | u16  | 0x0,0x1A            |
| Register            | 1 Byte  | u8   | 0x29                |
| State               | 1 Byte  | u8   | 0x00                |
| Parameter1(x=207mm) | 4 Bytes | fp32 | 0x00,0x00,0x4F,0x43 |
| Parameter2(y=0mm)   | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| Parameter3(z=112mm) | 4 Bytes | fp32 | 0x00,0x00,0xE0,0x42 |
| Parameter4(roll=π)  | 4 Bytes | fp32 | 0xDB,0x0F,0x49,0x40 |
| Parameter5(pitch=0) | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| Parameter6(yaw=0)   | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |



## Linear motion of the target in the axis angle posture

**Register92（0x5C）**

Request

00 01 00 02 00 27 5C 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 DB 0F C9 40 00 00 C8 42 00 00 FA 44 00 00 00 00 00 01

| Transaction ID                                                                                                                                                                                                                                                                                   | 2 Bytes | u16  | 0x00,0x01           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | ---- | ------------------- |
| Protocol                                                                                                                                                                                                                                                                                         | 2 Bytes | u16  | 0x00,0x02           |
| Length (parameter length+1)（ParameterLength (parameter length+1)+1）                                                                                                                                                                                                                              | 2 Bytes | u16  | 0x00,0x27           |
| Register                                                                                                                                                                                                                                                                                         | 1 Byte  | u8   | 0x5C                |
| Parameter1(X=0mm)                                                                                                                                                                                                                                                                                | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| Parameter2(Y=0mm)                                                                                                                                                                                                                                                                                | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| Parameter3(Z=0mm)                                                                                                                                                                                                                                                                                | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| Parameter4(Rx=0)                                                                                                                                                                                                                                                                                 | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| Parameter5(Ry=0)                                                                                                                                                                                                                                                                                 | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| Parameter6(Rz=2π)                                                                                                                                                                                                                                                                                | 4 Bytes | fp32 | 0xDB,0x0F,0xC9,0x40 |
| <p>Parameter7</p><p>(speed=100mm/s)</p>                                                                                                                                                                                                                                                          | 4 Bytes | fp32 | 0x00,0x00,0xC8,0x42 |
| <p>Parameter8</p><p>(acceleration=2000mm/s2))</p>                                                                                                                                                                                                                                                | 4 Bytes | fp32 | 0x00,0x00,0xFA,0x44 |
| Parameter9(motion time=0)                                                                                                                                                                                                                                                                        | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| <p>Parameter10</p><p>(Motion coordinate system)</p><p>0 represents base coordinate system motion</p><p>1 represents tool coordinate system motion</p>                                                                                                                                            | 1 Byte  | u8   |  0x00               |
| <p>Parameter11</p><p>(absolute pose)If the motion coordinate system is the base coordinate system</p><p>0 represents the given pose is an absolute pose 1 represents the given pose is a relative pose (the given parameters 1-6 coordinates are based on the current an offset of position)</p> | 1 Byte  | u8   | 0x01                |

Response:

00 01 00 02 00 04 5C 00 00 01



## The operation triggered by the position of the general digital IO of the control box

**Register145（0x91）**

Request:

00 01 00 02 00 13 91 00 01 00 00 96 43 00 00 00 00 00 00 96 43 00 00 40 40

| Transaction ID                         | 2 Bytes | u16  | 0x00,0x01           |
| -------------------------------------- | ------- | ---- | ------------------- |
| Protocol                               | 2 Bytes | u16  | 0x00,0x02           |
| Length                                 | 2 Bytes | u16  | 0x00,0x13           |
| Register                               | 1 Byte  | u8   | 0x91                |
| Parameter1(iomum=0)                    | 1 Byte  | u8   | 0x00                |
| Parameter2(on-off：on(1) )              | 1 Byte  | u8   | 0x01                |
| Parameter3（x=300）                      | 4 Bytes | fp32 | 0x00,0x00,0x96,0x43 |
| Parameter4（y=0）                        | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| Parameter5（z=300）                      | 4 Bytes | fp32 | 0x00,0x00,0x96,0x43 |
| Parameter6（Tolerance radius（tol\_r）=3） | 4 Bytes | fp32 | 0x00,0x00,0x40,0x40 |

Response:

00 01 00 02 00 02 91 00

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x02 |
| Register       | 1 Byte  | u8  | 0x91      |
| State          | 1 Byte  | u8  | 0x00      |







