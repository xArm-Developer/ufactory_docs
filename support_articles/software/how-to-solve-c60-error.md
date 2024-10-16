---
description: 'C60: Linear speed exeed limit in ServoJ mode.'
---

# How to solve C60 error?

Firmware: V2.3.0+

UFactory Studio: V2.3.0+



For safety reasons, we give a TCP speed limit under ServoJ mode even for joint motion, the limit is 1200mm/s for xArm series and UF850, and 500mm/s for Lite6.



When the arm works at extended reach, the TCP speed can easily exceed the threshold. Therefore, we increase this threshold and provide a parameter to set the limit by themselves, please modify it carefully after safety evaluation.



* set\_linear\_spd\_limit\_factor
* get\_linear\_spd\_limit\_factor

1. factor\*1000 = TCP speed limit, the default value is 1.2.
2. 1.2\*1000=1200mm/s for xArm/UF850,  1.2\*500=600mm/s for Lite6
3. call save\_conf() to save this config after calling set\_linear\_spd\_limit\_factor.



```python
def set_linear_spd_limit_factor(self, factor):
Set linear speed limit factor (default is 1.2)
Note:
    1. only available if firmware_version >= 2.3.0
    2. only available in mode 1

:param factor: speed limit factor
:return: code
    code: See the API Code Documentation for details.


def get_linear_spd_limit_factor(self):
Get linear speed limit factor
Note:
    Only available if firmware_version >= 2.3.0

:return: tuple((code, factor)), only when code is 0, the returned result is correct.
    code: See the API Code Documentation for details.
    factor: linear speed limit factor
```



