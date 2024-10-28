---
简介: 适用型号：xArm 5 Lite, xArm 6, xArm7, Lite6, UFactory 850.
---

# 如何升级机械臂的固件和软件版本？

{% hint style="warning" %} **Notes:**

1) 建议同时更新 xArm 固件和 UFactory studio。 
2) 每次更新前，请仔细查看更新通知。 不建议更新已部署到生产环境的机械臂。
3) 每次更新后，请从官方网站下载最新的《xArm 用户手册》和《xArm 开发人员手册》，了解最新功能。 如果您使用 xArm-Python SDK（xArm-C++ SDK 或 xArm ROS）进行开发，请从 GitHub 获取最新的 SDK 代码。

手册下载:(https://www.cn.ufactory.cc/download)

SDK: https://github.com/xArm-Developer {% endhint %}


## 1.在线升级：当PC有网络连接时

* 使用 UFactory Studio 进行在线升级：

  进入 “设置-我的设备-检查更新"，点击 ”检查更新“，如果有新版本，点击 “下载”，点击 ”安装“，加载下载的安装包，等待系统重启。 重新启动大约需要 2-3 分钟。


![images](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/22.png)

## 2.离线升级：当 PC 没有网络连接时。

* 使用 UFactory Studio 进行离线升级：

下载最新的离线安装包： [xArm/UF850](https://share.weiyun.com/cL2iMSAm)     [Lite6](https://share.weiyun.com/y9NqMVAW)

进入设置-我的设备-检查更新，点击 "安装" 加载预先下载的离线软件包，重新启动系统，需要 2-3 分钟。

![images](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/23.png)

* 使用 xArm-tool-gui 工具进行离线升级：


下载 [xarm-tool-gui](https://share.weiyun.com/yEmDjxq1)工具，解压缩并运行。 输入控制器的 IP 地址，点击 连接]按钮。

1) 单击 【固件]】- 【离线安装】，选择事先下载的离线固件包，单击【安装】 ，界面弹出提示 "安装成功"。 
2) 点击【xArmStudio】-【离线安装】，选择事先下载的离线软件包，点击【安装】，界面弹出提示 "安装成功"。
3) 单击【重启控制盒】，等待 2-3 分钟让控制器完成重启并重新连接。

![images](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/24.png)
