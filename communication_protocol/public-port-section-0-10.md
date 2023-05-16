# Public Port Section（0-10）

## Get version information

**Register：1(0x01)**

{% code lineNumbers="true" %}
```
// Request
00 01 00 02 00 01 01 
```
{% endcode %}

{% code lineNumbers="true" %}
```
// Response
00 01 00 02 00 02 01 00 
```
{% endcode %}



## Get SN information

Register：2(0x02)

Example：

> SN of robot and control box：
>
> XI120204201B02 AC130202B02L02

{% code lineNumbers="true" %}
```
// Request
 00 01 00 02 00 01 02
```
{% endcode %}

{% code lineNumbers="true" %}
```
// Response
00 01 00 02 00 02 02 00 
```
{% endcode %}



## Reload friction parameters

**Register：4(0x04)**

{% code lineNumbers="true" %}
```
// Request
00 01 00 02 00 01 04 
```
{% endcode %}

{% code lineNumbers="true" %}
```
// Response
00 01 00 02 00 02 04 10 
```
{% endcode %}



## Get the value of Joint torque or actual current

**Register: 5(0x05)**

Example：

> Value of theoretical joint torque
>
> 0: Value of theoretical joint torque
>
> 1: Value of actual current of servo

{% code lineNumbers="true" %}
```
// Request
00 01 00 02 00 01 05
```
{% endcode %}

<pre data-line-numbers><code>// Response
<strong>00 01 00 02 00 03 05 00 00
</strong></code></pre>









