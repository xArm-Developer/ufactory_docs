# xarm\_set\_simulation\_robot

### 1. Introduction

Switch to simulated mode.

Button: \[Live Control] - Real/Sim

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "xarm_set_simulation_robot",
    "data": {
        "on_off": true
    },
    "id": "1"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="136">Name</th><th width="85">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>on_off</td><td>bool</td><td>Yes</td><td><p>True: enable;</p><p>False: disable;</p></td></tr></tbody></table>
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
on_off = data.get('on_off')
code = GLOBAL.XArm.xarm.set_simulation_robot(on_off)
GLOBAL.XArm.xarm.get_position()
GLOBAL.XArm.xarm.get_servo_angle()
yield self._xarm_sync()
response(client, cmd_id, code)
```

#### front\_end

```javascript
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
```
