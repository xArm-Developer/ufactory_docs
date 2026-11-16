# 0.1 mm Displacement Test for 850 and xArm 6

## Measurement Method

* Each robotic arm starts from the specified initial position and moves in the X+, Y+, and Z+ directions with 0.1 mm step commands, repeated 40 times. A 3-second wait is applied after each movement.
* The actual movement distance is continuously measured by a Keyence GT2 contact-type digital sensor at a sampling frequency of 20 HZ.

### Test Conditions
The test is conducted at room temperature with a payload of 0 kg on the robotic arm.

### Robot Models and Initial Positions
| Product  | Model  | Direction | Initial Position                 |
|----------|--------|-----------|----------------------------------|
| xArm 6   | XI1305 | X+        | [298, 0, 200, 180, 0, 0]         |
| xArm 6   | XI1305 | Y+        | [300, -2, 200, 180, 0, 0]        |
| xArm 6   | XI1305 | Z+        | [300, 0, 198, 180, 0, 0]         |
| 850      | FX8510 | X+        | [298, 0, 200, 180, 0, 0]         |
| 850      | FX8510 | Y+        | [300, -2, 200, 180, 0, 0]        |
| 850      | FX8510 | Z+        | [300, 0, 198, 180, 0, 0]         |


### XYZ Movement Error
#### xArm6 XYZ Error
![xArm6 XYZ Error](../assets/xarm6_xyz_stepwise_movement_error_combined.png)

#### 850 XYZ Error
![850 XYZ Error](../assets/850_xyz_stepwise_movement_error_combined.png)
---
## XARM6
### X Axis
![xarm6_x_error](../assets/xarm6_x_stepwise_movement_error.png)
![xarm6_x_box](../assets/xarm6_x_boxplot_centered.png)

### Y Axis
![xarm6_y_error](../assets/xarm6_y_stepwise_movement_error.png)
![xarm6_y_box](../assets/xarm6_y_boxplot_centered.png)

### Z Axis
![xarm6_z_error](../assets/xarm6_z_stepwise_movement_error.png)
![xarm6_z_box](../assets/xarm6_z_boxplot_centered.png)

## 850
### X Axis
![850_x_error](../assets/850_x_stepwise_movement_error.png)
![850_x_box](../assets/850_x_boxplot_centered.png)

### Y Axis
![850_y_error](../assets/850_y_stepwise_movement_error.png)
![850_y_box](../assets/850_y_boxplot_centered.png)

### Z Axis
![850_z_error](../assets/850_z_stepwise_movement_error.png)
![850_z_box](../assets/850_z_boxplot_centered.png)

## Raw Data
Raw Data Download: [Click Here](https://update.ufactory.cc/850_xarm6_raw.zip)
