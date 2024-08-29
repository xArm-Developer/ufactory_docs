---
description: >-
  If you want to speed up the motion of UFACTORY arm, please adjust the
  following 2 aspects.
---

# Guide to run robotic arm at the maximum speed?

**Take xArm Series as an example.**

Firmware version: v2.0.0+

UFactory Studio version: v2.0.0+

xArm-Python-SDK version: v1.10.0+



### 1. Parameter Adjustment

The main parameters that affect the movement speed of xArm are: speed, acceleration, and jerk.

|              | TCP Motion  | Joint Motion |
| ------------ | ----------- | ------------ |
| Speed        | 1000mm/s    | 0 \~ 180°/s  |
| Acceleration | 50000mm/s²  | 1146°/s²     |
| Jerk         | 100000mm/s³ | 28647°/s³    |

{% hint style="success" %}
It is recommended to adjust the jerk to the maximum, which will speed up the motion of robotic arm.
{% endhint %}

* Parameter adjustment via UFACTORY Studio

'Settings-General-Advanced Settings-Parameters'

<figure><img src="../.gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>

* Parameter adjustment via Python SDK

1\) Speed: 'speed' parameter

2\) Acceleration: 'mvacc' parameter

3\) Jerk: set\_tcp\_jerk() , set\_joint\_jerk()

<pre><code><strong>//code example
</strong><strong>arm.set_tcp_jerk(100000)
</strong>arm.set_joint_jerk(28647, is_radian=True)
arm.save_conf()
</code></pre>



### 2. Motion Planning

Adjust Parameters to do continuous motion.

* radius > 0
* wait = False

Example:

<figure><img src="../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

Radius>0, wait=False;    Video: [https://youtu.be/oX\_J8RplEw4](https://youtu.be/oX\_J8RplEw4)

Radius>0, wait=True;      Video:[https://youtu.be/wpBzt3a30L0](https://youtu.be/wpBzt3a30L0)

Radius<0, wait=False;     Video:[https://youtu.be/pi-5PPhPpfg](https://youtu.be/pi-5PPhPpfg)
