# Special IO commands(142-147)

## Set controller digital output delay&#x20;

**Register:142(0x8E）**

{% hint style="warning" %}
After the delay time has elapsed the controller digital output will be activated.
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
//00       U8, Controller digital output number 0~15, here is CO 0.
//01       U8, Digital output value, 0 or 1, here is 1.
//00 00 40 40     FP32, delay time, 3 seconds.
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

## Set tool digital output delay

**Register:143(0x8F）**

{% hint style="warning" %}
After the delay time has elapsed the tool digital output will be activated.
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
//00       U8, Tool digital output number, 0~1, here is TO 0.
//01       U8, Digital output value, 0 or 1, here is 1.
//00 00 40 40    FP32, delay time, 3 seconds.
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

## Position trigger of controller digital output

**Register:144(0x90）**

{% hint style="warning" %}
Controller digital output will be activated when the robot reaches the specified area, which is valid for a single time
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
//00	   U8, Controller digital output number, 0~15, here is CO 0.
//01	   U8, Digital output value, 0(low) or 1(high) , here is 1.
//00 00 c8 43	FP32, x=400mm
//00 00 00 00	FP32, y=0mm
//00 00 48 43	FP32, z=200mm
//00 00 48 42	FP32, tolerance radius, here is 50 mm.
* When the robot reaches the area (400,0,200) with the tolerance of 50 mm, controller digital outpout 0 will be set to 1(high). 
*If the tolerance radius is not set, it will not work. 
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

## Position triggered of tool digital output

**Register:145(0x91）**

{% hint style="warning" %}
Tool digital output will be activated when the robot reaches the specified area, which is valid for a single time
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
//00	   U8, Tool digital output number, 0~1, here is TO 0.
//01       U8, Digital output value, 0(low) or 1(high) , here is 1.
//00 00 c8 43	FP32, x=400mm
//00 00 00 00	FP32, y=0mm
//00 00 48 43	FP32, z=200mm
//00 00 48 42	FP32, tolerance radius, here is 50 mm.
* When the robot reaches the area (400,0,200) with the tolerance of 50 mm, tool digital outpout 0 will be set to 1(high) . 
*If the tolerance radius is not set, it will not work. 
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

**Register:146(0x92）**

```
// Request:
00 01 00 02 00 03 92 00 01 
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 03    U16, Length 
//92       U8, Register
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

## Position trigger of controller analog output

**Register:147(0x93）**

{% hint style="warning" %}
Controller analog output will be activated when the robot reaches the specified area, which is valid for a single time
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
//00 14    U16, Length 
//93       U8, Register
//00	   U8, Controller analog output number 0~1, here is 0.
//00 00	   U16, Analog output value, range 0~4095, corresponding to 0~10 V.

//00 00 c8 43	FP32, x=400mm
//00 00 00 00	FP32, y=0mm
//00 00 48 43	FP32, z=200mm
//00 00 48 42	FP32, tolerance radius, here is 50 mm.
* When the robot reaches the area (400,0,200) with the tolerance of 50 mm, controller analog outpout 0 will be set to 0 V. 
*If the tolerance radius is not set, it will not work. 
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
