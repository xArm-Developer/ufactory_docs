# Basic Motion(21-30)

## Cartesian linear motion

**Register:21(0x15）**


```
// Request
00 01 00 02 00 25 15 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 42 00 00 FA 44 00 00 00 00
```




> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 25    U16, Length 
>
> //15       U8, Register
>
> //00 00 C8 43	FP32, x=400mm
>
> //00 00 00 00	FP32, y=0mm
>
> //00 00 48 43	FP32, z=200mm
>
> //DB 0F 49 40	FP32, roll=π
>
> //00 00 00 00	FP32, pitch=0
>
> //00 00 00 00	FP32, yaw=0
>
> //00 00 C8 42	FP32, speed=100mm/s
>
> //00 00 FA 44	FP32, acceleration=2000mm/s²
>
> //00 00 00 00	FP32, 0motion time=0



```
// Response
00 01 00 02 00 04 15 00 00 01
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 04    U16, Length 
>
> //15       U8, Register
>
> //00       U8, State
>
> //00 01    U16, Parameter



## Linear motion with circular arc

**Register:22 (0x16)**


```
// Request
00 01 00 02 00 29 16 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 42 00 00 FA 44 00 00 00 00 00 00 48 42
```




> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 29    U16, Length 
>
> //16       U8, Register
>
> //00 00 C8 43 FP32, x=400mm
>
> //00 00 00 00 FP32, y=0mm
>
> //00 00 48 43 FP32, z=200mm
>
> //DB 0F 49 40 FP32, roll=π
>
> //00 00 00 00 FP32, pitch=0
>
> //00 00 00 00 FP32, yaw=0
>
> //00 00 C8 42 FP32, motion speed=100 mm/s
>
> //00 00 FA 44 FP32, acceleration=2000 mm/s²
>
> //00 00 00 00 FP32, motion time 0
>
> //00 00 48 42 FP32, Arc blending radius=50 mm



```
// Response
00 01 00 02 00 04 16 00 00 01
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 04    U16, Length 
>
> //16       U8, Register
>
> //00       U8, State
>
> //00 01    U16, Parameter



## Joint motion (P2P motion)

**Register:23(0x17）**

```
// Request
00 01 00 02 00 29 17 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C2 B8 B2 3E 58 A0 0B 41 00 00 00 00
```




> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 29    U16, Length 
>
> //17       U8, Register
>
> //92 0A 86 3F	FP32, Joint1=π/3 
>
> //00 00 00 00	FP32, Joint2=0
>
> //00 00 00 00	FP32, Joint3=0
>
> //00 00 00 00	FP32, Joint4=0
>
> //00 00 00 00	FP32, Joint5=0
>
> //00 00 00 00	FP32, Joint6=0
>
> //00 00 00 00	FP32, Joint7=0
>
> //C2 B8 B2 3E	FP32, speed=0.3491 rad/s
>
> //58 A0 0B 41	FP32, acceleration= 8.7266 rad/s²
>
> //00 00 00 00	FP32, motion time=0



```
//Response
00 01 00 02 00 04 17 00 00 01
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 04    U16, Length 
>
> //17       U8, Register
>
> //00       U8, State
>
> //00 01    U16, Parameter



## Joint motion with circular arc

**Register:24 (0x18)**


```
// Request
00 01 00 02 00 29 18 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C2 B8 B2 3E 58 A0 0B 41 00 00 20 41
```




> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 29    U16, Length 
>
> //18       U8, Register
>
> //92 0A 86 3F	FP32, Joint1=π/3
>
> //00 00 00 00	FP32, Joint2=0
>
> //00 00 00 00	FP32, Joint3=0
>
> //00 00 00 00	FP32, Joint4=0
>
> //00 00 00 00	FP32, Joint5=0
>
> //00 00 00 00	FP32, Joint6=0
>
> //00 00 00 00	FP32, Joint7=0
>
> //C2 B8 B2 3E	FP32, speed=0.3491 rad/s
>
> //58 A0 0B 41	FP32, acceleration=8.7266 rad/s²
>
> //00 00 20 41	FP32, radius=10 mm



```
// Response
00 01 00 02 00 04 18 00 00 01 
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 04    U16, Length 
>
> //18       U8, Register
>
> //00       U8, State
>
> //00 01    U16, Parameter



## Return to zero position

**Register:25 (0x19)**

```
// Request
00 01 00 02 00 0D 19 DB 0F 49 40 F3 66 DF 40 00 00 00 00
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 0D    U16, Length 
>
> //19       U8, Register
>
> //DB 0F 49 40	FP32, speed=50 rad/s
>
> //F3 66 DF 40	FP32, acceleration=600 rad/s²
>
> //00 00 00 00	FP32, motion time=0



```
// Response
00 01 00 02 00 04 19 00 00 01
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 04    U16, Length 
>
> //19       U8, Register
>
> //00       U8, State
>
> //00 01    U16, Parameter



## Pause commands, Command delay

**Register:26(0x1A)**

```
// Request
00 01 00 02 00 05 1A 00 00 40 40
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 05    U16, Length 
>
> //1A       U8, Register
>
> //00 00 40 40 FP32, Pause time=3s



```
// Response
00 01 00 02 00 04 1A 00 00 01
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 04    U16, Length 
>
> //1A       U8, Register
>
> //00       U8, State
>
> //00 01    U16, Parameter



## Circular motion

**Register:27 (0x1B)**

**warning**<br>
The motion calculates the trajectory of the space circle according to the three-point coordinates, and the three-point coordinates are (current starting point, parameter 1, parameter 2)



```
// Request
00 01 00 02 00 41 1B 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 43 00 00 C8 42 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 C8 42 00 00 FA 44 00 00 00 00 00 00 48 42
```



> Request Description
> 
> //00 01    U16, Transaction ID
> 
> //00 02    U16, Protocol Identifier
> 
> //00 41    U16, Length 
> 
> //1B       U8, Register
> 
> //00 00 C8 43 FP32, x=400 mm
> 
> //00 00 00 00 FP32, y=0mm
> 
> //00 00 48 43 FP32, z=200 mm
> 
> //DB 0F 49 40 FP32, roll=π
> 
> //00 00 00 00 FP32, pitch=0
> 
> //00 00 00 00 FP32, yaw=0
> 
> //00 00 C8 43 FP32, x=400 mm
> 
> //00 00 C8 42 FP32, y=0mm
> 
> //00 00 48 43 FP32, z=200 mm
> 
> //DB 0F 49 40 FP32, roll=π
> 
> //00 00 00 00 FP32, pitch=0
> 
> //00 00 00 00 FP32, yaw=0
> 
> //00 00 C8 42 FP32, speed=100 mm/s
> 
> //00 00 FA 44 FP32, acceleration 2000 mm/s²
> 
> //00 00 00 00 FP32, motion time=0
> 
> //00 00 48 42 FP32, Percentage of the length of arc in motion to circumference=50%
> 




```
// Response
00 01 00 02 00 04 1B 00 00 01
```



Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 04    U16, Length 
>
> //1B       U8, Register
>
> //00       U8, State
>
> //00 01    U16, Parameter



## Linear motion in tool coordinate system

**Register:28 (0x1C)**

**warning**<br>
Move in Cartesian linear relative motion based on the current tool coordinate system.



```
// Request
00 01 00 02 00 25 1C 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 C2 B8 B2 3E 00 00 FA 44 00 00 00 00 
```




> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 25    U16, Length 
>
> //1C       U8, Register
>
> //00 00 C8 43	FP32, x=400 mm
>
> //00 00 00 00	FP32, y=0 mm
>
> //00 00 48 43	FP32, z=200 mm
>
> //DB 0F 49 40	FP32, roll=π
>
> //00 00 00 00	FP32, pitch=0
>
> //00 00 00 00	FP32, yaw=0
>
> //C2 B8 B2 3E	FP32, speed=20 mm/s
>
> //00 00 FA 44	FP32, acceleration=2000 mm/s²
>
> //00 00 00 00	FP32, motion time=0



```
// Response
00 01 00 02 00 04 1C 00 00 01
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 04    U16, Length 
>
> //1C       U8, Register
>
> //00       U8, State
>
> //00 01    U16, Parameter



## Servoj motion

**Register:29 (0x1D)**


```
// Request
00 01 00 02 00 29 1D 92 0A 86 3F 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
```




> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 29    U16, Length 
>
> //1D       U8, Register
>
> //92 0A 86 3F	FP32, Joint1=π/3
>
> //00 00 00 00	FP32, Joint2=0
>
> //00 00 00 00	FP32, Joint3=0
>
> //00 00 00 00	FP32, Joint4=0
>
> //00 00 00 00	FP32, Joint5=0
>
> //00 00 00 00	FP32, Joint6=0
>
> //00 00 00 00	FP32, Joint7=0
>
> //00 00 00 00	FP32, speed  meaningless  0
>
> //00 00 00 00	FP32, acceleration  meaningless  0
>
> //00 00 00 00	FP32, motion time  meaningless  0



```
// Response
00 01 00 02 00 02 1D 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //1D       U8, Register
>
> //00       U8, State



## Servo\_cartesian motion

**Register:30 (0x1E)**

**warning**<br>
Interface for receiving high-frequency continuous cartesian trajectory motion.



```
// Request
00 01 00 02 00 25 1E 00 00 C8 43 00 00 00 00 00 00 48 43 DB 0F 49 40 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
```




> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 25    U16, Length 
>
> //1E       U8, Register
>
> //00 00 C8 43	FP32, x=400mm
>
> //00 00 00 00	FP32, y=0mm
>
> //00 00 48 43	FP32, z=200mm
>
> //DB 0F 49 40	FP32, roll=π
>
> //00 00 00 00	FP32, pitch=0
>
> //00 00 00 00	FP32, yaw=0
>
> //00 00 00 00	FP32, speed, meaningless, 0
>
> //00 00 00 00	FP32, acceleration, meaningless, 0
>
> //00 00 00 00	FP32, 
>
> Motion coordinate system：
>
> 0 ：the base coordinate system
>
> 1 ：the tool coordinate system



```
// Response
00 01 00 02 00 02 1E 00 
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //1E       U8, Register
>
> //00       U8, State

