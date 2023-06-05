# Control Box Error Code and Error Handling

### Software Error Code：C1

Error Code：0x01

> {% code overflow="wrap" %}
> ```
> The Emergency Stop Button on the Control Box is Pushed in to Stop
> Please release the Emergency Stop Button, and then click "Enable Robot"
> ```
> {% endcode %}



### Software Error Code：C2

Error Code：0x02

> {% code overflow="wrap" %}
> ```
> The Emergency IO of the Control Box is triggered
> Please ground the 2 EIs of the Control Box, and then click "Enable Robot".
> ```
> {% endcode %}





### Software Error Code：C3

Error Code：0x03

> {% code overflow="wrap" %}
> ```
> The Emergency Stop Button of the Three-state Switch is pressed
> Please release the Emergency Stop Button of the Three-state Switch, and then click "Enable Robot"
> ```
> {% endcode %}

### Software Error Code：C11-C17

Error Code：0x0B-0x11

> {% code overflow="wrap" %}
> ```
> Power on again
> ```
> {% endcode %}



### Software Error Code：C19

Error Code：0x013

> {% code overflow="wrap" %}
> ```
> End Module Communication Error
> Please check whether gripper is installed and the baud rate setting is correct.
> ```
> {% endcode %}



### Software Error Code：C21

Error Code：0x15

> {% code overflow="wrap" %}
> ```
> Kinematic Error
> Please re-plan the path
> ```
> {% endcode %}





### Software Error Code：C22

Error Code：0x16

> {% code overflow="wrap" %}
> ```
> Self-collision Error, Please Re-plan the Path. 
> If the robotic arm continues to report self-collision errors, please go to the "live control" interface to turn on the "manual mode" and drag the robotic arm back to the normal position.
> ```
> {% endcode %}





### Software Error Code：C24

Error Code：0x18

> {% code overflow="wrap" %}
> ```
> Speed Exceeds Limit
> Please check if the xArm is at singularity point, or reduce the speed and acceleration values
> ```
> {% endcode %}





### Software Error Code：C25

Error Code：0x19

> {% code overflow="wrap" %}
> ```
> Planning Error
> Please re-plan the path or reduce the speed.
> ```
> {% endcode %}





### Software Error Code：C26

Error Code：0x1A

> {% code overflow="wrap" %}
> ```
> Linux RT Error
> Please contact technical support.
> ```
> {% endcode %}





### Software Error Code：C27

Error Code：0x1B

> {% code overflow="wrap" %}
> ```
> Command Reply Error
> Pleas retry, or restart the xArm with the Emergency Stop Button on the xArm Control Box.
> ```
> {% endcode %}





### Software Error Code：C29

Error Code：0x1D

> {% code overflow="wrap" %}
> ```
> Other Errors
> Please contact technical support.
> ```
> {% endcode %}





### Software Error Code：C30

Error Code：0x1E

> {% code overflow="wrap" %}
> ```
> Feedback Speed Exceeds limit
> Please contact technical support
> ```
> {% endcode %}





### Software Error Code：C31

Error Code：0x1F

> {% code overflow="wrap" %}
> ```
> Abnormal current in the robotic arm
> 1. Check whether the robotic arm collides.
> 2. Check whether the mass and center of mass set at "Settings"-"TCP    Settings"-"TCP Payload" match the actual payload.
> 3. Check whether the mounting direction set at "Settings"-"Mounting" matches the actual situation. 
> 4. Check whether the TCP payload parameters set in your program match the actual payload.
> 5. Reduce the motion speed of the robotic arm.
> 6. Go to "Settings"-"Motion"-"Sensitivity Settings" to lower the collision sensitivity.
> ```
> {% endcode %}





### Software Error Code：C32

Error Code：0x20

> {% code overflow="wrap" %}
> ```
> Three-point drawing circle calculation error
> Please reset the arc command.
>
> ```
> {% endcode %}





### Software Error Code：C33

Error Code：0x21

> {% code overflow="wrap" %}
> ```
> Controller IO Error
> If the error occurs repeatedly, please contact technical support.
> ```
> {% endcode %}





### Software Error Code：C34

Error Code：0x22

> {% code overflow="wrap" %}
> ```
> Recording Timeout
> The track recording duration exceeds the maximum duration limit of 5 minutes. It is recommended to re-record.
> ```
> {% endcode %}



### Software Error Code：C35

Error Code：0x23

> {% code overflow="wrap" %}
> ```
> Safety Boundary Limit
> The xArm reaches the safety boundary. Please let the xArm work within the safety boundary.
> ```
> {% endcode %}





### Software Error Code：C36

Error Code：0x24

> {% code overflow="wrap" %}
> ```
> The number of delay commands exceeds the limit
> 1. Please check whether there are too many position detection or IO delay commands.
> 2. Increase the tolerance of the position detection command.
> ```
> {% endcode %}





### Software Error Code：C37

Error Code：0x25

> {% code overflow="wrap" %}
> ```
> Abnormal Motion in Manual Mode
> Please check whether the TCP payload setting of the robotic arm and the installation method of the robotic arm match the actual settings. 
> ```
> {% endcode %}





### Software Error Code：C38

Error Code：0x26

> {% code overflow="wrap" %}
> ```
> Abnormal Joint Angle
> Please stop the xArm by pressing the Emergency Stop Button on the Control Box
> ```
> {% endcode %}



### Software Error Code：C39

Error Code：0x27

> {% code overflow="wrap" %}
> ```
> Abnormal Communication Between Master and Slave IC of Power Board.
> ```
> {% endcode %}



### Software Error Code：C50

Error Code：0x32

> {% code overflow="wrap" %}
> ```
> Six-axis Force Torque Sensor Error
> Please check the sensor error code, locate the problem, and power on again. If it cannot be resolved, please contact technical support.
> ```
> {% endcode %}



### Software Error Code：C51

Error Code：0x33

> {% code overflow="wrap" %}
> ```
> Six-axis Force Torque Sensor Mode Setting Error
> Please make sure that the robotic arm is not in Manual Mode, check whether the given value of this command is 0/1/2
> ```
> {% endcode %}





### Software Error Code：C52

Error Code：0x34

> {% code overflow="wrap" %}
> ```
> Six-axis Force Torque Sensor Zero Setting Error
> Please check the sensor communication wiring and whether the power is normal. 
> ```
> {% endcode %}



### Software Error Code：C53

Error Code：0x35

> {% code overflow="wrap" %}
> ```
> Six-axis Force Torque Sensor Overload
> Please reduce the payload or applied external force.
> ```
> {% endcode %}



### Software Error Code：C110

Error Code：0x6E

> {% code overflow="wrap" %}
> ```
> Robot Arm Base Board Communication Error
> Please contact technical support. 
> ```
> {% endcode %}



### Software Error Code：C111

Error Code：0x6F

> {% code overflow="wrap" %}
> ```
> Control Box External 485 Device Communication Error.
> Please contact technical support.
> ```
> {% endcode %}



