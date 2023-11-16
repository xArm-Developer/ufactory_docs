---
description: >-
  This article mainly explains the connection method of the Robotiq Gripper and
  xArm, and the usage example of the robotiq gripper.
---

# How to use Robotiq Gripper on xArm tool end?

### 1.  Hardware

* Gripper: Robotiq 2F-85/ Robotiq 2F-140
* Robotic Arm: xArm5/ xarm6/ xArm7

### 2. Cable connection

#### 1) Pin Definition

<figure><img src="../.gitbook/assets/RobotiqGripper.jpg" alt=""><figcaption></figcaption></figure>

#### 2) Connection

<table data-full-width="false"><thead><tr><th width="197" align="center">Robotiq connector</th><th width="198" align="center">Robotiq connector</th><th width="174" align="center">xarm tool end</th><th align="center">xarm tool end</th></tr></thead><tbody><tr><td align="center"><strong>Color</strong></td><td align="center"><strong>Signal</strong></td><td align="center"><mark style="color:orange;"><strong>Color</strong></mark></td><td align="center"><mark style="color:orange;"><strong>Signal</strong></mark></td></tr><tr><td align="center">red</td><td align="center">+24V DC</td><td align="center">Brown&#x26;Blue</td><td align="center">+24V DC</td></tr><tr><td align="center">black</td><td align="center">-24V DC</td><td align="center">white</td><td align="center">GND</td></tr><tr><td align="center">white</td><td align="center">485-A</td><td align="center">pink</td><td align="center">User 485-A</td></tr><tr><td align="center">green</td><td align="center">485-B</td><td align="center">yellow</td><td align="center">User 485-B</td></tr><tr><td align="center">grey</td><td align="center">485 GND</td><td align="center">green</td><td align="center">GND</td></tr></tbody></table>

### 3. Parameter Config

The main parameter is the Baud rate, TCP offset, TCP payload, and self-collision prevention model.

#### 1) Config the parameter via UFactory Studio

TCP Payload and offset: 'Settings-Motion-TCP'.

<figure><img src="../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

Self-collision prevention model: 'Settings-Live Control-End Effector', choose Robotiq Gripper.

Please choose 'yes', It will set the baud rate to 115200, the default baud rate is 2000000.

<figure><img src="../.gitbook/assets/image (28).png" alt=""><figcaption></figcaption></figure>

#### 2) Config the parameter via Python SDK

Baud rate:

{% code title="//Code Example" %}
```python
# Modify the baud rate to 115200, the default is 2000000.
arm.set_tgpio_modbus_baudrate(115200)  
```
{% endcode %}

TCP Payload and offset:

{% code title="// Code Example" %}
```python
# Robotiq 2F/85 Gripper
arm.set_tcp_load(0.925, [0, 0, 58])
arm.set_tcp_offset([0, 0, 174, 0, 0, 0])
arm.save_conf()

# Robotiq 2F/140 Gripper
arm.set_tcp_load(1.025, [0, 0, 73])
arm.set_tcp_offset([0, 0, 244, 0, 0, 0])
arm.save_conf()
```
{% endcode %}

Self-Collision Prevention Model:

{% code title="// Code Example" %}
```python
# Robotiq 2F/85 Gripper
arm.set_collision_tool_model(4)

# Robotiq 2F/140 Gripper
arm.set_collision_tool_model(5)
```
{% endcode %}

### 4. Control Method

#### 1) Control it via UFactory Studio.

UFactory Studio - Live Control:

<div align="left">

<figure><img src="../.gitbook/assets/image (1).png" alt="" width="338"><figcaption></figcaption></figure>

</div>

UFactory Studio - Blockly:

<figure><img src="../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

#### 2) Control it via Python SDK

{% code title="// Code Example" %}
```python
arm.set_tgpio_modbus_baudrate(115200)  
arm.robotiq_reset()
arm.robotiq_set_activate()    #enable the robotiq gripper
arm.robotiq_close()
arm.robotiq_open()
```
{% endcode %}

{% hint style="warning" %}
**Note:**&#x20;

1\. When using the SDK to control the gripper, there is no need to send the CRC, we will add it automatically.

2\. Please note that we consider the slaver ID of the Robotiq gripper as **ID=9** by default. If you modify the ID of the gripper, UFactory Studio or SDK above should not work, you can only use getset\_tgpio\_modbus\_data to control it.
{% endhint %}
