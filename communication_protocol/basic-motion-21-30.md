# Basic Motion(21-30)

## Cartesian linear motion

**Register21（0x15）**

{% code overflow="wrap" %}
```
// Request
00 01 00 02 00 25 15 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 42 00 00 FA 44 00 00 00 00
```
{% endcode %}

<details>

<summary> Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 25    U16, Length 
//15       U8, Register
//00 00 C8 43	fp32, x=400mm
//00 00 00 00	fp32, z=200mm
//00 00 48 43	fp32, y=0mm
//DB 0F 49 40	fp32, roll=π
//00 00 00 00	fp32, pitch=0
//00 00 00 00	fp32, yaw=0
//00 00 C8 42	fp32, speed=100mm/s
//00 00 FA 44	fp32, acceleration=2000mm/s2）=500*π/180rad/s2
//00 00 00 00	fp32, 0motion time=0
```

</details>

<pre><code>// Response
00 01 00 02 00 04 15 <a data-footnote-ref href="#user-content-fn-1">00 00 01</a>
</code></pre>

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//15       U8, Register
//00       U8, State
//00 01    U16, Parameter
```

</details>



## Linear motion with circular arc

**Register：22 (0x16)**

{% code overflow="wrap" %}
```
// Request
00 01 00 02 00 29 16 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 42 00 00 FA 44 00 00 00 00 00 00 48 42
```
{% endcode %}

<details>

<summary> Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 29    U16, Length 
//16       U8, Register
//00 00 00 00 fp32, y=0mm
//00 00 48 43 fp32, z=200mm
//DB 0F 49 40 fp32, roll=π
//00 00 00 00 fp32, pitch=0
//00 00 00 00 fp32, yaw=0
//00 00 C8 42 fp32, motion speed=100 mm/s
//00 00 FA 44 fp32, acceleration=2000mm/s2
//00 00 00 00 fp32, motion time 0
//00 00 48 42 fp32, Arc blending radius=50 mm
```

</details>

```
// Response
00 01 00 02 00 04 16 00 00 01
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//15       U8, Register
//00       U8, State
//00 01    U16, Parameter
```

</details>



## Joint motion (P2P motion)

**Register23（0x17）**

{% code overflow="wrap" fullWidth="false" %}
```
// Request
00 01 00 02 00 29 17 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C2 B8 B2 3E 58 A0 0B 41 00 00 00 00
```
{% endcode %}

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 29    U16, Length 
//17       U8, Register
//92 0A 86 3F	fp32, Joint1=π/3 
//00 00 00 00	fp32, Joint2=0
//00 00 00 00	fp32, Joint3=0
//00 00 00 00	fp32, Joint4=0
//00 00 00 00	fp32, Joint5=0
//00 00 00 00	fp32, Joint6=0
//00 00 00 00	fp32, Joint7=0
//C2 B8 B2 3E	fp32, speed=20π/180rad/s
//58 A0 0B 41	fp32, 500π/180rad/s2
//00 00 00 00	fp32, motion time=0
```

</details>

```
//Response
00 01 00 02 00 04 17 00 00 01
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//17       U8, Register
//00       U8, State
//00 01    U16, Parameter
```

</details>



## Joint motion with circular arc

**Register：24 (0x18)**

{% code overflow="wrap" %}
```
// Request
00 01 00 02 00 29 18 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C2 B8 B2 3E 58 A0 0B 41 00 00 20 41
```
{% endcode %}

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 29    U16, Length 
//18       U8, Register
//92 0A 86 3F	fp32, Joint1=π/3
//00 00 00 00	fp32, Joint2=0
//00 00 00 00	fp32, Joint3=0
//00 00 00 00	fp32, Joint4=0
//00 00 00 00	fp32, Joint5=0
//00 00 00 00	fp32, Joint6=0
//00 00 00 00	fp32, Joint7=0
//C2 B8 B2 3E	fp32, speed=20π/180rad/s
//58 A0 0B 41	fp32, acceleration=500π/180rad/s2
//00 00 20 41	fp32, Arc blending radius=10mm
```

</details>

```
// Response
00 01 00 02 00 04 18 00 00 01 
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//18       U8, Register
//00       U8, State
//00 01    U16, Parameter
```

</details>



## Return to zero position

**Register：25 (0x19)**

```
// Request
00 01 00 02 00 0D 19 DB 0F 49 40 F3 66 DF 40 00 00 00 00
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 0D    U16, Length 
//19       U8, Register
//DB 0F 49 40	fp32, speed=50rad/s
//F3 66 DF 40	fp32, acceleration=600rad/s2
//00 00 00 00	fp32, motion time=0
```

</details>

```
// Response
00 01 00 02 00 04 19 00 00 01
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//19       U8, Register
//00       U8, State
//00 01    U16, Parameter
```

</details>



## Pause commands, Command delay

**Register：26(0x1A)**

```
// Request
00 01 00 02 00 05 1A 00 00 40 40
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 05    U16, Length 
//1A       U8, Register
//00 00 40 40 fp32, Pause time=3s
```

</details>

```
// Response
00 01 00 02 00 04 1A 00 00 01
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//1A       U8, Register
//00       U8, State
//00 01    U16, Parameter
```

</details>





## Circular motion

**RRegister：27 (0x1B)**

{% hint style="warning" %}
The motion calculates the trajectory of the space circle according to the three-point coordinates, and the three-point coordinates are (current starting point, parameter 1, parameter 2)
{% endhint %}

{% code overflow="wrap" %}
```
// Request
00 01 00 02 00 41 1B 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 43 00 00 C8 42 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 42 00 00 FA 44 00 00 00 00 00 00 48 42
```
{% endcode %}

<details>

<summary>Request Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 41    U16, Length 
//1B       U8, Register
//00 00 C8 43 fp32, x=400mm
//00 00 00 00 fp32, y=0mm
//00 00 48 43 fp32, z=200mm
//DB 0F 49 40 fp32, roll=π
//00 00 00 00 fp32, pitch=0
//00 00 00 00 fp32, yaw=0
//00 00 C8 43 fp32, x=400mm
//00 00 C8 42 fp32, y=0mm
//00 00 48 43 fp32, z=200mm
//DB 0F 49 40 fp32, 0roll=π
//00 00 00 00 fp32, pitch=0
//00 00 00 00 fp32, yaw=0
//00 00 C8 42 fp32, speed=100mm/s
//00 00 FA 44 fp32, acceleration500*π/180rad/s2
//00 00 00 00 fp32, motion time=0
//00 00 48 42 fp32, Percentage of the length of arc in motion to circumference=50%
```
{% endcode %}

</details>

```
// Response
00 01 00 02 00 04 1B 00 00 01
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//1B       U8, Register
//00       U8, State
//00 01    U16, Parameter
```

</details>





## Linear motion in tool coordinate system

**Register：28 (1C)**

{% hint style="warning" %}
Move in Cartesian linear relative motion based on the current tool coordinate system.
{% endhint %}

{% code overflow="wrap" %}
```
// Request
00 01 00 02 00 25 1C 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 C2 B8 B2 3E 00 00 FA 44 00 00 00 00 
```
{% endcode %}

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 25    U16, Length 
//1C       U8, Register
//00 00 C8 43	fp32, x=400mm
//00 00 00 00	fp32, y=0mm
//00 00 48 43	fp32, z=200mm
//DB 0F 49 40	fp32, roll=π
//00 00 00 00	fp32, pitch=0
//00 00 00 00	fp32, yaw=0
//C2 B8 B2 3E	fp32, speed=20mm/s
//00 00 FA 44	fp32, acceleration=2000mm/s2
//00 00 00 00	fp32, motion time=0
```

</details>

```
// Response
00 01 00 02 00 04 1C 00 00 01
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//1C       U8, Register
//00       U8, State
//00 01    U16, Parameter
```

</details>





## Servoj motion

**Register：29 (1D)**

{% code overflow="wrap" %}
```
// Request
00 01 00 02 00 29 1D 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
```
{% endcode %}

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 29    U16, Length 
//1D       U8, Register
//92 0A 86 3F	fp32, Joint1=π/3
//00 00 00 00	fp32, Joint2=0
//00 00 00 00	fp32, Joint3=0
//00 00 00 00	fp32, Joint4=0
//00 00 00 00	fp32, Joint5=0
//00 00 00 00	fp32, Joint6=0
//00 00 00 00	fp32, Joint7=0
//00 00 00 00	fp32, speed  meaningless  0
//00 00 00 00	fp32, acceleration  meaningless  0
//00 00 00 00	fp32, motion time  meaningless  0
```

</details>

```
// Response
00 01 00 02 00 02 1D 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//1D       U8, Register
//00       U8, State
```

</details>





## Servo\_cartesian motion

**Register：30 (1E)**

{% hint style="warning" %}
Interface for receiving high-frequency continuous cartesian trajectory motion.
{% endhint %}

{% code overflow="wrap" %}
```
// Request
00 01 00 02 00 25 1E 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
```
{% endcode %}

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 25    U16, Length 
//1E       U8, Register
//00 00 C8 43	fp32, x=400mm
//00 00 00 00	fp32, y=0mm
//00 00 48 43	fp32, z=200mm
//DB 0F 49 40	fp32, roll=π
//00 00 00 00	fp32, pitch=0
//00 00 00 00	fp32, yaw=0
//00 00 00 00	fp32, speed, meaningless, 0
//00 00 00 00	fp32, acceleration, meaningless, 0
//00 00 00 00	fp32, 
Motion coordinate system：
0 ：the base coordinate system
1 ：the tool coordinate system
```

</details>

```
// Response
00 01 00 02 00 02 1E 00 
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//1E       U8, Register
//00       U8, State
```

</details>

[^1]: 
