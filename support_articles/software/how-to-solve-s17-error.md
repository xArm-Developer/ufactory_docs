---
description: 'S17: Single-turn Encoder Error'
---

# How to solve S17 error?

Product: xArm series, UF 850, Lite6

UFactory version: V2.4.0+



* [x] If you haven't used the arm for a long time(≥3 months) and encounter S17 error, please follow the steps below to clear it.
* [ ] If you encounter S17 error when you receive the arm,  please take a screenshot of the error page and contact [support@ufactory.cc](mailto:support@ufactory.cc)



### **Status code=16**

Code:S17  , Joint ID: \*(can be 1\~7)   , status code:16

1. press down the E-stop button and then release.
2. Enter 'Settings-General-Debugging Tools-Joing', send 'H101 D0104 V1 I\*' to unlock joint\*, manually move joint\* a little bit, and then send 'H101D0813V2I\*', press down E-stop button. (This step will reset the zero position, so you need to mark the original position of joint\* before moving)
3. release the E-stop button, move Joint\* to the original position, send 'D13 I\*', press down E-stop button.
4. Try to enable the robot again.
