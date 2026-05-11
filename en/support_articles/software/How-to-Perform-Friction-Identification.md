# How to Perform Friction Identification

## 1. Safety Tips

1. **Clear the Workspace**: During the identification process, the robotic arm will perform large-range movements at various speeds. Ensure there are no obstacles, personnel, or cable interference within the full reach of the arm.

![friction-Iden-4.png](./assets/friction-Iden-4.png)

2. **Remove End-Effector Loads**: When performing friction identification, please remove all end-effectors and cables to ensure the robotic arm's end-flange is in a no-load state.

## 2. Preparation

1. **Set Payload to 0**: In the "Settings-Motion-TCP"  of UFACTORY Studio, set the payload weight and offsets to 0.

![](./assets/TCP-setting-en.png)

2. **Complete No-Load State**: Remove all end-effectors and detach all external cables from the xArm tool end

3. **Enable the Arm**: Ensure the robotic arm is in the **Enabled** state and there are no error codes.  
4. **Confirm Space**: Re-verify that the robotic arm's workspace is clear and open.  

5. **Software Preparation**: Download and extract the [xarm-tool-gui](https://drive.google.com/file/d/1Cf1rgCzSbfvCKGWRLoE4uFWr_R6y7g7k/view?usp=drive_link)

## 3. Operating Steps

1. Run **xarm-tool-gui**. 
2. Enter the controller **IP address** and click **Connect**.  

3. Switch to the 【**综合测试**】 tab. Uncheck 【**所有项目**】 and check only **【摩擦力辨识】**.  

4. Click **【开始测试】**. A confirmation box will appear. After re-confirming that the surrounding environment is safe, click **【是】**.  

5. Once identification begins, the arm will move continuously for approximately **5 minutes**.  

6. Upon completion, the log area will display "**joint friction iden finish**" and "**摩擦力辨识成功、摩擦力保存成功**".  

7. Press the **E-Stop** button and wait for 5 seconds → Release the E-Stop → **enable** the arm to complete the process.

![](./assets/friction-Iden--2.png)

![](./assets/friction-Iden--1.png)

![](./assets/friction-Iden-3.png)