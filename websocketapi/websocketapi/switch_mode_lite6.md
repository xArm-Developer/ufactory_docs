# switch\_mode\_lite6

### 1. Introduction

Switch the mode of Lite6.

Button: Manual mode.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "switch_mode_lite6",
    "data": {
        "mode": 2,
        "version": "lite6",
        "status": 1
    },
    "id": "1"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="136">Name</th><th width="85">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>mode</td><td>int</td><td>No</td><td><p>0:position mode;</p><p>2:manual mode; </p><p>It is a required field if Studio ≤2.1.0</p></td></tr><tr><td>version</td><td>String</td><td>Yes</td><td>robot model, pass 'Lite6'</td></tr><tr><td>status</td><td>int</td><td>Yes</td><td><p>0: close manual mode; </p><p>1: open manual mode;</p></td></tr></tbody></table>
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
if current_tgpio == '' and value == 1:
    xarm.set_mode(mode, 1)
    if xarm.error_code == 0:
        xarm.set_state(0)
    self._xarm_sync()
elif current_tgpio != value:
    GLOBAL.XArm.lite6_ti2_status = value
    mode_param = (2, 1) if value == 1 else (0,)
    xarm.set_mode(*mode_param)
    if xarm.error_code == 0:
        xarm.set_state(0)
```

#### front\_end

```javascript
self.switch_mode_lite6 = (mode, callback) => {
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, {
    mode: mode,
    status: mode === 2 ? 1 : 0
  });
  self.sendCmd(window.GlobalConstant.SWITCH_MODE_LITE6, params, (dict) => {
    if (callback) {
      callback(dict);
    }
  });
};
```
