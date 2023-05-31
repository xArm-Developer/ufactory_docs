# 485 peripheral transparent transmission(240-241)



## Peripheral 485 transparent transmission timeout

**Register：240(F0)**

```
// Request:
00 01 00 02 00 0B F0 01 
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 0B    U16, Length 
//F0       U8, Register
//01       U8, Timeout(s)
```

</details>

```
// Response:
00 01 00 02 00 08 F0 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 08    U16, Length 
//F0       U8, Register
//00       U8, State
```

</details>





## Peripheral 485 transparent transmission communication

**Register：241(F1)**

```
// Request:
00 01 00 02 00 0B F1 09 00 
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 0B    U16, Length 
//F1       U8, Register
//09       U8, 
Hhost ID:
Tool485：09
Control box 485：0A
//00    User data
```

</details>

```
// Response:
00 01 00 02 00 08 F1 00 09 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 08    U16, Length 
//F1       U8, Register
//00       U8, State
//09       U8, 
Hhost ID:
Tool485：09
Control box 485：0A
//00    User data
```

</details>

