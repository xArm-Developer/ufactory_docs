# Modbus RTU Slave: How to Read and Write Controller Output CO

## 1. Scenario Description

- Device: xArm Controller (AC1320 or later, AC8520 or later)
- Firmware: V2.7.104 or later
- Communication: Modbus RTU
- Device Role: Slave
- Target Function:
  - CO0 -> Low level
  - CO1 -> High level
  - CO2 -> High level
  - CO3 -> Low level

## 2. Mapping Between Coils and CO

| Modbus Coil Address | Controller CO | Description |
| ------------------- | ------- | ----------- |
| 0000 | CO0 | Controller Output 0 |
| 0001 | CO1 | Controller Output 1 |
| 0002 | CO2 | Controller Output 2 |
| 0003 | CO3 | Controller Output 3 |

## 3. Modbus RTU Command Examples (Function Code 0x0F)

### 3.1 Setting CO

#### Raw Command Frame (HEX)
```text
01 0F 00 00 00 04 01 06 BE 94
```

Command Structure Breakdown
```text
Slave Address: 01 (1)
Function Code: 0F
Start Address: 00 00 (0000)
Number of Coils: 00 04 (4)
Byte Count: 01 (1)
Data Field:
  Byte 0: 06 (bit0:0, bit1:1, bit2:1, bit3:0)
CRC: BE 94
```

#### Response Frame (HEX)
```text
01 0F 00 00 00 04 54 08
```

Command Structure Breakdown
```text
Slave Address: 01 (1)
Function Code: 0F
Start Address: 00 00 (0)
Number of Coils: 00 04 (4)
CRC: 54 08
```

### 3.2 Reading CO

#### Raw Command Frame (HEX)
```text
01 01 00 00 00 04 3D C9
```

Command Structure Breakdown
```text
Slave Address: 01 (1)
Function Code: 01
Start Address: 00 00 (0000)
Quantity: 00 04 (4)
CRC: 3D C9
```

#### Response Frame (HEX)
```text
01 01 01 06 D1 8A
```

Command Structure Breakdown
```text
Slave Address: 01 (1)
Function Code: 01
Byte Count: 01 (1)
Data Field:
  Byte 0: 06 (bit0:0, bit1:1, bit2:1, bit3:0)
CRC: D1 8A
```
