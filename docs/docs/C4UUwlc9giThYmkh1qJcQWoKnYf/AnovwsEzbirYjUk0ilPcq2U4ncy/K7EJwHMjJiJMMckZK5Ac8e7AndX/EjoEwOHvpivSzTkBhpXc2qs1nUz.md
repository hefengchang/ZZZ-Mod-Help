---
title: 脸部纹理或武器纹理异常
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\K7EJwHMjJiJMMckZK5Ac8e7AndX\EjoEwOHvpivSzTkBhpXc2qs1nUz
sidebar_position: 4
---


# 脸部纹理或武器纹理异常

版本修复工具并不支持武器的相关修复，且仅部分支持脸部的修复。

它们的损坏通常是因为hash的改变，所以你需要手动修复这些mod，至于最新的hash可以从以下链接获取。

全角色hash表

https://www.caimogu.cc/post/2075618.html

Github上的zzz资产库

https://github.com/hefengchang/ZZZ-Model-Hash

https://github.com/leotorrez/ZZ-Model-Importer-Assets

https://github.com/hefengchang/ZZZ-Model-Hash/tree/master/%E8%A7%92%E8%89%B2hash%E8%A1%A8

关于武器你也可以使用槽位替换来解决，这需要有一定的手动能力，代码举例：

```haskell
[TextureOverride2d7f2223Head]
hash = 2d7f2223   #武器hash
match_first_index = 0
checktextureoverride = ps-t3 
checktextureoverride = ps-t4 
checktextureoverride = ps-t5 
checktextureoverride = ps-t6 
ib = Resource2d7f2223Head   #在ib的下面添加槽位
ps-t3 = Resource_2d7f2223-564b4022-1-DiffuseMap
ps-t4 = Resource_2d7f2223-fe9958c0-1-NormalMap
ps-t5 = Resource_2d7f2223-a72dfbea-1-LightMap
ps-t6 = Resource_2d7f2223-cf824eca-1-HighLightMap
drawindexed = auto

;以下为武器相关贴图资源信息
[Resource_2d7f2223-564b4022-1-DiffuseMap]
filename = 2d7f2223-564b4022-1-DiffuseMap.dds

[Resource_2d7f2223-fe9958c0-1-NormalMap]
filename = 2d7f2223-fe9958c0-1-NormalMap.dds

[Resource_2d7f2223-a72dfbea-1-LightMap]
filename = 2d7f2223-a72dfbea-1-LightMap.dds

[Resource_2d7f2223-cf824eca-1-HighLightMap]
filename = 2d7f2223-cf824eca-1-HighLightMap.dds
```

槽位替换相关教程：https://gamebanana.com/tuts/18114

