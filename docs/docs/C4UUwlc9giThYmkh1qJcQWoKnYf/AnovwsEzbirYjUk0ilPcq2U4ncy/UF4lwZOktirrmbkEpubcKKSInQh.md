---
title: 游戏或角色崩溃卡顿相关问题
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\UF4lwZOktirrmbkEpubcKKSInQh
sidebar_position: 10
---


# 游戏或角色崩溃卡顿相关问题

1. mod冲突造成，需要移除所有mod，并逐个添加来找到导致崩溃的mod。
2. 发光插件RabbitFX存在多个导致，需要在Mods文件夹搜索RabbitFX，删除所有的，然后下载最新的RabbitFX。
3. 非XXMI用户：SlotFix插件存在多个导致，需要在Mods文件夹搜索SlotFix，删除所有的，然后下载最新的SlotFix。

      XXMI用户：不需要SlotFix插件，本身自带，不需要再次下载SlotFix插件使用。

1. 代理人查看器mod导致，请勿使用这个工具https://gamebanana.com/mods/600543
2. 某个mod本身存在问题，需要作者修复。
3. 常见于一些老版本mod，需要使用此工具删除部分代码。从[踩蘑菇网](https://www.caimogu.cc/post/1360198.html)获取。
4. 露西旧版mod卡顿导致的问题（请注意这里提到的hash值可能会因版本更新而变化）

<img src="/assets/CnD9bgcSWoJxEyxIYUQcgDg7nff.png" src-width="691" src-height="699" align="center"/>

1. 伊芙琳卡顿问题，如果是靠近角色卡顿，查看是否有以下代码，添加ib = null即可。

```haskell
[TextureOverride_IB_04b53ecd_Body]
hash = 04b53ecd
match_first_index = 50418   找到有50418的这个节
run = CommandListSkinTexture
;handling = skip
ib = null
```

1. 叶瞬光卡顿问题，如果是靠近角色或人物界面卡顿，与伊芙琳类似，添加ib = null即可。

```haskell
hash = 3b1b73fe
;handling = skip
ib = null
```

相关解决方案https://gamebanana.com/questions/96819

1. 仪玄卡顿问题，靠近角色或人物界面卡顿，与上述类似，添加ib = null。

```text
[TextureOverrideYiXuanCordeIB]
hash = 67c61080
;handling = skip
ib = null

[TextureOverrideYiXuanAccessIB]
hash = 1630f2d0
;handling = skip
ib = null

[TextureOverrideYiXuanAccess1IB]
hash = 0fdae851
;handling = skip
ib = null
```

相关解决方案https://gamebanana.com/questions/98558

1. XXMI更新导致的问题，需要回滚，相关教程https://gamebanana.com/tuts/18948
2. 加载器或管理器异常，比如ShaderCache和ShaderFixes文件夹里有异常文件，需要移除里面的文件看是否恢复正常，或者卸载当前使用的加载器管理器，重新下载并安装到另一个磁盘中。
3. 使用XXMI的修复ZZMI功能

<img src="/assets/Z9jPb3SRroFl7YxW18ycqmypndd.png" src-width="506" src-height="352" align="center"/>

1. 卡顿、加载慢可以尝试使用RabbitFX发光插件里的说明文件里提到的方法，以下是相关翻译

 
将缓存着色器设置为1应能提升游戏会话间的性能表现
通过首次加载某些内容后保存已处理的着色器。
启用此功能后，游戏在生成文件时会短暂卡顿
但它将减少未来的加载时间
如果已启用着色器缓存，下一步无需重复。
要启用着色器缓存，请复制一份ShaderCacheSettings.ini文件
并将其放入RabbitFX文件夹中。

意思是将DISABLED文件夹里的ShaderCacheSettings.ini给复制到RabbitFX文件夹下。

