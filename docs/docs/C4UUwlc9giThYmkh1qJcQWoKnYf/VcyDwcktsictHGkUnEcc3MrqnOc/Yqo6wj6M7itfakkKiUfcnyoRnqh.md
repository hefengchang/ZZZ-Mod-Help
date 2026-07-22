---
title: d3dx.ini
slug: >-
  C4UUwlc9giThYmkh1qJcQWoKnYf\VcyDwcktsictHGkUnEcc3MrqnOc\Yqo6wj6M7itfakkKiUfcnyoRnqh
sidebar_position: 0
---

```ini
;------------------------------------------------------------------------------------------------------

; 外部 3DMigoto 加载器使用的设置

;------------------------------------------------------------------------------------------------------

;------------------------------------------------------------------------------------------------------

; 外部 3DMigoto 加载器使用的设置

;------------------------------------------------------------------------------------------------------

[Loader]

; 警告！此版本旨在由 XXMI Launcher 加载，并且缺少必需的 3dmigoto DLL 文件！

; XXMI Launcher 可以通过 https://github.com/SpectrumQT/XXMI-Installer/releases/latest 安装

; 要加载到的目标进程：

target = ZenlessZoneZero.exe

; 允许 3dmigoto DLL 被以下 .exe 加载：

; DLL 必须支持以下功能：

; * 从相对于 "loader" exe 的嵌套目录加载：https://github.com/bo3b/3Dmigoto/commit/e7d70cc779887dd43d3c68b5c6e43711aa9a0e7f

; * 由指定的 "loader" exe 从任何位置加载：https://github.com/bo3b/3Dmigoto/commit/0a029a748c7e64cd48a1f571374d322e8aa065e0

loader = XXMI Launcher.exe

; 警告！以下选项是为高级用户保留的，XXMI Launcher 将不会考虑它们！

; 从加载器自动启动游戏：

launch = C:\Games\ZenlessZoneZero Game\ZenlessZoneZero.exe

; 这会告诉加载器在哪里找到 3DMigoto。这个 DLL 必须与

; 3DMigoto Loader.exe 位于同一目录，并将在目标

; 进程中以相同的名称加载。如果 d3d11.dll 不起作用，请尝试 3dmigoto.dll

module = d3d11.dll

; 取消注释以始终提升加载器权限，以支持以管理员身份运行的游戏。

; 这将显示 UAC 提示，因此仅在您确实需要时才启用它。

require_admin = true

; 在确认 3DMigoto 已加载到目标进程后，额外延迟这么多秒。

; 对于会自行重启或在第一个进程可能不是我们需要的实际进程时

; 存在多个同名 .exe 的游戏。设置为 -1 以禁用自动关闭。

;delay = 20

; ------------------------------------------------------------------------------------------------------

; 附加配置文件

; ------------------------------------------------------------------------------------------------------

[Include]

; 如果您将 3DMigoto 作为特定游戏的完整模组平台使用，

; 而不仅仅是单个独立模组（例如，促进网格/纹理

; 替换或其他图形模组），您可以包含一个目录，

; 用户可以在其中提取他人创建的第三方模组，3DMigoto 将

; 包含每个 .ini 文件以及 CustomShader /

; Resource 部分引用的任何外部文件（这些模组中的替换着色器目前仍应放在

; ShaderFixes 中，除非模组制作者想使用 CustomShaders 或

; ShaderRegex 来保持其独立性）。

; include = Core\Debugger\Debugger.ini

include = Core\ZZMI\main.ini

include_recursive = Mods

exclude_recursive = DISABLED*

exclude_recursive = desktop.ini

;------------------------------------------------------------------------------------------------------

; 着色器搜寻选项。

; 默认设置是使用类似于 Helix 预设的键盘

;------------------------------------------------------------------------------------------------------

[Hunting]

; 0: 发布模式，禁用着色器搜寻，为速度优化。

; 1: 启用搜寻模式

; 2: 搜寻模式“软禁用” - 可以通过 toggle_hunting 键启用

hunting = 0

; 当前选定的着色器/渲染目标的突出显示模式。

; "skip" = 跳过着色器。不使用当前选定的着色器渲染任何内容。

; "original" = 如果当前选定的着色器已被修补，则回退到原始着色器。

; "pink" = 使输出变为亮粉色以使其突出。

; "mono" = 为选定的着色器/渲染目标禁用立体效果。

marking_mode = skip

; 循环切换可用的标记模式。VK_DECIMAL VK_NUMPAD0

; 表示在按住小键盘的点的同时按小键盘 0：

next_marking_mode = no_modifiers VK_DECIMAL VK_NUMPAD0

; 标记选定的着色器/缓冲区时要采取的操作

; "hlsl" = 将着色器反编译为 HLSL 并复制到 ShaderFixes

; "asm" = 反汇编着色器并复制到 ShaderFixes（如果 hlsl 被禁用或失败）

; "regex" = 输出 ShaderRegex 修补的着色器（注意：将丢失关联的命令列表）

; "clipboard" = 将着色器/缓冲区哈希值复制到剪贴板

; "mono_snapshot" = 拍摄单色截图（以前称为 mark_snapshot=1）

; "stereo_snapshot" = 拍摄立体截图（以前称为 mark_snapshot=2）

; "snapshot_if_pink" = 将 mono/stereo_snapshot 限制在 marking_mode=pink 时

marking_actions = clipboard

; 键位绑定：对于字母行上的 A-Z 和 0-9，只需使用该单个字符。

; 对于其他所有内容（包括鼠标按钮），请使用虚拟键

; 名称（带或不带 VK_ 前缀）或本文档中的十六进制代码：

; http://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx

;

; XBox 控制器支持使用与 [Key] 部分相同的绑定（见上文）。

; 如果游戏已经使用了第一个控制器，您可以尝试

; 使用第二个控制器进行搜寻，例如 XB2_LEFT_SHOULDER

; 循环切换当前场景中所有可见的像素着色器。

previous_pixelshader = no_modifiers NO_VK_DECIMAL VK_NUMPAD1

next_pixelshader = no_modifiers NO_VK_DECIMAL VK_NUMPAD2

mark_pixelshader = no_modifiers NO_VK_DECIMAL VK_NUMPAD3

; 循环切换当前场景中所有可见的顶点着色器。

previous_vertexshader = no_modifiers NO_VK_DECIMAL VK_NUMPAD4

next_vertexshader = no_modifiers NO_VK_DECIMAL VK_NUMPAD5

mark_vertexshader = no_modifiers NO_VK_DECIMAL VK_NUMPAD6

; 循环切换当前场景中所有已使用的索引缓冲区。

previous_indexbuffer = no_modifiers NO_VK_DECIMAL VK_NUMPAD7

next_indexbuffer = no_modifiers NO_VK_DECIMAL VK_NUMPAD8

mark_indexbuffer = no_modifiers NO_VK_DECIMAL VK_NUMPAD9

; 循环切换当前场景中所有已使用的顶点缓冲区。

previous_vertexbuffer = no_modifiers NO_VK_DECIMAL VK_DIVIDE

next_vertexbuffer = no_modifiers NO_VK_DECIMAL VK_MULTIPLY

mark_vertexbuffer = no_modifiers NO_VK_DECIMAL VK_SUBTRACT

; 循环切换当前场景中所有已使用的渲染目标。

;previous_rendertarget = no_modifiers VK_INSERT

;next_rendertarget = no_modifiers VK_HOME

;mark_rendertarget = no_modifiers VK_PAGEUP

; 循环切换当前场景中所有已使用的计算着色器。

previous_computeshader = no_modifiers VK_DECIMAL VK_NUMPAD1

next_computeshader = no_modifiers VK_DECIMAL VK_NUMPAD2

mark_computeshader = no_modifiers VK_DECIMAL VK_NUMPAD3

; 循环切换当前场景中所有可见的几何着色器。

previous_geometryshader = no_modifiers VK_DECIMAL VK_NUMPAD4

next_geometryshader = no_modifiers VK_DECIMAL VK_NUMPAD5

mark_geometryshader = no_modifiers VK_DECIMAL VK_NUMPAD6

; 循环切换当前场景中所有可见的域着色器。

previous_domainshader = no_modifiers VK_DECIMAL VK_NUMPAD7

next_domainshader = no_modifiers VK_DECIMAL VK_NUMPAD8

mark_domainshader = no_modifiers VK_DECIMAL VK_NUMPAD9

; 循环切换当前场景中所有可见的外壳着色器。

previous_hullshader = no_modifiers VK_DECIMAL VK_DIVIDE

next_hullshader = no_modifiers VK_DECIMAL VK_MULTIPLY

mark_hullshader = no_modifiers VK_DECIMAL VK_SUBTRACT

; 完成搜寻后重新启用着色器：

done_hunting = NO_MODIFIERS NO_VK_DECIMAL VK_ADD

; 截取 pns 格式截图

take_screenshot = no_modifiers VK_SNAPSHOT

; 从 ShaderFixes 文件夹重新加载所有修复

reload_fixes = no_modifiers VK_F10

; 用于开启/关闭搜寻本身的键。这也会显示/隐藏覆盖层。

; 必须将 hunting 设置为 1 或 2 才能启用此切换。

toggle_hunting = no_modifiers NO_VK_DECIMAL VK_NUMPAD0

; 从 d3dx.ini 重新加载设置而无需重新启动的键。这可以

; 与 reload_fixes 使用相同的键以方便起见，或者可以使用不同的键

; 以避免每次重新加载着色器时都重置 ini 参数。请注意，并非所有设置都可以重新加载，

; 因此如果某些设置未按预期工作，您可能仍需要重新启动游戏：

reload_config = no_modifiers VK_F10

; 删除 d3dx_user.ini 文件并重新加载设置以获得“干净的状态”

wipe_user_config = ctrl alt no_shift VK_F10

; 按住此键可临时禁用修复 - 用于快速检查效果在原始游戏中的样子。

show_original = no_modifiers VK_F9

; 显示每个活动命令列表的 CPU 利用率和性能影响

monitor_performance = ctrl no_shift no_alt F9

; 冻结当前的性能监视器显示并记录到 d3d11_log.txt

freeze_performance_monitor = no_ctrl shift no_alt F9

; 设置性能监视器的更新频率

monitor_performance_interval = 2.0

; 自动重复键速率（每秒事件数）。

repeat_rate = 6

; 启用此功能会使覆盖层在搜寻期间显示当前选定的

; 着色器和索引缓冲区的哈希值。我们实际上不推荐这样做，

; 因为从屏幕上记下哈希值是一个非常容易出错的习惯 - 推荐的工作流程是将着色器转储到磁盘，

; 然后检查 ShaderFixes 中最近修改的文件，但高级用户

; 如果需要可以启用此功能：

verbose_overlay = 1

; 可调参数，用于修改着色器中的变量 (StereoParams.Load(int3(1,0,0)).xyzw)

; 启用调整会导致轻微的性能损失，因为参数纹理

;tune_enable=1

;tune_step=0.1

;tune1_up=VK_INSERT

;tune1_down=VK_DELETE

;tune2_up=X

;tune2_down=Z

; 转储出 DirectX 状态更改和下一帧每个立即绘制调用后每个渲染目标内容的飞行日志。

; 占用大量空间，因此默认禁用。

analyse_frame = no_modifiers VK_F8

; analyse_options 指定帧分析功能的选项。选项可以

; 通过空格分隔来组合使用。

;

; 转储选择（也参考下面描述的 "dump" 命令）：

;        dump_rt: 转储渲染目标和 UAV

;     dump_depth: 转储深度/模板目标

;       dump_tex: 转储着色器资源（纹理）

;        dump_cb: 转储常量缓冲区

;        dump_vb: 转储顶点缓冲区

;        dump_ib: 转储索引缓冲区

;

; Texture2D 格式选择：

;        jpg/jps: 将 2D/立体资源转储为 .jps 文件。这些文件最容易

;                 处理，并且占用的空间不如 DDS 文件大，但是

;                 并非为每个资源都转储，并且缺少一些数据。

;            dds: 将 2D/立体资源转储为 .dds 文件。警告：此选项

;                 可能需要数百 GB 的空间和很长时间！仅当您

;                 绝对需要比其他方式获得更多信息时才使用它。

;        jps_dds: 尽可能转储为 .jps，否则转储为 .dds（默认）。

;           desc: 将 DirectX 资源描述转储到 .dsc 文件。

;

; 缓冲区格式选择：

;            buf: 将缓冲区转储为二进制 .buf 文件

;            txt: 将缓冲区解码为文本，并包含一些额外的元数据，这些

;                 数据在 .buf 文件中找不到。可能无法正确解码所有缓冲区。

;                 如果指定了 dump_cb/vb/ib，则为默认选项。

;           desc: 将 DirectX 资源描述转储到 .dsc 文件。

;

; 杂项选项：

;           hold: 在按住键的同时继续分析后续帧

;       clear_rt: 在帧中首次使用每个渲染目标时清除它们。

;                 如果游戏不清除它们，这更容易看到正在绘制的内容，但可能导致某些效果无法渲染。

;   filename_reg: 通常绘制编号是文件名的第一部分，以便

;                 文件按照它们在游戏中的使用顺序排序。

;                 有时检查特定输出在帧中的变化更可取，此选项将

;                 把寄存器编号放在文件名的第一位以允许这样做。

;           mono: 转储单色纹理而不是立体纹理。要两者都转储，请指定

;                 'mono stereo'。如果两者都未指定，则默认为立体。

;  dump_on_unmap: 每当游戏使用 Map() / Unmap() 调用将缓冲区/纹理

;                 映射到 CPU 时进行转储。通常用于更新

;                 常量缓冲区。

; dump_on_update: 每当游戏使用 UpdateSubresource() 调用更新

;                 缓冲区/纹理时进行转储。用于更新常量缓冲区的替代方法。

;    share_dupes: 使用与后续帧分析转储共享的文件夹

;                 来对转储的资源进行去重。如果存在

;                 大量相同纹理，会使未来的帧分析

;                 转储更快并占用更少的磁盘空间，但删除

;                 单个转储文件夹以回收磁盘空间不那么简单（即要么全删，要么不删）。

;                 无论此设置如何，单个帧分析文件夹仍然会去重。

;        symlink: 在帧分析转储中对文件进行去重时尝试使用符号链接。

;                 需要在 Windows 10 中启用开发者模式，

;                 如果不可能，将回退到硬链接或快捷方式。

;                 对于查看去重文件之间的关系很有用，尤其是在使用 cygwin 时，但

;                 某些 Windows 应用程序在使用这些时可能会表现更差。

;

; 实验性延迟上下文（多线程渲染）帧分析支持：

;   deferred_ctx_immediate: 使用立即上下文从延迟上下文转储资源。

;                 不适用于 dump_rt 或在帧期间被更改（通过 GPU 或 CPU）的其他资源。

;                 对于静态不变的资源（例如收集 HUD 纹理进行过滤）可能没问题。

;                 不是线程安全的 - 可能会崩溃。

;                 建议（非强制）与 'mono' 结合使用。

;    deferred_ctx_accurate: 将延迟上下文的资源转储延迟到

;                 GPU 更新它们之后。<em>所有</em>

;                 正在转储的资源副本都保存在内存中，因此可能会耗尽

;                 内存 - 尝试将此选项的使用限制在需要的特定资源上

;                 - 最好通过 "dump" 命令而不是

;                 全局 analyse_options 来使用。与 'stereo' 兼容。

;

; analyse_options 也可以在 [ShaderOverride*] 部分（或其他

; 命令列表）中指定，以设置触发器在帧分析中途更改选项，

; 可以是针对单个绘制调用（默认），或者永久更改（通过

; 添加 'persist' 关键字）。

;

; 或者，可以在 [ShaderOverride*] 部分（或

; 任何其他命令列表）中指定 "dump" 来转储具有特定选项的特定资源

; （例如 "dump = dump_tex dds share_dupes mono ps-t0"），在特定时间点转储资源（例如 "pre dump = o0"）或转储帧分析无法看到的自定义资源（例如 "dump = ResourceDepthBuffer"）。使用

; 额外的 "dump" 命令来转储多个资源。

;

analyse_options = dump_rt dump_tex dump_cb dump_vb dump_ib buf txt

; ------------------------------------------------------------------------------------------------------

; 在启动时/配置重新加载后运行的命令列表。

; ------------------------------------------------------------------------------------------------------

[Constants]

; 在此处声明命名全局变量，以便在其他命令列表、

; [Key] 绑定和 [Preset] 中使用它们。命名变量是命名空间的，因此任何

; 包含的 ini 文件都可以使用自己的变量，而不用担心名称冲突：

;global $my_named_variable = 0.0

; 将变量标记为 persist[ent] 以在退出或按 F10 (config_reload) 时自动将其保存到

; d3dx_user.ini。使用 Ctrl+Alt+F10

; (wipe_user_config) 来丢弃持久值：

;global persist $some_persistent_variable = 1

; 设置 "IniParams" 变量的初始值，这些变量可从

; 着色器内部访问，但它们不是命名空间的，太多会变得难以管理：

;x = 0.8

;y = 1.0

;z = 1.2

;w = 2.0

;y1 = 3

; 这由 3DVision2SBS 自定义着色器使用。要使用，请在上面的 [Include]

; 部分找到并取消注释 'include = ShaderFixes\3dvision2sbs.ini'

; 行。F11 将在播放时在这些模式之间循环，当前值将在退出 / F10 时自动保存到 d3dx_user.ini：

; 0 = 常规 3D Vision

; 1 = 反向 3D Vision

; 2 = 左右并排

; 3 = 反向左右并排

; 4 = 上下排列

; 5 = 反向上下排列

; 6 = 行交错

; 7 = 反向行交错

;$\ShaderFixes\3dvision2sbs.ini\mode = 0

global $costume_mods = 1

;------------------------------------------------------------------------------------------------------

; [convergence, separation, x, y, z, w] 的任何自定义设置覆盖

;

; 支持四种类型 - 默认情况下，绑定将简单地加载

; 配置的设置，但可以指定 type=hold 以使预设

; 在按钮按住时激活，type=toggle 可用于简单的开/关切换，type=cycle 可用于在几个预设之间向前和/或向后循环。

;

; 延迟（仅 type=hold）和线性或余弦过渡周期（任何键类型）

; 可用于更好地将设置更改同步到游戏的动画，

; 或在短时间内平滑调整 UI 元素。

;

; 键位绑定：对于字母行上的 A-Z 和 0-9，只需使用该单个字符。

; 对于其他所有内容（包括鼠标按钮），请使用虚拟键

; 名称（带或不带 VK_ 前缀）或本文档中的十六进制代码：

; http://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx

;

; 可以通过用空格分隔键名来指定键组合，例如

; "Shift Q"。也可以指示某个键必须*不*被按住才能

; 激活绑定，例如 "NO_ALT F1" 将防止在使用 Alt+F1 拍摄 3D 截图时激活绑定。

; "NO_MODIFIERS" 可用作排除所有标准修饰符（Ctrl、Alt、Shift、Windows）的简写。

;

; 键也可以来自 XBox 控制器，使用：

;   XB_LEFT_TRIGGER, XB_RIGHT_TRIGGER,

;   XB_LEFT_SHOULDER, XB_RIGHT_SHOULDER,

;   XB_LEFT_THUMB, XB_RIGHT_THUMB,

;   XB_DPAD_UP, XB_DPAD_DOWN, XB_DPAD_LEFT, XB_DPAD_RIGHT,

;   XB_A, XB_B, XB_X, XB_Y, XB_START, XB_BACK, XB_GUIDE

; 默认情况下，所有连接的控制器都会被使用 - 要将绑定与特定控制器关联，请在

; 前缀中添加控制器编号 1-4，如 XB2_LEFT_TRIGGER，尽管这对于搜寻可能比玩游戏更有用。

;

; 可以在单个 [Key] 部分中设置多个键，以允许键盘和 xbox

; 控制器切换和循环共享彼此相同的状态。

;------------------------------------------------------------------------------------------------------

; 更改默认设置的示例

;[KeyBasicExample]

;Key = z

;separation = 100.0

;convergence = 4.0

;x = 0.98

; 在 [Constants] 中声明的命名变量可以在此处设置：

;$my_named_variable = 2

; 支持瞬时保持类型覆盖的示例，例如瞄准。展示了如何

; 将两个单独的按钮绑定到同一个操作。

;[KeyMomentaryHoldExample]

;Key = RBUTTON

;Key = XB_LEFT_TRIGGER

;convergence = 0.1

;type = hold

; 切换覆盖的示例，它会记住前一个值并在

; 第二次按下时自动恢复它。

;[KeyToggleExample]

;Key = q

;separation = 0.1

;type = toggle

;y = 0.0

; 使用智能循环类型代替切换的示例。Smart 现在是

; 循环的默认值，激活时它会快速检查当前值是否与其当前循环预设匹配，并在必要时重新同步。这

; 比仅在此处指定的两个精确值之间切换更好，而 type=toggle 更适合记住

; 某个任意当前值并返回它：

;[KeySmartCycleExample]

;Key = w

;type = cycle

;smart = true

;$some_variable = 0, 1

; 瞬时保持的示例，但具有延迟和

; 按住和释放时的平滑过渡（毫秒），以便更好地与游戏同步。

; 请注意，延迟目前仅适用于 type=hold，而过渡将适用于

; 所有类型。

;[KeyDelayAndTransitionExample]

;Key = RBUTTON

;Key = XB_LEFT_TRIGGER

;type = hold

;y = 0.25

;delay = 100

;transition = 100

;transition_type = linear

;release_delay = 0

;release_transition = 500

;release_transition_type = cosine

; 循环过渡的示例，可用于提供几个预设，

; 这些预设设置收敛和 UI 深度以适应游戏中的不同场景。

; 使用余弦过渡在 1/10 秒内平滑更改。

; 键盘和 Xbox 控制器按钮都绑定到同一个循环，因此

; 它们可以互换使用并记住预设列表中的相同位置。

; 第二个键用于向后循环浏览预设，并且

; 禁用了从列表一端到另一端的环绕。

;[KeyCycleExample]

;Key = E

;Key = XB_RIGHT_SHOULDER

;Back = Q

;Back = XB_LEFT_SHOULDER

;type = cycle

;wrap = false

;convergence = 1.45, 1.13, 0.98

;z           = 0.25,  0.5, 0.75

;transition = 100

;transition_type = cosine

; 键只能直接将变量设置为简单值。如果您想做

; 更高级的事情，您可能需要从键

; 绑定调用命令列表。type=hold/toggle 键将在释放时运行命令列表的 post 阶段。

;[KeyCommandListExample]

;key = f

;run = CommandListF

;[CommandListF]

;if $foo == 0 && cursor_showing

;        $foo = $bar * 3.14 / rt_width

;else

;        $foo = 0

;endif

; 预设覆盖的示例，可以被一个或多个 [ShaderOverride*]

; 部分引用，这些部分可以在着色器覆盖被激活/停用时自动激活/停用。

; 这对于为特定场景设置自动收敛很有用。

;[PresetExample]

;convergence = 0

;$some_variable = 1

;transition = 100

;transition_type = linear

;------------------------------------------------------------------------------------------------------

; 链式加载其他包装 DLL 而不是系统 DLL。

;------------------------------------------------------------------------------------------------------

[System]

;proxy_d3d9=d3d9_helix.dll

;proxy_d3d11=d3d11_helix.dll

; 我们强制所有 LoadLibrary 调用返回到游戏文件夹，因为游戏

; 和 nvidia 都通过直接访问 System32 来破坏加载链。

; load_library_redirect=0 表示关闭，允许所有内容原样通过。

; load_library_redirect=1 表示仅覆盖 nvapi.dll，强制到游戏文件夹。

; load_library_redirect=2 表示强制 d3d11.dll 和 nvapi.dll 都到游戏文件夹。

load_library_redirect = 2

; 仅当游戏处于前台时才启用键输入处理：

check_foreground_window = 1

; 使用钩子而不是包装的选项。在 MGSV 中使用。可以挂钩的对象包括：

;   deferred_contexts

;   immediate_context

;   device

;   all - 以上所有

;   recommended - 3DMigoto 开发人员当前推荐的设置

;hook=recommended

; 允许创建和包装 ID3D11Device 的选项。我们通常有很好的

; 运气，为所有非 dx11 请求返回错误，但某些游戏在

; 存在这些检查时会出错。

; allow_create_device 选项允许创建 D3D10 设备，某些游戏需要它。

; 它有两个选项，allow_create_device=1，它将允许任何请求通过

; 而不返回错误，allow_create_device=2，它将强制所有请求

; 成为 D3D11 设备，无论传入的是什么。

;

; allow_platform_update 选项允许在 Windows 8 和 Windows 7 的平台更新中引入的

; D3D11Device1 和 D3D11Context1 接口。

;

; 从 allow_check_interface 开始，如果这不起作用

; 然后尝试 allow_create_device=2，最后尝试 allow_create_device=1

;

allow_check_interface = 1

allow_create_device = 1

allow_platform_update = 1

; 控制在 DLL 初始化期间是否跳过从 [Include] 部分加载 ini 文件。

; 扩展配置在有很多模组时可能相当繁重。此外，在 DLL 初始化时间内的 ini 文件加载序列不如重新加载时那么健壮。

; 因此，至少在处理第一帧之前延迟模组加载可能是更好的解决方案。

; 将此设置为 1 并使用非负的 config_initialization_delay 以将模组加载与 DLL 初始化解耦。

; 将此设置为 0 并使用 config_initialization_delay=-1 以模仿原始的 3dmigoto ini 加载行为。

skip_early_includes_load = 1

; 游戏启动后初始配置重新加载的延迟（秒）。

; 设置为 0 以延迟重新加载直到第一帧。

; 设置为 -1 以在不需要时禁用。

config_initialization_delay = 0

; 将持久变量写入 d3dx_user.ini 的时间间隔（秒）。

; 设置为 -1 以在不需要时禁用。

settings_auto_save_interval = 60

;------------------------------------------------------------------------------------------------------

; 强制显示设备为特定模式的设置。

; 取消注释一个值以强制特定设置。

;------------------------------------------------------------------------------------------------------

[Device]

; (0) - 禁用放大

; (1) - 启用放大并允许游戏禁用和启用全屏模式

; (2) - 启用放大并且不允许游戏切换全屏模式

;       (始终强制全屏)。如果鼠标光标出现问题，请尝试此选项。

; 注意，如果启用放大，请不要忘记：

;   1) 在 [Present] 部分取消注释 "run = CustomShaderUpscale"，

;      否则您将只看到一个黑窗口（有游戏声音）。

;   2) 在此处为游戏将看到的宽度和高度设置自定义分辨率。

;   3) 在此处取消注释 upscale_mode。

upscaling = 0

; 强制覆盖屏幕分辨率。

; 如果放大开启，则调整大小功能被禁用。

; 如果放大开启，那么您必须指定游戏将被放大到的分辨率。

; 为了获得最佳的视觉效果，请使用电视或显示器的原生分辨率。

;width=1280

;height=720

; upscale_mode = 0: 3Dmigoto 创建一个纹理并将其作为游戏的后台缓冲区推送。

; 似乎只适用于少数游戏，但一切似乎运行得更流畅一些。

; upscale_mode = 1: 3Dmigoto 创建第二个交换链并推送游戏使用它。

; 似乎适用于大多数游戏。不要忘记在 [present] 部分激活放大着色器

;upscale_mode = 1

; 覆盖游戏设置的刷新率。

;refresh_rate=60

; 过滤可用的视频模式，仅提供给定刷新率的模式。

; 某些游戏没有明确设置刷新率，而是使用视频模式。

; 如果设置 refresh_rate 不起作用，请使用此选项。

;filter_refresh_rate=24,59,60

; full_screen=1 强制创建全屏设备和交换链。

; 如果游戏无法激活立体模式，请将其用于 3dtvplay。

; full_screen=2 还将禁用 SetWindowPos，这可能对某些游戏有帮助。

full_screen = 0

; 当按下此键时，这将尝试强制独占全屏，

; 在 full_screen 不起作用或有不良副作用的游戏中可能很有用：

;force_full_screen_on_key = no_modifiers VK_F7

; 这会切换强制全屏模式的开启和关闭。它不会立即生效，

; 但会改变下次游戏尝试更改全屏模式时发生的情况。

; 这是一个特定的变通方法，用于解决 Unity 游戏中的一个错误，

; 该错误在从独占模式全屏 alt+tab 退出时会导致崩溃。

;

; 要在不崩溃 Unity 游戏的情况下切换出来：

; 启用此选项，按 F7，Alt+Enter，Alt+Tab

;toggle_full_screen = no_modifiers VK_F7

; 一些游戏有自己的立体渲染器，禁用 NVidia 自动

; 立体模式并自己渲染到立体缓冲区（例如 Crysis 3）。

; 将此设置为 1 会禁用游戏立体渲染器并启用 NVidia 自动立体机制。

; 这也会强制 'false' 作为任何 NvAPI_Stereo_IsEnabled 请求的返回值。

force_stereo = 0

; 几乎所有 DX11 游戏都停用窗口消息处理。

; 将此设置为 1 会重新启用打印屏幕处理、alt-tab 键处理等。

;allow_windowcommands=1

; 指示获取纹理哈希值的分辨率来源。取消注释此选项

; 以永不特殊处理与分辨率或其倍数匹配的哈希。

; 可能的值是 swap_chain 和 depth_stencil。建议测试哪个

; 适用于特定游戏（例如，CryEngine 总是创建与原生分辨率匹配的交换链，因此必须使用 depth_stencil）。

get_resolution_from = swap_chain

; 这将隐藏硬件鼠标光标，如果在文件顶部包含软件鼠标配置文件，则会自动启用。

; 硬件鼠标光标无法移动到深度，也不能与

; 左右并排或上下输出模式一起使用，因此在这些情况下使用

; 软件鼠标光标是推荐的。

; 注意：建议在更改此设置后重新启动游戏！

hide_cursor = 0

;------------------------------------------------------------------------------------------------------

; NVidia 立体驱动程序的设置。

;------------------------------------------------------------------------------------------------------

[Stereo]

; 具有自己立体渲染器的游戏禁用 NVidia 自动

; 立体模式并自己渲染到立体缓冲区（例如 Crysis 3）。

; 将此设置为 1 会禁用游戏立体渲染器并启用 NVidia 自动立体机制。

; 这也会强制 'false' 作为任何 NvAPI_Stereo_IsEnabled 请求的返回值。

automatic_mode = 0

; 一些游戏（例如 CryEngine 游戏）将分离和收敛

; 锁定到特定值，这可能是不希望的。将此设置为 1 可忽略这些

; 来自游戏的请求以解锁分离：

unlock_separation = 0

unlock_convergence = 0

; 没有预定义配置文件的游戏无法保存立体设置。

; 启用此选项会自动为未知游戏创建配置文件。

; 请注意，现在有一种更灵活的方式来更改游戏的配置文件 -

; 请参考 [Profile] 部分。

create_profile = 0

; 设置 NVidia 立体驱动程序的全局表面创建启发式方法。

; 0 = NVAPI_STEREO_SURFACECREATEMODE_AUTO - 使用驱动程序注册表配置文件设置进行表面创建模式。

; 1 = NVAPI_STEREO_SURFACECREATEMODE_FORCESTEREO - 始终创建立体表面。

; 2 = NVAPI_STEREO_SURFACECREATEMODE_FORCEMONO - 始终创建单色表面。

;surface_createmode=1

; 覆盖方形表面的表面创建模式。

;surface_square_createmode=1

; 强制 NvAPI_Initialize 返回错误，以便游戏认为立体和 NVidia 不可用。

force_no_nvapi = 0

;------------------------------------------------------------------------------------------------------

; GPU 操作的设置。

; 渲染设置覆盖

;------------------------------------------------------------------------------------------------------

[Rendering]

; GPU 程序操作。

; 使用的着色器哈希类型：

;   3dmigoto = 3DMigoto 使用的传统哈希（无种子软件 FNV-1）

;   embedded = 使用嵌入在着色器内的 MD5-like 哈希的前半部分，

;              以完全跳过哈希计算。

;   bytecode = 仅对字节码和签名使用硬件加速的 CRC32C 进行哈希。

;              用于最小化某些游戏中的重复着色器，但

;              在某些游戏（例如，仅变量名不同的着色器）中可能存在更高的哈希冲突风险。

;              如果着色器代码、常量值等发生更改，可能无法避免游戏更新时的哈希更改。

shader_hash = 3dmigoto

; 切换到更不易损坏且不会在图像部分匹配时发生冲突的新纹理哈希。

; 由于对更多图像进行哈希，可能会有轻微的性能损失。如果升级现有修复，请不要启用！

; texture_hash = 1

; 游戏中的着色器将被这些自定义着色器替换。

override_directory = ShaderFixes

; 如果启用了缓存，自动修补的着色器将写在这里。

cache_directory = ShaderCache

; 由游戏直接编译而不是二进制的着色器放在这里。

storage_directory = ShaderFromGame

; 将所有编译的 .txt 着色器缓存为 .bin。这消除了加载停顿。

cache_shaders = 0

; 指示默认情况下是否应禁用剪刀裁剪。需要

; 重新启动才能生效。如果您需要在每个着色器

; 的基础上执行此操作，可以使用 "run = BuiltInCustomShaderEnableScissorClipping" 或 "run =

; BuiltInCustomShaderDisableScissorClipping" 从 [ShaderOverride] 调用，或者定义

; 您自己的 [CustomShader] 部分来更改您需要的任何渲染状态，并

; 使用 "handling = skip" 和 "draw = from_caller" 将绘制调用转移给它们。

rasterizer_disable_scissor = 0

; 跟踪纹理的副本和更新，这可能导致它们的哈希值与其内容不同步 - 如果纹理哈希看起来不可靠，请启用此选项。

; 您也可以将其设置为 2 以在搜寻模式下禁用哈希污染检测以获得更好的性能，

; 但只有在您确定在相关游戏中不需要它时才这样做。

; track_texture_updates=1

; StereoParams 和 IniParams 纹理将被分配到的寄存器 -

; 如果游戏已经使用了这些寄存器，请更改它们。新反编译的着色器

; 将使用新寄存器，但现有着色器不会更新 - 最好的

; 工作流程是更改这些后删除 ShaderCache，并对 ShaderFixes 中的所有着色器运行搜索和替换。

; 设置为 -1 以在不需要时禁用。

stereo_params = -1

ini_params = 120

; 设置为 1 以在着色器汇编中组装输入/输出/修补常量签名注释，

; 以允许更改它们以在管线阶段之间传递新值。

; 如果启用了此功能，请小心处理这些注释 - 将它们视为代码！

; 如果设置为 0，汇编器将使用旧行为并

; 重用未修改着色器中的部分。

assemble_signature_comments = 1

; 在为 ShaderRegex 反汇编着色器时包含原始的“无法破译的自定义数据”。

; 保留此内容是为了向后兼容可能不期望看到它的模式，

; 因为我们以前不包含它。通过导出或搜寻转储的着色器始终包含任何无法破译的数据。

disassemble_undecipherable_custom_data = 1

; 在反汇编着色器时，用索引和组件替换注释块中的常量缓冲区偏移量，

; 以便它们与代码中的访问方式匹配，使事情更容易理解并简化 ShaderRegex。

patch_assembly_cb_offsets = 1

; 启用更合理的行为，当从子目录包含 HLSL 文件时，而这些文件本身又包含其他文件。

; 还禁用向后兼容性，即可以相对于游戏的工作目录指定文件（即

; 使用 #include "hud.hlsl" 而不是 #include "ShaderFixes/hud.hlsl"）。

; 需要两次配置重新加载和缓存失效才能使更改生效

recursive_include = 1

;------------------------------------------------------------------------------------------------------

; 分析选项。

;

; 将所有自动修复的着色器另存为 HLSL

export_fixed = 0

; 将发送到 DX11 的所有着色器另存为 ASM，如果由游戏编译，则另存为 HLSL 文本文件。

export_shaders = 0

; 将所有看到的着色器另存为 HLSL 代码，无论是否自动修复。1= 仅 HLSL，2=HLSL+原始ASM，3=HLSL+原始ASM+重新编译的ASM

export_hlsl = 0

; 在任何标记按钮按下时存储一个 ShaderUsage.txt 文件。

dump_usage = 0

;------------------------------------------------------------------------------------------------------

; 自动着色器修复。此处的设置仅适用于新读取的着色器。

; 所有现有的 *_replace.txt 或 *_replace.bin 文件都不会被修改。

; 如果您在此处更改设置，最好的工作流程是删除着色器缓存目录中的所有着色器，

; 让它们再次被修复。

; 对所有具有位置语义的着色器参数进行立体化。

fix_sv_position = 0

; 像素深度评估。

;fix_ZRepair_DepthTexture1=SceneDepthTexture.x

;fix_ZRepair_Dependencies1=MinZ_MaxZRatio

;fix_ZRepair_ZPosCalc1=zTex * MinZ_MaxZRatio.z - MinZ_MaxZRatio.w

;fix_ZRepair_DepthTexture2=SceneDepthTexture.x

;fix_ZRepair_Dependencies2=

;fix_ZRepair_ZPosCalc2=zTex

;fix_ZRepair_PositionTexture=PositionTexture

;fix_ZRepair_PositionCalc=1024 * %s

; 如果其他深度源不可用，则注入深度纹理。

;fix_ZRepair_DepthTextureHash=8a19f087b004598f

; 使用评估深度校正像素着色器中的逆变换。

;fix_InvTransform=ScreenToLight,InverseTranslatedViewProjectionMatrix

; 反投影坐标校正。

;

; 表达式中可用的变量：

; stereoParams.x = 分离值，范围 [0..1] 或 [-0..-1]，取决于活动眼睛

; stereoParams.y = w 坐标中的收敛值 (1/z)

; stereoParams.z = -1/1 表示左/右眼

; stereoParams.w = 不带眼睛分离的分离值

; stereoTune.x = 调谐值 1（默认为 1）

; stereoTune.y = 调谐值 2（默认为 1）

; stereoTune.z = 调谐值 3（默认为 1）

; stereoTune.w = 调谐值 4（默认为 1）

; stereoScreenRes.x = 主交换链后台缓冲区水平分辨率

; stereoScreenRes.y = 主交换链后台缓冲区垂直分辨率

; zpos = 像素着色器中当前像素的 z 位置

; wpos = 像素着色器中当前像素的 w 位置

; 从顶点着色器向像素着色器发送逆变换。

;fix_BackProjectionTransform1=ScreenToTranslatedWorldMatrix._m00,ScreenToTranslatedWorldMatrix._m02,ScreenToTranslatedWorldMatrix._m01

;fix_BackProjectionTransform2=ScreenToWorld._m00,ScreenToWorld._m02,ScreenToWorld._m01

; 要在像素着色器中校正的位置变量。

;fix_ObjectPosition1=PointPositionAndInverseRadius

;fix_ObjectPosition1Multiplier=1, (stereoScreenRes.x/stereoScreenRes.y)*0.5, -0.5

;fix_ObjectPosition2=SpotPositionAndInverseRadius

;fix_ObjectPosition2Multiplier=1, (stereoScreenRes.x/stereoScreenRes.y)*0.5, -0.5

; 要在像素着色器中校正的矩阵乘法。

;fix_MatrixOperand1=TranslatedWorldToShadowMatrix

;fix_MatrixOperand1Multiplier=1, (stereoScreenRes.x/stereoScreenRes.y)*0.5 - viewDirection.z*0.05 + (0.02791946-stereoParams.x/stereoParams.w), 0

; 自动修复着色器选项：重新编译所有顶点着色器。修复延迟渲染中的微小差异。

;recompile_all_vs=0

;------------------------------------------------------------------------------------------------------

; 无补丁的着色器操作 + 着色器过滤。

;------------------------------------------------------------------------------------------------------

;[ShaderOverride1]

;Hash=69732c4f23cb6c48

; 使用此着色器渲染对象时的自定义立体分离值。

;Separation=0

; 使用此着色器渲染对象时的自定义立体收敛值

; （例如，convergence=0 会将对象移动到无穷远）。

;Convergence=0

; 不使用此着色器绘制任何内容。

;Handling=skip

; 仅当存在/不存在活动深度缓冲区时使用替换着色器（用于 UI 过滤）

; 已弃用：改为使用 'x = oD'，并在着色器中测试负零

; if (asint(IniParams[0].x) == asint(-0.0)) { /* depth inactive <em>/ } else { /</em> depth active */ }

;depth_filter = depth_inactive

;depth_filter = depth_active

; 使用此着色器时覆盖 [Constants] 中的值：

;x=2.0

; 将活动渲染目标和分辨率的尺寸（通过 get_resolution_from 获得）传递到着色器：

;x1=rt_width

;y1=rt_height

;z1=res_width

;w1=res_height

; 使用活动像素着色器中的 t0 进行纹理过滤。如果不存在

; 此纹理的 [TextureOverride*] 部分则为 0，如果存在则为 1。对于

; 高级过滤，请在 [TextureOverride] 部分设置 filter_index 的值。

; 这也适用于其他槽类型（如 o0, oD, ib 等）。如果此槽中未绑定资源，则为 -0.0（需要特殊测试）：

;x2 = ps-t0

; 匹配伙伴着色器（vs/hs/ds/gs/ps/cs 中的任何一个）。工作方式与

; 纹理过滤非常相似 - 为要匹配的伙伴着色器设置 filter_index

; 在 [ShaderOverride] 或 [ShaderRegex] 中，它将在此变量中设置，或者 1 = ShaderOverride/Regex 匹配且没有 filter_index，0 =

; 没有 ShaderOverride/Regex 匹配，-0.0 = 没有绑定着色器。来自 ShaderOverride 的 filter_index 始终优先于任何匹配的 ShaderRegex。

;local $partner = vs

; 覆盖着色器模型以允许使用更新的功能，如 Texture2DMS：

;model=vs_5_0

; 当此着色器覆盖使用时激活预设部分。

;preset = PresetExample

; 为此特定着色器启用/禁用剪刀裁剪。这是

; "run = BuiltInCustomShaderDisableScissorClipping"

; 或  "run = BuiltInCustomShaderEnableScissorClipping" 的别名

;disable_scissor = 1

; 还支持将纹理、常量缓冲区、深度缓冲区等

; 从一个着色器复制到另一个着色器。这是一个复杂的主题 - 请参阅此页面：

;    https://github.com/bo3b/3Dmigoto/wiki/Resource-Copying

;------------------------------------------------------------------------------------------------------

; 飞行正则表达式着色器修补引擎

;------------------------------------------------------------------------------------------------------

;

; 这些部分定义了用于匹配着色器并应用

; 某些类别修复的正则表达式。出于可靠性和性能原因，此方法仅支持汇编着色器。

;

; 每个模式必须有一个以 ShaderRegex 为前缀的主部分：

;

;[ShaderRegex1]

; shader_model 是必需的，必须设置为此模式将应用的着色器类型。

; 可以指定多个着色器模型以将模式匹配到多个类型。

; 着色器模型 4 和 5 中的指令存在一些差异（例如在资源加载

; 指令中），因此在某些情况下，您可能需要为每个模型设置单独的模式。

;shader_model = ps_4_0 ps_5_0

;

; temps 用于为将在模式中使用的临时寄存器命名。3DMigoto 将识别空闲的寄存器号并自动调整 dcl_temps。

;temps = stereo tmp1

;

; 这个主部分也充当命令列表，因此您可以定义将在每个匹配的着色器上应用的操作，就像在任何其他启用了命令列表的部分（如 ShaderOverride、Present 等）中一样。

;

;

; 接下来感兴趣的部分是正则表达式模式。如果省略此部分，则将匹配具有匹配 shader_model 的每个着色器（并处理命令列表和 InsertDeclarations）。

; 部分名称的第一部分必须与您在上面定义的主 ShaderRegex 部分匹配，并以 ".Pattern" 结尾。

; 我们支持的正则表达式语法是 PCRE2，它与强大的 Perl 和 Python 语法基本兼容。您可以在此处找到语法参考，但一般来说，任何正则表达式教程都会给您一个很好的入门：

;

;   http://www.pcre.org/current/doc/html/pcre2syntax.html

;

; 请注意，由于这是在 ini 文件中解析的，因此空行和 ini 注释将被忽略，并且每行的前导和尾随空格将被去除，因此如果您需要匹配缩进行，您需要在行的开头显式匹配空格，使用 \s*

; 您还应该使用 \n 来匹配每行末尾的换行符。不要将其与由 (?x) 开关激活的扩展模式混淆，后者将忽略*所有*空格，以便将复杂的模式分解以求清晰。

;

; 默认启用多行匹配，不区分大小写（由于

; 不同版本的

; 反汇编程序产生的大小写不同），但如果您需要其他选项，PCRE2 提供了大多数这些选项的开关。

;

; 这是一个如何匹配着色器中的矩阵乘法的示例，

; 使用 Python 风格的命名捕获组来提取 X 和 Z 坐标的寄存器和分量，以及另一个命名捕获组来验证 div 指令中使用的寄存器是否与乘法中使用的寄存器匹配：

;

;[ShaderRegex1.Pattern]

;mul r\d+\.xyzw, r\d+\.yyyy, cb0\[28\]\.xyzw\n

;mad r\d+\.xyzw, (?P&lt;pos_x&gt;r\d+)\.(?P&lt;swizzle_x&gt;[xyzw])[xyzw]{3}, cb0\[27\]\.xyzw, r\d+\.xyzw\n

;mad r\d+\.xyzw, (?P&lt;pos_z&gt;r\d+)\.(?P&lt;swizzle_z&gt;[xyzw])[xyzw]{3}, cb0\[29\]\.xyzw, r\d+\.xyzw\n

;add (?P&lt;result&gt;r\d+)\.xyzw, r\d+\.xyzw, cb0\[30\]\.xyzw\n

;div r\d+\.[xyzw]{2}, (?P=result)\.[xyzw]{4}, r\d+\.wwww\n

;

;

; 下一部分指定如何修改匹配的模式。同样，名称必须以与主部分相同的名称开头，并以

; ".Pattern.Replace" 结尾（替换与模式关联是有原因的，但这就来了）。

; 您可以（并且我强烈鼓励您这样做）在上面模式中使用命名捕获组，并在此处替换它们。

; 您在主 ShaderRegex 部分中定义的临时寄存器也可以使用与命名捕获组相同的语法在此处使用。

; 使用 ${0} 表示匹配模式的位置，允许您在其之前和/或之后插入代码，或使用额外的捕获组在中间插入代码。

; 在 PCRE2 中启用了扩展替换，除其他外，\n 会插入换行符。

;

;[ShaderRegex1.Pattern.Replace]

;\n

;// UE4 shadow correction:\n

;ld_indexable(texture2d)(float,float,float,float) ${stereo}.xyzw, l(0, 0, 0, 0), t125.xyzw\n

;add ${tmp1}.x, ${pos_z}.${swizzle_z}, -${stereo}.y\n

;mad ${pos_x}.${swizzle_x}, -${tmp1}.x, ${stereo}.x, ${pos_x}.${swizzle_x}\n

;\n

;${0}

;

;

; 最后一部分允许您在着色器中插入新的声明，并且

; 3DMigoto 将首先检查此声明是否尚未插入。

; 通常这用于获取 StereoParams 在 t125 中的访问权限：

;

;[ShaderRegex1.InsertDeclarations]

;dcl_resource_texture2d (float,float,float,float) t125

;------------------------------------------------------------------------------------------------------

; 纹理 / 渲染目标操作

;------------------------------------------------------------------------------------------------------

;

; 注意：如果您尝试匹配与分辨率相同（或

; a /2, x2, x4 或 x8 倍数）的纹理，您应该确认在不同分辨率下使用相同的哈希，

; 并在必要时调整 get_resolution_from。

;

; 注意：如果您发现纹理哈希似乎不一致地更改，请尝试在 [Rendering] 部分启用 track_texture_updates。

;

;[TextureOverride1]

;Hash=c3e55ebd

; NVidia 将表面创建模式启发式存储在游戏配置文件中。设置

; 此选项会覆盖给定纹理/缓冲区的创建模式。

; 0 = NVAPI_STEREO_SURFACECREATEMODE_AUTO - 使用驱动程序注册表配置文件设置。

; 1 = NVAPI_STEREO_SURFACECREATEMODE_FORCESTEREO - 创建立体表面。

; 2 = NVAPI_STEREO_SURFACECREATEMODE_FORCEMONO - 创建单色表面。

;StereoMode=2

;[TextureOverride2]

;Hash = e27b9d07

; 阻止游戏从此纹理读取 - 将给游戏一个空白

; 缓冲区。用于防止 CryEngine 游戏错误地剔除对象。使用

; 帧分析日志并查找 MapType:1 来识别可能的哈希。

;deny_cpu_read=1

; 使用 CopySubresourceRegion 扩展复制到此纹理的区域（类似于

; rasterizer_disable_scissor 的问题）。用于解决 CryEngine 游戏中透明

; 折射效果（如玻璃）的问题。

;expand_region_copy=1

;[TextureOverrideUAVNotRT]

; 基于属性而不是哈希进行模糊匹配的示例。

; 提供了

; 对驱动程序启发式的替代方案，我们可以更精确地控制。

;match_type = Texture2D

;match_width = height * 16 / 9

;match_height = !res_height

;match_msaa = &gt;1

;match_bind_flags = +unordered_access -render_target

;match_priority = -1

;StereoMode = 2

;------------------------------------------------------------------------------------------------------

; 通过鼠标按钮配置进行设置覆盖的示例

; 将游戏提供的硬编码收敛值映射到自定义值

; 这些是 L.A. Noir 的值

; 通过鼠标按钮配置进行设置覆盖的示例

;------------------------------------------------------------------------------------------------------

;[ConvergenceMap]

;Map1=from 3e99999a to 0.3

;Map2=from 3f800000 to 1.0

;Map3=from 3f666666 to 0.9

;------------------------------------------------------------------------------------------------------

; 在启动时更新游戏的驱动程序配置文件。

;

; 此处的任何更改都需要用户在首次运行游戏时确认 UAC 提示，但 DLL 仅在确实需要时才会这样做。

;------------------------------------------------------------------------------------------------------

[Profile]

; 此设置应始终添加到配置文件中 - 它是许多其他设置工作所必需的，以及允许保存收敛。

; 如果您要自定义配置文件，您应该**始终取消注释此行**：

;StereoProfile = 1

;

; 此设置启用立体计算着色器 (0x00004000)，这需要

; 修复许多 DX11 游戏中的“单眼”类型渲染问题，并

; 允许在 SLI 中使用 stereo2mono 和左右并排/上下输出模式 (0x00000008)：

;StereoFlagsDX10 = 0x00004008

;

; 这在配置文件中设置默认收敛。请注意，3DMigoto 会

; 很乐意覆盖驱动程序的默认值，但只有在有另一个原因更新配置文件时才会覆盖用户的自定义收敛，

; 例如对另一个设置的更改（在 Comments 设置中添加版本标签将是强制更新的一种方法）：

;StereoConvergence = 0.5

;

; 这会更改驱动程序显示的绿色文本，是向用户显示任何提醒或只是获得一些功劳的好地方：

;Comments = "Such and such 3D fix by an awesome modder. Disable motion blur!"

;

; 更改评级："0": 3D Vision Ready, "1": Excellent, "2": Good,

;                    "3": Fair, "4": Not Recommended

;Compat = "0"

;

; 如果您添加了一些注释，您可能希望强制绿色文本在下次游戏运行时显示。

; 请注意，与收敛一样，3DMigoto 仅在此处也更新了其他内容（例如 Comments）时才会覆盖用户设置，

; 因此这通常只在用户安装修复后首次运行游戏时显示（请务必启用 StereoProfile）。

;StereoMemoEnabled = 1

;

; 禁用兼容模式以确保用户看到的是真实效果。与

; 收敛一样，3DMigoto 将尊重用户在此处的自定义设置：

;Disable2DD = 1

;

; 在兼容模式的绿色文本中放置提醒，告知他们没有看到真实效果：

;2DD_Notes = "Compatibility mode is enabled. To use the fix, please disable it with Ctrl+Alt+F11"

;

; 这两个选项更改驱动程序用于将分离和收敛传递给它已修改的任何顶点和域着色器的常量缓冲区。

; 默认值为 12，如果游戏已将该常量缓冲区用于任何目的，您可能需要更改它，这应该是显而易见的，

; 因为您将在使用它的任何着色器上看到 2D 几何图形。除非您理解其中的细微差别，否则应避免自己使用这些常量缓冲区。

;DX10VSCBNumber = 12

;DX10DSCBNumber = 12

;

; 解决违反 DirectX 线程约束的游戏中的崩溃和挂起

; （例如生化危机 2/7、鬼泣 5）。设置为 1 始终

; 启用变通方法，或设置为 2 仅在使用 3D Vision 时启用变通方法：

;APP_COMPAT_SHIM = 2

;

; 如果设置没有名称或您不知道它是什么（检查

; d3d11_log.txt 中此配置文件中所有设置的名称，或使用 Nvidia Profile Inspector 中的名称），

; 您可以使用十六进制 ID（实际上，您甚至可以

; 粘贴来自 Geforce Profile Manager 的完整配置文件 - 只需确保删除任何损坏的字符串设置）：

;0x1033cec2 = 0x00000002

;

; 还有更多选项，我们已尝试在此处记录它们 -

; 如果您发现任何新内容，请*务必*编辑此页面：

; http://wiki.bo3b.net/index.php?title=Driver_Profile_Settings

;------------------------------------------------------------------------------------------------------

; 此部分定义了一个快捷方式，用于解绑所有渲染和深度目标，

; 这在 [CustomShader] 部分中通常是必需的，因为所有绑定的渲染

; 和深度目标*必须*具有相同的大小，而保留其他绑定

; 的内容是导致事情变得奇怪错误的一种可靠方法。

; 在复制了您需要的任何状态之后，并在绑定自己的状态之前，从任何支持命令列表的部分使用 'run = CommandListUnbindAllRenderTargets' 调用它。

;------------------------------------------------------------------------------------------------------

[CommandListUnbindAllRenderTargets]

run = BuiltInCommandListUnbindAllRenderTargets

;------------------------------------------------------------------------------------------------------

; 从 Present 调用在每帧开始/结束时运行的命令

;

; 用于在每帧开始时清除自定义资源或 ini 参数，或

; 运行自定义着色器来做您能想到的任何事情。post 关键字将

; 使操作在帧开始时运行而不是结束时 - 作为一般指导原则，您希望在帧结束时绘制覆盖层，并在新帧开始时清除资源。

;------------------------------------------------------------------------------------------------------

[Present]

; 示例：在每帧开始时清除一个 ini 参数：

;post x = 0

; 示例：取消定义自定义资源，直到有内容复制到其中：

;post ResourceDepthBuffer = null

; 示例：在每帧开始时用黑色/零清除自定义资源

; （请注意，驱动程序错误可能意味着在某些情况下只有一只眼睛被清除）：

;post clear = ResourceFoo

; 如果您正在寻找 CustomShader3DVision2SBS、CustomShaderSoftwareMouse 或

; CustomShaderUpscale，这些现在在文件顶部的 [Include] 部分中启用。

; 与这些相关的其他选项仍在同一位置。

;------------------------------------------------------------------------------------------------------

; 日志记录选项。

; 注释行或将值设置为 0 表示不记录。

;------------------------------------------------------------------------------------------------------

[Logging]

; 记录所有 API 使用情况

calls = 0

; 记录输入键操作

input = 0

; 超级详细的巨大日志

debug = 0

; 无缓冲日志记录，以避免文件末尾丢失任何内容

unbuffered = 0

; 强制 CPU 亲缘性仅使用单个 CPU 进行多线程调试

force_cpu_affinity = 0

; 记录 NVAPI 收敛修改

convergence = 0

; 记录 NVAPI 分离修改

separation = 0

; 启用 3DMigoto 的死锁检测算法。如果您遇到挂起（不是

; 崩溃），这可能有助于找出原因。

debug_locks = 0

; 启用 3DMigoto 的崩溃处理程序，以在游戏崩溃时刷新日志并写出小型转储文件。

; 如果游戏挂起而不是崩溃，您可以手动调用处理程序，方法是按住 Ctrl+Alt+F11 直到听到 SOS 音调：

crash = 0

; 启用 ini 解析器警告的显示，并随后发出蜂鸣声

show_warnings = 1
```
