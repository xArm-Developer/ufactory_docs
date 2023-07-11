# Robot specifications



{% tabs %}
{% tab title="xArm 5" %}
Maximum Speed: 180°/s

Working Range:

| Joint 1 | ±360°      |
| ------- | ---------- |
| Joint 2 | -118°～120° |
| Joint 3 | -225°～11°  |
| Joint 4 | -97°～180°  |
| Joint 5 | ±360°      |
{% endtab %}

{% tab title="xArm 6" %}
Maximum Speed: 180°/s

Working Range:

| Joint 1 | ±360°      |
| ------- | ---------- |
| Joint 2 | -118°～120° |
| Joint 3 | -225°～11°  |
| Joint 4 | ±360°      |
| Joint 5 | -97°～180°  |
| Joint 6 | ±360°      |
{% endtab %}

{% tab title="xArm 7" %}
Maximum Speed: 180°/s

Working Range:

| Joint 1 | ±360°      |
| ------- | ---------- |
| Joint 2 | -118°～120° |
| Joint 3 | ±360°      |
| Joint 4 | -11°～225°  |
| Joint 5 | ±360°      |
| Joint 6 | -97°～180°  |
| Joint 7 | ±360°      |
{% endtab %}

{% tab title="Lite 6" %}
Maximum Speed: 180°/s

Working Range:

| Joint 1 | ±360°      |
| ------- | ---------- |
| Joint 2 | ±150°      |
| Joint 3 | -3.5°～300° |
| Joint 4 | ±360°      |
| Joint 5 | ±124°      |
| Joint 6 | ±360°      |
{% endtab %}

{% tab title="850" %}
Maximum Speed: 180°/s

Working Range:

| Joint 1 | ±360°      |
| ------- | ---------- |
| Joint 2 | ±132°      |
| Joint 3 | -242°～3.5° |
| Joint 4 | ±360°      |
| Joint 5 | ±124°      |
| Joint 6 | ±360°      |
{% endtab %}
{% endtabs %}

**Range of various motion parameters of the robotic arm**

{% tabs %}
{% tab title="xArm5/6/7" %}
|              | TCP Motion    | Joint Motion |
| ------------ | ------------- | ------------ |
| Speed        | 0～1000mm/s    | 0～180°/s     |
| Acceleration | 0～50000mm/s²  | 0～1145°/s²   |
| Jerk         | 0～100000mm/s³ | 0～28647°/s³  |
{% endtab %}

{% tab title="Lite 6" %}
|              | TCP Motion    | Joint Motion |
| ------------ | ------------- | ------------ |
| Speed        | 0～500mm/s     | 0～180°/s     |
| Acceleration | 0～50000mm/s²  | 0～1145°/s²   |
| Jerk         | 0～100000mm/s³ | 0～28647°/s³  |
{% endtab %}

{% tab title="850" %}


|              | TCP Motion    | Joint Motion |
| ------------ | ------------- | ------------ |
| Speed        | 0～1000mm/s    | 0～180°/s     |
| Acceleration | 0～50000mm/s²  | 0～1145°/s²   |
| Jerk         | 0～100000mm/s³ | 0～28647°/s³  |
{% endtab %}
{% endtabs %}

Note:

1\. In the TCP motion (Cartesian space motion) commands (set\_position () function of the SDK), If a motion command involves both position transformation and attitude transformation, the attitude rotation speed is generally calculated automatically by the system. In this situation, the specified speed parameter is the maximum linear speed, range from: 0 ～ 1000mm / s.

2\. When the expected TCP motion only changes the attitude (roll, pitch, yaw), with position (x, y, z) remains unchanged, the specified speed is the attitude rotation speed, so the range 0 to 1000 corresponds to 0 to 180 ° / s.
