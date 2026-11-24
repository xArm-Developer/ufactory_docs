# Servo Module(101-115)

## Get the state of the current robotic arm servo

**Register:106 (0x6A)**

```
// Request:
00 01 00 02 00 01 6A  
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 01    U16, Length 
>
> //6A       U8, Register



```
// Response:
00 01 00 02 00 13 6A 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
```



> Response Description
> 
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 13    U16, Length
>
> //6A       U8, Register
>
> //00       U8, State
>
> //00       U8, Parameter 1, command execution status
>
> ** 0: Normal.
>
> ** 1: The server has error message.
>
> ** 3: Communication failure.
>
> //00       U8, Parameter 2, Joint 1 servo state=Normal
>
> //00       U8, Parameter 3, Joint 1 servo error code=Normal
>
> //00       U8, Parameter 4, Joint 2 servo state=Normal
>
> //00       U8, Parameter 5, Joint 2 servo error code=Normal
>
> //00       U8, Parameter 6, Joint 3 servo state=Normal
>
> //00       U8, Parameter 7, Joint 3 servo error code=Normal
>
> //00       U8, Parameter 8, Joint 4 servo state=Normal
>
> //00       U8, Parameter 9, Joint 4 servo error code=Normal
>
> //00       U8, Parameter 10, Joint 5 servo state=Normal
>
> //00       U8, Parameter 11, Joint 5 servo error code=Normal
>
> //00       U8, Parameter 12, Joint 6 servo state=Normal
>
> //00       U8, Parameter 13, Joint 6 servo error code=Normal
>
> //00       U8, Parameter 14, Joint 7 servo state=Normal
>
> //00       U8, Parameter 15, Joint 7 servo error code=Normal
>
> //00       U8, Parameter 16, Gripper servo state=Normal
>
> //00       U8, Parameter 17, Gripper servo error code=Normal
>





## Start the joint friction identification process

**Register:115 (0x73)**

```
// Request:
00 01 00 02 00 0F 73 58 49 31 32 30 33 30 37 32 30 31 4C 31 42  
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 0F    U16, Length 
>
> //73       U8, Register
>
> //58 49 31 32 30 33 30 37 32 30 31 4C 31 42    U8, XI120307201L1B, Robot SN ASCII code,



```
// Response:
00 01 00 02 00 06 73 00 00 00 00 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 06    U16, Length 
>
> //73       U8, Register
>
> //00       U8, State
>
> //00 00 00 00    FP32, Identification status  0.0: success. -1.0：failed.

