# Copy of Basic Motion(21-30)

## Cartesian linear motion

**Register21（0x15）**

Request:

00 01 00 02 00 25 15 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 42 00 00 FA 44 00 00 00 00

| Transaction ID                                                    | 2 Bytes | u16  | 0x00,0x01                          |
| ----------------------------------------------------------------- | ------- | ---- | ---------------------------------- |
| Protocol                                                          | 2 Bytes | u16  | 0x00,0x02                          |
| Length                                                            | 2 Bytes | u16  | 0x00,0x25                          |
| Register                                                          | 1 Byte  | u8   | 0x15                               |
| Parameter1(x=400mm)                                               | 4 Bytes | fp32 | 0x00,0x00,0xC8,0x43                |
| Parameter2(y=0mm)                                                 | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00                |
| Parameter3(z=200mm)                                               | 4 Bytes | fp32 | 0x00,0x00,0x48,0x43                |
| Parameter4(roll=π)                                                | 4 Bytes | fp32 | 0xDB,0x0F,0x49,0x40                |
| Parameter5(pitch=0)                                               | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00                |
| Parameter6(yaw=0)                                                 | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00                |
| Parameter8(speed=100mm/s)                                         | 4 Bytes | fp32 | 0x00,0x00,0xC8,0x42                |
| <p>Parameter9</p><p>(acceleration=2000mm/s2）=500*π/180rad/s2)</p> | 4 Bytes | fp32 | <p> </p><p>0x00,0x00,0xFA,0x44</p> |
| Parameter10(motion time=0)                                        | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00                |

Response:

00 01 00 02 00 04 15 00 00 01

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x04 |
| Register       | 1 Byte  | u8  | 0x15      |
| State          | 1 Byte  | u8  | 0x00      |
| Parameter      | 2 Bytes | u16 | 0x00,0x01 |



## Linear motion with circular arc

**Register：22 (0x16)**

Request:

00 01 00 02 00 29 16 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 42 00 00 FA 44 00 00 00 00 00 00 48 42

| Transaction ID                                        | 2 Bytes                | u16                 | 0x00,0x01           |
| ----------------------------------------------------- | ---------------------- | ------------------- | ------------------- |
| Protocol                                              | 2 Bytes                | u16                 | 0x00,0x02           |
| Length (parameter length+1)                           | 2 Bytes                | u16                 | 0x00,0x29           |
| Register                                              | 1 Byte                 | u8                  | 0x16                |
| Parameter1(x=400mm)                                   | 4 Bytes                | fp32                | 0x00,0x00,0xC8,0x43 |
| Parameter2(y=0mm)                                     | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| Parameter3(z=200mm)                                   | 4 Bytes                | fp32                | 0x00,0x00,0x48,0x43 |
| Parameter4(roll=π)                                    | 4 Bytes                | fp32                | 0xDB,0x0F,0x49,0x40 |
| Parameter5(pitch=0)                                   | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| Parameter6(yaw=0)                                     | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| <p>Parameter7</p><p> (motion speed=100 mm/s)</p>      | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 0x00,0x00,0xC8,0x42 |
| Parameter8 (acceleration=2000mm/s2 )                  | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 0x00,0x00,0xFA,0x44 |
| Parameter9 (motion time (0))                          | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| <p>Parameter10</p><p> (Arc blending radius=50 mm)</p> | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 0x00,0x00,0x48,0x42 |

Response:

00 01 00 02 00 04 16 00 00 01

| Transaction ID                                                 | 2 Bytes                | u16                | 0x00,0x01 |
| -------------------------------------------------------------- | ---------------------- | ------------------ | --------- |
| Protocol                                                       | 2 Bytes                | u16                | 0x00,0x02 |
| Length                                                         | 2 Bytes                | u16                | 0x00,0x04 |
| Register                                                       | 1 Byte                 | u8                 | 0x16      |
| State                                                          | 1 Byte                 | u8                 | 0x00      |
| <p>Parameter1</p><p>(The number of commands in the buffer)</p> | <p>2 Bytes</p><p> </p> | <p>u16</p><p> </p> | 0x00,0x01 |





## Joint motion (P2P motion)

**Register23（0x17）**

Request:

00 01 00 02 00 29 17 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C2 B8 B2 3E 58 A0 0B 41 00 00 00 00

| Transaction ID                                        | 2 Bytes                | u16                 | 0x00,0x01           |
| ----------------------------------------------------- | ---------------------- | ------------------- | ------------------- |
| Protocol                                              | 2 Bytes                | u16                 | 0x00,0x02           |
| Length                                                | 2 Bytes                | u16                 | 0x00,0x29           |
| Register                                              | 1 Byte                 | u8                  | 0x17                |
| Joint1（J1= π/3）                                       | 4 Bytes                | fp32                | 0x92,0x0A,0x86,0x3F |
| Joint2（J2=0）                                          | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| Joint3（J3=0）                                          | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| Joint4（J4=0）                                          | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| Joint5（J5=0）                                          | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| Joint6（J6=0）                                          | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| Joint7（J7=0）                                          | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| Parameter8(speed=20\*π/180rad/s)                      | 4 Bytes                | fp32                | 0xC2,0xB8,0xB2,0x3E |
| <p>Parameter9</p><p>(acceleration500*π/180rad/s2）</p> | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 0x58,0xA0,0x0B,0x41 |
| Parameter10(motion time=0)                            | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |

Response:

00 01 00 02 00 04 17 00 00 01

| Transaction ID                                                 | 2 Bytes                | u16                | 0x00,0x01 |
| -------------------------------------------------------------- | ---------------------- | ------------------ | --------- |
| Protocol                                                       | 2 Bytes                | u16                | 0x00,0x02 |
| Length                                                         | 2 Bytes                | u16                | 0x00,0x04 |
| Register                                                       | 1 Byte                 | u8                 | 0x17      |
| State                                                          | 1 Byte                 | u8                 | 0x00      |
| <p>Parameter1</p><p>(The number of commands in the buffer)</p> | <p>2 Bytes</p><p> </p> | <p>u16</p><p> </p> | 0x00,0x01 |



&#x20;



## Joint motion with circular arc

**Register：24 (0x18)**

Request:

00 01 00 02 00 29 18 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C2 B8 B2 3E 58 A0 0B 41 00 00 020 41

| Transaction ID                                        | 2 Bytes | u16  | 0x00,0x01            |
| ----------------------------------------------------- | ------- | ---- | -------------------- |
| Protocol                                              | 2 Bytes | u16  | 0x00,0x02            |
| Length (parameter length+1)                           | 2 Bytes | u16  | 0x00,0x29            |
| Register                                              | 1 Byte  | u8   | 0x18                 |
| Joint1（J1= π/3）                                       | 4 Bytes | fp32 | 0x92,0x0A,0x86,0x3F  |
| Joint2（J2=0）                                          | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00  |
| Joint3（J3=0）                                          | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00  |
| Joint4（J4=0）                                          | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00  |
| Joint5（J5=0）                                          | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00  |
| Joint6（J6=0）                                          | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00  |
| Joint7（J7=0）                                          | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00  |
| Parameter8(speed=20\*π/180rad/s)                      | 4 Bytes | fp32 | 0xC2,0xB8,0xB2,0x3E  |
| <p>Parameter9</p><p>(acceleration500*π/180rad/s2）</p> | 4 Bytes | fp32 | 0x58,0xA0,0x0B,0x41  |
| <p>Parameter10</p><p>(Arc blending radius=10mm)</p>   | 4 Bytes | fp32 | 0x00,0x00,0x020,0x41 |

Response:

00 01 00 02 00 05 18 00 00 01 00

| Transaction ID                                                 | 2 Bytes | u16 | 0x00,0x01 |
| -------------------------------------------------------------- | ------- | --- | --------- |
| Protocol                                                       | 2 Bytes | u16 | 0x00,0x02 |
| Length (parameter length+1)                                    | 2 Bytes | u16 | 0x00,0x04 |
| Register                                                       | 1 Byte  | u8  | 0x18      |
| State                                                          | 1 Byte  | u8  | 0x00      |
| <p>Parameter1</p><p>(The number of commands in the buffer)</p> | 2 Bytes | u16 | 0x00,0x01 |



## Return to zero position

**Register：25 (0x19)**

Request:

00 01 00 02 00 0D 19 DB 0F 49 40 F3 66 DF 40 00 00 00 00

| Transaction ID                        | 2 Bytes | u16  | 0x00,0x01           |
| ------------------------------------- | ------- | ---- | ------------------- |
| Protocol                              | 2 Bytes | u16  | 0x00,0x02           |
| Length (parameter length+1)           | 2 Bytes | u16  | 0x00,0x0D           |
| Register                              | 1 Byte  | u8   | 0x19                |
| <p>Parameter1</p><p>speed=50rad/s</p> | 4 Bytes | fp32 | 0xDB,0x0F,0x49,0x40 |
| Parameter2（acceleration=600rad/s2）    | 4 Bytes | fp32 | 0xF3,0x66,0xDF,0x40 |
| Parameter3（motion time=0）             | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |

Response:

00 01 00 02 00 04 19 00 00 01

| Transaction ID                                                 | 2 Bytes                | u16                | 0x00,0x01 |
| -------------------------------------------------------------- | ---------------------- | ------------------ | --------- |
| Protocol                                                       | 2 Bytes                | u16                | 0x00,0x02 |
| Length                                                         | 2 Bytes                | u16                | 0x00,0x04 |
| Register                                                       | 1 Byte                 | u8                 | 0x19      |
| State                                                          | 1 Byte                 | u8                 | 0x00      |
| <p>Parameter1</p><p>(The number of commands in the buffer)</p> | <p>2 Bytes</p><p> </p> | <p>u16</p><p> </p> | 0x00,0x01 |



## Pause commands, Command delay

**Register：26(0x1A)**

Request:

00 01 00 02 00 05 1A 00 00 40 40

| Transaction ID                          | 2 Bytes | u16  | 0x00,0x01           |
| --------------------------------------- | ------- | ---- | ------------------- |
| Protocol                                | 2 Bytes | u16  | 0x00,0x02           |
| Length                                  | 2 Bytes | u16  | 0x00,0x05           |
| Register                                | 1 Byte  | u8   | 0x1A                |
| <p>Parameter1</p><p>(Pause time=3s)</p> | 4 Bytes | fp32 | 0x00,0x00,0x40,0x40 |

Response

00 01 00 02 00 04 1A 00 00 01

| Transaction ID                                                 | 2 Bytes                | u16                | 0x00,0x01 |
| -------------------------------------------------------------- | ---------------------- | ------------------ | --------- |
| Protocol                                                       | 2 Bytes                | u16                | 0x00,0x02 |
| Length                                                         | 2 Bytes                | u16                | 0x00,0x04 |
| Register                                                       | 1 Byte                 | u8                 | 0x1A      |
| State                                                          | 1 Byte                 | u8                 | 0x00      |
| <p>Parameter1</p><p>(The number of commands in the buffer)</p> | <p>2 Bytes</p><p> </p> | <p>u16</p><p> </p> | 0x00,0x01 |



## Circular motion

**RRegister：27 (0x1B)**

{% hint style="warning" %}
The motion calculates the trajectory of the space circle according to the three-point coordinates, and the three-point coordinates are (current starting point, parameter 1, parameter 2)
{% endhint %}

Request:

00 01 00 02 00 41 1B 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 43 00 00 C8 42 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 42 00 00 FA 44 00 00 00 00 00 00 48 42

| Transaction ID                                                                            | 2 Bytes | u16  | 0x00,0x01                          |
| ----------------------------------------------------------------------------------------- | ------- | ---- | ---------------------------------- |
| Protocol                                                                                  | 2 Bytes | u16  | 0x00,0x02                          |
| Length (parameter length+1)                                                               | 2 Bytes | u16  | 0x00,0x41                          |
| Register                                                                                  | 1 Byte  | u8   | 0x1B                               |
| Parameter1(x=400mm)                                                                       | 4 Bytes | fp32 | 0x00,0x00,0xC8,0x43                |
| Parameter2(y=0mm)                                                                         | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00                |
| Parameter3(z=200mm)                                                                       | 4 Bytes | fp32 | 0x00,0x00,0x48,0x43                |
| Parameter4(roll=π)                                                                        | 4 Bytes | fp32 | 0xDB,0x0F,0x49,0x40                |
| Parameter5(pitch=0)                                                                       | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00                |
| Parameter6(yaw=0)                                                                         | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00                |
| Parameter7(x=400mm)                                                                       | 4 Bytes | fp32 | 0x00,0x00,0xC8,0x43                |
| Parameter8(y=0mm)                                                                         | 4 Bytes | fp32 | 0x00, 0x00, 0xC8, 0x42             |
| Parameter9(z=200mm)                                                                       | 4 Bytes | fp32 | 0x00,0x00,0x48,0x43                |
| Parameter10(roll=π)                                                                       | 4 Bytes | fp32 | 0xDB,0x0F,0x49,0x40                |
| Parameter11(pitch=0)                                                                      | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00                |
| Parameter12(yaw=0)                                                                        | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00                |
| Parameter13(speed=100mm/s)                                                                | 4 Bytes | fp32 | 0x00,0x00,0xC8,0x42                |
| <p>Parameter14(2000mm/s2)</p><p>(acceleration500*π/180rad/s2)</p>                         | 4 Bytes | fp32 | 0x00,0x00,0xFA,0x44                |
| Parameter15(motion time=0)                                                                | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00                |
| <p>Parameter16</p><p>（Percentage of the length of arc in motion to circumference=50%）</p> | 4 Bytes | fp32 | <p> </p><p>0x00,0x00,0x48,0x42</p> |

Response::

| Transaction ID                                                 | 2 Bytes                | u16                | 0x00,0x01 |
| -------------------------------------------------------------- | ---------------------- | ------------------ | --------- |
| Protocol                                                       | 2 Bytes                | u16                | 0x00,0x02 |
| Length                                                         | 2 Bytes                | u16                | 0x00,0x04 |
| Register                                                       | 1 Byte                 | u8                 | 0x1B      |
| State                                                          | 1 Byte                 | u8                 | 0x00      |
| <p>Parameter1</p><p>(The number of commands in the buffer)</p> | <p>2 Bytes</p><p> </p> | <p>u16</p><p> </p> | 0x00,0x01 |



## Linear motion in tool coordinate system

**Register：28 (0x1C)**

{% hint style="warning" %}
Move in Cartesian linear relative motion based on the current tool coordinate system.
{% endhint %}

Request:

00 01 00 02 00 25 1C 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 C2 B8 B2 3E 00 00 FA 44 00 00 00 00

| Transaction ID                                   | 2 Bytes | u16  | 0x00,0x01           |
| ------------------------------------------------ | ------- | ---- | ------------------- |
| Protocol                                         | 2 Bytes | u16  | 0x00,0x02           |
| Length (parameter length+1)                      | 2 Bytes | u16  | 0x00,0x25           |
| Register                                         | 1 Byte  | u8   | 0x1C                |
| Parameter1(x=400mm)                              | 4 Bytes | fp32 | 0x00,0x00,0xC8,0x43 |
| Parameter2(y=0mm)                                | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| Parameter3(z=200mm)                              | 4 Bytes | fp32 | 0x00,0x00,0x48,0x43 |
| Parameter4(roll=π)                               | 4 Bytes | fp32 | 0xDB,0x0F,0x49,0x40 |
| Parameter5(pitch=0)                              | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| Parameter6(yaw=0)                                | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
| Parameter7(speed=20mm/s)                         | 4 Bytes | fp32 | 0xC2,0xB8,0xB2,0x3E |
| <p>Parameter8</p><p>(acceleration=2000mm/s2）</p> | 4 Bytes | fp32 | 0x00,0x00,0xFA,0x44 |
| Parameter9(motion time=0)                        | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |

Response:

00 01 00 02 00 04 1C 00 00 01

| Transaction ID                                             | 2 Bytes | u16 | 0x00,0x01                |
| ---------------------------------------------------------- | ------- | --- | ------------------------ |
| Protocol                                                   | 2 Bytes | u16 | 0x00,0x02                |
| Length (parameter length+1)                                | 2 Bytes | u16 | 0x00,0x04                |
| Register                                                   | 1 Byte  | u8  | 0x1C                     |
| State                                                      | 1 Byte  | u8  | 0x00                     |
| <p>Parameter1</p><p>(Number of commands in the buffer)</p> | 2 Bytes | u16 | <p> </p><p>0x00,0x01</p> |



## Servoj motion

**Register：29 (0x1D)**

Request:

00 01 00 02 00 29 1D 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00

| Transaction ID                                          | 2 Bytes                | u16                 | 0x00,0x01           |
| ------------------------------------------------------- | ---------------------- | ------------------- | ------------------- |
| Protocol                                                | 2 Bytes                | u16                 | 0x00,0x02           |
| Length                                                  | 2 Bytes                | u16                 | 0x00,0x29           |
| Register                                                | 1 Byte                 | u8                  | 0x1D                |
| Joint1（J1= π/3）                                         | 4 Bytes                | fp32                | 0x92,0x0A,0x86,0x3F |
| Joint2（J2=0）                                            | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| Joint3（J3=0）                                            | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| Joint4（J4=0）                                            | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| Joint5（J5=0）                                            | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| Joint6（J6=0）                                            | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| Joint7（J7=0）                                            | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| <p>Parameter8 </p><p>(speed, meaningless, 0)</p>        | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 0x00,0x00,0x00,0x00 |
| <p>Parameter9 </p><p>(acceleration, meaningless, 0)</p> | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| <p>Parameter10</p><p> (motion time, meaningless, 0)</p> | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |

Response:

00 01 00 02 00 02 1D 00

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x02 |
| Register       | 1 Byte  | u8  | 0x1D      |
| State          | 1 Byte  | u8  | 0x00      |



## Servo\_cartesian motion

**Register：30 (0x1E)**

{% hint style="warning" %}
Interface for receiving high-frequency continuous cartesian trajectory motion.
{% endhint %}

Request:

00 01 00 02 00 25 1E 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00

| Transaction ID                                                                                                             | 2 Bytes                | u16                 | 0x00,0x01           |
| -------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------------------- | ------------------- |
| Protocol                                                                                                                   | 2 Bytes                | u16                 | 0x00,0x02           |
| Length (parameter length+1)                                                                                                | 2 Bytes                | u16                 | 0x00,0x25           |
| Register                                                                                                                   | 1 Byte                 | u8                  | 0x1E                |
| Parameter1(x=400mm)                                                                                                        | 4 Bytes                | fp32                | 0x00,0x00,0xC8,0x43 |
| Parameter2(y=0mm)                                                                                                          | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| Parameter3(z=200mm)                                                                                                        | 4 Bytes                | fp32                | 0x00,0x00,0x48,0x43 |
| Parameter4(roll=π)                                                                                                         | 4 Bytes                | fp32                | 0xDB,0x0F,0x49,0x40 |
| Parameter5(pitch=0)                                                                                                        | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| Parameter6(yaw=0)                                                                                                          | 4 Bytes                | fp32                | 0x00,0x00,0x00,0x00 |
| <p>Parameter8</p><p> (speed, meaningless, 0)</p>                                                                           | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 0x00,0x00,0x00,0x00 |
| <p>Parameter9</p><p> (acceleration, meaningless, 0)</p>                                                                    | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 0x00,0x00,0x00,0x00 |
| <p>Parameter10</p><p>Motion coordinate system：</p><p>0 ：the base coordinate system</p><p>1 ：the tool coordinate system</p> | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 0x00,0x00,0x00,0x00 |

Response:

00 01 00 02 00 02 1E 00

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x02 |
| Register       | 1 Byte  | u8  | 0x1E      |
| State          | 1 Byte  | u8  | 0x00      |









