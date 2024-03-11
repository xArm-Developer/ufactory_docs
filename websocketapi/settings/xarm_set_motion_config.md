# xarm\_set\_motion\_config

### 1. Introduction

Save motion-related parameters.

Button: \[Settings] - \[Motion]

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
````json
```
{
    "cmd": "xarm_set_motion_config",
    "data": {
        "tcpAcc": 50001,
        "jointAcc": 100,
        "posStep": 1,
        "attitudeStep": 1,
        "jointStep": 1,
        "collSens": 1,
        "teachSens": 1,
        "initPos": [0,0,0,0,0,0]
    },
    "id": "1"
}
```
````
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="142">Name</th><th width="79">Type</th><th width="135">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>tcpAcc</td><td>int</td><td>No</td><td>Line Motion Acceleration(1-50000)</td></tr><tr><td>jointAcc</td><td>int</td><td>No</td><td>Joint Motion Acceleration(1-1146)</td></tr><tr><td>posStep</td><td>Float</td><td>No</td><td>Line Motion Position Step(0.1-100)</td></tr><tr><td>attitudeStep</td><td>Float</td><td>No</td><td>Line Motion Attitude Step(0.1-100)</td></tr><tr><td>jointStep</td><td>Float</td><td>No</td><td>Joint Motioin Step(0.1-20)</td></tr><tr><td>collSens</td><td>int</td><td>No</td><td>Collision Sensitivity(0-5)</td></tr><tr><td>teachSens</td><td>int</td><td>No</td><td>Teach Sensitivity(1-5)</td></tr><tr><td>initPos</td><td>Array</td><td>No</td><td>Initial position（[0,0,0,0,0,0]）</td></tr></tbody></table>
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
tcp_acc = int(data.get('tcpAcc', 0))
joint_acc = int(data.get('jointAcc', 0))
if tcp_acc:
    self._xarm_set_params(**{
        'Q': tcp_acc,
    }, is_radian=False)
if joint_acc:
    self._xarm_set_params(**{
        'Q2': joint_acc,
    }, is_radian=False)
GLOBAL.XArm.xarm_params = self._xarm_get_params(is_radian=False)
print(GLOBAL.XArm.xarm_params)
pos_step = float(data.get('posStep', 0))
attitude_step = float(data.get('attitudeStep', 0))
joint_step = float(data.get('jointStep', 0))
if pos_step:
    GLOBAL.XArm.xarm_position_step = pos_step
if attitude_step:
    GLOBAL.XArm.xarm_attitude_step = attitude_step
if joint_step:
    GLOBAL.XArm.xarm_joint_step = joint_step
if tcp_acc:
    GLOBAL.XArm.xarm_tcp_acc = tcp_acc
if joint_acc:
    GLOBAL.XArm.xarm_joint_acc = joint_acc
GLOBAL.XArm.save()
coll_sens = int(data.get('collSens', -1))
teach_sens = int(data.get('teachSens', -1))
sens_is_change = False
if GLOBAL.XArm.xarm.collision_sensitivity != coll_sens and coll_sens >= 0:
    sens_is_change = True
    GLOBAL.XArm.xarm.set_collision_sensitivity(coll_sens)
if GLOBAL.XArm.xarm.teach_sensitivity != teach_sens and teach_sens >= 0:
    sens_is_change = True
    GLOBAL.XArm.xarm.set_teach_sensitivity(teach_sens)
if sens_is_change:
    GLOBAL.XArm.xarm.save_conf()
    GLOBAL.XArm.xarm.set_state(0)
init_pos = data.get('initPos', None)
if init_pos:
    GLOBAL.XArm.xarm_initial_point = list(map(float, init_pos))
GLOBAL.XArm.save()
response(client, cmd_id, 0)
```

#### front\_end

```javascript
self.setMotionConfig = (config, callback) => {
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, config);
  self.sendCmd(window.GlobalConstant.SET_MOTION_CONFIG, params, (dict) => {
    if (callback) {
      callback(dict);
    }
  });
};
```
