# Copy of Basic Motion(21-30)

## Cartesian linear motion

**Register21（0x15）**

Request:

{% code overflow="wrap" %}
```
00 01 00 02 00 25 15 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 42 00 00 FA 44 00 00 00 00
```
{% endcode %}

| Transaction ID                                                    | 2 Bytes | u16  | 00,01                      |
| ----------------------------------------------------------------- | ------- | ---- | -------------------------- |
| Protocol                                                          | 2 Bytes | u16  | 00,02                      |
| Length                                                            | 2 Bytes | u16  | 00,25                      |
| Register                                                          | 1 Byte  | u8   | 15                         |
| Parameter1(x=400mm)                                               | 4 Bytes | fp32 | 00,00,C8,43                |
| Parameter2(y=0mm)                                                 | 4 Bytes | fp32 | 00,00,00,00                |
| Parameter3(z=200mm)                                               | 4 Bytes | fp32 | 00,00,48,43                |
| Parameter4(roll=π)                                                | 4 Bytes | fp32 | DB,0F,49,40                |
| Parameter5(pitch=0)                                               | 4 Bytes | fp32 | 00,00,00,00                |
| Parameter6(yaw=0)                                                 | 4 Bytes | fp32 | 00,00,00,00                |
| Parameter8(speed=100mm/s)                                         | 4 Bytes | fp32 | 00,00,C8,42                |
| <p>Parameter9</p><p>(acceleration=2000mm/s2）=500*π/180rad/s2)</p> | 4 Bytes | fp32 | <p> </p><p>00,00,FA,44</p> |
| Parameter10(motion time=0)                                        | 4 Bytes | fp32 | 00,00,00,00                |

Response:

```
00 01 00 02 00 04 15 00 00 01
```

| Transaction ID | 2 Bytes | u16 | 00,01 |
| -------------- | ------- | --- | ----- |
| Protocol       | 2 Bytes | u16 | 00,02 |
| Length         | 2 Bytes | u16 | 00,04 |
| Register       | 1 Byte  | u8  | 15    |
| State          | 1 Byte  | u8  | 00    |
| Parameter      | 2 Bytes | u16 | 00,01 |



## Linear motion with circular arc

**Register：22 (0x16)**

Request:

{% code overflow="wrap" %}
```
00 01 00 02 00 29 16 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 42 00 00 FA 44 00 00 00 00 00 00 48 42
```
{% endcode %}

| Transaction ID                                        | 2 Bytes                | u16                 | 00,01       |
| ----------------------------------------------------- | ---------------------- | ------------------- | ----------- |
| Protocol                                              | 2 Bytes                | u16                 | 00,02       |
| Length (parameter length+1)                           | 2 Bytes                | u16                 | 00,29       |
| Register                                              | 1 Byte                 | u8                  | 16          |
| Parameter1(x=400mm)                                   | 4 Bytes                | fp32                | 00,00,C8,43 |
| Parameter2(y=0mm)                                     | 4 Bytes                | fp32                | 00,00,00,00 |
| Parameter3(z=200mm)                                   | 4 Bytes                | fp32                | 00,00,48,43 |
| Parameter4(roll=π)                                    | 4 Bytes                | fp32                | DB,0F,49,40 |
| Parameter5(pitch=0)                                   | 4 Bytes                | fp32                | 00,00,00,00 |
| Parameter6(yaw=0)                                     | 4 Bytes                | fp32                | 00,00,00,00 |
| <p>Parameter7</p><p> (motion speed=100 mm/s)</p>      | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 00,00,C8,42 |
| Parameter8 (acceleration=2000mm/s2 )                  | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 00,00,FA,44 |
| Parameter9 (motion time (0))                          | 4 Bytes                | fp32                | 00,00,00,00 |
| <p>Parameter10</p><p> (Arc blending radius=50 mm)</p> | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 00,00,48,42 |

Response:

```
00 01 00 02 00 04 16 00 00 01
```

| Transaction ID                                                 | 2 Bytes                | u16                | 00,01 |
| -------------------------------------------------------------- | ---------------------- | ------------------ | ----- |
| Protocol                                                       | 2 Bytes                | u16                | 00,02 |
| Length (parameter length+1)                                    | 2 Bytes                | u16                | 00,04 |
| Register                                                       | 1 Byte                 | u8                 | 16    |
| State                                                          | 1 Byte                 | u8                 | 00    |
| <p>Parameter1</p><p>(The number of commands in the buffer)</p> | <p>2 Bytes</p><p> </p> | <p>u16</p><p> </p> | 00,01 |



## Joint motion (P2P motion)

**Register23（0x17）**

Request:

{% code overflow="wrap" %}
```
00 01 00 02 00 29 17 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C2 B8 B2 3E 58 A0 0B 41 00 00 00 00
```
{% endcode %}

| Transaction ID                                        | 2 Bytes                | u16                 | 00,01       |
| ----------------------------------------------------- | ---------------------- | ------------------- | ----------- |
| Protocol                                              | 2 Bytes                | u16                 | 00,02       |
| Length (parameter length+1)                           | 2 Bytes                | u16                 | 00,29       |
| Register                                              | 1 Byte                 | u8                  | 17          |
| Joint1（J1= π/3）                                       | 4 Bytes                | fp32                | 92,0A,86,3F |
| Joint2（J2=0）                                          | 4 Bytes                | fp32                | 00,00,00,00 |
| Joint3（J3=0）                                          | 4 Bytes                | fp32                | 00,00,00,00 |
| Joint4（J4=0）                                          | 4 Bytes                | fp32                | 00,00,00,00 |
| Joint5（J5=0）                                          | 4 Bytes                | fp32                | 00,00,00,00 |
| Joint6（J6=0）                                          | 4 Bytes                | fp32                | 00,00,00,00 |
| Joint7（J7=0）                                          | 4 Bytes                | fp32                | 00,00,00,00 |
| Parameter8(speed=20\*π/180rad/s)                      | 4 Bytes                | fp32                | C2,B8,B2,3E |
| <p>Parameter9</p><p>(acceleration500*π/180rad/s2）</p> | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 58,A0,0B,41 |
| Parameter10(motion time=0)                            | 4 Bytes                | fp32                | 00,00,00,00 |

Response:

```
00 01 00 02 00 04 17 00 00 01
```

| Transaction ID                                                 | 2 Bytes                | u16                | 00,01 |
| -------------------------------------------------------------- | ---------------------- | ------------------ | ----- |
| Protocol                                                       | 2 Bytes                | u16                | 00,02 |
| Length                                                         | 2 Bytes                | u16                | 00,04 |
| Register                                                       | 1 Byte                 | u8                 | 17    |
| State                                                          | 1 Byte                 | u8                 | 00    |
| <p>Parameter1</p><p>(The number of commands in the buffer)</p> | <p>2 Bytes</p><p> </p> | <p>u16</p><p> </p> | 00,01 |



&#x20;



## Joint motion with circular arc

**Register：24 (0x18)**

Request:

{% code overflow="wrap" %}
```
00 01 00 02 00 29 18 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C2 B8 B2 3E 58 A0 0B 41 00 00 020 41
```
{% endcode %}

| Transaction ID                                        | 2 Bytes                | u16                 | 00,01        |
| ----------------------------------------------------- | ---------------------- | ------------------- | ------------ |
| Protocol                                              | 2 Bytes                | u16                 | 00,02        |
| Length                                                | 2 Bytes                | u16                 | 00,29        |
| Register                                              | 1 Byte                 | u8                  | 18           |
| Joint1（J1= π/3）                                       | 4 Bytes                | fp32                | 92,0A,86,3F  |
| Joint2（J2=0）                                          | 4 Bytes                | fp32                | 00,00,00,00  |
| Joint3（J3=0）                                          | 4 Bytes                | fp32                | 00,00,00,00  |
| Joint4（J4=0）                                          | 4 Bytes                | fp32                | 00,00,00,00  |
| Joint5（J5=0）                                          | 4 Bytes                | fp32                | 00,00,00,00  |
| Joint6（J6=0）                                          | 4 Bytes                | fp32                | 00,00,00,00  |
| Joint7（J7=0）                                          | 4 Bytes                | fp32                | 00,00,00,00  |
| Parameter8(speed=20\*π/180rad/s)                      | 4 Bytes                | fp32                | C2,B8,B2,3E  |
| <p>Parameter9</p><p>(acceleration500*π/180rad/s2）</p> | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 58,A0,0B,41  |
| <p>Parameter10</p><p>(Arc blending radius=10mm)</p>   | 4 Bytes                | fp32                | 00,00,020,41 |

Response:

```
00 01 00 02 00 05 18 00 00 01 01
```

| Transaction ID                                                 | 2 Bytes                | u16                | 00,01 |
| -------------------------------------------------------------- | ---------------------- | ------------------ | ----- |
| Protocol                                                       | 2 Bytes                | u16                | 00,02 |
| Length                                                         | 2 Bytes                | u16                | 00,04 |
| Register                                                       | 1 Byte                 | u8                 | 18    |
| State                                                          | 1 Byte                 | u8                 | 00    |
| <p>Parameter1</p><p>(The number of commands in the buffer)</p> | <p>2 Bytes</p><p> </p> | <p>u16</p><p> </p> | 00,01 |

## Return to zero position

**Register：25 (0x19)**

Request:

```
00 01 00 02 00 0D 19 DB 0F 49 40 F3 66 DF 40 00 00 00 00
```

| Transaction ID                     | 2 Bytes | u16  | 00,01       |
| ---------------------------------- | ------- | ---- | ----------- |
| Protocol                           | 2 Bytes | u16  | 00,02       |
| Length                             | 2 Bytes | u16  | 00,0D       |
| Register                           | 1 Byte  | u8   | 19          |
| Parameter 1（speed=50rad/s）         | 4 Bytes | fp32 | DB,0F,49,40 |
| Parameter2（acceleration=600rad/s2） | 4 Bytes | fp32 | F3,66,DF,40 |
| Parameter3（motion time=0）          | 4 Bytes | fp32 | 00,00,00,00 |

Response:

```
00 01 00 02 00 04 19 00 00 01
```

| Transaction ID                                                 | 2 Bytes                | u16                | 00,01 |
| -------------------------------------------------------------- | ---------------------- | ------------------ | ----- |
| Protocol                                                       | 2 Bytes                | u16                | 00,02 |
| Length                                                         | 2 Bytes                | u16                | 00,04 |
| Register                                                       | 1 Byte                 | u8                 | 19    |
| State                                                          | 1 Byte                 | u8                 | 00    |
| <p>Parameter1</p><p>(The number of commands in the buffer)</p> | <p>2 Bytes</p><p> </p> | <p>u16</p><p> </p> | 00,01 |



## Pause commands, Command delay

**Register：26(0x1A)**

Request:

```
00 01 00 02 00 05 1A 00 00 40 40
```

| Transaction ID                          | 2 Bytes                | u16                 | 00,01       |
| --------------------------------------- | ---------------------- | ------------------- | ----------- |
| Protocol                                | 2 Bytes                | u16                 | 00,02       |
| Length                                  | 2 Bytes                | u16                 | 00,05       |
| Register                                | 1 Byte                 | u8                  | 1A          |
| <p>Parameter1</p><p>(Pause time=3s)</p> | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 00,00,40,40 |

Response

```
00 01 00 02 00 04 1A 00 00 01
```

| Transaction ID                                                 | 2 Bytes                | u16                | 00,01 |
| -------------------------------------------------------------- | ---------------------- | ------------------ | ----- |
| Protocol                                                       | 2 Bytes                | u16                | 00,02 |
| Length                                                         | 2 Bytes                | u16                | 00,04 |
| Register                                                       | 1 Byte                 | u8                 | 1A    |
| State                                                          | 1 Byte                 | u8                 | 00    |
| <p>Parameter1</p><p>(The number of commands in the buffer)</p> | <p>2 Bytes</p><p> </p> | <p>u16</p><p> </p> | 00,01 |



## Circular motion

**RRegister：27 (0x1B)**

{% hint style="warning" %}
The motion calculates the trajectory of the space circle according to the three-point coordinates, and the three-point coordinates are (current starting point, parameter 1, parameter 2)
{% endhint %}

Request:

{% code overflow="wrap" %}
```
00 01 00 02 00 41 1B 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 43 00 00 C8 42 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 42 00 00 FA 44 00 00 00 00 00 00 48 42
```
{% endcode %}

| Transaction ID                                                                            | 2 Bytes | u16  | 00,01                      |
| ----------------------------------------------------------------------------------------- | ------- | ---- | -------------------------- |
| Protocol                                                                                  | 2 Bytes | u16  | 00,02                      |
| Length (parameter length+1)                                                               | 2 Bytes | u16  | 00,41                      |
| Register                                                                                  | 1 Byte  | u8   | 1B                         |
| Parameter1(x=400mm)                                                                       | 4 Bytes | fp32 | 00,00,C8,43                |
| Parameter2(y=0mm)                                                                         | 4 Bytes | fp32 | 00,00,00,00                |
| Parameter3(z=200mm)                                                                       | 4 Bytes | fp32 | 00,00,48,43                |
| Parameter4(roll=π)                                                                        | 4 Bytes | fp32 | DB,0F,49,40                |
| Parameter5(pitch=0)                                                                       | 4 Bytes | fp32 | 00,00,00,00                |
| Parameter6(yaw=0)                                                                         | 4 Bytes | fp32 | 00,00,00,00                |
| Parameter7(x=400mm)                                                                       | 4 Bytes | fp32 | 00,00,C8,43                |
| Parameter8(y=0mm)                                                                         | 4 Bytes | fp32 | 00, 00, C8, 42             |
| Parameter9(z=200mm)                                                                       | 4 Bytes | fp32 | 00,00,48,43                |
| Parameter10(roll=π)                                                                       | 4 Bytes | fp32 | DB,0F,49,40                |
| Parameter11(pitch=0)                                                                      | 4 Bytes | fp32 | 00,00,00,00                |
| Parameter12(yaw=0)                                                                        | 4 Bytes | fp32 | 00,00,00,00                |
| Parameter13(speed=100mm/s)                                                                | 4 Bytes | fp32 | 00,00,C8,42                |
| <p>Parameter14(2000mm/s2)</p><p>(acceleration500*π/180rad/s2)</p>                         | 4 Bytes | fp32 | 00,00,FA,44                |
| Parameter15(motion time=0)                                                                | 4 Bytes | fp32 | 00,00,00,00                |
| <p>Parameter16</p><p>（Percentage of the length of arc in motion to circumference=50%）</p> | 4 Bytes | fp32 | <p> </p><p>00,00,48,42</p> |

Response::

```
00 01 00 02 00 04 1B 10 00 01
```

| Transaction ID                                                 | 2 Bytes                | u16                | 00,01 |
| -------------------------------------------------------------- | ---------------------- | ------------------ | ----- |
| Protocol                                                       | 2 Bytes                | u16                | 00,02 |
| Length                                                         | 2 Bytes                | u16                | 00,04 |
| Register                                                       | 1 Byte                 | u8                 | 1B    |
| State                                                          | 1 Byte                 | u8                 | 00    |
| <p>Parameter1</p><p>(The number of commands in the buffer)</p> | <p>2 Bytes</p><p> </p> | <p>u16</p><p> </p> | 00,01 |



## Linear motion in tool coordinate system

**Register：28 (0x1C)**

{% hint style="warning" %}
Move in Cartesian linear relative motion based on the current tool coordinate system.
{% endhint %}

Request:

{% code overflow="wrap" %}
```
00 01 00 02 00 25 1C 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 C2 B8 B2 3E 00 00 FA 44 00 00 00 00
```
{% endcode %}

| Transaction ID                                   | 2 Bytes | u16  | 00,01       |
| ------------------------------------------------ | ------- | ---- | ----------- |
| Protocol                                         | 2 Bytes | u16  | 00,02       |
| Length (parameter length+1)                      | 2 Bytes | u16  | 00,25       |
| Register                                         | 1 Byte  | u8   | 1C          |
| Parameter1(x=400mm)                              | 4 Bytes | fp32 | 00,00,C8,43 |
| Parameter2(y=0mm)                                | 4 Bytes | fp32 | 00,00,00,00 |
| Parameter3(z=200mm)                              | 4 Bytes | fp32 | 00,00,48,43 |
| Parameter4(roll=π)                               | 4 Bytes | fp32 | DB,0F,49,40 |
| Parameter5(pitch=0)                              | 4 Bytes | fp32 | 00,00,00,00 |
| Parameter6(yaw=0)                                | 4 Bytes | fp32 | 00,00,00,00 |
| Parameter7(speed=20mm/s)                         | 4 Bytes | fp32 | C2,B8,B2,3E |
| <p>Parameter8</p><p>(acceleration=2000mm/s2）</p> | 4 Bytes | fp32 | 00,00,FA,44 |
| Parameter9(motion time=0)                        | 4 Bytes | fp32 | 00,00,00,00 |

Response:

```
00 01 00 02 00 04 1C 00 00 01
```

| Transaction ID                                             | 2 Bytes | u16 | 00,01                |
| ---------------------------------------------------------- | ------- | --- | -------------------- |
| Protocol                                                   | 2 Bytes | u16 | 00,02                |
| Length                                                     | 2 Bytes | u16 | 00,04                |
| Register                                                   | 1 Byte  | u8  | 1C                   |
| State                                                      | 1 Byte  | u8  | 00                   |
| <p>Parameter1</p><p>(Number of commands in the buffer)</p> | 2 Bytes | u16 | <p> </p><p>00,01</p> |

## Servoj motion

**Register：29 (0x1D)**

Request:

{% code overflow="wrap" %}
```
00 01 00 02 00 29 1D 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```
{% endcode %}

| Transaction ID                                          | 2 Bytes                | u16                 | 00,01       |
| ------------------------------------------------------- | ---------------------- | ------------------- | ----------- |
| Protocol                                                | 2 Bytes                | u16                 | 00,02       |
| Length                                                  | 2 Bytes                | u16                 | 00,29       |
| Register                                                | 1 Byte                 | u8                  | 1D          |
| Joint1（J1= π/3）                                         | 4 Bytes                | fp32                | 92,0A,86,3F |
| Joint2（J2=0）                                            | 4 Bytes                | fp32                | 00,00,00,00 |
| Joint3（J3=0）                                            | 4 Bytes                | fp32                | 00,00,00,00 |
| Joint4（J4=0）                                            | 4 Bytes                | fp32                | 00,00,00,00 |
| Joint5（J5=0）                                            | 4 Bytes                | fp32                | 00,00,00,00 |
| Joint6（J6=0）                                            | 4 Bytes                | fp32                | 00,00,00,00 |
| Joint7（J7=0）                                            | 4 Bytes                | fp32                | 00,00,00,00 |
| <p>Parameter8 </p><p>(speed, meaningless, 0)</p>        | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 00,00,00,00 |
| <p>Parameter9 </p><p>(acceleration, meaningless, 0)</p> | 4 Bytes                | fp32                | 00,00,00,00 |
| <p>Parameter10</p><p> (motion time, meaningless, 0)</p> | 4 Bytes                | fp32                | 00,00,00,00 |

Response:

```
00 01 00 02 00 02 1D 00
```

| Transaction ID | 2 Bytes | u16 | 00,01 |
| -------------- | ------- | --- | ----- |
| Protocol       | 2 Bytes | u16 | 00,02 |
| Length         | 2 Bytes | u16 | 00,02 |
| Register       | 1 Byte  | u8  | 1D    |
| State          | 1 Byte  | u8  | 00    |

## Servo\_cartesian motion

**Register：30 (0x1E)**

{% hint style="warning" %}
Interface for receiving high-frequency continuous cartesian trajectory motion.
{% endhint %}

Request:

{% code overflow="wrap" %}
```
00 01 00 02 00 25 1E 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```
{% endcode %}

| Transaction ID                                                                                                             | 2 Bytes                | u16                 | 00,01       |
| -------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------------------- | ----------- |
| Protocol                                                                                                                   | 2 Bytes                | u16                 | 00,02       |
| Length (parameter length+1)                                                                                                | 2 Bytes                | u16                 | 00,25       |
| Register                                                                                                                   | 1 Byte                 | u8                  | 1E          |
| Parameter1(x=400mm)                                                                                                        | 4 Bytes                | fp32                | 00,00,C8,43 |
| Parameter2(y=0mm)                                                                                                          | 4 Bytes                | fp32                | 00,00,00,00 |
| Parameter3(z=200mm)                                                                                                        | 4 Bytes                | fp32                | 00,00,48,43 |
| Parameter4(roll=π)                                                                                                         | 4 Bytes                | fp32                | DB,0F,49,40 |
| Parameter5(pitch=0)                                                                                                        | 4 Bytes                | fp32                | 00,00,00,00 |
| Parameter6(yaw=0)                                                                                                          | 4 Bytes                | fp32                | 00,00,00,00 |
| <p>Parameter8</p><p> (speed, meaningless, 0)</p>                                                                           | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 00,00,00,00 |
| <p>Parameter9</p><p> (acceleration, meaningless, 0)</p>                                                                    | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 00,00,00,00 |
| <p>Parameter10</p><p>Motion coordinate system：</p><p>0 ：the base coordinate system</p><p>1 ：the tool coordinate system</p> | <p>4 Bytes</p><p> </p> | <p>fp32</p><p> </p> | 00,00,00,00 |

Response:

```
00 01 00 02 00 02 1E 00
```

| Transaction ID | 2 Bytes | u16 | 00,01 |
| -------------- | ------- | --- | ----- |
| Protocol       | 2 Bytes | u16 | 00,02 |
| Length         | 2 Bytes | u16 | 00,02 |
| Register       | 1 Byte  | u8  | 1E    |
| State          | 1 Byte  | u8  | 00    |







