# 485 peripheral transparent transmission(240-241)

## Peripheral 485 transparent transmission timeout

**Register:240(0xF0)**

```
// Request:
00 01 00 02 00 03 F0 01 01 
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 03    U16, Length
>
> //F0       U8, Register
>
> //01 01    U16, Timeout(ms)



```
// Response:
00 01 00 02 00 02 F0 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //F0       U8, Register
>
> //00       U8, State



## Peripheral 485 transparent transmission communication

**Register:241(0xF1)**

```
// Request:
00 01 00 02 00 0B F1 09 00 
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 0B    U16, Length 
>
> //F1       U8, Register
>
> //09       U8, Host ID, robot tool 485 is 09, control box 485 is 0A.
>
> //00       User data



```
// Response:
00 01 00 02 00 08 F1 00 09 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 08    U16, Length 
>
> //F1       U8, Register
>
> //00       U8, State
>
> //09       U8, Host ID, robot tool 485 is 09, control box 485 is 0A.
>
> //00       User data


