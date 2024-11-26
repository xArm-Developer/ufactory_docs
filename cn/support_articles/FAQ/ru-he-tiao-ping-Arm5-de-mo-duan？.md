# 如何调平xArm5的末端？

## 1.UFactory Studio

在实时控制界面可使末端调平

![images](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/25.png)



## 2.Python SDK

用公式计算J4的角度： J4 = - (J2+J3)，然后进行设置，这样末端就对齐了。

```php
// code example
// align the end flange of xArm 5 Lite
code, angles = arm.get_servo_angle()
if code == 0:
    angles[3] = -(angles[1] + angles[2])
    arm.set_servo_angle(angle=angles, wait=True)
```

