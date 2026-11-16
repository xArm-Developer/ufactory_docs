
# UFACTORY Gcode

---

Description: 

UFACTORY Gcode is compatible with [Linux CNC gcode](http://linuxcnc.org/),  and  refers to the RS-274 standard.
* Firmware version:  v2.5.0 or later
* UFACTORY Studio version:  V2.5.0 or later
* TCP port: 504

---

## 1. G command



| G Command | Definition                                     | Command                              | Description                                                                              |
| --------- | ---------------------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------- |
| G0        | Rapid Move                                     | G0 X Y Z A B C                       | The speed is 240mm/s by default                                                          |
| G1        | Linear Move                                    | G1 X Y Z A B C F                     | XYZ(mm), ABC(RPY,degree), F(speed,mm/min)                                                |
| G2        | Arc Move, clockwise arc                        | G2 X Y Z R P F<br>G2 X Y Z I J K P F | R-radius<br>I- X offset<br>J- Y offset<br>K- Z offset<br>P-number of turns, default is 1 |
| G3        | Arc Move, counterclockwise arc                 | G3 X Y Z R P F<br>G3 X Y Z I J K P F | R-radius<br>I- X offset<br>J- Y offset<br>K- Z offset<br>P-number of turns, default is 1 |
| G4        | Dwell                                          | G4 P2                                | Unit:s                                                                                   |
| G17       | Z-axis, XY-plane.                              | G17                                  |                                                                                          |
| G18       | Y-axis, XZ-plane.                              | G18                                  |                                                                                          |
| G19       | X-axis, YZ-plane.                              | G19                                  |                                                                                          |
| G20       | to use inches for length units                 | G20                                  |                                                                                          |
| G21       | to use millimeters for length units            | G21                                  | Apply to G0/G1                                                                           |
| G90       | absolute distance mode                         | G90                                  | Apply to G0/G1/G2/G3                                                                     |
| G91       | incremental distance mode                      | G91                                  | Apply to G0/G1/G2/G3                                                                     |
| G90.1     | absolute distance mode for I, J & K offsets    | G90.1                                | Apply to G2/G3                                                                           |
| G91.1     | incremental distance mode for I, J & K offsets | G91.1                                | Apply to G2/G3                                                                           |

### 1.1 Code Example

```
G0 X300 Y100 Z200 A180 B0 C0        ;move to [300,100,200,180,0,0]
G4 P5                               ;sleep 5s
G1 X300 Y100 Z350 A180 B0 C0 F30000 ;move to [300,100,200,180,0,0], speed=500mm/s
G21                                 ;set the unit as mm
G0 X300                             ;move to X=300mm
G20                                 ;set the unit as inches
G0 X10                              ;move to X=10inches(254mm)
G21                                 ;set the unit as mm
G90                                 ;use absolute coordinate
G0 X300                             ;move to X=300mm
G91                                 ;use relative coordinate
G0 X10                              ;move forward 10mm
G90                                 ;use absolute coordinate
```


You can debug and check more examples via 'UFACTORY Studio-Gcode' page.

![](assets/Gcode_example.png)

## 2. M command


| M Command | Definition                                       | Command   | Description                             |
| --------- | ------------------------------------------------ | --------- | --------------------------------------- |
| M2/M30    | End program                                      | M2/M30    |                                         |
| M62       | Turn on digital output synchronized with motion  | M62 P     | P：IONum(0-15, 0-7:CO0-CO7, 8-15:DO0-D7) |
| M63       | Turn off digital output synchronized with motion | M63 P     | P：IONum(0-15, 0-7:CO0-CO7, 8-15:DO0-D7) |
| M64       | Turn on digital output immediately               | M64 P     | P：IONum(0-15, 0-7:CO0-CO7, 8-15:DO0-D7) |
| M65       | Turn off digital output immediately              | M65 P     | P：IONum(0-15, 0-7:CO0-CO7, 8-15:DO0-D7) |
| M67       | Set an analog output synchronized with motion    | M67 E1 Q2 | E：IONum(AO0:0, AO1:1 )<br>Q：0-10V      |
| M68       | Set an analog output immediately                 | M68 E0 Q5 | E：IONum(AO0:0, AO1:1 )<br>Q：0-10V      |
| M100      | Enable the arm                                   | M100 P Q  |                                         |
| M101      | Clear error                                      | M101      |                                         |
| M102      | Clear warn                                       | M102      |                                         |
| M103      | Set mode                                         | M103 P    | P: mode                                 |
| M104      | Set states                                       | M104 P    | P: states                               |
| M115      | Set Tool GPIO                                    | M115 P Q  | P：IONum(0/1/2/3/4)<br>Q：0/1/10/11      |
| M116      | Control the end effector                         | M116 P Q  |                                         |


### 2.1 M116 Definition

| M116     | End effector<br>    | Command      | Description                                                                                                                       |

| M116           | End effector<br>                          | Command        | Description                                                                                                                       |
| -------------- | ----------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| M116 P1        | xArm Gripper                              | M116 P1 Q0     | Q: position(-10~850)                                                                                                              |
| M116 P2        | xArm Vacuum Gripper                       | M116 P2 Q0     | Q0: Open（synchronized with motion）</br>Q1: Close（synchronized with motion）</br>Q10: Open（immediately）</br>Q11: Close（immediately） |
| M116 P3        | BIO Gripper                               | M116 P3 Q1     | Q0: Close</br>Q1: Open                                                                                                            |
| M116 P4        | Robotiq Gripper                           | M116 P4 Q100   | Q: position(0~255)                                                                                                                |
| M116 P5        | Robotiq Gripper                           | M116 P5 Q100   | Q: position(0~255)                                                                                                                |
| M116 P11       | Gripper Lite                              | M116 P11 Q1    | Q0: Close（synchronized with motion）</br>Q1: Open（synchronized with motion）</br>Q10: Close（immediately）</br>Q11: Open（immediately） |
| M116 P12       | Vacuum Gripper Lite                       | M116 P12 Q0    | Q0: Open（synchronized with motion）</br>Q1: Close（synchronized with motion）</br>Q10: Open（immediately）</br>Q11: Close（immediately） |
| M116 P21       | Gripper G2</br>(synchronized with motion) | M116 P21 Q100  | Q: position</br>S: speed</br>F: force                                                                                             |
| M116 P121      | Gripper G2</br>(immediately)              | M116 P121 Q100 | Q: position</br>S: speed</br>F: force                                                                                             |
| M116 P22       | Vaccum Gripper</br>(Contact conncetion)   | M116 P22 Q0    | Q0: Open（synchronized with motion）</br>Q1: Close（synchronized with motion）</br>Q10: Open（immediately）</br>Q11: Close（immediately） |
| M116 P23       | BIO Gripper G2                            | M116 P23 Q150  | Q: position 71-150</br>S: speed 500-4000</br>F: force 1-100                                                                       |
| M116 P104/P105 | Robotiq Gripper                           | M116 P104 Q200 | Q: position 0-255</br>S: speed 0-255</br>F: force 0-255                                                                           |




### 2.2 Code Example

```
M62 P1            ;set CO1 to high level, wait=True
M64 P15           ;set DO7 to high level, wait=False
M67 E0 Q10        ;set AO0 to 10V, wait=True
M68 E1 Q2         ;set AO1 to 2V, wait=False


M116 P2 Q10       ;open xArm Vacuum Gripper, wait=False
M116 P2 Q11       ;close xArm Vacuum Gripper, wait=False
```


## 3. Python Example


```python
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
sock.setblocking(True)
sock.connect(('192.168.1.67', 504))

def send_and_recv(data):
    for line in data.split('\n'):
        line = line.strip()
        if not line:
            continue
        sock.send(line.encode('utf-8', 'replace') + b'\n')
        ret = sock.recv(5)
        code, mode_state, err = ret[0:3]
        state, mode = mode_state & 0x0F, mode_state >> 4
        cmdnum = ret[3] << 8 | ret[4]
        if code != 0 or state >= 4 or err > 0:
            print('code: {}, mode: {}, state: {}, err: {}, cmdnum: {}, cmd: {}'.format(code, mode, state, err, cmdnum, line))

# move x to x=500mm, speed= 10000 mm/min
send_and_recv('G1 X500 F10000')
```

**Note：**

1\. Response:

* byte0: return value.  0 is success
* byte1: mode and state
* byte2: error code
* byte3 & byte4: buffer

2\. Recommend to send 1 non-empty data at a time(with line breaks)

```
sock.send(b'G0 X300\n')
```

3\. Need to receive the response, otherwise the buffer will be full.

```
 sock.recv(5)
```

