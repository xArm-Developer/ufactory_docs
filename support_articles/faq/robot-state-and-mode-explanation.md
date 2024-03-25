# Robot state and mode explanation

### Robot mode

(setting and feedback)

Mode 0: xArm controller position mode(default mode).

Mode 1: External trajectory planner servoj (position) mode.

Mode 2: Manual mode - Free-Drive(zero gravity) mode. &#x20;

Mode 3: Reserved.

Mode 4: Joint velocity control mode.

Mode 5: Cartesian velocity control mode.

Mode 6: Joint space dynamic online planning mode. (Firmware >= v1.10.0)

Mode 7: Cartesian space dynamic online planning mode. (Firmware>=v1.11.0)

Mode 11(only in feedback): in the process of recorded trajectory playback.



### Robot State(for setting)

state 0: Configure the robot the be STANDBY state in corresponding mode, and clear the error code as well. Note: after this setting, the feedback state will switch to 2(REDDY) automatically.

state 3: Set the robot to a PAUSED state when executing motion commands, the motion can be resumed by setting state 0.

state 4: Set the robot to STOP state, it will terminate any execution immediately and will not receive or execute any new command until the state is set back to STANDBY.

state 6: Perform a decelerated stop immediately in Mode 0.



### Robot State(for feedback)

state 1: the robot is in motion.

state 2: the robot is ready to receive and execute commands.

state 3: the robot is in PAUSE state.

state 4: the robot is in STOP state, can't receive and execute any command, and will automatically switch to this state when any error occurs.

state 5: MODE\_CHANGED state, will automatically switch to this state if some critical configurations (mode, payload, TCP offset, collision sensitivity, etc) have been changed, and cannot receive and execute any command until set state 0.

state 6: the robot is performing a decelerated stop.



&#x20;

