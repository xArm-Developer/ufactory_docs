# Untitled

## Joint (P2P motion)



{% code overflow="wrap" fullWidth="false" %}
```
// Request:

```
{% endcode %}

<details>

<summary></summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 29    U16, Length 
//17       U8, Register
//92 0A 86 3F    FP32, Joint1（J1=π/3）
//00 00 00 00    FP32, Joint2（J2=0）
//00 00 00 00    FP32, Joint3（J3=0）
//00 00 00 00    FP32, Joint4（J4=0）
//00 00 00 00    FP32, Joint5（J5=0）
//00 00 00 00    FP32, Joint6（J6=0）
//00 00 00 00    FP32, Joint7（J7=0）
//C2 B8 B2 3E    FP32, speed=0.3491 rad/s
//58 A0 0B 41    FP32, acceleration= 8.7266 rad/s²
//00 00 00 00    FP32, motion time=0
```
{% endcode %}

</details>

```
//Response:
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

##

```
//Response:
00 01 00 02 00 04 20 00 00 01
```

##

```
```
