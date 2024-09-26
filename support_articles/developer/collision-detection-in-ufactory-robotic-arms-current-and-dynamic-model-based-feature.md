# Collision Detection in UFACTORY Robotic Arms: Current and Dynamic Model-based Feature

The collision detection feature of UFACTORY robotic arms relies on the combination of current and dynamic models. By comparing the theoretical current and actual current of each joint, the system determines whether a collision has occurred. Below is a detailed explanation of the working principle and related settings.

### 1. **Brief Overview of the Collision Detection Principle**

The robot's control system calculates the theoretical current for each joint based on the dynamic model. The dynamic model considers several factors, including:

* **Joint Position**: The current pose of the robotic arm.
* **Speed and Acceleration**: The velocity and acceleration of each joint.
* **Load Weight and Center of Mass**: The weight and center of mass of the end effector.
* **Mounting Direction**: The mounting direction of the robot, such as upright, side, or inverted.
* **Joint Friction**: The static and dynamic friction parameters for each joint.

The controller combines these parameters with dynamic equations to calculate the expected current consumption for each joint under ideal conditions. At the same time, the system monitors the actual current of each joint and compares it to the theoretical value. If the difference exceeds a pre-set threshold, indicating that the joint may have encountered external resistance or collision, the system triggers the collision detection.

### 2. **Causes of False Collision Detection**

In practical applications, the robot's collision detection function may sometimes be falsely triggered. This phenomenon is often related to the end effector load, center of mass, installation orientation, and friction parameters. The following are common causes of false triggers:

#### 2.1 End Effector Load Setting

**Load Weight and Center of Mass Settings**

The weight and center of mass of the end effector directly affect joint forces and current consumption. If the weight or center of mass parameters are incorrect, the dynamic model's theoretical current calculation may be inaccurate. For example, if a tool's center of mass is far from the end of the robotic arm, more current will be required for the end joint to balance the weight. If the center of mass is set to \[0, 0, 0], the controller may mistakenly report a current abnormality.

How to obtain accurate load weight and center of mass? There are two methods:

* Use UFACTORY Studio → Settings → Motion → TCP to automatically identify the payload parameters.
* Use weighing, simulation, or other methods to determine the end effector's weight and center of mass. This is typically done when the TCP payload identification is not available, such as when the space around the robot is tight, and performing the TCP payload identification might interfere with the environment.

**Dynamic Payload Changes**

In pick-and-place applications, the payload at the end of the robotic arm changes dynamically as the program runs. After picking up a workpiece, the actual payload increases, and after placing the workpiece, the actual payload decreases. When writing programs, it is necessary to inform the controller of these payload changes. Typically, the payload is set before the "pick-up" command and reset after the "place" command. The logic is as follows:

```
Set TCP payload (weight and center of mass without the workpiece) 
Move the robotic arm.
Pick the workpiece.
Set TCP payload (weight and center of mass including the workpiece) 
Move the robotic arm.
Place the workpiece.
Set TCP payload (weight and center of mass without the workpiece)
```

#### 2.2 Robotic Arm Mounting Direction

UFACTORY robotic arms support various mounting directions such as floor, ceiling, wall-up/wall-down, or custom. Each mounting direction requires a different gravity compensation calculation to correct the theoretical current values for each joint. For example, if the robot is ceiling mounted but set as "floor" in the software, the theoretical current will deviate, causing the system to report a current abnormality.

Ensure that the software's mounting direction setting matches the actual setup, especially for custom mounting directions. For xArm versions XX1300 and above, as well as all Lite6 and 850 models, when setting the installation orientation in UFACTORY Studio, the system will compare the actual mounting direction measured by the built-in sensors with the user-defined setting. If there is a mismatch, a warning will be displayed.

#### 2.3 Friction Parameters

In UFACTORY robotic arms, friction parameters also play a crucial role in collision detection. Before shipping, UFACTORY conducts friction parameter identification for each joint, including both static and dynamic friction parameters. These parameters are stored in the controller and drive units to calculate the theoretical current for each joint under different payloads and motion conditions.

When the user replaces the control box, the stored friction parameters may no longer match, leading to errors in joint current calculation. Since friction directly affects the resistance and current of the joints, parameter mismatch may cause the controller to mistakenly detect external resistance, thereby falsely triggering collision detection.

The table below shows where the friction parameters are stored for different UFACTORY robot models and how to reload them after replacing the controller.

| Robot Model                | Friction Parameter Storage Location | Friction Reload Method               |
| -------------------------- | ----------------------------------- | ------------------------------------ |
| 850                        | Robot Arm                           | Press and release the emergency stop |
| Lite 6                     | Robot Arm                           | Press and release the emergency stop |
| xArm 5/6/7                 | Robot Arm                           | Press and release the emergency stop |
| xArm 5/6/7 (before XX1300) | Controller                          | Contact technical support            |

How to ensure that the correct friction parameters are used?\
The friction parameters of UFACTORY robotic arms are tied to the robot's serial number (SN). Compare the actual SN of the robot with the SN loaded into the controller. If they match, the controller is using the correct friction parameters. If not, the friction parameters need to be reloaded.

The SN loaded in the controller can be found in UFACTORY Studio → Settings → My Device → Device Info under the "Robot SN" field. The actual SN of the robot can be found on the sticker at the bottom of the robotic arm.

### 3. **Recommendations for Optimizing Collision Detection**

To improve the accuracy of UFACTORY robotic arms' collision detection and avoid false triggers, the following suggestions can help optimize performance:

* **Update Payload and Center of Mass Information in Time**:
  * After changing end effector or workpiece, update the weight and center of mass settings in the TCP payload settings page of the software.
  * In pick-and-place programs, update the payload settings after pick and release actions.
* **Set the Correct Mounting Direction**: Ensure that the robotic arm’s mounting direction is set correctly in UFACTORY Studio or via SDK.
* **Ensure Friction Parameters Match**: After replacing the control box, reload the correct joint friction parameters for the robotic arm.

### 4. **Conclusion**

The collision detection feature of UFACTORY robotic arms compares theoretical and actual current differences to stop the robot immediately after a collision. However, some false triggers in actual use are closely related to end effector payload, center of mass, and mounting direction settings. By accurately configuring these parameters, false collision detection can be effectively avoided while ensuring the robot's safety.
