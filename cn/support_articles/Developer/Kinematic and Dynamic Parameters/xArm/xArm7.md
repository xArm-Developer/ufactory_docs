---
简介: xarm7的运动学和动力学参数
---

# xArm 7

<mark style="color:blue;">**1.修改DH参数**</mark>

![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/support_articles/.gitbook/assets/image%20(45).png)

| Kinematics | theta(rad) | d(mm) | alpha(rad) | a(mm) | offset(rad)     |
| :--------- | :--------- | :---- | :--------- | :---- | :----------     |
| Joint1     | 0          | 267   | 0          | 0     | 0               |
| Joint2     | 0          | 0     | -pi/2      | 0     | 0               |
| Joint3     | 0          | 293   | pi/2       | 0     | 0               |
| Joint4     | 0          | 0     | pi/2       | 52.5  | 0               |
| Joint5     | 0          | 342.5 | pi/2       | 77.5  | 0               |
| Joint6     | 0          | 0     | pi/2       | 0     | 0               |
| Joint7     | 0          | 97    | -pi/2      | 76    | 0               |


<mark style="color:blue;">**2.标准DH参数**</mark>

![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/support_articles/.gitbook/assets/xarm7_standardDH.jpg)

| Kinematics | theta(rad) | d(mm) | alpha(rad) | a(mm) | offset(rad) |
| :--------- | :--------- | :---- | :--------- | :---- | :---------- |
| Joint1     | 0          | 267   | -pi/2      | 0     | 0           |
| Joint2     | 0          | 0     | pi/2       | 0     | 0           |
| Joint3     | 0          | 293   | pi/2       | 52.5  | 0           |
| Joint4     | 0          | 0     | pi/2       | 77.5  | 0           |
| Joint5     | 0          | 342.5 | pi/2       | 0     | 0           |
| Joint6     | 0          | 0     | -pi/2      | 76    | 0           |
| Joint7     | 0          | 97    | 0          | 0     | 0           |



<mark style="color:blue;">**3.质量参数**</mark>


![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/support_articles/.gitbook/assets/image%20(47).png)

<mark style="color:blue;">**xArm7- 模型1**</mark>

| Dynamics | Mass(kg) | Center of Mass(mm)     |
| :------- | :------- | :--------------------- |
| Link1    | 2.177    | [0.15, 27.24, -13.75]  |
| Link2    | 1.716    | [0.22, -124.7, 18.9]   |
| Link3    | 1.485    | [46.0, -22.3, -8.47]   |
| Link4    | 1.574    | [-69.75, -112.5, 13.2] |
| Link5    | 1.209    | [-0.35, 17.6, -28.4]   |
| Link6    | 1.214    | [63.65, 30.84, 21.7]   |
| Link7    | 0.17     | [0.0, -6.77, -10.98]   |

<mark style="color:blue;">**xArm7 - 模型2**</mark>

| Dynamics | Mass(kg) | Center of Mass(mm)    |
| :------- | :------- | :-------------------- |
| Link1    | 2.46     | [0.13, 30.1, -12.0]   |
| Link2    | 1.916    | [0.2, -129.6, 16.9]   |
| Link3    | 1.69     | [46.76, -25.3, -7.46] |
| Link4    | 1.774    | [70.66, -116.6, 11.7] |
| Link5    | 1.357    | [-0.3, 15.6, -25.3]   |
| Link6    | 1.362    | [65.0, 33.4, 21.3]    |
| Link7    | 0.17     | [0.0, -6.77, -10.98]  |

<mark style="color:blue;">**xArm7 - 模型3**</mark>

| Dynamics | Mass(kg) | Center of Mass(mm)    |
| :------- | :------- | :-------------------- |
| Link1    | 2.382    | [0.13, 29.4, -12.4]   |
| Link2    | 1.869    | [0.2, -128.56, 17.35] |
| Link3    | 1.638    | [46.6, -24.63, -7.68] |
| Link4    | 1.727    | [70.5, -115.75, 12.0] |
| Link5    | 1.32     | [-0.32, 16.04, -26.0] |
| Link6    | 1.325    | [64.7, 32.8, 21.4]    |
| Link7    | 0.17     | [0.0, -6.77, -10.98]  |

<mark style="color:blue;">**xArm7 - 模型4**</mark>

| Dynamics | Mass(kg) | Center of Mass(mm)     |
| :------- | :------- | :--------------------- |
| Link1    | 2.53     | [-0.164, 35.94, -6.5]  |
| Link2    | 2.166    | [-0.21, -138.9,16.83]  |
| Link3    | 1.98     | [46.7, -22.6, -7.64]   |
| Link4    | 2.08     | [70.7, -124.54, 12.27] |
| Link5    | 1.36     | [0.19, 14.6, -21.98]   |
| Link6    | 1.345    | [68.24, 33.42, 2.64]   |
| Link7    | 0.173    | [0.8, -3.59, -13.26]   |
