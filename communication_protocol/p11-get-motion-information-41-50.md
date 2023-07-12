# Get Motion Information(41-50)

## Get the current Cartesian position of the robot

**Register:41(0x29）**

```
// Request:
00 01 00 02 00 01 29
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//29       U8, Register
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 1A 29 10 43 00 4F 43 B4 CE 18 3A 3A 00 E0 42 DB 0F 49 40 FD AD 80 B6 7C D9 20 37
```
{% endcode %}

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 1A    U16, Length 
//29       U8, Register
//10       U8, State
//43 00 4F 43	FP32, x= 207mm
//B4 CE 18 3A	FP32, y=0 mm
//3A 00 E0 42	FP32, z=112 mm
//DB 0F 49 40	FP32, roll=π
//FD AD 80 B6	FP32, pitch=0
//7C D9 20 37	FP32, yaw=0
```

</details>

## Get the current joint position of the robot

**Register:42 (0x2A)**

```
// Request:
00 01 00 02 00 01 2A
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//2A       U8, Register
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 1E 2A 00 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```
{% endcode %}

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 1E    U16, Length 
//2A       U8, Register
//00       U8, State
//92 0A 86 3F 	FP32, Joint1=1.0471 rad
//00 00 00 00 	FP32, Joint2=0 rad
//00 00 00 00 	FP32, Joint3=0 rad
//00 00 00 00 	FP32, Joint4=0 rad
//00 00 00 00 	FP32, Joint5=0 rad
//00 00 00 00 	FP32, Joint6=0 rad
//00 00 00 00 	FP32, Joint7=0 rad
```

</details>

## Get the solution of the inverse kinematics

**Register:43 (0x2B)**

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 19 2B 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 
```
{% endcode %}

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 19    U16, Length 
//2B       U8, Register
//00 00 C8 43	FP32, x=400 mm
//00 00 00 00	FP32, y=0 mm
//00 00 48 43	FP32, z=200 mm
//DB 0F 49 40	FP32, roll=π rad
//00 00 00 00	FP32, pitch=0 rad
//00 00 00 00	FP32, yaw=0 rad
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 1E 2B 00 D8 C8 B2 A4 0A 86 A7 3D B1 22 24 BF F2 A9 3C 8A EF 31 0F 3F D8 C8 B2 A4 00 00 00 00
```
{% endcode %}

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 1E    U16, Length 
//2B       U8, Register
//00       U8, State
//D8 C8 B2 A4     FP32, J1=0 rad
//0A 86 A7 3D     FP32, J2=0.081803 rad
//B1 22 24 BF     FP32, J3=-0.641152 rad
//F2 A9 3C 8A     FP32, J4=0 rad
//EF 31 0F 3F     FP32, J5=0.5593 rad
//D8 C8 B2 A4     FP32, J6=0 rad
//00 00 00 00     FP32, J7=0 rad
```

</details>

## Get the solution of the forward kinematics

**Register:44 (0x2C)**

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 1D 2C 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
```
{% endcode %}

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 1D    U16, Length 
//2C       U8, Register
//92 0A 86 3F	FP32, Joint1= π/3 rad
//00 00 00 00	FP32, Joint2=0 rad
//00 00 00 00	FP32, Joint3=0 rad
//00 00 00 00	FP32, Joint4=0 rad
//00 00 00 00	FP32, Joint5=0 rad
//00 00 00 00	FP32, Joint6=0 rad
//00 00 00 00	FP32, Joint7=0 rad
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 1A 2C 00 FF FF CE 42 6B 44 33 43 00 00 E0 42 DB 0F 49 C0 00 00 00 80 92 0A 86 3F
```
{% endcode %}

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 1A    U16, Length 
//2C       U8, Register
//00       U8, State
//FF FF CE 42	FP32, x=103.5 mm
//6B 44 33 43	FP32, y=179.27 mm
//00 00 E0 42	FP32, z=112 mm
//DB 0F 49 C0	FP32, roll=-π rad
//00 00 00 80	FP32, pitch=-0 rad
//92 0A 86 3F	FP32, yaw=-π/3 rad
```

</details>

## Check the limit of joint space

**Register:45 (0x2D)**

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 1D 2D 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
```
{% endcode %}

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 1D    U16, Length 
//2D       U8, Register
//92 0A 86 3F	FP32, joint1=π/3
//00 00 00 00	FP32, joint2=0
//00 00 00 00	FP32, joint3=0
//00 00 00 00	FP32, joint4=0
//00 00 00 00	FP32, joint5=0
//00 00 00 00	FP32, joint6=0
//00 00 00 00	FP32, joint7=0
```

</details>

```
// Response:
00 01 00 02 00 03 2D 00 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 03    U16, Length 
//2D       U8, Register
//00       U8, State
//00       U8,  1 ：Collision occurs , 0 ：No collision occurs
```

</details>

## Set TCP speed limit in Reduced Mode

**Register:47 (0x2F)**

```
// Request:
00 01 00 02 00 05 2F 00 00 C8 43 
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 05    U16, Length 
//2F       U8, Register
//00 00 C8 43    U8,  Max TCP speed=400 mm/s
```

</details>

```
// Response:
00 01 00 02 00 02 2F 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//2F       U8, Register
//00       U8, State
```

</details>

## Set Joint speed limit in Reduced Mode

**Register:48 (0x30)**

```
// Request:
00 01 00 02 00 05 30 00 00 80 3F 
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 05    U16, Length 
//30       U8, Register
//00 00 C8 43    U8,  Max joint speed=1.0 rad/s
```

</details>

```
// Response:
00 01 00 02 00 02 30 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//30       U8, Register
//00       U8, State
```

</details>

## Get the state of the Reduced Mode

**Register:49 (0x31)**

```
// Request:
00 01 00 02 00 01 31
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//31       U8, Register
```

</details>

```
// Response:
00 01 00 03 00 03 31 00 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 03    U16, Length 
//31       U8, Register
//00       U8, State
//00       U8, 0 means OFF; 1 means ON
```

</details>

## Set the state of the Reduced Mode

**Register:50 (0x32)**

```
// Request:
00 01 00 02 00 02 32 00
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//32       U8, Register
//00       U8,   0: turn off Reduced Mode  1: turn on Reduced Mode
```

</details>

```
// Response:
00 01 00 03 00 02 32 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//32       U8, Register
//00       U8, State
```

</details>
