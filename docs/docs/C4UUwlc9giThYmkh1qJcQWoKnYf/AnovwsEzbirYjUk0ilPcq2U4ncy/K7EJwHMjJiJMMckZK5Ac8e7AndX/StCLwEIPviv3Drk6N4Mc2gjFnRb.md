---
title: 角色头发贴图异常发光或错误
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\K7EJwHMjJiJMMckZK5Ac8e7AndX\StCLwEIPviv3Drk6N4Mc2gjFnRb
sidebar_position: 0
---


# 角色头发贴图异常发光或错误

### <b>1.</b><b>头发或身体有部分异常发光</b>

这是专属武器造成的贴图错误，可以屏蔽专武特效。点击下图这个开关即可关闭。

<img src="/assets/Gx6yb54UPokXCWxkwmacsF4Gn3g.png" src-width="1056" src-height="1030" align="center"/>

另一种方法，需要在头发所在节添加ps-t__ = null , __ 代表的数字每个角色都不一样，你可以从7开始往上加，每加一次刷新看效果。

举例薇薇安，只需要在头发hash所在的节中的ib=的下一行添加ps-t9 = null（槽位可能会变化，多试几个数字） 即可。比如以下这样：

```text
<b>[TextureOverridec4eb6168Head]</b>
$active = 1
hash = c4eb6168
match_first_index = 0
run = CommandListSkinTexture
ib = Resourcec4eb6168Head
ps-t9 = null
```

举例仪玄，只需要在头发hash所在的节中的ib=的下一行添加ps-t11 = null （槽位可能会变化，多试几个数字）即可。比如以下这样：

```java
<b>[TextureOverride_IB_yixuanxuan_ac8e9ee3_Component1]</b>
hash = ac8e9ee3
match_first_index = 0
handling = skip
run = CommandListSkinTexture
ib = Resource_ac8e9ee3_Component1
ps-t13 = null
run = CommandList_IB_yixuanxuan_ac8e9ee3_Component1

<b>[TextureOverride_IB_yixuanxuan_ac8e9ee3_Component2]</b>
hash = ac8e9ee3
match_first_index = 21816
handling = skip
run = CommandListSkinTexture
ib = Resource_ac8e9ee3_Component2
ps-t13 = null
run = CommandList_IB_yixuanxuan_ac8e9ee3_Component2
```

需要注意在3Dmigoto的文件夹里找到d3dx.ini或者main.ini，打开文件找到以下内容，添加槽位到15

```java
[CommandListSkinTexture]
if $costume_mods
        pre run = CommandList\SlotFix\SaveDefault
        checktextureoverride = ps-t1
        checktextureoverride = ps-t2
        checktextureoverride = ps-t3
        checktextureoverride = ps-t4
        checktextureoverride = ps-t5
        checktextureoverride = ps-t6
        checktextureoverride = ps-t7
        checktextureoverride = ps-t8
        checktextureoverride = ps-t9
        checktextureoverride = ps-t10
        checktextureoverride = ps-t11
        checktextureoverride = ps-t12
        checktextureoverride = ps-t13
        checktextureoverride = ps-t14
        checktextureoverride = ps-t15
        x140 = 0
endif
```

已知bug：[点击跳转](/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy\Yv45wzUfTijAwMkldP0c7lmFnLe)

相关问题参考：

https://gamebanana.com/questions/89311

https://gamebanana.com/questions/94279

https://gamebanana.com/questions/90354

https://gamebanana.com/questions/96522

### <b>2.</b><b>头发在动态壁纸中贴图错乱。</b>

在动态壁纸中，部分角色有另外的hash值，你需要找到并添加它。

比如露西的头发，应该在头发ib的Position节附近添加另一个hash值的节（绿色标注），以下为举例代码，具体代码以具体mod为准。代码中的hash并非最新值。

```text
[TextureOverride198e99d7PositionWallpaper]
hash = 39cfd24c
if $active== 1
vb2 = Resource198e99d7Blend
vb0 = Resource198e99d7Position
handling = skip
draw = 3833, 0
endif
[TextureOverride198e99d7Position]
hash = 6c733c84
if $active== 1
vb2 = Resource198e99d7Blend
vb0 = Resource198e99d7Position
handling = skip
draw = 3833, 0
endif
```

相关问题参考：https://gamebanana.com/questions/88107

