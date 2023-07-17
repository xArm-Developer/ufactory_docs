# What should I do if I swap the robot control box?

Each xArm should come with a control box, and there’s no problem replacing the other control box. What should I do if I swap the control box? Are there any calibration parameters saved in the control box?

**1. Configuration file**

Export and import the configuration file easily to the new control box via 'Settings-Advacned Tools-Configuration File-Export/Import Configuration'.

[![](https://xarm.intercom-attachments-7.com/i/o/697937416/daccfa5518962ef5c0f51845/AEQLV\_cxHluINbHH7nceXpKHKFEuB6Cg7sXaYesK1QJiYN-GtpWFWDKuQNYiO2gbknsv95jd2Bkac\_1Nz5YIsOTbGVMro96mawBK66QQD8CI9qr17OocCkj-DggrPsgZfu1Sa6gici3RygFM1FQZ90Y)](https://xarm.intercom-attachments-7.com/i/o/697937416/daccfa5518962ef5c0f51845/AEQLV\_cxHluINbHH7nceXpKHKFEuB6Cg7sXaYesK1QJiYN-GtpWFWDKuQNYiO2gbknsv95jd2Bkac\_1Nz5YIsOTbGVMro96mawBK66QQD8CI9qr17OocCkj-DggrPsgZfu1Sa6gici3RygFM1FQZ90Y)

**2. ‘Blcokly Project’ and ‘Recording File’**

Export and import the projects via the ‘Blockly’/’Recording’ module.

[![](https://xarm.intercom-attachments-7.com/i/o/697937420/57a9319bac785ce54a0fdd33/83t5OGaWDluDzselQ7LYgQiMmGzCPffi38QJKBmdFKnIz7iNWHZxB0H9Zs53tPaHG6Bd2b6x-8zBkmef4OHdLlnHWbyCopnkogapljD5NVa5HTPPZ75Qg4o0SyW3vhI199gnmbEuTrmbkvDYwGEXnsI)](https://xarm.intercom-attachments-7.com/i/o/697937420/57a9319bac785ce54a0fdd33/83t5OGaWDluDzselQ7LYgQiMmGzCPffi38QJKBmdFKnIz7iNWHZxB0H9Zs53tPaHG6Bd2b6x-8zBkmef4OHdLlnHWbyCopnkogapljD5NVa5HTPPZ75Qg4o0SyW3vhI199gnmbEuTrmbkvDYwGEXnsI)

[![](https://xarm.intercom-attachments-7.com/i/o/697937427/e0713c9b8ce6c298bd74207d/6tpUijbUkbLGJ\_RFYBQVkvxEEPbZJu9cE7wccWIyV0a3g\_AkGt4VlFzdKG3lbIlaLHwkWf2G9Yapy\_QtXmRyijXbB3w3VkN\_-VEsztZl469rljq-1ODfL1h3497xGZk259FFjURcsQ1ZzmF13pw465g)](https://xarm.intercom-attachments-7.com/i/o/697937427/e0713c9b8ce6c298bd74207d/6tpUijbUkbLGJ\_RFYBQVkvxEEPbZJu9cE7wccWIyV0a3g\_AkGt4VlFzdKG3lbIlaLHwkWf2G9Yapy\_QtXmRyijXbB3w3VkN\_-VEsztZl469rljq-1ODfL1h3497xGZk259FFjURcsQ1ZzmF13pw465g)

**3. Friction parameters**

The first 6 characters of SN help to identify the model of your robot.

[![](https://xarm.intercom-attachments-7.com/i/o/697937435/2470bc27cd92ca2fcbd194d0/aCsnA5kP5ONWK1DqFV4zD5O3Uy7HggbEtGrSSBOvT6\_M0krNv\_K5FlZmTWEAHPwh-cQndz1C38yDrL2I\_pDSawcUfSpy\_Sf9ciXql7vtrBlNhKtygoo78f6jUuu\_QUSsistUzn-gjfDYmR0tXoU\_-hs)](https://xarm.intercom-attachments-7.com/i/o/697937435/2470bc27cd92ca2fcbd194d0/aCsnA5kP5ONWK1DqFV4zD5O3Uy7HggbEtGrSSBOvT6\_M0krNv\_K5FlZmTWEAHPwh-cQndz1C38yDrL2I\_pDSawcUfSpy\_Sf9ciXql7vtrBlNhKtygoo78f6jUuu\_QUSsistUzn-gjfDYmR0tXoU\_-hs)

Regardless of the model of the control box:

1\) If your arm is 13xx model: \[The firmware version must be v1.12.10+]

Press down the E stop button and release, the friction parameters will load automatically.

2\) If your arm is 12xx model:

Enter 'Settings-Advacned Tools', and do the friction identification again. Or contact us<[support@ufactory.cc](mailto:support@ufactory.cc)> to remotely put the original friction parameters into the new control box.

[![](https://xarm.intercom-attachments-7.com/i/o/697937443/e0beaf804bb8cc90aa88c547/7bXE7oFStL9G4JnoK7ZsnF0lBmSH\_a9XkzhzXxW5YCJPvNrW9vcMj27XKXlC1gCKI0xXF5ZiVVnkrFE0ogFcyO-w6xqDDu-uF0ZPK71OKfroPNJ6FefrSvpsYwnj\_c4JQNl2ntxIntaOqLd4ZqclABQ)](https://xarm.intercom-attachments-7.com/i/o/697937443/e0beaf804bb8cc90aa88c547/7bXE7oFStL9G4JnoK7ZsnF0lBmSH\_a9XkzhzXxW5YCJPvNrW9vcMj27XKXlC1gCKI0xXF5ZiVVnkrFE0ogFcyO-w6xqDDu-uF0ZPK71OKfroPNJ6FefrSvpsYwnj\_c4JQNl2ntxIntaOqLd4ZqclABQ)

Note：

The calibration parameters are not saved in the control box, swapping another control box will not affect the accuracy of the xArm.

#### Appendix: <a href="#h_25addac8c1" id="h_25addac8c1"></a>

1\. What parameters are saved in the configuration file?

2\. How to simply judge if the friction parameters are loaded successfully?

1\) You should see the 'Recording' module on UFactory Studio software.

2\) You can enable the manual mode on the ‘Live Control’ page.

3\. The main difference between xArm 12xx and 13xx?
