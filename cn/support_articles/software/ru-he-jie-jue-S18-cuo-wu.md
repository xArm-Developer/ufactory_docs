# 如何解决S18错误

S18：多圈编码器错误

适用产品：xArm series, UF 850, Lite6

适用固件版本：V2.4.0+

适用studio版本：V2.4.0+

请注意：如果长时间不使用机械臂（≥3 个月），则需要每 3 个月打开机械臂电源 6 小时，为机械臂的内置电池充电，否则编码器数据可能丢失并报告 S18 错误。


![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/S18.png)




### 状态码=0:

错误码S18 后面会跟着一个状态码，如果状态码为 0，请进入 “设置-通用设置-调试工具-关节”，输入**H101D0813V256I\***', 并发送。__按下急停按钮并松开__。  *代表关节ID，范围是1~7



例如：H101D0813V256I3.

![image](https://github.com/xArm-Developer/ufactory_docs/blob/main/cn/.gitbook/assets/S18-2.png)

## 状态码不为0

请提供机械臂的SN和错误弹窗截图给<[support@ufactory.cc](mailto:support@ufactory.cc)>.
