---
title: 高低显与槽位替换
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\K7EJwHMjJiJMMckZK5Ac8e7AndX\NLPEwE2udiORazkwflpc1qWXnlb
sidebar_position: 6
---


# 高低显与槽位替换

高显：独立显卡显存在6GB以上，即为2048p(2K贴图)高显hash

低显：独立显卡显存在6GB以下，即为1024p(1K贴图)低显hash

部分mod没有添加低显支持，导致低显用户无法正常显示，需要手动添加相关低显或使用修复工具，或者改为槽位替换的方法。

槽位替换相关教程：

https://gamebanana.com/tuts/18114

https://gamebanana.com/tuts/18826

槽位替换代码举例：

```haskell
[TextureOverrideCorinBodyIB]
hash = e74620b5
handling = skip
drawindexed = auto

[TextureOverrideCorinHairA]
hash = 5a839fb2
match_first_index = 0
run = CommandListSkinTexture
ib = ResourceCorinHairAIB  ;在ib下添加槽位
ps-t3 = ResourceCorinHairADiffuse
ps-t4 = ResourceCorinHairANormalMap
ps-t5 = ResourceCorinHairALightMap
ps-t6 = ResourceCorinHairAMaterialMap

;以下为贴图hash信息
[TextureOverrideCorinHairADiffuse.1024]
hash = 651e96f8
this = ResourceCorinHairADiffuse

[TextureOverrideCorinHairANormalMap.1024]
hash = ab8956c8
this = ResourceCorinHairANormalMap

[TextureOverrideCorinHairALightMap.1024]
hash = 0f300531
; hash = edff2372
this = ResourceCorinHairALightMap

[TextureOverrideCorinHairAMaterialMap.1024]
hash = 1b88e01e
this = ResourceCorinHairAMaterialMap

[TextureOverrideCorinHairADiffuse.2048]
hash = 60526444
this = ResourceCorinHairADiffuse

[TextureOverrideCorinHairANormalMap.2048]
hash = 4a68ef99
this = ResourceCorinHairANormalMap

[TextureOverrideCorinHairALightMap.2048]
hash = 74d66671
; hash = 929aca42
this = ResourceCorinHairALightMap

[TextureOverrideCorinHairAMaterialMap.2048]
hash = 23b4c60d
this = ResourceCorinHairAMaterialMap

;以下为相关贴图资源信息
[ResourceCorinHairADiffuse]
filename = CorinDiffuse.dds

[ResourceCorinHairANormalMap]
filename = CorinNormalMap.dds

[ResourceCorinHairALightMap]
filename = CorinLightMap.dds

[ResourceCorinHairAMaterialMap]
filename = CorinMaterialMap.dds
```

