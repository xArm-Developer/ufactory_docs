# RS485 Control on the End-effector(127-128)

## Set the end RS485 band rate

**Register: 127 (7F)**

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
//00 00 30 41	fp32,
0:4800 bps； 1:9600bps；2:19200bps；3:38400bps；
4:57600bps；5:115200bps
6:230400bps；7: 460800bps；8:921600bps；9: 1000000bps；
10:1500000bps；11:2000000bps；12:2500000bps；
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







## IO control on the End-effector

**Register：127 (7F)**

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
//1A 15	   U16,Address
//00 00 80 43	fp32,
Open 0
Data:
256.0: Close 0  257.0: Open 
512.0: Close 1  514: Open 1
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









## Get the input of the end digital quantity

**Register：128 (80)**

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
//0A 14	   U16,Address
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





## Get the input of the end analog

**Register：128 (80)**

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
//0A 16	   U16,Address
Address 0A 16 ： input 0
Address 0A 17 ： input 1
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
//00 00 07 0D    U8, 
Analog input, range 0~4095,
Corresponding to 0~3.3V
```
{% endcode %}

</details>

















