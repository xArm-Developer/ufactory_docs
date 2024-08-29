---
description: >-
  Implemented via docker: Control simulated UFACTORY robots in UFACTORY Studio
  without the need for a real robot arm!
---

# How to install UFACTORY Studio in Docker

### Method 1: Uploading packages to the ubuntu image <a href="#method-1-uploading-packages-to-the-ubuntu-image" id="method-1-uploading-packages-to-the-ubuntu-image"></a>

**Preparation:**

* Download and install docker, docker website:[Docker: Accelerated Container Application Development 2](https://www.docker.com/)
* Download and install UFACTORY Studio docker image, download link:[ Docker - Google ドライブ](https://drive.google.com/drive/folders/1gae-RRkVPG7pH7n3KtrRHRkzKYW0GTbO)

If you follow the guidance, you will start the xArm 6 robot by default.

**Note: The following example is installed a new ubuntu image.**

#### 1. Download and install ubuntu <a href="#id-1.download-and-install-ubuntu" id="id-1.download-and-install-ubuntu"></a>

```
docker pull ubuntu
```

#### 2. Create a Docker and open <a href="#id-2.create-a-docker-and-open" id="id-2.create-a-docker-and-open"></a>

**On Linux Ubuntu**

```
docker run -it --name uf_software ubuntu
```

**On Windows**

* If only use UFACTORY Studio

```
docker run -it --name uf_software -p 18333:18333 ubuntu
```

* If you want use not only the UFACTORY Studio but also the xArm SDK on Windows, please use this command:

```
docker run -it --name uf_software -p 18333:18333 -p 502:502 -p 503:503 -p 504:504 -p 30000:30000 -
```

#### 3.Update the software of docker and install python environment. <a href="#id-3.update-the-software-of-docker-and-install-python-environment" id="id-3.update-the-software-of-docker-and-install-python-environment"></a>

```
apt update 
apt upgrade -y 
apt install -y net-tools wget screen sudo nano python3.12 python3-pip
```

#### 4.Create user and set the password <a href="#id-4.create-user-and-set-the-password" id="id-4.create-user-and-set-the-password"></a>

```
adduser uf 
usermod -aG sudo uf 
```

#### 5.Upload the package of software to docker. <a href="#id-5.upload-the-package-of-software-to-docker" id="id-5.upload-the-package-of-software-to-docker"></a>

\--uploady by yourself

#### 6.Upzie the UFactory Studio and scripts. <a href="#id-6.upzie-the-ufactory-studio-and-scripts" id="id-6.upzie-the-ufactory-studio-and-scripts"></a>

```
tar -xf uf_sim.gz 
cd uf_sim
sudo -u uf tar -xf studio.gz -C /home/uf/ 
sudo -u uf tar -xf xarmcontroller.gz -C /home/uf/ 
tar -xf xarm_scripts.gz -C / 
cd .. 
rm -rf uf_sim* 
```

#### 7.Start the UFactory Studio in docker <a href="#id-7.start-the-ufactory-studio-in-docker" id="id-7.start-the-ufactory-studio-in-docker"></a>

```
/xarm_scripts/xarm_start.sh 6 6
```

**Note: The version of studio launched now is 1.12.x, so you can upgrade the version by following these steps**

#### 8.Update software and firmware version <a href="#id-8.update-software-and-firmware-version" id="id-8.update-software-and-firmware-version"></a>

* upload docker\_sim\_update\* to docker container by yourself
* attach to docker container, and run command in docker container

```
//unzip

        unzip docker_sim_update-*.zip
        cd docker_sim_update_*
        tar -xf xarmcontroller-x86_64-*.tar.gz
        tar -xf xarmstudio-x86_64-*.tar.gz --wildcards linux/xarm.tar.gz && tar -xf linux/xarm.tar.gz -C ./ && rm -rf linux
//update

        sudo -u uf cp -rf xarmcontroller/* /home/uf/xArm/
        sudo -u uf rm -rf xarm/software/python
        sudo -u uf cp -rf xarm/* /home/uf/.UFACTORY/xarm/
        sudo mkdir -p /usr/local/lib64
        cd /home/uf/.UFACTORY/xarm/software/xArm-Python-SDK
        /home/uf/.UFACTORY/xarm/software/python/bin/python3 setup.py install
```

#### 9. restart docker container <a href="#id-9.restart-docker-container" id="id-9.restart-docker-container"></a>

#### 10. Start the UFactory Studio in docker <a href="#id-10.-start-the-ufactory-studio-in-docker" id="id-10.-start-the-ufactory-studio-in-docker"></a>

```
/xarm_scripts/xarm_start.sh 6 6
```

**Note: The 6 6 means xArm 6, restarting the container choose the robot according to your preferences:**

```
5 5, xArm 5
6 6, xArm 6
7 7, xArm 7
6 9, Lite 6
6 12, 850
```

#### 11. Access the UFACTORY Studio <a href="#id-11.access-the-ufactory-studio" id="id-11.access-the-ufactory-studio"></a>

**On Linux Ubuntu**

Run a web browser and input 172.17.0.2:18333

**On Windows**

Run a web browser and input 127.0.0.1:18333

**If you need use xArm SDK**

Ubuntu Linux: the robot IP is 172.17.0.2

Windows: the robot IP is 127.0.0.1

### Method2：Pulling docker\_studio images <a href="#method2-pulling-docker_studio-images" id="method2-pulling-docker_studio-images"></a>

#### 1. Get the docker image <a href="#id-1.get-the-docker-image" id="id-1.get-the-docker-image"></a>

```
    docker pull danielwang123321/uf-ubuntu-docker
```

#### 2. Create and run container <a href="#id-2.create-and-run-container" id="id-2.create-and-run-container"></a>

**On Linux Ubuntu**

```
    docker run -it --name uf_software danielwang123321/uf-ubuntu-docker
```

**On Windows**

* If only use UFACTORY Studio

```
docker run -it --name uf_software -p 18333:18333 danielwang123321/uf-ubuntu-docker
```

* If you want use not only the UFACTORY Studio but also the xArm SDK on Windows, please use this command:

```
    docker run -it --name uf_software -p 18333:18333 -p 502:502 -p 503:503 -p 504:504 -p 30000:30000 -p 30001:30001 -p 30002:30002 -p 30003:30003  danielwang123321/uf-ubuntu-docker
```

#### 3.Run the xArm robot firmware and UFACTORY Studio <a href="#id-3.run-the-xarm-robot-firmware-and-ufactory-studio" id="id-3.run-the-xarm-robot-firmware-and-ufactory-studio"></a>

```
    /xarm_scripts/xarm_start.sh 6 6
```

**Note: The 6 6 means xArm 6, restarting the container choose the robot according to your preferences:**

```
5 5, xArm 5
6 6, xArm 6
7 7, xArm 7
6 9, Lite 6
6 12, 850
```

#### 4. Access the UFACTORY Studio <a href="#id-4.access-the-ufactory-studio" id="id-4.access-the-ufactory-studio"></a>

**On Linux Ubuntu**

Run a web browser and input 172.17.0.2:18333

**On Windows**

Run a web browser and input 127.0.0.1:18333

**If you need to use xArm SDK**

Ubuntu Linux: the robot IP is 172.17.0.2

Windows: the robot IP is 127.0.0.1
