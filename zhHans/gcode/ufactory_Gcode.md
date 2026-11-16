---
title: UFACTORY Gcode
order: 1
---

# UFACTORY Gcode

UFACTORY Gcode指令兼容 [Linux CNC gcode](http://linuxcnc.org/)，参考RS-274标准进行开发。

* 固件版本：≥ v2.5.0
* UFACTORY Studio版本：≥ v2.5.0
* TCP端口：504

## 1. G 指令


| G指令   | 功能定义        | 样例指令                                  | 说明                                                                                                                |
| ----- | ----------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| G0    | 快速移动        | G0 X Y Z A B C                        | 固定速度为 240mm/s                                                                                                     |
| G1    | 直线运动        | G1 X Y Z A B C F                      | XYZ 单位 mm，ABC 对应 roll/pitch/yaw（单位°），F 为速度 （单位 mm/min 或英寸 /min，缺省为上一次 G1 指令的速度或 100mm/s）(当有 XYZABC 参 数时，G1 也可以省略) |
| G2    | 顺时针圆弧       | G2 X Y Z R P F<br>G2 X Y Z I J K P F | 半径格式圆XYZ表示目标位置，R表示圆半径，P表示整圆圈数，F表示速度<br>中心格式圆弧， XYZ表示目标位置，IJK对应圆心，P表示整圆圈数，F表示速度                                   |
| G3    | 逆时针圆弧       | G3 X Y Z R P F<br>G3 X Y Z I J K P F | 半径格式圆：XYZ表示目标位置，R表示圆半径，P表示整圆圈数，F表示速度<br>中心格式圆弧， XYZ表示目标位置，IJK对应圆心，P表示整圆圈数，F表示速度                                  |
| G4    | 等待          | G4 P4                                 | 休眠指令，P为休眠的秒数                                                                                                      |
| G17   | 圆弧指令设置XY平面  | G17                                   | G2/G3默认使用该平面                                                                                                      |
| G18   | 圆弧指令设置XZ平面  | G18                                   | -                                                                                                                 |
| G19   | 圆弧指令设置YZ平面  | G19                                   | -                                                                                                                 |
| G20   | 设置单位为英制英寸   | G20                                   | 影响 G0/G1                                                                                                          |
| G21   | 设置单位为公制毫米   | G21                                   | G0/G1                                                                                                             |
| G90   | 使用绝对坐标系     | G90                                   | 影响G0/G1/G2/G3，G0/G1默认使用该模式，G2/G3的XYZ参数默认使用该模式                                                                     |
| G91   | 使用相对坐标系     | G91                                   | 影响G0/G1/G2/G3                                                                                                     |
| G90.1 | 圆弧指令使用绝对坐标系 | G90.1                                 | 影响G2/G3                                                                                                           |
| G91.1 | 圆弧指令使用相对坐标系 | G91.1                                 | 影响G2/G3， G2/G3的IJK参数默认使用该模式                                                                                       |



用户可以通过‘UFACTORY Studio-Gcode’页面进行调试，此模块提供一些简单例子供参考。

![](assets/image.png)

## 2. M指令

| M指令    | 功能定义                   | 样例指令     | 说明                                               |
| ------ | ---------------------- | -------- | ------------------------------------------------ |
| M2/M30 | 结束程序                   | M2/M30   |                                                  |
| M62    | 设置CGPIO数字IO输出为高电平，队列执行 | M62 P    | P：控制器数字输出的编号(0-15, 0-7:CO0-CO7, 8-15:DO0-D7)     |
| M63    | 设置CGPIO数字IO输出为低电平，队列执行 | M63 P    | P：控制器数字输出的编号(0-15, 0-7:CO0-CO7, 8-15:DO0-D7)     |
| M64    | 设置CGPIO数字IO输出为高定平，立即执行 | M64 P    | P：控制器数字输出的编号(0-15, 0-7:CO0-CO7, 8-15:DO0-D7)     |
| M65    | 设置CGPIO数字IO输出为低电平，立即执行 | M65 P    | P：控制器数字输出的编号(0-15, 0-7:CO0-CO7, 8-15:DO0-D7)     |
| M67    | 设置CGPIO模拟IO输出，队列执行     | M67 E Q  | E：控制器模拟IO的编号(AO0:0, AO1:1 )<br>Q：模拟IO的值，范围0-10V |
| M68    | 设置CGPIO模拟IO输出，立即执行     | M68 E Q  | E：控制器模拟IO的编号(AO0:0, AO1:1 )<br>Q：模拟IO的值，范围      |
| M100   | 使能或断使能                 | M100 P Q | P：P1使能，P0断使能<br>Q：关节ID，默认为8，代表所有关节              |
| M101   | 清除错误                   | M101     |                                                  |
| M102   | 清除警告                   | M102     |                                                  |
| M103   | 设置模式                   | M103 P   | P：要设置的模式                                         |
| M104   | 设置状态                   | M104 P   | P：要设置的状态                                         |
| M115   | 设置TGPIO的数字输出           | M115 P Q | P：0/1/2/3/4(TI)<br>Q：0/1/10/11                  |
| M116   | 控制末端执行器                | M116 P Q |                                                  |




### 2.1 M116定义
M116为自定义指令，用于控制器UFACTORY机械臂的末端执行器。


| M116定义         | 控制设备<br>       | 样例指令           | 说明                                                            |
| -------------- | -------------- | -------------- | ------------------------------------------------------------- |
| M116 P1        | xArm机械爪        | M116 P1 Q0     | Q：机械爪位置，范围-10~850                                             |
| M116 P2        | xArm真空吸头       | M116 P2 Q0     | Q0：打开（队列执行）</br>Q1：关闭（队列执行）</br>Q10：打开（立即执行）</br>Q11：关闭（立即执行） |
| M116 P3        | BIO机械爪         | M116 P3 Q1     | Q0：闭合机械爪</br>Q1：张开机械爪                                         |
| M116 P4        | Robotiq机械爪     | M116 P4 Q100   | Q：位置（0~255）                                                   |
| M116 P5        | Robotiq机械爪     | M116 P5 Q100   | Q：位置（0~255）                                                   |
| M116 P11       | Lite6机械爪       | M116 P11 Q1    | Q0：闭合（队列执行）</br>Q1：张开（队列执行）</br>Q10：闭合（立即执行）</br>Q11：张开（立即执行） |
| M116 P12       | Lite6真空吸头      | M116 P12 Q0    | Q0：打开（队列执行）</br>Q1：关闭（队列执行）</br>Q10：打开（立即执行）</br>Q11：关闭（立即执行） |
| M116 P21       | 机械爪G2</br>队列执行 | M116 P21 Q100  | Q：位置</br>S：速度</br>F：力                                         |
| M116 P121      | 机械爪G2</br>立即执行 | M116 P121 Q100 | Q：位置</br>S：速度</br>F：力                                         |
| M116 P22       | 真空吸头(触点式)      | M116 P22 Q0    | Q0：吸取（队列执行）</br>Q1：释放（队列执行）</br>Q10：吸取（立即执行）</br>Q11：释放（立即执行） |
| M116 P23       | BIO G2         | M116 P23 Q150  | Q：位置71-150</br>S：速度500-4000</br>F：力1-100                      |
| M116 P104/P105 | Robotiq机械爪     | M116 P104 Q200 | Q：位置0-255</br>S：速度0-255</br>F：力0-255                          |





### 2.2 注意事项

1. 端口使用 504
2. 回复暂时有 5 字节： 
* byte0: Gcode命令返回值,0表示成功(非 0 表示该命令不支持或格式不对)
* byte1: 模式和状态
* byte2: 错误码
* byte3 & byte4: 保留
3. 建议每次发一行非空数据（带换行符），固件按行回复的 `sock.send(b'G0 X300\n')`
4. 要接收回复，不然久了缓冲区会满 `sock.recv(5)`
 

## 3. Python示例

```python

import socket
import time

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
sock.setblocking(True)
sock.connect(('192.168.1.240', 504))

def send_and_recv(data):
    for line in data.split('\n'):
        line = line.strip()
        if not line:
            continue
        sock.send(line.encode('utf-8', 'replace') + b'\n')
        ret = sock.recv(5)
        print(ret)
        code, mode_state, err = ret[0:3]
        print(code,err)
        state, mode = mode_state & 0x0F, mode_state >> 4
        print(state)
        cmdnum = ret[3] << 8 | ret[4]
        if code != 0 or state >= 4 or err > 0:
            print('code: {}, mode: {}, state: {}, err: {}, cmdnum: {}, cmd: {}'.format(code, mode, state, err, cmdnum, line))
            
# move x to x=500mm, speed= 10000 mm/min
send_and_recv('G1 X400 F10000')

```
