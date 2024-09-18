# How to solve C31 error?

Product: xArm series, UF 850, Lite6

UFactory version: V2.1.0+

When the actual obtained current exceeds the expected current threshold, our software will report a C31 error and stop the arm to protect it.

There are 4 reasons, please check the configs below to solve it.

### 1. TCP payload

Check if the TCP payload setting on 'Settings-Motion-TCP' is consistent with the actual payload.

### 2. High motion speed

Try to lower the speed to verify this problem.

### 3. Friction parameter

Check if the friction parameter is loaded successfully.

You can enter 'Settings-My Device-System Info-Robot SN', if the SN info is consistent with the SN attached to the robot base, if so the friction parameter is loaded successfully.

### 4. Collision sensitivity

Try to lower the 'Settings-Motion-Parameters-collision sensitivity' to verify this problem.

{% hint style="warning" %}
**Note:** If there are still problems, please provide the information above to the support team.
{% endhint %}
