# Get Motion Information(41-50)

## Get the current Cartesian position of the robotic arm

**Register41（29）**

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
//43 00 4F 43	fp32, x=207mm
//B4 CE 18 3A	fp32, y=0mm
//3A 00 E0 42	fp32, z=112mm
//DB 0F 49 40	fp32, roll=π
//FD AD 80 B6	fp32, pitch=0
//7C D9 20 37	fp32, yaw=0
```

</details>





## Get the current joint position of the robotic arm

**Register：42 (2A)**

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
//43 00 4F 43	fp32, x=207mm
//B4 CE 18 3A	fp32, y=0mm
//3A 00 E0 42	fp32, z=112mm
//DB 0F 49 40	fp32, roll=π
//FD AD 80 B6	fp32, pitch=0
//7C D9 20 37	fp32, yaw=0
```

</details>





## Get the solution of the inverse kinematics

**Register：43 (2B)**

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
//00 00 C8 43	fp32, x=400mm
//00 00 00 00	fp32, y=0mm
//00 00 48 43	fp32, z=200mm
//DB 0F 49 40	fp32, roll=π
//00 00 00 00	fp32, pitch=0
//00 00 00 00	fp32, yaw=0
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
//00 19    U16, Length 
//2B       U8, Register
//00       U8, State
//D8 C8 B2 A4     fp32, joint1= 0
//0A 86 A7 3D     fp32, joint2=0.081803
//B1 22 24 BF     fp32, joint3=-0.641152
//F2 A9 3C 8A     fp32, joint4=0
//EF 31 0F 3F     fp32, joint5=0.559349
//D8 C8 B2 A4     fp32, joint6=0
//00 00 00 00     fp32, joint7=0
```

</details>







## Get the solution of the forward kinematics

**Register：44 (2C)**

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
//92 0A 86 3F	fp32, joint1= π/3
//00 00 00 00	fp32, joint2=0
//00 00 00 00	fp32, joint3=0
//00 00 00 00	fp32, joint4=0
//00 00 00 00	fp32, joint5=0
//00 00 00 00	fp32, joint6=0
//00 00 00 00	fp32, joint7=0
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
//FF FF CE 42	fp32, x=103.5mm
//6B 44 33 43	fp32, y=179.27mm
//00 00 E0 42	fp32, z=112mm
//DB 0F 49 C0	fp32, roll=-π
//00 00 00 80	fp32, pitch=-0
//92 0A 86 3F	fp32, yaw=-π/3
```

</details>





## Check the limit of joint space

**Register：45 (2D)**

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
//92 0A 86 3F	fp32, joint1=π/3
//00 00 00 00	fp32, joint2=0
//00 00 00 00	fp32, joint3=0
//00 00 00 00	fp32, joint4=0
//00 00 00 00	fp32, joint5=0
//00 00 00 00	fp32, joint6=0
//00 00 00 00	fp32, joint7=0
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











