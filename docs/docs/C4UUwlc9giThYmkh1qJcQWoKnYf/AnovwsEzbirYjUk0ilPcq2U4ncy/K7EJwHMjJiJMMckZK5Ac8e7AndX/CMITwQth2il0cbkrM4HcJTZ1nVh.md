---
title: 使用修复工具后贴图纹理错乱
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\K7EJwHMjJiJMMckZK5Ac8e7AndX\CMITwQth2il0cbkrM4HcJTZ1nVh
sidebar_position: 13
---


# 使用修复工具后贴图纹理错乱

<img src="/assets/URYXbK7JjoaEt7xcVDdcgZYYn9c.png" src-width="528" src-height="816" align="center"/>

<img src="/assets/GIiJbB6cZoYRrSxCEaocqktAnbd.png" src-width="568" src-height="872" align="center"/>

在使用修复工具后贴图纹理产生错误。

1.可能是run的代码位置错误导致（使用我制作的修复工具可自动修复此错误）

`run = CommandList\ZZMI\SetTextures`

`run = CommandListSkinTexture`

这两行代码正确的位置是在纹理的槽位代码之后

```text
[TextureOverride7a8fa826Head]
hash = 7a8fa826
match_first_index = 0
ib = Resource7a8fa826Head
Resource\ZZMI\Diffuse = ref  Resource_7a8fa826-b004ab49-1-DiffuseMap
Resource\ZZMI\NormalMap = ref  Resource_7a8fa826-e17b3529-1-NormalMap
Resource\ZZMI\LightMap = ref  Resource_7a8fa826-c7115c4b-1-LightMap
Resource\ZZMI\MaterialMap = ref  Resource_7a8fa826-2204f89a-1-HighLightMap
run = CommandList\ZZMI\SetTextures
run = CommandListSkinTexture
drawindexed = auto
```

但有时候会出现`checktextureoverride = ps-t3 `这样的代码行，如果`run = CommandListSkinTexture`在它之后那么就会导致贴图错误，所以需要`run = CommandListSkinTexture`移动到`checktextureoverride = ps-t3`之前，或者直接删除`checktextureoverride = ps-t3`这些行。

```text
[TextureOverride7a8fa826Head]
hash = 7a8fa826
match_first_index = 0
;Add slot check here to compatible with ZZMI if you manually add more ps slot replace for this IB's match_firt_index.
checktextureoverride = ps-t3  ;删除此行
checktextureoverride = ps-t4  ;删除此行
checktextureoverride = ps-t5  ;删除此行
checktextureoverride = ps-t6  ;删除此行
ib = Resource7a8fa826Head
Resource\ZZMI\Diffuse = ref  Resource_7a8fa826-b004ab49-1-DiffuseMap
Resource\ZZMI\NormalMap = ref  Resource_7a8fa826-e17b3529-1-NormalMap
Resource\ZZMI\LightMap = ref  Resource_7a8fa826-c7115c4b-1-LightMap
Resource\ZZMI\MaterialMap = ref  Resource_7a8fa826-2204f89a-1-HighLightMap
run = CommandList\ZZMI\SetTextures
run = CommandListSkinTexture
drawindexed = auto
```

