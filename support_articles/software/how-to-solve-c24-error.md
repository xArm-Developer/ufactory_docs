---
description: 'C24: Speed Exceeds Limit'
---

# How to solve C24 error?

Product: xArm series, UF 850, Lite6

UFactory version: V2.1.0+



There are 2 reasons for C24 error:

1. The motion speed(calculated joint speed) is too high.
2. Singularity appears in the motion path.

### **1. Reduce TCP speed**

Reducing TCP motion speed/acceleration/jerk in the program.

### **2. Re-plan the path to the target point(Interpolation)**

### **3. Bypass singularities**

1\) UFACTORY Studio: Settings-General-Advanced Settings-Bypassing Singularities.

2\) Python SDK: set\_allow\_approx\_motion(self, on\_off)

### **Example**

<figure><img src="../.gitbook/assets/image (14).png" alt=""><figcaption></figcaption></figure>

1\) Reduce TCP Speed

<figure><img src="../.gitbook/assets/image (16).png" alt=""><figcaption></figcaption></figure>

2\) Re-plan the path

<figure><img src="../.gitbook/assets/image (17).png" alt=""><figcaption></figcaption></figure>

3\) Enable 'Bypassing Singularities'.

<figure><img src="../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>

{% file src="../.gitbook/assets/C24_error.mp4" %}



{% hint style="info" %}
**Note:** If the above methods can not solve your issue, please send the files below to the support team.
{% endhint %}

1\. The firmware and UFactory Studio version.

2\. The script or points(>2) that can reproduce the problem.

3\. The configuration file. It can be downloaded in 'Settings-General-Advanced Settings-Logic-Export the configuration file'.

<figure><img src="../.gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure>
