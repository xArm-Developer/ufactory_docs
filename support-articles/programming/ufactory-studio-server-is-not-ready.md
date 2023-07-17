---
description: A guidance to solve the issue of UFACTORY Studio "Server is not ready".
---

# UFACTORY Studio "Server is not ready"

Problem explanation

● “Server is not ready” means that the client cannot access the server.

● UFACTORY Studio is divided into server and client.

Client:

UFACTORY xArm Studio Client is installed on the user's computer. The client is the same as that of the browser, so you can use the browser instead of the client, and use port 18333 to access it. For example, if the IP is 192.168.1.222, enter 192.168.1.222:18333 in the browser to access _UFACTORY_ xArm Studio.

Server:

UFACTORY Studio Server is installed and running in the UFACTORY xArm control box. Before the UFACTORY robots leaves the factory, UFACTORY Studio has been installed in the control box, so users do not need to install it by themselves.

\* Note:

It takes 1-2 minutes to boot the firmware and xArmStudio. After each reboot, please wait for 1-2 minutes before connecting.

Troubleshoot the problem step by step:

Step 1, Check if the power state indicator and LAN port indicator are normal.

Power indicator: one light is always on and the other one is blinking.

LAN indicator: blinking.

\--- If yes, jump to step 2.

\--- If not, check if all cables were properly connected. Try to reboot the entire the whole system or change the cable, jump to step 4.

Step 2, Check if the IP address of the PC is in the same network segment as the IP address of the control box.

\--- If yes, jump to step 3.

\--- If not, please refer to the Appendix to modify the IP and then jump to step 3.

Step 3, Check if the PC can ping the IP of the control box successfully.

\--- If yes, jump to step 4.

\--- If not, please use xArm Tool GUI to check if xArmStudio starts normally. If yes, jump to step 4. If not, please use the GUI tool to offline install xArmStudio/firmware, and then jump to step 3 again.

Step 4, If there are still some problems, please contact technical support team and let them know it is stuck in which step, provide the SN of robot if possible.

Appendix

● For the installation package of UFACTORY xArm Tool GUI and the installation method of UFACTORY xArm Studio, please check the link:

● For the method of configuring IP, please check the user manual

● Please contact technical support by email: [support@ufactory.cc](mailto:Support@ufactory.cc)
