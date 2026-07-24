---
title: 叶瞬光在某个视角会导致异常
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\K7EJwHMjJiJMMckZK5Ac8e7AndX\DQORwGBY6isTBFkUsqwcif6hnvg
sidebar_position: 10
---


# 叶瞬光在某个视角会导致异常

在某个视角下整个场景界面变为绿色或者卡顿等异常，原因是ini文件中胸前的透明布料代码错误，比如

```haskell
[TextureOverrideYeShunguangDressFlapBlend]
hash = ae7d7235
handling = skip
vb2 = ResourceYeShunguangDressFlapBlend
if DRAW_TYPE == 1
        vb0 = ResourceYeShunguangDressFlapPosition
        draw = 1295, 0
        $active = 1
endif

[TextureOverrideYeShunguangDressFlapTexcoord]
hash = 441f1cf2
vb1 = ResourceYeShunguangDressFlapTexcoord

[TextureOverrideYeShunguangDressFlapVertexLimitRaise]
hash = 67a50546
override_vertex_count = 1295
override_byte_stride = 40

[TextureOverrideYeShunguangDressFlapIB]
hash = 3b1b73fe
handling = skip
```

需要禁用或删除掉`hash = ae7d7235`所在的节，同时`hash = 3b1b73fe`所在的节需要添加`ib = null`。

正确的代码内容如下

```haskell
;[TextureOverrideYeShunguangDressFlapBlend]
;hash = ae7d7235
;handling = skip
;vb2 = ResourceYeShunguangDressFlapBlend
;if DRAW_TYPE == 1
;        vb0 = ResourceYeShunguangDressFlapPosition
;        draw = 1295, 0
;        $active = 1
;endif

[TextureOverrideYeShunguangDressFlapTexcoord]
hash = 441f1cf2
vb1 = ResourceYeShunguangDressFlapTexcoord

[TextureOverrideYeShunguangDressFlapVertexLimitRaise]
hash = 67a50546
override_vertex_count = 1295
override_byte_stride = 40

[TextureOverrideYeShunguangDressFlapIB]
hash = 3b1b73fe
handling = skip
ib = null
```

