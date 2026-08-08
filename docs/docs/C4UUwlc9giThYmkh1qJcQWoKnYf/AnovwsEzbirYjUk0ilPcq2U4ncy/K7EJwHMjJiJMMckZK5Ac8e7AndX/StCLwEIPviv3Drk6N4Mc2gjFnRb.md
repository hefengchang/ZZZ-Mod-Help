---
title: 头发身体等部位异常发光
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\K7EJwHMjJiJMMckZK5Ac8e7AndX\StCLwEIPviv3Drk6N4Mc2gjFnRb
sidebar_position: 0
---


# 头发身体等部位异常发光

效果如下

<img src="/assets/AFhtb3pM6o5zYzxUYnQcalTVnfb.png" src-width="1136" src-height="724" align="center"/>

# 原因

这是Mod中贴图合并导致的专武光效贴图位置异常。

# 解决方法一

在角色装备页面屏蔽专武特效。

<img src="/assets/Gx6yb54UPokXCWxkwmacsF4Gn3g.png" src-width="1056" src-height="1030" align="center"/>

# 解决方法二

修改ini配置文件。

需要在发光部位的对应IB下添加专武光效槽位为禁用，比如ps-t9 = null。注意！并不是所有的角色都是ps-t9，可以从ps-t7开始尝试，如果不行就将7改为8，还不行就改为9，依次轮推。每次改完记得保存和游戏里F10刷新看效果。

有的角色的发光纹理槽位不止一个，可能需要添加多个ps-来禁用。

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

---

# 实例一

这是仪玄的一个mod，未修复前

<img src="/assets/VH9wbIeCIoOLU9xcRxLcJB1GnLc.png" src-width="380" src-height="244" align="center"/>

通过hash表查找到仪玄的头发IB为ac8e9ee3，在ini文件中查找`hash = ac8e9ee3`找到了对应的节

```toml
[TextureOverride_IB_yixuanxuan_ac8e9ee3_Component1]
hash = ac8e9ee3
match_first_index = 0
handling = skip
run = CommandListSkinTexture
ib = Resource_ac8e9ee3_Component1
run = CommandList_IB_yixuanxuan_ac8e9ee3_Component1

[TextureOverride_IB_yixuanxuan_ac8e9ee3_Component2]
hash = ac8e9ee3
match_first_index = 21816
handling = skip
run = CommandListSkinTexture
ib = Resource_ac8e9ee3_Component2
run = CommandList_IB_yixuanxuan_ac8e9ee3_Component2
```

在每个节的ib =的下一行添加专武光效槽位禁用，发现在槽位12和13禁用后可以修复

```toml
[TextureOverride_IB_yixuanxuan_ac8e9ee3_Component1]
hash = ac8e9ee3
match_first_index = 0
handling = skip
run = CommandListSkinTexture
ib = Resource_ac8e9ee3_Component1
ps-t12 = null  ;添加槽位禁用
ps-t13 = null  ;添加槽位禁用
run = CommandList_IB_yixuanxuan_ac8e9ee3_Component1

[TextureOverride_IB_yixuanxuan_ac8e9ee3_Component2]
hash = ac8e9ee3
match_first_index = 21816
handling = skip
run = CommandListSkinTexture
ib = Resource_ac8e9ee3_Component2
ps-t12 = null  ;添加槽位禁用
ps-t13 = null  ;添加槽位禁用
run = CommandList_IB_yixuanxuan_ac8e9ee3_Component2
```

修复效果

<img src="/assets/DSJ8bpNUKodudBxkADfc9ufVnBe.png" src-width="202" src-height="130" align="center"/>

# 实例二

这是薇薇安的一个mod，未修复前

<img src="/assets/DlgfbZNKjo8MHaxz9SQcbPYwnTh.png" src-width="318" src-height="382" align="center"/>

通过hash表查找到薇薇安的头发IB为c4eb6168，身体IB为cd609d98，在ini文件中查找`hash = c4eb6168`和`hash = cd609d98`找到了对应的节

```toml
[TextureOverridec4eb6168IB]
hash = c4eb6168
handling = skip

[TextureOverridec4eb6168Head]
hash = c4eb6168
match_first_index = 0
run = CommandListSkinTexture
;Add slot check here to compatible with ZZMI if you manually add more ps slot replace for this IB's match_firt_index.
checktextureoverride = ps-t3 
checktextureoverride = ps-t4 
checktextureoverride = ps-t5 
checktextureoverride = ps-t6 
ib = Resourcec4eb6168Index
ps-t3 = Resource_c4eb6168-2df6f7b5-1-DiffuseMap
ps-t4 = Resource_c4eb6168-0865f2e4-1-NormalMap
ps-t5 = Resource_c4eb6168-36b80366-1-LightMap
ps-t6 = Resource_c4eb6168-2d5b1412-1-HighLightMap
  drawindexed = 64425,0,0

[TextureOverridec4eb6168Body]
hash = c4eb6168
match_first_index = 36537
run = CommandListSkinTexture
;Add slot check here to compatible with ZZMI if you manually add more ps slot replace for this IB's match_firt_index.
checktextureoverride = ps-t3 
checktextureoverride = ps-t4 
checktextureoverride = ps-t5 
checktextureoverride = ps-t6 
ib = Resourcec4eb6168Index
ps-t3 = Resource_c4eb6168-2df6f7b5-2-DiffuseMap
ps-t4 = Resource_c4eb6168-0865f2e4-2-NormalMap
ps-t5 = Resource_c4eb6168-36b80366-2-LightMap
ps-t6 = Resource_c4eb6168-2d5b1412-2-HighLightMap
  drawindexed = 24717,64425,0

;----------------------------------------------------------

[TextureOverridecd609d98IB]
hash = cd609d98
handling = skip

[TextureOverridecd609d98Head]
hash = cd609d98
match_first_index = 0
run = CommandListSkinTexture
;Add slot check here to compatible with ZZMI if you manually add more ps slot replace for this IB's match_firt_index.
checktextureoverride = ps-t3 
checktextureoverride = ps-t4 
checktextureoverride = ps-t5 
checktextureoverride = ps-t6 
ib = Resourcecd609d98Index
ps-t3 = Resource_cd609d98-da41fbd6-1-DiffuseMap
ps-t4 = Resource_cd609d98-43fddb1e-1-NormalMap
ps-t5 = Resource_cd609d98-4a86e169-1-LightMap
ps-t6 = Resource_cd609d98-fa650e6c-1-HighLightMap
  drawindexed = 97176,0,0
```

在每个节的ib =的下一行添加专武光效槽位禁用，发现头发在槽位9禁用后可修复，身体在槽位9禁用后可修复

```toml
[TextureOverridec4eb6168IB]
hash = c4eb6168
handling = skip

[TextureOverridec4eb6168Head]
hash = c4eb6168
match_first_index = 0
run = CommandListSkinTexture
;Add slot check here to compatible with ZZMI if you manually add more ps slot replace for this IB's match_firt_index.
checktextureoverride = ps-t3 
checktextureoverride = ps-t4 
checktextureoverride = ps-t5 
checktextureoverride = ps-t6 
ib = Resourcec4eb6168Index
ps-t9 = null ;添加槽位禁用
ps-t3 = Resource_c4eb6168-2df6f7b5-1-DiffuseMap
ps-t4 = Resource_c4eb6168-0865f2e4-1-NormalMap
ps-t5 = Resource_c4eb6168-36b80366-1-LightMap
ps-t6 = Resource_c4eb6168-2d5b1412-1-HighLightMap
  drawindexed = 64425,0,0

[TextureOverridec4eb6168Body]
hash = c4eb6168
match_first_index = 36537
run = CommandListSkinTexture
;Add slot check here to compatible with ZZMI if you manually add more ps slot replace for this IB's match_firt_index.
checktextureoverride = ps-t3 
checktextureoverride = ps-t4 
checktextureoverride = ps-t5 
checktextureoverride = ps-t6 
ib = Resourcec4eb6168Index
ps-t9 = null ;添加槽位禁用
ps-t3 = Resource_c4eb6168-2df6f7b5-2-DiffuseMap
ps-t4 = Resource_c4eb6168-0865f2e4-2-NormalMap
ps-t5 = Resource_c4eb6168-36b80366-2-LightMap
ps-t6 = Resource_c4eb6168-2d5b1412-2-HighLightMap
  drawindexed = 24717,64425,0

;----------------------------------------------------------

[TextureOverridecd609d98IB]
hash = cd609d98
handling = skip

[TextureOverridecd609d98Head]
hash = cd609d98
match_first_index = 0
run = CommandListSkinTexture
;Add slot check here to compatible with ZZMI if you manually add more ps slot replace for this IB's match_firt_index.
checktextureoverride = ps-t3 
checktextureoverride = ps-t4 
checktextureoverride = ps-t5 
checktextureoverride = ps-t6 
ib = Resourcecd609d98Index
ps-t9 = null ;添加槽位禁用
ps-t3 = Resource_cd609d98-da41fbd6-1-DiffuseMap
ps-t4 = Resource_cd609d98-43fddb1e-1-NormalMap
ps-t5 = Resource_cd609d98-4a86e169-1-LightMap
ps-t6 = Resource_cd609d98-fa650e6c-1-HighLightMap
  drawindexed = 97176,0,0
```

修复效果

<img src="/assets/DthtbmBy9oLCktxEzKec6xqpnHd.png" src-width="332" src-height="428" align="center"/>

# 特殊实例三

这是席德的一个mod，未修复前

<img src="/assets/NlRDbktufoFIWTxkKsncwbDInP6.png" src-width="366" src-height="516" align="center"/>

通过hash表查找到席德的头发IB为6cb35165，身体IB为634ac589，在ini文件中查找`hash = 6cb35165`和`hash = 634ac589`找到了对应的节

```toml
[TextureOverrideSeedBodyIB]
hash = 634ac589
handling = skip

[TextureOverrideSeedBodyA]
hash = 634ac589
match_first_index = 0
ib = ResourceSeedBodyAIB
Resource\ZZMI\Diffuse = ref ResourceSeedBodyADiffuse
Resource\ZZMI\NormalMap = ref ResourceSeedBodyANormalMap
Resource\ZZMI\LightMap = ref ResourceSeedBodyALightMap
Resource\ZZMI\MaterialMap = ref ResourceSeedBodyAMaterialMap
Resource\ZZMI\WengineFX = ref ResourceSeedBodyAWengineFX ;光效贴图指定
run = CommandList\ZZMI\SetTextures
; SeedBodyA-vb0=5e2f1e06.txt (30755)
drawindexed = 126918, 0, 0

[TextureOverrideSeedHairIB]
hash = 6cb35165
handling = skip

[TextureOverrideSeedHairA]
hash = 6cb35165
match_first_index = 0
ib = ResourceSeedHairAIB
Resource\ZZMI\Diffuse = ref ResourceSeedHairADiffuse
Resource\ZZMI\NormalMap = ref ResourceSeedHairANormalMap
Resource\ZZMI\LightMap = ref ResourceSeedHairALightMap
Resource\ZZMI\MaterialMap = ref ResourceSeedHairAMaterialMap
Resource\ZZMI\WengineFX = ref ResourceSeedHairAWengineFX ;光效贴图指定
run = CommandList\ZZMI\SetTextures
; SeedHairA-vb0=25a8bde2.txt (2625)
drawindexed = 10632, 0, 0

[TextureOverrideSeedHairB]
hash = 6cb35165
match_first_index = 10632
ib = ResourceSeedHairBIB
Resource\ZZMI\Diffuse = ref ResourceSeedHairBDiffuse
Resource\ZZMI\NormalMap = ref ResourceSeedHairBNormalMap
Resource\ZZMI\LightMap = ref ResourceSeedHairBLightMap
Resource\ZZMI\MaterialMap = ref ResourceSeedHairBMaterialMap
Resource\ZZMI\WengineFX = ref ResourceSeedHairBWengineFX  ;光效贴图指定
run = CommandList\ZZMI\SetTextures
; SeedHairB-vb0=25a8bde2.txt (1286)
drawindexed = 4878, 0, 0
```

可以看到作者已经添加了光效贴图，但因为游戏更新导致了槽位发生改变，slotfix格式没有正确指定贴图导致光效贴图失效。我们需要使用槽位来将贴图正确指定，在发现在添加槽位9来指定贴图后可修复

```toml
[TextureOverrideSeedBodyIB]
hash = 634ac589
handling = skip

[TextureOverrideSeedBodyA]
hash = 634ac589
match_first_index = 0
ib = ResourceSeedBodyAIB
Resource\ZZMI\Diffuse = ref ResourceSeedBodyADiffuse
Resource\ZZMI\NormalMap = ref ResourceSeedBodyANormalMap
Resource\ZZMI\LightMap = ref ResourceSeedBodyALightMap
Resource\ZZMI\MaterialMap = ref ResourceSeedBodyAMaterialMap
;Resource\ZZMI\WengineFX = ref ResourceSeedBodyAWengineFX  ;注释掉原来的槽位指定
ps-t9 = ResourceSeedBodyAWengineFX  ;添加槽位指定贴图
run = CommandList\ZZMI\SetTextures
; SeedBodyA-vb0=5e2f1e06.txt (30755)
drawindexed = 126918, 0, 0

[TextureOverrideSeedHairIB]
hash = 6cb35165
handling = skip

[TextureOverrideSeedHairA]
hash = 6cb35165
match_first_index = 0
ib = ResourceSeedHairAIB
Resource\ZZMI\Diffuse = ref ResourceSeedHairADiffuse
Resource\ZZMI\NormalMap = ref ResourceSeedHairANormalMap
Resource\ZZMI\LightMap = ref ResourceSeedHairALightMap
Resource\ZZMI\MaterialMap = ref ResourceSeedHairAMaterialMap
;Resource\ZZMI\WengineFX = ref ResourceSeedHairAWengineFX  ;注释掉原来的槽位指定
ps-t9 = ResourceSeedHairAWengineFX  ;添加槽位指定贴图
run = CommandList\ZZMI\SetTextures
; SeedHairA-vb0=25a8bde2.txt (2625)
drawindexed = 10632, 0, 0

[TextureOverrideSeedHairB]
hash = 6cb35165
match_first_index = 10632
ib = ResourceSeedHairBIB
Resource\ZZMI\Diffuse = ref ResourceSeedHairBDiffuse
Resource\ZZMI\NormalMap = ref ResourceSeedHairBNormalMap
Resource\ZZMI\LightMap = ref ResourceSeedHairBLightMap
Resource\ZZMI\MaterialMap = ref ResourceSeedHairBMaterialMap
;Resource\ZZMI\WengineFX = ref ResourceSeedHairBWengineFX  ;注释掉原来的槽位指定
ps-t9 = ResourceSeedHairBWengineFX  ;添加槽位指定贴图
run = CommandList\ZZMI\SetTextures
; SeedHairB-vb0=25a8bde2.txt (1286)
drawindexed = 4878, 0, 0
```

如何确认哪个贴图是光效贴图，我们可以看dds格式的图片文件，黑色背景加上银灰色图案的就是光效贴图

<img src="/assets/UoMLbcUymokoL5x31PqcoHEanne.png" src-width="786" src-height="400" align="center"/>

---

相关问题参考：

https://gamebanana.com/questions/89311

https://gamebanana.com/questions/94279

https://gamebanana.com/questions/96522

