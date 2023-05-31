# Special IO commands(142-147)

## Operation of general digital IO delay output of control box

**Register142（8E）**

{% hint style="warning" %}
Starting from the moment when the command is issued, the digital output switch of the control box is triggered after a period of time.
{% endhint %}

<pre><code><strong>// Request:
</strong>00 01 00 02 00 07 8E 00 01 00 00 40 40
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 07    U16, Length 
//8E       U8, Register
//00       U8, Digital IO port number of control box (0-7)
//01       U8, Switch value (0 is off, 1 is on)
//00 00 40 40     fp32, 
The time when the delay takes effect from the current time=3s
```

</details>

```
// Response:
00 01 00 02 00 02 8E 00 
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//8E       U8, Register
//00       U8, State
```

</details>





## Operation of the end general digital IO delay output

**Register143（8F）**

{% hint style="warning" %}
Starting from the moment when the command is issued, the end digital output switch is triggered after a period of time.
{% endhint %}

<pre><code><strong>// Request:
</strong>00 01 00 02 00 07 8F 00 01 00 00 40 40
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 07    U16, Length 
//8F       U8, Register
//00       U8, The end digital IO port number of control box (0/1)
//01       U8, Switch value (0 is off, 1 is on
//00 00 40 40    fp32, 
The time when the delay takes effect from the current time=3s
```

</details>

```
// Response:
00 01 00 02 00 02 8F 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//8F       U8, Register
//00       U8, State
```

</details>









## Operation triggered by the position of the general digital IO of the control box

**Register144（90）**

{% hint style="warning" %}
Starting from the moment when the instruction is issued, the TCP triggers the digital output switch of the control box after it reaches the specified position area, which is valid for a single time
{% endhint %}

<pre><code><strong>// Request:
</strong>00 01 00 02 00 13 90 00 01 00 00 c8 43 00 00 00 00 00 00 48 43 00 00 48 42 
</code></pre>

<details>

<summary>Request Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 13    U16, Length 
//90       U8, Register
//00	U8, IO port number of the control box: 0-7
//01	U8, Switch value (on_off): 0 is off, 1 is on
//00 00 c8 43	fp32, x=400mm
//00 00 00 00	fp32, y=0mm
//00 00 48 43	fp32, z=200mm
//00 00 48 42	fp32, 
Tolerance radius (tol_r=50mm),
when the robotic arm reaches the specified position (the area of the sphere specified by the trigger position point (x, y, z) as the center (the radius of the sphere is the tolerance radius)), trigger IO . If the tolerance radius is not set, when the robotic arm passes the specified point at a speed other than 0, it may cause a missed 
```
{% endcode %}

</details>

```
// Response:
00 01 00 02 00 02 90 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//90       U8, Register
//00       U8, State
```

</details>





## Operation triggered by the position of the end general digital IO

**Register145（91）**

{% hint style="warning" %}
Starting from the moment when the instruction is issued, the TCP triggers the end digital output switch after it reaches the specified position area, which is valid for a single time.
{% endhint %}

<pre><code><strong>// Request:
</strong>00 01 00 02 00 13 91 00 01 00 00 c8 43 00 00 00 00 00 00 48 43 00 00 48 42 
</code></pre>

<details>

<summary>Request Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 13    U16, Length 
//91       U8, Register
//00	U8, IO port number of the end: 0/1
//01 U8,Switch value (on_off): 0 is off, 1 is on
//00 00 c8 43	fp32, x=400mm
//00 00 00 00	fp32, y=0mm
//00 00 48 43	fp32, z=200mm
//00 00 48 42	fp32, 
Tolerance radius (tol_r=50mm)
when the robotic arm reaches the specified position (the area of the sphere specified by the trigger position point (x, y, z) as the center (the radius of the sphere is the tolerance radius)), trigger IO . If the tolerance radius is not set, when the robotic arm passes the specified point at a speed other than 0, it may cause a missed trigger because it cannot be accurately detected.
```
{% endcode %}

</details>

```
// Response:
00 01 00 02 00 02 91 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//91       U8, Register
//00       U8, State
```

</details>







## Whether the control box and terminal IO are automatically cleared in the STOP state

**Register146（92）**

```
// Request:
00 01 00 02 00 03 92 00 01 
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 92    U16, Length 
//00       U8, Register
//00       U8, 
IO type
0 represents the control box IO
1 represents the end IO
//01       U8, 
Switch value
0 is off, the STOP status is not cleared
1 is on, and the STOP status is cleared
```

</details>

```
// Response:
00 01 00 02 00 04 92 00 00 01
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//92       U8, Register
//00       U8, State
//00 01    U16, Parameter1
```

</details>







## Operation triggered by the position of the general Analog IO of the control box

**Register147（93）**

{% hint style="warning" %}
Starting from the moment when the command is issued, the TCP triggers the analog output switch of the control box after it reaches the specified position area, which is valid for a single time.
{% endhint %}

```
// Request:
00 01 00 02 00 14 93 00 00 00 00 c8 43 00 00 00 00 00 00 48 43 00 00 48 42 
```

<details>

<summary>Request Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 92    U16, Length 
//00       U8, Register
//00	U8, IO port number of the control box: 0/1
//00 00	U16, 
Analog output 0 is 0
Analog output 0, Range 0~4095
Corresponding to 0~10V

//00 00 c8 43	fp32, x=400mm
//00 00 00 00	fp32, y=0mm
//00 00 48 43	fp32, z=200mm
//00 00 48 42	fp32, 
Tolerance radius (tol_r=50mm),
when the robotic arm reaches the specified position (the area of the sphere specified by the trigger position point (x, y, z) as the center (the radius of the sphere is the tolerance radius)), trigger IO . If the tolerance radius is not set, when the robotic arm passes the specified point at a speed other than 0, it may cause a missed 
```
{% endcode %}

</details>

```
// Response:
00 01 00 02 00 02 93 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//93       U8, Register
//00       U8, State
```

</details>







