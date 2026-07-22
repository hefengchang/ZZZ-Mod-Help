---
title: Mod修复：贴图hash改槽位
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\NIgVwUD9hitvxKkbdlOcNQ65nve\GtyFw8Eciixd58k1jcUc2KyBnwc
sidebar_position: 3
---


# Mod修复：贴图hash改槽位

# 前言

目前香蕉网的绝区零修复工具只包含可玩角色的高低显hash值修复，所以并不能修复<b>角色武器、皮肤以及场景类mod</b>的贴图错误。

如果想要修复角色以外这些mod的贴图错误，就需要手动dump获取你的贴图hash后进行修改。

不过<b>武器类mod</b>目前使用槽位来替换贴图暂时并没发现什么问题，所以直接将hash改为槽位算是更加简单

的改法，本文就讲解一下具体的修改方法。

---

# 原理讲解

<b>首先介绍一下替换贴图的两种方法，hash指定和槽位指定</b>：

1.槽位指定

每个模型都有其对应的IB的hash值，而每个IB下面又有许多槽位用来渲染不同的贴图，比如最常见的角色及其武器一般有4个槽位用来渲染纹理、法线以及光照贴图，通常情况下分别是3456号槽位，我们就可以通过替换这些槽位的贴图来实现修改模型的贴图。

2.hash指定

而每一张贴图又有其各自本身的hash值，所以直接使用这个hash值也可以达到替换这张图的目的。

两种方法的具体写法示例如下：

```haskell
[TextureOverrideTriggerWeaponBarrelA]
hash = f05e3a4a
match_first_index = 0
run = CommandListSkinTexture
ib = ResourceTriggerWeaponBarrelAIB
ps-t3 = ResourceTriggerWeaponBarrelADiffuse
ps-t4 = ResourceTriggerWeaponBarrelANormalMap
ps-t5 = ResourceTriggerWeaponBarrelALightMap
ps-t6 = ResourceTriggerWeaponBarrelAMaterialMap


[TextureOverrideTriggerWeaponBarrelADiffuse]
hash = 748df67a
this = ResourceTriggerWeaponBarrelADiffuse

[TextureOverrideTriggerWeaponBarrelANormalMap]
hash = 798adb83
this = ResourceTriggerWeaponBarrelANormalMap

[TextureOverrideTriggerWeaponBarrelALightMap]
hash = c7377a02
this = ResourceTriggerWeaponBarrelALightMap

[TextureOverrideTriggerWeaponBarrelAMaterialMap]
hash = 799820a8
this = ResourceTriggerWeaponBarrelAMaterialMap
```

# 修改流程

<b>下面我们用两个实例来演示实际修改流程：</b>

## 首先展示<b>XXMI</b>格式的mod

### 第一步，打开mod的ini文件，搜索“this”：

记事本可以打开ini文件，但如果觉得不太直观，可以使用VSCode或Notepad++软件打开（而且记事本的搜索也不太好用）

```haskell
[TextureOverrideTriggerWeaponBarrelADiffuse]
hash = 748df67a
this = ResourceTriggerWeaponBarrelADiffuse

[TextureOverrideTriggerWeaponBarrelALightMap]
hash = c7377a02
this = ResourceTriggerWeaponBarrelALightMap

[TextureOverrideTriggerWeaponBarrelAMaterialMap]
hash = 798adb83
this = ResourceTriggerWeaponBarrelAMaterialMap
```

这些this指令的作用就是进行资源替换，一般用来替换贴图文件，而在这部分代码上方一般就是这个贴图的IB替换。

然后我们在此部分上方的"ib ="行下面添加对应的槽位代码：

注意：t3对应<b>Diffuse</b>，t4对应<b>NormalMap</b>，剩下两个是光照和材质（或者叫高光），t5对应<b>LightMap</b>，t6对应<b>MaterialMap</b>，一般按照顺序内的先后顺序对应即可。

由于此mod没有法线贴图（NormalMap），所以ps-t4位置留空即可。

### 第二步，我们再搜索"ib ="，找一下还有没有其他的IB：

```java
[TextureOverrideTriggerWeaponClipIB]
hash = f61f6acd
handling = skip
drawindexed = auto

[TextureOverrideTriggerWeaponClipA]
hash = f61f6acd
match_first_index = 0
run = CommandListSkinTexture
ib = ResourceTriggerWeaponClipAIB

[TextureOverrideTriggerWeaponGripIB]
hash = bb079ba3
handling = skip
drawindexed = auto

[TextureOverrideTriggerWeaponGripA]
hash = bb079ba3
match_first_index = 0
run = CommandListSkinTexture
ib = ResourceTriggerWeaponGripAIB
```

可以看到这些IB下面没有对应的“this”贴图内容，说明这几个IB是共用贴图的，这种情况在武器mod中很常见，我们需要把上面添加的槽位复制到其他IB的对应位置：

```java
[TextureOverrideTriggerWeaponClipIB]
hash = f61f6acd
handling = skip
drawindexed = auto

[TextureOverrideTriggerWeaponClipA]
hash = f61f6acd
match_first_index = 0
run = CommandListSkinTexture
ib = ResourceTriggerWeaponClipAIB
ps-t3 = ResourceTriggerWeaponBarrelADiffuse
ps-t5 = ResourceTriggerWeaponBarrelALightMap
ps-t6 = ResourceTriggerWeaponBarrelAMaterialMap

[TextureOverrideTriggerWeaponGripIB]
hash = bb079ba3
handling = skip
drawindexed = auto

[TextureOverrideTriggerWeaponGripA]
hash = bb079ba3
match_first_index = 0
run = CommandListSkinTexture
ib = ResourceTriggerWeaponGripAIB
ps-t3 = ResourceTriggerWeaponBarrelADiffuse
ps-t5 = ResourceTriggerWeaponBarrelALightMap
ps-t6 = ResourceTriggerWeaponBarrelAMaterialMap
```

反之，如果你的mod也有对应的“this”部分，仍旧像第一步使用对应的this行的贴图进行槽位替换即可。

---

## 然后我们来修改一个<b>SSMT(DBMT)</b>格式的mod

由于SSMT格式的特殊性，贴图配置可能在另外单独的ini文件内，我们为了便于理解和实操，这里使用一个具体的mod做修改演示，以[【武器mod】扳机-谢幕曲](https://www.caimogu.cc/post/1980528.html)为例：

我是低配，此武器mod是高配，修改前，效果如图：

<img src="/assets/YCuWbxluroOxbxxQKxQcaopVnhf.png" src-width="596" src-height="408" align="center"/>

可以看到贴图丢失，实际显示的还是原版武器贴图。

### 首先我们打开此武器mod的文件夹：

<img src="/assets/UCJqbEKvEoMCgAxAWz6cMV1Enig.png" src-width="572" src-height="260" align="center"/>

打开这个"trigger_weapon.ini"，搜索“this”发现并没有内容：

<img src="/assets/EkhhbZ4Iio7EaRxFcFbcdgqOnXf.png" src-width="594" src-height="162" align="center"/>

我们再进入到"Texture"文件夹内：

<img src="/assets/AJlUbrdrCoNezAxuTQPccQRcn7f.png" src-width="582" src-height="388" align="center"/>

打开这个"weapon.ini"，同样搜索“this”，可以看到贴图配置在这里：

```haskell
[Resource_19515c67]
filename = f05e3a4a_1_19515c67_Hash_DiffuseMap.dds

[TextureOverride_19515c67]
; f05e3a4a_1_19515c67_Hash_DiffuseMap.dds
hash = 19515c67
match_priority = 0
this = Resource_19515c67

[Resource_36f39b49]
filename = f05e3a4a_1_36f39b49_Hash_NormalMap.dds

[TextureOverride_36f39b49]
; f05e3a4a_1_36f39b49_Hash_NormalMap.dds
hash = 36f39b49
match_priority = 0
this = Resource_36f39b49
```

我们只需要将这些里面关于武器的4张贴图的Resource部分<b>依次</b>复制到另一个"trigger_weapon.ini"内即可：

```java
[Resource_19515c67]
filename = f05e3a4a_1_19515c67_Hash_DiffuseMap.dds

[TextureOverride_19515c67]
; f05e3a4a_1_19515c67_Hash_DiffuseMap.dds
hash = 19515c67
match_priority = 0
this = Resource_19515c67

[Resource_36f39b49]
filename = f05e3a4a_1_36f39b49_Hash_NormalMap.dds

[TextureOverride_36f39b49]
; f05e3a4a_1_36f39b49_Hash_NormalMap.dds
hash = 36f39b49
match_priority = 0
this = Resource_36f39b49

[Resource_2236b80e]
filename = f05e3a4a_1_2236b80e_Hash_LightMap.dds

[TextureOverride_2236b80e]
; f05e3a4a_1_2236b80e_Hash_LightMap.dds
hash = 2236b80e
match_priority = 0
this = Resource_2236b80e

[Resource_a6d2b50e]
filename = f05e3a4a_1_a6d2b50e_Hash_HighLightMap.dds

[TextureOverride_a6d2b50e]
; f05e3a4a_1_a6d2b50e_Hash_HighLightMap.dds
hash = a6d2b50e
match_priority = 0
this = Resource_a6d2b50e
```

复制到“trigger_weapon.ini”内的最下面后如下：

```haskell
[Resource_19515c67]
filename = f05e3a4a_1_19515c67_Hash_DiffuseMap.dds

[Resource_36f39b49]
filename = f05e3a4a_1_36f39b49_Hash_NormalMap.dds

[Resource_2236b80e]
filename = f05e3a4a_1_2236b80e_Hash_LightMap.dds

[Resource_a6d2b50e]
filename = f05e3a4a_1_a6d2b50e_Hash_HighLightMap.dds
```

这四张贴图分别对应这四个文件：

<img src="/assets/BHnWbNrcRoV2EgxxbQDceEGonHd.png" src-width="656" src-height="254" align="center"/>

如果你有查看dds图片的软件（比如paint.net），还可以随时查看它们的实际内容。

### 之后我们搜索"ib ="，找到如下部分：

```java
[TextureOverride_IB_trigger_weapon_枪身_Component1]
hash = f05e3a4a
match_first_index = 0
handling = skip
run = CommandListSkinTexture
ib = Resource_f05e3a4a_Component1
run = CommandList_IB_trigger_weapon_枪身_Component1

[TextureOverride_IB_trigger_weapon_枪柄_Component1]
hash = bb079ba3
match_first_index = 0
handling = skip
run = CommandListSkinTexture
ib = Resource_bb079ba3_Component1
run = CommandList_IB_trigger_weapon_枪柄_Component1

[TextureOverride_IB_trigger_weapon_弹夹_Component1]
hash = f61f6acd
match_first_index = 0
handling = skip
run = CommandListSkinTexture
ib = Resource_f61f6acd_Component1
run = CommandList_IB_trigger_weapon_弹夹_Component1
```

在每个"ib ="行下面加上对应的槽位：

```java
[TextureOverride_IB_trigger_weapon_枪身_Component1]
hash = f05e3a4a
match_first_index = 0
handling = skip
run = CommandListSkinTexture
ib = Resource_f05e3a4a_Component1
ps-t3 =
ps-t4 =
ps-t5 =
ps-t6 =
run = CommandList_IB_trigger_weapon_枪身_Component1

[TextureOverride_IB_trigger_weapon_枪柄_Component1]
hash = bb079ba3
match_first_index = 0
handling = skip
run = CommandListSkinTexture
ib = Resource_bb079ba3_Component1
ps-t3 =
ps-t4 =
ps-t5 =
ps-t6 =
run = CommandList_IB_trigger_weapon_枪柄_Component1

[TextureOverride_IB_trigger_weapon_弹夹_Component1]
hash = f61f6acd
match_first_index = 0
handling = skip
run = CommandListSkinTexture
ib = Resource_f61f6acd_Component1
ps-t3 =
ps-t4 =
ps-t5 =
ps-t6 =
run = CommandList_IB_trigger_weapon_弹夹_Component1
```

### 最后将对应的Resource依次复制填入即可：

<img src="/assets/FXbdbeNx9oQg9MxMyD6cjRc6nzf.png" src-width="594" src-height="420" align="center"/>

一般来说，t3对应Diffuse，t4对应NormalMap，t5对应Light，t6对应HighLight，但如果你发现用这个顺序替换后光照有问题的话，可以尝试对调一下t5和t6的Resource看看。

完成上述修改后保存，回到游戏F10，发现效果如下：

<img src="/assets/Bu1NbsLTEoQsE0x74v1cr7vwnmg.png" src-width="596" src-height="410" align="center"/>

这是由于原来的ini不在同一个文件夹引起的，因为weapon.ini实际在Texture文件夹内，所以我们将其中的Resource复制到trigger_weapon.ini内后，还要在filename后面<b>添加一下相对路径“Texture\”</b>：

<img src="/assets/W5J4bWG4GoTpk8x1R2UcdRa5n4c.png" src-width="594" src-height="284" align="center"/>

保存后再回到游戏F10：

<img src="/assets/RHTdbJuK2oCACkxri1EcbJBonre.png" src-width="598" src-height="410" align="center"/>

修复完成。

