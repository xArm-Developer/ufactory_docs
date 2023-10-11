# How to set/get controller analog output value via Modbus TCP?

Holding Registers:

function code: 0x03(read), 0x06(write)

registers: 0x03



<mark style="color:blue;">**Example to Read AO0\&AO1**</mark>

```
Send: 00 01 00 00 00 06 01 03 00 03 00 02
Respond: 00 01 00 00 00 07 01 03 04 13 86 0B B6
```

Send:

00 01 00 00: fixed

00 06: data length

01: ID, fixed

03: function code

00 03: register address

00 02: read 2 register

Respond:

13 86: 4998/1000 ≈ 5V

0B B6: 2998/1000 ≈ 3V



<mark style="color:blue;">**Example to Set AO1 to 3V**</mark>

```
Send: 00 01 00 00 00 06 01 06 00 04 03 E8
Respond: 00 01 00 00 00 06 01 06 00 04 03 E8
```

Send:

00 01 00 00: fixed

00 06: data length

01: ID, fixed

06: function code

00 04: register address of AO1

03 E8: 1000/1000 =1V
