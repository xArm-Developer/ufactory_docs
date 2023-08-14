# Other Robotic Arm Function(81-100)

## Joint velocity control

**Register:81 (0x51)**

{% hint style="warning" %}
Set target joint velocity for joint velocity mode (mode 4)
{% endhint %}

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 22 51 91 0A 06 3F CC CC CC BD 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 CC CC 4C 3E
```
{% endcode %}

<details>

<summary>Request Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 22    U16, Length 
//51       U8, Register
//91 0A 06 3F	FP32, Joint 1 target velocity: π/6 rad/s
//CC CC CC BD	FP32, Joint 2 target velocity: -0.1 rad/s
//00 00 00 00	FP32, Joint 3 target velocity: 0 rad/s
//00 00 00 00	FP32, Joint 4 target velocity: 0 rad/s
//00 00 00 00	FP32, Joint 5 target velocity: 0 rad/s
//00 00 00 00	FP32, Joint 6 target velocity: 0 rad/s
//00 00 00 00	FP32, Joint 7 target velocity: 0 rad/s
//01	U8, whether all joints accelerate and decelerate synchronously: 1-True
//CC CC 4C 3E	FP32, duration: 0.2s
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

**Register:82 (0x52)**

{% hint style="warning" %}
Set target Cartesian linear velocity and angular velocity, for cartesian velocity control mode (mode 5)
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
//00 00 F0 41	FP32,  Cartesian linear velocity: Vx = 30 mm/s 
//00 00 00 00	FP32,  Cartesian linear velocity: Vy = 0 mm/s 
//00 00 A0 41	FP32,  Cartesian linear velocity: Vz = 20 mm/s 
//91 0A 06 3F	FP32,  Cartesian angular velocity: ωx = π/6 rad/s 
//00 00 00 00	FP32,  Cartesian angular velocity: ωy= 0  rad/s 
//00 00 00 00	FP32,  Cartesian angular velocity ωz = 0  rad/s 
//00	U8,  is tool coordinate or not: 0-base coordinate 
//CC CC 4C 3E	FP32,  duration: 0.2s 
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

## Relative motion&#x20;

**Register: 83 (0x53)**

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
//00 00 00 00	FP32, if TCP motion，parameter is X (mm). If joint motion，Parameter is J1 (rad)
//00 00 00 00	FP32, if TCP motion，parameter is y (mm). If joint motion，parameter is J2 (rad)
//00 00 00 00	FP32, If TCP motion，parameter is z (mm). If joint control，parameter is J3 (rad)
//00 00 00 00	FP32, If TCP motion，parameter is roll (rad). If joint motion，parameter is J4 (rad)
//00 00 00 00	FP32, If TCP motion，parameter is pitch (rad). If joint motion，parameter is J5 (rad)
//00 00 00 00	FP32, If TCP motion，parameter is yaw (rad). If joint motion，parameter is J6 (rad)
//00 00 00 00	FP32, If TCP motion，parameter is meaningless. If joint motion，parameter is J7 (rad)
//00 00 00 00	FP32, speed(mm/s, rad/s)
//00 00 00 00	FP32, acceleration(mm/s², rad/s²)
//00 00 00 00	FP32, move time（useless, just 0）
//00 00 00 00	FP32, radius(mm)
//00	U8, 0 is TCP motion, 1 is joint motion.
//00	U8, Only available in TCP motion. 0 is RPY, 1 is aixs angle.
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

## Get the attitude represented by the axis angle

**Register:91 (0x5B)**

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
//00 00 96 43	FP32,  X=300mm
//00 00 00 00	FP32,  Y=0 mm
//00 00 16 43	FP32,  Z=150mm
//DB 0F 49 40	FP32,  Rx=π rad 
//00 00 00 00	FP32,  Ry=0 rad
//00 00 00 00	FP32,  Rz=0 rad
```

</details>

## Linear motion with axis angle

**Register:92 (0x5C)**

{% hint style="warning" %}
When planning a linear motion, the target pose is expressed in terms of axis angle, which supports the absolute and relative target pose, as well as the motion options of the base coordinate system and tool coordinate system.
{% endhint %}

{% code overflow="wrap" %}
```
// Request:
00 01 00 02 00 0D 5C 00 00 96 43 00 00 00 00 00 00 16 43 DB 0F 49 40 00 00 00 00 00  00 00 00 00 00 48 43 00 00 FA 44 00 00 00 00 00 00 
```
{% endcode %}

<details>

<summary>Request Description</summary>

{% code overflow="wrap" %}
```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 0D    U16, Length 
//5C       U8, Register
//00 00 96 43	FP32, X=300mm
//00 00 00 00	FP32, Y=0
//00 00 16 43	FP32, Z=150mm
//DB 0F 49 40	FP32, Rx=π  rad
//00 00 00 00	FP32, Ry=0
//00 00 00 00	FP32, Rz=0
//00 00 48 43	FP32, motion speed=200 mm/s
//00 00 FA 44	FP32, acceleration=2000 mm/s²
//00 00 00 00	FP32, motion time, 0
//00	U8, motion reference, 0 is robot base (coordinate system), 1 is robot tool (coordinate system).
//00	U8, If the motion reference is the robot base, then 0 is absolute pose, 1 is relative pose.
```
{% endcode %}

</details>

```
// Response:
00 01 00 02 00 03 5C 00 01
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 03    U16, Length 
//5C       U8, Register
//00 01    U16, State
```

</details>

## Servo\_Cartesian motion (axis angle)

**Register:93 (0x5D)**

{% hint style="warning" %}
An interface for receiving high-frequency continuous Cartesian motion, and the posture is represented by the axis angle.
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
//00 00 96 43	FP32, X=300 mm
//00 00 00 00	FP32, Y=0
//00 00 16 43	FP32, Z=150 mm
//db 0f 49 40	FP32, Rx=π rad
//00 00 00 00	FP32, Ry=0
//00 00 00 00	FP32, Rz=0
//00 00 48 43	FP32, motion speed=200 mm/s
//00 00 FA 44	FP32, acceleration=2000 mm/s²
//00 00 00 00	FP32, 0 i the robot base coordinate system, 1 is robot tool coordinate system.
//00  U8,  If the motion reference is the robot base, then 0 is absolute pose, 1 is relative pose.
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
