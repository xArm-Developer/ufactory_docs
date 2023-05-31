# Other Robotic Arm Function(81-100)

## Joint velocity control

**Register：81 (51)**

{% hint style="warning" %}
Set joint target speed, for Joint speed control mode-mode 4
{% endhint %}

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 02 51 91 0A 06 3F CC CC CC BD 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 CC CC 4C 3E
```
{% endcode %}

<details>

<summary>Request Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//51       U8, Register
//91 0A 06 3F	fp32, Joint 1 target speed: π/6 rad/s
//CC CC CC BD	fp32, Joint 2 target speed: -0.1 rad/s
//00 00 00 00	fp32, Joint 3 target speed: 0 rad/s
//00 00 00 00	fp32, Joint 4 target speed: 0 rad/s
//00 00 00 00	fp32, Joint 5 target speed: 0 rad/s
//00 00 00 00	fp32, Joint 6 target speed: 0 rad/s
//00 00 00 00	fp32, Joint 7 target speed: 0 rad/s
//01	U8, whether all joints accelerate and decelerate synchronously: 1-True
//CC CC 4C 3E	fp32, duration: 0.2s
```
{% endcode %}

</details>

```
// Response:
00 01 00 02 00 02 51 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//51       U8, Register
//00       U8, State
```

</details>





## Cartesian velocity control

**Register：82 (52)**

{% hint style="warning" %}
Set target cartesian linear velocity and angular velocity, for cartesian velocity control mode-mode 5
{% endhint %}

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 1E 52 00 00 F0 41 00 00 00 00 00 00 A0 41 91 0A 06 3F 00 00 00 00 00 00 00 00 00 CC CC 4C 3E 
```
{% endcode %}

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 1E    U16, Length 
//52       U8, Register
//00 00 F0 41	fp32,  Cartesian linear velocity: Vx = 30 mm/s 
//00 00 00 00	fp32,  Cartesian linear velocity: Vy = 0 mm/s 
//00 00 A0 41	fp32,  Cartesian linear velocity: Vz = 20 mm/s 
//91 0A 06 3F	fp32,  Cartesian angular velocity: ωx = π/6 rad/s 
//00 00 00 00	fp32,  Cartesian angular velocity: ωy= 0  rad/s 
//00 00 00 00	fp32,  Cartesian angular velocity ωz = 0  rad/s 
//00	U8,  is tool coordinate or not: 0-base coordinate 
//CC CC 4C 3E	fp32,  duration: 0.2s 
```

</details>

```
// Response:
00 01 00 02 00 02 52 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//52       U8, Register
//00       U8, State
```

</details>







## Relative motion control

**Register: 83 (53)**

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 1E 53 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
```
{% endcode %}

<details>

<summary>Request Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 1E    U16, Length 
//53       U8, Register
//00 00 00 00	fp32, TCP control，Parameter is X (mm) Joint control，Parameter is J1 (rad)
//00 00 00 00	fp32, TCP control，Parameter is y (mm) Joint control，Parameter is J2 (rad)
//00 00 00 00	fp32, TCP control，Parameter is z (mm) Joint control，Parameter isJ3 (rad)
//00 00 00 00	fp32, TCP control，Parameter is roll (rad) Joint control，Parameter is J4 (rad)
//00 00 00 00	fp32, TCP control，Parameter is pitch (rad) Joint control，Parameter is J5 (rad)
//00 00 00 00	fp32, TCP control，Parameter isyaw (rad) Joint control，Parameter is J6 (rad)
//00 00 00 00	fp32, TCP control，Parameter is meaningless Joint control，Parameter is J7 (rad)
//00 00 00 00	fp32, speed(mm/s, rad/s)
//00 00 00 00	fp32, acceleration(mm/s^2, rad/s^2)
//00 00 00 00	fp32, move time（useless, just 0）
//00 00 00 00	fp32, radius(mm)

//00	U8,
TCP or Joint
0: TCP
1: Joint

//00	U8,
RPY control，only in TCP control（ 2 is 0）
0: RPY control
1: Angle control
```
{% endcode %}

</details>

```
// Response:
00 01 00 02 00 02 53 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//53       U8, Register
//00       U8, State
```

</details>





## Get the attitude represented by the axis angle attitude

**Register：91 (5B)**

{% hint style="warning" %}
Get the current TCP pose, and use the axial angle to represent the pose of the robotic arm
{% endhint %}

```
// Request:
00 01 00 02 00 01 5B  
```

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//5B       U8, Register
```

</details>

{% code overflow="wrap" %}
```
// Response:
00 01 00 02 00 1A 5B 00 00 00 96 43 00 00 00 00 00 00 16 43 DB 0F 49 40 00 00 00 00 00 00 00 00 
```
{% endcode %}

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 1A    U16, Length 
//5B       U8, Register
//00       U8, State
//00 00 96 43	fp32,  Current Cartesian coordinate X=300mm
//00 00 00 00	fp32,  Current Cartesian coordinate Y=0
//00 00 16 43	fp32,  Current Cartesian coordinate Z=150mm
//DB 0F 49 40	fp32,  Current Cartesian coordinate Rx=π rad 
//00 00 00 00	fp32,  Current Cartesian coordinate Ry=0 
//00 00 00 00	fp32,  Current Cartesian coordinate Rz=0 
```

</details>







## Linear motion with axis angle attitude as target

**Register：92 (5C)**

{% hint style="warning" %}
When planning a linear motion, the target pose is expressed in terms of axial angles, which supports the absolute target pose/relative target pose, as well as the motion options of the base coordinate system/tool coordinate system.
{% endhint %}

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 0D 33 00 00 96 43 00 00 00 00 00 00 16 43 DB 0F 49 40 00 00 00 00 00  00 00 00 00 00 48 43 00 00 FA 44 00 00 00 00 00 00 
```
{% endcode %}

<details>

<summary>Request Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//32       U8, Register
//00 00 96 43	fp32, X=300mm
//00 00 00 00	fp32, Y=0
//00 00 16 43	fp32, Z=150mm
//DB 0F 49 40	fp32, Rx=π  rad
//00 00 00 00	fp32, Ry=0
//00 00 00 00	fp32, Rz=0
//00 00 48 43	fp32, motion speed=200 mm/s
//00 00 FA 44	fp32, acceleration=2000mm/s2
//00 00 00 00	fp32, motion time, 0
//00	U8, 
0base coordinate system motion
Motion coordinate system：
0: the base coordinate system motion
1: the tool coordinate system motion

//00	U8, 
 absolute pose
 If the motion coordinate system is the base coordinate system.
0 represents the given pose is an absolute pose
1 represents the given pose is a relative pose
 (the given parameters 1-6 coordinates are based on the current an offset of position)
```
{% endcode %}

</details>

```
// Response:
00 01 00 02 00 04 5C 00 01
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 04    U16, Length 
//5C       U8, Register
//00 01       U16, State
```

</details>







## Servo\_cartesian motion (axis angle)

**Register：93 (5D)**

{% hint style="warning" %}
An interface for receiving high-frequency continuous Cartesian trajectory motion, and the posture is represented by the axis angle.
{% endhint %}

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 26 5D 00 00 96 43 00 00 00 00 00 00 16 43 db 0f 49 40 00 00 00 00 00 00 00 00 00 00 48 43 00 00 FA 44 00 00 00 00 00   
```
{% endcode %}

<details>

<summary>Request Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 26    U16, Length 
//5D       U8, Register
//00 00 96 43	fp32, X=300mm
//00 00 00 00	fp32, Y=0
//00 00 16 43	fp32, Z=150mm
//db 0f 49 40	fp32, Rx=πrad
//00 00 00 00	fp32, Ry=0
//00 00 00 00	fp32, Rz=0
//00 00 48 43	fp32, motion speed=200mm/s
//00 00 FA 44	fp32, acceleration=2000mm/s2
//00 00 00 00	fp32, 
base coordinate system motion
Motion coordinate system：
0: the base coordinate system motion
1: the tool coordinate system motion

//00
0absolute pose
 If the motion coordinate system is the base coordinate system.
0 represents the given pose is an absolute pose
1 represents the given pose is a relative pose
 (the given parameters 1-6 coordinates are based on the current an offset of position)
```
{% endcode %}

</details>

```
// Response:
00 01 00 02 00 02 5D 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//5D       U8, Register
//00       U8, State
```

</details>





