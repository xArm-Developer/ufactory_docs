# xarm\_start\_identification

### 1. Introduction

Do the identification for the end effector.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
````json
```
{
    "cmd": "xarm_start_identification",
    "data": {
        "estimated_mass": "", 
        "is_ft": false
    },
    "id": "1"
}
```
````
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="206">Name</th><th width="79">Type</th><th width="146">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>estimated_mass</td><td>Float</td><td>No</td><td></td></tr><tr><td>is_ft</td><td>Bool</td><td>Yes</td><td>whether using FT sensor or not</td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code;
```
{% endtab %}
{% endtabs %}

