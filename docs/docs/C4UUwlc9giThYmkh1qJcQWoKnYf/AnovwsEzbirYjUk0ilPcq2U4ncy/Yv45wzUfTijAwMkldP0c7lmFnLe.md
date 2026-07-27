---
title: 用了修复工具反而修坏了
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\Yv45wzUfTijAwMkldP0c7lmFnLe
sidebar_position: 3
---


# 用了修复工具反而修坏了

1. 有些修复工具仅支持单个mod的修复，请仔细阅读工具说明。
2. 修复完成后，尝试切换场景、进出录像店、重启游戏看是否解决。
3. 有时候修复工具本身存在一些错误，导致错误的添加了一些hash，比如潘引壶、橘福福、仪玄等角色。
4. 版本修复工具会在修复时在ib= 的上方添加run = CommandListSkinTexture   。这可能会造成某些异常bug。举例1.现在的mod使用了run = CommandList\ZZMI\SetTextures这个代码，如果优先使用了run = CommandListSkinTexture 可能会造成发光贴图不生效等异常。

     解决方法有两种：

     1.将ib=上方的run = CommandListSkinTexture 进行删除并将代码移动到该节的最下方来解决。

     2.将 run = CommandListSkinTexture  进行修改，改为if语句  。                                                         

     以下为示例代码（绿色部分为修改内容，任选其中一种即可）

```haskell
[TextureOverrideAliceHeadB]
hash = d131acb1
match_first_index = 22074
ib = ResourceAliceHeadBIB
if 0==1
   run = CommandListSkinTexture
endif
<em>;if $bangs == 0</em>
    <em>;Resource\ZZMI\Diffuse = ref ResourceAliceHeadBDiffuse</em>
    <em>;Resource\ZZMI\NormalMap = ref ResourceAliceHeadBNormalMap</em>
    <em>;Resource\ZZMI\LightMap = ref ResourceAliceHeadBLightMap</em>
    <em>;Resource\ZZMI\MaterialMap = ref ResourceAliceHeadBMaterialMap</em>
if $bangs == 1
    Resource\ZZMI\Diffuse = ref ResourceAliceHeadBDiffuse.HuoHuo.Blonde
else if $bangs == 2
    Resource\ZZMI\Diffuse = ref ResourceAliceHeadBDiffuse.HuoHuo.DarkBlue
else if $bangs == 3
    Resource\ZZMI\Diffuse = ref ResourceAliceHeadBDiffuse.HuoHuo.Black
else if $bangs == 4
    Resource\ZZMI\Diffuse = ref ResourceAliceHeadBDiffuse.HuoHuo.Pink
else if $bangs == 5
    Resource\ZZMI\Diffuse = ref ResourceAliceHeadBDiffuse.HuoHuo.Silver
else if $bangs == 6
    Resource\ZZMI\Diffuse = ref ResourceAliceHeadBDiffuse.HuoHuo.Brunette
endif
Resource\ZZMI\NormalMap = ref ResourceAliceHeadBNormalMap.HuoHuo
Resource\ZZMI\LightMap = ref ResourceAliceHeadBLightMap.HuoHuo
Resource\ZZMI\MaterialMap = ref ResourceAliceHeadBMaterialMap.HuoHuo.Normal
Resource\ZZMI\WengineFX = ref ResourceAliceHairBGlowMapBangs
run = CommandList\ZZMI\SetTextures
run = CommandListSkinTexture
```

举例2.某些拥有相同hash值的节会丢失一部分代码。这是ini文件格式错误(对match_first_index =这一行进行了注释;)导致的程序误判。

解决方法有两种：

方法1.手动在原ini文件的内容里添加run = CommandListSkinTexture一般在hash =的下一行

```haskell
[TextureOverride_IB_4a178546_xiaban_Component1]
hash = 4a178546
run = CommandListSkinTexture
;match_first_index = 0
handling = skip
ib = Resource_4a178546_Component1

[TextureOverrideCheckHash]
hash = 4a178546
run = CommandListSkinTexture
$active = 1
```

方法2.将match_first_index =这一行的注释;取消掉

```haskell
[TextureOverride_IB_4a178546_xiaban_Component1]
hash = 4a178546
match_first_index = 0
handling = skip
ib = Resource_4a178546_Component1

[TextureOverrideCheckHash]
hash = 4a178546
$active = 1
```

如果确定是修复工具导致的问题，手动恢复备份。一般修复工具都会有备份功能，你会看到有些ini文件名字是加有disabled前缀的，删除disabled即可恢复（注意删除现有的ini文件，不要重复）。

如果不会操作，就删除错误的mod，重新从网站下载该mod或者使用最初下载的mod压缩包。

向修复工具的作者反馈这个错误并提供错误的mod，以获得更新后的修复工具。

