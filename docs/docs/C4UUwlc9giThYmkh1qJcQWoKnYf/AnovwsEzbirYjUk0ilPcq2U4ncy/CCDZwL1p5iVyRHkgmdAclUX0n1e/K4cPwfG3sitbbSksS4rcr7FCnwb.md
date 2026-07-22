---
title: 发光太亮或太暗
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\CCDZwL1p5iVyRHkgmdAclUX0n1e\K4cPwfG3sitbbSksS4rcr7FCnwb
sidebar_position: 2
---


# 发光太亮或太暗

1.确保Mods文件夹里只有一个且是最新的RabbitFX插件。

2.在ini配置文件里找到RabbitFX相关的代码，$\RabbitFX\brightness = 5，调节后面的数字即可改变亮度。调节后保存并在游戏里按F10刷新看效果。

```json
[TextureOverride_IB_AstraWedding_body_Component1]
hash = 7a110804
match_first_index = 0
handling = skip
run = CommandListSkinTexture
ib = Resource_7a110804_Component1
ps-t4 = Resource_7a110804_1_ebac056e_Slot_NormalMap
$\RabbitFX\H = 0
$\RabbitFX\S = 0
$\RabbitFX\V = 0
$\RabbitFX\brightness = 5   #这里的数字越大则越亮
$\RabbitFX\interpolate = 1
$\rabbitfx\blendmode = 1
ps-t17 = ResourceT17
ps-t18 = ResourceT18
run = CommandList\RabbitFX\Run
run = CommandList_IB_AstraWedding_body_Component1
```

