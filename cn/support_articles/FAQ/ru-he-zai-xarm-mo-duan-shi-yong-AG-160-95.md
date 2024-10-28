---
简介: 本文主要介绍 DH-ROBOTICS AG-160-95 机械爪的连接方法，以及该机械爪的使用示例。
---

# 如何在xArm末端使用AG-160-95机械爪

## 1.硬件方面
* 机械爪： AG-160-95
* 机械臂： xArm5/ xArm6/ xArm7/ UFactory 850

## 2.线缆连接
1） pin针定义

![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/support_articles/.gitbook/assets/AG-160-95%20gripper.jpg)

2）连接部分

| AG-160-95 | AG-160-95 | xArm tool end  | xArm tool end |
| :-------- | :-------- | :------------- | :------------ |
| 颜色     | 信号    | 颜色          | 信号        |
| 红色       | 24V       | Brown or Blue  | 24V           |
| 黑色     | GND       | White or Green | GND           |
| 绿色     | 485-A     | pink           | 485-A         |
| 蓝色     | 485-B     | yellow         | 485-B         |

## 3.参数设置
主要参数包括波特率、TCP 偏移、TCP 负载和防自碰撞模型。

1）进入“设置-外部设备-Modbus RTU”，选择“115200”，然后保存

![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/19.png)

2）发送指令

初始化: 01 06 01 00 00 01

设置位置: 01 06 01 03 01 F4(设置在50%的位置)

获取位置: 01 03 02 02 00 01

__注意：接通机械手电源后红灯闪烁，初始化后蓝灯常亮__


