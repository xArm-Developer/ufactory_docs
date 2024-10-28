# 如何让机械臂以最大速度运动？

如果你想提高UFactory机械臂运动的速度，请调整下面两个方面

__本文以xArm系列为例__

适用固件版本：V2.0.0+

适用studio版本：V2.0.0+

适用xArm-Python-SDK版本: V1.10.0+

## 1.参数调整

影响xArm速度的主要参数有：速度，加速度，加加速度

|          | TCP 运动    | 关节运动   |
| :------- | :---------- | :--------- |
| 速度     | 1000mm/s    | 0 ~ 180°/s |
| 加速度   | 50000mm/s²  | 1146°/s²   |
| 加加速度 | 100000mm/s³ | 28647°/s³  |


建议把加加速度调整到最大，这样可以加快机械臂的运动速度

1)通过UFactory Studio调整参数

进入”设置-通用设置-高级设置-参数
![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/13.png)


2）通过python SDK调整参数

速度："speed"参数

加速度：“mavacc"参数

加加速度：set_tcp_jerk() , set_joint_jerk()

```php
//code example
arm.set_tcp_jerk(100000)
arm.set_joint_jerk(28647, is_radian=True)
arm.save_conf()
```

## 2.运动规划

调整参数使手臂做连续运动

* 转弯半径 >0
* 等待 =否

![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/14.png)

转弯半径 >0, 等待 =否；示例视频：https://www.youtube.com/watch?v=oX_J8RplEw4

转弯半径 >0, 等待 =是；示例视频：https://www.youtube.com/watch?v=wpBzt3a30L0

转弯半径 <0, 等待 =否；示例视频：https://www.youtube.com/watch?v=pi-5PPhPpfg
