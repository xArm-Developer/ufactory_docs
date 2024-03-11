# xarm\_stop\_identification

### 1. Introduction

Stop the identification for the end effector.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
````json
```
{
    "cmd": "xarm_stop_identification",
    "data": {},
    "id": "1"
}
```
````
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="206">Name</th><th width="79">Type</th><th width="146">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>/</td><td></td><td></td><td></td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code;
```
{% endtab %}
{% endtabs %}

