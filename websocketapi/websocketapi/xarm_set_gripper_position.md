# xarm\_set\_gripper\_position

### 1. Introduction

Button: \[Live Control] - \[End Effector] - \[xArm Gripper]- position.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "xarm_set_gripper_position",
    "data": {
        "enable": true,
        "pos": "400",
        "wait": false,
        "speed": 3000
    },
    "id": "1"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="136">Name</th><th width="85">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>enable</td><td>bool</td><td>Yes</td><td><p>True: Enable;</p><p>False: Disable;</p></td></tr><tr><td>pos</td><td>String</td><td>Yes</td><td>the position of xArm Gripper</td></tr><tr><td>wait</td><td>bool</td><td>Yes</td><td>wait or not</td></tr><tr><td>speed </td><td>int</td><td>Yes</td><td>speed</td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code;
```
{% endtab %}
{% endtabs %}

