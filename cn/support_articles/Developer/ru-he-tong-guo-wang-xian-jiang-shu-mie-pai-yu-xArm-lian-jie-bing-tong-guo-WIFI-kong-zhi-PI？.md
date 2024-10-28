# 如何通过网线将树莓派连接到xArm并通过 WiFi 控制 Pi？

树莓派（Raspberry Pi）对于开发人员来说是一个相当有名的开发工具，我们的一些客户也喜欢尝试用树莓派作为机械臂的主机。 通常，我们通过树莓派的以太网端口连接 xarm 控制盒，然后用自己的笔记本电脑通过 WiFi 远程控制树莓派。 下面的说明可能会帮助你成功将树莓派与 xarm 控制盒连接起来。



## 1.硬件准备

树莓派4，网线，机械臂，xarm控制器，控制器电缆，机械臂电缆，机械臂通信线

## 2.软件准备

树莓派系统（Raspberry Pi OS with desktop）

 Release：10 

Codename: buster 

发行时间: 2021年5月7日

下载链接：https://www.raspberrypi.com/software/operating-systems/#raspberry-pi-os-32-bit

（我们是基于这个版本操作系统测试的，其他版本应该一样）

## 3.连接

### 方法1：

Raspberry Pi 通过网线直接连接到 xArm 控制盒。

访问方式： 电脑通过无线网络访问树莓派，树莓派通过以太网 IP 访问 xArm。

xArm 默认网段：192.168.1.xxx 

需要满足访问条件：

__1.树莓派 的 wifi IP 和 eth IP 位于不同网段。__

__2.机械臂 IP 和以太网 IP 位于同一网段__




如何修改 Raspberry Pi 的以太网 IP？

1-断开连接 Raspberry Pi 和 xArm 的网线。 

2-电脑通过 WIFI 访问树莓派

例如. cmd ssh [pi@192.168.144](mailto:pi@192.168.144) (SSH piName@pi wifi IP address)

3-修改 eth IP，保存并重启树莓派。

pi@raspberrypi:~ $ sudo nano /etc/dhcpcd.conf

![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/15.png)


修改成功后，将树莓派网线重新连接到 xArm，检查树莓派配置。 如果符合访问条件，就可以 ping通 xArm 了。

![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/16.png)


### 方法2：

树莓派 和 xArm 连接到同一路由，xArm 通过网线连接到路由器。

连接方法：

PC 通过 WIFI 访问 树莓派，树莓派通过 eth IP 访问 xArm。 通过这种连接方式，树莓派可以直接 ping通xArm。

![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/17.png)
