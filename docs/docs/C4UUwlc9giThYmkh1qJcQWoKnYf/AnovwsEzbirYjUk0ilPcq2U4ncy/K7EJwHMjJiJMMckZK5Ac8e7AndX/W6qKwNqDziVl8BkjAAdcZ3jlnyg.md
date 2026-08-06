---
title: 脸部碎坏或冲突
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\K7EJwHMjJiJMMckZK5Ac8e7AndX\W6qKwNqDziVl8BkjAAdcZ3jlnyg
sidebar_position: 11
---


# 脸部碎坏或冲突

1.常见于露西和简、青衣和安比的脸部冲突，需要使用专用修复工具修复

2.mod对脸部的Position、Texcoord、Blend进行了修改，导致hash更新后脸部碎坏。不建议对脸部模型进行大的变动，这将导致hash更新后无法修复。正常的mod对脸部的修改仅限于一张DiffuseMap贴图。所以需要删除ini配置中关于脸部ib值的节(可以在我提供的hash表中查询)。比如

```toml
[TextureOverride_IB_f2f539b8_HeaA]
hash = e30ca87f  #删除这一行或添加注释或者删除整个节
match_first_index = 0
; hash = f2f539b8
handling = skip
run = CommandListSkinTexture
ib = Resource_f2f539b8_Head
run = CommandList_IB_f2f539b8_Head

[TextureOverride_IB_f2f539b8_HeaB]
hash = e30ca87f #删除这一行或添加注释或者删除整个节
match_first_index = 984
; hash = f2f539b8
handling = skip
run = CommandListSkinTexture
ib = Resource_f2f539b8_Body
run = CommandList_IB_f2f539b8_Body

[TextureOverride_IB_f2f539b8_HeaC]
hash = e30ca87f #删除这一行或添加注释或者删除整个节
match_first_index = 8442
; hash = f2f539b8
handling = skip
run = CommandListSkinTexture
ib = Resource_f2f539b8_Dress
run = CommandList_IB_f2f539b8_Dress
```

