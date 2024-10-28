# 更换控制器我们需要做些什么？

每个 xArm/UF850 都配有一个控制盒，用户可以更换另一个控制盒。 如果更换了控制盒，该怎么办？ 控制盒内是否保存了校准参数？

## 1-配置参数

可以通过设置-通用设置-高级设置-导出和加载配置文件，轻松实现控制器交换

 ![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/26.png)

## 2-Blockly 项目和轨迹文件

通过Blockly模块导出和导入项目文件


 ![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/27.png)

 ![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/28.png)

## 3.摩擦力参数

SN号的前6位代表机械臂的型号
![images](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/29.png)

不管控制器的型号是什么：

1）如果你的机械臂型号是13xx或者850（固件版本必须是1.12.10及以上）：

按下急停按钮然后松开，摩擦力参数会自动加载成功

2）如果手臂型号型号是12xx:

请提供SN号给我们，我们可以远程帮助你把摩擦力参数导入新控制器



## 4-不同轴数的机械臂

如果是不同轴数机械臂需要交换控制器，除了要加载摩擦力参数，还需要刷新控制器固件和软件，具体操作方式请参考[如何切换xarm5/xarm6/xarm7的固件？](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/support_articles/software/ru-he-qie-huan-xArm5-xArm6-xArm7-de-gu-jian-ban-ben.md)



### 附录:
1.配置文件中包含了哪些参数？

* 运动参数：加速度、位置步进、姿态步进、手动模式灵敏度、碰撞灵敏度、初始位置。 
* TCP负载和TCP 偏移设置 
* 安全参数设置： 安全边界、缩减模式。
* 安装方式参数： 倾斜角度、旋转角度。
* 坐标系（word_offset）

2.如何简单判断摩擦力参数是否被成功加载/
1) 您能在 UFactory Studio 软件上看到"轨迹录制"模块。 
2) 您可以在 "实时控制 "页面启用手动模式。

3.xarm的12xx，13xx之间有什么区别？

http://help.ufactory.cc/en/articles/5688912-the-main-difference-between-xarm-xf-xi-xs12xx-and-xarm-xf-xi-xs13xx












