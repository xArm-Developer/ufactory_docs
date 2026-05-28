# 如何切换xArm5/xArm6/xArm7的固件版本

xArm5,xArm6,xArm7的控制器是相互兼容的，每个手臂都配有一个控制器。如果在同一个控制器上使用不同轴数的机械臂，那么你需要更新固件和studio的版本，从而使得控制器固件版本和手臂轴数匹配。 

> xArm5：xarm5-type5
>
> xArm6：xarm6-type6
>
> xArm7：xarm7-type7

下面是更新版本的操作步骤：

1. 下载[GUI工具和软件/固件离线包](http://update.ufactory.cc/xArmTool-x86.zip)

2. 打开该软件后，输入控制器IP，点击“连接”。连接之后，如果手臂是xarm5，那么需要在类型中选择‘xarm5-type5' （若手臂是xArm6，则选择xarm6-type6，以此类推）。然后点击离线安装。

3. 重启控制器，等待2-3分钟，拍下急停按钮再松开。

如下图所示：

 ![](../assets/refresh_firmware.png)

   
