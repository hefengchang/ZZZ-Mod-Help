---
title: 隐藏特效/头发阴影 - 以月城柳大招镜片为例
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\NIgVwUD9hitvxKkbdlOcNQ65nve\HQkDwjWVYiSiX2k2f3Fch8lonNc
sidebar_position: 6
---


# 隐藏特效/头发阴影 - 以月城柳大招镜片为例

## 概述

此教程介绍了去除角色的某些特效或者头发阴影的方法。

一般来说，只需要找到用来绘制此特效的PS或VS（着色器）的hash值，然后skip掉即可，但这种方法很可能导致一些其他的东西也同时被隐藏掉，所以很建议加上角色活动状态的条件判断。

由于角色头发的阴影一般也具有单独的IB，所以也可以使用IB的hash值进行隐藏，但建议使用ib = null的写法来代替直接使用handling = skip，这样可能避免一些问题，不过仍旧建议尽量再加上角色活动状态的条件判断，这样更加保险。

另外，某些特效并不受单独的着色器控制，所以并不能用简单的PS或VS的hash值来隐藏，（比如此文的例子，月城柳的大招镜片反光效果），这时就需要使用dump去寻找与此特效相关的贴图文件，使用贴图的hash来进行隐藏。

---

## Hunting介绍

首先，一切的前提是你会找hash值，也就是你的mod加载器有hunting功能（绿字界面），并且你会用。

XXMI启动器点击右上角齿轮图标打开设置，然后在这里打开：

<img src="/assets/K4ypbmNsAocKSzxWMnYc6a4XnTe.png" src-width="536" src-height="298" align="center"/>

如果是其他加载器，打开加载器路径下的d3dx.ini文件，搜索“hunting”，

将hunting=后面的值改为2：

<img src="/assets/Xh2ZbDLMooOwSfx1b2KctoXNnUf.png" src-width="532" src-height="252" align="center"/>

然后重新启动加载器进入游戏，按小键盘0即可打开hunting模式：

<img src="/assets/BhmLbQiAwoNEmexM8m6cOwmenpg.png" src-width="530" src-height="322" align="center"/>

然后按小键盘其他数字键查找hash，某个物体消失时，左上角显示它对应的hash值：

<img src="/assets/OAc2bQoY9oKYUuxUr5jctM2Ontd.png" src-width="534" src-height="392" align="center"/>

屏幕计数器补充知识：

PS：像素着色器，按小键盘1和2循环选择，按小键盘3复制。

VS：顶点着色器，按小键盘4和5循环选择，按小键盘6复制。

IB：索引缓冲区，按小键盘7和8循环选择，按小键盘9复制。

VB：顶点缓冲区，按小键盘/和*循环选择，按小键盘-复制。

CS：计算着色器，按小键盘“.”+1、2循环选择，按“.”+3复制。

---

## 代码写法参考

注意事项：

使用着色器（PS或VS）hash时的指令和使用贴图（以及IB和VB）hash时的指令写法不同，着色器使用 [ShaderOverrideXXX]、贴图使用 [TextureOverrideXXX]。最简单的区分方法就是注意你使用的hash是8位（贴图/IB/VB）还是16位（PS/VS）。

一、使用PS或VS的hash值来隐藏特效的写法：

[ShaderOverride.PS1]

hash = xxx（16位hash值）  hash = xxx（16 位 hash 值）

handling = skip

二、使用贴图的hash值来隐藏特效的写法：

（以隐藏月城柳的大招镜片反光效果为例，hash值已失效，仅供代码参考）

[TextureOverride.Ult.Glasses.1]

hash = <del>a4437248</del>

handling = skip

[TextureOverride.Ult.Glasses.2]

hash = <del>f6bb1cc2</del>

handling = skip

[TextureOverride.Ult.Glasses.Effect]

hash = <del>a339897b</del>

ps-t6 = null

三、使用IB的hash值来隐藏头发阴影的写法：

[TextureOverride.HairShadow.IB]

hash = 12345678

ib = null

---

## 活动状态判断

小知识：“==”表示判断“相等”，“=”表示赋值。

为了更保险一些，需要添加一个角色处于活动状态（if $active == 1）的条件判断，首先需要在ini里有如下代码：

[Constants]  [常量]

global $active

[Present]  [当前]

post $active = 0

Constants部分定义一个全局变量$active，Present部分将变量post（每帧重置）为0。

并且在某个position标题（或者Blend标题）的hash下有“$active = 1”：

<img src="/assets/PKTvb2YnMouhUgxpnbhcV6l5n3g.png" src-width="532" src-height="270" align="center"/>

当此hash出现时，将变量$active赋值为1.

如果mod是可切换的，一般都会包括上述代码，但如果没有就需要手动添加。

然后相应的，隐藏代码这样写：

[TextureOverride.Ult.Glasses.1]

hash = <del>a4437248</del>

if $active == 1

handling = skip

endif

[TextureOverride.Ult.Glasses.2]

hash = <del>f6bb1cc2</del>

if $active == 1

handling = skip

endif

[TextureOverride.Ult.Glasses.Effect]

hash = <del>a339897b</del>

if $active == 1

ps-t6 = null

endif

也就是使用“if $active == 1”和“endif”将“hash = ”行下面的内容进行包裹，这样可以避免一些意料之外的问题，原理是使用角色的某个hash（position或blend等）进行判断，仅当角色出现时才进行处理。

---

## hash获取流程

最后，我简单说一下特效的贴图hash的获取方法，提供一下思路参考。

首先，我尝试修改了一下普通状态下的镜片的IBSkip代码写法，发现仍旧无法去除大招期间的镜片。

于是我尝试在大招期间使用hunting功能查找大招镜片是否有单独的IB，但这个IB同时还会隐藏掉其他的东西，比如大招背景，所以简单的IBSkip仍旧行不通。

于是我单独dump了这个与大招期间镜片相关的IB（单独dump指定IB的方法可以看我的【获取hash值教程】贴子末尾提供的进阶教程贴，如果不会的话，直接dump也可以，单独dump的好处就是减少无关文件）。

dump完成后，在deduped文件夹中查找dds文件，可以凭借经验先筛选掉一些dds，然后就是用这些dds的hash进行skip测试，每测一个hash就放一次大招查看效果（排除掉的hash直接注释掉而不是删除，防止重复测试）：

<img src="/assets/G5HHb8Al9oD86dxLmCpcRst2n0d.png" src-width="532" src-height="634" align="center"/>

最后成功找到了两个大招镜片的贴图文件，分别长这样：

<img src="/assets/IHSBbBrYLo8lumx3ilQciCjwnwg.png" src-width="536" src-height="760" align="center"/>

<img src="/assets/IX8pbOcfHo4vcNxBxPmct6n3nqd.png" src-width="522" src-height="586" align="center"/>

解决了镜片，还有一个大招期间的镜片反光特效需要处理。

这个特效并不能在上面指定IBdump的文件中找到，于是我又用普通dump来查找这个特效，并且由于大招期间无法暂停查找着色器，只能在这个反光特效出现时进行dump才能获取到。

dump后查看deduped文件夹，发现可能与反光特效有关的贴图都是FLOAT格式，而不是UNORM：

<img src="/assets/OJ7bbeAWhocbsuxXC9bcvTPhnah.png" src-width="524" src-height="354" align="center"/>

尝试skip掉这些hash，会导致画面bug。

于是我回到FrameAnalysis文件夹，尝试查看这张贴图所属的槽位：

<img src="/assets/B3PxbNFkioJTVUxd5m5cD6tEn5b.png" src-width="532" src-height="356" align="center"/>

将6号槽位设为空（ps-t6 = null），成功去除了反光特效。

到此完全解决了大招期间的镜片问题。

