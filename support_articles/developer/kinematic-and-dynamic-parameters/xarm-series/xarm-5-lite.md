---
description: Kinematic and Dynamic Parameters of xArm 5 Lite
---

# xArm 5 Lite

<mark style="color:blue;">**1. Modified D-H Parameters**</mark>

<figure><img src="../../../.gitbook/assets/image (14).png" alt=""><figcaption></figcaption></figure>

<table data-full-width="false"><thead><tr><th width="139">Kinematics</th><th width="127">theta (rad)</th><th width="107">d(mm)</th><th width="121">alpha(rad)</th><th width="95">a(mm)</th><th>offset(rad)</th></tr></thead><tbody><tr><td>Joint1</td><td>0</td><td>267</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Joint2</td><td>0</td><td>0</td><td>-pi/2</td><td>0</td><td><mark style="color:orange;">T2_offset</mark></td></tr><tr><td>Joint3</td><td>0</td><td>0</td><td>0</td><td><mark style="color:orange;">a2</mark></td><td><mark style="color:orange;">T3_offset</mark></td></tr><tr><td>Joint4</td><td>0</td><td>0</td><td>0</td><td><mark style="color:orange;">a3</mark></td><td><mark style="color:orange;">T4_offset</mark></td></tr><tr><td>Joint5</td><td>0</td><td>97</td><td>-pi/2</td><td>0</td><td>0</td></tr></tbody></table>

<mark style="color:blue;">**2. Standard D-H Parameters**</mark>

<figure><img src="../../../.gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure>

<table><thead><tr><th width="147.33333333333331">Kinematics</th><th width="117">theta(rad)</th><th width="99">d(mm)</th><th width="123">alpha(rad)</th><th width="104">a(mm)</th><th>offset(rad)</th></tr></thead><tbody><tr><td>Joint1</td><td>0</td><td>267</td><td>-pi/2</td><td>0</td><td>0</td></tr><tr><td>Joint2</td><td>0</td><td>0</td><td>0</td><td><mark style="color:orange;">a2</mark></td><td><mark style="color:orange;">T2_offset</mark></td></tr><tr><td>Joint3</td><td>0</td><td>0</td><td>0</td><td><mark style="color:orange;">a3</mark></td><td><mark style="color:orange;">T3_offset</mark></td></tr><tr><td>Joint4</td><td>0</td><td>0</td><td>-pi/2</td><td>76</td><td><mark style="color:orange;">T4_offset</mark></td></tr><tr><td>Joint5</td><td>0</td><td>97</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>

{% hint style="warning" %}
<mark style="color:orange;">**‘Tx\_offset’**</mark> is the offset joint angle from the mathematical zero position to the mechanical zero position shown in the picture.
{% endhint %}

T2\_offset = -atan(284.5/53.5) = -1.3849179 (-79.34995°);

T3\_offset = atan(284.5/53.5)+atan(0.3425/0.0775) = 2.7331843 (156.599924°);

a2 = sqrt(284.5^2+53.5^2) = 289.48866;

T4\_offset = -atan(342.5/77.5) = -1.3482664 (-77.249974°);

a3 = sqrt(77.5^2+342.5^2) = 351.158796;



<mark style="color:blue;">**3. Mass Parameters**</mark>

<div align="left">

<figure><img src="../../../.gitbook/assets/image (16).png" alt="" width="213"><figcaption></figcaption></figure>

</div>

<mark style="color:blue;">**xArm 5 Lite - Model 1**</mark>

<table><thead><tr><th width="190">Dynamics</th><th width="184.33333333333331">Mass(kg)</th><th>Center of Mass(mm)</th></tr></thead><tbody><tr><td>Link1</td><td>2.177</td><td>[0.15, 27.24, -13.75]</td></tr><tr><td>Link2</td><td>2.011</td><td>[36.7, -220.9, 33.56]</td></tr><tr><td>Link3</td><td>2.01</td><td>[68.34, 223.66, 1.1]</td></tr><tr><td>Link4</td><td>1.206</td><td>[63.87, 29.3, 3.5]</td></tr><tr><td>Link5</td><td>0.17</td><td>[0.0, -6.77, -10.98]</td></tr></tbody></table>

<mark style="color:blue;">**xArm 5 Lite - Model 2**</mark>

<table><thead><tr><th width="190">Dynamics</th><th width="184.33333333333331">Mass(kg)</th><th>Center of Mass(mm)</th></tr></thead><tbody><tr><td>Link1</td><td>2.46</td><td>[0.13, 30.1, -12.0]</td></tr><tr><td>Link2</td><td>2.21</td><td>[38.2, -226.6, 34.7]</td></tr><tr><td>Link3</td><td>2.16</td><td>[69.0, 231.8, 1.0]</td></tr><tr><td>Link4</td><td>1.354</td><td>[65.2, 31.8, 3.11]</td></tr><tr><td>Link5</td><td>0.17</td><td>[0.0, -6.77, -10.98]</td></tr></tbody></table>

<mark style="color:blue;">**xArm 5 Lite - Model 3**</mark>

<table><thead><tr><th width="190">Dynamics</th><th width="184.33333333333331">Mass(kg)</th><th>Center of Mass(mm)</th></tr></thead><tbody><tr><td>Link1</td><td>2.382</td><td>[0.13, 29.4, -12.4]</td></tr><tr><td>Link2</td><td>2.164</td><td>[37.88, -225.4, 34.47]</td></tr><tr><td>Link3</td><td>2.121</td><td>[68.83, 229.85, 1.02]</td></tr><tr><td>Link4</td><td>1.317</td><td>[64.9, 31.2, 3.2]</td></tr><tr><td>Link5</td><td>0.17</td><td>[0.0, -6.77, -10.98]</td></tr></tbody></table>
