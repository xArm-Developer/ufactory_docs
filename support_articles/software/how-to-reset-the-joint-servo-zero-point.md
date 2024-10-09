# How to reset the joint servo zero point?

Product: XF1304, XI1304, XS1304, UF 850

UFactory Studio: 2.4.0+



{% hint style="danger" %}
Please contact technical support<[support@ufactory.cc](mailto:support@ufactory.cc)>for confirmation before resetting; otherwise the warranty may be affected.
{% endhint %}



## Preparation

### Joint3-xArm6/xArm5

1. Move all the end effectors, and set TCP payload as 0.
2. Place the arm horizontally on the table like the image below(J3 around -175 degree), make sure J4J5J6 is suspended, and 1 person to hold the arm to make sure it will not move.

<figure><img src="../.gitbook/assets/image (60).png" alt=""><figcaption></figcaption></figure>

### Joint4-xArm7/UF850

1. Move all the end effectors, and set TCP payload as 0.
2. Move the arm back to zero position.

## Reset command

1. Press down the E stop button and release.
2. **Don't enable the robot**. Send H101D080CV1I\* via 'Settings-General-Debugging Tools-Joint', J\* will move slightly, you will hear a sound like 'click' and J\* don't move any more, indicating the reset process is over, then press down the E stop button and release.  (\* stands for joint ID, for example joint4 - H101D080CV1I4)
3. Reboot the entire system, and enable the robot.
4. Unlock Joint \* via 'Settings-General-Debugging Tools-Joint', move joint\* to its original zero position,  send 'D13 I\*', press down the E stop button and release to take effect, it will set the current position of Joint\* as 0°.

