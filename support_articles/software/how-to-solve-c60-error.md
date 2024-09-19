---
description: 'C60: Linear speed exeed limit in ServoJ mode.'
---

# How to solve C60 error?

Firmware: V2.3.0+

UFactory Studio: V2.3.0+



For safety reasons, we give a TCP speed limit under ServoJ mode even for joint motion, the limit is 1000mm/s for xArm series and UF850, and 500mm/s for Lite6.



When the arm works at extended reach, the TCP speed can easily exceed the threshold. Therefore, we increase theis threshold and provide a parameter to set the limit by themselves, please modify it carefully after safety evalution.



* set\_linear\_spd\_limit\_factor
* get\_linear\_spd\_limit\_factor

1. factor\*1000 = TCP speed limit, the default value is 1.2.
2. 1.2\*1000=12000mm/s for xArm/UF850,  1.2\*500=600mm/s for Lite6
3. call save\_conf() to save this config after calling set\_linear\_spd\_limit\_factor.

<div align="left">

<figure><img src="../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

</div>

<div align="left">

<figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

</div>



