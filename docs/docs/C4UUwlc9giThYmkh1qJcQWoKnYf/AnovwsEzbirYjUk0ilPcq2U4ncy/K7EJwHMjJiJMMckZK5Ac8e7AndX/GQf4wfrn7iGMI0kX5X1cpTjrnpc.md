---
title: 头发等部位在动态壁纸中贴图错乱
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\K7EJwHMjJiJMMckZK5Ac8e7AndX\GQf4wfrn7iGMI0kX5X1cpTjrnpc
sidebar_position: 1
---


# 头发等部位在动态壁纸中贴图错乱

在动态壁纸中，部分角色有另外的hash值，你需要找到并添加它。

比如露西的头发，应该在头发ib的Position节附近添加另一个hash值的节（绿色标注），以下为举例代码，具体代码以具体mod为准。代码中的hash并非最新值。

```text
[TextureOverride198e99d7PositionWallpaper]
hash = 39cfd24c
if $active== 1
vb2 = Resource198e99d7Blend
vb0 = Resource198e99d7Position
handling = skip
draw = 3833, 0
endif
[TextureOverride198e99d7Position]
hash = 6c733c84
if $active== 1
vb2 = Resource198e99d7Blend
vb0 = Resource198e99d7Position
handling = skip
draw = 3833, 0
endif
```

相关问题参考：https://gamebanana.com/questions/88107

