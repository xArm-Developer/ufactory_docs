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
//00 05    U16, Length 
//1F       U8, Register
//00 00 FA 44       fp32, Jerk=2000 mm/s3 
```

</details>

```
// Response:
00 01 00 02 00 04 1F 00 00 01  
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 05    U16, Length 
//1F       U8, Register
//00       U8, State
//00 01    U16, The number of commands in the buffer
```

</details>



























