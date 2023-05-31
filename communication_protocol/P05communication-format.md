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
> **【System reset】:** The user just enters the state after the mode switch or changes some settings (such as TCP offset, sensitivity, etc.). The above operations will terminate the ongoing movement of the robotic arm and clear the cache commands, which is the same as the STOP state.

## Modbus-TCP Communication Format <a href="#_toc23244" id="_toc23244"></a>

#### Modbus-TCP:

Modbus protocol is an application layer message transmission protocol, including three message types: ASCII, RTU, and TCP. The standard Modbus protocol physical layer interface includes RS232, RS422, RS485 and Ethernet interfaces, and adopts master / slave communication.

Modbus TCP Communication Process:

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
{% tab title="Request Commands Format" %}
| Format                                        | <p>Transaction Identifier (u16)</p><p> </p> | Protocol (u16) | Length (u16) | Register (u8) | <p>Parameters</p><p>(Refer to the statement of each commands</p> |
| --------------------------------------------- | ------------------------------------------- | -------------- | ------------ | ------------- | ---------------------------------------------------------------- |
| Length                                        | 2 Bytes                                     | 2 Bytes        | 2 Bytes      | 1 Byte        | n Bytes                                                          |
| <p>Example</p><p>(Enable the robotic arm)</p> | 0x00 0x01                                   | 0x00 0x02      | 0x00 0x03    | 0x0B          | 0x08 0x01                                                        |
{% endtab %}

{% tab title="Response command forma" %}
| Format                                        | <p>Transaction Identifier</p><p>(u16)</p> | <p>Protocol</p><p>(u16)</p> | <p>Length</p><p>(u16)</p> | <p>Register</p><p>(u8)</p><p> </p> | <p>Status</p><p>(u8)</p> | <p>Parameters</p><p>(Refer to the statement of each commands)</p> |
| --------------------------------------------- | ----------------------------------------- | --------------------------- | ------------------------- | ---------------------------------- | ------------------------ | ----------------------------------------------------------------- |
| Length                                        | 2 Bytes                                   | 2 Bytes                     | 2 Bytes                   | 1 Byte                             | 1 Byte                   | n Bytes                                                           |
| <p>Example</p><p>(Enable the robotic arm)</p> | 0x00 0x01                                 | 0x00 0x02                   | 0x00 0x02                 | 0x0B                               | 0x00                     | none                                                              |
{% endtab %}
{% endtabs %}



Status Bit of the Response Format

| Bit7      | Bit6                            | Bit5                              | Bit4                                            | Bit3      | Bit2      | Bit1      | Bit0      |
| --------- | ------------------------------- | --------------------------------- | ----------------------------------------------- | --------- | --------- | --------- | --------- |
| 0: normal | <p>1: error</p><p>0: normal</p> | <p>1: warning</p><p>0: normal</p> | <p>1: cannot perform motion</p><p>0: normal</p> | 0: normal | 0: normal | 0: normal | 0: normal |

{% hint style="warning" %}
General notes:
{% endhint %}

* Transaction Identifier: Generally, 1 is added after each communication to distinguish different communication data packets.
* &#x20;Protocol : 0x00 0x02 means ModbusTCP protocol.
* &#x20;Length: Indicates the next data length in bytes.
* Register: Device address.

## **On the problem of users using communication protocols to organize data in big endian and little endian:**

#### Modbus-TCP control protocol:

> 1\. The transaction identifier (u16) are analyzed in big endian order.
>
> 2\. protocol identifier (u16) and are analyzed in big endian order.
>
> 3\. length (u16) of the message head are analyzed in big endian order.
>
> 4\. The 32-bit data (fp32, int32) in the parameter are analyzed in little endian order.
>
> 5\. Integer data(u16) involving GPIO operation are analyzed in big endian order.

#### Automatic reporting data analysis:

> 1\. Integer data (16/32 bits) are analyzed in big endian order.
>
> 2\. Floating-point (fp32) data is analyzed in little endian order.



**Example:**

> Assume that the type of the variable x is int, located at address 0x100, there is a hexadecimal number 0x12345678 (high order is 0x12, low order is 0x78), and the byte order of the address range 0x100-0x103 depends on the type of machine:

{% tabs %}
{% tab title="Big-endian method:" %}
<table data-header-hidden><thead><tr><th width="115"></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td> </td><td>0x100</td><td>0x101</td><td>0x102</td><td>0x103</td><td> </td></tr><tr><td>...</td><td>0x12</td><td>0x34</td><td>0x56</td><td>0x78</td><td>...</td></tr></tbody></table>
{% endtab %}

{% tab title="Little-endian method:" %}
<table data-header-hidden><thead><tr><th width="111"></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td> </td><td>0x100</td><td>0x101</td><td>0x102</td><td>0x103</td><td> </td></tr><tr><td>...</td><td>0x78</td><td>0x56</td><td>0x34</td><td>0x12</td><td>...</td></tr></tbody></table>
{% endtab %}
{% endtabs %}



