# How to update the SafeBoard of the controller?

## How to check the SafeBoard Version?
The SafeBoard is on the controller, not the robotic arm.  

Launch xarm-tool-gui, enter the <u>Robot IP</u> and click <u>Connect</u>.  
As shown in the figure below, the safeboard is V4.6.10.
![](../assets/safeboard_en_1.jpg)  

## Mapping of SafeBoard 

| Robot Arm Model | Controller Model                       | SafeBoard File                          | Version |
| --------------- | -------------------------------------- | --------------------------------------- | ------- |
| xArm            | AC1302 or lower version                | xArmSafeApp_V1.1.0_release_20210331.bin | V1.1.0  |
| xArm or 850     | AC1303, AC1304, DC13xx, AC8500, DC8500 | xArmSafeApp_V4.6.12_debug_20250223.bin  | V4.6.x  |
| Lite6           | DL1000                                 | xArmSafeApp_V5.6.11_debug_20240928.bin  | V5.6.x  |

> [!Note]
>
> **Upgrading between major versions is not supported (e.g., upgrading from V4.x to V5.x).**

## Download

- Windows：[xarm-tool-gui-2.16.10.zip](https://drive.google.com/drive/folders/1m96yfoUb2SrXt25c-ClZ6JqEgjaukS7e?usp=sharing)

- Linux：[xarm-tool-gui-linux-2.17.11.zip](https://drive.google.com/drive/folders/1m96yfoUb2SrXt25c-ClZ6JqEgjaukS7e)

## Bug Fix

| Robot Arm Model | SafeBoard Version | Issue                                    | Update  |
| --------------- | ----------------- | ---------------------------------------- | ------- |
| xArm or 850     | V4.6.5, V4.6.10   | You may meet C1, C19, C39, S0, S40 error | V4.6.12 |
| Lite6           | V5.6.5, V5.6.6    | You may meet C33, C39 error              | V5.6.11 |




## How to update the SafeBoard?
1. Connect with xarm-tool-gui.
2.	Switch to Test tool, choose <u>Safe driver board</u>, click <u>Install</u>.
* DL1000(Lite6) - Switch to <u>Lite6 Test tool</u>
* Others(xArm or 850) - Switch to <u>1300/850 Test tool</u>
3.	Choose the bin file, press down the Emergency stop button and release, click <u>Next</u>.
![](../assets/safeboard_en_2.jpg)
4.	Wait for 15 seconds, it will prompt ‘Installation Success’. The arm will reboot automatically.
![](../assets/safeboard_en_3.jpg)
5.	**Power off** the controller and Power it on.
6.	Enter the <u>Robot IP</u> and click <u>Connect</u> again, check the Safeboard Version, as shown in the figure below, the safeboard has been updated to V4.6.12.
![](../assets/safeboard_en_4.jpg)

