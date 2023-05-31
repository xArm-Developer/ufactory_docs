# 6 Axis Force Torque Sensor(200-212)

## Get external force detection data of 6 Axis Force Torque Sensor

**Register200（C8）**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 01 C8
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//C8       U8, Register
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 1A C8 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
```
{% endcode %}

<details>

<summary>Response Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 1A    U16, Length 
//C8       U8, Register
//00       U8, State
//00, 00, 00, 00, 00, 00, 00, 00,00, 00, 00, 00,00, 00, 00, 00,00, 00, 00, 00,00, 00, 00, 00     fp32, 
External force detection data:
After filtering, load and offset compensation
```
{% endcode %}

</details>







## Enable/Disable 6 Axis Force Torque Sensor

**Register201（C9）**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 02 C9 00
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//C9       U8, Register
//00       U8, 0-Disable; 1-Enable    
```

</details>

```
// Response:
00 01 00 02 00 02 C9 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//C9       U8, Register
//00       U8, State
```

</details>





## Set the control mode of 6 Axis Force Torque Sensor

**Register202（CA）**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 02 CA 00  
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//CA       U8, Register
//00       U8, 
control mode
0: non-force mode
1: impedance control mode
2: force control mode
```

</details>

```
// Response:
00 01 00 02 00 02 33 10
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//33       U8, Register
//10       U8, State
```

</details>



## Get the control mode of 6 Axis Force Torque Sensor

**Register203（CB）**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 02 CB
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//CB       U8, Register
```

</details>

```
// Response:
00 01 00 02 00 03 CB 00 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 03    U16, Length 
//CB       U8, Register
//00       U8, State
//00       U8, 
control mode
0: non-force mode
1: impedance control mode
2: force control mode
```

</details>





## Perform end payload identification

**Register204（CC）**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 02 CC 00
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//CC       U8, Register
//00       U8, 
0: 6 Axis Force Torque Sensor identification
1: current identification
```

</details>

```
// Response:
00 01 00 02 00 2A CC 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 2A    U16, Length   Type 0: 00,2A  Type 1: 00,12
//CC       U8, Register
//00       U8, State
//00,00,00,00    fp32, 4*n Byte
//00,00,00,00
    ...
//00,00,00,00
Identification result)
Type=0: N=10.
[weight(kg), Cx, Cy, Cz(mm), Fx0, Fy0, Fz0(N), Tx0, Ty0, Tz0(Nm)]
Type=1: N=4.
[weight(kg), offset_Cx, offset_Cy, offset_Cz(mm)]
```

</details>







## Set the payload and offset of 6 Axis Force Torque Sensor

**Register205（CD）**

<pre data-overflow="wrap"><code><strong>// Request:
</strong>00 01 00 02 00 29 CD 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 29    U16, Length 
//CD       U8, Register
//00 00 00 00	fp32,  weight: kg
//00 00 00 00	fp32,  Cx: mm
//00 00 00 00	fp32,  Cy: mm
//00 00 00 00	fp32,  Cz: mm
//00 00 00 00	fp32,  Fx: mm
//00 00 00 00	fp32,  Fy: mm
//00 00 00 00	fp32,  Fz: mm
//00 00 00 00	fp32,  Tx: mm
//00 00 00 00	fp32,  Ty: mm
//00 00 00 00	fp32,  Tz: mm
```

</details>

```
// Response:
00 01 00 02 00 02 CD 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//CD       U8, Register
//00       U8, State
```

</details>







## Set the current state as the zero point of 6 Axis Force Torque Sensor

**Register206（CE）**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 01 CE
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//CE       U8, Register
```

</details>

```
// Response:
00 01 00 02 00 02 CE 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//CE       U8, Register
//00       U8, State
```

</details>







## Set all impedance control parameters of 6 Axis Force Torque Sensor

**Register207（CF）**

<pre data-overflow="wrap"><code><strong>// Request:
</strong>00 01 00 02 00 50 CF 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 50    U16, Length 
//CF       U8, Register
//00	U8, 
0: Base coordinate
1: Tool coordinate

//00 00 00 00 00 00	 U8, 
1: the corresponding direction will produce impedance

//00 00 00 00 	fp32*6 ,
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00
M => [Mx, My,Mz, Mr, Mp, My]
Equivalent mass(xyz): 0.02~1.0(kg)
Moment of inertia(rpy): 0.0001~0.01(kg*m^2)

//00 00 00 00  fp32*6 ,
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00
Stiffness coefficient.
K => [kx, ky, kz, kr, kp, ky]
xyz: 0~2000(N/m)
rpy: 0~20(Nm/rad)

//00 00 00 00  fp32*6 ,
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00
Damping coefficient
```

</details>

```
// Response:
00 01 00 02 00 02 CF 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//CF       U8, Register
//00       U8, State
```

</details>





## Set PID parameter of 6 Axis Force Torque Sensor

**Register208（D0）**

<pre data-overflow="wrap"><code><strong>// Request:
</strong>00 01 00 02 00 61 D0 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 61    U16, Length 
//D0       U8, Register
//00 00 00 00 		fp32*6, 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00
Proportional gain: KP
Kp[i]: 0~0.05

//00 00 00 00  	fp32*6, 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00
Integral gain: KI
KI[i]: 0~0.0005

//00 00 00 00  	fp32*6, 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00
Differential gain: KD
KD[i]: 0~0.05

//00 00 00 00  	fp32*6, 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00
Maximum TCP speed along each axis
VMAX[i]: 0~200(mm/s)
```

</details>

```
// Response:
00 01 00 02 00 02 D0 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//D0       U8, Register
//00       U8, State
```

</details>







## Set force control parameter of 6 Axis Force Torque Sensor

**Register209（D1）**

<pre data-overflow="wrap"><code><strong>// Request:
</strong>00 01 00 02 00 38 D1 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   
</code></pre>

<details>

<summary>Request Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 38    U16, Length 
//D1       U8, Register
//00	U8, 
0: Base coordinate
1: Tool coordinate

//00 00 00 00 00 00	 U8*6, 
1: the corresponding direction can be controlled by force

//00 00 00 00	fp32*6, 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00
F => [Fx, Fy, Fz, Fr, Fp, Fy]
(F[i]: The arm adjusts its position along the corresponding axis to achieve the specified force torque)
Fx: -150~150 (N)
Fy: -150~150 (N)
Fz: -200~200 (N)
Fr: -4~4(Nm)
Fp: -4~4(Nm)
Fy: -4~4(Nm)

//00 00 00 00	fp32*6, 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00
(Maximum TCP speed along each axis)
VMAX[i]: 0~200(mm/s)
```
{% endcode %}

</details>

```
// Response:
00 01 00 02 00 02 33 10
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//D1       U8, Register
//00       U8, State
```

</details>







## Set MKB parameter under impedance control mode of 6 Axis Force Torque Sensor

**Register210（D2）**

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 49 D2 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
```
{% endcode %}

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 49    U16, Length 
//D2       U8, Register
//00 00 00 00	fp32*6, 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00
M => [Mx, My,Mz, Mr, Mp, My]
Equivalent mass(xyz): 0.02~1.0(kg)
Moment of inertia(rpy): 0.0001~0.01(kg*m^2)

//00 00 00 00	fp32*6, 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00
Stiffness coefficient.
K => [kx, ky, kz, kr, kp, ky]
xyz: 0~2000(N/m)
rpy: 0~20(Nm/rad)

//00 00 00 00 	fp32*6, 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00
Damping coefficient
```

</details>

```
// Response:
00 01 00 02 00 02 D2 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//D2       U8, Register
//00       U8, State
```

</details>









