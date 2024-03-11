# xarm\_set\_blockly\_init

### 1. Introduction

Initialize the parameter of the robot before running the Blockly project.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "xarm_set_blockly_init",
    "data": {
        "version":"850"
    },
    "id": "1"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="105">Name</th><th width="79">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>version</td><td>String</td><td>Yes</td><td><p>lite6: Lite6;</p><p>850: UFACTORY 850;</p><p>xArm: null</p></td></tr></tbody></table>
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
mode = GLOBAL.XArm.xarm.mode
if mode == 2:
    return response(client, cmd_id, 105)
yield self.xarm_check_tcp(None, cmd_id, data)
yield self.xarm_set_ready(None, cmd_id, data)
self._xarm_set_params(**{
    'Q': GLOBAL.XArm.xarm_tcp_acc,
    'Q2': GLOBAL.XArm.xarm_joint_acc,
})
```

#### front\_end

```javascript
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
```
