# How to start the Gcode file via Modbus TCP?

Firmware version: V2.4.0+

UFactory version: V2.4.0+



Holding Registers:

function code: 0x10

registers: 0x40

**It will only trigger the Gcode file under the modbus\_tcp folder.**

<figure><img src=".gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>



<mark style="color:blue;">**Example to start 1 Gcode file**</mark>

Start 1 Gcode file named 00020.

```
Send: 00 01 00 00 00 09 01 10 00 40 00 01 02 00 14
```

00 01 00 00: fixed

00 09: data length

01: ID, fixed

10: function code

00 40: register address

00 01: trigger 1 Blockly project

02: data length

00 14: Gcode file name



<mark style="color:blue;">**Example to start 2 Gcode files**</mark>

Start 2 Blockly projects named 00001 and 00032.

{% code fullWidth="false" %}
```
Send: 00 01 00 00 00 0B 01 10 00 40 00 02 04 00 01 00 32
```
{% endcode %}

00 01 00 00: fixed

00 0B: data length

01: ID, fixed

10: function code

00 40: register address

00 02: trigger 2 Blockly projects

04: data length

00 01: Gcode file named 00001.txt

00 32: Gcode file named 00050.txt





