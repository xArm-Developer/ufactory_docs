# Copy of Public Port Section（0-10）

## Get version information

**Register：1(0x01)**

Request：

00 01 00 02 00 01 01&#x20;

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x01 |
| Register       | 1 Byte  | u8  | 0x01      |

Response:&#x20;

00 01 00 02 00 2A 01 00 36 2C 36 2C 58 49 31 32 30 32 2C 41 43 31 33 30 32 2C 76 31 2E 31 32 2E 31 30 00 00 00 00 00 00 00 00 00 00 00 00 00 00

| Transaction ID                           | 2 Bytes | u16   | 0x00,0x01                                                                            |
| ---------------------------------------- | ------- | ----- | ------------------------------------------------------------------------------------ |
| Protocol                                 | 2 Bytes | u16   | 0x00,0x02                                                                            |
| Length                                   | 2 Bytes | u16   | 0x00,0x02                                                                            |
| Register                                 | 1 Byte  | u8    | 0x01                                                                                 |
| State                                    | 1 Byte  | u8    | 0x00                                                                                 |
| <p>Type and Axes</p><p>( 6,6,)</p>       | n Byte  | n\*u8 | 0x36 ,0x2C ,0x36 ,0x2C                                                               |
| <p>xArm Version</p><p>(XI1202,)</p>      | n Byte  | n\*u8 | 0x58 ,0x49, 0x31, 0x32, 0x30 ,0x32 ,0x2C                                             |
| Control Box Version(AC1302,)             | n Byte  | n\*u8 | 0x41 ,0x43, 0x31, 0x33, 0x30, 0x32, 0x2C                                             |
| <p>Firmware Version</p><p>(v1.12.10)</p> | n Byte  | n\*u8 | 0x76, 0x31 ,0x2E, 0x31, 0x32, 0x2E, 0x31, 0x30                                       |
| null                                     |         | n\*u8 | 0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 , |





## Get SN information

**Register：2(0x02)**

Request:

&#x20;00 01 00 02 00 01 02

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x01 |
| Register       | 1 Byte  | u8  | 0x02      |

> SN of robot and control box：
>
> XI120204201B02 AC130202B02L02

Response:

00 01 00 02 00 2A 02 00 58 49 31 32 30 32 30 34 32 30 31 42 30 32 00 41 43 31 33 30 32 30 32 42 30 32 4C 30 32 0A 00 00 00 00 00 00 00 00 00 00

| Transaction ID                                  | 2 Bytes | u16   | 0x00,0x01                                                                          |
| ----------------------------------------------- | ------- | ----- | ---------------------------------------------------------------------------------- |
| Protocol                                        | 2 Bytes | u16   | 0x00,0x02                                                                          |
| Length                                          | 2 Bytes | u16   | 0x00,0x02                                                                          |
| Register                                        | 1 Byte  | u8    | 0x02                                                                               |
| State                                           | 1 Byte  | u8    | 0x00                                                                               |
| <p>SN of robot</p><p>(XI120204201B02)</p>       | n Btye  | n\*u8 | 0x58 ,0x49 ,0x31 ,0x32 ,0x30 ,0x32 ,0x30 ,0x34 ,0x32 ,0x30 ,0x31 ,0x42 ,0x30 ,0x32 |
| <p>SN of Control Box</p><p>(AC130202B02L02)</p> | n Byte  | n\*u8 | 0x41,0x43 0x31 0x33 0x30 0x32 0x30 0x32 ,0x42 ,0x30 ,0x32 ,0x4C,0x30,   0x32, 0x0A |



## Reload friction parameters

**Register：4(0x04)**

Request:

00 01 00 02 00 01 04

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x01 |
| Register       | 1 Byte  | u8  | 0x04      |

Response:

00 01 00 02 00 02 04 10

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x02 |
| Register       | 1 Byte  | u8  | 0x04      |
| State          | 1 Byte  | u8  | 0x10      |



## Get the value of Joint torque or actual current

**Register: 5(0x05)**

Request:

00 01 00 02 00 01 05

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x01 |
| Register       | 1 Byte  | u8  | 0x05      |

Response:

00 01 00 02 00 03 05 00 00

| Transaction ID                                                                                                                                     | 2 Bytes               | u16              | 0x00,0x01          |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ---------------- | ------------------ |
| Protocol                                                                                                                                           | 2 Bytes               | u16              | 0x00,0x02          |
| Length                                                                                                                                             | 2 Bytes               | u16              | 0x00,0x03          |
| Register                                                                                                                                           | 1 Byte                | u8               | 0x05               |
| State                                                                                                                                              | 1 Byte                | u8               | 0x00               |
| <p>Parameter 1 </p><p>(Value of theoretical joint torque)</p><p>0: Value of theoretical joint torque</p><p>1: Value of actual current of servo</p> | <p>1 Byte</p><p> </p> | <p>u8</p><p></p> | <p></p><p>0x00</p> |



## Get the radius of rotation of the target joint relative to the TCP

**Register：6(0x06)**

Request:

00 01 00 02 00 02 06 06

| Transaction ID              | 2 Bytes | u16 | 0x00,0x01 |
| --------------------------- | ------- | --- | --------- |
| Protocol                    | 2 Bytes | u16 | 0x00,0x02 |
| Length                      | 2 Bytes | u16 | 0x00,0x02 |
| Register                    | 1 Byte  | u8  | 0x06      |
| Parameter 1(target joint:6) | 1 Byte  | U8  | 0x06      |

Response:

00 01 00 02 00 06 06 10 00 00 00 00

| Transaction ID                                | 2 Bytes | u16  | 0x00,0x01           |
| --------------------------------------------- | ------- | ---- | ------------------- |
| Protocol                                      | 2 Bytes | u16  | 0x00,0x02           |
| Length                                        | 2 Bytes | u16  | 0x00,0x06           |
| Register                                      | 1 Byte  | u8   | 0x06                |
| State                                         | 1 Byte  | u8   | 0x00                |
| <p>Parameter 1</p><p>(Radius of rotation)</p> | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |



## Remote shut down the operating system

**Register10（0x0A）**

Request

00 01 00 02 00 02 0A 01

| Transaction ID                                                                              | 2 Bytes | u16 | 0x00,0x01           |
| ------------------------------------------------------------------------------------------- | ------- | --- | ------------------- |
| Protocol                                                                                    | 2 Bytes | u16 | 0x00,0x02           |
| Length                                                                                      | 2 Bytes | u16 | 0x00,0x02           |
| Register                                                                                    | 1 Byte  | u8  | 0x0A                |
| <p>Parameter1</p><p>1: remote shut down the operating system temporarily</p><p>2:reboot</p> | 1 Byte  | u8  | <p> </p><p>0x01</p> |

Response:

00 01 00 02 00 02 0A 00 00 01

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x04 |
| Register       | 1 Byte  | u8  | 0x0A      |
| State          | 1 Byte  | u8  | 0x00      |
| Parameter      | 2 Bytes | u16 | 0x00,0x01 |

























