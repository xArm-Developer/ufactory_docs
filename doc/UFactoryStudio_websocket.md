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
URL:  /ws  <br> 
Request Type： Application/json <br> 
Return Type： */*  <br> 
~~~

| Request Parameter     | Type	  |  Must be filled	 | Description                                                 | 
| -------------------   | ------	|  --------------	 | -------------------------------------------------           | 
| isloop                | bool  	|  Yes          	 | whether a long press or not                                 | 
| direction             | String 	|  Yes          	 | Direction of movement：<br>'position-x-increase’;'position-x-decrease’; <br>’position-y-increase’;’position-y-decrease’;<br>’position-z-increase’;’position-z-decrease’; <br>’attitude-roll-increase’;'attitude-roll-decrease';<br>’attitude-pitch-increase’;'attitude-pitch-decrease';<br>'attitude-yaw-increase';'attitude-yaw-decrease';<br>Change of Joint angle：'joint-angle-increase';'joint-angle-decrease'; <br>Aligning the Hand(for xArm5 only)：'set-end-level' 
| isMoveTool                | bool  	|  Yes          	 | whether use Tool Coordinate or not(Base Coordinate by default)                                | 

### Background
~~~
path = config_path
if not os.path.isfile(path):
    return
filename = path.split('/')[-1]
self.set_header("Accept-Ranges", "bytes")
self.set_etag_header()
self.set_header("Content-Type", 'text/plain')
self.set_header("Access-Control-Allow-Origin", "*")
self.set_header("Access-Control-Allow-Headers", "x-requested-with")
self.set_header('Access-Control-Allow-Methods', 'GET')
request_range = None
range_header = self.request.headers.get("Range")
if range_header:
    request_range = httputil._parse_request_range(range_header)
size = os.stat(path)[stat.ST_SIZE]
if request_range:
    start, end = request_range
    if (start is not None and start >= size) or end == 0:
        self.set_status(416)  # Range Not Satisfiable
        self.set_header("Content-Type", "text/plain")
        self.set_header("Content-Range", "bytes */%s" % (size,))
        return
    if start is not None and start < 0:
        start += size
    if end is not None and end > size:
        end = size
    if size != (end or size) - (start or 0):
        self.set_status(206)  # Partial Content
        self.set_header("Content-Range",
                        httputil._get_content_range(start, end, size))
else:
    start = end = None

if start is not None and end is not None:
    content_length = end - start
elif end is not None:
    content_length = end
elif start is not None:
    content_length = size - start
else:
    content_length = size
self.set_header("Content-Length", content_length)
self.set_header('Content-Disposition', 'attachment; filename=%s' % filename)
content = self.get_content(path, start, end)
if isinstance(content, bytes):
    content = [content]
for chunk in content:
    try:
        self.write(chunk)
        yield self.flush()
    except iostream.StreamClosedError:
        return
~~~

### Front end
~~~
download(name) {
      const data = {};
      if (name === undefined) {
        data.uuid = '/paint';
        data.name = 'all-projects';
      }
      else {
        data.uuid = '/paint/' + name;
        data.name = name;
      }
      let url = `http://${window.GlobalUtil.socketInfo.host}/project/download?path=${window.GlobalConstant.COMMON_PARAMS.userId}/${window.GlobalConstant.COMMON_PARAMS.version}${data.uuid}`
      let full_name = data.name + '.tar.gz';
      fetch(url)
        .then((response) => {
          response.blob().then((blob) => {
            const a = document.createElement('a');
            const url = window.URL.createObjectURL(blob);
            const filename = 'paint-' + full_name;
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
            this.$message({
              message: `${this.$t('downloadSuccess')}: ${filename}`,
              type: 'success',
              duration: 0,
              showClose: true,
            });
          }).catch((e) => {
            this.$message.error(`${this.$t('downloadFailed')}: ${e}`);
          })
        })
        .catch((e) => {
          this.$message.error(`${this.$t('downloadFailed')}: ${e}`);
        })
    }
~~~

## 2.xarm_move_step_over
Description:  <br> 
The xArm will be stopped immediately once the button is released.

~~~
URL: /ws <br> 
Request Type：	Application/json <br> 
Return Type：	*/* <br> 
~~~

| Request Parameter     | Type	  |  Must be filled	 | Description                                                 | 
| -------------------   | ------	|  --------------	 | -------------------------------------------------           | 
| /                     |        	|               	 |                                                             | 
| Return Parameter      | Type	  |  Must be filled	 | Description                                                 | 
| status code           | int    	|  Yes           	 | 0 by default | 

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


