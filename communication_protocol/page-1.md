# Page 1

## Joint motion (P2P motion)

**egister23（0x17）**

{% tabs %}
{% tab title="Request" %}
| Modbus TCP Header | Transaction ID                                         | 2 Bytes | u16  | 0x00,0x01           |
| ----------------- | ------------------------------------------------------ | ------- | ---- | ------------------- |
|                   | Protocol                                               | 2 Bytes | u16  | 0x00,0x02           |
|                   | Length                                                 | 2 Bytes | u16  | 0x00,0x29           |
|                   | Register                                               | 1 Byte  | u8   | 0x17                |
| Parameters        | Joint1（J1=π/3）                                         | 4 Bytes | fp32 | 0x92,0x0A,0x86,0x3F |
|                   | Joint2（J2=0）                                           | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
|                   | Joint3（J3=0）                                           | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
|                   | Joint4（J4=0）                                           | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
|                   | Joint5（J5=0）                                           | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
|                   | Joint6（J6=0）                                           | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
|                   | Joint7（J7=0）                                           | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
|                   | Parameter8(speed=20\*π/180rad/s)                       | 4 Bytes | fp32 | 0xC2,0xB8,0xB2,0x3E |
|                   | <p>Parameter9</p><p>(acceleration=500*π/180rad/s2）</p> | 4 Bytes | fp32 | 0x58,0xA0,0x0B,0x41 |
|                   | Parameter10(motion time=0)                             | 4 Bytes | fp32 | 0x00,0x00,0x00,0x00 |
{% endtab %}

{% tab title="Response" %}
| Modbus TCP Header | Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| ----------------- | -------------- | ------- | --- | --------- |
|                   | Protocol       | 2 Bytes | u16 | 0x00,0x02 |
|                   | Length         | 2 Bytes | u16 | 0x00,0x04 |
|                   | Register       | 1 Byte  | u8  | 0x17      |
| Parameters        | State          | 1 Byte  | u8  | 0x00      |
|                   | Parameter      | 2 Bytes | u16 | 0x00,0x01 |
{% endtab %}
{% endtabs %}
