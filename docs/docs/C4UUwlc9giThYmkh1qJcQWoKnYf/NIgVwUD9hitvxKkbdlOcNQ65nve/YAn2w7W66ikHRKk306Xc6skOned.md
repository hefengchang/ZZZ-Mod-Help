---
title: 导出可分支切换Mod
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\NIgVwUD9hitvxKkbdlOcNQ65nve\YAn2w7W66ikHRKk306Xc6skOned
sidebar_position: 9
---


# 导出可分支切换Mod

## 前言

本教程简单介绍一下如何在blender内导出可分支切换的Mod。

目前SSMT和XXMI都支持使用Blender插件直接生成具有多个drawindex（绘制索引）的mod，来进行变体切换，而不必再将差分mod一个个导出后再用脚本工具合并，更加方便快捷。

---

## SSMT

SSMT用户可观看Nicomico的B站教程：<b>分支架构讲解</b>

使用SSMT（SSMT的Blender插件）生成的分支切换Mod的ini内自带切换键，也可以在SSMT内设置默认使用的切换键。

---

## XXMI

XXMI用户可以使用XXMI的Blender插件“XXMI-Tools”制作分支切换mod，原理也是为一个部位生成多个drawindex，但不支持自动生成切换键，需要在ini内手动写切换。

首先将提取的模型导入Blender，然后如果想为某个部位制作变体，需要创建一个以<b>此部位名命名的集合</b>，然后将此部位制作的变体放入此集合中。

比如导入的妮可身体名称为“NicoleSkinBodyA-vb0=dfab3761.txt”，那么此部位的集合就需要命名为“NicoleSkinBodyA”，集合内的变体名称可以自定义。集合内还可以创建子集合，子集合名称也可自定义。如果需要用到原模型，可以复制一份放入对应部件名的集合<b>。</b>

然后可以将原模型单独放入一个集合（集合命名随意），也可以不移动。

<img src="/assets/MgdjbqgE0oBKVTxiEUcc97rUnLr.png" src-width="596" src-height="670" align="center"/>

然后需要<b>删空原模型</b>，注意原模型的物体对象（列表的黄三角）<b>不能直接删除</b>，而是仅删除网格顶点：

<img src="/assets/EVv8bf11BoVPUfxWjOXcRjLPnId.png" src-width="598" src-height="248" align="center"/>

<img src="/assets/TW1mbdAPNo2zIixqrSWcnrBdnlb.png" src-width="590" src-height="588" align="center"/>

然后在导出前，注意<b>不要！</b>勾选合并网格（英文为“Join Mesh”）：

<img src="/assets/RMAcblcbmo4N8zxmXI5ccHP9nkd.png" src-width="597" src-height="1232" align="center"/>

这样导出以后的ini内就是分开的drawindex：

<img src="/assets/RlHXbZ2B4oMaelx6WwuckJkondd.png" src-width="595" src-height="831" align="center"/>

每一个drawindex就是一个变体，可以为这些变体手写切换：

<img src="/assets/LJ8UbZXCdosIjfxiDF0cz7D9n7c.png" src-width="597" src-height="875" align="center"/>

切换键的写法可以查看这篇教程：<b>手写ini按键切换（贴图切换为例）</b>

写法类似，只是把贴图换成了drawindex。

