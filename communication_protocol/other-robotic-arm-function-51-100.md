# Other Robotic Arm Function(51-100)

## Set the gravity direction

**Register：51 (33)**

{% hint style="warning" %}
Set the gravity direction for correct torque compensation and collision detection. After modification, it shall call the save\_conf () function or refer to Register: 40(28) to save the setting, otherwise it will be invalid after the next restart.
{% endhint %}

```
// Request:
00 01 00 02 00 0D 33 00 00 00 00 00 00 00 00 00 00 80 BF 
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//32       U8, Register
//00 00 00 00	fp32, Gravity direction vector X=0 base coordinate system
//00 00 00 00	fp32, Gravity direction vector Y=0 base coordinate system
//00 00 80 BF	fp32, Gravity direction vector Z=-1 base coordinate system
```

</details>

```
// Response:
00 01 00 02 00 02 33 10
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//33       U8, Register
//10       U8, State
```

</details>



## Set the safe boundary range

**Register：52 (34)**

{% hint style="warning" %}
C35 Set the boundary range of the safety fence in the three-dimensional space. If TCP of the robotic arm exceeds this boundary, error C35of the Control Box will be triggered.
{% endhint %}

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 19 34 58 02 00 00 C8 00 00 00 F4 01 00 00 64 00 00 00 58 02 00 00 C8 00 00 00 
```
{% endcode %}

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 19    U16, Length 
//34       U8, Register
//58,02,00,00	fp32, Cartesian boundary value x+=600mm
//C8,00,00,00	fp32, Cartesian boundary value x-=200mm
//F4,01,00,00	fp32, Cartesian boundary value y+ =500mm
//64,00,00,00	fp32, Cartesian boundary value y- =100mm
//58,02,00,00	fp32, Cartesian boundary value z+=600mm
//C8,00,00,00	fp32, Cartesian boundary value z-=200mm
```

</details>

```
// Response:
00 01 00 02 00 02 34 10
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//34       U8, Register
//10       U8, State
```

</details>





## Get all configurations of the Reduced Mode

Register：53 (35)

```
// Request:
00 01 00 02 00 01 35  
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//35       U8, Register
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 51 35 00 01 01 2C 00 64 01 2C FF F6 01 2C 00 32 00 00 C8 42 DB 0F 49 40 DB 0F C9 C0 DB 0F C9 40 15 C6 03 C0 91 0A 06 40 CE 53 7B C0 68 96 44 3E DB 0F C9 C0 DB 0F C9 40 35 B3 D8 BF DB 0F 49 40 DB 0F C9 C0 DB 0F C9 40 00 00 00 00 00 00 00 00 01 01
```
{% endcode %}

<details>

<summary>Response Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 51    U16, Length 
//35       U8, Register
//10       U8, State
//10 U8, State
//00	U16,	The state of Reduce mode: 0-OFF; 1-ON
//01 2C 00 64 01 2C FF F6 01 2C 00 32 	int16, Safety Boundary: [x_max=300, x_min=100, y_max=300, y_min=-10, z_max=300, z_min=50]
//00 00 C8 42 fp32, Max TCP speed=100mm/s
//DB 0F 49 40 fp32, max Joint speed=180 °/s

//DB 0F C9 C0 DB 0F C9 40 15 C6 03 C0 91 0A 06 40 CE 53 7B C0 68 96 44 3E DB 0F C9 C0 DB 0F C9 40 35 B3 D8 BF DB 0F 49 40 DB 0F C9 C0 DB 0F C9 40 00 00 00 00 00 00 00 00 	fp32, Joint range: [J1_min, J1_max, …, J7_min, J7_max]

//01  U8, The state of Safety Boundary: 0- OFF; 1-ON
//01  U8, The state of Collision Rebound: 0- OFF; 1-ON 
```
{% endcode %}

</details>



## Get current joint torque of the servo

**Register：55 (37)**

{% hint style="warning" %}
Estimate the joint torque based on current and theoretical model, which is for reference only
{% endhint %}

```
// Request:
00 01 00 02 00 01 37  
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//37       U8, Register
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 1E 37 00 17 37 E1 A3 71 5A 3B C1 37 81 B6 C0 C4 3D A9 BC AC 49 7B BF AD B7 A2 34 00 00 00 00
```
{% endcode %}

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 1E    U16, Length 
//37       U8, Register
//00       U8, State
//00 00 00 00	fp32, Theoretical torque of joint1 = 0
//2A C5 5B C1   fp32, Theoretical torque of joint2 = -13.7 N.m
//79 A4 C5 C0	fp32, Theoretical torque of joint3 = -6.17 N.m
//00 00 00 00   fp32, Theoretical torque of joint4 = 0
//87 A3 E9 BF	fp32, Theoretical torque of joint5 = -1.83N.m
//00 00 00 00	fp32, Theoretical torque of joint6 = 0
//00 00 00 00	fp32, Theoretical torque of joint7 = 0
```

</details>















