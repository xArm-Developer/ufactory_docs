# xarm\_move\_step

### 1. Introduction

Button: \[Live Control] - X+ / X- / Y+ / Y- / Z+ / Z-

long-press: keep moving in a certain direction until the button is released.

short-press: move a step in a certain direction.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "xarm_move_step",
    "data": {
        "isLoop": true,
        "direction": "joint-angle-increase",
        "isMoveTool": true,
        "acc": 500,
        "axis": 3
    },
    "id": "1"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="132">Name</th><th width="79">Type</th><th width="99">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>isloop</td><td>bool</td><td>Yes</td><td>whether a long press or not</td></tr><tr><td>direction</td><td>String</td><td>Yes</td><td>Direction of movement： 'position-x-increase’;'position-x-decrease’; ’position-y-increase’;’position-y-decrease’; ’position-z-increase’;’position-z-decrease’; ’attitude-roll-increase’;'attitude-roll-decrease'; ’attitude-pitch-increase’;'attitude-pitch-decrease'; 'attitude-yaw-increase';'attitude-yaw-decrease'; Change of Joint angle： 'joint-angle-increase';'joint-angle-decrease'; Aligning the Hand(for xArm5 only)： 'set-end-level' ;</td></tr><tr><td>isMoveTool</td><td>bool</td><td>Yes</td><td>whether use Tool Coordinate or not(Base Coordinate by default)</td></tr><tr><td>isSetInitialPoint</td><td>bool</td><td>No</td><td>Not Used</td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code
```
{% endtab %}
{% endtabs %}

### 3. Code Example

#### background

```python
if direction == 'position-x-increase' or direction == 'position-x-decrease':
    self._xarm_sync_tcp(0)
    x = GLOBAL.XArm.xarm_position_step if direction == 'position-x-increase' else -GLOBAL.XArm.xarm_position_step
    if isMoveTool:
        code = GLOBAL.XArm.xarm.set_tool_position(x=x, speed=tcp_speed)
    else:
        code = GLOBAL.XArm.xarm.set_position(x=x, relative=True, speed=tcp_speed)
```

#### front\_end

```javascript
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
```
