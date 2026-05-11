# V2.7.0 New Feature

## Live Control - End Collision Model Offset
Feature Description
* Used to set the Z-direction offset of a custom end collision model relative to the tool coordinate system, for adjusting the position of the collision model.
![](assets/2.7.0_collision_model_offset.png)

* After setting the offset, the effect is as follows:
![](assets/2.7.0_collision_model.png)


## Live Control - End-effector - Vacuum Gripper
Feature Description
* Added connection options: plug-in connection, contact connection
* Only available for 850, xArm (≥1305)
  ![](assets/2.7.0_connection.png)

## Live Control - End-effector Models
Feature Description
* Compatible with UFACTORY Gripper G2, RH56DFX dexterous hand and DH-PGC-140-50 gripper. Supports control and adding self-collision models.
![](assets/2.7.0_gripperg2.png)


## Blockly Programming - File Name
Feature Description
* Added sorting logic for file names. For example, if projects are created in the order 003, 002, 001, they will be displayed as shown below.
![](assets/2.7.0._filename.png)


## Blockly Programming - External Devices - Transparent Transmission
Feature Description
* Used for RS485 communication between the robotic arm and the end-effector or controller. The robotic arm only forwards the data without processing it.
* Optional parameters: Robot Arm, Control Box
  

The following program opens the UFACTORY Gripper G2 and obtains its position.
  ![](assets/2.7.0_rs485.png)


## Settings - Motions - TCP
Feature Description
* Added TCP payload and offset parameters for RH56DFX and  DH-PGC-140-50 gripper.
  ![](assets/2.7.0_tcpoffset.png)

## Settings - Externals - Torque Sensor
Feature Description
* Added torque sensor collision detection.
* Configurable parameters: Detection Threshold, Rebound Distance, Rebound Angle.
* When the end speed ≥100mm/s, the sensor may be damaged by collision. Please enable with caution.
  ![](assets/2.7.0_sensor.png)

## Settings - Assistive Features - Environment Simulation (Beta)
Feature Description
* Enable the environment simulation option in Settings - General. (This feature is still in testing)

  ![2.7.0_setting](./assets/2.7.0_setting.png)

  ![2.7.0_environment_beta_3](./assets/2.7.0_environment_beta_3.png)

* You can add models into the environment: cube, cylinder, table.

* After selecting a model, you can enable drag mode to move the model to the desired position. You can also enable physics simulation to consider real gravity and collision.
  ![](assets/2.7.0_environment_beta.png)
  ![](assets/2.7.0_environment_beta_1.png)

* If a collision occurs, the software will pop up a warning message, as shown below:
  ![](assets/2.7.0_environment_beta_2.png)
