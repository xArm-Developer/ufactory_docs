# xarm\_move\_joint

### 1. Introduction

Button:&#x20;

1\) Back to the initial position.

2\) Joint motion in Live Control and Blockly module.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "xarm_move_joint",
    "data": {
        "I": "0",
        "J": "0",
        "K": "0",
        "L": "0",
        "M": "0",
        "N": "0",
        "O": "0",
        "R": 0,
        "F": "0",
        "Q": "300",
        "isControl": true,
        "isClickMove": false,
        "wait": false
    },
    "id": "5"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="136">Name</th><th width="85">Type</th><th width="140">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>I</td><td>String</td><td>Yes</td><td>Joint angle of Joint1</td></tr><tr><td>J</td><td>String</td><td>Yes</td><td>Joint angle of Joint2</td></tr><tr><td>k</td><td>String</td><td>Yes</td><td>Joint angle of Joint3</td></tr><tr><td>M</td><td>String</td><td>Yes</td><td>Joint angle of Joint4</td></tr><tr><td>N</td><td>String</td><td>Yes</td><td>Joint angle of Joint5</td></tr><tr><td>O</td><td>String</td><td>Yes</td><td>Joint angle of Joint6</td></tr><tr><td>R</td><td>String</td><td>Yes</td><td>Joint angle of Joint7</td></tr><tr><td>wait</td><td>bool</td><td>No</td><td>wait or not</td></tr><tr><td>isControl</td><td>bool</td><td>Yes</td><td>whether start the program by Blockly or not</td></tr><tr><td>isClickMove</td><td>bool</td><td>Yes</td><td>whether click 'Move' in Blockly or not</td></tr><tr><td>Module</td><td>String</td><td>No</td><td>whether the wait=True in Blockly or not</td></tr></tbody></table>
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
GLOBAL.XArm.xarm_printed = True
ret = yield self._wait_until_cmdnum_lt_max()
if ret is not None:
    return response(client, id, ret)
self.last_move_client = client
code = GLOBAL.XArm.xarm.set_servo_angle(angle=angles, speed=mvvelo, mvacc=mvacc, mvtime=mvtime,is_radian=False, wait=False, radius=radius)
```

#### front\_end

```javascript
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
```
