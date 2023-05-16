# Register (General)

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

{% code overflow="wrap" lineNumbers="true" fullWidth="false" %}
```
// Request
00 01 00 02 00 29 17 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C2 B8 B2 3E 58 A0 0B 41 00 00 00 00
```
{% endcode %}

{% code lineNumbers="true" %}
```
//Response
00,01，00,02,00,04,17,00,00,01
```
{% endcode %}

##

## Set the maximum acceleration of TCP motion

**Register32（0x20）**

Example：&#x20;

> maxacc=1000mm/s2

{% code lineNumbers="true" %}
```
// Request
00 01 00 02 00 05 20 00 00 7A 44
```
{% endcode %}

{% code lineNumbers="true" %}
```
//Response
00,01，00,02,00,04,20,00,00,01
```
{% endcode %}



## Get Cartesian position

**Register41（0x29）**

Example：&#x20;

> x=207mm
>
> y=0mm
>
> z=112mm
>
> roll=π
>
> pitch=0
>
> yaw=0

{% code lineNumbers="true" %}
```
// Request
00 01 00 02 00 01 29
```
{% endcode %}

{% code overflow="wrap" lineNumbers="true" %}
```
//Response
00 01 00 02 00 1A 29 00 00 00 4F 43 00 00 00 00 00 00 E0 42 DB 0F 49 40 00 00 00 00 00 00 00 00
```
{% endcode %}



## Linear motion of the target in the axis angle posture

**Register92（0x5C）**

Example：&#x20;

> X=0mm
>
> Y=0mm
>
> Z=0mm
>
> Rx=0
>
> Ry=0
>
> Rz=2π
>
> speed=100mm/s
>
> acceleration=2000mm/s2
>
> motion time=0
>
> **Motion coordinate system:**
>
> * 0 represents base coordinate system motion
> * 1 represents tool coordinate system motion
>
> **absolute pose:**
>
> * If the motion coordinate system is the base coordinate system
> * 0 represents the given pose is an absolute pose
> * 1 represents the given pose is a relative pose
> * (the given parameters 1-6 coordinates are based on the current an offset of position)

{% code overflow="wrap" lineNumbers="true" %}
```
// Request
00 01 00 02 00 27 5C 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 DB 0F C9 40 00 00 C8 42 00 00 FA 44 00 00 00 00 00 01
```
{% endcode %}

{% code overflow="wrap" lineNumbers="true" %}
```
//Response
00 01 00 02 00 04 5C 00 00 01
```
{% endcode %}



## The operation triggered by the position of the general digital IO of the control box

**Register145（0x91）**

Example：

> iomum=0
>
> on-off：on (1)  &#x20;
>
> x=300
>
> y=0
>
> z=300
>
> Tolerance radius (tol\_r) =3

{% code overflow="wrap" lineNumbers="true" %}
```
// Request
00 01 00 02 00 13 91 00 01 00 00 96 43 00 00 00 00 00 00 96 43 00 00 40 40
```
{% endcode %}

{% code lineNumbers="true" %}
```
//Response
00 01 00 02 00 02 91 00
```
{% endcode %}





