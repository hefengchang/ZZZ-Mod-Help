---
title: RabbitFX6.0版本之后，发光失效
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\CCDZwL1p5iVyRHkgmdAclUX0n1e\EHz8wk8mHiogYKkCGikcaDgvnUg
sidebar_position: 3
---


# RabbitFX6.0版本之后，发光失效

6.0版本更新后需要使用专用的修复工具来进行修复。

6.0版本后更新需要详细阅读官方的使用说明，一些旧模组需要手动添加一些代码来运行。

<img src="/assets/BNZSbiCH9oHpRixNmp9cqhkpnYc.png" src-width="686" src-height="464" align="center"/>

版本修复工具可能导致发光异常不生效，参考第四条[用了修复工具反而修坏了](/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy\Yv45wzUfTijAwMkldP0c7lmFnLe)

但某些mod本身ini配置中关于发光部分的代码就有问题，这会导致仍然无法生效。下面举例说明如何修复：

1.下面是未修复之前的代码，我们可以看到在Face和Hair的节中它缺少了match_first_index来指定首个匹配项的索引，而有些ib下是有多个索引项的，如果不添加这个索引就会导致发光卡顿问题。

<img src="/assets/JqaHb8eOAoC17OxuFADc0uaqnQh.png" src-width="584" src-height="714" align="center"/>

```java
[TextureOverrideJaneFaceA]
hash = ef86fc9f
run = CommandListSkinTexture
$\RabbitFX\brightness = 33
$\RabbitFX\interpolate = 1
ps-t17 = Resource9989
run = CommandList\RabbitFX\Run

[TextureOverrideJaneBodyA]
hash = ba4255a5
match_first_index = 0
run = CommandListSkinTexture
$\RabbitFX\brightness = 30
$\RabbitFX\interpolate = 1
ps-t17 = Resource9855
run = CommandList\RabbitFX\Run

[TextureOverrideJaneHairA]
hash = 9268a5af
run = CommandListSkinTexture
$\RabbitFX\brightness = 40
$\RabbitFX\interpolate = 1
ps-t17 = ResourceJaneFX
run = CommandList\RabbitFX\Run

[Resource9989]
filename = 1234.dds

[ResourceJaneFX]
filename = 1235.dds

[Resource9855]
filename = 9855.dds
```

2.为Face和Hair添加match_first_index ，关于其数值可以到[角色hash表](https://www.caimogu.cc/post/2075618.html)中查找。可以尝试不同的索引值来添加正确的索引。

```java
[TextureOverrideJaneFaceA]
hash = ef86fc9f
match_first_index = 9012
run = CommandListSkinTexture
$\RabbitFX\brightness = 33
$\RabbitFX\interpolate = 1
ps-t17 = Resource9989
run = CommandList\RabbitFX\Run
match_priority = 0

[TextureOverrideJaneBodyA]
hash = ba4255a5
match_first_index = 0
run = CommandListSkinTexture
$\RabbitFX\brightness = 30
$\RabbitFX\interpolate = 1
ps-t17 = Resource9855
run = CommandList\RabbitFX\Run

[TextureOverrideJaneHair]
hash = 9268a5af
match_first_index = 33780
run = CommandListSkinTexture
$\RabbitFX\brightness = 40
$\RabbitFX\interpolate = 1
ps-t17 = ResourceJaneFX
run = CommandList\RabbitFX\Run

[Resource9989]
filename = 1234.dds

[ResourceJaneFX]
filename = 1235.dds

[Resource9855]
filename = 9855.dds
```

3.修改后，运行RabbitFX专用修复工具，会将ps-t17和ps-t18替换，得到以下代码。

```java
[TextureOverrideJaneFaceA]
hash = ef86fc9f
match_first_index = 9012
run = CommandListSkinTexture
$\RabbitFX\brightness = 33
$\RabbitFX\interpolate = 1
Resource\RabbitFX\GlowMap = ref resource9989
run = CommandList\RabbitFX\Run

[TextureOverrideJaneBodyA]
hash = ba4255a5
match_first_index = 0
run = CommandListSkinTexture
$\RabbitFX\brightness = 30
$\RabbitFX\interpolate = 1
Resource\RabbitFX\GlowMap = ref resource9855
run = CommandList\RabbitFX\Run

[TextureOverrideJaneHairA]
hash = 9268a5af
match_first_index = 33780
run = CommandListSkinTexture
$\RabbitFX\brightness = 40
$\RabbitFX\interpolate = 1
Resource\RabbitFX\GlowMap = ref resourceJaneFX
run = CommandList\RabbitFX\Run

[Resource9989]
filename = 1234.dds

[ResourceJaneFX]
filename = 1235.dds

[Resource9855]
filename = 9855.dds
```

4.此时我们发现仍然无法正常发光，这是因为以下原因。

<img src="/assets/TFnsbQQV4o3P3ax6s0UcNEZBnFd.png" src-width="610" src-height="676" align="center"/>

<img src="/assets/TweobrodRoeuXCxzreMcxi6Snxh.png" src-width="660" src-height="496" align="center"/>

5.继续修改，得到以下代码，则正常发光，且无卡顿现象。

```java
[TextureOverrideJaneFaceA]
hash = ef86fc9f
match_first_index = 9012
run = CommandListSkinTexture
$\RabbitFX\brightness = 33
$\RabbitFX\interpolate = 1
Resource\RabbitFX\GlowMap = ref resource9989
run = CommandList\RabbitFX\Run
handling = skip
drawindexed = auto

[TextureOverrideJaneBodyA]
hash = ba4255a5
match_first_index = 0
run = CommandListSkinTexture
$\RabbitFX\brightness = 30
$\RabbitFX\interpolate = 1
Resource\RabbitFX\GlowMap = ref resource9855
run = CommandList\RabbitFX\Run
handling = skip
drawindexed = auto

[TextureOverrideJaneHairA]
hash = 9268a5af
match_first_index = 33780
run = CommandListSkinTexture
$\RabbitFX\brightness = 40
$\RabbitFX\interpolate = 1
Resource\RabbitFX\GlowMap = ref resourceJaneFX
run = CommandList\RabbitFX\Run
handling = skip
drawindexed = auto

[Resource9989]
filename = 1234.dds

[ResourceJaneFX]
filename = 1235.dds

[Resource9855]
filename = 9855.dds
```

