---
xArm 5 Lite的运动学和动力学参数
---

# xArm 5 Lite

<mark style="color:blue;">**1.修改DH参数**</mark>

![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/support_articles/.gitbook/assets/image%20(39).png)

| Kinematics | theta (rad) | d(mm) | alpha(rad) | a(mm) | offset(rad) |
| ---------- | ----------- | ----- | ---------- | ----- | ----------- |
| Joint1     | 0           | 267   | 0          | 0     | 0           |
| Joint2     | 0           | 0     | -pi/2      | 0     | <mark style="color:orange;">T2_offset</mark>   |
| Joint3     | 0           | 0     | 0          | <mark style="color:orange;">a2</mark>    | <mark style="color:orange;">T3_offset</mark>   |
| Joint4     | 0           | 0     | 0          | <mark style="color:orange;">a3</mark>    | <mark style="color:orange;">T4_offset</mark>   |
| Joint5     | 0           | 97    | -pi/2      | 0     | 0           |

<mark style="color:blue;">**2.标准DH参数**</mark>

![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/support_articles/.gitbook/assets/image%20(40).png)

| Kinematics | theta(rad) | d(mm) | alpha(rad) | a(mm) | offset(rad) |
| :--------- | :--------- | :---- | :--------- | :---- | :---------- |
| Joint1     | 0          | 267   | -pi/2      | 0     | 0           |
| Joint2     | 0          | 0     | 0          |<mark style="color:orange;">a2</mark>   | <mark style="color:orange;">T2_offset</mark>  |
| Joint3     | 0          | 0     | 0          |<mark style="color:orange;">a3</mark>    | <mark style="color:orange;">T3_offset</mark>   |
| Joint4     | 0          | 0     | -pi/2      | 76    | <mark style="color:orange;">T4_offset</mark>   |
| Joint5     | 0          | 97    | 0          | 0     | 0           |

<mark style="color:orange;">**‘Tx\_offset’**</mark> ' 是从数学零位到图中所示的机械零位的偏移关节角度。

T2_offset = -atan(284.5/53.5) = -1.3849179 (-79.34995°);

T3_offset = atan(284.5/53.5)+atan(0.3425/0.0775) = 2.7331843 (156.599924°);

a2 = sqrt(284.5^2+53.5^2) = 289.48866;

T4_offset = -atan(342.5/77.5) = -1.3482664 (-77.249974°);

a3 = sqrt(77.5^2+342.5^2) = 351.158796;


<mark style="color:blue;">**3.质量参数**</mark>


![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/support_articles/.gitbook/assets/image%20(41).png)

<mark style="color:blue;">**xArm 5 Lite - 模型1**</mark>

| Dynamics | Mass(kg) | Center of Mass(mm)    |
| :------- | :------- | :-------------------- |
| Link1    | 2.177    | [0.15, 27.24, -13.75] |
| Link2    | 2.011    | [36.7, -220.9, 33.56] |
| Link3    | 2.01     | [68.34, 223.66, 1.1]  |
| Link4    | 1.206    | [63.87, 29.3, 3.5]    |
| Link5    | 0.17     | [0.0, -6.77, -10.98]  |

<mark style="color:blue;">**xArm 5 Lite - 模型2**</mark>

| Dynamics | Mass(kg) | Center of Mass(mm)   |
| :------- | :------- | :------------------- |
| Link1    | 2.46     | [0.13, 30.1, -12.0]  |
| Link2    | 2.21     | [38.2, -226.6, 34.7] |
| Link3    | 2.16     | [69.0, 231.8, 1.0]   |
| Link4    | 1.354    | [65.2, 31.8, 3.11]   |
| Link5    | 0.17     | [0.0, -6.77, -10.98] |

<mark style="color:blue;">**xArm 5 Lite - 模型3**</mark>

| Dynamics | Mass(kg) | Center of Mass(mm)     |
| :------- | :------- | :--------------------- |
| Link1    | 2.382    | [0.13, 29.4, -12.4]    |
| Link2    | 2.164    | [37.88, -225.4, 34.47] |
| Link3    | 2.121    | [68.83, 229.85, 1.02]  |
| Link4    | 1.317    | [64.9, 31.2, 3.2]      |
| Link5    | 0.17     | [0.0, -6.77, -10.98]   |

<mark style="color:blue;">**xArm 5 Lite - 模型4**</mark>

| Dynamics | Mass(kg) | Center of Mass(mm)     |
| :------- | :------- | :--------------------- |
| Link1    | 2.53     | [-0.164, 35.94, -6.5]  |
| Link2    | 2.242    | [40.84, -240.3, 32.54] |
| Link3    | 2.24     | [72.0, 236.3, 0.83]    |
| Link4    | 1.345    | [68.24, 33.42, 2.64]   |
| Link5    | 0.173    | [0.8, -3.59, -13.26]   |
