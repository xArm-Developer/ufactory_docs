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

{% code overflow="wrap" fullWidth="false" %}
```
// Request
00 01 00 02 00 29 17 92 0A 86 3F 00 00 00 00 00 00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,C2,B8,B2,3E,58,A0,0B,41,00,00,00,00

```
{% endcode %}

```
//Response
00,01，00,02,00,04,17,00,00,01
```
