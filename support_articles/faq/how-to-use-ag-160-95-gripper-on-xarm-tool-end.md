---
description: >-
  This article mainy explains the connection method of AG-160-95 gripper from
  DH-ROBOTICS, and the usage example of this gripper.
---

# How to use AG-160-95 gripper on xArm tool end?

### 1. Hardware

* Gripper: AG-160-95
* Robotic Arm: xArm5/ xArm6/ xArm7/ UFactory 850

### 2. Cable connection

1\) Pin Definition

<figure><img src="../.gitbook/assets/AG-160-95 gripper.jpg" alt=""><figcaption></figcaption></figure>

2\) Connection

<table><thead><tr><th width="185">AG-160-95</th><th width="179">AG-160-95</th><th width="182">xArm tool end</th><th>xArm tool end</th></tr></thead><tbody><tr><td>color</td><td>Signal</td><td>Color</td><td>Signal</td></tr><tr><td>Red</td><td>24V</td><td>Brown or Blue</td><td>24V</td></tr><tr><td>Black</td><td>GND</td><td>White or Green</td><td>GND</td></tr><tr><td>Green</td><td>485-A</td><td>pink</td><td>485-A</td></tr><tr><td>Blue</td><td>485-B</td><td>yellow</td><td>485-B</td></tr></tbody></table>

### 3. Parameter Config

The main parameter is the Baud rate, TCP offset, TCP payload, and self-collision prevention model.

1\) Enter into 'Settings-Externals-Modbus RTU', choose '**115200**', and save.

<figure><img src="../.gitbook/assets/image (2) (1).png" alt=""><figcaption></figcaption></figure>

2\) Send command.

Initialization: 01 06 01 00 00 01

set position: 01 06 01 03 01 F4(set 500% position)

read position: 01 03 02 02 00 01



{% hint style="info" %}
Indicator: The red light blinks after powering on the gripper, and the Blue light is always on after initialization.
{% endhint %}



