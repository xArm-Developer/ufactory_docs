# app\_create\_file

### 1. Introduction

Create a Blockly File.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "app_create_file",
    "data": {
        "userId": "test",
        "version": "lite6",
        "folderName": "test111",
        "xmlData": "<xml xmlns='https://developers.google.com/blockly/xml'><block type='set_angle_acceleration' id='TUM:^s#`fiBaLI=KXSG5' x='-602' y='-32'><field name='acceleration'>500</field></block></xml>"
    },
    "id": "1"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="142">Name</th><th width="79">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>userId</td><td>String</td><td>No</td><td>pass 'test' by default</td></tr><tr><td>version</td><td>String</td><td>No</td><td><p>robot model</p><p>lite6: Lite6</p><p>null: others</p></td></tr><tr><td>folderName</td><td>String</td><td>No</td><td>the name of the new folder</td></tr><tr><td>xmlData</td><td>String</td><td>Yes</td><td>xml data</td></tr></tbody></table>
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
file_name = data.get('folderName')
xml_data = data.get('xmlData')
folder_path = os.path.join(root_path, file_name)
code, _ = create_folder(root_path, folder_path)
code, _ = create_file(root_path, file_name, xml_data, xarm_version)
response(client, cmd_id, code, _)
```

#### front\_end

```javascript
self.appCreateFile = (obj, callback) => {
  const params = window.GlobalConstant.INIT_CMD_PARAMS_COMMON_DATA();
  Object.assign(params.data, obj);
  self.sendCmd(window.GlobalConstant.APP_CREATE_FILE, params, (dict) => {
    if (callback) {
      callback(dict);
    }
  });
};
```
