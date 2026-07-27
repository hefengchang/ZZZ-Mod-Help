---
title: 透明Mod制作与修改
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\NIgVwUD9hitvxKkbdlOcNQ65nve\FHN3wyYLKiX2nOk6KzmcnsSmn2c
sidebar_position: 7
---


# 透明Mod制作与修改

## 前言

目前我知道的绝区零制作透明mod的方法有两种，一种是角色本身具有透明材质，比如安比的背包的黄色壳子，柳的眼睛片等，这些部位的着色器可以读取到贴图的透明度，所以我们可以通过修改alpha值来制作透明效果。

<img src="/assets/Olkvb6356ok4QOx2l1Yc7G9GnLf.png" src-width="526" src-height="556" align="center"/>

<img src="/assets/WtdDbLIIeoxVa5xnzmjcaQUDnWd.png" src-width="530" src-height="326" align="center"/>

但这些部位往往和我们想要修改的部位不是同一个IB，而且本身带有透明材质的角色很少，所以这种方法很有局限性。

还有另一种方法就是利用3dmigoto本身的代码支持，实现透明。这种方法更加通用，所以本文介绍这种方法。

---

## mod要求

首先，制作透明mod需要先将mod的部件拆分，导出为具有多个drawindex的mod。比如我们想要让衣服透明，那就要将身体和衣服拆开，让它们分别具有单独的drawindex。如果整个身体只有一个drawindex，那么我们即使添加了透明代码，也只能让整个身体透明，而不是仅仅让衣服透明。

代码对比如下：

```haskell
[TextureOverrideBelleBodyA]
hash = 1817f3ca
match_first_index = 0
handling = skip
ib = ResourceBelleBodyAIB
drawindexed = auto
```

这是没有拆分的mod，这个IB只有一个drawindex，无法单独为衣服制作透明。

```haskell
[TextureOverrideYanagiBodyA]
hash = f478ee4c
match_first_index = 0
handling = skip
run = CommandListskinTexture
ib = ResourceYanagiBodyAIB
;YanagiBodyA (0)
drawindexed= 0, 0,0
;Yanagi Body Latest Test Accurate (11692)
drawindexed = 64551,45576,0
;YanBodyA-ArmBand (102)
drawindexed = 336,142959,0
;YanBodyA-WristBands (717)
drawindexed = 2628,154278,0
```

而这就是做了拆分的mod，每个部件具有单独的drawindex，我们就可以为这些部件单独制作透明效果。

---

## 修改过程

<img src="/assets/NFK3bnCcYo9rtCxW0GecvJLKnug.png" src-width="532" src-height="422" align="center"/>

我来展示一下为柳的裙子添加透明效果。

首先，在ini中找到负责绘制裙子部分的代码：

```haskell
;skirt
if $skirt = 0
        ;YanBodyA-Belts (1662)
        drawindexed = 3516,143295,0
        ;YanBodyA-Belts.001(504)
        drawindexed = 942,146811,0
        ;YanBodyA-Skirt.Mini (808)
        drawindexed = 2925,147753,0
elif $skirt == 1
         ;YanBodyA-Belts (1662)
         drawindexed = 3516,143295,
         ;YanBodyA-Belts.001 (504)
         drawindexed = 942,146811,0
endif
```

可以看到有多个drawindex，如果代码内没有注释，我们可以通过在drawindex行前添加分号后回到游戏查看效果，来寻找裙子的drawindex，找到后，我们将这个drawindex使用分号注释掉，然后在上方添加一行代码：

run = CustomShaderTransparency

注意，“run = ”后面的代码中，必要的部分是“CustomShader”，剩余的部分则可以自定义，建议使用部位来命名，比如这里我使用了“CustomShaderTransparencySkirt”：

```haskell
;skirt
if $skirt = 0
        ;YanBodyA-Belts (1662)
        drawindexed = 3516,143295,0
        ;YanBodyA-Belts.001(504)
        drawindexed = 942,146811,0
        ;YanBodyA-Skirt.Mini (808)
        run = CustomShaderTransparencySkirt
        ;drawindexed = 2925,147753,0
elif $skirt == 1
         ;YanBodyA-Belts (1662)
         drawindexed = 3516,143295,
         ;YanBodyA-Belts.001 (504)
         drawindexed = 942,146811,0
endif
```

然后来到Override部分的最后，添加如下代码：

（如果对ini代码的结构不熟悉，也可以添加在所有代码内容的最末尾）

```haskell
[CustomShaderTransparencySkirt]
blend = ADD BLEND_FACTOR INV_BLEND_FACTOR
blend_factor[0] = 0.9
blend_factor[1] = 0.9
blend_factor[2] = 0.9
blend_factor[3] = 1
handling = skip
drawindexed = 2925,147753,0
```

我们只需要调整前三个值来控制透明效果，0为全透明，1为不透明。一般我们会同时调整这三个数值，你也可以单独调整他们的值来改变透明的色调。

最后一行的drawindex就是上一步中我们注释掉的那一行负责绘制裙子的drawindex。

下面是此部分代码的模板：

[CustomShader###]

blend = ADD BLEND_FACTOR INV_BLEND_FACTOR

blend_factor[0] = 0.5

blend_factor[1] = 0.5

blend_factor[2] = 0.5

blend_factor[3] = 1

handling = skip

drawindexed = ###

---

## 查看效果

完成以上修改后，我们回到游戏查看效果，发现裙子的透明效果实现了，但裙子下面的内裤却消失了：

<img src="/assets/QxlHbpUe6outxTx0YAkc8Vjhnvb.png" src-width="534" src-height="416" align="center"/>

但其实如果我们将视角转到裙底，会发现内裤并没有消失，只是透过裙子观察时，会连同内裤一起透视掉。

## 注意点

这是最需要注意的一点。如果我们回到ini代码中，会发现负责绘制裙子的drawindex，在负责绘制内裤的drawindex之前，这就是导致错误的原因：

代码中的绘制顺序会影响最终mod的显示效果。

我们将裙子的drawindex部分移动到内裤之后（或将内裤的绘制提前），再回到游戏中查看效果：

<img src="/assets/TCbib4ciDovJ8uxnvXecwHTrndp.png" src-width="532" src-height="412" align="center"/>

显示恢复正常了。

一句话总结就是：在ini代码中，需要按照由内到外的顺序进行绘制。

比如素体要在内衣之前绘制，内衣要在外套之前绘制，这样最终的透视效果才不会出错。

最后，如果要对多个部位制作透明，重复上面的修改过程，并为每个部位配置单独的CustomShader即可：

<img src="/assets/UXpNbduvXoAsDUxX1SMcNwBlngg.png" src-width="526" src-height="750" align="center"/>

注意按照由内到外的顺序进行绘制才不会出错。

