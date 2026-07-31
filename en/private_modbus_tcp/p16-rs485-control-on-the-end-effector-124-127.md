# RS485 Control on the End-effector(123-128)

## Set End-effector Modbus Timeout

**Register: 123 (0x7B)**

```
//Request
00 01 00 02 00 03 7B 01 01
```



> Request Description
>
> //00 01       U16, Transaction ID
>
> //00 02       U16, Protocol Identifier
>
> //00 03       U16, Length
>
> //7B          U8, Register
>
> //01 01       U16, Timeout (ms)



```
// Response:
00 01 00 02 00 02 7B 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length
>
> //7B       U8, Register
>
> //00       U8, State



## Gripper

### Enable/Disable Gripper

**Register: 124 (0x7C)**

```
//Request
00 01 00 02 00 0B 7C 09 08 10 01 00 00 01 02 00 01
```



> Request Description
>
> //00 01     U16, Transaction ID
>
> //00 02     U16, Protocol Identifier
>
> //00 0B     U16, Length
>
> //7C        U8, Register
>
> //09        U8, Host ID
>
> //08        U8, Gripper ID
>
> //10        U8, Function Code
>
> //01 00     U16, Register Start Address
>
> //00 01     U16, Register Count
>
> //02        U8, Byte Count
>
> //00 01     U16, Register Value (Enable Gripper)



```
//Response
00 01 00 02 00 09 7C 00 09 08 10 01 00 00 01
```



> Response Description
>
> //00 01     U16, Transaction ID
>
> //00 02     U16, Protocol Identifier
>
> //00 09     U16, Length
>
> //7C        U8, Register
>
> //00        U8, State
>
> //09        U8, Host ID
>
> //08        U8, Gripper ID
>
> //10        U8, Function Code
>
> //01 00     U16, Register Start Address
>
> //00 01     U16, Register Count



### Set Gripper Mode

**Register: 124 (0x7C)**

```
//Request
00 01 00 02 00 0B 7C 09 08 10 01 01 00 01 02 00 00
```



> Request Description
>
> //00 01       U16, Transaction ID
>
> //00 02       U16, Protocol Identifier
>
> //00 0B       U16, Length
>
> //7C          U8, Register
>
> //09          U8, Host ID
>
> //08          U8, Gripper ID
>
> //10          U8, Function Code
>
> //01 01       U16, Register Start Address
>
> //00 01       U16, Register Count
>
> //02          U8, Byte Count
>
> //00 00       U16, Register Value (Position Mode)\



```
//Response
00 01 00 02 00 09 7C 00 09 08 10 01 00 00 01
```



> Response Description
>
> //00 01     U16, Transaction ID
>
> //00 02     U16, Protocol Identifier
>
> //00 09     U16, Length
>
> //7C        U8, Register
>
> //00        U8, State
>
> //09        U8, Host ID
>
> //08        U8, Gripper ID
>
> //10        U8, Function Code
>
> //01 00     U16, Register Start Address
>
> //00 01     U16, Register Count



### Set Gripper Speed

**Register: 124 (0x7C)**

```
//Request
00 01 00 02 00 0B 7C 09 08 10 03 03 00 01 02 05 DC
```



> Request Description
>
> //00 01       U16, Transaction ID
>
> //00 02       U16, Protocol Identifier
>
> //00 0B       U16, Length
>
> //7C          U8, Register
>
> //09          U8, Host ID
>
> //08          U8, Gripper ID
>
> //10          U8, Function Code
>
> //03 03       U16, Register Start Address
>
> //00 01       U16, Register Count
>
> //02          U8, Byte Count
>
> //05 DC       U16, Register Value (Set speed to 1500 r/min)\



```
//Response
00 01 00 02 00 09 7C 00 09 08 10 03 03 00 01
```



> Response Description
>
> //00 01     U16, Transaction ID
>
> //00 02     U16, Protocol Identifier
>
> //00 09     U16, Length
>
> //7C        U8, Register
>
> //00        U8, State
>
> //09        U8, Host ID
>
> //08        U8, Gripper ID
>
> //10        U8, Function Code
>
> //03 03     U16, Register Start Address
>
> //00 01     U16, Register Count



### Set Gripper Position

**Register: 124 (0x7C)**

```
//Request
00 01 00 02 00 0D 7C 09 08 10 07 00 00 02 04 00 00 01 90
```



> Request Description
>
> //00 01                U16, Transaction ID
>
> //00 02                U16, Protocol Identifier
>
> //00 0D                U16, Length
>
> //7C                   U8, Register
>
> //09                   U8, Host ID
>
> //08                   U8, Gripper ID
>
> //10                   U8, Function Code
>
> //07 00                U16, Register Start Address
>
> //00 02                U16, Register Count
>
> //04                   U8, Byte Count
>
> //00 00 01 90          U32, Register Value (Gripper Position: 400)\



```
//Response
00 01 00 02 00 09 7C 00 09 08 10 07 00 00 02
```



> Response Description
>
> //00 01     U16, Transaction ID
>
> //00 02     U16, Protocol Identifier
>
> //00 09     U16, Length
>
> //7C        U8, Register
>
> //00        U8, State
>
> //09        U8, Host ID
>
> //08        U8, Gripper ID
>
> //10        U8, Function Code
>
> //07 00     U16, Register Start Address
>
> //00 02     U16, Register Count



### Get Gripper Position

**Register: 124 (0x7C)**

```
//Request
00 01 00 02 00 08 7C 09 08 03 07 02 00 02
```



> Request Description
>
> //00 01                U16, Transaction ID
>
> //00 02                U16, Protocol Identifier
>
> //00 08                U16, Length
>
> //7C                   U8, Register
>
> //09                   U8, Host ID
>
> //08                   U8, Gripper ID
>
> //03                   U8, Function Code
>
> //07 02                U16, Register Start Address
>
> //00 02                U16, Register Count\



```
// Response:
00 01 00 02 00 0A 7C 00 09 08 03 04 00 00 00 01
```



> Response Description
>
> //00 01     U16, Transaction ID
>
> //00 02     U16, Protocol Identifier
>
> //00 0A     U16, Length
>
> //7C        U8, Register
>
> //00        U8, State
>
> //09        U8, Host ID
>
> //08        U8, Gripper ID
>
> //03        U8, Function Code
>
> //04        U8, Byte Count
>
> //00 00 00 01      U32, Register Value (Position: 1 mm)\



### Get Gripper Error

**Register: 124 (0x7C)**

```
//Request
00 01 00 02 00 08 7C 09 08 03 00 0F 00 01
```



> Request Description
>
> //00 01                U16, Transaction ID
>
> //00 02                U16, Protocol Identifier
>
> //00 08                U16, Length
>
> //7C                   U8, Register
>
> //09                   U8, Host ID
>
> //08                   U8, Gripper ID
>
> //03                   U8, Function Code
>
> //00 0F                U16, Register Start Address
>
> //00 01                U16, Register Count\



```
// Response:
00 01 00 02 00 08 7C 00 09 08 03 02 00 00
```



> Response Description
>
> //00 01     U16, Transaction ID
>
> //00 02     U16, Protocol Identifier
>
> //00 08     U16, Length
>
> //7C        U8, Register
>
> //00        U8, State
>
> //09        U8, Host ID
>
> //08        U8, Gripper ID
>
> //03        U8, Function Code
>
> //02        U8, Byte Count
>
> //00 00     U16, Register Value (No Error)\



### Clear Gripper Error

**Register: 124 (0x7C)**

```
//Request
00 01 00 02 00 0B 7C 09 08 10 01 09 00 01 02 00 01
```



> Request Description
>
> //00 01                U16, Transaction ID
>
> //00 02                U16, Protocol Identifier
>
> //00 0B                U16, Length
>
> //7C                   U8, Register
>
> //09                   U8, Host ID
>
> //08                   U8, Gripper ID
>
> //10                   U8, Function Code
>
> //01 09                U16, Register Start Address
>
> //00 01                U16, Register Count
>
> //02                   U8, Byte Count
>
> //00 01                U16, Register Value\



```
// Response:
00 01 00 02 00 09 7C 00 09 08 10 01 09 00 01
```



> Response Description
>
> //00 01     U16, Transaction ID
>
> //00 02     U16, Protocol Identifier
>
> //00 09     U16, Length
>
> //7C        U8, Register
>
> //00        U8, State
>
> //09        U8, Host ID
>
> //08        U8, Gripper ID
>
> //10        U8, Function Code
>
> //01 09     U16, Register Start Address
>
> //00 01     U16, Register Count



## Read End-effector Consecutive Coils

**Register: 126 (0x7E)**

```
//Request
00 01 00 02 00 05 7E 09 0C 00 06
```



> Request Description
>
> //00 01           U16, Transaction ID
>
> //00 02           U16, Protocol Identifier
>
> //00 05           U16, Length
>
> //7E              U8, Register
>
> //09              U8, Host ID
>
> //0C 00           U16, Address
>
> //06              U8, Register Count (n)\



```
// Response:
00 01 00 02 00 0E 7E 00 3D B3 00 00 BC AA 00 00 3F 51 00 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 0E    U16, Length (2n+2)
>
> //7E       U8, Register
>
> //00       U8, State
>
> //3D B3 00 00 BC AA 00 00 3F 51 00 00  U16, Parameters (n)\



## Set the robot RS485 baud rate

**Register: 127 (0x7F)**

```
//Request
00 01 00 02 00 08 7F 09 1A 0B 00 00 30 41
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 08    U16, Length 
>
> //7F       U8, Register
>
> //09	   U8, Host ID
>
> //1A 0B	   U16,Address
>
> //00 00 30 41	FP32, Parameter 1, by default is 11(2000000 bps).
>
> 0: 4800 bps； 
>
> 1: 9600 bps；
>
> 2: 19200 bps；
>
> 3: 38400 bps；
>
> 4: 57600 bps；
>
> 5: 115200 bps
>
> 6: 230400 bps；
>
> 7: 460800 bps；
>
> 8: 921600 bps；
>
> 9: 1000000 bps；
>
> 10: 1500000 bps；
>
> 11: 2000000 bps；
>
> 12: 2500000 bps；



```
// Response:
00 01 00 02 00 01 7F
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 01    U16, Length 
>
> //7F       U8, Register



## Set tool digital output

**Register:127 (0x7F)**

```
//Request
00 01 00 02 00 08 7F 09 0A 15 00 00 80 43
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 08(09) U16, Length (8 without Parameter 2, 9 with Parameter 2)
>
> //7F       U8, Register
>
> //09	   U8, Host ID
>
> //0A 15	   U16, Register start address
>
> //00 00 80 43	FP32, Parameter 1, 256 in decimal, set tool digital output 0 low
>
> Data:
>
> 256: Set tool digital output 0 to low
>
> 257: Set tool digital output 0 to high
>
> 512: Set tool digital output 1 to low
>
> 514: Set tool digital output 1 to high
> 
> //01       U8, Parameter 2 (Optional), 0: Execute immediately, 1: Delay execution



```
// Response:
00 01 00 02 00 02 7F 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length
>
> //7F       U8, Register
>
> //00       U8, State



## Get the status of the tool digital input

**Register:128 (0x80)**

```
//Request
00 01 00 02 00 04 80 09 0A 14
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 04    U16, Length 
>
> //80       U8, Register
>
> //09	   U8, Host ID
>
> //0A 14	   U16, Register start address



```
// Response:
00 01 00 02 00 06 80 00 00 00 00 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 06    U16, Length
>
> //80       U8, Register
>
> //00       U8, State
>
> //00 00 00 00    U8,
>
> The end byte indicates the input status. The digit of 0 corresponds to input 0 and the digit of 1 corresponds to input 1.
>





## Get the value of the tool analog input

**Register:128 (0x80)**
```
//Request
00 01 00 02 00 04 80 09 0A 16
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 04    U16, Length 
>
> //80       U8, Register
>
> //09	   U8, Host ID
>
> //0A 16	   U16, Address
>
> Address 0A 16 ： Analog input 0
>
> Address 0A 17 ： Analog input 1



```
// Response:
00 01 00 02 00 06 80 00 00 00 07 0D
```



>Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 06    U16, Length
>
> //80       U8, Register
>
> //00       U8, State
>
> //00 00 07 0D    U32, analog input, range 0~4095, corresponding to 0~3.3V
>





