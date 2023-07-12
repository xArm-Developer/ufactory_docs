# Communication Format

## Unit Definition <a href="#_toc8023" id="_toc8023"></a>

The following explains some of the symbols used in the examples and tables:

> **【u8】:** 1 Byte, 8-bit unsigned int
>
> **【u16】:** 2 Bytes, 16-bit unsigned int
>
> **【fp32】:** 4 Bytes, float
>
> **【str】:** String
>
> **【System reset】:** The user just enters the state after the mode switch or changes some settings (such as TCP offset, sensitivity, etc.). The above operations will terminate the ongoing movement of the robotic arm and clear the cache command, which is the same as the STOP state.

## Private protocol Format <a href="#_toc23244" id="_toc23244"></a>

#### Private protocol:

Private protocol is an application layer message transmission protocol, including three message types: ASCII, RTU, and TCP. The standard Modbus protocol physical layer interface includes RS232, RS422, RS485 and Ethernet interfaces, and adopts master / slave communication.

Private protocol Process:

> 1\. Establish a TCP connection.
>
> 2\. Prepare Modbus messages.
>
> 3\. Use the send command to send a message.
>
> 4\. Waiting for a response under the same connection.
>
> 5\. Use the recv command to read the message and complete a data exchange.
>
> 6\. When the communication task ends, close the TCP connection.

Parameter:

> Default TCP Port: 502
>
> Protocol: 0x00 0x02 Control (Only this one for now)

{% tabs %}
{% tab title="Request Command Format" %}
<table data-header-hidden><thead><tr><th></th><th width="147"></th><th width="108"></th><th width="103"></th><th></th><th></th></tr></thead><tbody><tr><td>Format</td><td>Transaction Identifier U16</td><td>Protocol<br>U16</td><td>Length U16</td><td>Register <br>U8</td><td><p>Parameter</p><p></p></td></tr><tr><td>Length</td><td>2 Bytes</td><td>2 Bytes</td><td>2 Bytes</td><td>1 Byte</td><td>n Bytes</td></tr><tr><td><p>Example</p><p>(Enable the robot)</p></td><td>00 01</td><td>00 02</td><td>00 03</td><td>0B</td><td>08 01</td></tr></tbody></table>
{% endtab %}

{% tab title="Response Command Format" %}
<table data-header-hidden><thead><tr><th width="154"></th><th width="130"></th><th width="134"></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td>Format</td><td><p>Transaction Identifier</p><p>U16</p></td><td><p>Protocol</p><p>U16</p></td><td><p>Length</p><p>U16</p></td><td><p>Register</p><p>U8</p></td><td><p>Status</p><p>U8</p></td><td><p>Parameters</p><p></p></td></tr><tr><td>Length</td><td>2 Bytes</td><td>2 Bytes</td><td>2 Bytes</td><td>1 Byte</td><td>1 Byte</td><td>n Bytes</td></tr><tr><td><p>Example</p><p>Enable the robot</p></td><td>00 01</td><td>00 02</td><td>00 02</td><td>0B</td><td>00</td><td>none</td></tr></tbody></table>
{% endtab %}
{% endtabs %}

Status Bit of the Response Format

* Bit 0,  reserved.
* Bit 1, reserved.
* Bit 2, reserved.
* Bit 3, reserved.
* Bit 4, 0 is normal. 1 means unable to move.
* Bit 5, 0 is normal, 1 means there is warning.&#x20;
* Bit 6, 0 is normal, 1 means there is error.
* Bit 7, reserved

{% hint style="warning" %}
General notes:
{% endhint %}

* Transaction Identifier: Generally, 1 is added after each communication to distinguish different communication data packets.
* Protocol : 00 02 means Modbus TCP protocol.
* Length: Indicates the next data length in bytes.
* Register: Device address.

## **On the problem of users using communication protocols to organize data in big endian and little endian:**

#### Modbus-TCP control protocol:

> 1\. The transaction identifier (u16) are in big endian order.
>
> 2\. protocol identifier (u16) and are in big endian order.
>
> 3\. length (u16) of the message head are in big endian order.
>
> 4\. The 32-bit data (fp32, int32) in the parameter are in little endian order.
>
> 5\. Integer data(u16) involving GPIO operation are in big endian order.

#### Automatic reporting data analysis:

> 1\. Integer data (16/32 bits) are in big endian order.
>
> 2\. Floating-point (fp32) data is in little endian order.

**Example:**

> Assume that the type of the variable x is int, located at address 0x100, there is a hexadecimal number 0x12345678 (high order is 0x12, low order is 0x78), and the byte order of the address range 0x100-0x103 depends on the type of machine:

{% tabs %}
{% tab title="Big-endian method:" %}
<table data-header-hidden><thead><tr><th width="115"></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td></td><td>0x100</td><td>0x101</td><td>0x102</td><td>0x103</td><td></td></tr><tr><td>...</td><td>0x12</td><td>0x34</td><td>0x56</td><td>0x78</td><td>...</td></tr></tbody></table>
{% endtab %}

{% tab title="Little-endian method:" %}
<table data-header-hidden><thead><tr><th width="111"></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td></td><td>0x100</td><td>0x101</td><td>0x102</td><td>0x103</td><td></td></tr><tr><td>...</td><td>0x78</td><td>0x56</td><td>0x34</td><td>0x12</td><td>...</td></tr></tbody></table>
{% endtab %}
{% endtabs %}
