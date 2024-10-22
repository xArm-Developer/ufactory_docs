# 如何判断关节伺服零点是否丢失

下面以xArm6为例说明

适用产品：XF1304,XI1304,XS1304,UF850

适用固件版本：2.4.0+

适用studio版本：2.4.0+

应用场景：如果 TCP 负载设置正确，碰撞检测灵敏度≤3，但软件仍不断报告 C31 或 S15 错误，则伺服零点可能已丢失。

* 如果机械臂是在 2024 年 7 月之后购买的，我们备份了原始关节伺服零点数据，请使用以下工具获取数据并将 CSV 文件提供给我们，我们将在内部进行数据比对。

* 如果是在2024-7月之前购买，请按照下面的步骤进行操作，获取对应关节的电流

### 获取CSV文件

1. 把关节移动到零点位置[0,0,0,0,0,0]

2. 下载[E_read_mmu.exe](https://share.weiyun.com/8m5KIIUu), 然后启动。（只有window版本）

3. 输入控制器的ip, 进行连接

4. 等待2-3分钟后，程序将自动生成一个csv文件

![image-20241022043341003](C:\Users\Kristin\AppData\Roaming\Typora\typora-user-images\image-20241022043341003.png)

### 获取电流图表

请按照以下步骤检查相应关节的电流。

1. 移除所有末端负载，设置TCP负载和偏移为0

2. 进入”设置-通用设置-高级设置-碰撞检测“ ，关闭碰撞检测

3. 把手臂关节移动到零点位置[0,0,0,0,0,0,]

4. 下载[UFactory Assist](https://share.weiyun.com/idk8s0aA)，和[Blockly项目文件](https://share.weiyun.com/3XP8CQ04)

5. 启动UFactory Assist,选择“实际关节电流”，J3,200HZ，点击“观测”，然后开始

6. 运行Blockly项目，在UFactory Assist里面点击“结束”，然后把电流截图发给我们

电流应该为2A左右，请把截图发我们确认。

![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/3.png)

![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/4.png)
