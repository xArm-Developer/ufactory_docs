# System State(11-20)

## Enable/Disable servo (System reset)

**Register：11(0x0B)**

{% hint style="warning" %}
The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.
{% endhint %}

```
// Request:
00 01 00 02 00 03 0B 08 01
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 03    U16, Length 
//0B       U8, Register
//08       U8, 
Joint Number(Select all joints)
1-7：Motor joint(1-7)
8：Select all joint

//01       U8,
Whether to enable the servo
1：Enable servo
0：Disable servo
```

</details>

```
// Response:
00 01 00 02 00 02 0B 10
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//0B      U8, Register
//10      U8, State
```

</details>



## Motion state setting

**Register：12(0x0C)**

```
// Request:
00 01 00 02 00 02 0C 00
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//0C      U8, Register

//00      U8, 
Motion Sate
3: Suspend the current motion
4: Stop all current motion (restart the system)
0: Enter the motion mode
```

</details>

```
// Response:
00 01 00 02 00 02 0C 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//0C      U8, Register
//00      U8, State
```

</details>





## Get the motion state

**Register：13 (0x0D)**

```
// Request:
00 01 00 02 00 01 0D
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//0D      U8, Register
```

</details>

```
// Response:
00 01 00 02 00 03 0D 00 02
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//0D       U8, Register

//02       U8,
Motion state：
1：In motion
2：Sleep
3：Suspend
4：Stop
5： System reset
```

</details>





## Get the number of commands in the command buffer

**Register：14 (0x0E)**

```
// Request
00 01 00 02 00 01 0E
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//0E       U8, Register
```

</details>

```
// Response:
00 01 00 02 00 04 0E 00 00 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//0E       U8, Register
//00 00    U16, The number of commands in the buffer
```

</details>





## Get error and warning code

**Register：15 (0x0F)**

```
// Request:
00 01 00 02 00 01 0F
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//0F       U8, Register
```

</details>

```
// Response:
00 01 00 02 00 04 0F 00 00 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//0F       U8, Register
//00       U8, State
//00       U8, Error code
//00       U8, Warning code
```

</details>





## Clear control box error (System reset)

**Register：16 (0x10)**

{% hint style="warning" %}
The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.
{% endhint %}

Request:

00 01 00 02 00 01 10

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x01 |
| Register       | 1 Byte  | u8  | 0x10      |

Response:

00 01 00 02 00 02 10 00

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x02 |
| Register       | 1 Byte  | u8  | 0x10      |
| State          | 1 Byte  | u8  | 0x10      |



## Clear control box warning

**Register：17 (0x11)**

Request:

00 01 00 02 00 01 11

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x01 |
| Register       | 1 Byte  | u8  | 0x11      |

Response:

00 01 00 02 00 02 11 00

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x02 |
| Register       | 1 Byte  | u8  | 0x11      |
| State          | 1 Byte  | u8  | 0x00      |



## Setting the brake switches separately (System reset)

**Register：18 (0x12)**

Request:

00 01 00 02 00 03 12 08 01

| Transaction ID                                                                                                                     | 2 Bytes               | u16               | 0x00,0x01           |
| ---------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------------- | ------------------- |
| Protocol                                                                                                                           | 2 Bytes               | u16               | 0x00,0x02           |
| Length                                                                                                                             | 2 Bytes               | u16               | 0x00,0x03           |
| Register                                                                                                                           | 1 Byte                | u8                | 0x12                |
| <p>Parameter1(Select all joints)</p><p>Control the brakes：</p><p>1~6: Select motor joint separately</p><p>8: Select all joints</p> | <p>1 Byte</p><p> </p> | <p>u8</p><p> </p> | <p> </p><p>0x08</p> |
| <p>Parameter2 (Enable the brake)</p><p>Operation：</p><p>1: Unlock Joint</p><p>0: Disable Joint</p>                                 | <p>1 Byte</p><p> </p> | <p>u8</p><p> </p> | 0x01                |

Response:

00 01 00 02 00 02 12 10

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x02 |
| Register       | 1 Byte  | u8  | 0x12      |
| State          | 1 Byte  | u8  | 0x10      |



## Setting the system motion mode (System reset)

**Register：19 (0x13)**

{% hint style="warning" %}
The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.
{% endhint %}

Request:

00 01 00 02 00 03 13 00 00

| Transaction ID                                                                                                                                                                                                                                                                                                                                                                          | 2 Bytes | u16 | 0x00,0x01 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --- | --------- |
| Protocol                                                                                                                                                                                                                                                                                                                                                                                | 2 Bytes | u16 | 0x00,0x02 |
| Length (parameter length+1)                                                                                                                                                                                                                                                                                                                                                             | 2 Bytes | u16 | 0x00,0x02 |
| Register                                                                                                                                                                                                                                                                                                                                                                                | 1 Byte  | u8  | 0x13      |
| <p>Parameter1(Position control mode)</p><p>Motion mode：</p><p>0: Position control mode</p><p>1: servo motion mode</p><p>2: Joint teaching mode</p><p>3: Cartesian teaching mode (not yet available)</p><p>4: Joint velocity control mode</p><p>5: Cartesian velocity control mode</p><p>6: Joint online trajectory planning mode</p><p>7: Cartesian online trajectory planning mode</p> | 1 Byte  | u8  | 0x00      |

Response:

00 01 00 02 00 02 13 00

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x02 |
| Register       | 1 Byte  | u8  | 0x13      |
| State          | 1 Byte  | u8  | 0x10      |





