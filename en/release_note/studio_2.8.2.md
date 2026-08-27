# v2.8.2

Released Time: 2026.07.31

## Firmware V2.8.2
1. TCP port 30000: added reporting for gripper / control box IO / robot IO, target and actual TCP acceleration, and six-axis Force Torque Sensor enable status.


2. TCP port 30002: added gripper information reporting.

3. Cartesian online planning (mode 7) now supports relative position commands.

4. Compatible with the new Force Torque Sensor (AI1500).

5. Optimized the xArm7 inverse kinematics solution; now configurable, with priority given to the solution that keeps the arm upright.