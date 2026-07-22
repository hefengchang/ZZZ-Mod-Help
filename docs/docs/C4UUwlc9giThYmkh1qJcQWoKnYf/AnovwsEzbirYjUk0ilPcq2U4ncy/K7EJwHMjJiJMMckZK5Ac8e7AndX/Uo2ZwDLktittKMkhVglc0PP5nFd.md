---
title: 大地图的地板等模型消失
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\K7EJwHMjJiJMMckZK5Ac8e7AndX\Uo2ZwDLktittKMkhVglc0PP5nFd
sidebar_position: 7
---


# 大地图的地板等模型消失

某些mod导致的冲突，需要手动排查。

1.常见于千夏mod导致的问题，千夏的腰部电子屏幕的ib 0b9bd38f 与野火镇的地板冲突，导致电子屏幕被屏蔽后地板消失。

```haskell
[TextureOverrideSunnaScreenIB]
hash = 0b9bd38f
handling = skip
ib = null
```

需要删除相关代码，在游戏中刷新看是否恢复正常。

如果正常后出现了电子屏幕，那么就在mod中新建一个ini文件，写入以下代码来进行隐藏。

```haskell
[TextureOverrideTamagotchiskip]
hash = 6f7ae47c
vb0 = null
vb2 = null
handling = skip
draw = 4, 0
```

相关问题https://gamebanana.com/questions/102184

