# xarm\_set\_speed

### 1. Introduction

Set the speed percent of \[Live Control] page.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "xarm_set_speed",
    "data": {
        "percent": 1
    },
    "id":"set_speed_100%"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="136">Name</th><th width="85">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>percent</td><td>int</td><td>Yes</td><td>set the speed percent of the Arm 0.01-1(1-100%);   1%=2.3mm/s</td></tr></tbody></table>
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
```

#### front\_end

```javascript
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
```
