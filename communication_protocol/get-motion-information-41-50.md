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

















