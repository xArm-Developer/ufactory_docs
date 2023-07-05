# Other Robotic Arm Function(51-70)

## Set the gravity direction

**Register:51 (0x33)**

{% hint style="warning" %}
Set the gravity direction for correct torque compensation and collision detection. After modification, it shall call the save\_conf () function or refer to Register: 40(28) to save the setting, otherwise it will be invalid after the next restart.
{% endhint %}

```
// Request:
00 01 00 02 00 0D 33 00 00 00 00 00 00 00 00 00 00 80 BF 
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 0D    U16, Length 
//33       U8, Register
//00 00 00 00	FP32, Gravity direction vector X=0 base coordinate system
//00 00 00 00	FP32, Gravity direction vector Y=0 base coordinate system
//00 00 80 BF	FP32, Gravity direction vector Z=-1 base coordinate system
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

## Set the safe boundary range

**Register:52 (0x34)**

{% hint style="warning" %}
C35 Set the boundary range of the safety fence in the three-dimensional space. If TCP of the robotic arm exceeds this boundary, error C35of the Control Box will be triggered.
{% endhint %}

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 19 34 58 02 00 00 C8 00 00 00 F4 01 00 00 64 00 00 00 58 02 00 00 C8 00 00 00 
```
{% endcode %}

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 19    U16, Length 
//34       U8, Register
//58,02,00,00	FP32, Cartesian boundary value x+=600mm
//C8,00,00,00	FP32, Cartesian boundary value x-=200mm
//F4,01,00,00	FP32, Cartesian boundary value y+ =500mm
//64,00,00,00	FP32, Cartesian boundary value y- =100mm
//58,02,00,00	FP32, Cartesian boundary value z+=600mm
//C8,00,00,00	FP32, Cartesian boundary value z-=200mm
```

</details>

```
// Response:
00 01 00 02 00 02 34 10
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//34       U8, Register
//10       U8, State
```

</details>

## Get all configurations of the Reduced Mode

**Register:53 (0x35)**

```
// Request:
00 01 00 02 00 01 35  
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//35       U8, Register
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 51 35 00 01 01 2C 00 64 01 2C FF F6 01 2C 00 32 00 00 C8 42 DB 0F 49 40 DB 0F C9 C0 DB 0F C9 40 15 C6 03 C0 91 0A 06 40 CE 53 7B C0 68 96 44 3E DB 0F C9 C0 DB 0F C9 40 35 B3 D8 BF DB 0F 49 40 DB 0F C9 C0 DB 0F C9 40 00 00 00 00 00 00 00 00 01 01
```
{% endcode %}

<details>

<summary>Response Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 51    U16, Length 
//35       U8, Register
//10       U8, State
//10       U8, State
//00	   U16,	The state of Reduce mode: 0-OFF; 1-ON
//01 2C 00 64 01 2C FF F6 01 2C 00 32 	int16, Safety Boundary: [x_max=300, x_min=100, y_max=300, y_min=-10, z_max=300, z_min=50]
//00 00 C8 42 fp32, Max TCP speed=100mm/s
//DB 0F 49 40 fp32, max Joint speed=180 °/s

//DB 0F C9 C0 DB 0F C9 40 15 C6 03 C0 91 0A 06 40 CE 53 7B C0 68 96 44 3E DB 0F C9 C0 DB 0F C9 40 35 B3 D8 BF DB 0F 49 40 DB 0F C9 C0 DB 0F C9 40 00 00 00 00 00 00 00 00 	FP32, Joint range: [J1_min, J1_max, …, J7_min, J7_max]

//01  U8, The state of Safety Boundary: 0- OFF; 1-ON
//01  U8, The state of Collision Rebound: 0- OFF; 1-ON 
```
{% endcode %}

</details>

## Get current joint torque of the servo

**Register:55 (0x37)**

{% hint style="warning" %}
Estimate the joint torque based on current and theoretical model, which is for reference only
{% endhint %}

```
// Request:
00 01 00 02 00 01 37  
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//37       U8, Register
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 1E 37 00 17 37 00 00 00 00 00 2A C5 5B C1 79 A4 C5 C0 00 00 00 00 87 A3 E9 BF 00 00 00 00 00 00 00 00 
```
{% endcode %}

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 1E    U16, Length 
//37       U8, Register
//00       U8, State
//00 00 00 00	FP32, Theoretical torque of joint1 = 0
//2A C5 5B C1   FP32, Theoretical torque of joint2 = -13.7 N.m
//79 A4 C5 C0	FP32, Theoretical torque of joint3 = -6.17 N.m
//00 00 00 00   FP32, Theoretical torque of joint4 = 0
//87 A3 E9 BF	FP32, Theoretical torque of joint5 = -1.83N.m
//00 00 00 00	FP32, Theoretical torque of joint6 = 0
//00 00 00 00	FP32, Theoretical torque of joint7 = 0
```

</details>

## Set Joint Range Limit of Reduced Mode

**Register:58 (0x3A)**

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 39 3A C2 F5 48 C0 C2 F5 48 40 33 33 03 C0 8F C2 05 40	C2 F5 48 C0 C2 F5 48 40 5C 8F 42 BE 47 E1 7A 40 C2 F5 48 C0 C2 F5 48 40 EB 51 D8 BF C8 00 00 00 C2 F5 48 C0 C2 F5 48 40
```
{% endcode %}

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 39    U16, Length 
//3A       U8, Register
//C2 F5 48 C0 C2 F5 48 40	FP32, J1_min = -3.14rad,J1_max = 3.14rad
//33 33 03 C0 8F C2 05 40	FP32, J2_min = -2.05rad,J2_max = 20.9rad
//C2 F5 48 C0 C2 F5 48 40	FP32, J3_min = -3.14rad,J3_max = 3.14rad
//5C 8F 42 BE 47 E1 7A 40	FP32, J4_min = -0.19rad,J4_max = 3.92rad
//C2 F5 48 C0 C2 F5 48 40	FP32, J5_min = -3.14rad,J5_max = 3.14rad
//EB 51 D8 BF C8 00 00 00	FP32, J6_min = -1.69rad,J6_max = 3.14rad
//C2 F5 48 C0 C2 F5 48 40	FP32, J7_min = -3.14rad,J7_max = 3.14rad
```

</details>

```
// Response:
00 01 00 02 00 02 3A 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//3A       U8, Register
//00       U8, State
```

</details>

## Safety boundary start switch

**Register: 59 (0x3B)**

{% hint style="warning" %}
Set the safety fence boundary validation switch in three-dimensional space. If the TCP of the robotic arm exceeds this boundary after validation, error C35 of the Control Box will be triggered.
{% endhint %}

```
// Request:
00 01 00 02 00 02 3B 00
```

<details>

<summary>Request Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//3B       U8, Register

//00       U8, 
Validation switch
0: Turn off safety boundary detection
1: Turn on safety boundary detection
```
{% endcode %}

</details>

```
// Response:
00 01 00 02 00 02 3B 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//3B       U8, Register
//00       U8, State
```

</details>

## Set the state of Collision Rebound

**Register:60 (0x3C)**

```
// Request:
00 01 00 02 00 02 3C 00  
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//3C       U8, Register
//00       U8, ollision Rebound switch  0-OFF; 1-ON
```

</details>

```
// Response:
00 01 00 02 00 02 3C 10
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//3C       U8, Register
//00       U8, State
```

</details>

## Start/Stop trajectory record

**Register:61 (0x3D)**

```
// Request:
00 01 00 02 00 02 3D 00  
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//3D       U8, Register
//00       U8, 0-Stop trajectory record, 1-start trajectory record
```

</details>

```
// Response:
00 01 00 02 00 02 3D 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//3D       U8, Register
//00       U8, State
```

</details>

## Save recorded trajectory

**Register:62 (0x3E)**

```
// Request:
00 01 00 02 00 0A 3E 74 65 73 74 2E 74 72 61 6A 
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 0A    U16, Length 
//3E       U8, Register
//74 65 73 74 2E 74 72 61 6A  U8,Trajectory name (max length:80 Bytes)
e. g. test.traj
```

</details>

```
// Response:
00 01 00 02 00 02 3E 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//3E       U8, Register
//00       U8, State
```

</details>

## Load recorded trajectory

**Register:63 (0x3F)**

```
// Request:
00 01 00 02 00 0A 3F 74 65 73 74 2E 74 72 61 6A 
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 0A    U16, Length 
//3F       U8, Register
//74 65 73 74 2E 74 72 61 6A  U8,Trajectory name (max length:80 Bytes)
e. g. test.traj
```

</details>

```
// Response:
00 01 00 02 00 02 3F 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//3F       U8, Register
//00       U8, State
```

</details>

## Playback recorded trajectory

**Register:64 (0x40)**

```
// Request:
00 01 00 02 00 09 40 00 00 00 01 00 00 00 01  
```

<details>

<summary>Request Description</summary>

<pre><code>//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 09    U16, Length 
//40       U8, Register
//00 00 00 01    FP32, Cycles of playback

<strong>//00 00 00 01    FP32, 
</strong>Playback speed
1: 1multiple
2: 2multiple
4: 4multiple
</code></pre>

</details>

```
// Response:
00 01 00 02 00 02 40 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//40       U8, Register
//00       U8, State
```

</details>

## Get the state of recorded trajectory

**Register:65 (0x41)**

```
// Request:
00 01 00 02 00 01 41  
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//41       U8, Register
```

</details>

```
// Response:
00 01 00 02 00 03 41 00 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 03    U16, Length 
//41       U8, Register
//00       U8, State
//00       U8, 
0: no read/write
1: loading
2: load success
3: load failed
4: saving
5: save success
6: save failed
```

</details>

## Set allow to avoid overspeed near some singularities using approximate solutions

**Register: 66 (0x42)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 02 42 00
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//42       U8, Register
//00       U8, 0 :Not allow  ,1 :allow
```

</details>

```
// Response:
00 01 00 02 00 02 42 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//42       U8, Register
//00       U8, State
```

</details>



## Get DH parameters

**Register: 67 (0x43)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 01 43
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//43       U8, Register
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 72 43 00 00 00 00 00 00 80 85 43 00 00 00 00 00 00 00 00 FD 44 B1 BF 00 00 00 00 DB 0F C9 BF 00 00 00 00 FD 44 B1 3F 00 00 00 00 00 00 00 00 49 BE 90 43 00 00 00 00 00 40 AB 43 DB 0F C9 BF 00 00 9B 42 00 00 00 00 00 00 00 00 DB 0F C9 3F 00 00 00 00 00 00 00 00 00 00 C2 42 DB 0F C9 BF 00 00 98 42 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
```
{% endcode %}

<details>

<summary>Response Description</summary>

<pre><code>//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 72    U16, Length 
//43       U8, Register
//00       U8, State

<strong>Note:
</strong><strong>4 float parameters per joint
</strong>A total of 112 bytes, 28 floating-point data, 
only the first 24 floating-point data of the xArm6 are valid data

For example: xArm6  SN:XI120204201B02

//J1
00 00 00 00 
00 80 85 43 
00 00 00 00 
00 00 00 00 
//J2
FD 44 B1 BF 
00 00 00 00 
DB 0F C9 BF 
00 00 00 00 
//J3
FD 44 B1 3F 
00 00 00 00 
00 00 00 00 
49 BE 90 43 
//J4
00 00 00 00 
00 40 AB 43 
DB 0F C9 BF 
00 00 9B 42 
//J5
00 00 00 00 
00 00 00 00 
DB 0F C9 3F 
00 00 00 00 
//J6
00 00 00 00 
00 00 C2 42 
DB 0F C9 BF 
00 00 98 42 
//J7
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00
</code></pre>

</details>



## Set  DH parameters

**Register: 68 (0x44)**

<pre data-overflow="wrap"><code><strong>// Request:
</strong>00 01 00 02 00 73 44 00 00 00 00 00 00 80 85 43 00 00 00 00 00 00 00 00 FD 44 B1 BF 00 00 00 00 DB 0F C9 BF 00 00 00 00 FD 44 B1 3F 00 00 00 00 00 00 00 00 49 BE 90 43 00 00 00 00 00 40 AB 43 DB 0F C9 BF 00 00 9B 42 00 00 00 00 00 00 00 00 DB 0F C9 3F 00 00 00 00 00 00 00 00 00 00 C2 42 DB 0F C9 BF 00 00 98 42 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 73    U16, Length 
//44       U8, Register

Note:
4 float parameters per joint
A total of 112 bytes, 28 floating-point data, 
only the first 24 floating-point data of the xArm6 are valid data

For example: xArm6  SN:XI120204201B02

//J1
00 00 00 00 
00 80 85 43 
00 00 00 00 
00 00 00 00 
//J2
FD 44 B1 BF 
00 00 00 00 
DB 0F C9 BF 
00 00 00 00 
//J3
FD 44 B1 3F 
00 00 00 00 
00 00 00 00 
49 BE 90 43 
//J4
00 00 00 00 
00 40 AB 43 
DB 0F C9 BF 
00 00 9B 42 
//J5
00 00 00 00 
00 00 00 00 
DB 0F C9 3F 
00 00 00 00 
//J6
00 00 00 00 
00 00 C2 42 
DB 0F C9 BF 
00 00 98 42 
//J7
00 00 00 00 
00 00 00 00 
00 00 00 00 
00 00 00 00

//00     U8,Set flag
0: use the set DH parameters, but do not save to the configuration file
1: Use the set DH parameters and save them to the configuration file
2: Use the set DH parameters and delete the configuration file
3: Use the default DH parameters, but do not delete the configuration file
4: Use the default DH parameters and delete the configuration file
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 02 44 00
```
{% endcode %}

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//44       U8, Register
//00       U8, State
```

</details>



## Get the currently executing command

It needs to be parsed according to different registers

**Register: 69 (0x45)**

```
// Request:
00 01 00 02 00 01 45
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//45       U8, Register
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 2B 45 00 17 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 C2 B8 B2 3E 58 A0 0B 41 00 00 00 00
```
{% endcode %}

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 2B    U16, Length 
//45       U8, Register
//00       U8, State
//17       U8, 
Current execution motion instruction register:
0x15: Cartesian linear motion
0x16: Linear motion with arc blending
0x17: P2P joint movement
0x18: joint blending movement
0x19: Back to zero movement
0x1B: arc movement
0x1C: Linear motion in tool coordinate system
0x5C: linear motion of axis angle attitude target

//00 00 00 00	FP32, Joint1=0 
//00 00 00 00	FP32, Joint2=0
//00 00 00 00	FP32, Joint3=0
//00 00 00 00	FP32, Joint4=0
//00 00 00 00	FP32, Joint5=0
//00 00 00 00	FP32, Joint6=0
//00 00 00 00	FP32, Joint7=0
//C2 B8 B2 3E	FP32, speed=20π/180rad/s
//58 A0 0B 41	FP32, 500π/180rad/s2
//00 00 00 00	FP32, motion time=0
```

</details>





## Set the joint torque (theoretical) and current of servo

**correspond to the contents of reporting port 60\~87 Bytes**

**Register: 70 (0x46)**

```
// Request:
00 01 00 02 00 02 46 00  
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//46       U8, Register
//00       U8, 
value of theoretical joint torque)
0: value of theoretical joint torque, unit : Nm
1: value of actual current of servo, unit : A
```

</details>

```
// Response:
00 01 00 02 00 02 46 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//46       U8, Register
//00       U8, State
```

</details>



