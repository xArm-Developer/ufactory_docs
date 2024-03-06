---
description: WebsocketAPI is used for UFactory Studio software.
---

# WebSocket API

### 1. Introduction

1. Communication Protocol

* _webSocket：ws://{ip}:18333/ws_
* _http/1.1：http://{ip}:18333_

### 2. Communication flow chart

* front\_end: UI-UFactory Studio
* Background:  encapsulate xArm-Python-SDK
* Controller
* Robot
* private\_tcp\_protocol: pc-to-controller
* private\_servo\_control\_protocol: controller-to-servo motor
* Externals：xArm gripper, xArm vacuum gripper, third-party devices,...

### 3. Data report

After establishing the WebSocket connection, the background will report the real-time status of the robot continually, the data format please check as below:

```json
{
    "type": "report",
    "cmd": "devices_status_keys_report",
    "data": [
        0. "xarm_connected",                
        1. "xarm_version",                   
        2. "xarm_port_name",                 
        3. "xarm_printed",                   
        4. "xarm_state",                  
        5. "xarm_version_number",         
        6. "xarm_mode",                      
        7. "xarm_collision_sensitivity",     
        8. "xarm_teach_sensitivity",         
        9. "xarm_tcp_load",                
        10. "xarm_tcp_offset",               
        11. "xarm_world_offset",              
        12. "xarm_gravity_direction",         
        13. "xarm_paused",                    
        14. "xarm_type",                      
        15. "xarm_error_code",                
        16. "xarm_warn_code",                 
        17. "xarm_tcp_pose",                  
        18. "xarm_joint_pose",                
        19. "xarm_axis_angle",                
        20. "xarm_limit_acc",                 
        21. "xarm_limit_velo",                
        22. "xarm_current_velo",              
        23. "xarm_current_acc",               
        24. "xarm_limit_angle_acc",           
        25. "xarm_limit_angle_velo",          
        26. "xarm_current_angle_velo",        
        27. "xarm_current_angle_acc",         
        28. "xarm_tcp_jerk",                  
        29. "xarm_joint_jerk",                
        30. "xarm_mtbrake",                   
        31. "xarm_warn",                      
        32. "xarm_error",                     
        33. "xarm_servo_error",               
        34. "xarm_is_ready",                  
        35. "xarm_is_verified",               
        36. "xarm_axis",                      
        37. "config",                         
        38. "xarm_python",                    
        39. "xarm_speed_percent",             
        40. "xarm_acc_percent",               
        41. "xarm_initial_point",             
        42. "xarm_position_step",             
        43. "xarm_attitude_step",             
        44. "xarm_joint_step",                
        45. "xarm_end_tool_type",            
        46. "xarm_gripper_is_enable",         
        47. "gripper_error_code",             
        48. "bio_gripper_error_code",         
        49. "robotiq_error_code",             
        50. "xarm_device_type",               
        51. "xarm_mount_degrees",             
        52. "current_clients_count",          
        53. "xarm_is_connecting",             
        54. "core_updated",                   
        55. "firmware_updated",               
        56. "channel",                        
        57. "xarm_counter_val",               
        58. "xarm_quick_access_switch",       
        59. "xarm_quick_access",              
        60. "xarm_gpio_reset_config",         
        61. "xarm_default_tcp_acc",           
        62. "xarm_default_joint_acc",         
        63. "xarm_cgpio_states",              
        64. "xarm_voltages",                  
        65. "xarm_currents",                  
        66. "xarm_self_collision_params",     
        67. "xarm_quick_copy_switch",         
        68. "xarm_run_package_blockly_switch",
        69. "xarm_is_simulation_robot",       
        70. "bio_gripper_is_enabled",         
        71. "robotiq_is_activated",          
        72. "xarm_is_velocity",               
        73. "xarm_is_axis_angle",            
        74. "xarm_is_robot_arm",              
        75. "line_track_error_code",         
        76. "xarm_other_tool_type",           
        77. "ft_sensor",                      
        78. "lite6_record_mode",              
        79. "lite6_ti2_status",               
        80. "reduced_states",                 
        81. "safe_border_states",             
        82. "xarm_end_otherCuboid_param",     
        83. "xarm_end_otherCylinder_param",   
        84. "joint_exceed_axis",              
        85. "xarm_is_show_axis_angle"         
        86. "xarm_joint_torque"               
        87. "xarm_joint_radian"               
        88. "xarm_joint_speed_axis"           
        89. "xarm_servoj_speed_axis"          
        90. "xarm_motion_is_callback"         
    ]
}

```

The respond code please refer to :api\_code
