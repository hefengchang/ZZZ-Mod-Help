---
title: 切换类MOD固定为特定形态
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\AnovwsEzbirYjUk0ilPcq2U4ncy\AbbZwebuBiwVyVkH9AbcFCo7nBe\FTkjwxQpsisc22kasPCcQHSvnJe
sidebar_position: 0
---


# 切换类MOD固定为特定形态

具体表现为刷新mod后，设定好的键位恢复到初始状态。

找到ini配置文件中的切换部分，在里面找到每个按键对应的变量（循环切换的那个变量），看有几个切换数值。

在Constants节中找到相关变量，= 后面的数字赋值为哪个数值就会固定为特定形态，按F10刷新或者重启游戏不会重置其数值。

需要注意的是，如果mod路径和其名字含有中文，可能导致无法保存mod的默认状态。

有时候修改了变量数值，刷新没有发生改变，可以切换其他mod，F10刷新一下，再切换回来刷新。

代码示例

```bash
; Constants ---------------------------

[Constants] #在此声明命名全局变量，以便在其他命令列表、[键]绑定和[预设]中使用 
global persist $swapvar = 0  #定义一个全局可存变量并赋值 0，F10 刷新或者重启游戏不会重置其数值
global $active  #定义一个全局不可存变量，不赋值则默认值为 0
global $creditinfo = 0  #定义一个全局不可存变量并赋值 0

[Present]  #在每个帧的开始执行，用于需要持续执行的代码。
post $active = 0 #每一帧渲染完成后重置$active0为 0

[KeySwap] #按键切换
condition = $active == 0 #按键映射都只有在 $active0 等于 0 时才会生效
key = k  #定义按键为K
type = cycle  #定义按键的行为是循环切换
$swapvar = 0,1,2,3,4,5  #每次按下K键时，$swapvar 的值会在 0, 1, 2, 3 之间循环切换。
$creditinfo = 0  #每次按下k键时，$creditinfo的值都会被设置为0
```

