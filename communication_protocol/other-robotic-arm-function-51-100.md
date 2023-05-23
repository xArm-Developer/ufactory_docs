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

```
// Request:
00 01 00 02 00 0D 33 00 00 00 00 00 00 00 00 00 00 80 BF 
```

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







