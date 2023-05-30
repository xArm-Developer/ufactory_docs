# 6 Axis Force Torque Sensor(200-212)

## Get external force detection data of 6 Axis Force Torque Sensor

**Register200（C8）**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 01 C8
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//C8       U8, Register
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 1A C8 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
```
{% endcode %}

<details>

<summary>Response Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 1A    U16, Length 
//C8       U8, Register
//00       U8, State
//00, 00, 00, 00, 00, 00, 00, 00,00, 00, 00, 00,00, 00, 00, 00,00, 00, 00, 00,00, 00, 00, 00     fp32, 
External force detection data:
After filtering, load and offset compensation
```
{% endcode %}

</details>







## Enable/Disable 6 Axis Force Torque Sensor

**Register201（C9）**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 02 C9 00
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//C9       U8, Register
//00       U8, 0-Disable; 1-Enable    
```

</details>

```
// Response:
00 01 00 02 00 02 C9 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//C9       U8, Register
//00       U8, State
```

</details>





## Set the control mode of 6 Axis Force Torque Sensor

**Register202（CA）**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 02 CA 00  
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//CA       U8, Register
//00       U8, 
control mode
0: non-force mode
1: impedance control mode
2: force control mode
```

</details>

```
// Response:
00 01 00 02 00 02 33 10
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//33       U8, Register
//10       U8, State
```

</details>



## Get the control mode of 6 Axis Force Torque Sensor

**Register203（CB）**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 02 CB
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//CB       U8, Register
```

</details>

```
// Response:
00 01 00 02 00 03 CB 00 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 03    U16, Length 
//CB       U8, Register
//00       U8, State
//00       U8, 
control mode
0: non-force mode
1: impedance control mode
2: force control mode
```

</details>





## Perform end payload identification

**Register204（CC）**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 02 CC 00
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//CC       U8, Register
//00       U8, 
0: 6 Axis Force Torque Sensor identification
1: current identification
```

</details>

```
// Response:
00 01 00 02 00 2A CC 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 2A    U16, Length   Type 0: 00,2A  Type 1: 00,12
//CC       U8, Register
//00       U8, State
//00,00,00,00    fp32, 4*n Byte
//00,00,00,00
    ...
//00,00,00,00
Identification result)
Type=0: N=10.
[weight(kg), Cx, Cy, Cz(mm), Fx0, Fy0, Fz0(N), Tx0, Ty0, Tz0(Nm)]
Type=1: N=4.
[weight(kg), offset_Cx, offset_Cy, offset_Cz(mm)]
```

</details>







## Set the payload and offset of 6 Axis Force Torque Sensor

**Register205（CD）**









