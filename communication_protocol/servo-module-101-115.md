# Servo Module(101-115)

## Get the state of the current robotic arm servo

**Register：106 (6A)**

```
// Request:
00 01 00 02 00 01 6A  
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//6A       U8, Register
```

</details>

```
// Response:
00 01 00 02 00 13 6A 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 13    U16, Length 
//6A       U8, Register
//00       U8, 
Commands execution state:
0: Normal
1: The server has error message
3: Communication fail
//00       U8, Joint1 servo state=Normal
//00       U8, Joint1 servo error code=Normal
//00       U8, Joint2 servo state=Normal
//00       U8, Joint2 servo error code=Normal
//00       U8, Joint3 servo state=Normal
//00       U8, Joint3 servo error code=Normal
//00       U8, Joint4 servo state=Normal
//00       U8, Joint4 servo error code=Normal
//00       U8, Joint5 servo state=Normal
//00       U8, Joint5 servo error code=Normal
//00       U8, Joint6 servo state=Normal
//00       U8, Joint6 servo error code=Normal
//00       U8, Joint7 servo state=Normal
//00       U8, Joint7 servo error code=Normal
//00       U8, Joint2 Gripper servo error code=Normal
```

</details>







## Start the joint friction identification process

**Register：115 (73)**

{% hint style="warning" %}
Recommended to use the Studio
{% endhint %}

```
// Request:
00 01 00 02 00 0F 73 58 49 31 32 30 33 30 37 32 30 31 4C 31 42  
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//32       U8, Register
//58 49 31 32 30 33 30 37 32 30 31 4C 31 42    U8,
The serial number of the  xArm to be identified
（E.g：XI120307201L1B）Refer to ASCII code
```

</details>

```
// Response:
00 01 00 02 00 07 73 00 00 00 00 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 07    U16, Length 
//73       U8, Register
//00       U8, State
//00 00 00 00    fp32, 
Identification status
0,0：Identify success
-1,0：Identify failed
```

</details>



