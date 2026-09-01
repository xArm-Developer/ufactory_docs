# How to update the end IO board firmware?

## How to check the end IO board version?
Launch xarm-tool-gui, enter the <u>Robot IP</u> and click <u>Connect</u>.
As shown in the figure below, the IO Board version is V2.6.0.
![](../assets/endio_board_1.png)

## Mapping of end IO firmware

| Robot Arm Model            | End IO Board File                      | Version Number | Latest Version |
| -------------------------- | -------------------------------------- | -------------- | -------------- |
| xArm12xx or lower version  | io_board_app_1.2.0.bin                 | V1.2.x         | V1.2.0         |
| xArm1300~xArm1304 or Lite6 | xArmEndIOApp_V2.6.1_debug_20241217.bin | V2.6.x         | V2.6.1         |
| xArm1305 or 850            | xArmEndIOApp_V3.1.6_debug_20260427.bin | V3.1.x         | V3.1.6         |

> [!Note]
>
> **Upgrading between major versions is not supported (e.g., upgrading from V1.x to V2.x).**



## Download
- Windows: [xarm-tool-gui-2.19.8](https://drive.google.com/drive/folders/19qFJlldeSs_SH1UTjnMnNToeXC-BqS-N)

- Linux：[xarm-tool-gui-linux-2.19.8](https://drive.google.com/drive/folders/19qFJlldeSs_SH1UTjnMnNToeXC-BqS-N)

## How to update the end IO firmware?
1. Connect with xarm-tool-gui.
2. Switch to the corresponding test tool, choose <u>End IO driver board</u>,click <u>install driver</u>, choose the corresponding bin file. Press down the Emergency stop button and release, click <u>Next</u>.
* **1305 or 850:** 1300/850 Test tool
![](../assets/endio_board_3.png)
* **Lite6:** Lite6 Test tool
![](../assets/endio_board_2.png)
* **xArm12xx or lower version:** 1200 Test tool
![](../assets/endio_board_4.jpg)

3. Wait for 1-2 minutes, it will prompt 'Installation Success'. The arm will reboot automatically. Wait for 1-2 minutes, re-connect with xarm-tool-gui, enable the robot, and check the end io board version.

