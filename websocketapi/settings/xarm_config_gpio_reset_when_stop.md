# xarm\_config\_gpio\_reset\_when\_stop

### 1. Introduction

Reset 'IO Ouput'  when the robot is stopped.

Button: \[Settings] - \[General] - \[Advanced Settings] - Clear the IO output when the robot is stopped.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
````json
```
{
    "cmd": "xarm_config_gpio_reset_when_stop",
    "data": {
        'save': True, 
        'cgpio': 0,
        'tgpio': 0
    },
    "id": "1"
}
```
````
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="114">Name</th><th width="79">Type</th><th width="146">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>save</td><td>bool</td><td>No</td><td></td></tr><tr><td>cgpio</td><td>int</td><td>Yes</td><td>Controller Output</td></tr><tr><td>tgpio</td><td>int</td><td>Yes</td><td>Tool Digital Output</td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code;
```
{% endtab %}
{% endtabs %}

<figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>
