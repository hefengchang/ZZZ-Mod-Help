---
title: 修复不同角色的Mod冲突
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\NIgVwUD9hitvxKkbdlOcNQ65nve\Om7OwJ7vniguAIkFqiocfbu0nYg
sidebar_position: 2
---


# 修复不同角色的Mod冲突

# 前言

此教程介绍了如何解决不同角色的mod之间发生冲突，导致的其他角色面部丢失等问题。

# 观前提醒

目前ZZZ中不同角色产生冲突的原因基本上都是使用position的hash制作mod导致的，而目前XXMI使用的格式是角色的blend的hash值，可以避免冲突问题。建议如果不是使用XXMI工具制作mod的话，可以先尝试仿照此格式来解决，如若不行再尝试后面的旧方法。

---

# XXMI格式

首先打开你的ini，找到冲突的ib的position部分，以露西头发为例，下方应该有对应的空的Blend部分：

```haskell
[TextureOverrideLucyHairPosition]  
hash = 6c733c84  
vb2 = ResourceLucyHairBlend  
vb0 = ResourceLucyHairPosition  
handling = skip  
draw = 2599,0  

[TextureOverrideLucyHairTexcoord]  
hash = c8810832  
vb1 = ResourceLucyHairTexcoord
  
[TextureOverrideLucyHairBlend]  
hash = a37c7537
```

即使没有，你的mod制作工具导出的原始模型文件内的json文件中也应该会记录所有ib的blend的hash值。

将position节下面的所有内容移到blend节，并修改为下面的格式即可：

```haskell
[TextureOverrideLucyHairBlend]  
hash = a37c7537  
handling = skip  
vb2 = ResourceLucyHairBlend  
if DRAW_TYPE == 1  
    vb0 = ResourceLucyHairPosition
    draw = 2599,0  
endif
```

前后对照：

如此修改后即可解决冲突问题。

---

# 旧版方法

方法参考：[Cool summer_Lucy](https://gamebanana.com/mods/541492)、[Lucy - Schoolgirl Cosplay](https://gamebanana.com/mods/542524)、https://gamebanana.com/tuts/18018

部分hash已过时，但方法仍适用。

由于原理是角色活动状态判断，所以当两个角色同时出现在屏幕上时，冲突仍会发生。

使用此方法修复后可以保留露西mod修改后的头发，而不是改回原头发。

此方法也可用于解决其他角色间的mod冲突问题。

关于安比和青衣的脸部冲突问题，此方法也可解决；但如果mod只是修改了脸部贴图，那么还有更简单的方法，那就是不替换脸部模型，只替换脸部贴图，即可完美解决冲突。

---

## 正文

以露西头发和简的脸部冲突导致简的脸部消失为例：

首先打开引发冲突的mod的ini文件。

如果有多个ini，则需要找到包含冲突部分的ini，比如露西头发的ini通常名字为hair.ini或198e99d7.ini。

### 第1步，在Constants部分添加如下代码：

```haskell
[Constants]  
global $hairActive = 0  

[Present]  
post $hairActive = $hairActive - 1
```

如果找不到Constants部分，直接在文档开头添加即可。

图中蓝色背景的$hairActive是变量名，名称不是固定的，根据情况可以自行修改。

### 第2步，修改HairPosition命令：

使用“if $hairActive &gt; 0”的条件判断包裹HairPosition命令下的代码段（不要忘记endif结尾）：

```haskell
; 修改前
[TextureOverride198e99d7Position]  
hash = 6c733c84  
vb2 = Resource198e99d7Blend  
vb0 = Resource198e99d7Position  
handling = skip  
draw = 2970, 0  

; 修改后  
[TextureOverride198e99d7Position]  
hash = 6c733c84  
if $hairActive > 0
vb2 = Resource198e99d7Blend
vb0 = Resource198e99d7Position   
handling = skip    
draw = 2970, 0  
endif
```

善用搜索，如果命令行标题没有写明Hair字样，也可以通过搜索HairPosition的hash值“6c733c84”来寻找。

另外，由于露西的头发在满信赖动态背景的模型中有另外的hash值，如果需要修复，可以复制一份修复后的HairPosition命令，修改一下标题名，并将hash值改为“39cfd24c ”：

```haskell
[TextureOverride198e99d7Position]  
hash = 6c733c84
if $hairActive > 0
vb2 = Resource198e99d7Blend    
vb0 = Resource198e99d7Position    
handling = skip    
draw = 15613, 0  
endif 

[TextureOverride198e99d7Position2]  
hash = 39cfd24c 
if $hairActive > 0
vb2 = Resource198e99d7Blend    
vb0 = Resource198e99d7Position    
handling = skip    
draw = 15613, 0  
endif 
 
[TextureOverride198e99d7Texcoord]  
hash = c8810832  
vb1 = Resource198e99d7Texcoord  

[TextureOverride198e99d7Blend]  
hash = a37c7537

[TextureOverride198e99d7_40_15613_VertexLimitRaise]  
hash = 5661afc3
```

### 第3步,修改HairTexcoord命令：

在HairTexcoord命令下的hash下方添加

$hairActive = 3

```haskell
; 198e99d7  -------------
[TextureOverride198e99d7Position]  
hash = 6c733c84  
if $hairActive > 0    
vb2 = Resource198e99d7Blend    
vb0 = Resource198e99d7Position    
handling = skip    
draw = 15613, 0  
endif  

[TextureOverride198e99d7Position2]  
hash = 39cfd24c 
if $hairActive > 0    
vb2 = Resource198e99d7Blend    
vb0 = Resource198e99d7Position    
handling = skip    
draw = 15613, 0  
endif  
[TextureOverride198e99d7Texcoord]  
hash = c8810832
$hairActive = 3  
vb1 = Resource198e99d7Texcoord
  
[TextureOverride198e99d7Blend]  
hash = 5315f036 
 
[TextureOverride198e99d7_40_2970_VertexLimitRaise]  
hash = 5661afc3
```

此命令一般就在HairPosition命令下方，如果没找到，同样可以通过搜索hash值“c8810832”来定位此处。

完成以上步骤后保存，即可修复冲突问题。

