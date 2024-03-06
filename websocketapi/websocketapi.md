---
description: UFactory Studio - Live Control page.
---

# Live Control

### 1. xarm\_move\_step

{% tabs %}
{% tab title="Message" %}
```json
{
    "cmd": "xarm_move_step",
    "data": {
        "isLoop": true,
        "direction": "joint-angle-increase",
        "isMoveTool": true,
        "acc": 500,
        "axis": 3
    },
    "id": "1"
}
```
{% endtab %}

{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="163">Name</th><th width="87">Type</th><th width="136">Must be filled</th><th>Description</th></tr></thead><tbody><tr><td>isloop</td><td>bool</td><td>yes</td><td>whether a long press or not</td></tr><tr><td>direction</td><td>String</td><td>yes</td><td>Direction of movement： 'position-x-increase’;'position-x-decrease’; ’position-y-increase’;’position-y-decrease’; ’position-z-increase’;’position-z-decrease’; ’attitude-roll-increase’;'attitude-roll-decrease'; ’attitude-pitch-increase’;'attitude-pitch-decrease'; 'attitude-yaw-increase';'attitude-yaw-decrease'; Change of Joint angle： 'joint-angle-increase';'joint-angle-decrease'; Aligning the Hand(for xArm5 only)： 'set-end-level' ;</td></tr><tr><td>isMoveTool</td><td>bool</td><td>yes</td><td>whether use Tool Coordinate or not(Base Coordinate by default)</td></tr><tr><td>isSetInitialPoint</td><td>bool</td><td>no</td><td>(Not Used)</td></tr></tbody></table>
{% endtab %}

{% tab title="Response" %}
<table data-full-width="true"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table>
{% endtab %}
{% endtabs %}

### 2. xarm\_move\_step\_over





### 3. xarm\_move\_joint

### 4. switch\_mode\_lite6

### 5. xarm\_urgent\_stop

### 6. xarm\_set\_simulation\_robot

### 7. xarm\_set\_speed

### 8. xarm\_set\_lite6\_gripper

### 9. xarm\_switch\_mode

### 10. xarm\_set\_bio\_gripper\_enable

### 11. xarm\_set\_gripper\_position

