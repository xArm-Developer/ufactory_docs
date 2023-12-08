# Studio  API说明

### Studio接口概述： <a href="#studio-jie-kou-gai-shu" id="studio-jie-kou-gai-shu"></a>

1. Studio通信协议：

* _websoket：ws://{ip}:18333/ws_
* _http/1.1：http://{ip}:18333_

2. 通信流程图：

* front\_end：前端（用户操作界面）
* Background：后端（封装xArm-Python-SDK）
* Controller：控制器
* Robot：机械臂
* uxbus：UFACTORY自定义协议（控制器与电机通信）
* u\_modbus\_tcp：UFACTORY自定义协议（PC与控制器通信）
* Externals：外接设备，例如BIO机械爪、xArm真空吸头、xArm机械爪等



## Studio\_API 说明

## Studio接口概述： <a href="#studio-jie-kou-gai-shu" id="studio-jie-kou-gai-shu"></a>

1. Studio通信协议：

* _websoket：ws://{ip}:18333/ws_
* _http/1.1：http://{ip}:18333_

2. 通信流程图：

* front\_end：前端（用户操作界面）
* Background：后端（封装xArm-Python-SDK）
* Controller：控制器
* Robot：机械臂
* uxbus：UFACTORY自定义协议（控制器与电机通信）
* u\_modbus\_tcp：UFACTORY自定义协议（PC与控制器通信）
* Externals：外接设备，例如BIO机械爪、xArm真空吸头、xArm机械爪等

![](<../.gitbook/assets/图片 (8).png>)\


3. 上报数据说明：

* 建立websocket连接后，后端会持续上报机械臂实时状态，以下是上报参数解析

```
{
    "type": "report",
    "cmd": "devices_status_keys_report",
    "data": [
        0. "xarm_connected",                 # 机械臂连接状态
        1. "xarm_version",                   # 机械臂类型和固件版本
        2. "xarm_port_name",                 # 控制器IP
        3. "xarm_printed",                   # studio是否停止输出数据(内部使用)
        4. "xarm_state",                     # 机械臂状态
        5. "xarm_version_number",            # 固件版本
        6. "xarm_mode",                      # 机械臂模式
        7. "xarm_collision_sensitivity",     # 碰撞灵敏度
        8. "xarm_teach_sensitivity",         # 示教灵敏度
        9. "xarm_tcp_load",                  # 负载
        10. "xarm_tcp_offset",                # 偏移
        11. "xarm_world_offset",              # 坐标系参数
        12. "xarm_gravity_direction",         # 重力方向
        13. "xarm_paused",                    # xarm是否是暂停状态
        14. "xarm_type",                      # 机械臂类型
        15. "xarm_error_code",                # 错误码
        16. "xarm_warn_code",                 # 警告码
        17. "xarm_tcp_pose",                  # TCP坐标
        18. "xarm_joint_pose",                # 关节角度
        19. "xarm_axis_angle",                # 机械臂轴角角度
        20. "xarm_limit_acc",                 # TCP加速度限制
        21. "xarm_limit_velo",                # TCP速度限制
        22. "xarm_current_velo",              # 当前TCP速度
        23. "xarm_current_acc",               # 当前TCP加速度
        24. "xarm_limit_angle_acc",           # 关节加速度限制
        25. "xarm_limit_angle_velo",          # 关节速度限制
        26. "xarm_current_angle_velo",        # 当前TCP速度
        27. "xarm_current_angle_acc",         # 当前关节加速度
        28. "xarm_tcp_jerk",                  # TCP加加速度
        29. "xarm_joint_jerk",                # 关节加加速度
        30. "xarm_mtbrake",                   # 机械臂关节抱闸状态
        31. "xarm_warn",                      # 警告信息
        32. "xarm_error",                     # 错误信息
        33. "xarm_servo_error",               # 伺服错误
        34. "xarm_is_ready",                  # 机械臂是否运动就绪状态
        35. "xarm_is_verified",               # studio密钥是否验证通过
        36. "xarm_axis",                      # 关节轴数
        37. "config",                         # 安全边界和缩减模式
        38. "xarm_python",                    # pythonIDE运行状态和连接状态
        39. "xarm_speed_percent",             # 实时控制界面速度百分比
        40. "xarm_acc_percent",               # 实时控制界面加速度百分比
        41. "xarm_initial_point",             # 初始点位置
        42. "xarm_position_step",             # 位置步长
        43. "xarm_attitude_step",             # 姿态步长
        44. "xarm_joint_step",                # 关节步长
        45. "xarm_end_tool_type",             # 机械臂末端类型
        46. "xarm_gripper_is_enable",         # bio机械爪是否已使能
        47. "gripper_error_code",             # xArm机械爪错误码
        48. "bio_gripper_error_code",         # bio机械爪错误码
        49. "robotiq_error_code",             # robotiq错误码
        50. "xarm_device_type",               # 机械臂固件类型
        51. "xarm_mount_degrees",             # 机械臂安装方向参数(倾斜角度和旋转角度)
        52. "current_clients_count",          # 当前连接的客户端
        53. "xarm_is_connecting",             # studio是否有连接机械臂(内部使用)
        54. "core_updated",                   # studio是否有更新
        55. "firmware_updated",               # 固件是否有更新
        56. "channel",                        # 是测试环境还是正式环境
        57. "xarm_counter_val",               # 计数器值
        58. "xarm_quick_access_switch",       # 快速访问开关
        59. "xarm_quick_access",              # 快速访问的选项
        60. "xarm_gpio_reset_config",         # gpio状态
        61. "xarm_default_tcp_acc",           # 默认TCP加速度
        62. "xarm_default_joint_acc",         # 默认关节加速度
        63. "xarm_cgpio_states",              # 控制器输入、输出和模拟量参数
        64. "xarm_voltages",                  # 机械臂电压信息
        65. "xarm_currents",                  # 机械臂电流信息
        66. "xarm_self_collision_params",     # 自碰撞模式已经参数
        67. "xarm_quick_copy_switch",         # 是否打开快速复制
        68. "xarm_run_package_blockly_switch",# 是否打包运行
        69. "xarm_is_simulation_robot",       # 是否是仿真机械臂模式
        70. "bio_gripper_is_enabled",         # bio机械爪是否已使能
        71. "robotiq_is_activated",           # robotiq机械爪是否已使能
        72. "xarm_is_velocity",               # 速度模式标志，根据此变量来设置速度模式(已不再使用)
        73. "xarm_is_axis_angle",             # 姿态控制方式(轴角/RPY)
        74. "xarm_is_robot_arm",              # 选择机械臂or控制盒
        75. "line_track_error_code",          # 直线滑轨错误码
        76. "xarm_other_tool_type",           # 末端工具类型(滑轨之类）
        77. "ft_sensor",                      # 六维力矩传感器参数和状态
        78. "lite6_record_mode",              # lite6手动模式是否打开
        79. "lite6_ti2_status",               # lite6末端示教按钮状态
        80. "reduced_states",                 # 缩减模式状态
        81. "safe_border_states",             # 安全边界状态
        82. "xarm_end_otherCuboid_param",     # 末端工具长方体参数
        83. "xarm_end_otherCylinder_param",   # 末端工具圆柱体参数
        84. "joint_exceed_axis",              # 关节超限时的轴数
        85. "xarm_is_show_axis_angle"        # 3D界面展示是否使用轴角模式
    ]
}
```



## Websoket协议 <a href="#websoket-xie-yi" id="websoket-xie-yi"></a>

### **实时控制\_API**:

1. xarm\_move\_step
2. xarm\_move\_step\_over
3. xarm\_move\_joint
4. &#x20;switch\_mode\_lite6
5. &#x20;xarm\_urgent\_stop
6. xarm\_set\_simulation\_robot
7. xarm\_set\_lite6\_gripper
8. &#x20;xarm\_set\_speed
9. xarm\_switch\_mode

### **Blockly\_API:**

1. xarm\_set\_blockly\_init
2. run\_blockly
3. xarm\_move\_arc\_line
4. xarm\_move\_circle
5. app\_create\_file
6. app\_save\_info
7. get\_app\_info
8. get\_app\_xml\_data

### **Python IDE:**

1. ide\_list\_projects
2. ide\_get\_project
3. ide\_create\_project
4. ide\_delete\_project
5. ide\_rename\_project
6. ide\_save\_project
7. ide\_create\_file
8. ide\_to\_python\_allow
9. ide\_blockly\_to\_python
10. ide\_write\_file
11. ide\_get\_file
12. ide\_delete\_file
13. ide\_rename\_file
14. ide\_create\_folder
15. ide\_delete\_folder
16. ide\_rename\_folder
17. run\_python\_program
18. stop\_python\_program

### **设置\_API:**

1. xarm\_set\_cgpio\_digital
2. xarm\_set\_cgpio\_analog
3. xarm\_set\_gpio\_digital
4. xarm\_set\_suction\_cup
5. xarm\_set\_motion\_config
6. xarm\_set\_effector\_modbus\_rtu\_cmd
7. get\_tcp\_offset\_load\_config
8. set\_tcp\_load\_offset\_configs
9. remove\_tcp\_load\_offset\_configs
10. associate\_tcp\_offset\_load
11. xarm\_start\_identification
12. xarm\_stop\_identification
13. xarm\_get\_reduced\_states
14. xarm\_get\_approx\_motion（获取规避奇异点是否开启）
15. xarm\_config\_gpio\_reset\_when\_stop（当机械臂停止的时候重置控制器和末端io状态接口）
16. xarm\_set\_collision\_rebound（设置碰撞回弹参数接口）
17. xarm\_set\_self\_collision\_detection（设置自碰撞检测开关）
18. xarm\_set\_jerk（设置关节加加速度和Tcp加加速度接口）
19. xarm\_get\_joint\_pi（获取关节PID参数）
20. xarm\_factory\_reset（恢复出厂设置）
21. xarm\_start\_report\_gpio\_digital（获取末端数字、模拟量IO）
22. xarm\_stop\_report\_gpio\_digital（停止获取末端数字、模拟量IO）
23. get\_gpio\_config（获取控制器数字IO触发的相应操作）
24. set\_gpio\_config（设置控制器数字IO触发的相应操作）
25. xarm\_set\_stop\_loop（停止modabus循环发送）
26. xarm\_set\_modbus\_baud\_rate（设置modbus波特率）
27. xarm\_get\_end\_io\_info（获取modbus配置信息）
28. xarm\_set\_user\_config（设置辅助功能信息）
29. xarm\_save\_config（保存设置）
30. xarm\_get\_ft\_sensor\_mode（查询力矩传感器手动模式）
31. xarm\_get\_ft\_sensor\_info（获取力矩传感器信息）
32. get\_world\_offset\_config（获取坐标系数据）
33. set\_world\_offset\_configs（设置坐标系数据）
34. xarm\_set\_mount\_direction（设置安装方向）
35. xarm\_set\_reduced\_max\_joint\_speed（设置缩减模式的最大关节速度）
36. xarm\_set\_reduced\_max\_tcp\_speed（设置缩减模式的最大tcp速度）
37. xarm\_set\_reduced\_joint\_range（设置缩减模式的关节运动范围）
38. xarm\_set\_reduced\_mode（开启/关闭缩减模式）
39. xarm\_set\_reduced\_tcp\_boundary（设置缩减模式的安全边界）
40. xarm\_set\_fense\_mode（设置缩减模式安全边界开启）

### **通用:**

1. xarm\_clear\_error\_warn

\


### HTTP协议： <a href="#http-xie-yi" id="http-xie-yi"></a>

**下载上传\_API：**

1. 下载blockly文件
2. 导入blockly文件
3. 导出机械臂参数文件



### **通用:**

1. 加载机械臂参数文件



