# xarm\_set\_cgpio\_analog

### value1. Introduction

Set Controller Analog Value&#x20;

Button: \[Blockly] - \[Controller IO] - Set AO

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
````json
```
{
    "cmd": "xarm_set_cgpio_analog",
    "data": {
        "ionum": 0,
        "value": 5
    },
    "id": "1"
}
```
````
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="120">Name</th><th width="79">Type</th><th width="135">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>ionum</td><td>int</td><td>Yes</td><td>AO0-AO1</td></tr><tr><td>value</td><td>Float</td><td>Yes</td><td>value(0-10V)</td></tr></tbody></table>
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
    return response(client, cmd_id, ret)
ionum = data.get('ionum')
value = data.get('value')
xyz = data.get('xyz')
tol_r = data.get('tol_r')
code = GLOBAL.XArm.xarm.set_cgpio_analog_with_xyz(ionum, value, xyz, tol_r)
response(client, cmd_id, code)
```

#### front\_end

```javascript
self.set_cgpio_analog = async (ionum, value, callback) => {
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, {
    ionum: ionum,
    value: value,
  });
  console.log('set_cgpio_analog params', params);
  const cmd_id = self.sendCmd(window.GlobalConstant.SET_CGPIO_ANALOG, params, (dict) => {
    self.codeHandle(dict, 'set cgpio analog', true);
    if (callback) {
      callback(dict);
    }
  });
  await self.socketCom.wait(cmd_id);
};
```
