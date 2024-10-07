# run\_blockly

### 1. Introduction

Initialize the parameter of the robot before running the Blockly project.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "run_blockly",
    "data": {
        "userId":"test",
        "version":"850",
        "category":"myapp",
        "appName":"/laohua"
    },
    "id": "1"
}

```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="123">Name</th><th width="79">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>userId</td><td>String</td><td>No</td><td>pass 'test' by default</td></tr><tr><td>version</td><td>String</td><td>No</td><td><p>robot model</p><p>lite6: Lite6</p><p>null: others</p></td></tr><tr><td>category</td><td>String</td><td>No</td><td>pass 'myapp' by default</td></tr><tr><td>appName</td><td>String</td><td>Yes</td><td>the name of Blockly project</td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code=-12 -> run failed
coe=-11 -> convert to python failed
code=-3 -> param error
code=3 -> initialization exception
```
{% endtab %}
{% endtabs %}

### 3. Code Example

#### background

```python
user_id = data.get('userId', 'test')
xarm_version = data.get('version', GLOBAL.XArm.xarm_type)
category = data.get('category', 'myapp')
app_name = data.get('appName', '')
app_name = convert_path(app_name)
path = os.path.join(projects_path, user_id, xarm_version, 'app', category, app_name)
check_is_pause = GLOBAL.XArm.xarm._arm._check_is_pause
check_cmdnum_limit = GLOBAL.XArm.xarm._arm._check_cmdnum_limit
try:
    GLOBAL.XArm.xarm._arm._check_is_pause = True
    GLOBAL.XArm.xarm._arm._check_cmdnum_limit = True
    logger.info('start run blockly')
    GLOBAL.Connect.blockly_task_client = client
    code = yield self._run_blockly(path, client, cmd_id)
    logger.info('run blockly finish, code={}'.format(code))
except:
    code = 1
finally:
    GLOBAL.XArm.xarm._arm._check_is_pause = check_is_pause
    GLOBAL.XArm.xarm._arm._check_cmdnum_limit = check_cmdnum_limit
    GLOBAL.Connect.blockly_task_client = None
if client:
    response(client, cmd_id, code)
else:
    return code
```

#### front\_end

```javascript
self.runBlockly = (name, callback) => {
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, {
    category: 'myapp', // 'myapp',
    appName: name,
  });
  window.GlobalUtil.model.localAppsMgr.taskId = self.sendCmd(window.GlobalConstant.RUN_BLOCKLY, params, (dict) => {
    if (callback) {
      callback(dict);
    }
  })
};
```
