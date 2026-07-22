---
title: mod或贴图不生效
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\EPpFwcOYLiewj0k3l23cHjySnKl\QM9XwrIPWiyA9fk9JDFc1kdLn0b
sidebar_position: 1
---


# mod或贴图不生效

常见于旧版的3Dmigoto加载器，需要在d3dx.ini配置文件中添加槽位检查。

打开d3dx.ini，找到以下内容并进行补全。

```java
; Shader overrides -----------------------------------------
; This is very inefficient hence is limited to the most common resources

[ShaderRegexEnableTextureOverrides]
shader_model = vs_4_0 vs_4_1 vs_5_0 vs_5_1
run = CommandListSkin

[ShaderOverrideCharacterRoot]
hash = e8425f64cfb887cd
run = CommandListSkin

[CommandListSkin]
if $costume_mods
        checktextureoverride = ps-t0
        checktextureoverride = vb0
        checktextureoverride = vb1
        checktextureoverride = vb2
        checktextureoverride = vb3
        checktextureoverride = ib
        x140 = 0
endif

[CommandListSkinTexture]
if $costume_mods
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
        x140 = 0
endif

;F6 as a switch to control mods open or close
[KeyToggleMods]
Key = no_modifiers F6
$costume_mods = 0,1
type = cycle
```

