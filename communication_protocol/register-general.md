# Register (General)

## Joint motion (P2P motion)

**egister23（0x17）**

<pre data-title="Request" data-overflow="wrap" data-line-numbers data-full-width="false"><code>    // Modbus TCP Header
        Transaction ID:0x00,0x01
        Protocol:0x00,0x02
        Length:0x00,0x29
        Register:0x17
    // Parameters
        Joint1（J1=π/3）:0x92,0x0A,0x86,0x3F
        Joint2（J2=0）:0x00,0x00,0x00,0x00
        Joint3（J3=0）:0x00,0x00,0x00,0x00
<strong>        Joint4（J4=0）:0x00,0x00,0x00,0x00
</strong>        Joint5（J5=0）:0x00,0x00,0x00,0x00
        Joint6（J6=0）:0x00,0x00,0x00,0x00
        Joint7（J7=0）:0x00,0x00,0x00,0x00
        Parameter8(speed=20*π/180rad/s):0xC2,0xB8,0xB2,0x3E
        Parameter9(acceleration=500*π/180rad/s2）:0x58,0xA0,0x0B,0x41
        Parameter10(motion time=0):0x00,0x00,0x00,0x00
</code></pre>

<pre data-title="Response" data-overflow="wrap" data-line-numbers><code><strong>    // Modbus TCP Header
</strong><strong>        Transaction ID:0x00,0x01
</strong><strong>        Protocol:0x00,0x02
</strong><strong>        Length:0x00,0x04
</strong>        Register:0x17
    // Parameters
        State:0x00
        Parameter:0x00,0x01
</code></pre>
