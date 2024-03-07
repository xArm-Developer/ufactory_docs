# xarm\_set\_lite6\_gripper

### 1. Introduction

Open/close/stop the lite6 gripper.&#x20;

Button:\[Live Control] - \[End Effector]- open/ close/ stop

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "xarm_set_lite6_gripper",
    "data": {
        "op": "open"
    },
    "id": "1"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="136">Name</th><th width="85">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>op</td><td>String</td><td>Yes</td><td><p>open: Open the gripper Lite;</p><p>close: Close the gripper Lite;</p><p>stop: Stop the gripper Lite;</p></td></tr></tbody></table>
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
```

#### front\_end

```javascript
type ofself.setLite6Gripper = (op, callback) => {
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
```
