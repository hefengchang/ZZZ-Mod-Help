---
title: 手写ini按键切换（贴图切换为例）
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\NIgVwUD9hitvxKkbdlOcNQ65nve\VD56waofbiLGohkC8dHc4wXRn8b
sidebar_position: 8
---


# 手写ini按键切换（贴图切换为例）

## 一、写变量和按键

<img src="/assets/K7p7bEyuIoHSp4xfm09cNKZgnQd.png" src-width="596" src-height="318" align="center"/>

首先在ini内写上面几行代码。

中括号表示节，ini文件的内容由节组成。

在constants节部分可以定义变量，符号$表示变量。

这里设置了两个变量，$active用于判断活动状态，$hair用来储存切换的值。并为$hair设置了初始值0.

变量$active直接照抄就可以，另一个储存切换值的变量名可以自定义，比如我这里表示切换头发，就可以写$hair。

global一般都要写，persist表示持续，可以在你按下F10后保持变量的当前值，但是有要求，需要ini所在的路径为纯英文。

在Present节部分可以配置每一帧运行的指令，这里使用的post表示每一帧都将$active重置为0.

<img src="/assets/E32ZbR03SoxdiGxsZ8Wc0xCRnXJ.png" src-width="594" src-height="284" align="center"/>

然后写上面几行代码。

[KeyXXX]节部分用来配置按键。

condition表示按键生效的情况，这里的含义为当变量$active等于1时，按键生效。

key为按键，支持设置多个key，大小写不限。（其他特殊按键写法见虚拟键代码，“VK_”前缀可省略，手柄按键写法见手柄切换键映射表）

type为按键类型，一般设置为cycle循环即可。

最后一行为$hair设置了0和1的可选值，每次按下按键，变量会在这几个值中循环。

---

## 二、设置活动状态

<img src="/assets/Bq3ab67fNom21hx2dIcc1pS7nIe.png" src-width="538" src-height="256" align="center"/>

$active = 1

表示当此hash出现时，将变量$active赋值为1。（“=”表示赋值，“==”表示运算符“等于”）。

这里使用的hash是角色头发的Blend的hash，配合上面的按键生效情况，就可以实现当角色出现时，按键才生效。

此行一般写在Position部分或Blend部分，新的mod工具生成的ini内不再使用Position而是Blend。

---

## 三、写切换条件

这里有两种写法，一种是直接写在IB部分，使用ps-t的形式，也就是槽位覆盖：

<img src="/assets/UK8IbeRqCoKxODxf409c4chRnQd.png" src-width="538" src-height="320" align="center"/>

另一种写法是直接使用贴图的hash，用this来指定：

<img src="/assets/Zm7EbeldnoV0IRx8RpBcwFjmnsc.png" src-width="538" src-height="250" align="center"/>

缩进格式不是必须的，但注意写判断条件时要使用“==”表示“等于”，“!=”表示“不等于”，“&&”表示“并且”，“||”表示“或者”。

if表示如果，elif也可以写成“else if”，表示再如果，最后用“endif”结束，每一个if语句都要用“endif”结束。

---

## 四、配置资源

<img src="/assets/Dguobq638oloNDxMEtCcVAnBnKd.png" src-width="534" src-height="132" align="center"/>

filename后面跟的是你的贴图文件名

这里有两种情况，一种是你的ini和贴图在同一个文件夹内：

<img src="/assets/MiYybxXjeo9EyrxsLAQcWgponzg.png" src-width="520" src-height="172" align="center"/>

或者你的贴图在另一个子文件夹内，比如在Texture文件夹里：

<img src="/assets/XUkDbeejWosowYxZJYBctEzxnGe.png" src-width="524" src-height="240" align="center"/>

具体写法区别看上图代码绿字的注释。

