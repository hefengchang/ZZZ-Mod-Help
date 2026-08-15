---
title: 全身轮廓异常发光
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\AbbZwebuBiwVyVkH9AbcFCo7nBe\GRElwwKoBiu2sPkYyv1cQRKinPf
sidebar_position: 5
---


# 全身轮廓异常发光

在大世界中显示正常，但在角色界面表现为轮廓发光。如图

<img src="/assets/QMe4bjm70oWdTcxXT0pckK4Jnbh.png" src-width="818" src-height="786" align="center"/>

原因：这属于脸部代码配置错误。需要删除脸部相关代码或者重新编辑。

举例：

错误的代码，使用了旧版的槽位ps-t3替换贴图

```text
[TextureOverrideNekomataFace]
hash = 37119851  ;脸部IB
run = CommandListSkinTexture
ps-t3 = ResourceNekomataFace  ;槽位替换

[ResourceNekomataFace]
filename = NekomataFace-t2diffuse=fed3abbe.dds
```

正确的代码，应该使用hash指定贴图或者slotfix的写法

```text
[TextureOverrideNekomataFace]
hash = 37119851  ;脸部IB
match_first_index = 0  ;可选择添加索引
run = CommandListSkinTexture
Resource\ZZMI\Diffuse = ref ResourceNekomataFace  ;使用slotfix写法的槽位
run = CommandList\ZZMI\SetTextures  ;使用slotfix写法

[ResourceNekomataFace]
filename = NekomataFace-t2diffuse=fed3abbe.dds
```

