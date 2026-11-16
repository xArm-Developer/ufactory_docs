# UFACTORY机械臂伺服模式使用指南

UFACTORY（深圳市众为创造科技有限公司）的机械臂提供8种控制模式，分别为：  

0. 模式0：位置模式
1. 模式1：伺服模式
2. 模式2：关节示教模式
3. 模式3：未使用
4. 模式4：关节速度控制模式
5. 模式5：笛卡尔速度控制模式
6. 模式6：关节在线轨迹规划模式
7. 模式7：笛卡尔在线轨迹规划模式

本文档主要介绍模式1 – 伺服模式，包含关节伺服和笛卡尔伺服模式

## 系统和网络要求
* 系统：打了PREEMPT_RT补丁的Linux系统。Windows延时较大，不建议使用。
* 网络：建议上位机和UFACTORY机械臂的控制盒通过网线直接连接。网络延时一般需要小于0.5毫秒。

Linux 的PREEMPT_RT实时补丁安装：
* [Linux实时补丁安装](https://docs.ros.org/en/foxy/Tutorials/Miscellaneous/Building-Realtime-rt_preempt-kernel-for-ROS-2.html)

Linux上网络延迟测试方法：
```
# 安装rt-tests
apt install rt-tests
# 测试延时，单位是微秒
cyclictest -t1 -p 80 -i 1000 -l 100000 --mlockall
```


## 伺服模式下的运动方式
伺服模式下有两种运动方式：
* 关节伺服运动,以最快的关节速度和加速度移动至给定的关节位置,xArm-Python-SDK接口为`set_servo_angle_j`
* 笛卡尔伺服运动, 以最快的TCP速度和加速度移动至给定的笛卡尔位置,xArm-Python-SDK接口为`set_servo_cartesian`

伺服模式下的两种运动，都是以最快的关节/TCP（180°/s, 1000mm/s）速度和加速度移动至给定的关节位置/笛卡尔位置，此命令不设置缓冲区，仅执行最新收到的目标点。

### 1. 控制频率
UFACTORY 的机械臂控制器在无网络延迟的情况下，最大的通讯频率为250HZ。若发送的指令频率超过250HZ，多余的指令将会丢失。  

用户自己规划的轨迹，需要以固定的频率发送经过插值平滑的轨迹点，两个点之间的单步距离不超过10mm（切勿一次性给出过远的目标位置），控制的频率建议控制在50-200HZ，若频率低于50HZ，机械臂的运动可能不会连续。

* 频率控制：通过控制两条指令发送的时间，例如
200HZ：两条指令间隔5ms, `time.sleep(0.005)`

* 步长控制：步长 = 每个控制周期机械臂移动的关节角或者距离。   
用户需要控制两点之间的单步距离（步长），使计算出来的期望速度小于手臂的最大速度。  
例如，servo_cartesian,通讯频率为100HZ。 手臂最大TCP 速度为1000mm/s, 则两点之间的距离最大步长为10mm.

### 2. 示例代码：
接口中预留了速度，加速度和时间的参数，但由于伺服模式默认以最快速度和加速度移动，所以目前这些参数在伺服模式中是无效的。  

#### 关节伺服运动示例
* servoj运动接口：`set_servo_angle_j`
* [servoj运动示例](https://github.com/xArm-Developer/xArm-Python-SDK/blob/master/example/wrapper/common/7001-servo_j.py)

频率：time.sleep(0.01)  ->  休眠10ms -> 100HZ
```python
while arm.connected and arm.state != 4:
    for i in range(100):
        angles = [i, 0, 0, 0, 0, 0, 0]
        ret = arm.set_servo_angle_j(angles)
        print('set_servo_angle_j, ret={}'.format(ret))
        time.sleep(0.01)
    for i in range(100):
        angles = [100-i, 0, 0, 0, 0, 0, 0]
        ret = arm.set_servo_angle_j(angles)
        print('set_servo_angle_j, ret={}'.format(ret))
        time.sleep(0.01)
```
#### 笛卡尔伺服运动示例
* servo_cartesian运动接口：`set_servo_cartesian`
* [servo_cartesian运动示例](https://github.com/xArm-Developer/xArm-Python-SDK/blob/master/example/wrapper/common/7002-servo_cartesian.py)

频率：time.sleep(0.01)  ->  休眠10ms -> 100HZ
步长 = 1mm   
```python
while arm.connected and arm.state != 4:
    for i in range(300):
        x = 200 + i
        mvpose = [x, 0, 200, 180, 0, 0]
        ret = arm.set_servo_cartesian(mvpose, speed=100, mvacc=2000)
        print('set_servo_cartesian, ret={}'.format(ret))
        time.sleep(0.01)
    for i in range(300):
        x = 500 - i
        mvpose = [x, 0, 200, 180, 0, 0]
        ret = arm.set_servo_cartesian(mvpose, speed=100, mvacc=2000)
        print('set_servo_cartesian, ret={}'.format(ret))
        time.sleep(0.01)
```


## ROS使用伺服模式
SDK提供伺服控制接口，ROS将其封装成service，用户调用配置好的服务即可。

**ROS1:**
* 关节伺服服务: `move_servoj` 
* 笛卡尔伺服服务: `move_servo_cart`
* [服务说明](https://github.com/xArm-Developer/xarm_ros/blob/master/examples/ReadMe.md#servo_cartesian-streamed-cartesian-trajectory)

**ROS2:**
* 关节伺服服务: `set_servo_angle_j`
* 笛卡尔伺服服务: `set_servo_cartesian`
* [服务说明](https://github.com/xArm-Developer/xarm_ros2/blob/humble/ReadMe_cn.md)


## 补充说明：
### 模式选择
* 伺服模式对于系统和网络实时性要求比较高，如条件不允许，可以先尝试在线规划模式(模式6和7), 这两个模式对系统和网络实时性要求不高，也不需要自己进行规划轨迹，根据给定的速度和加速度，在线规划把目标点分解成N个过程目标点发送给关节。

* 在线规划模式从当前位置开始执行规划，后一个运动指令可以打断正在运行的运动指令，而伺服模式后一个运动指令无法打断正在运行的运动指令。

#### 在线规划模式示例
* [模式6示例](https://github.com/xArm-Developer/xArm-Python-SDK/blob/master/example/wrapper/common/2006-joint_online_trajectory_planning.py)
* [模式7示例](https://github.com/xArm-Developer/xArm-Python-SDK/blob/master/example/wrapper/common/1010-cartesian_online_trajectory_planning.py)
