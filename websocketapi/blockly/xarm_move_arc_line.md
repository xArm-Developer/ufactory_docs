# xarm\_move\_arc\_line

### 1. Introduction

Linear motion.

Button: \[Blockly] - \[linear motion] - Move.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "xarm_move_arc_line",
    "data": {
        "X": "200",
        "Y": "0",
        "Z": "240",
        "A": "180",
        "M": "0",
        "B": "0",
        "R": 0,
        "isControl": true,
        "isClickMove": false,
        "wait":false
    },
    "id": "1"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="136">Name</th><th width="85">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>X</td><td>String</td><td>Yes</td><td>X</td></tr><tr><td>Y</td><td>String</td><td>Yes</td><td>Y</td></tr><tr><td>Z</td><td>String</td><td>Yes</td><td>Z</td></tr><tr><td>A</td><td>String</td><td>Yes</td><td>roll</td></tr><tr><td>M</td><td>String</td><td>Yes</td><td>pitch</td></tr><tr><td>B</td><td>String</td><td>Yes</td><td>yaw</td></tr><tr><td>R</td><td>String</td><td>No</td><td>radius</td></tr><tr><td>relative</td><td>String</td><td>Yes</td><td>whether relative motion or not</td></tr><tr><td>wait</td><td>bool</td><td>No</td><td>wait or not</td></tr><tr><td>isControl</td><td>bool</td><td>Yes</td><td>whether start the program by Blockly or not</td></tr><tr><td>isClickMove</td><td>bool</td><td>Yes</td><td>whether click 'Move' in Blockly or not</td></tr><tr><td>module</td><td>String</td><td>No</td><td>whether Blockly project is running or not.</td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code;
```
{% endtab %}
{% endtabs %}

### 3. Code Example

#### background

```python
code, limit = 0, False
if code == 0 and limit is False:
    if is_control:
        if is_click_move:
            if GLOBAL.XArm.xarm.warn_code != 0:
                return response(client, id, GLOBAL.XArm.xarm.error_code)
            elif GLOBAL.XArm.xarm.error_code != 0:
                # GLOBAL.XArm.xarm.set_mode(4)
                return response(client, id, GLOBAL.XArm.xarm.error_code)
        yield self.xarm_set_ready(None, id, data)
    if GLOBAL.XArm.xarm.error_code != 0:
        code = -1
    else:
        GLOBAL.XArm.xarm_printed = True
        ret = yield self._wait_until_cmdnum_lt_max()
        if ret is not None:
            return response(client, id, ret)
self.last_move_client = client
code = GLOBAL.XArm.xarm.set_position(*pose, radius=radius, speed=mvvelo, mvacc=mvacc, mvtime=mvtime,is_radian=False, relative=relative)
```

#### front\_end

```javascript
self.moveArcLine = (data, isWait, callback, isControl, modName, isClickMove) => {
  if (modName === 'blockly' && isControl === false && !window.Blockly.Running) {
    return;
  }
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, {
    X: Number(data.position.x || 0),
    Y: Number(data.position.y || 0),
    Z: Number(data.position.z || 0),
    // A: self.model.robot.state.info.xarm_axis === 5 ? 180 : Number(data.orientation.roll || 0),
    // B: self.model.robot.state.info.xarm_axis === 5 ? 0 : Number(data.orientation.pitch || 0),
    A: Number(data.orientation.roll || 0),
    B: Number(data.orientation.pitch || 0),
    C: Number(data.orientation.yaw || 0),
    // R: Number(data.radius || 0),
    R: Number(data.orientation.r || 0),
    F: Number(self.model.robot.state.local.speed || 0),
    Q: Number(self.model.robot.state.local.acceleration || 0),
    wait: isWait,
    isControl: isControl === true ? true : false,
    module: modName,
    isClickMove: isClickMove,
    mode: self.model.robot.state.info.xarm_mode,
  });
  self.sendCmd(window.GlobalConstant.MOVE_ARC_LINE, params, (dict) => {
    self.codeHandle(dict, 'move (arc) line', isControl !== true);
    if (callback) {
      callback(dict);
    }
  });
};
```
