---
title: 头发阴影异常
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\K7EJwHMjJiJMMckZK5Ac8e7AndX\SVIiwgmDgiDlo1kLiwgcva7fnTd
sidebar_position: 2
---


# 头发阴影异常

某些mod对头发阴影进行了改动，当游戏更新时hash产生变化就会导致脸上出现阴影异常。

解决方法：

修复工具并不支持头发阴影的更新，所以需要手动删掉头发阴影的IB，可以在hash表中查询。

```text
[TextureOverride403eace9Head]
;hash = 403eace9  ;在hash表中找到对应的IB后查找值，然后删除或者注释
match_first_index = 0
Resource_Bak_IB0 = ref ib
ib = Resource403eace9Head
drawindexed = auto
ib = Resource_Bak_IB0
```

