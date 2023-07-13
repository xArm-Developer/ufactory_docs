# Servo Module(101-115)

## Get the state of the current robotic arm servo

**Register:106 (0x6A)**

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

<pre><code>//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 13    U16, Length 
//6A       U8, Register
//00       U8, State
//00       U8, Paramter 1, command execution status
** 0: Normal.
<strong>** 1: The server has error message.
</strong><strong>** 3: Communication failure.      
</strong>//00       U8, Paramter 2, Joint 1 servo state=Normal
//00       U8, Paramter 3, Joint 1 servo error code=Normal
//00       U8, Paramter 4, Joint 2 servo state=Normal
//00       U8, Paramter 5, Joint 2 servo error code=Normal
//00       U8, Paramter 6, Joint 3 servo state=Normal
//00       U8, Paramter 7, Joint 3 servo error code=Normal
//00       U8, Paramter 8, Joint 4 servo state=Normal
//00       U8, Paramter 9, Joint 4 servo error code=Normal
//00       U8, Paramter 10, Joint 5 servo state=Normal
//00       U8, Paramter 11, Joint 5 servo error code=Normal
//00       U8, Paramter 12, Joint 6 servo state=Normal
//00       U8, Paramter 13, Joint 6 servo error code=Normal
//00       U8, Paramter 14, Joint 7 servo state=Normal
//00       U8, Paramter 15, Joint 7 servo error code=Normal
//00       U8, Paramter 16, Gripper servo state=Normal
//00       U8, Paramter 17, Gripper servo error code=Normal
</code></pre>

</details>

## Start the joint friction identification process

**Register:115 (0x73)**

```
// Request:
00 01 00 02 00 0F 73 58 49 31 32 30 33 30 37 32 30 31 4C 31 42  
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 0F    U16, Length 
//73       U8, Register
//58 49 31 32 30 33 30 37 32 30 31 4C 31 42    U8, XI120307201L1B, Robot SN ASCII code, 
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
//00 00 00 00    FP32, Identification status  0.0: success. -1.0：failed.
```

</details>
