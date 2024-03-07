# xarm\_switch\_mode

### 1. Introduction

Switch the mode of xArm model.

Button: Manual mode.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "xarm_switch_mode",
    "data": {
        "mode": 2
    },
    "id": "1"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="136">Name</th><th width="85">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>mode</td><td>int</td><td>Yes</td><td><p>0: position mode;</p><p>2: manual mode</p></td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code;
```
{% endtab %}
{% endtabs %}

