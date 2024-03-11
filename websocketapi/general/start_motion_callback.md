# start\_motion\_callback

### 1. Introduction

Open/Close the motion callback.

Mainly used for the continuous motion that needs to respond after the movement is finished.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
````json
```
{
    "cmd": "start_motion_callback",
    "data": {
        "is_open": false
    },
    "id": "callback_1"
}
```
````
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="142">Name</th><th width="79">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>is_open</td><td>bool</td><td>Yes</td><td><p>True: Open;</p><p>False: Close;</p></td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code;
```
{% endtab %}
{% endtabs %}

Compatible with: xarm\_move\_joint, xarm\_move\_arc\_line.

Data report: xarm\_motion\_is\_callback.

