# get\_app\_xml\_data

### 1. Introduction

Get the xml Data of Blockly project.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "get_app_xml_data",
    "data": {
        "userId": "test",
        "version": "xarm6",
        "appName": "/test (2)"
    },
    "id": "1"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="123">Name</th><th width="79">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>userId</td><td>String</td><td>No</td><td>pass 'test' by default</td></tr><tr><td>version</td><td>String</td><td>No</td><td><p>robot model</p><p>lite6: Lite6</p><p>null: others</p></td></tr><tr><td>appName</td><td>String</td><td>Yes</td><td>the name of Blockly project</td></tr></tbody></table>
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
app_name = data.get('appName', '')
parent_path = convert_path(app_name)
prj_path = os.path.join(root_path, parent_path)
if prj_path.endswith('app.xml'):
    prj_path = prj_path.rstrip('app.xml')
if not os.path.exists(prj_path) or app_name == '/' or app_name == '':
    return response(client, id, 0, {'xmlData': ''})

if app_name is None:
    code, result_dir = get_app_config(root_path, xarm_version)
    last_app_name = result_dir['config']['selectFilePath'].lstrip('/')
    app_is_exist = os.path.exists(os.path.join(root_path, last_app_name))
    if not app_is_exist:
        uf_app_config = result_dir['children'][0]['children']
        for item in uf_app_config:
            if os.path.exists(os.path.join(root_path, item['name'])):
                last_app_name = item['uuid'].lstrip('/')
                app_is_exist = True
                break
    if app_is_exist:
        parent_path = convert_path(last_app_name)
        prj_path = os.path.join(root_path, parent_path)
        if prj_path.endswith('app.xml'):
            prj_path = prj_path.rstrip('app.xml')
file_path = os.path.join(prj_path, 'app.xml')
_, xml_data = read(file_path)
if os.path.exists(prj_path):
    try:
        with open(os.path.join(prj_path, '.app'), 'w', encoding='utf-8') as f:
            json.dump({
                'lastAccessTime': time.time(),
                'deviceType': xarm_version,
            }, f, sort_keys=True, indent=4, skipkeys=True, separators=(',', ':'), ensure_ascii=False)
    except:
        pass
return response(client, id, _, {'xmlData': xml_data})
```

#### front\_end

```javascript
self.getAppXmlData = data => new Promise((resolve, reject) => {
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, {
    category: data.category, // 'myapp',
    appName: data.name,
  });
  self.sendCmd('get_app_xml_data', params, (dict) => {
    if (dict.code === 0) {
      resolve(dict.data);
    }
    else {
      if (dict.code !== 10086) reject(dict);
    }
  })
})
```
