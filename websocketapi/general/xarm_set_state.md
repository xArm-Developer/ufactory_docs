# xarm\_set\_state

### 1. Introduction

Set the robot state.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
````json
```
{
    "cmd": "xarm_set_state",
    "data": {
        "state": 0
    },
    "id": "1"
}
```
````
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="142">Name</th><th width="79">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>state</td><td>int</td><td>No</td><td><p>robot state. </p><p>0: motion state</p><p>3: pause state</p><p>4: stop state </p></td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code;
```
{% endtab %}
{% endtabs %}
