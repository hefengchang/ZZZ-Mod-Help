---
title: 解决角色色差之跨ib渲染教程
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\NIgVwUD9hitvxKkbdlOcNQ65nve\E3whwojFCil9bQkiJQccHaXmn4g
sidebar_position: 1
---


# 解决角色色差之跨ib渲染教程

# 前言 

在《绝区零》的某些特定角色上，由于下半身使用了不同的着色器，制作 mod 时可能会导 

致出现修改贴图无法完美解决的色差问题。通过修改 ini 文件，使用跨 IB 渲染技术可以解决 

这个问题。 

方法分为两种：第一种（星见雅改法）只用到 vb0 即可；另外一种（艾莲改法）针对修改 

后出现模型偏移的情况，需要用到 cb 寄存器资源。 

注：目前使用到 cb 寄存器的改法（艾莲的改法）会导致大世界内频繁丢失角色身上的光照 

明暗效果。 

上述 Bug 在 2.0 版本中变为战斗内模型仍旧偏移，但大世界中正常。 

---

# 星见雅改法 

## 第一步：找到雅的身体 IB 部分 

因为雅的身体部分原模型没有肤色，所以 mod 的肤色会渲染异常，就需要把肤色部分的渲染移动到四肢的 IB 部分去绘制。 

目前 1.4 版本，雅的身体 IB 的 hash 值为 981c1a1e 

```haskell
[TextureOverride981c1a1eHead] 
hash = 981c1a1e 
match_first_index = 0 
run = CommandListSkinTexture 
if vb0 == 3001 
handling = skip 
checktextureoverride = ps-t3 
checktextureoverride = ps-t4 
checktextureoverride = ps-t5 
checktextureoverride = ps-t6 
ps-t4 = Resource_Texture_ebac056e 
ib = Resource981c1a1eIndex 
drawindexed = 18519,130365,0
```

在此 IB 的节[TextureOverrideXXXX]上方和下方分别添加一行代码： 

[ResourceBodyVB] 

ResourceBodyVB = copy vb0 

```haskell
[ResourceBodyVB] 
[TextureOverride981c1a1eHead] 
hash = 981c1a1e 
match_first_index = 0 
ResourceBodyVB = copy vb0 
run = CommandListSkinTexture 
if vb0 == 3001 
handling = skip 
checktextureoverride = ps-t3 
checktextureoverride = ps-t4 
checktextureoverride = ps-t5 
checktextureoverride = ps-t6 
ps-t4 = Resource_Texture_ebac056e 
ib = Resource981c1a1eIndex 
drawindexed = 18519,130365,0
```

这里添加的第二行代码我选择添加在了 match_first_index 行的下方，经测试只要添加在此 IB 的标题下都可以。 

## 第二步：来到雅的四肢IB部分 

目前 14 版本，雅的四肢IB的 hash 值为 d8003df3。 

```haskell
[TextureOverrideD8003df3Head] 
hash = d8003df3 
match_first_index = 0 
run = CommandListSkinTexture 
if vb0 == 3002 
 handling = skip 
 checktextureoverride = ps-t3 
 checktextureoverride = ps-t4 
 checktextureoverride = ps-t5 
 checktextureoverride = ps-t6 
 ps-t4 = Resource_Texture_ebac056e 
 ib = Resourced8003df3Index 
endif
```

在此部分的末尾添加下面几行代码： 

```haskell
[TextureOverrideD8003df3Head] 
hash = d8003df3 
match_first_index = 0
run = CommandListSkinTexture 
if vb0 == 3002 
 handling = skip 
 checktextureoverride = ps-t3 
 checktextureoverride = ps-t4 
 checktextureoverride = ps-t5 
 checktextureoverride = ps-t6 
 ps-t4 = Resource_Texture_ebac056e 
 ib = Resourced8003df3Index
endif

ib = Resource981c1a1eIndex
vb0 = ResourceBodyVB 
vb1 = Resource981c1a1eTexcoord 
drawindexed = 18519,130365,0
```

在添加之前，我先解释一下这几行代码来自哪里。ib行来自身体部分的ib行，vb0行来自我们第一步中添加的代码，vb1行来自身体部分的Texcoord，最后的drawindex也是来自身体IB部分。

```haskell
[ResourceBodyVB] 
[TextureOverride981c1a1eHead] 
hash = 981c1a1e 
match_first_index = 0 
ResourceBodyVB = copy_vb0 
run = CommandListSkinTexture 
if vb0 == 3001 
 handling = skip 
 checktextureoverride = ps-t3 
 checktextureoverride = ps-t4 
 checktextureoverride = ps-t5 
 checktextureoverride = ps-t6 
 ps-t4 = Resource_Texture_ebac056e 
 ib = Resource981c1a1eIndex 
 drawindexed = 18519,130365,0
```

```haskell
[TextureOverride981c1a1ePosition] 
hash = 981c1a1e 
if DRAW_TYPE == 1 
  vb2 = Resource981c1a1eBlend 
  vb0 = Resource981c1a1ePosition 
  handling = skip 
  draw = 36182, 0 
endif
$active = 1 

[TextureOverride981c1a1eTexcoord] 
hash = 303fb1b6
if vb0 == 3001
  vb1 = Resource981c1a1eTexcoord 
endif 

[TextureOverride981c1a1eBlend] 
hash = 9a227c8
```

因为这几行代码来自原有代码，所以不提供模版，请根据上面的说明对应好对应的几行代码并复制粘贴到指定位置。 

## 第三步：回到雅的身体 IB 部分，在 drawindex 行的前添加 英文分号 注释掉此行： 

```haskell
[ResourceBodyVB] 
[TextureOverride981c1a1eHead] 
hash = 981c1a1e 
match_first_index = 0 
ResourceBodyVB = copy_vb0 
run = CommandListSkinTexture 
if vb0 == 3001 
 handling = skip 
 checktextureoverride = ps-t3 
 checktextureoverride = ps-t4 
 checktextureoverride = ps-t5 
 checktextureoverride = ps-t6 
 ps-t4 = Resource_Texture_ebac056e 
 ib = Resource981c1a1eIndex 
;drawindexed = 18519,130365,0
```

drawindex 问题 

最后再说明一下关于 drawindex 的问题： 

如果你的身体部分做了拆分，有很多个drawindex，那么只改包含素体（皮肤）部分的drawindex就可以，一般就是身体IB部分的第一个drawindex。

```haskell
[ResourceBodyVB] 
[TextureOverride981c1a1eHead] 
hash = 981c1a1e 
match_first_index = 0 
ResourceBodyVB = copy_vb0 
run = CommandListSkinTexture 
if vb0 == 3001 
 handling = skip 
 checktextureoverride = ps-t3checktextureoverride = ps-t4 
 checktextureoverride = ps-t5 
 checktextureoverride = ps-t6 
 ps-t4 = Resource_Texture_ebac056e 
 ib = Resource981c1a1eIndex 
 ;drawindexed = 18519,130365,0 
 
if $skirt == 1 
drawindexed = 73740,0 
endif 

if $belt == 1 
drawindexed = 22187,7374,0 
endif 

if $bra == 1 
drawindexed = 29946,29556,0 
endif
```

---

# 艾莲改法 

艾莲的跨IB渲染修改方法和星见雅相似，只是需要增加一个cb1来修复HairIB的模型偏移问题。

## 第一步：来到艾莲的 Hair 部分 

添加下面几行代码： 

[ResourceEllenHairVB] 

[ResourceCaptureCB1] 

ResourceEllenHairVB = copy_vb0 

ResourceCaptureCB1 = copy_vs-cb1 unless_null 

```haskell
[ResourceEllenHairVB] 
[ResourceCaptureCB1] 
[TextureOverrideEllenHairA] 
hash = d44a8015 
handling = skip 
match_first_index = 0 
run = CommandListSkinTexture 
ResourceEllenHairVB = copy_vb0 
ResourceCaptureCB1 = copy_vs-cb1 unless_null 
ib = ResourceEllenHairAIB 
drawindexed = auto
```

和星见雅相比，多了两行 vs-cb1 相关的代码。 

## 第二步：来到艾莲的 Body 部分 

添加下面红框里的代码： 

```java
[ResourceTemp1] 
[TextureOverrideEllenBodyA] 
hash = e30fe03 
match_first_index = 0 
handling = skip 
run = CommandListSkinTexture 
ib = ResourceEllenBodyAIB 
drawindexed = auto 

ib = ResourceEllenHairAIB 
vb0 = ResourceEllenHairVB 
vb1 = ResourceEllenHairTexcoord 
ResourceTemp1 = ref vs-cb1 
vs-cb1 = ResourceCaptureCB1
drawindexed = auto 
vs-cb1 = ref ResourceTemp1
```

和星见雅相比，也多出了几行 vs-cb1 相关的代码。 

## 第三步：同样回到Hair部分，注释掉drawindex即可

```haskell
[ResourceEllenHairVB] 
[ResourceCaptureCB1] 
[TextureOverrideEllenHairA] 
hash = d44a8015 
handling = skip 
match_first_index = 0 
run = CommandListSkinTexture 
ResourceEllenHairVB = copy_vb0 
ResourceCaptureCB1 = copy_vs-cb1 unless_null 
ib = ResourceEllenHairAIB 
;drawindexed = auto
```

最后说一下vs-cb的问题，一旦使用了cb资源，会导致使用了跨IB渲染技术的IB部分的模型影子的渲染出现1帧的延迟问题，目前没找到办法解决。

<img src="/assets/MLJbbWg4HoHfsAxNTyfcIRyCnVd.png" src-width="598" src-height="612" align="center"/>

---

# 贴图问题

如果修改后你的模型贴图出现问题，可能是因为你的ini使用的是ps-t槽位指定的方法修改的贴图。

可以在第二步向指定IB添加代码时，把槽位的几行代码也移动过去。

比如下图，把图一的ps-t3456移动到图二对应位置即可。

```haskell
[ResourceBodyVB] 
[TextureOverride981c1a1eHead] 
hash = 981c1a1e 
match_first_index = 0 
ResourceBodyVB = copy_vb0 
run = CommandListSkinTexture 
if vb0 == 3001 
 handling = skip 
 checktextureoverride = ps-t3 
 checktextureoverride = ps-t4 
 checktextureoverride = ps-t5 
 checktextureoverride = ps-t6 
 ib = Resource981c1a1eIndex 
 ps-t3 = Resource_981c1a1e-09a2bdb1-1-DiffuseMap 
 ps-t4 = Resource_981c1a1e-fdb6938a-1-NormalMap 
 ps-t5 = Resource_981c1a1e-fd28938a-1-LightMap 
 ps-t6 = Resource_981c1a1e-45877efd-1-HighLightMap 
 ;drawindexed=192786,0,0
 ;run = CustomShaderTransparencyBody
 ;drawindexed = 6522,192786,0
endif
```

```haskell
[TextureOverrideD8003df3Head] 
hash = d8003df3 
match_first_index = 0 
run = CommandListSkinTexture 
if vb0 == 3000 
 handling = skip 
 checktextureoverride = ps-t3 
 checktextureoverride = ps-t4 
 checktextureoverride = ps-t5 
 checktextureoverride = ps-t6 
 ib = Resourced8003df3Index 
 ps-t3 = Resource_D8003df3-01e26d9a-1-DiffuseMap 
 ps-t4 = Resource_D8003df3-fd28938a-1-NormalMap 
 ps-t5 = Resource_D8003df3-d54623e7-1-LightMap 
 ps-t6 = Resource_D8003df3-d54623e7-1-HighLightMap
 drawindexed = 226047,0,0
 
 ib = Resource981c1aleIndex
 vbo = ResourceBodyVB
 vb1 = Resource981c1a1eTexcoord 
 ps-t3 =Resource_981c1a1e-09a2bbd1-1-DiffuseMap
 ps-t4 =Resource_981c1a1e-ebac056e-1-NormalMap
 ps-t5 =Resource_981c1a1e-fd289380-1-LightMap
 ps-t6 = Resource_981c1a1e-450770fd-1-HighLightMap
 drawindexed = 192786，0 
endif
```

---

# 柚叶改法

柚叶在使用copy vb0的改法时，在角色界面中，使用到跨ib的部分在角色切换动作时会出现和mod模型有延迟的黑色模型。这时可以使用copy so0的改法。

## 第一步：在 Body 的 Blend 节上方添加一个VB0 的 Resource： 

```haskell
[ResourceBodyVBO] 
type = Buffer 
stride = 40
```

## 第二步：在 Blend 的 draw 行下方添加一行 

```haskell
ResourceBodyVB0 = ref so0
```

```haskell
[ResourceBodyVB0] 
type = Buffer 
stride = 40 

[TextureOverrideYuzuhaBodyBlend] 
hash = 0db66603 
handling = skip 
vb2 = ResourceYuzuhaBodyBlend 
if DRAW_TYPE == 1 
    vb0 = ResourceYuzuhaBodyPosition 
    draw = 149743, 0 
    ResourceBodyVB0 = ref so0 
    $active = 1 
endif
```

## 第三步：剩下的改法就和雅的一样了

```haskell
[TextureOverrideYuzuhaLegsA]
```

```haskell
endif
run = CommandList\ZZMI\SetTextures
;LegsSkin (7335)
drawindexed = 39330, 161856,0
if $toggle == 1
    ;LegsSkinV1 (2434)
    drawindexed = 12693, 201186,0
elif $toggle == 2 || $toggle == 3
    ; LegsSkinV2v3 (7096)
    drawindexed = 38610, 213879,0
elif $toggle == 4 || $toggle == 5
    ; LegsSkinV45 (7096)
    drawindexed = 38610, 252489,0
endif

ib = ResourceYuzuhaBodyAIB 
vb0 = ResourceBodyVBO 
vb1 = ResourceYuzuhaBodyTexcoord 
vb2 = ResourceYuzuhaBodyBlend 
;BodySkin
;BodySkin (5957) 
drawindexed = 33000, 536004, 0 
if $toggle == 1 
    ;BodySkinV2-5(10698)
    drawindexed = 59904, 569004, 0 
endif
```

vb2和vb3是最早使用此方法的一些mod中包含的内容，经过实际测试vb2、vb3加不加都没有什么影响。

