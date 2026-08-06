---
title: 如何禁用与启用mod
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\AbbZwebuBiwVyVkH9AbcFCo7nBe\OzfPwA6nbiRSg2k4jD4cmRiCnLb
sidebar_position: 4
---


# 如何禁用与启用mod

禁用mod

1.修改mod文件夹名字，添加`disabled`前缀，大小写均可。比如mod文件夹名字为`AAAAA`，禁用就修改为`disabledAAAAA`、`DISABLEDAAAAA`、`disabled-AAAAA`

2.修改mod的ini配置文件，添加disabled前缀，大小写均可。比如mod的ini名字为`luxiya.ini`，禁用就修改为`DISABLED_luxiya.ini`、`disabled-luxiya.ini`、`disabledluxiya.ini`

启用mod

同理，删除disabled前缀即可。比如mod文件夹名字或者ini配置文件名字为`disabled-luxiya`，启用就修改为

`luxiya`

常见应用

在一些修复工具中需要对ini配置文件内容进行修改，会提前创建一个备份文件用于恢复，备份文件名就会使用disabled前缀来禁用。比如原来的名字为`luxiya.ini`,创建的备份就可能是`DISABLED_BACKUP_1779421128.luxiya.ini`

