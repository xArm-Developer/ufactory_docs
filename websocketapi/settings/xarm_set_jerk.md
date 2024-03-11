# xarm\_set\_jerk

### 1. Introduction

Set TCP/Joint acceleration.

### 2. Request & Response

{% tabs %}
{% tab title="Message" %}
````json
```
{
    "cmd": "xarm_set_jerk",
    "data": {
        'jointJerk': 12979,
        'tcpJerk': 44445
    },
    "id": "1"
}
```
````
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="114">Name</th><th width="79">Type</th><th width="146">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>jointJerk</td><td>int</td><td>Yes</td><td>value: 6~28647</td></tr><tr><td>tcpJerk</td><td>int</td><td>Yes</td><td>value: 1~100000</td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
```
code=0->success;
code!=0->Failed, refer to xarm_api_code;
```
{% endtab %}
{% endtabs %}

<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>
