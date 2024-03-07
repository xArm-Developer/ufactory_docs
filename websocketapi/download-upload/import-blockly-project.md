# Import Blockly project

### 1. Introduction

Import the Blockly project.

### 2. Request & Response

{% tabs %}
{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="96">Name</th><th width="85">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>path</td><td>String</td><td>Yes</td><td>Path to upload to the Blockly folder</td></tr><tr><td>data</td><td>Json</td><td>Yes</td><td>Blockly information： {"type":"dir","name":"test_1","uuid":"/[D]test_1"}</td></tr><tr><td>File</td><td>Binary</td><td>Yes</td><td>Binary data of file</td></tr></tbody></table>
{% endtab %}
{% endtabs %}

### 3. Code Example

#### background:

```python
self.set_header("Access-Control-Allow-Origin", "*")
self.set_header("Access-Control-Allow-Headers", "x-requested-with")
self.set_header('Access-Control-Allow-Methods', 'POST')
path = self.request.arguments.get('path')[0].decode()

path = os.path.join(projects_path, path)
file_metas = self.request.files.get('file', None)  # 提取表单中'name'为'file'的文件元数据
if file_metas:
    success = 0
    for meta in file_metas:
        filename = meta['filename']

        if filename.endswith(('.gz', '.xml')):
            file_path = os.path.join(upload_temp_path, filename.strip())
            if not os.path.exists(upload_temp_path):
                os.makedirs(upload_temp_path)
            with open(file_path, 'wb') as up:
                up.write(meta['body'])
            if not os.path.getsize(file_path):
                return -3
            if filename.endswith('.gz'):
                name = filename.split('.')[0]
                if name.startswith('blockly-'):
                    name = name.split('blockly-')[-1]
                name = name if name else 'tmp'
                extract_path = os.path.join(upload_temp_path, name.strip())
                shutil.unpack_archive(file_path, extract_path, 'gztar')
                blockly_traj_path = os.path.join(extract_path, 'traj')
                if os.path.exists(blockly_traj_path):
                    yield GLOBAL.Core.command.xarm_upload_traj(
                        None, 0, {'path': extract_path, 'is_del_upload_path': False})

                return update_config(path, extract_path, select_data, name)
        else:
            if select_data and isinstance(select_data, dict):
                select_uuid = select_data.get('uuid')
                if select_uuid == '/[D]UF_APPS':
                    select_uuid = '/[D]USER_APPS'
            else:
                select_uuid = '/[D]USER_APPS'

            name = filename.split('.')[0]
            cnt = 0
            new_name = name
            if new_name.startswith('[UF]'):
                new_name = 'UF{}'.format(name[4:])
            while os.path.exists(os.path.join(path, new_name)):
                cnt += 1
                new_name = '{}_{}'.format(name, cnt)
            target_path = os.path.join(path, new_name)
            os.makedirs(target_path)
            shutil.copy(file_path, os.path.join(target_path, 'app.xml'))
            success += 1
            if not os.path.exists(os.path.join(target_path, '.app')):
                with open(os.path.join(target_path, '.app'), 'w', encoding='utf-8') as f:
                    json.dump({
                        'lastAccessTime': 0,
                        'deviceType': GLOBAL.XArm.xarm_type,
                    }, f, sort_keys=True, indent=4, skipkeys=True, separators=(',', ':'),
                        ensure_ascii=False)

            app_config_path = os.path.join(path, '.app_config')
            if os.path.exists(app_config_path):
                with open(app_config_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                children = data.get('children', [])
                for child in children:
                    if child['type'] == 'dir' and child['uuid'] == select_uuid:
                        child['children'].append({
                            'uuid': '/' + new_name,
                            'name': new_name,
                            'type': 'file',
                            'children': [],
                        })
                        break

                with open(app_config_path, 'w', encoding='utf-8') as f:
                    json.dump(data, f, sort_keys=True, indent=4, skipkeys=True,
                              separators=(',', ':'), ensure_ascii=False)

        shutil.rmtree(upload_temp_path)
        os.makedirs(upload_temp_path)
    self.write(json.dumps({'result': 'ok', 'success': success}))
else:
    self.write(json.dumps({'result': 'Invalid Args', 'success': -2}))
```

#### front\_end:

```javascript
 <el-upload :disabled="isRunning" multiple class="app-uploader com-edit-btn" :data="uploadData" :action="`http://${window.GlobalUtil.socketInfo.host}/project/upload`"
                    :show-file-list="false" :on-success="handleUploadProjectSuccess" :before-upload="beforeUploadProject">
                    <img :disabled="isRunning" @click="onUpload" src="../assets/img/blockly/upload-icon2.svg" />
                  </el-upload>
```

