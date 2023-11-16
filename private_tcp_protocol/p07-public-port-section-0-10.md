# Public Port Section（0-10）

## Get version information

**Register:1(0x01)**

```
// Request:
00 01 00 02 00 01 01 
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//01       U8, Register
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 2A 01 00 36 2C 36 2C 58 49 31 32 30 32 2C 41 43 31 33 30 32 2C 76 31 2E 31 32 2E 31 30 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```
{% endcode %}

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 2A    U16, Length 
//01       U8, Register
//00       U8, State
//36 2C 36 2C   U8, Type, Axes, 6,6,
//58 49 31 32 30 32 2C    U8, xArm Version XI1202,
//41 43 31 33 30 32 2C    U8, Control Box Version AC1302,
//76 31 2E 31 32 2E 31 30    U8, Firmware Version v1.12.10
//00 00 00 00 00 00 00 00 00 00 00 00 00 00   U8, null  
```

</details>

## Get SN information

**Register:2(0x02)**

```
// Request:
 00 01 00 02 00 01 02
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//02       U8, Register
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 2A 02 00 58 49 31 32 30 32 30 34 32 30 31 42 30 32 00 41 43 31 33 30 32 30 32 42 30 32 4C 30 32 0A 00 00 00 00 00 00 00 00 00 00
```
{% endcode %}

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 2A    U16, Length 
//02       U8, Register
//00       U8, State
//58 49 31 32 30 32 30 34 32 30 31 42 30 32 00      U8, XI120204201B02
//41 43 31 33 30 32 30 32 42 30 32 4C 30 32 0A      U8, AC130202B02L02
//00 00 00 00 00 00 00 00 00 00     U8, null
```

</details>

## Reload friction parameters

**Register:4(0x04)**

```
// Request:
00 01 00 02 00 01 04 
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//04       U8, Register
```

</details>

```
// Response:
00 01 00 02 00 02 04 10 
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//04       U8, Register
//10       U8, State
```

</details>

## Get the value of Joint torque or actual current

**Register:5(0x05)**

```
// Request:
00 01 00 02 00 01 05
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//05       U8, Register
```

</details>

<pre><code>// Response:
<strong>00 01 00 02 00 03 05 00 00
</strong></code></pre>

<details>

<summary>Response Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 03    U16, Length 
//05       U8, Register
//00       U8, State
//00       U8, 0: Theoretical joint torque 1: Actual current of servo
```
{% endcode %}

</details>

## Get the radius of rotation of the target joint relative to the TCP

**Register:6(0x06)**

```
// Request:
00 01 00 02 00 02 06 06 
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//06       U8, Register
//06       U8, Parameter 1(target joint:6)
```

</details>

```
// Response:
00 01 00 02 00 06 06 10 00 00 00 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 06    U16, Length 
//06       U8, Register
//10       U8, State
//00 00 00 00    U8, Parameter 1(Radius of rotation)
```

</details>

## Read whether some configs are enabled or not

**Register: 07(0x07)**

```
// Request:
00 01 00 02 00 01 07
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//07       U8,  Register
```

</details>

```
// Response:
00 01 00 02 00 06 07 00 00 00 00 01
```

<details>

<summary>Response Description</summary>

```
//00 01        U16, Transaction ID
//00 02        U16, Protocol Identifier
//00 06        U16, Length 
//07           U8, Register
//00           U8, State
//00 00 00 01  U32, bit0: Bypassing Singularities, bit1~31: Reserved.
```

</details>

## Remote shut down the operating system

**Register:10(0x0A）**

```
// Request:
00 01 00 02 00 02 0A 01 
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//0A       U8,  Register
//01       U8,  1:remote shut down the operating system temporarily 2:reboot
```

</details>

```
// Response:
00 01 00 02 00 02 0A 10
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//0A       U8, Register
//10       U8, State
```

</details>
