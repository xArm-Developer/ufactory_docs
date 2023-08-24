---
description: >-
  The purpose of this article is to describe the differences between UFACTORY
  xArm5, xArm6 and xArm7.
---

# The difference between UFACTORY xArm5, xArm6 and xArm7

### 1. Specifications

<table data-header-hidden data-full-width="true"><thead><tr><th width="237"></th><th align="center">SPECIFICATION</th><th align="center"></th><th align="center"></th></tr></thead><tbody><tr><td></td><td align="center">xArm 5 Lite</td><td align="center">xArm 6</td><td align="center">xArm 7</td></tr><tr><td><mark style="color:orange;"><strong>Payload(kg)</strong></mark></td><td align="center">3kg</td><td align="center">5kg</td><td align="center">3.5kg</td></tr><tr><td>Reach(mm)</td><td align="center">700mm</td><td align="center">700mm</td><td align="center">700mm</td></tr><tr><td>Degrees of Freedom</td><td align="center">5</td><td align="center">6</td><td align="center">7</td></tr><tr><td>Maximum Speed(m/s)</td><td align="center">1m/s</td><td align="center">1m/s</td><td align="center">1m/s</td></tr><tr><td><mark style="color:orange;"><strong>Weight(kg, body only)</strong></mark></td><td align="center">11.2kg</td><td align="center">12.2kg</td><td align="center">13.7kg</td></tr></tbody></table>

<table data-header-hidden data-full-width="true"><thead><tr><th width="181"></th><th width="185" align="center"></th><th width="194" align="center"></th><th align="center"></th></tr></thead><tbody><tr><td></td><td align="center">xArm 5 Lite</td><td align="center">xArm 6</td><td align="center">xArm 7</td></tr><tr><td>Maximum Speed</td><td align="center">180°/s</td><td align="center">180°/s</td><td align="center">180°/s</td></tr><tr><td>Joint1</td><td align="center">±360°</td><td align="center">±360°</td><td align="center">±360°</td></tr><tr><td>Joint2</td><td align="center">-118° ~ 120°</td><td align="center">-118°～120°</td><td align="center">-118°～120°</td></tr><tr><td>Joint3</td><td align="center">-225°~11°</td><td align="center">-225°~11°</td><td align="center">±360°</td></tr><tr><td>Joint4</td><td align="center">-97°~180°</td><td align="center">±360°</td><td align="center">-11°～225°</td></tr><tr><td>Joint5</td><td align="center">±360°</td><td align="center">-97°~180°</td><td align="center">±360°</td></tr><tr><td>Joint6</td><td align="center"></td><td align="center">±360°</td><td align="center">-97°~180°</td></tr><tr><td>Joint7</td><td align="center"></td><td align="center"></td><td align="center">±360°</td></tr></tbody></table>

### 2. Motion Characteristics

* Cartesian control

xArm 5 Lite: Due to the robot configuration, <mark style="color:orange;">**the actual flexible degrees**</mark> of freedom of linear and circular motions <mark style="color:orange;">**in Cartesian space is 4**</mark>, which is \[x, y, z, yaw], similar to a SCARA manipulator with four degrees of freedom. Before initiating Cartesian control movement, it is necessary to ensure that the end flange surface of xArm5 and the base are completely parallel. If mounted on a horizontal plane, the roll and pitch should be \[± 180 degrees, 0 degrees], otherwise the trajectory is likely to have no solution.

[How to align the tool end flange of xArm 5 Lite?](../faq/page.md)
