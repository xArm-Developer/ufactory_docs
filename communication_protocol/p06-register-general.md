# Register (General)

## Joint motion (P2P motion)

**Register:23(0x17）**

{% code overflow="wrap" fullWidth="false" %}
```
// Request:
00 01 00 02 00 29 17 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C2 B8 B2 3E 58 A0 0B 41 00 00 00 00
```
{% endcode %}

<details>

<summary>Request Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 29    U16, Length 
//17       U8, Register
//92 0A 86 3F    FP32, Joint1（J1=π/3）
//00 00 00 00    FP32, Joint2（J2=0）
//00 00 00 00    FP32, Joint3（J3=0）
//00 00 00 00    FP32, Joint4（J4=0）
//00 00 00 00    FP32, Joint5（J5=0）
//00 00 00 00    FP32, Joint6（J6=0）
//00 00 00 00    FP32, Joint7（J7=0）
//C2 B8 B2 3E    FP32, speed=20*π/180rad/s
//58 A0 0B 41    FP32, acceleration=500*π/180rad/s2
//00 00 00 00    FP32, motion time=0
```
{% endcode %}

</details>

```
//Response:
00 01 00 02 00 04 17 00 00 01
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//17       U8, Register
//00       U8, State
//00 01    U16, Parameter
```

</details>

##

## Set the maximum acceleration of TCP motion

**Register:32(0x20）**

```
// Request:
00 01 00 02 00 05 20 00 00 7A 44
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 05    U16, Length 
//20       U8, Register
//00 00 7A 44    FP32, maxacc=1000mm/s2
```

</details>

```
//Response:
00 01 00 02 00 04 20 00 00 01
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//20       U8, Register
//00       U8, State
```

</details>

## Get Cartesian position

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
//Response:
00 01 00 02 00 1A 29 00 00 00 4F 43 5F F1 23 29 00 00 E0 42 DB 0F 49 C0 00 00 00 80 00 00 00 09
```
{% endcode %}

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 1A    U16, Length 
//29       U8, Register
//00       U8, State
//00 00 4F 43	FP32, x=207mm
//00 00 00 00	FP32,y=0mm
//00 00 E0 42	FP32,z=112mm
//DB 0F 49 40	FP32,roll=π
//00 00 00 00	FP32,pitch=0
//00 00 00 00	FP32,yaw=0
```

</details>

## Linear motion of the target in the axis angle posture

**Register:92(0x5C）**

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 27 5C 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 DB 0F C9 40 00 00 C8 42 00 00 FA 44 00 00 00 00 00 01
```
{% endcode %}

<details>

<summary>Request Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 27    U16, Length 
//5C       U8, Register
//00 00 00 00	FP32,  X=0mm
//00 00 00 00	FP32,  Y=0mm
//00 00 00 00	FP32,  Z=0mm
//00 00 00 00	FP32,  Rx=0
//00 00 00 00	FP32,  Ry=0
//DB 0F C9 40	FP32,  Rz=2π
//00 00 C8 42	FP32,  speed=100mm/s
//00 00 FA 44	FP32,  acceleration=2000mm/s2
//00 00 00 00	FP32,  motion time=0

//00  U8
Motion coordinate system: 
0: represents base coordinate system motion
1: represents tool coordinate system motion

//01  U8
absolute pose
If the motion coordinate system is the base coordinate system
0: represents the given pose is an absolute pose
1: represents the given pose is a relative pose
The given parameters 1-6 coordinates are based on the current an offset of position
```
{% endcode %}

</details>

{% code overflow="wrap" %}
```
//Response:
00 01 00 02 00 04 5C 00 00 01
```
{% endcode %}

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//5C       U8, Register
//00       U8, State
//00 01    U16, Parameter
```

</details>

## The operation triggered by the position of the general digital IO of the control box

**Register:145(0x91）**

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 13 91 00 01 00 00 96 43 00 00 00 00 00 00 96 43 00 00 40 40
```
{% endcode %}

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 13    U16, Length 
//91       U8, Register
//00	   U8, iomum=0
//01	   U8, on:1, off:0
//00 00 96 43	FP32, x=300
//00 00 00 00	FP32, y=0
//00 00 96 43	FP32, z=300
//00 00 40 40	FP32, Tolerance radiustol_r=3

```

</details>

```
//Response:
00 01 00 02 00 02 91 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//91       U8, Register
//00       U8, State
```

</details>
