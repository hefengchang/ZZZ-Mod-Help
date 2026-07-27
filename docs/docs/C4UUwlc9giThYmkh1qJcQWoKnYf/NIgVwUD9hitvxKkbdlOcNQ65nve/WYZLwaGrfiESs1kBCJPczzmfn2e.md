---
title: 修复专武特效位置异常
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\NIgVwUD9hitvxKkbdlOcNQ65nve\WYZLwaGrfiESs1kBCJPczzmfn2e
sidebar_position: 4
---


# 修复专武特效位置异常

些角色mod在角色使用E技能后，角色身体上可能会出现异常发光的现象，如下图所示：

<img src="/assets/YfDQbUggroNCNvx54EvcRuKpn3b.png" src-width="530" src-height="398" align="center"/>

<img src="/assets/WrO0bjO91oy6dfxkZ3mcZZkSniO.png" src-width="352" src-height="338" align="center"/>

如果你是普通玩家，解决方案为：关掉专武特效

下面的解决方案为mod制作者提供：

导致该错误的原因一般是mod的贴图进行了合并，导致专武的光效贴图UV匹配错误。

如果只是想要去掉专武特效，可以像下面这样修改ini文件：

<img src="/assets/Y4e8bTeinoLWyRxiILEcHmsrn2d.png" src-width="596" src-height="420" align="center"/>

在对应部位的IB下面将专武光效贴图对应的槽位设为“null”即可。

但是

我发现不同角色控制专武光效的贴图的槽位可能并不相同，有的角色可能是ps-t9，有的角色可能是ps-t8，还有的角色是ps-t8和ps-t9同时控制(比如艾莲），某些还有使用ps-t7的。而像苍角的角会发光，则是由ps-t6进行控制。

如果只是想要去掉专武光效，可以在ini中运用排除法进行尝试，一般来说使用ps-t9的情况较为普遍（所以建议先试9，再试8、7，但也有使用多个槽位的情况，这时使用排除法就会有不确定性）。所以如果想要更为稳妥，或者想要保留专武光效，方法也并不难，下面我就介绍一下。

---

首先你需要拥有这名角色的专武，如果没有的话，如果该角色是当期UP，可以在限时试用中体验，或者寻求其他玩家的帮助，因为只有在专武光效出现时，才能dump到该贴图。

下面是操作步骤：

1.进入训练营，关闭怪物移动，打开角色无限能量。走到墙边（尽量减少画面内

能dump到的多余东西）；

2.打开hunting模式(绿字)，释放E技能，在角色身上出现专武光效时按下F8进行dump;

3.打开最新生成的FrameAnalysis文件夹，进入deduped文件夹，筛选dds格式图片，搜索BC7(这是因为专武光效贴图的保存格式为BC7_SRGB），然后查看模式选择大图标方便查看预览图（前提是你有能查看dds的软件，比如

paintnet)

4.根据经验查找专武光效贴图。一般为黑色/白色背景+银灰色图案。比如若是头发发光，则是对应的头发形状的图案，下面展示几个实例（分别为艾莲、安东、可琳，艾莲可能是因为头发发光有二阶段变化，所以有两张贴图。）

<img src="/assets/UNLtbOolToI6M4xhPP7cAWMnn0d.png" src-width="606" src-height="282" align="center"/>

<img src="/assets/G7lebZ4YxoFGrnx0WAYcC1U9nRI.png" src-width="586" src-height="578" align="center"/>

<img src="/assets/Q8GcbsCtqoY0BmxhjnecOIyJnYb.png" src-width="508" src-height="508" align="center"/>

5.从文件名中复制该贴图的hash值，回到FrameAnalysis文件夹进行搜索，即可找到它对应的贴图槽位（这是为了使用槽位进行贴图替换，如果使用贴图hash也可以，但因为ZZZ的两套hash问题，为了保证兼容性，还是建议使用槽位替换），如下图，艾莲的两张为ps-t8和ps-t9。

<img src="/assets/JM7bbjK0DohEPgxXYCActfohnae.png" src-width="606" src-height="534" align="center"/>

现在已经知道了贴图的槽位，最后就是修改贴图尺寸并添加到mod文件中，然后在ini文件里加入对应的槽位替换即可。

6.修改贴图尺寸。首先打开你的dds对应软件，修改画布比例为你的mod贴图对应的比例，新增的画布部分最好设为黑色，也可以使用橡皮擦擦除，不要使用白色（否则结果会亮瞎你的眼)。最后选择另存为，修改文件名，比如EllenHairAt8.dds，使用BC7_SRGB格式保存。（如果有多张，全部处理后用相应的命名保存）

<img src="/assets/R1udbF78FoFJrrx6Ha9cVk1snwd.png" src-width="602" src-height="268" align="center"/>

7.将修改好的贴图放入你的mod文件中后，打开ini文件加入如下代码：

<img src="/assets/U7qxbCtCpo4NdTxj6Scc3NTVnlc.png" src-width="598" src-height="278" align="center"/>

最后在Resources下面追加对应文件信息即可：

<img src="/assets/GzmHb7QtioS81VxHECmcs0NHnoc.png" src-width="594" src-height="200" align="center"/>

以上即为修复专武贴图UV位置的方法，也可以将专武光效贴图视为一张遮罩贴图，通过修改亮部的位置来实现修改专武发光效果的位置。

