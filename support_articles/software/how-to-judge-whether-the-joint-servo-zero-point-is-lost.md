---
description: Take xArm6 as an example.
---

# How to judge whether the joint servo zero point is lost?

Product: XF1304, XI1304, XS1304, UF 850

UFactory Studio: 2.4.0+

Application scenario: If the TCP payload is set correctly, and the collision detection sensitivity is ≤3, but the software still keeps reporting C31 or S15 errors, the servo zero point may have been lost.



Please follow the steps to check the current of the corresponding joint.

1. Remove all end effectors, set TCP payload and offest as 0.
2. Disable 'Settings-General-Advanced Settings-Collision Detection'.
3. Move the arm to the zero position\[0,0,0,0,0,0].
4. Download  [UFactory Assist](https://drive.google.com/drive/folders/1qH8IJ2\_Irw4aYf54yJOwN1-3D4R0CYxL?usp=sharing)(Windows version) and [Blockly project](https://drive.google.com/drive/folders/1qH8IJ2\_Irw4aYf54yJOwN1-3D4R0CYxL?usp=drive\_link)(move J3 to -90°).
5. Launch UFactory Assist, choose 'Actual Joint Current', J3, 200HZ, click 'observation' and Start.
6. Run the Blockly project, click 'End' button in UFactory Assist, and take a screenshot of the current diagram with us.&#x20;

The current should be around 2A, please send the screenshot to [support@ufactory.cc](mailto:support@ufactory.cc) for double check.

<figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

