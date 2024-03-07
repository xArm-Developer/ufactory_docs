# get\_tcp\_offset\_load\_config

### 1. Introduction

Get the config of the tcp offset/payload.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
````json
```
{
    "cmd": "get_tcp_offset_load_config",
    "data": {},
    "id": "get_tcp_OL_config"
}
```
````
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="142">Name</th><th width="79">Type</th><th width="135">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>/</td><td></td><td></td><td></td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code;
```
{% endtab %}
{% endtabs %}

