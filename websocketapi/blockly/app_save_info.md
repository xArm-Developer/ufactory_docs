# app\_save\_info

### 1. Introduction

Save/delete the Blockly project/directory.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "app_save_info",
    "id": "1",
    "data": {
        "config": {
            "selectFilePath": "/uu12",
            "expendKeys": [
                "/[D]UF_APPS",
                "/[D]USER_APPS",
                "/[D]4443"
            ],
            "name": "myapp",
            "deviceType": "xarm6",
            "lastAccessTime": 1708595735.970664
        },
        "userId": "test",
        "version": "lite6",
        "children": [
            {
                "uuid": "/[D]UF_APPS",
                "children": [
                    {
                        "uuid": "/[UF]-1001_Joint_Motion",
                        "name": "[UF]-1001_Joint_Motion",
                        "copy": "elTreeModel:/[D]UF_APPS/[UF]-1001_Joint_Motion",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/[UF]-1002_Continuous_Joint_Motion",
                        "name": "[UF]-1002_Continuous_Joint_Motion",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/[UF]-1003_Linear_Motion",
                        "name": "[UF]-1003_Linear_Motion",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/[UF]-1004_Continuous_Linear_Motion",
                        "name": "[UF]-1004_Continuous_Linear_Motion",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/[UF]-1005_DrawCricle",
                        "name": "[UF]-1005_DrawCricle",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/[UF]-1006_Lite6_Gripper",
                        "name": "[UF]-1006_Lite6_Gripper",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/[UF]-1007_Lite6_Vacuum_Gripper",
                        "name": "[UF]-1007_Lite6_Vacuum_Gripper",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/[UF]-1008_Digital_IO",
                        "name": "[UF]-1008_Digital_IO",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/[UF]-1009_MultipleIOs_funtion",
                        "name": "[UF]-1009_MultipleIOs_funtion",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/[UF]-1009_MultipleIOs_funtion_1",
                        "name": "[UF]-1009_MultipleIOs_funtion_1",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/[UF]-1009_MultipleIOs_funtion_2",
                        "name": "[UF]-1009_MultipleIOs_funtion_2",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/[UF]-1009_MultipleIOs_funtion_2_1",
                        "name": "[UF]-1009_MultipleIOs_funtion_2_1",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/[UF]-1009_MultipleIOs_funtion_2_1_1",
                        "name": "[UF]-1009_MultipleIOs_funtion_2_1_1",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/[UF]-1009_MultipleIOs_funtion_2_2",
                        "name": "[UF]-1009_MultipleIOs_funtion_2_2",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/[UF]-1009_MultipleIOs_funtion_2_2_1",
                        "name": "[UF]-1009_MultipleIOs_funtion_2_2_1",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/[UF]-1009_MultipleIOs_funtion_2_2_1_1",
                        "name": "[UF]-1009_MultipleIOs_funtion_2_2_1_1",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/[UF]-1009_MultipleIOs_funtion_2_2_1_2",
                        "name": "[UF]-1009_MultipleIOs_funtion_2_2_1_2",
                        "type": "file",
                        "children": []
                    }
                ],
                "type": "dir",
                "name": "UF_APPS"
            },
            {
                "uuid": "/[D]USER_APPS",
                "children": [
                    {
                        "uuid": "/001",
                        "name": "001",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/001_1",
                        "name": "001_1",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/55",
                        "name": "55",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/cs",
                        "name": "cs",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/uu12",
                        "name": "uu12",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/uu12_1",
                        "name": "uu12_1",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/55_1",
                        "name": "55_1",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/cs_1",
                        "name": "cs_1",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/55_2",
                        "name": "55_2",
                        "type": "file",
                        "children": []
                    }
                ],
                "type": "dir",
                "name": "USER_APPS"
            },
            {
                "uuid": "/[D]4443",
                "name": "4443",
                "type": "dir",
                "children": [
                    {
                        "uuid": "/uu12_2",
                        "name": "uu12_2",
                        "type": "file",
                        "children": []
                    },
                    {
                        "uuid": "/232",
                        "name": "232",
                        "type": "file",
                        "children": []
                    }
                ]
            }
        ]
    }
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="123">Name</th><th width="79">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>userId</td><td>String</td><td>No</td><td>pass 'test' by default</td></tr><tr><td>version</td><td>String</td><td>No</td><td><p>robot model</p><p>lite6: Lite6</p><p>null: others</p></td></tr><tr><td>config</td><td>Json</td><td>No</td><td><p>Directory information. </p><p>For example：{'selectFilePath':'/4545','expendKeys'['/[D]5125'],'lastAccessTime':1677486596.026057, 'deviceType':'xarm6','name':'myapp'}</p></td></tr><tr><td>children</td><td>Json</td><td>No</td><td><p>All files: </p><p>[{'type':'dir','name':'12312', 'children': [{'type':'file','name':'342445','children': [],'uuid': '/342445'}],'uuid': '/[D]12312'}]</p><p>name: file name; children: project; type: file type</p></td></tr></tbody></table>
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
code, _ = save_app_config(root_path, data, xarm_version)
response(client, cmd_id, code, _)
```

#### front\_end

```javascript
self.saveInfo = (selectCurPath, callback) => {
  if (selectCurPath !== undefined) {
    self.curProjTree.config.selectFilePath = selectCurPath;
  }
  self.curProjTree.config.expendKeys = self.curProjExpandedKeys;
  const expendKeys = [];
  if (self.curProjTree.children) {
    for (let i = 0; i < self.curProjTree.children.length; i++) {
      if (self.curProjExpandedKeys.includes(self.curProjTree.children[i].uuid)) {
        expendKeys.push(self.curProjTree.children[i].uuid);
      }
    }
  }
  self.curProjExpandedKeys = expendKeys;
  self.curProjTree.config.expendKeys = expendKeys;
  const params = self.curProjTree;
  self.sendCmd(window.GlobalConstant.APP_SAVE_INFO, params, (dict) => {
    if (dict.code === 0) {
      if (callback !== undefined && callback !== null) {
        callback();
      }
    };
  });
};
```
