WebsocketAPI
==

Set motion(ws://{ip}:{port}/ws) <br> 
---


## 1.xarm_move_step
Description:  
Long press: keep moving in a certain direction until the button is released. <br> 
Short press: move a step in a certain direction.<br> 
Button: [Live Control] -- X+ / X- / Y+ / Y- / Z+ / Z- <br> 

~~~
URL:  /ws 
Request Type： Application/json 
Return Type： */*  
~~~

| Request Parameter     | Type	  |  Must be filled	 | Description                                                 | 
| -------------------   | ------	|  --------------	 | -------------------------------------------------           | 
| isloop                | bool  	|  Yes          	 | whether a long press or not                                 | 
| direction             | String 	|  Yes          	 | Direction of movement：<br>'position-x-increase’;'position-x-decrease’; <br>’position-y-increase’;’position-y-decrease’;<br>’position-z-increase’;’position-z-decrease’; <br>’attitude-roll-increase’;'attitude-roll-decrease';<br>’attitude-pitch-increase’;'attitude-pitch-decrease';<br>'attitude-yaw-increase';'attitude-yaw-decrease';<br>Change of Joint angle：<br>'joint-angle-increase';'joint-angle-decrease'; <br>Aligning the Hand(for xArm5 only)：<br>'set-end-level' ;
| isMoveTool                | bool  	|  Yes          	 | whether use Tool Coordinate or not(Base Coordinate by default)                                | 
| isSetInitialPoint                | bool  	|  No          	 | (Not Used)                               | 
| Return Parameter     | Type	  |  Must be filled	 | Description                                                 | 
| Return Parameter     | Type	  |  Must be filled	 | 0: success <br>Other: Failed. Refer to [xArm_Python_SDK/xarm_API_Code.md](https://github.com/xArm-Developer/xArm-Python-SDK/blob/master/doc/api/xarm_api_code.md#api-code)                                                | 

### Background
~~~
if direction == 'position-x-increase' or direction == 'position-x-decrease':
    self._xarm_sync_tcp(0)
    x = GLOBAL.XArm.xarm_position_step if direction == 'position-x-increase' else -GLOBAL.XArm.xarm_position_step
    if isMoveTool:
        code = GLOBAL.XArm.xarm.set_tool_position(x=x, speed=tcp_speed)
    else:
        code = GLOBAL.XArm.xarm.set_position(x=x, relative=True, speed=tcp_speed)
~~~

### Front end
~~~
moveStep(direction, isLoop) {
      window.CommandsRobotSocket.moveStep({ 'direction': direction, 'isLoop': isLoop, 'isMoveTool': this.isToolCoord });
},

moveStep = (data, callback) => {
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, data);
  Object.assign(params.data, {
    mode: self.model.robot.state.info.xarm_mode,
  });
  self.sendCmd(window.GlobalConstant.MOVE_STEP_START, params, (dict) => {
    if (callback) {
      callback(dict);
    }
  });
}
~~~

## 2.xarm_move_step_over
Description:  <br> 
The xArm will be stopped immediately once the button is released.

~~~
URL: /ws 
Request Type：	Application/json 
Return Type：	*/* 
~~~

| Request Parameter     | Type	  |  Must be filled	 | Description                                                 | 
| -------------------   | ------	|  --------------	 | -------------------------------------------------           | 
| */*                    |        	|               	 |                                                             | 
| Return Parameter      | Type	  |  Must be filled	 | Description                                                 | 
| status code           | int    	|  Yes           	 | 0 by default | 


## 3.xarm_move_joint
Description:  <br> 
Move with Joint Motion<br> 
1）Back to initial position  2）Joint motion in 'Live Control' interface

~~~
URL: /ws 
Request Type：	Application/json 
Return Type：	*/* 
~~~

| Request Parameter     | Type	  |  Must be filled	 | Description                                                 | 
| -------------------   | ------	|  --------------	 | -------------------------------------------------           | 
| I                    |     String   	|       Yes        	 |                 Joint angle of Joint1      | 
| J                    |     String   	|       Yes        	 |                 Joint angle of Joint2      | 
| K                    |     String   	|       Yes        	 |                 Joint angle of Joint3      | 
| M                    |     String   	|       Yes        	 |                 Joint angle of Joint4     | 
| N                    |     String   	|       Yes        	 |                 Joint angle of Joint5      | 
| O                    |     String   	|       Yes        	 |                 Joint angle of Joint6      | 
| R                    |     String   	|       Yes        	 |                 Joint angle of Joint7     | 
| wait                    |     String   	|       No        	 |                 wait or not    | 
| isControl                   |     bool   	|       Yes        	 |                 whether start the program by Blockly or not     | 
| isClickMove                    |     bool   	|       Yes        	 |                 whether click 'Move' in the Blockly or not    | 
| Module                    |     String   	|       No        	 |                 whether the wait=True in the Blockly or not     | 
| Return Parameter      | Type	  |  Must be filled	 | Description                                                 | 
| */*          |     	|             	 |  | 

### Background
~~~
GLOBAL.XArm.xarm_printed = True
ret = yield self._wait_until_cmdnum_lt_max()
if ret is not None:
    return response(client, id, ret)
self.last_move_client = client
code = GLOBAL.XArm.xarm.set_servo_angle(angle=angles, speed=mvvelo, mvacc=mvacc, mvtime=mvtime,is_radian=False, wait=False, radius=radius)
~~~

### Front end
~~~
self.moveJoint = (positions, index, isWait, callback, isControl, modName, isClickMove) => {
  if (modName === 'blockly' && isControl === false && !window.Blockly.Running) {
    return;
  }
  const JOINT_LIST = ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'R'];
  const sendData = isWait === true ? { wait: true } : {};
  if (index >= 0) {
    sendData[JOINT_LIST[index]] = Number(positions[0]);
  }
  else {
    JOINT_LIST.forEach((value, index) => {
      sendData[value] = Number(positions[index]);
    });
  }
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, {
    F: Number(self.model.robot.state.local.angle_speed),
    Q: Number(self.model.robot.state.local.angle_acceleration),
    isControl: isControl === true ? true : false,
    module: modName,
    isClickMove: isClickMove,
    mode: self.model.robot.state.info.xarm_mode,
    wait: isWait,
  });
  Object.assign(params.data, sendData);

  self.sendCmd(window.GlobalConstant.MOVE_JOINT, params, (dict) => {
    self.codeHandle(dict, 'move joint', isControl !== true);
    if (callback) {
      callback(dict);
    }
  });
};
~~~


## 4.switch_mode_Lite6
Description:  <br> 
Change the mode of Lite6.
Button: [Live Control] - Manual mode

~~~
URL: /ws 
Request Type：	Application/json 
Return Type：	*/* 
~~~

| Request Parameter     | Type	  |  Must be filled	 | Description                                                 | 
| -------------------   | ------	|  --------------	 | -------------------------------------------------           | 
| mode                    |     int   	|       Yes        	 |               0:position mode; <br>2:joint teaching mode     | 
| version                    |     String   	|       Yes        	 |                 Joint angle of Joint2      | 
| status                    |     int   	|       Yes        	 |              0:close joint teaching mode; <br>1:open joint teaching mode;    | 
| Reported                    |       	|             	 |                      | 
| Lite6_record_mode                    |     int   	|       Yes        	 |             return 1 if the teaching mode is enabled;<br>return 0 if the teaching mode is closed.     | 
| Return Parameter      | Type	  |  Must be filled	 | Description                                                 | 
| */*          |     	|             	 |  | 

### Background
~~~
if current_tgpio == '' and value == 1:
    xarm.set_mode(mode, 1)
    if xarm.error_code == 0:
        xarm.set_state(0)
    self._xarm_sync()
elif current_tgpio != value:
    GLOBAL.XArm.lite6_ti2_status = value
    mode_param = (2, 1) if value == 1 else (0,)
    xarm.set_mode(*mode_param)
    if xarm.error_code == 0:
        xarm.set_state(0)
~~~

### Front end
~~~
self.switch_mode_lite6 = (mode, callback) => {
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, {
    mode: mode,
    status: mode === 2 ? 1 : 0
  });
  self.sendCmd(window.GlobalConstant.SWITCH_MODE_LITE6, params, (dict) => {
    if (callback) {
      callback(dict);
    }
  });
};
~~~

## 5.xarm_set_blockly_init
Description:  <br> 
Initialize the parameter of Lite6 before runing Blockly project.

~~~
URL: /ws 
Request Type：	Application/json 
Return Type：	*/* 
~~~

| Request Parameter     | Type	  |  Must be filled	 | Description                                                 | 
| -------------------   | ------	|  --------------	 | -------------------------------------------------           | 
| version                    |     String   	|       Yes        	 |         Lite by default | 
| Return Parameter      | Type	  |  Must be filled	 | Description                                                 | 
| status code         |    int 	|       Yes      	 |   0 by default|

### Background
~~~
mode = GLOBAL.XArm.xarm.mode
if mode == 2:
    return response(client, cmd_id, 105)
yield self.xarm_check_tcp(None, cmd_id, data)
yield self.xarm_set_ready(None, cmd_id, data)
self._xarm_set_params(**{
    'Q': GLOBAL.XArm.xarm_tcp_acc,
    'Q2': GLOBAL.XArm.xarm_joint_acc,
})
~~~

### Front end
~~~
self.setBlocklyInit = (callback) => {
  window.GlobalUtil.model.robot.event.GPIOEvent.reset(true);
  window.GlobalUtil.model.robot.state.local.acceleration = window.GlobalUtil.model.robot.state.remote.defaultTcpAcc;
  window.GlobalUtil.model.robot.state.local.angle_acceleration = window.GlobalUtil.model.robot.state.remote.defaultJointAcc;
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, {
    mode: self.model.robot.state.info.xarm_mode,
  });
  self.sendCmd(window.GlobalConstant.SET_BLOCKLY_INIT, params, (dict) => {
    self.codeHandle(dict, 'set blockly init', true);
    if (callback) {
      callback(dict);
    }
  });
}
~~~

## 6.run_blockly
Description:  <br> 
Run the Blockly project.

~~~
URL: /ws 
Request Type：	Application/json 
Return Type：	*/* 
~~~

| Request Parameter     | Type	  |  Must be filled	 | Description                                                 | 
| -------------------   | ------	|  --------------	 | -------------------------------------------------           | 
| userId                    |     String   	|       No        	 |         test by default | 
| version                    |     String   	|       No        	 |         Lite6 by default | 
| category                    |     String   	|       No        	 |         myapp by default | 
| appName                    |     String   	|       Yes       	 |         The name of the Blockly project | 
| Return Parameter      | Type	  |  Must be filled	 | Description                                                 | 
| status code         |    int 	|             	 | 0:success;<br> 1:Initialization exception;<br>  -12: failed;<br>  -11: covert failed;<br>  -3: parameter error; |

### Background
~~~
user_id = data.get('userId', 'test')
xarm_version = data.get('version', GLOBAL.XArm.xarm_type)
category = data.get('category', 'myapp')
app_name = data.get('appName', '')
app_name = convert_path(app_name)
path = os.path.join(projects_path, user_id, xarm_version, 'app', category, app_name)
check_is_pause = GLOBAL.XArm.xarm._arm._check_is_pause
check_cmdnum_limit = GLOBAL.XArm.xarm._arm._check_cmdnum_limit
try:
    GLOBAL.XArm.xarm._arm._check_is_pause = True
    GLOBAL.XArm.xarm._arm._check_cmdnum_limit = True
    logger.info('start run blockly')
    GLOBAL.Connect.blockly_task_client = client
    code = yield self._run_blockly(path, client, cmd_id)
    logger.info('run blockly finish, code={}'.format(code))
except:
    code = 1
finally:
    GLOBAL.XArm.xarm._arm._check_is_pause = check_is_pause
    GLOBAL.XArm.xarm._arm._check_cmdnum_limit = check_cmdnum_limit
    GLOBAL.Connect.blockly_task_client = None
if client:
    response(client, cmd_id, code)
else:
    return code
~~~

### Front end
~~~
self.runBlockly = (name, callback) => {
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, {
    category: 'myapp', // 'myapp',
    appName: name,
  });
  window.GlobalUtil.model.localAppsMgr.taskId = self.sendCmd(window.GlobalConstant.RUN_BLOCKLY, params, (dict) => {
    if (callback) {
      callback(dict);
    }
  })
};
~~~

## 7.xarm_urgent_stop
Description:  <br> 
Emergency Stop

~~~
URL: /ws 
Request Type：	Application/json 
Return Type：	*/* 
~~~

| Request Parameter     | Type	  |  Must be filled	 | Description                                                 | 
| -------------------   | ------	|  --------------	 | -------------------------------------------------           | 
| /                   |      	|               	 |        | 
| Return Parameter      | Type	  |  Must be filled	 | Description                                                 | 
| status code         |    int 	|         Yes    	 | 0 by default |

### Background
~~~
GLOBAL.XArm.xarm_paused = False
GLOBAL.XArm.xarm_printed = False
GLOBAL.XArm.xarm_print_client = None
self.move_enable = False
GLOBAL.XArm.xarm_print_send_count = 0
GLOBAL.XArm.xarm_print_total_count = 0
GLOBAL.XArm.xarm.emergency_stop()

if GLOBAL.Core.is_xarm and os.path.exists('/home/uf/.UFACTORY/projects/test/task.pid'):
    try:
        with open('/home/uf/.UFACTORY/projects/test/task.pid', 'r') as f:
            pid = f.read()
            os.system('echo "{}" | sudo -S kill -9 {}'.format(GLOBAL.XArm.get_ssh_config()['password'], pid))
    except Exception as e:
        logger.error('read pid error, {}'.format(e))
    finally:
        try:
            os.remove('/home/uf/.UFACTORY/projects/test/task.pid')
        except Exception as e:
            logger.error('remove pid error, {}'.format(e))

if GLOBAL.Core.jedi_ws and GLOBAL.Core.jedi_ws.connected:
    GLOBAL.Core.jedi_ws.send({
        'id': -1,
        'client_id': client._id(),
        'cmd': 'stop_python_script',
        'data': {}
    })
~~~

### Front end
~~~
self.urgentStop = (data, callback) => {
  self.model.robot.state.status.error = data;
  self.model.commonStatusMgr.blocklyCanUpdate = false;
  self.model.commonStatusMgr.UrgentStopRecord = true;
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  self.sendCmd(window.GlobalConstant.URGENT_STOP, params, (response) => {
    if (data === false) {
      window.Blockly.Running = false;
      window.Blockly.AppRunning = false;
      window.Blockly.DisabledToRun = false;

      let len = 0;
      if (BlocklyCom.BlockWorkspace) {
        len = BlocklyCom.BlockWorkspace.getAllBlocks().length;
      }
      window.GlobalUtil.model.localAppsMgr.enableRun = len > 0 ? true : false;

      setTimeout(() => {
        self.model.commonStatusMgr.blocklyCanUpdate = true;
      }, 500);
    }

    const stop = response.data;
    if (stop && (stop.length > 0)) {
      console.log('stop', stop);
    }
    else {
      console.log('urgent stop fail', response);
    }
    if (callback) {
      callback(response);
    }
  });
};
~~~


## 8.xarm_set_simulation_robot
Description:  <br> 
Enable/Disable simulated robot

~~~
URL: /ws 
Request Type：	Application/json 
Return Type：	*/* 
~~~

| Request Parameter     | Type	  |  Must be filled	 | Description                                                 | 
| -------------------   | ------	|  --------------	 | -------------------------------------------------           | 
| on_off                  |  bool    	|     yes          	 |   True: enable; <br> False: disable     | 
| Return Parameter      | Type	  |  Must be filled	 | Description                                                 | 
| status code         |    int 	|         Yes    	 | 0: success <br>Other: Failed. Refer to [xArm_Python_SDK/xarm_API_Code.md](https://github.com/xArm-Developer/xArm-Python-SDK/blob/master/doc/api/xarm_api_code.md#api-code)     |

### Background
~~~
on_off = data.get('on_off')
code = GLOBAL.XArm.xarm.set_simulation_robot(on_off)
GLOBAL.XArm.xarm.get_position()
GLOBAL.XArm.xarm.get_servo_angle()
yield self._xarm_sync()
response(client, cmd_id, code)
~~~

### Front end
~~~
self.set_simulation_robot = (on_off, callback) => {
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, {
    on_off: on_off,
  });
  self.sendCmd(window.GlobalConstant.SET_SIMULATION_ROBOT, params, (dict) => {
    if (callback) {
      callback(dict);
    }
  });
}
~~~

## 9.xarm_set_speed
Description:  <br> 
Set the speed percent of Arm<br> 
Button:[Live Control]- Speed

~~~
URL: /ws 
Request Type：	Application/json 
Return Type：	*/* 
~~~

| Request Parameter     | Type	  |  Must be filled	 | Description                                                 | 
| -------------------   | ------	|  --------------	 | -------------------------------------------------           | 
| percent                  |  int    	|     yes          	 |   set the speed percent of the Arm 0.01~1(1~100%)    | 
| Return Parameter      | Type	  |  Must be filled	 | Description                                                 | 
| status code         |    int 	|         Yes    	 | 0 by default   |

### Background
~~~
percent = float(data.get('percent'))  # percent
if percent > 1:
    percent = 1
max_tcp_speed = GLOBAL.XArm.xarm_params.get('LIMIT_VELO', GLOBAL.Config.LIMIT_VELO)[1]
# max_joint_speed = GLOBAL.XArm.xarm_params.get('LIMIT_ANGLE_VELO', GLOBAL.Config.LIMIT_ANGLE_VELO)[1]
max_joint_speed = GLOBAL.XArm.xarm_max_joint_speed
tcp_speed = max_tcp_speed * percent * GLOBAL.XArm.xarm_speed_factor
joint_speed = max_joint_speed * percent * GLOBAL.XArm.xarm_speed_factor
GLOBAL.XArm.xarm_speed_percent = percent
GLOBAL.XArm.save()
self._xarm_set_params(**{
    'F': tcp_speed,
    'F2': joint_speed
}, is_radian=False)
GLOBAL.XArm.xarm_params = self._xarm_get_params(is_radian=False)
return response(client, cmd_id, 0, 'ok')
~~~

### Front end
~~~
self.setSpeedPercent = (percent, callback) => {
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, {
    percent: percent
  });
  self.sendCmd(window.GlobalConstant.SET_SPEED_PERCENT, params, (dict) => {
    if (callback) {
      callback(dict);
    }
  });
}
~~~

## 10.xarm_set_lite6_gripper
Description:  <br> 
Open/close/stop the lite6 gripper<br> 
Button:[Live Control] - [open/close/stop]

~~~
URL: /ws 
Request Type：	Application/json 
Return Type：	*/* 
~~~

| Request Parameter     | Type	  |  Must be filled	 | Description                                                 | 
| -------------------   | ------	|  --------------	 | -------------------------------------------------           | 
| op                  |  String    	|     yes          	 |  open: Open the gripper Lite;<br> close: Close the gripper Lite;<br>stop: Stop the gripper Lite    | 
| Return Parameter      | Type	  |  Must be filled	 | Description                                                 | 
| status code         |    int 	|         Yes    	 | 0: success <br>Other: Failed. Refer to [xArm_Python_SDK/xarm_API_Code.md](https://github.com/xArm-Developer/xArm-Python-SDK/blob/master/doc/api/xarm_api_code.md#api-code)     |

### Background
~~~
op = data.get('op')
if op == 'open':
    code = GLOBAL.XArm.xarm.open_lite6_gripper()
    response(client, cmd_id, code)
elif op == 'close':
    code = GLOBAL.XArm.xarm.close_lite6_gripper()
    response(client, cmd_id, code)
elif op == 'stop':
    code = GLOBAL.XArm.xarm.stop_lite6_gripper()
    response(client, cmd_id, code)
~~~

### Front end
~~~
self.setLite6Gripper = (op, callback) => {
  // control lite6 gripper
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, {
    op: typeof op === 'function' ? op.name : op,
  });
  self.sendCmd(window.GlobalConstant.XARM_SET_LITE6_GRIPPER, params, (dict) => {
    if (callback) {
      callback(dict);
    }
  });
}
~~~


Upload or Download file (http://{ip}:{port}/project)
---

1. Download Blockly project
2. Import Blockly project

Status report message
---
1. xarm_tcp_pose
2. xarm_joint_pose
3. xarm_error, xarm_warn
4. xarm_mode


