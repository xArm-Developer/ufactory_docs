# xarm\_move\_circle

### 1. Introduction

Move circle.

Button: \[Blockly] - \[move circle] - Move.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "xarm_move_circle",
    "data": {
        "pose1": [250,50,200,0,0,0],
        "pose2": [250,-50,200,0,0,0],
        "percent": 100, 
        "module": true
    },
    "id": "1"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="105">Name</th><th width="79">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>pose1</td><td>String</td><td>Yes</td><td>The first position: [x(mm), y(mm), z(mm), roll(rad or °), pitch(rad or °), yaw(rad or °)]</td></tr><tr><td>pose2</td><td>String</td><td>Yes</td><td>The second position: [x(mm), y(mm), z(mm), roll(rad or °), pitch(rad or °), yaw(rad or °)]</td></tr><tr><td>percent</td><td>Float</td><td>Yes</td><td>1-100%; percent = center angle/360</td></tr><tr><td>module</td><td>String</td><td>No</td><td>whether Blockly project is running or not</td></tr></tbody></table>
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
module = data.get('module', '')
mode = GLOBAL.XArm.xarm.mode
if mode == 2 and module == 'blockly':
    return response(client, cmd_id, 105)
yield self._wait_until_not_pause()
pose1 = data.get('pose1')
pose2 = data.get('pose2')
percent = data.get('percent')
wait = data.get('wait', False)
mvvelo = data.get('F', data.get('f', None))
mvacc = data.get('Q', data.get('q', None))
mvtime = data.get('T', data.get('t', None))
if isinstance(mvvelo, str):
    mvvelo = float(mvvelo)
if isinstance(mvacc, str):
    mvacc = float(mvacc)
if isinstance(mvtime, str):
    mvtime = float(mvtime)
mvvelo = None
mvacc = None
mvtime = 0

if GLOBAL.XArm.xarm.error_code != 0:
    code = -1
else:
    ret = yield self._wait_until_cmdnum_lt_max()
    if ret is not None:
        return response(client, cmd_id, ret)
    GLOBAL.XArm.xarm_printed = True
    self.last_move_client = client
    code = GLOBAL.XArm.xarm.move_circle(pose1=pose1, pose2=pose2, percent=percent,
                                        speed=mvvelo, mvacc=mvacc, mvtime=mvtime, wait=False)
    if code in [0, XCONF.UxbusState.ERR_CODE, XCONF.UxbusState.WAR_CODE] and wait:
        before_wait = time.monotonic()
        code = yield self._wait_move()
        logger.info('WaitMove -> code={} -> waiting_time={} -> state={}'.format(
            code, time.monotonic() - before_wait, GLOBAL.XArm.xarm.state
        ))
        self._xarm_sync()
    GLOBAL.XArm.xarm_printed = False
response(client, cmd_id, code)
```

#### front\_end

```javascript
self.moveCircle = (pose1, pose2, percent, wait, callback, isControl, module) => {
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, {
    pose1: pose1,
    pose2: pose2,
    percent: percent / 360 * 100,
    wait: wait === true ? true : false,
    module: module,
  });
  self.sendCmd(window.GlobalConstant.MOVE_CIRCLE, params, (dict) => {
    self.codeHandle(dict, 'move circle', isControl !== true);
    if (callback) {
      callback(dict);
    }
  });
};
```
