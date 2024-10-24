---
简介：本文旨在介绍Robotiq 机械爪和xArm的连接方式，以及Robotiq 机械爪的用法的举例说明
---

# 如何在xArm末端使用Robotiq Gripper？

### 1.硬件方面

* 机械爪：Robotiq 2F-85/ Robotiq 2F-140
* 机械臂： xArm5/ xarm6/ xArm7

### 2.线缆连接

1）pin针定义

![image-20241022081815080](C:\Users\Kristin\AppData\Roaming\Typora\typora-user-images\image-20241022081815080.png)

2）连接

| Robotiq 连接线 | Robotiq 连接线 | xArm工具末端 | xArm工具末端 |
| -------------- | -------------- | ------------ | ------------ |
| **颜色**       | **信号**       | **颜色**     | **Signal**   |
| 红色           | +24V DC        | 棕色或者蓝色 | +24V DC      |
| 黑色           | -24V DC        | 白色         | GND          |
| 白色           | 485-A          | 粉色         | User 485-A   |
| 绿色           | 485-B          | 黄色         | User 485-B   |
| 灰色           | 485 GND        | 绿色         | GND          |

### 3.参数设置

主要参数是波特率，TCP负载，防自碰撞模型

1）通过UFactory Studio设置参数

TCP负载和偏移：设置-运动参数-TCP设置

![image-20241022091217015](C:\Users\Kristin\AppData\Roaming\Typora\typora-user-images\image-20241022091217015.png)

防自碰撞模型：设置-实时控制-末端执行器“，选择Robotiq 机械爪

请选择“是的"，这会把波特率设置为115200，默认波特率是2000000

![image-20241022091449421](C:\Users\Kristin\AppData\Roaming\Typora\typora-user-images\image-20241022091449421.png)

2）通过python SDK设置参数

波特率：

```
//Code example
# Modify the baud rate to 115200, the default is 2000000.
arm.set_tgpio_modbus_baudrate(115200)  

```

TCP负载和偏移设置：

```

# Robotiq 2F/85 Gripper
arm.set_tcp_load(0.925, [0, 0, 58])
arm.set_tcp_offset([0, 0, 174, 0, 0, 0])
arm.save_conf()

# Robotiq 2F/140 Gripper
arm.set_tcp_load(1.025, [0, 0, 73])
arm.set_tcp_offset([0, 0, 244, 0, 0, 0])
arm.save_conf()
```

防自碰撞模型

```
# Robotiq 2F/85 Gripper
arm.set_collision_tool_model(4)

# Robotiq 2F/140 Gripper
arm.set_collision_tool_model(5)
```

### 4.控制方式

1）通过UFactory Studio控制

![image-20241022092339605](C:\Users\Kristin\AppData\Roaming\Typora\typora-user-images\image-20241022092339605.png)

Ufactory Studio-Blockly

![image-20241022092444815](C:\Users\Kristin\AppData\Roaming\Typora\typora-user-images\image-20241022092444815.png)

2)通过python SDK控制

```
arm.set_tgpio_modbus_baudrate(115200)  
arm.robotiq_reset()
arm.robotiq_set_activate()    #enable the robotiq gripper
arm.robotiq_close()
arm.robotiq_open()
```

注意：

1-当使用SDK去控制爪子时，不需要发送CRC，我们会自动添加它

2-请注意，我们默认 Robotiq 机械手的唯一标识符（Slave ID） 为 ID=9。 如果您修改了机械手的 ID，UFactory Studio 或上述 SDK 将无法工作，您只能使用 getset_tgpio_modbus_data 对其进行控制。

