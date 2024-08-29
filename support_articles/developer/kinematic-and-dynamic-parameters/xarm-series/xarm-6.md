---
description: Kinematic and Dynamic Parameters of xArm 6
---

# xArm 6

<mark style="color:blue;">**1. Modified D-H Parameters**</mark>

<figure><img src="../../../.gitbook/assets/image (42).png" alt=""><figcaption></figcaption></figure>

<table><thead><tr><th width="147.33333333333331">Kinematics</th><th width="117">theta(rad)</th><th width="99">d(mm)</th><th width="123">alpha(rad)</th><th width="104">a(mm)</th><th>offset(rad)</th></tr></thead><tbody><tr><td>Joint1</td><td>0</td><td>267</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Joint2</td><td>0</td><td>0</td><td>-pi/2</td><td>0</td><td><mark style="color:orange;">T2_offset</mark></td></tr><tr><td>Joint3</td><td>0</td><td>0</td><td>0</td><td><mark style="color:orange;">a2</mark></td><td><mark style="color:orange;">T3_offset</mark></td></tr><tr><td>Joint4</td><td>0</td><td>342.5</td><td>-pi/2</td><td>77.5</td><td>0</td></tr><tr><td>Joint5</td><td>0</td><td>0</td><td>pi/2</td><td>0</td><td>0</td></tr><tr><td>Joint6</td><td>0</td><td>97</td><td>-pi/2</td><td>76</td><td>0</td></tr></tbody></table>

<mark style="color:blue;">**2. Standard D-H Parameters**</mark>

<figure><img src="../../../.gitbook/assets/image (43).png" alt=""><figcaption></figcaption></figure>

<table><thead><tr><th width="147.33333333333331">Kinematics</th><th width="117">theta(rad)</th><th width="99">d(mm)</th><th width="123">alpha(rad)</th><th width="104">a(mm)</th><th>offset(rad)</th></tr></thead><tbody><tr><td>Joint1</td><td>0</td><td>267</td><td>-pi/2</td><td>0</td><td>0</td></tr><tr><td>Joint2</td><td>0</td><td>0</td><td>0</td><td><mark style="color:orange;">a2</mark></td><td><mark style="color:orange;">T2_offset</mark></td></tr><tr><td>Joint3</td><td>0</td><td>0</td><td>-pi/2</td><td>77.5</td><td><mark style="color:orange;">T3_offset</mark></td></tr><tr><td>Joint4</td><td>0</td><td>342.5</td><td>pi/2</td><td>0</td><td>0</td></tr><tr><td>Joint5</td><td>0</td><td>0</td><td>-pi/2</td><td>76</td><td>0</td></tr><tr><td>Joint6</td><td>0</td><td>97</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>

{% hint style="warning" %}
<mark style="color:orange;">**‘Tx\_offset’**</mark> is the offset joint angle from the mathematical zero position to the mechanical zero position shown in the picture.
{% endhint %}

a2 = sqrt(284.5^2+53.5^2) = 289.48866;

T2\_offset = -atan(284.5/53.5) = -1.3849179 (-79.34995°);

T3\_offset = -T2\_offset = 1.3849179 (79.34995°);



<mark style="color:blue;">**3. Mass Parameters**</mark>

![](<../../../.gitbook/assets/image (44).png>)

<mark style="color:blue;">**xArm 6 - Model 1**</mark>

<table><thead><tr><th width="190">Dynamics</th><th width="184.33333333333331">Mass(kg)</th><th>Center of Mass(mm)</th></tr></thead><tbody><tr><td>Link1</td><td>2.177</td><td>[0.15, 27.24, -13.75]</td></tr><tr><td>Link2</td><td>2.011</td><td>[36.7, -220.9, 33.56]</td></tr><tr><td>Link3</td><td>1.725</td><td>[69.77, 113.5, 11.6]</td></tr><tr><td>Link4</td><td>1.211</td><td>[-0.2, 20.0, 26.0]</td></tr><tr><td>Link5</td><td>1.206</td><td>[63.87, 29.3, 3.5]</td></tr><tr><td>Link6</td><td>0.17</td><td>[0.0, -6.77, -10.98]</td></tr></tbody></table>

<mark style="color:blue;">**xArm 6 - Model 2**</mark>

<table><thead><tr><th width="190">Dynamics</th><th width="184.33333333333331">Mass(kg)</th><th>Center of Mass(mm)</th></tr></thead><tbody><tr><td>Link1</td><td>2.46</td><td>[0.13, 30.1, -12.0]</td></tr><tr><td>Link2</td><td>2.21</td><td>[38.2, -226.6, 34.7]</td></tr><tr><td>Link3</td><td>1.925</td><td>[70.6, 117.2, 10.4]</td></tr><tr><td>Link4</td><td>1.36</td><td>[0.18, 17.7, -23.0]</td></tr><tr><td>Link5</td><td>1.354</td><td>[65.2, 31.8, 3.11]</td></tr><tr><td>Link6</td><td>0.17</td><td>[0.0, -6.77, -10.98]</td></tr></tbody></table>

<mark style="color:blue;">**xArm 6 - Model 3**</mark>

<table><thead><tr><th width="190">Dynamics</th><th width="184.33333333333331">Mass(kg)</th><th>Center of Mass(mm)</th></tr></thead><tbody><tr><td>Link1</td><td>2.382</td><td>[0.13, 29.4, -12.4]</td></tr><tr><td>Link2</td><td>2.267</td><td>[38.8, -227.8, 34.96]</td></tr><tr><td>Link3</td><td>1.875</td><td>[70.4, 116.3, 10.7]</td></tr><tr><td>Link4</td><td>1.319</td><td>[-0.2, 18.0, -22.9]</td></tr><tr><td>Link5</td><td>1.34</td><td>[65.1, 30.96, 3.15]</td></tr><tr><td>Link6</td><td>0.17</td><td>[0.0, -6.77, -10.98]</td></tr></tbody></table>
