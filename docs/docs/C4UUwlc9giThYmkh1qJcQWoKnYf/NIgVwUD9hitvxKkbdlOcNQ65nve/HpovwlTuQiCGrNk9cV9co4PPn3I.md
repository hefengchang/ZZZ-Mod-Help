---
title: 活动状态判断 - 以修复邦布眼睛丢失为例
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\NIgVwUD9hitvxKkbdlOcNQ65nve\HpovwlTuQiCGrNk9cV9co4PPn3I
sidebar_position: 5
---


# 活动状态判断 - 以修复邦布眼睛丢失为例

问题的原因和解决办法很简单。

原因就是有很多邦布的眼睛模型的hash值是共享的，具体如下：

<img src="/assets/HlzkbjSyVoDidbxZlcwc8C4enrc.png" src-width="514" src-height="60" align="center"/>

所以比如一个巴特勒的mod去除了原模型的眼睛，那么其他共享hash的邦布就都会丢失眼睛。

解决办法就是修改mod的ini文件，让mod仅在该邦布的身体出现在屏幕上时才会去掉眼睛，具体方法如下。

---

## 第一步、修改Constants部分

打开mod文件夹内的ini文件

如果有多个ini文件，则打开眼睛部分的ini文件（通常可以利用hash值来寻找）

在Constants部分（一般在文档开头）添加下面的代码：

|[Constants] [常量]

global $active

[Present] [当前]

post $active = 0

```haskell
[Constants]
global $active
[Present]
post $active = 0
```

这是为了设置活动状态（仅当此对象出现在屏幕上时，才怎么样），这也是那些mod合并工具能够实现仅当角色活动时切换键才生效的方法，防止不同角色的合并mod使用相同切换键而互相影响。

---

## 第二步、修改眼睛部分

找到去除邦布眼睛的代码部分（可通过hash值搜索），将代码进行如下修改即可：

<img src="/assets/LRJkbKkvpobiQExITzQcRzIinQb.png" src-width="528" src-height="152" align="center"/>

注意if语句和endif之间的代码行前的缩进

注意：如果你要修复的mod不只是去除了原本的眼睛，而是修改了眼睛，那么需要将所有眼睛部分的代码的hash下面的语句都使用if条件包裹：

<img src="/assets/PLvfbxZaqobGA5xnL5UcqoYSn5g.png" src-width="506" src-height="604" align="center"/>

---

## 第三步、修改BodyPosition部分

在BodyPosition命令部分最后添加：

$active = 1

```haskell
[TextureOverrideButlerBodyPosition]
hash= 39239aba
handling= skip
vb0=ResourceButlerBodyPosition
vb2=ResourceButlerBodyBlend
draw=6088,0
$active =1
```

如果有多个ini文件，而你打开的是眼睛部分的ini文件，那么可以在文档末尾处添加如下代码：

> [TextureOverrideBodyPosition]
> hash=到body的ini中的BodyPosition下寻找
> $active=1

$active = 1之所以需要加在邦布身体部分的Position下面，是因为邦布眼睛是共享的，只有身体的hash才有唯一性。这样才能实现仅当该邦布身体出现在屏幕上时，才对眼睛进行修改。

结束。

