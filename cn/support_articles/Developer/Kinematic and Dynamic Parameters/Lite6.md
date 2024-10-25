---
简介: UFACTORY Lite 6的运动学和动力学参数
---

# Lite6

<mark style="color:blue;">**1.修改DH参数**</mark>

| Size Parameters: (unit:mm)                  | Joint Coordinate Definition                 |
| ------------------------------------------- | ------------------------------------------- |
| ![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/support_articles/.gitbook/assets/image%20(30).png) | ![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/support_articles/.gitbook/assets/image%20(31).png)|



| Kinematics | theta offset(deg) | d(mm) | alpha(deg) | a(mm) |
| :--------- | :---------------- | :---- | :--------- | :---- |
| Joint1     | 0                 | 243.3 | 0          | 0     |
| Joint2     | -90               | 0     | -90        | 0     |
| Joint3     | -90               | 0     | 180        | 200   |
| Joint4     | 0                 | 227.6 | 90         | 87    |
| Joint5     | 0                 | 0     | 90         | 0     |
| Joint6     | 0                 | 61.5  | -90        | 0     |

<mark style="color:blue;">**2.标准DH参数**</mark>

| Size Parameters: (unit:mm)                  | Joint Coordinate Definition                 |
| ------------------------------------------- | ------------------------------------------- |
| ![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/support_articles/.gitbook/assets/image%20(33).png) | ![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/support_articles/.gitbook/assets/image%20(34).png)|


| Kinematics | theta offset(deg) | d(mm) | alpha(deg) | a(mm) |
| :--------- | :---------------- | :---- | :--------- | :---- |
| Joint1     | 0                 | 243.3 | -90        | 0     |
| Joint2     | -90               | 0     | 180        | 200   |
| Joint3     | -90               | 0     | 90         | 87    |
| Joint4     | 0                 | 227.6 | 90         | 0     |
| Joint5     | 0                 | 0     | -90        | 0     |
| Joint6     | 0                 | 61.5  | 0          | 0     |


<mark style="color:blue;">**3.质量参数**</mark>



| Size Parameters: (unit:mm)                  | Joint Coordinate Definition                 |
| ------------------------------------------- | ------------------------------------------- |
| ![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/support_articles/.gitbook/assets/image%20(35).png) | ![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/support_articles/.gitbook/assets/image%20(36).png)|


| Dynamics | Mass(kg) | Center of Mass(mm)   |
| :------- | :------- | :------------------- |
| Link1    | 1.411    | [-0.36, 41.95, -2.5] |
| Link2    | 1.34     | [179.0, 0.0, 58.4]   |
| Link3    | 0.953    | [72.0, -35.7, -1.0]  |
| Link4    | 1.284    | [-2.0, -28.5, -81.3] |
| Link5    | 0.084    | [0.0, 10.0, 1.9]     |
| Link6    | 0.13     | [0.0, -1.94, -10.2]  |
