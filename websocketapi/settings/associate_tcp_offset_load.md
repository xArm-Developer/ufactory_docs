# associate\_tcp\_offset\_load

### 1. Introduction

Bind tcp payload and offset.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
````json
```
{
    "cmd": "associate_tcp_offset_load",
    "data": {
        "tcp_offset_id":"2de2381ed7141587911361387775",
        "tcp_load_id":"2de2381ed7141587911361123335"
    },
    "id": "1"
}
```
````
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="151">Name</th><th width="79">Type</th><th width="146">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>tcp_offset_id</td><td>String</td><td>Yes</td><td></td></tr><tr><td>tcp_load_id</td><td>String</td><td>Yes</td><td></td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code;
```
{% endtab %}
{% endtabs %}

