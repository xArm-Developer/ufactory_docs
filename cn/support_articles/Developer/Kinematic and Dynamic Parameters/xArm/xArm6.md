# xArm6
<mark style="color:blue;">**1.修改DH参数**</mark>

![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/support_articles/.gitbook/assets/image%20(42).png)

| Kinematics | theta(rad) | d(mm) | alpha(rad) | a(mm) | offset(rad) |
| :--------- | :--------- | :---- | :--------- | :---- | :---------- |
| Joint1     | 0          | 267   | 0          | 0     | 0           |
| Joint2     | 0          | 0     | -pi/2      | 0     | <mark style="color:orange;">T2_offset</mark> |
| Joint3     | 0          | 0     | 0          |<mark style="color:orange;">a2</mark>   | <mark style="color:orange;">T3_offset</mark>   |
| Joint4     | 0          | 342.5 | -pi/2      | 77.5  | 0           |
| Joint5     | 0          | 0     | pi/2       | 0     | 0           |
| Joint6     | 0          | 97    | -pi/2      | 76    | 0           |

<mark style="color:blue;">**2.标准DH参数**</mark>

![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/support_articles/.gitbook/assets/image%20(43).png)

| Kinematics | theta(rad) | d(mm) | alpha(rad) | a(mm) | offset(rad) |
| :--------- | :--------- | :---- | :--------- | :---- | :---------- |
| Joint1     | 0          | 267   | -pi/2      | 0     | 0           |
| Joint2     | 0          | 0     | 0          |<mark style="color:orange;">a2</mark>     |  <mark style="color:orange;">T2_offset</mark>    |
| Joint3     | 0          | 0     | -pi/2      | 77.5  |<mark style="color:orange;">T3_offset</mark>   |
| Joint4     | 0          | 342.5 | pi/2       | 0     | 0           |
| Joint5     | 0          | 0     | -pi/2      | 76    | 0           |
| Joint6     | 0          | 97    | 0          | 0     | 0           |

<mark style="color:orange;">**‘Tx\_offset’**</mark> ' 是从数学零位到图中所示的机械零位的偏移关节角度。.

a2 = sqrt(284.5^2+53.5^2) = 289.48866;

T2_offset = -atan(284.5/53.5) = -1.3849179 (-79.34995°);

T3_offset = -T2_offset = 1.3849179 (79.34995°);<br><br>


<mark style="color:blue;">**3.质量参数**</mark>

<mark style="color:blue;">**xArm6 - 模型1**</mark>

| Dynamics | Mass(kg) | Center of Mass(mm)    |
| :------- | :------- | :-------------------- |
| Link1    | 2.177    | [0.15, 27.24, -13.75] |
| Link2    | 2.011    | [36.7, -220.9, 33.56] |
| Link3    | 1.725    | [69.77, 113.5, 11.6]  |
| Link4    | 1.211    | [-0.2, 20.0, 26.0]    |
| Link5    | 1.206    | [63.87, 29.3, 3.5]    |
| Link6    | 0.17     | [0.0, -6.77, -10.98]  |


<mark style="color:blue;">**xArm6 - 模型2**</mark>

| Dynamics | Mass(kg) | Center of Mass(mm)   |
| :------- | :------- | :------------------- |
| Link1    | 2.46     | [0.13, 30.1, -12.0]  |
| Link2    | 2.21     | [38.2, -226.6, 34.7] |
| Link3    | 1.925    | [70.6, 117.2, 10.4]  |
| Link4    | 1.36     | [0.18, 17.7, -23.0]  |
| Link5    | 1.354    | [65.2, 31.8, 3.11]   |
| Link6    | 0.17     | [0.0, -6.77, -10.98] |

<mark style="color:blue;">**xArm6 - 模型3**</mark>

| Dynamics | Mass(kg) | Center of Mass(mm)    |
| :------- | :------- | :-------------------- |
| Link1    | 2.382    | [0.13, 29.4, -12.4]   |
| Link2    | 2.267    | [38.8, -227.8, 34.96] |
| Link3    | 1.875    | [70.4, 116.3, 10.7]   |
| Link4    | 1.319    | [-0.2, 18.0, -22.9]   |
| Link5    | 1.34     | [65.1, 30.96, 3.15]   |
| Link6    | 0.17     | [0.0, -6.77, -10.98]  |

<mark style="color:blue;">**xArm6 - 模型4**</mark>

| Dynamics | Mass(kg) | Center of Mass(mm)     |
| :------- | :------- | :--------------------- |
| Link1    | 2.53     | [-0.164, 35.94, -6.5]  |
| Link2    | 2.242    | [40.84, -240.3, 32.54] |
| Link3    | 2.019    | [71.4, 126.8, 10.9]    |
| Link4    | 1.361    | [0.185, 14.66, -21.97] |
| Link5    | 1.345    | [68.24, 33.42, 2.64]   |
| Link6    | 0.173    | [0.8, -3.59, -13.26]   |

