# System State(11-20)

## Enable/Disable servo (System reset)

**Register：11(0x0B)**

{% hint style="warning" %}
The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.
{% endhint %}

Example:

> **Joint Number(Select all joints)**
>
> 1-7：Motor joint(1-7)
>
> 8：Select all joints
>
> **Whether to enable the servo**
>
> 1：Enable servo
>
> 0：Disable servo

<pre><code>// Request
00 01 00 02 00 03 0B  <a data-footnote-ref href="#user-content-fn-1">08 01</a>
</code></pre>

<pre><code>// Response
00 01 00 02 00 02 0B <a data-footnote-ref href="#user-content-fn-2">10</a>
</code></pre>



## Motion state setting

**Register：12(0x0C)**

Example:

> Motion Sate
>
> 3: Suspend the current motion
>
> 4: Stop all current motion (restart the system)
>
> 0: Enter the motion mode

<pre><code>// Request
00 01 00 02 00 02 0C <a data-footnote-ref href="#user-content-fn-3">00</a>  
</code></pre>

<pre><code>// Response
00 01 00 02 00 02 0C <a data-footnote-ref href="#user-content-fn-4">00</a>
</code></pre>



## Get the motion state

**Register：13 (0x0D)**

Example:

> Motion state：
>
> 1：In motion
>
> 2：Sleep
>
> 3：Suspend
>
> 4：Stop
>
> 5： System reset: The user just enters the state after the mode switch or changes some settings (such as TCP offset, sensitivity, etc.). The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.

```
// Request
00 01 00 02 00 01 0D 
```

<pre><code>// Response
00 01 00 02 00 03 0D <a data-footnote-ref href="#user-content-fn-5">00 02</a>
</code></pre>



## Get the number of commands in the command buffer

**Register：14 (0x0E)**

Example:

> The number of commands in the buffer

```
// Request
00 01 00 02 00 01 0E
```

<pre><code>// Response
00 01 00 02 00 04 0E <a data-footnote-ref href="#user-content-fn-6">00 00 00</a>
</code></pre>



## Get error and warning code

**Register：15 (0x0F)**

Example:

> Error code   Warning code

```
// Request
00 01 00 02 00 01 0F
```

<pre><code>// Response
00 01 00 02 00 04 0F <a data-footnote-ref href="#user-content-fn-7">00 00 00</a>
</code></pre>



## Clear control box error (System reset)

**Register：16 (0x10)**

{% hint style="warning" %}
The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.
{% endhint %}

```
// Request
00 01 00 02 00 01 10
```

<pre><code>// Response
00 01 00 02 00 02 10 <a data-footnote-ref href="#user-content-fn-8">00</a>
</code></pre>



## Clear control box warning

**Register：17 (0x11)**

```
// Request
00 01 00 02 00 01 11
```

<pre><code>// Response
00 01 00 02 00 02 11 <a data-footnote-ref href="#user-content-fn-9">00</a>
</code></pre>



## Setting the brake switches separately (System reset)

**Register：18 (0x12)**

Example:

> **Control the brakes：**
>
> 1\~7: Select motor joint separately
>
> 8: Select all joints
>
> **Enable the brake:**
>
> 1: Enable the brake
>
> 0: Release the brake

<pre><code>// Request
00 01 00 02 00 03 12 <a data-footnote-ref href="#user-content-fn-10">08 01</a> 
</code></pre>

```
// Response
00 01 00 02 00 02 12 10
```



## Setting the system motion mode (System reset)

**Register：19 (0x13)**

{% hint style="warning" %}
The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.
{% endhint %}

Example:

> **Motion mode：**
>
> 0: Position control mode
>
> 1: servo motion mode
>
> 2: Joint teaching mode
>
> 3: Cartesian teaching mode (not yet available)
>
> 4: Joint velocity control mode
>
> 5: Cartesian velocity control mode
>
> 6: Joint online trajectory planning mode
>
> 7: Cartesian online trajectory planning mode
>
> **Teach mode load detection:**
>
> 0: on
>
> 1: off
>
>

<pre><code>// Request
00 01 00 02 00 03 13 <a data-footnote-ref href="#user-content-fn-11">00 00</a> 
</code></pre>

```
// Response
00 01 00 02 00 02 13 00
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

[^10]: 

[^11]: 
