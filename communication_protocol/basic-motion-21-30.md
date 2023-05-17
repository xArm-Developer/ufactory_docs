# Basic Motion(21-30)

## Cartesian linear motion

**Register21（0x15）**

Example:

> x=400mm
>
> y=0mm
>
> z=200mm
>
> roll=π
>
> pitch=0
>
> yaw=0
>
> speed=100mm/s
>
> acceleration=2000mm/s2=500\*π/180rad/s2
>
> 0motion time=0

<pre data-overflow="wrap"><code>// Request
00 01 00 02 00 25 15 <a data-footnote-ref href="#user-content-fn-1">00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 42 00 00 FA 44 00 00 00 00 </a>
</code></pre>

<pre><code>// Response
00 01 00 02 00 04 15 <a data-footnote-ref href="#user-content-fn-2">00 00 01</a>
</code></pre>



## Linear motion with circular arc

**Register：22 (0x16)**

Example:

> x=400mm
>
> y=0mm
>
> z=200mm
>
> roll=π
>
> pitch=0
>
> yaw=0
>
> motion speed=100 mm/s
>
> acceleration=2000mm/s2
>
> motion time 0
>
> Arc blending radius=50 mm

<pre data-overflow="wrap"><code>// Request
00 01 00 02 00 29 16 <a data-footnote-ref href="#user-content-fn-3">00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 42 00 00 FA 44 00 00 00 00 00 00 48 42 </a>
</code></pre>

<pre><code>// Response
00 01 00 02 00 04 16 00<a data-footnote-ref href="#user-content-fn-4"> 00 01</a>
</code></pre>



## Joint motion (P2P motion)

**Register23（0x17）**

Example：&#x20;

> Joint1-Joint7: π/3,0,0,0,0,0,0&#x20;
>
> speed=20_π/180rad/s_
>
> _acceleration=500_π/180rad/s2
>
> motion time=0

<pre data-overflow="wrap" data-full-width="false"><code>// Request
00 01 00 02 00 29 17 <a data-footnote-ref href="#user-content-fn-5">92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C2 B8 B2 3E 58 A0 0B 41 00 00 00 00</a>
</code></pre>

```
//Response
00 01 00 02 00 04 17 00 00 01
```



## Joint motion with circular arc

**Register：24 (0x18)**

Example:

> Joint1-Joint7: π/3,0,0,0,0,0,0&#x20;
>
> speed=20_π/180rad/s_
>
> _acceleration=500_π/180rad/s2
>
> Arc blending radius=10mm

<pre data-overflow="wrap"><code>// Request
00 01 00 02 00 29 18 <a data-footnote-ref href="#user-content-fn-6">92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C2 B8 B2 3E 58 A0 0B 41 00 00 020 41 </a>
</code></pre>

```
// Response
00 01 00 02 00 05 18 00 00 01 00
```



## Return to zero position

**Register：25 (0x19)**

Example:

> speed=50rad/s
>
> acceleration=600rad/s2
>
> motion time=0

<pre><code>// Request
00 01 00 02 00 0D 19 <a data-footnote-ref href="#user-content-fn-7">DB 0F 49 40 F3 66 DF 40 00 00 00 00</a> 
</code></pre>

```
// Response
00 01 00 02 00 04 19 00 00 01
```



## Pause commands, Command delay

**Register：26(0x1A)**

Example:

> Pause time=3s

<pre><code>// Request
00 01 00 02 00 05 1A <a data-footnote-ref href="#user-content-fn-8">00 00 40 40 </a>
</code></pre>

```
// Response
00 01 00 02 00 04 1A 00 00 01
```





## Circular motion

**RRegister：27 (0x1B)**

{% hint style="warning" %}
The motion calculates the trajectory of the space circle according to the three-point coordinates, and the three-point coordinates are (current starting point, parameter 1, parameter 2)
{% endhint %}

Example:

> **Parameter 1**
>
> x=400mm
>
> y=0mm
>
> z=200mm
>
> roll=π
>
> pitch=0
>
> yaw=0
>
> **Parameter 2**
>
> x=400mm
>
> y=0mm
>
> z=200mm
>
> 0roll=π
>
> pitch=0
>
> yaw=0
>
> speed=100mm/s
>
> 2000mm/s2
>
> acceleration500\*π/180rad/s2
>
> motion time=0
>
> Percentage of the length of arc in motion to circumference=50%

<pre data-overflow="wrap"><code>// Request
00 01 00 02 00 41 1B <a data-footnote-ref href="#user-content-fn-9">00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 43 00 00 C8 42 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 42 00 00 FA 44 00 00 00 00 00 00 48 42 </a>
</code></pre>

```
// Response
00 01 00 02 00 04 1B 00 00 01
```















[^1]: 

[^2]: 

[^3]: 

[^4]: 

[^5]: 

[^6]: 

[^7]: 

[^8]: 

[^9]: 
