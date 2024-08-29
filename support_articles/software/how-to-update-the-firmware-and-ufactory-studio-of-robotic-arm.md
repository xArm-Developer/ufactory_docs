---
description: 'Model: xArm 5 Lite, xArm 6, xArm7, Lite6, UFactory 850.'
---

# How to update the firmware and UFactory Studio of Robotic Arm?

{% hint style="warning" %}
**Notes:**

1\) It is recommended to update the xArm firmware and UFactory studio at the same time.

2\) Please check the update notice carefully before each update. It is not recommended to update the robot arm that has been deployed to production environment.

3\) After each update, please download the latest xArm User Manual and xArm Developer Manual from the official website to learn the latest features. If you use xArm-Python-SDK (xArm-C++ SDK or xArm ROS) for development, please get the latest SDK code from GitHub.

Manual download: [https://www.ufactory.cc/download/](https://www.ufactory.cc/download/)

SDK: [https://github.com/xArm-Developer](https://github.com/xArm-Developer)
{% endhint %}

### 1. Online Upgrade: When the PC has a network connection

* Use UFactory Studio to do an online upgrade:

Go to \[My Device] → \[Check for Update], click "Check for Update", if there is a new version, click "Download", click "Install" to load the downloaded installation package, and wait for the system to reboot. The reboot will take about 2-3 minutes.

<figure><img src="../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

### 2. Offline Upgrade: When the PC has no network connection.

* Use UFactory Studio to do an offline upgrade:

Download the latest offline package.  [_xArm/UF850_](https://drive.google.com/drive/folders/11T6ixZy28ePsIlJ4r5RBgRK8HmmpPs7v?usp=drive\_link)   [_Lite6_](https://drive.google.com/drive/folders/1rLXSXA2BPXONl5iOBUJkanyLqhad6u8N?usp=drive\_link)

Go to \[My Device] - \[Check Update], click "Install" to load the offline package downloaded in advance, reboot the system, it will take 2-3 minutes.

<figure><img src="../.gitbook/assets/image (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

* Use the xArm-tool-gui tool to do the offline upgrade:

Download the[ xarm-tool-gui ](https://drive.google.com/drive/folders/1WOcMMRXo0XACg48d3BR2Ki-kUKioCyGm?usp=drive\_link)tool, unzip and run it. Enter the IP address of the controller and click \[Connect] button.\
1\) Click \[Firmware] - \[Offline Installation], select the offline firmware package you downloaded in advance, click \[Install], the interface pop-up prompt "Install firmware successfully".\
2\) Click \[xArmStudio] - \[Offline Installation], select the offline package downloaded in advance, click \[Install], the interface will pop up a prompt "Install Studio successfully".\
3\) Click \[Reboot Control Box], wait for 2-3 minutes for the controller to finish rebooting and reconnect.

<figure><img src="../.gitbook/assets/image (51).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
**Note:** If the online upgrade fails, you can try the offline upgrade. When the offline upgrade is still unsuccessful, please contact the support team(support@ufactory.cc).
{% endhint %}

