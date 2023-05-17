# Test

## Get version information

#### Register：1(0x01)&#x20;

**Request:**

```
00 01 00 02 00 01 01 
```

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x01 |
| Register       | 1 Byte  | u8  | 0x01      |

**Response:**

{% code overflow="wrap" %}
```
00 01 00 02 00 2A 01 10 36 2C 36 2C 58 49 31 32 30 32 2C 41 43 31 33 30 32 2C 76 31 2E 31 32 2E 31 30 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```
{% endcode %}

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x02 |
| Register       | 1 Byte  | u8  | 0x01      |
| State          | 1 Byte  | u8  | 0x00      |
| Type           | 1 Byte  | u8  | 0x36      |
| comma          | 1 Byte  | u8  | 0x2C      |
| Axes           | 1 Byte  | u8  | 0x36      |
|                |         |     |           |



