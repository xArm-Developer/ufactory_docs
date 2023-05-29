# IO Control on the Control Box(131-140)

## Get configurable digital GPIO input

**Register：131 (83)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 01 83  
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//03       U8, Register
```

</details>

```
// Response:
00 01 00 02 00 04 83 00 FF FD
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//83       U8, Register
//00       U8, State
//FF FD    U16,
The signal of GPIO1 is low）
GPIO signal: Bit0 ~ Bit15 Correspond to signals of GPIO0~GPIO15
```

</details>



## Get analog input AI1

**Register：132 (84)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 01 84  
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//84       U8, Register
```

</details>

```
// Response:
00 01 00 02 00 04 84 00 00 12
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//84       U8, Register
//00       U8, State
//00 12    U16,
Analog input0
Analog input0, Range 0~4095
Corresponding to 0~10V
```

</details>



