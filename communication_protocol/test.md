# Test

## Get version information

#### Register：1(0x01)&#x20;

**Request**

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x01 |
| Register       | 1 Byte  | u8  | 0x01      |

**Response**

| Transaction ID | 2 Bytes | u16 | 0x00,0x01 |
| -------------- | ------- | --- | --------- |
| Protocol       | 2 Bytes | u16 | 0x00,0x02 |
| Length         | 2 Bytes | u16 | 0x00,0x02 |
| Register       | 1 Byte  | u8  | 0x01      |
| State          | 1 Byte  | u8  | 0x00      |



