# 6 Axis Force Torque Sensor(200-212)

## Get external force detection data of 6 Axis Force Torque Sensor

**Register:200(0xC8）**

```
//Request
00 01 00 02 00 01 C8
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 01    U16, Length 
>
> //C8       U8, Register




```
// Response:
00 01 00 02 00 1A C8 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
```




> Response Description
> 
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 1A    U16, Length
>
> //C8       U8, Register
>
> //00       U8, State
>
> //00, 00, 00, 00, 00, 00, 00, 00,00, 00, 00, 00,00, 00, 00, 00,00, 00, 00, 00,00, 00, 00, 00     FP32,
>
> External force detection data:
>
> After filtering, load and offset compensation
>





## Enable/Disable 6 Axis Force Torque Sensor

**Register:201(0xC9）**

```
//Request
00 01 00 02 00 02 C9 00
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //C9       U8, Register
>
> //00       U8, 0-Disable; 1-Enable



```
// Response:
00 01 00 02 00 02 C9 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //C9       U8, Register
>
> //00       U8, State



## Set the control mode of 6 Axis Force Torque Sensor

**Register:202(0xCA）**

```
//Request
00 01 00 02 00 02 CA 00  
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //CA       U8, Register
>
> //00       U8, 
>
> control mode
>
> 0: non-force mode
>
> 1: impedance control mode
>
> 2: force control mode



```
// Response:
00 01 00 02 00 02 CA 10
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //CA       U8, Register
>
> //10       U8, State



## Get the control mode of 6 Axis Force Torque Sensor

**Register:203(0xCB）**

```
//Request
00 01 00 02 00 01 CB
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 01    U16, Length 
>
> //CB       U8, Register



```
// Response:
00 01 00 02 00 03 CB 00 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 03    U16, Length 
>
> //CB       U8, Register
>
> //00       U8, State
>
> //00       U8, 
>
> control mode
>
> 0: non-force mode
>
> 1: impedance control mode
>
> 2: force control mode



## Perform end payload identification

**Register:204(0xCC）**

```
//Request
00 01 00 02 00 02 CC 00
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //CC       U8, Register
>
> //00       U8, 
>
> 0: 6 Axis Force Torque Sensor identification
>
> 1: current identification



```
// Response:
00 01 00 02 00 2A CC 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 2A    U16, Length   Type 0: 00,2A  Type 1: 00,12
>
> //CC       U8, Register
>
> //00       U8, State
>
> //00,00,00,00    FP32, 4*n Byte
>
> //00,00,00,00
> ...
>
> //00,00,00,00
>
> Identification result
>
> Type=0: N=10.
>
> [weight(kg), Cx, Cy, Cz(mm), Fx0, Fy0, Fz0(N), Tx0, Ty0, Tz0(Nm)]
>
> Type=1: N=4.
>
> [weight(kg), offset_Cx, offset_Cy, offset_Cz(mm)]



## Set the payload and offset of 6 Axis Force Torque Sensor

**Register:205(0xCD）**

```
// Request:
00 01 00 02 00 29 CD 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 29    U16, Length 
>
> //CD       U8, Register
>
> //00 00 00 00	FP32,  weight: kg
>
> //00 00 00 00	FP32,  Cx: mm
>
> //00 00 00 00	FP32,  Cy: mm
>
> //00 00 00 00	FP32,  Cz: mm
>
> //00 00 00 00	FP32,  Fx: mm
>
> //00 00 00 00	FP32,  Fy: mm
>
> //00 00 00 00	FP32,  Fz: mm
>
> //00 00 00 00	FP32,  Tx: mm
>
> //00 00 00 00	FP32,  Ty: mm
>
> //00 00 00 00	FP32,  Tz: mm



```
// Response:
00 01 00 02 00 02 CD 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //CD       U8, Register
>
> //00       U8, State



## Set the current state as the zero point of 6 Axis Force Torque Sensor

**Register:206(0xCE）**
```
//Request
00 01 00 02 00 01 CE
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 01    U16, Length 
>
> //CE       U8, Register



```
// Response:
00 01 00 02 00 02 CE 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //CE       U8, Register
>
> //00       U8, State



## Set all impedance control parameters of 6 Axis Force Torque Sensor

**Register:207(0xCF）**
```
// Request:
00 01 00 02 00 50 CF 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 

```


> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 50    U16, Length 
>
> //CF       U8, Register
>
> //00	   U8, 
>
> 0: Base coordinate\
> 1: Tool coordinate
> 
> //00 00 00 00 00 00	 U8,\
> 1: the corresponding direction will produce impedance
>
> 
>
> //00 00 00 00 	FP32*6 ,</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> M => [Mx, My,Mz, Mr, Mp, My]\
> Equivalent mass(xyz): 0.02~1.0(kg)\
> Moment of inertia(rpy): 0.0001~0.01(kg*m^2)
>
> 
>
> //00 00 00 00  FP32*6 ,</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> Stiffness coefficient.\
> K => [kx, ky, kz, kr, kp, ky]\
> xyz: 0~2000(N/m)\
> rpy: 0~20(Nm/rad)
>
> 
>
> //00 00 00 00  FP32*6 ,</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> Damping coefficient



```
// Response:
00 01 00 02 00 02 CF 00
```



> Response Description
> 
> //00 01    U16, Transaction ID\
> //00 02    U16, Protocol Identifier\
> //00 02    U16, Length\
> //CF       U8, Register\
> //00       U8, State



## Set PID parameter of 6 Axis Force Torque Sensor

**Register:208(0xD0）**
```
// Request:
00 01 00 02 00 61 D0 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 

```


> Request Description
>
> //00 01    U16, Transaction ID\
> //00 02    U16, Protocol Identifier\
> //00 61    U16, Length \
> //D0       U8, Register\
> //00 00 00 00 	FP32*6, </br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> Proportional gain: KP\
> Kp[i]: 0~0.05
>
> //00 00 00 00  	FP32*6, </br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> Integral gain: KI\
> KI[i]: 0~0.0005
> 
> //00 00 00 00  	FP32*6, </br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> Differential gain: KD\
> KD[i]: 0~0.05
>
> //00 00 00 00  	FP32*6, </br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> Maximum TCP speed along each axis\
> VMAX[i]: 0~200(mm/s)



```
// Response:
00 01 00 02 00 02 D0 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //D0       U8, Register
>
> //00       U8, State



## Set force control parameter of 6 Axis Force Torque Sensor

**Register:209(0xD1）**
```
// Request:
00 01 00 02 00 38 D1 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   

```


> Request Description
> 
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 38    U16, Length
>
> //D1       U8, Register
>
> //00	   U8,\
> 0: Base coordinate\
> 1: Tool coordinate
>
> //00 00 00 00 00 00	 U8*6,\
> 1: the corresponding direction can be controlled by force
> 
> //00 00 00 00	FP32*6,</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> F => [Fx, Fy, Fz, Fr, Fp, Fy]\
> (F[i]: The arm adjusts its position along the corresponding axis to achieve the specified force torque)\
> Fx: -150~150 (N)\
> Fy: -150~150 (N)\
> Fz: -200~200 (N)\
> Fr: -4~4(Nm)\
> Fp: -4~4(Nm)\
> Fy: -4~4(Nm)
> 
> //00 00 00 00	FP32*6,</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> (Maximum TCP speed along each axis)\
> VMAX[i]: 0~200(mm/s)
>





```
// Response:
00 01 00 02 00 02 D1 10
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //D1       U8, Register
>
> //00       U8, State



## Set MKB parameter under impedance control mode of 6 Axis Force Torque Sensor

**Register:210(0xD2）**


```
// Request:
00 01 00 02 00 49 D2 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
```




> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 49    U16, Length 
>
> //D2       U8, Register
>
> //00 00 00 00	FP32*6, </br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> M => [Mx, My,Mz, Mr, Mp, My]\
> Equivalent mass(xyz): 0.02~1.0(kg)\
> Moment of inertia(rpy): 0.0001~0.01(kg*m^2)
>
> 
>
> //00 00 00 00	FP32*6, </br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> Stiffness coefficient.\
> K => [kx, ky, kz, kr, kp, ky]\
> xyz: 0~2000(N/m)\
> rpy: 0~20(Nm/rad)
>
> 
>
> //00 00 00 00 	FP32*6, </br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> Damping coefficient



```
// Response:
00 01 00 02 00 02 D2 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //D2       U8, Register
>
> //00       U8, State



## Set impedance control parameter of 6 Axis Force Torque Sensor

**Register:211(0xD3）**

```
// Request:
00 01 00 02 00 08 D3 00 00 00 00 00 00 00
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 08    U16, Length 
>
> //D3       U8, Register
>
> //00       U8, 
>
> 0: Base coordinate
>
> 1: Tool coordinate
>
> //00 00 00 00 00 00 
>
> 1: the corresponding direction will produce impedance



```
// Response:
00 01 00 02 00 02 D3 00
```



> Response Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 02    U16, Length 
>
> //D3       U8, Register
>
> //00       U8, State



## Get all feedback data of 6 Axis Force Torque Sensor

**Register:212(0xD4）**

```
// Request:
00 01 00 02 00 01 D4  
```



> Request Description
>
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //00 01    U16, Length 
>
> //D4       U8, Register




```
// Response:
00 01 00 02 01 1A D4 00 00 00 00 08 03 E8 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
```




> Response Description
> 
> //00 01    U16, Transaction ID
>
> //00 02    U16, Protocol Identifier
>
> //01 1A    U16, Length
>
> //D4       U8, Register
>
> //00       U8, State
>
> //00 U8, Control mode
>
> //00 U8, Enable state
>
> //00 U8, Type
>
> //08 U8, ID
>
> //03, E8 U16, Frequency
>
> //00,00,00,00	FP32, Weight
>
> //00,00,00,00	FP32, Reserve
>
> //00,00,00,00	FP32,</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> Centroid
>
> //00,00,00,00	FP32*6, offset</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
>
> //00\
> Coordinate of impedance control mode
>
> //00,00,00,00,00,00	FP32*6, Impedance control vector
>
> //00,00,00,00	FP32,</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> Equivalent mass and  Moment of inertia
>
> //00,00,00,00	FP32*6,</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> Stiffness coefficient
>
> //00,00,00,00	FP32*6,</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> Damping coefficient
>
> //00    U8, Coordinate of force control mode
>
> //00,00,00,00,00,00	FP32, Force Control vector
>
> //00,00,00,00	FP32*6,</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> Force vector
>
> //00,00,00,00	FP32*6,</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> Reserve
>
> //00,00,00,00	FP32*6,</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> KP: Proportional gain
>
> //00,00,00,00	FP32*6,</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> KI: Integral gain
>
> //00,00,00,00	FP32*6,</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> KD: Differential gain
> 
> //00,00,00,00	FP32*6,</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> 00,00,00,00</br>
> Max TCP speed vector






