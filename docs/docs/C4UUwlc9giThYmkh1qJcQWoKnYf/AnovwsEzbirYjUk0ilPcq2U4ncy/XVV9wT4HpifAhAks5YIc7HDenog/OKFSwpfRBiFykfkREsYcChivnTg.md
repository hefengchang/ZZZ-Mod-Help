---
title: 如何使用在Steam中运行mod
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\XVV9wT4HpifAhAks5YIc7HDenog\OKFSwpfRBiFykfkREsYcChivnTg
sidebar_position: 3
---


# 如何使用在Steam中运行mod

1. 打开XXMI/ZZMI，将游戏路径修改为您的Steam安装文件夹（或者使用自动检测按钮来选择游戏路径），将启动方式改为manual手动启动（也可以不改），然后关闭启动器。
2. 关闭DX12选项。
3. 在Steam中，右键点击该游戏，进入“属性”，并在“启动选项”框中粘贴以下命令：

```haskell
"C:\Users\YOUR_USERNAME_HERE\AppData\Roaming\XXMI Launcher\Resources\Bin\XXMI Launcher.exe" --nogui --xxmi ZZMI %COMMAND%
```

<em>（注意：别忘了将</em> `YOUR_USERNAME_HERE` <em>替换为您的实际Windows用户名！)</em>

- 在所链接的解决方案中，假设 XXMI 启动程序已安装在默认位置。如果未安装，请找到您的 XXMI Launcher .exe 文件的实际路径。将引号中的内容替换为您自己的路径。

相关解决方案https://gamebanana.com/questions/105508

### 实例：

<img src="/assets/MaCLbAyeyoDWmix5IJRcnn05nUe.png" src-width="1280" src-height="720" align="center"/>

<img src="/assets/AocZbaYJXocucKxcBuRcx0z0n4b.png" src-width="1280" src-height="720" align="center"/>

<img src="/assets/M9VBbDdDDoaUqyxwbWJcmQlan2d.png" src-width="1280" src-height="726" align="center"/>

请勿在启动选项中添加代码，不然无法打开启动器界面。

<img src="/assets/S4CSbZRoBoE4G3xCXfXcAmxgnmg.png" src-width="1282" src-height="721" align="center"/>

关闭启动器界面后继续。

<img src="/assets/GnIgbdGf7oD64zxG8r6cFc1Wn9c.png" src-width="1280" src-height="734" align="center"/>

<img src="/assets/L5nmbplEFotCqRxANktcHd6JnRh.png" src-width="1280" src-height="750" align="center"/>

找到XXMI安装的实际路径，有两种方法：

1.找到XXMI Launcher的快捷方式图标，右键--属性--目标。

<img src="/assets/YaMwbZuGdoGBIHxbHNSc77BLnBb.png" src-width="421" src-height="673" align="center"/>

2.直接进入XXMI的根目录，找到XXMI Launcher.exe图标，按住shift+右键，即可看到复制文件地址选项。

<img src="/assets/AZAdbB0mrouJ11xh4LDcigpJnNO.png" src-width="851" src-height="627" align="center"/>

在启动选项中粘贴命令，然后将引号中的地址替换，注意引号不要重复。

```haskell
"C:\Users\YOUR_USERNAME_HERE\AppData\Roaming\XXMI Launcher\Resources\Bin\XXMI Launcher.exe" --nogui --xxmi ZZMI %COMMAND%
```

<img src="/assets/ZFXbbRK3koJ8umxdr45c4UF9nXg.png" src-width="1268" src-height="582" align="center"/>

点击开始游戏，如果登录成功并且左上角显示绿色字体则mod成功运行。

