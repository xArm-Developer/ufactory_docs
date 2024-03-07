# xarm\_set\_bio\_gripper\_enable

### 1. Introduction

Enable bio gripper.

Button: \[Live Control] - \[End Effector] - \[Bio Gripper]- Enable.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "xarm_set_bio_gripper_enable",
    "data": {
        "enable": true
    },
    "id": "1"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="136">Name</th><th width="85">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>enable</td><td>bool</td><td>Yes</td><td><p>True: Enable;</p><p>False: Disable;</p></td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code;
```
{% endtab %}
{% endtabs %}

