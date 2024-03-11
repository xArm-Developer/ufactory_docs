# xarm\_set\_effector\_modbus\_rtu\_cmd

### 1. Introduction

Send Modbus RTU command.

Button: \[Settings] - \[Externals] - \[Modbus RTU] - Send.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
````json
```
{
    "cmd": "xarm_set_effector_modbus_rtu_cmd",
    "data": {
        "is_loop": false,
       "mdb_info": [
{"checked": true, "note": {"cn": "", "en": ""}, "delay": "1000", "cmd": "08 10 01 00 00 01 02 00 01"}
],
        "end_fmv": "2.6.0",
        "baudrate": 115200,
        "is_stop": true,
        "host_id": 9
    },
    "id": "1"
}
```
````
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="120">Name</th><th width="79">Type</th><th width="135">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>isloop</td><td>bool</td><td>No</td><td>whether to send Modbus commands cyclically. </td></tr><tr><td>mdb_info</td><td>Array</td><td>Yes</td><td><p>command information. For example: [{'checked': True, 'note': {'cn':'','en': ''},'delay':'','cmd':'00 01 00 02'}] </p><p>('checked'- whether check the format is correct or not；'note'-{'cn':'','en': ''}'delay'-delay time'cmd'-modbus command)</p></td></tr><tr><td>end_fmv</td><td>String</td><td>Yes</td><td>The firmware version of end IO board, e.g.‘2.5.9’</td></tr><tr><td>buadrate</td><td>int</td><td>Yes</td><td>modbus baud rate(4800-2500000)</td></tr><tr><td>is_stop</td><td>int</td><td>No</td><td>wheter to stop sending the command</td></tr><tr><td>host_id</td><td>int</td><td>Yes</td><td><p>Host ID. </p><p>11: linear motor</p><p>10: controller 485</p><p>9: tool end 485</p></td></tr></tbody></table>
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
if info_dic.get('checked', False):
    try:
        response(client, cmd_id, code=100)
        if cmd and is_run:
            cmd_li = re.sub(',', ' ', cmd)
            cmd_li = re.sub(' +', ' ', cmd_li)
            cmd_li = cmd_li.strip().split(' ')
            int_li = [int(da, 16) for da in cmd_li]
            send_time = ''.join(str(datetime.now())[11:23])
            host_id = data.get('host_id', 9)
            code, ret = GLOBAL.XArm.xarm.getset_tgpio_modbus_data(int_li, host_id=host_id)
            recv_time = ''.join(str(datetime.now())[11:23])
            if code == 0 and ret:
                recv = ''
                for da in ret:
                    re1 = hex(da)[2:]
                    if len(re1) == 1:
                        re1 = '0' + re1
                    recv = recv + ' ' + re1
                    recv = recv.upper()
                response(client, cmd_id, code,
                         {'recv': recv, 'send': cmd, 'send_time': send_time, 'recv_time': recv_time})
            else:
                return response(client, cmd_id, 1, {'send': cmd, })
    except Exception as e:
        logger.error(e)
        return response(client, cmd_id, 1, {'send': cmd, })
```

#### front\_end

```javascript
self.setEffectorModbusCmd = (data, callback, host_id) => {
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, data, {
    host_id: host_id,
  });
  self.sendCmd(window.GlobalConstant.SET_MODBUS_EFFECTOR_RTU_CMD, params, (dict) => {
    if (callback) {
      callback(dict);
    }
  });
} 
```
