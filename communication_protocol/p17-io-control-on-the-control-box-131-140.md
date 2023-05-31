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



## Get analog input AI2

**Register：133 (85)**

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
//00 15    U16,
Analog input1
Analog input1, Range 0~4095
Corresponding to0~10V
```

</details>







## Set configurable digital GPIO output

**Register：134 (86)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 03 86 80 00 80 00  
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 03    U16, Length 
//86       U8, Register
//80 00    U16，
The signal of GPIO7 is low
GPIO signal: 
the upper 8 bits are the enable bits, 
and the lower 8 bits are the set bits
//80 00    U16, 
The signal of GPIO15 is low
GPIO signal: 
the upper 8 bits are the enable bits, 
and the lower 8 bits are the set bit
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







## Set the analog output AO1

**Register：135 (87)**

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
//00 00    U16,
Analog output 0 is 0
 Analog output0
 Range 0~4095
Corresponding to 0~10V
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







## Set the analog output AO2

**Register：136 (88)**

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
//00 00    u16, 
Analog output 1 is 0
 Analog output 1, 
 Range 0~4095
Corresponding to 0~10V
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





## Configure digital input IO function

**Register：137 (89)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 03 89 07 00
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 03    U16, Length 
//89       U8, Register
//07       U8, 
GPIO15
GPIO serial number,0~7
Corresponding to GPIO0 ~ GPIO7
//00       U8,
Function number
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





## Configure digital output IO function

**Register：138 (8A)**

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
//0F       U8, 
GPIO15
GPIO serial number,0~15
Corresponding to GPIO0 ~ GPIO15
//00       U8, 
Function number
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
18:Press down E stop button
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







## Get GPIO state

**Register：139 (8B)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 01 8B  
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//8B       U8, Register
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 02 24 8B 00 00 00 01 00 FF FD 00 00 FF 00 00 11 00 15 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  00 00 00 
```
{% endcode %}

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 24    U16, Length 
//8B       U8, Register
//00       U8, State
//00	   U8, 
GPIO Module status
0: Normal
3: Gripper has error message
6: Communication failure
//00	   U8,
GPIO module error code
 0: Normal
Not 0: Error code
//01 00	U16, Digital input function IO status
//FF FD	U16, Digital input configuration IO status
//00 00	U16, Digital output function IO status
//FF 00	U16, Digital output configuration IO status
//00 11	U16, Analog input 1
//00 15	U16, Analog input 2
//00 00	U16, Analog output 1
//00 00	U16, Analog output 2
//00 00 00 00 00 00 00 00   U8, Digital input IO0-IO7 configuration message
//00 00 00 00 00 00 00 00   U8, Digital output IO0-IO7 configuration message
//00 00 00 00 00 00 00 00   U8, Digital input IO8-IO15 configuration message
//00 00 00 00 00 00 00 00   U8, Digital output IO8-IO15 configuration message
```

</details>

















