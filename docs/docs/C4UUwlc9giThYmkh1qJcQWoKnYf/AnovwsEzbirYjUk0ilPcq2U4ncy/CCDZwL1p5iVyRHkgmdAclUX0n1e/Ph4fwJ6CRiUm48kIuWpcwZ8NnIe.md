---
title: 某些部位异常发光
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\CCDZwL1p5iVyRHkgmdAclUX0n1e\Ph4fwJ6CRiUm48kIuWpcwZ8NnIe
sidebar_position: 3
---


# 某些部位异常发光

与[角色头发贴图异常发光或错误](/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy\K7EJwHMjJiJMMckZK5Ac8e7AndX\StCLwEIPviv3Drk6N4Mc2gjFnRb)相同。

在不该发光的地方有异常的发光，比如头发上的发光斑点，腿部的发光。

这是因为专属武器特效造成的异常发光，一种方法是关闭专武特效。

<img src="/assets/PcWNbq22qoT0z6xP5FnciAhLnye.png" src-width="1056" src-height="1030" align="center"/>

另一种方法，需要在发光部位的对应ib下添加发光纹理槽位为失效，比如ps-t9 = null。但并不是所有的角色都是ps-t9，可以从ps-t7开始尝试，如果不行就将7改为8，还不行就改为9，依次轮推。每次改完记得保存和游戏里F10刷新看效果。

代码举例：

```java
<b>[TextureOverride_IB_yixuanxuan_ac8e9ee3_Component1]</b>
hash = ac8e9ee3   #头发hash
match_first_index = 0
handling = skip
run = CommandListSkinTexture
ib = Resource_ac8e9ee3_Component1
ps-t13 = null    #发光纹理槽位失效代码
run = CommandList_IB_yixuanxuan_ac8e9ee3_Component1
<b>[TextureOverride_IB_yixuanxuan_ac8e9ee3_Component2]</b>
hash = ac8e9ee3  #头发hash
match_first_index = 21816
handling = skip
run = CommandListSkinTexture
ib = Resource_ac8e9ee3_Component2
ps-t13 = null  #发光纹理槽位失效代码
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

https://gamebanana.com/questions/89899

https://gamebanana.com/questions/89311

https://gamebanana.com/questions/94279

