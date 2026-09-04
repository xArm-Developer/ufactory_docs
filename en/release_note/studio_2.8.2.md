# v2.8.2

Released Time: 2026.07.31

## Firmware V2.8.2
1. TCP port 30000: added reporting for gripper / control box IO / robot IO, target and actual TCP acceleration, and six-axis Force Torque Sensor enable status.


2. TCP port 30002: added gripper information reporting.

3. Cartesian online planning (mode 7) now supports relative position commands.

4. Compatible with the new Force Torque Sensor (AI1500).

5. Optimized the xArm7 inverse kinematics solution; now configurable, with priority given to the solution that keeps the arm upright.

## Studio V2.8.0

1. Live Control - End-effector - Robotiq gripper now supports acceleration and force adjustment.

2. Live Control - End-effector - Gripper G2 and BIO G2 now display drive version and SN.

3. Live Control - End-effector - Added Force Torque Sensor (AI1500).
4. Live Control - End-effector - Grippers (excluding Robotiq gripper) now support 3D visualization of opening/closing.
5. Live Control - 3D Scene - Added a toggle and corresponding functionality for simulation-environment collision detection.
6. Live Control - Recording - Imported trajectory format now supports .traj
7. Blockly - Tool - Added code blocks to control BIO Gripper G2 and Robotiq Gripper using variables.
8. Blockly - Tool - Added a code block to get the end-effector position.
9. Blockly - Externals - Added data-parsing options [HEX / INT 16 / UINT 16] when reading saved (holding) register addresses.
10. Blockly - Motion - Added variable-control code blocks for TCP and joint speed/acceleration.
11. Blockly - Allow zooming out an additional 4x from the current scale.
12. Python IDE - Allow downloading files under the BlocklyToPython folder.
13. GCode - Added download functionality for sample files/folders.
14. Settings - Motion - TCP - Added the new Force Torque Sensor (AI1500) to built-in TCP parameters.
15. Settings - General - Advanced Settings - Added an entry to modify the joint servo mode linear velocity threshold.
16. Settings - General - Advanced Settings - IO clearing in robot-stop state is now compatible with the xArm 1305 series and UF850.
17. Settings - Externals - Force Torque Sensor - Compatible with the new (AI1500) Force Torque Sensor.
18. Settings - Externals - Force Torque Sensor - Added Manual Mode Start Force and Torque settings.
19. Settings - Externals - RS-485 - Support independent timeout settings for Modbus RTU and Transparent on the control box or arm end.
20. Settings - General - Assistive Features - Merged the 3D model resolution and model refresh rate options into 3D Model High Quality.
21. Error Handling - S20: added driver type query; C39: added IC error code query.

22. Others - Frontend is now compatible with wss requests.
23. Fixed several issues and optimized the user experience.

