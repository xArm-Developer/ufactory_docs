# 1. xArm-Python-SDK Installation

### 1. Introduction

This tutorial is written using the UFACTORY xArm 6 robotic arm, Windows system, and Python version 3.12.6 The xArm-Python-SDK is used for controlling UFACTORY robotic arms, such as xArm, Lite6, and 850.\
Note: The xArm-Python-SDK only supports Python 3, and Python 3.10 or above is recommended.

### 2. Prerequisites

Before reading this tutorial, make sure you have:

* Familiarity with operating UFACTORY robotic arms.
* Understanding of Python 3 syntax and experience in Python programming.
* Knowledge of managing Python virtual environments.

### 3. Installation

#### 3.1 Install via pip \[Recommended]

In a Python virtual environment, use pip to install the xarm-python-sdk with the following command:

```
pip install xarm-python-sdk
```

#### 3.2 Install from Github Download

**Download**

*   Download using a browser\
    GitHub link for xArm-Python-SDK:\
    https://github.com/xArm-Developer/xArm-Python-SDK

    Download the xArm-Python-SDK\
    ![](https://github.com/DanielWang123321/ufactory\_docs/raw/56ea8d5f79ca6e7b796681242d100e08036308ab/xarm\_python\_sdk\_docs/assets/xarm\_python\_sdk\_download.png)
* Download using Git command

```
git clone https://github.com/xArm-Developer/xArm-Python-SDK.git
```

**Install via Command**

After extracting, navigate to the \xArm-Python-SDK-master folder, and use the following command to install.

* Windows

```
python setup.py install
```

* Ubuntu Linux

```
python3 setup.py install
```
