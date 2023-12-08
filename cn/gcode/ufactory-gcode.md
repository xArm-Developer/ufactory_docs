# ufactory-gcode

## 指令兼容 Linux CNC

### TCP 端口：504

### 支持指令

### 1.  G 指令

* G0 X Y Z A B C    # 固定速度为 240mm/s
* G1 X Y Z A B C F     # XYZ 单位 mm，ABC 对应 roll/pitch/yaw（单位°），F 为速度 （单位 mm/min 或英寸 /min，缺省为上一次 G1 指令的速度或 100mm/s）(当有 XYZABC 参 数时，G1 也可以省略)
* G4 P     # 休眠指令， P 为要休眠的秒数&#x20;
* G20      # 单位为英寸 , 影响 G0/G1&#x20;
* G21       # 单位为毫米 , 影响 G0/G1&#x20;
* G90      # 绝对定位 , 影响 G0/G1&#x20;
* G91       # 相对定位 , 影响 G0/G1

### 2. M指令

* M2/M30      # 停止程序(这个需要客户端控制该指令之后的指令不下发)，固件收到该指令 仅重置参数（单位使用毫米，绝对定位，G1 的默认速度为 100mm/s）&#x20;
* M62  P        # (设置 CGPIO 数字 IO 输出高电平 , 队列执行), P 为 IONUM&#x20;
* M63  P        # (设置 CGPIO 数字 IO 输出低电平 , 队列执行), P 为 IONUM&#x20;
* M64  P        # (设置 CGPIO 数字 IO 输出高电平 , 立即执行), P 为 IONUM&#x20;
* M65  P        # (设置 CGPIO 数字 IO 输出低电平 , 立即执行), P 为 IONUM&#x20;
* M67  E   Q   # (设置 CGPIO 模拟 IO 输出 , 队列执行), E 为 IONUM, Q 为要设置的值&#x20;
* M68  E   Q   # (设置 CGPIO 模拟 IO 输出 , 立即执行), E 为 IONUM, Q 为要设置的值

### 3. H 指令：自定义（调试使用）

* H11   V{}   I{}     # 使能 , I 参数表示关节 ID（默认为 8 表示所有关节）, V1 使能，V0 断使能
* H12  V              # 设置状态&#x20;
* H16                  # 清除错误&#x20;
* H17                  # 清除警告&#x20;
* H19  V             # 设置模式



{% hint style="warning" %}


## 注意

1. 端口暂时使用 504
2. 回复暂时有 3 字节，第一个字节为控制器错误码 , 第二个是控制器状态码，第三个字节为解 析 Gcode 的返回值(非 0 表示该命令不支持或格式不对)
3. 建议每次发一行非空数据（带换行符），固件按行回复的 sock.send(b'G0 X300\n')
4. 要接收回复，不然久了缓冲区会满 sock.recv(10)
{% endhint %}





## 示例



```python
1 import socket
2 sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
3 sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
4 sock.setblocking(True)
5 sock.connect(('192.168.1.67', 504))
6
7 def send_and_recv(data):
8     for line in data.split('\n'):
9         line = line.strip()
10        if not line:
11            continue
12        sock.send(line.encode('utf-8', 'replace') + b'\n')
13        err, code = sock.recv(2)
14        if code != 0 or err != 0:
15            print('code: {}, err: {}, cmd: {}'.format(code, err, line))
16 # move x to x=500mm, speed= 10000 mm/min
17 send_and_recv('G1 X500 F10000')
```









