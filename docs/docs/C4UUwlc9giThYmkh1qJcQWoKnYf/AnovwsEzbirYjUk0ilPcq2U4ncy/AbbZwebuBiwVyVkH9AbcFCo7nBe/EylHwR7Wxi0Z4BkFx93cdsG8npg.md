---
title: 隐藏物品
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\AbbZwebuBiwVyVkH9AbcFCo7nBe\EylHwR7Wxi0Z4BkFx93cdsG8npg
sidebar_position: 1
---


# 隐藏物品

如果想隐藏某些物品可以在mod的ini配置中将该物品的hash值隐藏掉，以下代码为示例（请勿复制红字内容）：

```haskell
[TextureOverride0Yixuan2huluAIB]  #节名中除了TextureOverride不可以修改外，其他随意改
hash = 1630f2d0  #物品IB值
handling = skip  #跳过
ib = null
```

对于特效类的隐藏一般需要使用ShaderOver

```haskell
[ShaderOverrideMiyabibigeyes1]   #节名中除了ShaderOverride不可以修改外，其他随意改
hash = c1991b24cd07fbb8 #特效VS值
handling = skip  #跳过
ib = null
```

相关参考贴：

https://gamebanana.com/questions/104216

https://gamebanana.com/requests/78618

