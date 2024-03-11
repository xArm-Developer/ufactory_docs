# set\_tcp\_load\_offset\_configs

### 1. Introduction

Set the config of the tcp offset/payload.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
````json
```
{
    "cmd": "set_tcp_load_offset_configs",
    "data": {
        "tcp_load": {
            "disableEdit": false, 
            "id": "2de234a3ec34972658484198888", 
            "name": "new1", 
            "values": [0, 0, 0, 0]
        },
        "default_id": "2de234a3ec34972658484198888"
    },
    "id": "1"
}
```
````
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="129">Name</th><th width="79">Type</th><th width="146">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>tcp_offset</td><td>json</td><td>No</td><td></td></tr><tr><td>tcp_load</td><td>json</td><td>Yes</td><td></td></tr><tr><td>default_id</td><td>String</td><td>Yes</td><td></td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code;
```
{% endtab %}
{% endtabs %}

