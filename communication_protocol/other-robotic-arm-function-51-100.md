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
//01 2C 00 64 01 2C FF F6 01 2C 00 32 	int16, Safety Boundary: [x_max, x_min, y_max, y_min, z_max, z_min]
//00 00 C8 42 fp32, Max TCP speed=100mm/s
//DB 0F 49 40 fp32, max Joint speed=180 °/s

//DB 0F C9 C0 DB 0F C9 40 15 C6 03 C0 91 0A 06 40 CE 53 7B C0 68 96 44 3E DB 0F C9 C0 DB 0F C9 40 35 B3 D8 BF DB 0F 49 40 DB 0F C9 C0 DB 0F C9 40 00 00 00 00 00 00 00 00 	fp32, Joint range: [J1_min, J1_max, …, J7_min, J7_max]

//01  U8, The state of Safety Boundary: 0- OFF; 1-ON
//01  U8, The state of Collision Rebound: 0- OFF; 1-ON 
```
{% endcode %}

</details>

























