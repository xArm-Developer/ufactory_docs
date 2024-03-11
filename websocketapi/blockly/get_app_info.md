# get\_app\_info

### 1. Introduction

Get Blockly project directory information.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "get_app_info",
    "data": {
        "userId": "test",
        "version": "lite6"
    },
    "id": "1"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="123">Name</th><th width="79">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>userId</td><td>String</td><td>No</td><td>pass 'test' by default</td></tr><tr><td>version</td><td>String</td><td>No</td><td><p>robot model</p><p>lite6: Lite6</p><p>null: others</p></td></tr></tbody></table>
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
user_id = data.get('userId', 'test')
xarm_version = data.get('version', GLOBAL.XArm.xarm_type)
root_path = os.path.join(projects_path, user_id, xarm_version, 'app', 'myapp')
if not os.path.exists(root_path):
    os.makedirs(root_path)
code, result_dir = get_app_config(root_path, xarm_version)
select_file_path = result_dir['config']['selectFilePath']
if not os.path.exists(os.path.join(root_path, select_file_path.lstrip('/'))):
    result_dir['config']['selectFilePath'] = '/untitled'
    uf_app_config = result_dir['children'][0]['children']
    for item in uf_app_config:
        if os.path.exists(os.path.join(root_path, item['name'])):
            result_dir['config']['selectFilePath'] = item['uuid']
            break
response(client, cmd_id, code, data=result_dir)
```

#### front\_end

```javascript
self.getAppInfo = (callback) => {
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  // Object.assign(params.data, {
  //   folderName: folderName,
  // });
  self.sendCmd(window.GlobalConstant.APP_GET_INFO, params, (dict) => {
    if (callback) {
	 callback(dict);
    }
  });
};
```
