# Other Robotic Arm Function(71-80)

## Sets the offset of the user coordinate system and the base coordinate system

**Sets the offset of the user coordinate system and the base coordinate system, specifically the offset described by the base coordinate system of the robotic arm under the user-defined coordinate system**

**Register: 73 (49)**

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 19 49 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00    
```
{% endcode %}

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 19    U16, Length 
//49       U8, Register
//00 00 C8 43	fp32, Cartesian offset X=400mm
//00 00 00 00	fp32, Cartesian offset Y=0
//00 00 48 43	fp32, Cartesian offset Z=200mm
//DB 0F 49 40	fp32, Cartesian offset Roll=πrad
//00 00 00 00	fp32, Cartesian offset Pitch=0
//00 00 00 00	fp32, Cartesian offset Yaw=0
```

</details>

```
// Response:
00 01 00 02 00 02 49 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//49       U8, Register
//00       U8, State
```

</details>







## Calculate the attitude offset of two given points

**Given two coordinate points of the robotic arm, the offset coordinate between them can be calculated.**

**Register: 76 (4C)**

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 33 4C 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 43 00 00 00 00 00 00 C8 42 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00   
```
{% endcode %}

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 33    U16, Length 
//4C       U8, Register
//00 00 C8 43	fp32, X=400
//00 00 00 00	fp32, Y=0
//00 00 48 43	fp32, Z=200
//DB 0F 49 40	fp32, Roll=π
//00 00 00 00	fp32, Pitch=0
//00 00 00 00	fp32, Yaw=0
//00 00 C8 43	fp32, X=400
//00 00 00 00	fp32, Y=0
//00 00 C8 42	fp32, Z=100
//DB 0F 49 40	fp32, Roll=π
//00 00 00 00	fp32, Pitch=0
//00 00 00 00	fp32, Yaw=0
//00	fp32, 
Representation of input pose:
0 : RPY（Roll,Pitch,Yaw）
1 : axial angle（Rx,Ry,Rz）

//00	fp32, 
Representation of output pose:
0 : RPY（Roll,Pitch,Yaw）
1 : axial angle（Rx,Ry,Rz）
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
//00 1A    U16, Length 
//4C       U8, Register
//00       U8, State
//00 00 00 00	fp32, Cartesian offset X=0
//00 00 00 00	fp32, Cartesian offset Y=0
//00 00 C8 C2	fp32, Cartesian offset Z=-100mm
//00 00 80 99	fp32, Cartesian offset Roll=-0
//00 00 00 80	fp32, Cartesian offset Pitch=-0
//00 00 00 00	fp32, Cartesian offset Yaw=0
```

</details>















