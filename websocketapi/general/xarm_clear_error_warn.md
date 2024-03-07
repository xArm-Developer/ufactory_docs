# xarm\_clear\_error\_warn

### 1. Introduction

Button: \[Clean error], \[Enable]

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
````json
```
{
    "cmd": "xarm_clear_error_warn",
    "data": {
        "mode":0
    },
    "id": "1"
}
```
````
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="142">Name</th><th width="79">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>mode</td><td>int</td><td>No</td><td>robot mode. 0-position mode</td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code;
```
{% endtab %}
{% endtabs %}
