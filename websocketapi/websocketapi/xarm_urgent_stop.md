# xarm\_urgent\_stop

### 1. Introduction

Emergency Stop,  set\_state(4).

Button: \[Stop]

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "xarm_urgent_stop",
    "id":"1"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="136">Name</th><th width="85">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Yes</td><td>Request ID</td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code;
```
{% endtab %}
{% endtabs %}

