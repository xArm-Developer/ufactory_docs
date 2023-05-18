# System State(11-20)

## Enable/Disable servo (System reset)

**Register：11(0x0B)**

{% hint style="warning" %}
The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.
{% endhint %}

Request:

00 01 00 02 00 03 0B 08 01

| Transaction ID                                                                              | 2 Bytes | u16 | 0x00,0x01                                       |
| ------------------------------------------------------------------------------------------- | ------- | --- | ----------------------------------------------- |
| Protocol                                                                                    | 2 Bytes | u16 | 0x00,0x02                                       |
| Length (parameter length+1)                                                                 | 2 Bytes | u16 | 0x00,0x03                                       |
| Register                                                                                    | 1 Byte  | u8  | 0x0B                                            |
| <p>Joint Number(Select all joints)</p><p>1-7：Motor joint(1-7)</p><p>8：Select all joints</p> | 1 Byte  | u8  | <p> </p><p>0x08</p>                             |
| <p>Whether to enable the servo</p><p>1：Enable servo</p><p>0：Disable servo</p>               | 1 Byte  | u8  | <p> </p><p>Enable: 0x01</p><p>Disable: 0x00</p> |

Response:

00 01 00 02 00 02 0B 10

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x02 |
| Register       | 1 Byte  | u8  | 0x0B      |
| State          | 1 Byte  | u8  | 0x10      |



## Motion state setting

**Register：12(0x0C)**

Request:

00 01 00 02 00 02 0C 00

| Transaction ID                                                                                                                                          | 2 Bytes | u16 | 0x00,0x01 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --- | --------- |
| Protocol                                                                                                                                                | 2 Bytes | u16 | 0x00,0x02 |
| Length (parameter length+1)                                                                                                                             | 2 Bytes | u16 | 0x00,0x02 |
| Register                                                                                                                                                | 1 Byte  | u8  | 0x00      |
| <p>Parameter1: Motion Sate</p><p>3: Suspend the current motion</p><p>4: Stop all current motion (restart the system)</p><p>0: Enter the motion mode</p> | 1 Byte  | u8  | 0x00      |

Response:

00 01 00 02 00 02 0C 00

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x02 |
| Register       | 1 Byte  | u8  | 0x0C      |
| State          | 1 Byte  | u8  | 0x00      |



## Get the motion state

**Register：13 (0x0D)**

Request:

00 01 00 02 00 01 0D

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x01 |
| Register       | 1 Byte  | u8  | 0x0D      |

Response:

00 01 00 02 00 03 0D 00 02

| Transaction ID                                                                                                                                                                                                                                                                                                                                                                                                | 2 Bytes | u16 | 0x00,0x01 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --- | --------- |
| Protocol                                                                                                                                                                                                                                                                                                                                                                                                      | 2 Bytes | u16 | 0x00,0x02 |
| Length                                                                                                                                                                                                                                                                                                                                                                                                        | 2 Bytes | u16 | 0x00,0x03 |
| Register                                                                                                                                                                                                                                                                                                                                                                                                      | 1 Byte  | u8  | 0x0D      |
| State                                                                                                                                                                                                                                                                                                                                                                                                         | 1 Byte  | u8  | 0x00      |
| <p>Parameter1</p><p>Motion state：</p><p>1：In motion</p><p>2：Sleep</p><p>3：Suspend</p><p>4：Stop </p><p>5： System reset</p><p>The user just enters the state after the mode switch or changes some settings (such as TCP offset, sensitivity, etc.). The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.</p><p> </p> | 1 Byte  | u8  | 0x01      |



## Get the number of commands in the command buffer

**Register：14 (0x0E)**

Request

00 01 00 02 00 01 0E

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x01 |
| Register       | 1 Byte  | u8  | 0x0E      |

Response:

00 01 00 02 00 04 0E 00 00 00

| Transaction ID                                                 | 2 Bytes                | u16                | 0x00,0x01 |
| -------------------------------------------------------------- | ---------------------- | ------------------ | --------- |
| Protocol                                                       | 2 Bytes                | u16                | 0x00,0x02 |
| Length                                                         | 2 Bytes                | u16                | 0x00,0x04 |
| Register                                                       | 1 Byte                 | u8                 | 0x0E      |
| State                                                          | 1 Byte                 | u8                 | 0x00      |
| <p>Parameter1</p><p>(The number of commands in the buffer)</p> | <p>2 Bytes</p><p> </p> | <p>u16</p><p> </p> | 0x00,0x01 |



## Get error and warning code

**Register：15 (0x0F)**

Request:

00 01 00 02 00 01 0F

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x01 |
| Register       | 1 Byte  | u8  | 0x0F      |

Response:

00 01 00 02 00 04 0F 00 00 00

| Transaction ID                       | 2 Bytes | u16 | 0x00,0x01 |
| ------------------------------------ | ------- | --- | --------- |
| Protocol                             | 2 Bytes | u16 | 0x00,0x02 |
| Length                               | 2 Bytes | u16 | 0x00,0x04 |
| Register                             | 1 Byte  | u8  | 0x0F      |
| State                                | 1 Byte  | u8  | 0x00      |
| <p>Parameter1</p><p>Error code</p>   | 1 Byte  | u8  | 0x00      |
| <p>Parameter2</p><p>Warning code</p> | 1 Byte  | u8  | 0x00      |



## Clear control box error (System reset)

**Register：16 (0x10)**

{% hint style="warning" %}
The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.
{% endhint %}

Request:

00 01 00 02 00 01 10

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x01 |
| Register       | 1 Byte  | u8  | 0x10      |

Response:

00 01 00 02 00 02 10 00

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x02 |
| Register       | 1 Byte  | u8  | 0x10      |
| State          | 1 Byte  | u8  | 0x10      |



## Clear control box warning

**Register：17 (0x11)**

Request:

00 01 00 02 00 01 11

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x01 |
| Register       | 1 Byte  | u8  | 0x11      |

Response:

00 01 00 02 00 02 11 00

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x02 |
| Register       | 1 Byte  | u8  | 0x11      |
| State          | 1 Byte  | u8  | 0x00      |



## Setting the brake switches separately (System reset)

**Register：18 (0x12)**

Request:

00 01 00 02 00 03 12 08 01

| Transaction ID                                                                                                                     | 2 Bytes               | u16               | 0x00,0x01           |
| ---------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------------- | ------------------- |
| Protocol                                                                                                                           | 2 Bytes               | u16               | 0x00,0x02           |
| Length                                                                                                                             | 2 Bytes               | u16               | 0x00,0x03           |
| Register                                                                                                                           | 1 Byte                | u8                | 0x12                |
| <p>Parameter1(Select all joints)</p><p>Control the brakes：</p><p>1~6: Select motor joint separately</p><p>8: Select all joints</p> | <p>1 Byte</p><p> </p> | <p>u8</p><p> </p> | <p> </p><p>0x08</p> |
| <p>Parameter2 (Enable the brake)</p><p>Operation：</p><p>1: Unlock Joint</p><p>0: Disable Joint</p>                                 | <p>1 Byte</p><p> </p> | <p>u8</p><p> </p> | 0x01                |

Response:

00 01 00 02 00 02 12 10

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x02 |
| Register       | 1 Byte  | u8  | 0x12      |
| State          | 1 Byte  | u8  | 0x10      |



## Setting the system motion mode (System reset)

**Register：19 (0x13)**

{% hint style="warning" %}
The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.
{% endhint %}

Request:

00 01 00 02 00 03 13 00 00

| Transaction ID                                                                                                                                                                                                                                                                                                                                                                          | 2 Bytes | u16 | 0x00,0x01 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --- | --------- |
| Protocol                                                                                                                                                                                                                                                                                                                                                                                | 2 Bytes | u16 | 0x00,0x02 |
| Length (parameter length+1)                                                                                                                                                                                                                                                                                                                                                             | 2 Bytes | u16 | 0x00,0x02 |
| Register                                                                                                                                                                                                                                                                                                                                                                                | 1 Byte  | u8  | 0x13      |
| <p>Parameter1(Position control mode)</p><p>Motion mode：</p><p>0: Position control mode</p><p>1: servo motion mode</p><p>2: Joint teaching mode</p><p>3: Cartesian teaching mode (not yet available)</p><p>4: Joint velocity control mode</p><p>5: Cartesian velocity control mode</p><p>6: Joint online trajectory planning mode</p><p>7: Cartesian online trajectory planning mode</p> | 1 Byte  | u8  | 0x00      |

Response:

00 01 00 02 00 02 13 00

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x02 |
| Register       | 1 Byte  | u8  | 0x13      |
| State          | 1 Byte  | u8  | 0x10      |





