# xarm\_set\_self\_collision\_detection

### 1. Introduction

Enable/Disable 'Self-collision Detection'.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
````json
```
{
    "cmd": "xarm_set_self_collision_detection",
    "data": {
        'on': True,    
        'save': True,
    },
    "id": "1"
}
```
````
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="114">Name</th><th width="79">Type</th><th width="146">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>save</td><td>bool</td><td>No</td><td></td></tr><tr><td>on</td><td>bool</td><td>Yes</td><td></td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code;
```
{% endtab %}
{% endtabs %}
