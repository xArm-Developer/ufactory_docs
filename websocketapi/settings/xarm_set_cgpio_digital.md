# xarm\_set\_cgpio\_digital

### 1. Introduction

Set Controller Digital Output to low/high level.

Button: \[Blockly]- \[Controller IO]-Set CO

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
````json
```
{
    "cmd": "xarm_set_cgpio_digital",
    "data": {
        "ionum": 0,
        "value": 1,
        "delay": 0
    },
    "id": "1"
}
```
````
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="120">Name</th><th width="79">Type</th><th width="135">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>ionum</td><td>int</td><td>Yes</td><td>CO0-CO7</td></tr><tr><td>value</td><td>int</td><td>Yes</td><td><p>0: low level; </p><p>1: high level;</p></td></tr><tr><td>delay</td><td>int</td><td>No</td><td><p>delay time; </p><p>0: set it immediately</p></td></tr></tbody></table>
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
value = int(data.get('value'))
xyz = data.get('xyz')
tol_r = data.get('tol_r')
code = GLOBAL.XArm.xarm.set_cgpio_digital_with_xyz(ionum, value, xyz, tol_r)
response(client, cmd_id, code)
```

#### front\_end

```javascript
self.set_cgpio_digital = async (ionum, value, callback, delay) => {
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, {
    ionum: ionum,
    value: value,
    delay: (delay !== undefined && delay > 0) ? delay : 0
  });
  console.log('set_cgpio_digital params', params);
  const cmd_id = self.sendCmd(window.GlobalConstant.SET_CGPIO_DIGITAL, params, (dict) => {
    self.codeHandle(dict, 'set cgpio digital', true);
    if (callback) {
      callback(dict);
    }
  });
  await self.socketCom.wait(cmd_id);
};
```
