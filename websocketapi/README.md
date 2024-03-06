---
description: WebsocketAPI is used for UFactory Studio software.
---

# WebSocket API

### Introduction

1. Communication Protocol

* _webSocket：ws://{ip}:18333/ws_
* _http/1.1：http://{ip}:18333_

2. Communication flow chart

* front\_end: UI-UFactory Studio
* Background:  encapsulate xArm-Python-SDK
* Controller
* Robot
* private\_tcp\_protocol: pc-to-controller
* private\_servo\_control\_protocol: controller-to-servo motor
* Externals：xArm gripper, xArm vacuum gripper, third-party devices,...

