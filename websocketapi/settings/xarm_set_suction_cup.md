# xarm\_set\_suction\_cup

### 1. Introduction

Open/Close the xArm vacuum gripper.

Button: \[Blockly] - \[End effector] - \[xArm vacuum gripper] - open/close

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
````json
```
{
    "cmd": "xarm_set_suction_cup",
    "data": {
        "on": false,
        "wait": true
    },
    "id": "close_Vgripper"
}
```
````
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="142">Name</th><th width="79">Type</th><th width="135">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>on</td><td>bool</td><td>Yes</td><td><p>True: Open</p><p>False: Close</p></td></tr><tr><td>wait</td><td>bool</td><td>Yes</td><td>wait or not</td></tr><tr><td>delay</td><td>int</td><td>No</td><td><p>delay time; </p><p>0: set it immediately</p></td></tr></tbody></table>
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
yield self._wait_until_not_pause()
if self.is_simulation_robot:
    return response(client, cmd_id, 0)
ret = yield self._wait_until_cmdnum_lt_max()
if ret is not None:
    return response(client, cmd_id, ret)
on = data.get('on')
wait = data.get('wait', True)
delay = data.get('delay', 0)
timeout = 3
code = GLOBAL.XArm.xarm.set_suction_cup(on, wait=False, delay_sec=delay)
if code == 0 and wait:
    start = time.monotonic()
    code = APIState.SUCTION_CUP_TOUT
    if delay is not None and delay > 0:
        timeout += delay
    while time.monotonic() - start < timeout:
        ret = GLOBAL.XArm.xarm.get_suction_cup()
        if ret[0] == XCONF.UxbusState.ERR_CODE:
            code = XCONF.UxbusState.ERR_CODE
            break
        if ret[0] == 0:
            if on and ret[1] == 1:
                code = 0
                break
            if not on and ret[1] == 0:
                code = 0
                break
        if not GLOBAL.XArm.xarm_connected or GLOBAL.XArm.xarm.state == 4:
            code = APIState.EMERGENCY_STOP
            break
        yield gen.sleep(0.2)
response(client, cmd_id, code)
```

#### front\_end

```javascript
self.setSuctionCup = (on, wait, callback, delay) => {
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, {
    on: on,
    wait: wait,
    delay: delay,
  });
  self.sendCmd(window.GlobalConstant.SET_SUCTION_CUP, params, (dict) => {
    // self.codeHandle(dict, 'set suction cup', true);
    if (callback) {
      callback(dict);
    }
  });
};
```
