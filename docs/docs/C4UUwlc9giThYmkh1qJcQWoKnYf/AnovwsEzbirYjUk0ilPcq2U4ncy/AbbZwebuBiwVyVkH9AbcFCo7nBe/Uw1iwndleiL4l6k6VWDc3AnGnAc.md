---
title: Mod切换按键不在前台仍然切换
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\AbbZwebuBiwVyVkH9AbcFCo7nBe\Uw1iwndleiL4l6k6VWDc3AnGnAc
sidebar_position: 3
---


# Mod切换按键不在前台仍然切换

1.该Mod未添加活动变量（通常为$active），来检测是否角色处于前台。其原理是当检测到独属于该角色的某个hash值时来判断该角色处于前台，从而使按键生效。以下代码为正确的示例

```sql
[Constants]
global $active0
global persist $swapkey0 = 0
;----------------------------------------------------------
[Present]
post $active0 = 0
;----------------------------------------------------------
[KeySwap0]
condition = $active0 == 1
key = 8
type = cycle
$swapkey0 = 0,1
;----------------------------------------------------------
[TextureOverridee74620b5IB]
hash = e74620b5
handling = skip

[TextureOverridee74620b5Head]
hash = e74620b5
match_first_index = 0
run = CommandListSkinTexture
ib = Resourcee74620b5Index
Resource\ZZMI\Diffuse = ref  Resource_e74620b5-af9d845a-0-DiffuseMap
Resource\ZZMI\NormalMap = ref  Resource_e74620b5-e5e273fe-0-NormalMap
Resource\ZZMI\LightMap = ref  Resource_e74620b5-75e05cdc-0-LightMap
Resource\ZZMI\MaterialMap = ref  Resource_e74620b5-50a0faea-0-HighLightMap
run = CommandList\ZZMI\SetTextures
if $swapkey0 == 0
  drawindexed = 31506,0,0
else if $swapkey0 == 1
  drawindexed = 33108,31506,0
endif

; e74620b5 -------------------------
[TextureOverridee74620b5Position]
hash = 5dc40184
vb2 = Resourcee74620b5Blend
vb0 = Resourcee74620b5Position
handling = skip
draw = 18458, 0
$active0 = 1

[TextureOverridee74620b5Texcoord]
hash = 4c6b7bda
vb1 = Resourcee74620b5Texcoord

[TextureOverridee74620b5Blend]
hash = aa71e514

[TextureOverridee74620b5_VertexLimitRaise]
hash = 2eb162ef
```

2.某些工具造成的ini配置产生了变化，修改了按键相关的代码，需要恢复ini的备份文件来进行修复。比如这个链接里的工具https://gamebanana.com/tools/19862

相关问题：https://gamebanana.com/questions/99072

