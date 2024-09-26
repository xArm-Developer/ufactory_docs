# 如何使用第三方设备

{% hint style="danger" %}
**注意**
{% endhint %}

* xArm目前支持的末端执行器有UFACTORY xArm Gripper，UFACTORY xArm 真空夹持器、xArm BIO 夹持器、Robotiq-2F-85 夹持器、Robotiq-2F-140 夹持器。
* 您使用的第三方末端执行器必须支持Modbus-RTU通讯协议（基于RS-485）或IO控制。

## **第三方末端执行器的硬件安装**

### **1.电气设置**

UFACTORY xArm 随附 12pin工具连接电缆。 UFACTORY xArm 和第三方末端执行器可以使用末端工具连接线连接。

<figure><img src="../broken-reference" alt="" width="305"><figcaption></figcaption></figure>

<figure><img src="../broken-reference" alt=""><figcaption></figcaption></figure>

排线内部有12个不同颜色的管脚，每种颜色代表不同的功能，请参考下表：

<table data-header-hidden><thead><tr><th width="142.33333333333331"></th><th width="148"></th><th></th></tr></thead><tbody><tr><td>引脚顺序</td><td>颜色</td><td>信号</td></tr><tr><td>1</td><td>棕色</td><td>+24V（电源）</td></tr><tr><td>2</td><td>蓝色</td><td>+24V（电源）</td></tr><tr><td>3</td><td>白色</td><td>0V（接地）</td></tr><tr><td>4</td><td>绿色</td><td>0V（接地）</td></tr><tr><td>5</td><td>粉色</td><td>485-A</td></tr><tr><td>6</td><td>黄色</td><td>485-B</td></tr><tr><td>7</td><td>黑色</td><td>数字输出 0</td></tr><tr><td>8</td><td>灰色</td><td>数字输出 1</td></tr><tr><td>9</td><td>红色</td><td>数字输入 0</td></tr><tr><td>10</td><td>紫色</td><td>数字输入 1</td></tr><tr><td>11</td><td>橙色</td><td>模拟输入 0</td></tr><tr><td>12</td><td>浅绿色</td><td>模拟输入 1</td></tr></tbody></table>

#### 电气规格如下：

{% hint style="danger" %}
注：\*强烈建议感性负载使用保护二极管。
{% endhint %}

<table data-header-hidden><thead><tr><th width="223"></th><th width="149"></th><th width="127"></th><th width="112"></th><th></th></tr></thead><tbody><tr><td>参数</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td>24V 模式下的电源电压</td><td>-</td><td>24</td><td>30</td><td>V</td></tr><tr><td>电源电流 *</td><td>-</td><td>-</td><td>1800</td><td>mA</td></tr></tbody></table>

{% hint style="danger" %}
\*\*注意：\*\*数字输出以带集电极开路（OC）的 NPN 形式实现。
{% endhint %}

当数字输出被激活时，相应的连接器将被驱动到 GND。 当数字输出被禁用时，相应的连接器将打开（集电极开路/漏极开路）。 电气规格如下：

<table data-header-hidden><thead><tr><th width="218"></th><th></th><th></th><th width="146"></th><th></th></tr></thead><tbody><tr><td>参数</td><td>最小值</td><td>典型值</td><td>最大值</td><td>单位</td></tr><tr><td>开路电压</td><td>-0.5</td><td>-</td><td>30</td><td>V</td></tr><tr><td>灌注50mA时的电压</td><td>-</td><td>0.05</td><td>0.20</td><td>在V</td></tr><tr><td>灌注电流</td><td>0</td><td>-</td><td>50</td><td>mA</td></tr><tr><td>通过 GND 的电流</td><td>0</td><td>-</td><td>50</td><td>mA</td></tr></tbody></table>

## 2 **、机械安装**

UFACTORY xArm的末端工具法兰参照DIN ISO 9409-1-A50/A63标准。 可以参考下图尺寸进行安装。 如有必要，请参考下图设计机械适配器。

1300型号的末端工具法兰螺孔如图所示：

<figure><img src="../broken-reference" alt=""><figcaption><p><strong><code>末端执行器法兰机械尺寸（单位：mm）</code></strong></p></figcaption></figure>

## **第三方末端执行器软件设置**

### 1.TCP设置

#### 1.1 **TCP 负载设置**

#### ● **UFACTORY** **Studio上设置TCP 负载**

1. 进入“设置”-“运动参数”-“TCP设置”
2. 点击【新建】按钮，创建末端执行器的TCP Payload
3. 创建新的TCP payload有两种方式：（1）手动输入（2）自动识别

**手动输入：** 如果知道负载的重量和负载的大致重心，可以选择手动输入。

**自动识别：** 机械臂需要运行一系列动作命令来计算TCP 负载的参数。

{% hint style="danger" %}
**注意** ：

\* 一旦确定了新有效负载的名称，就无法更改。

\* 如果选择自动识别，当前的机械臂必须安装在平稳的地面上。
{% endhint %}

<figure><img src="../broken-reference" alt=""><figcaption></figcaption></figure>

#### ● Python-SDK **上设置TCP 负载**

请使用以下接口设置末端执行器的TCP 负载。

<pre class="language-python"><code class="lang-python"><strong>set_tcp_load()
</strong></code></pre>

接口的详细内容请参考文档：

{% embed url="https://github.com/xArm-Developer/xArm-Python-SDK/blob/master/doc/api/xarm_api.md" fullWidth="false" %}

## 1.2 **TCP偏移设置**

#### ● **UFACTORY Studio 上设置TCP 偏移**

1. 进入“设置”-“TCP设置”-“TCP偏移”
2. 点击【新建】按钮，创建末端执行器的TCP 偏移

#### ● **Python-SDK 上设置TCP 偏移**

请使用以下接口设置末端执行器的TCP 偏移。

```python
set_tcp_offset()
```

接口的详细内容请参考文档：

{% embed url="https://github.com/xArm-Developer/xArm-Python-SDK/blob/master/doc/api/xarm_api.md" fullWidth="false" %}

## 2.自动防撞模型设置

1. 进入“设置”-“末端工具”
2. 机械臂末端安装第三方末端执行器（官方未提供）时，请选择【其他】。
3. 可选择可包裹末端执行器的3D模型（圆柱体/长方体）作为末端执行器的防自撞模型。点击"确定"

<figure><img src="../broken-reference" alt=""><figcaption></figcaption></figure>

● **Python-SDK 上设置自碰撞预防模型**

请使用以下接口设置末端执行器的防碰撞模型。

```python
set_collision_tool_model()
```

接口的详细内容请参考文档：

{% embed url="https://github.com/xArm-Developer/xArm-Python-SDK/blob/master/doc/api/xarm_api.md" %}

## 3.末端执行器的控制方式

#### 3.1通过数字IO控制末端执行器

<figure><img src="../broken-reference" alt=""><figcaption></figcaption></figure>

**● Python-SDK**

```python
#set Tool Output 0 to low
arm.set_tgpio_digital(0,0)

#set Tool Output 0 to high
arm.set_tgpio_digital(0,1)
```

#### 3.2 通过Modbus-RTU通讯协议控制末端执行器

通过 xArm-Python-SDK 发送命令来控制 Robotiq Gripper ( 2F-85 / 2F-140 ) 的示例

{% embed url="https://github.com/xArm-Developer/xArm-Python-SDK/blob/master/example/wrapper/thridparty/set_robotiq_gripper.py" %}
