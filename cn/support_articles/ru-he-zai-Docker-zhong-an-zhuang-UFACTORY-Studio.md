# 如何在 Docker 中安装 UFACTORY Studio

**介绍：**

在docker 安装 UFACTORY Studio 来控制UFACTORY仿真机械臂，而无需真正的机械臂！

# 方法一：在ubuntu镜像中安装Ufactory Studio



**准备工作：**

* 下载并安装docker，docker官网下载链接： **https://www.docker.com/** （若官网无法访问，可找其他安装方法）

* 下载Ufactory studio安装包:[UFACTORY STudio](https://share.weiyun.com/R2aq65N4)

  如果你按照以下步骤进行操作，默认开启仿真xArm 6机械臂.

**注意：示例操作是在一个新ubuntu镜像中进行**

## 1.下载和安装ubuntu镜像

```
docker pull ubuntu
```

## 2.创建并开启一个容器
**On Linux Ubuntu**

```
docker run -it --name uf_software ubuntu
```
**On Windows**

* 只需要使用UFACTORY Studio，请输入：
```
docker run -it --name uf_software -p 18333:18333 ubuntu
```
* 如果不仅需要使用UFACTORY Studio,还需要使用 xArm SDK，请输入：
```
docker run -it --name uf_software -p 18333:18333 -p 502:502 -p 503:503 -p 504:504 -p 30000:30000 -p 30001:30001 -p 30002:30002 -p 30003:30003  ubuntu
```

## 3.更新容器软件包并安装python
```
apt update 
apt upgrade -y 
apt install -y net-tools wget screen sudo nano python3.12 python3-pip
```
## 4.创建用户名和密码
```
adduser uf 
usermod -aG sudo uf 
```
## 5.上传软件安装包到容器中
--请自行将压缩包uf_sim.gz上传到容器中

## 6.解压uf_sim.gz

```
tar -xf uf_sim.gz 
cd uf_sim
sudo -u uf tar -xf studio.gz -C /home/uf/ 
sudo -u uf tar -xf xarmcontroller.gz -C /home/uf/ 
tar -xf xarm_scripts.gz -C / 
cd .. 
rm -rf uf_sim* 
```
## 7.开启Ufactory studio
```
/xarm_scripts/xarm_start.sh 6 6
```

**Note: 目前使用的机械臂软件版本是V1.12.x,建议按照下面步骤进行升级**

## 8.更新软件和固件版本

* 将压缩包 docker_sim_update-*上传到容器中
* 进入容器中，输入以下命令：
```
//解压指令：

        unzip docker_sim_update-*.zip
        cd docker_sim_update_*
        tar -xf xarmcontroller-x86_64-*.tar.gz
        tar -xf xarmstudio-x86_64-*.tar.gz --wildcards linux/xarm.tar.gz && tar -xf linux/xarm.tar.gz -C ./ && rm -rf linux
//升级指令：

        sudo -u uf cp -rf xarmcontroller/* /home/uf/xArm/
        sudo -u uf rm -rf xarm/software/python
        sudo -u uf cp -rf xarm/* /home/uf/.UFACTORY/xarm/
        sudo mkdir -p /usr/local/lib64
        cd /home/uf/.UFACTORY/xarm/software/xArm-Python-SDK
        /home/uf/.UFACTORY/xarm/software/python/bin/python3 setup.py install
```

## 9.重启容器

## 10. 开启Ufactory studio

```
/xarm_scripts/xarm_start.sh 6 6
```

**Note: 6 6 代表xArm 6, 重启容器后根据你的需求选择机械臂型号：**

```
5 5, xArm 5
6 6, xArm 6
7 7, xArm 7
6 9, Lite 6
6 12, 850
```

## 11.连接机械臂ip
**On Linux Ubuntu**

在浏览器中搜索： 172.17.0.2:18333

**On Windows**

在浏览器中搜索： 127.0.0.1:18333

**如果需要使用xArm SDK**

基于Ubuntu Linux请使用IP： 172.17.0.2

基于Windows 请使用IP：127.0.0.1



# 方法二：使用UFACTORY Studio镜像



## 1.获取镜像
```
    docker pull danielwang123321/uf-ubuntu-docker
```

## 2.创建容器

**On Linux Ubuntu**

```
    docker run -it --name uf_software danielwang123321/uf-ubuntu-docker
```

**On Windows**

* 只需要使用UFACTORY Studio，请输入：
```
docker run -it --name uf_software -p 18333:18333 danielwang123321/uf-ubuntu-docker
```

* 如果不仅需要使用UFACTORY Studio,还需要使用 xArm SDK，请输入：
```
    docker run -it --name uf_software -p 18333:18333 -p 502:502 -p 503:503 -p 504:504 -p 30000:30000 -p 30001:30001 -p 30002:30002 -p 30003:30003  danielwang123321/uf-ubuntu-docker

```

## 3.开启Ufactory studio

```
    /xarm_scripts/xarm_start.sh 6 6
```

**Note: 6 6 代表xArm 6, 重启容器后根据你的需求选择机械臂型号**

```
5 5, xArm 5
6 6, xArm 6
7 7, xArm 7
6 9, Lite 6
6 12, 850
```


## 4.连接机械臂ip

**On Linux Ubuntu**

在浏览器中搜索： 172.17.0.2:18333

**On Windows**

在浏览器中搜索： 127.0.0.1:18333

**如果需要使用xArm SDK**

基于Linux 请使用IP： 172.17.0.2

基于Windows 请使用IP：127.0.0.1
