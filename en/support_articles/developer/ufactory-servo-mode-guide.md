# UFACTORY Robot Arm Servo Mode Usage Guide

UFACTORY robot arms provide 8 control modes:  

0. Mode 0: Position Control Mode
1. Mode 1: Servo Motion Mode
2. Mode 2: Joint Teaching Mode
3. Mode 3: Not Used
4. Mode 4: Joint Velocity Control Mode
5. Mode 5: Cartesian Velocity Control Mode
6. Mode 6: Joint Online Trajectory Planning Mode
7. Mode 7: Cartesian Online Trajectory Planning Mode

This document introduces Mode 1 – Servo Mode, including servoj and servo_cartesian modes.

## System and Network Requirements
* System: Linux system with PREEMPT_RT patch. Windows has higher latency and is not recommended.
* Network: It is recommended to directly connect the host computer and UFACTORY robot arm control box with a network cable. Network latency generally needs to be less than 0.5 milliseconds.

Linux PREEMPT_RT Real-time Patch Installation:
* [Linux Real-time Patch Installation Guide](https://docs.ros.org/en/foxy/Tutorials/Miscellaneous/Building-Realtime-rt_preempt-kernel-for-ROS-2.html)

Linux Network Latency Test Method:
```
# Install rt-tests
apt install rt-tests
# Test latency, unit is microseconds
cyclictest -t1 -p 80 -i 1000 -l 100000 --mlockall
```


## Motion Methods in Servo Mode
There are two motion methods in servo mode:
* servoj motion: moves to the given joint position with the fastest joint speed and acceleration, xArm-Python-SDK interface is `set_servo_angle_j`
* servo_cartesian motion: moves to the given Cartesian position with the fastest TCP speed and acceleration, xArm-Python-SDK interface is `set_servo_cartesian`

Both motion methods in servo mode move to the given joint/Cartesian position with the fastest joint/TCP speed (180°/s, 1000mm/s) and acceleration. These commands do not set buffers and only execute the latest received target point.

### 1. Control Frequency
The UFACTORY robot arm controller can communicate at a maximum frequency of 250Hz without network delay. If the command frequency exceeds 250Hz, redundant commands will be lost.

User-planned trajectories need to be sent at a fixed frequency with interpolated smooth trajectory points. The single-step distance between two points should not exceed 10mm (never give too far target positions at once). The recommended control frequency is 50-200Hz. If the frequency is lower than 50Hz, the robot arm motion may not be continuous.

* Frequency control: by controlling the time interval between sending two commands, for example:
200Hz: interval between two commands is 5ms, `time.sleep(0.005)`

* Step control: Step = joint angle or distance the robot arm moves per control cycle.
Users need to control the single-step distance (step) between two points so that the calculated desired speed is less than the maximum speed of the arm.
For example, using servo_cartesian with communication frequency of 100Hz. The maximum TCP speed of the arm is 1000mm/s, so the maximum step distance between two points is 10mm.

### 2. Code Examples:
Speed, acceleration, and time parameters are reserved, but since servo mode moves at the fastest speed and acceleration by default, these parameters are currently invalid in servo mode.

#### servoj Motion Example
* servoj motion interface: `set_servo_angle_j`
* [servoj motion example](https://github.com/xArm-Developer/xArm-Python-SDK/blob/master/example/wrapper/common/7001-servo_j.py)

Frequency: time.sleep(0.01) -> sleep 10ms -> 100Hz
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

#### servo_cartesian Motion Example
* servo_cartesian motion interface: `set_servo_cartesian`
* [servo_cartesian motion example](https://github.com/xArm-Developer/xArm-Python-SDK/blob/master/example/wrapper/common/7002-servo_cartesian.py)

Frequency: time.sleep(0.01) -> sleep 10ms -> 100Hz
Step = 1mm
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


## Using Servo Mode with ROS
The SDK provides servo control interfaces, and ROS encapsulates them as services. Users only need to call the configured services.

**ROS1:**
* Joint servo service: `move_servoj`
* Cartesian servo service: `move_servo_cart`
* [Service Documentation](https://github.com/xArm-Developer/xarm_ros/blob/master/examples/ReadMe.md#servo_cartesian-streamed-cartesian-trajectory)

**ROS2:**
* Joint servo service: `set_servo_angle_j`
* Cartesian servo service: `set_servo_cartesian`
* [Service Documentation](https://github.com/xArm-Developer/xarm_ros2/blob/humble/xarm_api/ReadMe.md)


## Additional Notes:
### Mode Selection
* Servo mode has high requirements for system and network real-time performance. If conditions do not allow, you can first try online planning modes (modes 6 and 7). These two modes do not have high requirements for the system and network, and they plan the trajectory by the controller box itself. According to the given speed and acceleration, the target points are decomposed into N process target points through online planning.

* Under modes 6 and 7, once a new command is received, the current motion will be interrupted and the new command will be executed directly, while under servo mode, the subsequent motion command cannot interrupt the current motion.

#### Online Planning Mode Examples
* [Mode 6 Example](https://github.com/xArm-Developer/xArm-Python-SDK/blob/master/example/wrapper/common/2006-joint_online_trajectory_planning.py)
* [Mode 7 Example](https://github.com/xArm-Developer/xArm-Python-SDK/blob/master/example/wrapper/common/1010-cartesian_online_trajectory_planning.py)