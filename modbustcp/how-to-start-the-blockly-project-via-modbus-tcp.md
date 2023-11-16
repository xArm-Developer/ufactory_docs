# How to start the Blockly project via Modbus TCP?

Firmware version: V1.12.0+

UFactory version: V1.12.0+



Holding Registers:

function code: 0x10

registers: 0x30



<mark style="color:blue;">**Example to start 1 Blockly project**</mark>

Start 1 Blocky project named 00030.

```
Send: 00 01 00 00 00 09 01 10 00 30 00 01 02 00 1E
```

00 01 00 00: fixed

00 09: data length

01: ID, fixed

10: function code

00 30: register address

00 01: trigger 1 Blockly project

02: data length

00 1E: Blockly project name



<mark style="color:blue;">**Example to start 2 Blockly projects**</mark>

Start 2 Blockly projects named 00001 and 00012.

{% code fullWidth="false" %}
```
Send: 00 01 00 00 00 0B 01 10 00 30 00 02 04 00 01 00 0C
```
{% endcode %}

00 01 00 00: fixed

00 0B: data length

01: ID, fixed

10: function code

00 30: register address

00 02: trigger 2 Blockly projects

04: data length

00 01: Blockly project named 00001

00 0C: Blockly project named 00012





