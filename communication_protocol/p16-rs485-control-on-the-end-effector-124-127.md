# RS485 Control on the End-effector(127-128)

## Set the robot RS485 baud rate

**Register: 127 (0x7F)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 08 7F 09 1A 0B 00 00 30 41
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 08    U16, Length 
//7F       U8, Register
//09	   U8, Host ID
//1A 0B	   U16,Address
//00 00 30 41	FP32, Parameter 1, by default is 11(2000000 bps).
0: 4800 bps； 
1: 9600 bps；
2: 19200 bps；
3: 38400 bps；
4: 57600 bps；
5: 115200 bps
6: 230400 bps；
7: 460800 bps；
8: 921600 bps；
9: 1000000 bps；
10: 1500000 bps；
11: 2000000 bps；
12: 2500000 bps；
```

</details>

```
// Response:
00 01 00 02 00 01 7F
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//7F       U8, Register
```

</details>

## Set tool digital output

**Register:127 (0x7F)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 08 7F 09 1A 15 00 00 80 43
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 08    U16, Length 
//7F       U8, Register
//09	   U8, Host ID
//1A 15	   U16, Register start address
//00 00 80 43	FP32, Parameter 1, 256 in decimal, set tool digital output 0 low
Data:
256: Set tool digital output 0 to low
257: Set tool digital output 0 to high
512: Set tool digital output 1 to low
514: Set tool digital output 0 to high
```

</details>

```
// Response:
00 01 00 02 00 01 7F 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//7F       U8, Register
//00       U8, State
```

</details>

## Get the status of the tool digital input

**Register:128 (0x80)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 04 80 09 0A 14
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//80       U8, Register
//09	   U8, Host ID
//0A 14	   U16, Register start address
```

</details>

```
// Response:
00 01 00 02 00 06 80 00 00 00 00 00
```

<details>

<summary>Response Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 06    U16, Length 
//80       U8, Register
//00       U8, State
//00 00 00 00    U8, 
The end byte indicates the input status. The digit of 0 corresponds to input 0 and the digit of 1 corresponds to input 1.
```
{% endcode %}

</details>

## Get the value of the tool analog input

**Register:128 (0x80)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 04 80 09 0A 16
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//80       U8, Register
//09	   U8, Host ID
//0A 16	   U16, Address
Address 0A 16 ： Analog input 0
Address 0A 17 ： Analog input 1
```

</details>

```
// Response:
00 01 00 02 00 06 80 00 00 07 0D
```

<details>

<summary>Response Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 06    U16, Length 
//80       U8, Register
//00       U8, State
//00 00 07 0D    U8, analog input, range 0~4095, corresponding to 0~3.3V
```
{% endcode %}

</details>
