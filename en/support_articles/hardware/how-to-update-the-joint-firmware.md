# How to update the joint firmware?
## Download
- Windows: [xarm-tool-gui-2.19.8](https://drive.google.com/drive/folders/19qFJlldeSs_SH1UTjnMnNToeXC-BqS-N)
- Linux：[xarm-tool-gui-linux-2.19.8](https://drive.google.com/drive/folders/19qFJlldeSs_SH1UTjnMnNToeXC-BqS-N)

## How to check the joint firmware version?
Launch xarm-tool-gui, enter the <u>Robot IP</u> and click <u>Connect</u>.
As shown in the figure below, the servo(joint) version is V4.0.23.

![](../assets/jointfirmware_1.png)

### Mapping of joint firmware to robot

| Robot Arm Model           | Servo Firmware File                         | Version Number | Latest Version |
| ------------------------- | ------------------------------------------- | -------------- | -------------- |
| xArm1303 or lower version | uf_servo_stm32f4xx_app_2.7.13.bin           | V2.7.x         | V2.7.13        |
| xArm1304 or Lite6         | ServoGD32F405App_V4.0.23_debug_20250317.bin | V4.0.x         | V4.0.23        |
| xArm1305 or 850           | ServoGD32F425App_V5.0.14_debug_20251128.bin | V5.0.x         | V5.0.14        |

> [!Note]
>
> **Upgrading between major versions is not supported (e.g., upgrading from V4.x to V5.x).**



## How to update the joint firmware?

1. Connect with xarm-tool-gui.
2. Switch to the corresponding test tool, choose <u>driver board for all joints</u>,click <u>install driver</u>, choose the corresponding bin file. Press down the Emergency stop button and release, click <u>Next</u>.
* **1305 or 850:** 1300/850 Test tool
![](../assets/jointfirmware_2.png)
* **Lite6:** Lite6 Test tool
![](../assets/jointfirmware_3.png)
* **xArm12xx or lower version:** 1200 Test tool
![](../assets/jointfirmware_4.jpg)

3. Wait for 2-3 minutes, it will prompt 'Installation Success'. The arm will reboot automatically. Wait for 1-2 minutes, re-connect with xarm-tool-gui, enable the robot, and check the joint firmware version.

