---
title: 切换设备高低显方法
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\NIgVwUD9hitvxKkbdlOcNQ65nve\EWBywhg3EiJicPkGxZWc7PibnYd
sidebar_position: 0
---


# 切换设备高低显方法

由于绝区零对高显存和低显存的设备分别使用2K和1K分辨率的贴图，所以我们做mod时经常遇到高低显不兼容的情况，本分享一种方法来获取另一套分辨率的贴图hash值，比如使用高显设备获取低显贴图hash值，反之亦然。

---

1. 首先在桌面按下Win+R快捷键，打开regedit

<img src="/assets/B7Dwb1FY1opZBAxS4yHcCR8ynpU.png" src-width="399" src-height="230" align="center"/>

1. 然后找到如下路径：

计算机\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\PCI\

<img src="/assets/NBscbGnhgo077KxevbgcpVVEnqd.png" src-width="1092" src-height="638" align="center"/>

1. 展开“PCI”文件夹后，会看到如VEN_XXX名称的文件夹，N卡设备以10DE开头，A卡设备以1002开头，然后点击下面的4&XX子项，会在右侧看到名称为DeviceDesc的数据，数据值中就包含你的显卡信息:

<img src="/assets/Ix55b5QwdoNxPxx65ruc4eXYngf.png" src-width="1313" src-height="632" align="center"/>

如果有多个符合条件的VEN_XXX文件夹，可以都展开看一下，确保DeviceDesc数据中是你的显卡型号，比如我这里另一个VEN_10DE下面的DeviceDesc数据就是声卡而不是显卡。

1. 找到要改的DeviceDesc数据后双击即可进行编辑，先将原始数据复制下来保存备用，方便之后再改回来。

<img src="/assets/SfAXbTXqYoNxjrxH0dHckPMnnXc.png" src-width="443" src-height="211" align="center"/>

然后再进行修改，你会发现在你的显卡型号前面还有一串类似“@oemxx.inf,%xxx%”的数据，这部分不用改，只需要改后面的显卡型号即可。

1. 如果是高改低，建议改为“NVIDIA GeForce GTX 1050”

<img src="/assets/BIHobACEZoDgglxTJ1xcJHlQnFd.png" src-width="443" src-height="211" align="center"/>

如果是低改高，建议改为“NVIDIA GeForce GTX 1660”

<img src="/assets/Do3JbtzBPopLMNxTuc4ccleSnyf.png" src-width="443" src-height="211" align="center"/>

