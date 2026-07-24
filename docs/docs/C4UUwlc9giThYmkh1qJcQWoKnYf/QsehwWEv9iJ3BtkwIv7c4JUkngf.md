---
title: 绝区零 XXMI  安装指南
slug: C4UUwlc9giThYmkh1qJcQWoKnYf\QsehwWEv9iJ3BtkwIv7c4JUkngf
sidebar_position: 0
---


# 绝区零 XXMI  安装指南

# 免责声明

修改游戏文件可能违反服务条款，存在账号被封禁的风险。请自行评估风险，建议使用小号测试。本指南仅提供技术参考。

---

# 什么是 XXMI

XXMI 是目前 绝区零（ZZZ） 最主流的 Mod 加载工具。它是一个开源的多游戏模组管理平台，基于 3DMigoto 框架封装，提供了图形界面，让 Mod 的安装、管理和切换变得非常简单。

## 功能特性

- <b>一体化管理</b> — 以统一便捷的方式启动和管理所有受支持的模型导入器
- <b>即插即用</b> — 自动配置任何受支持的游戏并安装其 XXMI 实例
- <b>自定义启动</b> — 可通过高级设置配置几乎所有可能的游戏启动方式
- <b>自动更新</b> — 始终保持 XXMI 实例及其自身为最新版本
- <b>安全可靠</b> — 验证 XXMI 库和自身下载文件的真实性

## 支持的 Mod 项目

ZZMI （Zenless Zone Zero Model Importer） — 绝区零

GIMI — 原神

SRMI — 崩坏：星穹铁道

WWMI — 鸣潮

---

# 安装步骤

## 第一步：下载 XXMI Launcher

1. 访问官方 GitHub 仓库：

GitHub（主站）：[https://github.com/SpectrumQT/XXMI-Launcher](https://github.com/SpectrumQT/XXMI-Launcher)
GitCode（国内镜像）：[https://gitcode.com/gh_mirrors/xx/XXMI-Launcher](https://gitcode.com/gh_mirrors/xx/XXMI-Launcher)

1. 在 Releases 页面下载最新版本的安装包：

 文件名：XXMI-Launcher-Installer-Online-vX.X.X.msi

 提示：国内用户如果 GitHub 下载慢，建议使用 GitCode 镜像或其他的搬运链接。

## 第二步：安装 XXMI

1. 双击运行 .msi 安装包
2. 选择安装路径（建议纯英文路径，如 D:\XXMI-Launcher）
3. 安装完成后，桌面会生成 XXMI Launcher 快捷方式

## 第三步：添加 ZZZ 导入器

1. 打开 XXMI Launcher
2. 你会看到多个游戏图标（原神、崩铁、鸣潮、绝区零）
3. 点击 ZZZ（绝区零）图标
4. 点击 Install / Import 安装 ZZMI 导入器

等待自动下载和配置完成（需要联网）

## 第四步：配置游戏路径

1. 在 ZZMI 界面中，点击右上角的 齿轮图标（Settings）
2. 进入 General → Game Folder → Change
3. 选择你的绝区零游戏文件夹，可以使用右侧的自动检测按钮

 国服默认路径：C:\Program Files\绝区零

 国际服：你的 HoYoPlay 安装目录下的 ZZZ 文件夹

1. 选择你的ZZMI文件夹路径，建议默认，不是XXMI自带的ZZMI容易出问题

## 第五步：启动游戏

1. 回到主界面，点击 Start 按钮
2. 首次启动时，左上角会弹出一个 F10 提示——按 F10 键关闭即可
3. 游戏正常运行后，Mod 加载环境就准备好了

大功告成！现在游戏已经可以通过 XXMI 正常加载 Mod 了。

---

# Mod 文件结构

下载的 Mod 解压后通常是一个文件夹，里面包含：

Mod 名称/

├── xxxx.ini ← Mod 配置文件

└──Texture、Buffer ← 模型和贴图文件夹

├── xxx-xxx-xxx.buf ← 模型缓存

└── texture.xxx.dds ← 贴图文件

---

# Mod 管理与使用技巧

## 放置 Mod

1 在 XXMI 主界面，点击 Start 按钮旁边的三点菜单

2 选择 "Open mods folder"

3 在弹出的文件夹中，直接把你下载的 Mod 文件夹复制进去

Mods 文件夹结构示例：

mods/

├── 艾莲-泳装/

├── 星见雅-礼服/

└── 比利-黄金/

## 游戏中常用快捷键

按键        功能

F10         刷新 Mod（替换 Mod 文件后按此键生效，无需重启游戏）

F6           切换 Mod 开关（启用/禁用全部 Mod）

F5           仅切换 3DMigoto 覆盖层（可显示 Mod 信息）

提示：刷新 Mod 后建议来回切换角色，防止模型异常。

# 搭配 d3dxSkinManage（进阶推荐）

如果你需要更精细的 Mod 管理（分类、开关、配置），推荐搭配 d3dxSkinManage 使用：

1. 下载并安装 d3dxSkinManage：https://d3dxskinmanage.numlinka.com/
2. 在 XXMI 的设置中，将ZZMI文件夹的路径为管理器的mod工作目录，例如：mod管理器\home\Zenless Zone Zero\work

<img src="/assets/ZbQhbku8Bo54CExeH8sc0Dd0nWb.png" src-width="1416" src-height="704" align="center"/>

1. 将d3dxSkinManage 的游戏路径改为XXMI的启动程序，附加启动参数填写`--nogui --xxmi ZZMI`，点击启动游戏

<img src="/assets/Kwklb9Rrjoeq8sxPEQXcFnazn0c.png" src-width="1406" src-height="442" align="center"/>

这样你可以同时使用两个工具的优点——XXMI 负责加载，d3dxSkinManage 负责管理。

---

# 游戏更新后的处理

每次绝区零版本更新时：

## 第一步：检查 XXMI 更新

1. 打开 XXMI Launcher
2. 如果有新版本，会自动提示更新
3. 点击 Update 即可

## 第二步：检查 Mod 兼容性

1. 下载安装 XXMI 更新后，尝试启动游戏
2. 如果 Mod 出现贴图错误（粉色/透明），说明 Mod 需要更新
3. 访问 Mod 原作者的页面查看是否有版本更新 或者 使用修复工具

---

# 常见问题与排错

## 启动游戏没有加载 Mod

     可能原因                     解决方法

1. XXMI 版本过旧            检查更新到最新版
2. 游戏路径配置错误        重新设置 Settings → General → Game Folder
3. 杀毒软件拦截               将 XXMI 目录加入杀毒软件白名单
4. Mod 文件格式错误        检查 Mod 文件夹结构是否正确
5. 显卡驱动配置               关闭Smooth Vision（平滑运动）或者 Mouvement fluide（流体运动）

                                       关闭显卡的AI插针功能。

                                       更新显卡驱动至最新版。

## Mod异常

原因：Mod 与当前游戏版本不兼容，或贴图文件损坏，或与其他Mod冲突

解决方法：

1. 按 F10 刷新 Mod
2. 逐个禁用 Mod → 找出有问题的那个
3. 访问 Mod 原作者页面下载更新版本
4. 如果所有 Mod 都失效 → 更新 XXMI，使用修复工具

## 游戏闪退/无法启动

### 快速排查步骤：

1. 彻底关闭 XXMI
2. 直接通过 HoYoPlay 启动原版游戏，确认能正常运行
3. 如果能运行 → XXMI 或 Mod 问题
4. 如果不能运行 → 游戏文件修复或显卡驱动更新

### 修复方案：

1. 更新显卡驱动
2. 在 XXMI Settings 中重置配置
3. 卸载 XXMI 后重新安装

## 如何截屏/录屏不带 Mod

1. 先按 F6 关闭所有 Mod
2. 然后正常截屏或录屏
3. 截完后按 F6 重新启用

---

# 卸载方法

1. 卸载 XXMI：控制面板 → 程序和功能 → 找到 XXMI Launcher → 右键卸载
2. 手动清理残留（可选）

- 删除游戏目录下的 d3d11.dll（如果有）
- 删除游戏目录下的 d3dx.ini（如果有）
- 删除游戏目录下的 ShaderFixes/ 文件夹（如果有）

提示：如果使用 XXMI 标准安装，这些文件通常不会留在游戏目录中，卸载工具即可完全清理。

---

# 安全注意事项

## 推荐                              

使用小号测试 Mod            

保持低调，不直播 Mod 内容        

关注 XXMI 和 Mod 作者更新动态        

下载 Mod 前查杀病毒        

## 不建议

在官方论坛/Discord 讨论 Mod

在深渊/竞速等敏感场合使用

使用来路不明的 Mod 文件

修改游戏网络数据

米哈游对 Mod 的态度介于"容忍"和"默许"之间——不主动检测，但被发现后仍然可能封号。保持低调是安全的关键。

---

# 快速总结

1. 下载安装 XXMI Launcher（GitHub → Releases → 。msi) 
2. 添加 ZZZ 导入器（ZZMI）
3. 配置游戏路径
4. 下载 Mod → 放入 mods/ 文件夹
5. 通过 XXMI Start 启动游戏
6. 游戏中按 F10 刷新，F6 开关

---

参考链接

XXMI Launcher GitHub 仓库：[https://github.com/SpectrumQT/XXMI-Launcher](https://github.com/SpectrumQT/XXMI-Launcher)
GameBanana - 绝区零 Mod 版块：https://gamebanana.com/games/19567
Nexus Mods - ZZZ：[https://www.nexusmods.com/zenlesszonezero](https://www.nexusmods.com/zenlesszonezero)
3DMGAME 讨论帖：[https://bbs.3dmgame.com/thread-6549750-1-1.html](https://bbs.3dmgame.com/thread-6549750-1-1.html)

