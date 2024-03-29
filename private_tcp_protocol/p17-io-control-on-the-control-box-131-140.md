# IO Control on the Control Box(131-140)

## Get controller digital input

**Register:131 (0x83)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 01 83  
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//83       U8, Register
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
//FF FD    U16, Parameter 1, input status of controller.

* Bit0 to Bit15 correspond to signals of input 0 to input 15.
* FF FD, is 1111 1111 1111 1101 in binary, means input 1 is low.
```

</details>

## Get controller analog input AI 0

**Register:132 (0x84)**

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
//00 12    U16, value of controller analog input 0, Range 0~4095 corresponding to 0~10V
```

</details>

## Get controller analog input AI 1

**Register:133 (0x85)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 01 85  
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//85       U8, Register
```

</details>

```
// Response:
00 01 00 02 00 04 85 00 00 15
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//85       U8, Register
//00       U8, State
//00 15    U16, controller analog input 1, Range 0~4095, corresponding to0~10V
```

</details>

## Set controller digital output

**Register:134 (0x86)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 05 86 80 00 80 00  
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 05    U16, Length 
//86       U8, Register
//80 00    U16, Set controller output 7 to 0.
//80 00    U16, Set controller output 15 to 0.
```

</details>

```
// Response:
00 01 00 02 00 02 86 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//86       U8, Register
//00       U8, State
```

</details>

## Set controller analog output AO 0

**Register:135 (0x87)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 03 87 00 00  
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 03    U16, Length 
//87       U8, Register
//00 00    U16, output voltage value, range 0~4095, corresponding to 0~10V.
```

</details>

```
// Response:
00 01 00 02 00 02 87 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//87       U8, Register
//00       U8, State
```

</details>

## Set controller analog output AO 1

**Register:136 (0x88)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 03 88 00 00  
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 03    U16, Length 
//88       U8, Register
//00 00    u16, output voltage value, range 0~4095, corresponding to 0~10V.
```

</details>

```
// Response:
00 01 00 02 00 02 88 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//88       U8, Register
//00       U8, State
```

</details>

## Set controller digital input function

**Register:137 (0x89)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 03 89 0F 00
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 03    U16, Length 
//89       U8, Register
//07       U8, Controller digital input number,0~15
//00       U8, Function number
0: General input
1: Stop moving
2: Safeguard reset
11: Offline task
12: Manual mode
13: Reduced mode
14: Enable robot
```

</details>

```
// Response:
00 01 00 02 00 02 89 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//89       U8, Register
//00       U8, State
```

</details>

## Set controller digital output function

**Register:138 (0x8A)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 03 8A 0F 00  
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 03    U16, Length 
//8A       U8, Register
//0F       U8, Controller digital output number, 0~15
//00       U8, Function number
0: General output
1: Motion stopped
2: Robot moving
11: Erroring
12: Warning
13: Collision
14: Manual mode
15: Offline task running
16: Reduced mode
17: Robot enabled
18: Emergency stop is pressed
```

</details>

```
// Response:
00 01 00 02 00 02 8A 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//8A       U8, Register
//00       U8, State
```

</details>

