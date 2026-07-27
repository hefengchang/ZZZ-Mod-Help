---
title: 3DMigoto / ZZMI INI 文档指南
slug: C4UUwlc9giThYmkh1qJcQWoKnYf\TVTjwU7NFi5OuckfwNtckgPqn1f
sidebar_position: 1
---


# 3DMigoto / ZZMI INI 文档指南

本文档综合整理了适用于<b>绝区零 （ZZZ）</b>的 3DMigoto （ZZMI） 的 INI 配置文件说明，涵盖基础配置、Mod 结构、覆盖系统、快捷键绑定、高级技巧等内容。

---

# <b>概述</b>

## <b>什么是 3DMigoto / ZZMI？</b>

- <b>**3DMigoto**</b> 是一个 DirectX 11 API 钩子（hook）工具，最初用于 NVIDIA 3D Vision 立体驱动修复，后来被广泛用于游戏 Mod 制作。

- <b>**GIMI （GI-Model-Importer）**</b> 是由 SilentNightSound 基于 3DMigoto 二次开发的分支，专门针对米哈游游戏（原神、崩坏：星穹铁道、绝区零）优化，增加了模型导入/导出、纹理替换等 Mod 功能。

- <b>**ZZMI**</b> 是 GIMI 针对绝区零的进一步适配版本。

## <b>工作原理</b>

3DMigoto 通过注入到游戏进程，拦截 DirectX 11 的绘制调用（Draw Call）。用户在 INI 文件中通过 <b>**Hash 值**</b> 定位特定的纹理、顶点缓冲或着色器，然后指定替换资源或跳过绘制，从而实现模型/纹理替换。

## <b>版本选择</b>

GIMI 提供两个版本：

<table>
<colgroup>
<col width="140"/>
<col width="100"/>
<col width="620"/>
</colgroup>
<tbody>
<tr><td><p><b>ForDevelopment</b></p></td><td><p>Mod 制作者 </p></td><td><p>启用狩猎模式（Hunting Mode）、屏幕绿色调试信息，功能完整但性能稍慢</p></td></tr>
<tr><td><p><b>ForPlaying</b></p></td><td><p>普通玩家</p></td><td><p>关闭开发功能，运行效率更高</p></td></tr>
</tbody>
</table>

---

# <b>安装与初始配置</b>

## <b>下载与解压</b>

1.从https://github.com/leotorrez/ZZ-Model-Importer 下载对应版本。

2.将压缩包解压到 <b>**非游戏根目录**</b> 的文件夹（例如 `D:\3DMigoto\ZZZ\`），避免被反作弊系统扫描。

## <b>编辑 d3dx.ini</b>

用任意文本编辑器打开 `d3dx.ini`，进行以下修改：

### <b>步骤一：设置目标进程</b>

找到 `[Loader]` 节，修改或添加：

```toml
<b>[Loader]</b>
target = ZenlessZoneZero.exe
launch = D:\Games\ZenlessZoneZero\ZenlessZoneZero.exe
```

### <b>步骤二：修改 CommandListSkin</b>

找到 `[CommandListSkin]`和`[CommandListSkinTexture]`（如果没有则新建），修改为以下内容：

```toml
<b>[CommandListSkin]
if $costume_mods
        checktextureoverride = ps-t0
        checktextureoverride = vb0
        checktextureoverride = vb1
        checktextureoverride = vb2
        checktextureoverride = vb3
        checktextureoverride = ib
        x140 = 0
endif

[CommandListSkinTexture]
if $costume_mods
        checktextureoverride = ps-t1
        checktextureoverride = ps-t2
        checktextureoverride = ps-t3
        checktextureoverride = ps-t4
        checktextureoverride = ps-t5
        checktextureoverride = ps-t6
        checktextureoverride = ps-t7
        checktextureoverride = ps-t8
        checktextureoverride = ps-t9
        checktextureoverride = ps-t10
        x140 = 0
</b><b>endif</b>
```

&gt; <b>**注意**</b>：某些教程写的是 `[CommandListskinl]`（末尾是小写 L），但标准写法是 `[CommandListSkin]`，两种写法在 3DMigoto 中都可能生效，建议使用标准写法。

## <b>启动游戏</b>

1. <b>**以管理员身份**</b> 运行 `3DMigoto Loader.exe`。

- 出现黑色命令行窗口，提示 `3DMigoto ready - Now run the game.`

2.启动《绝区零》游戏客户端。

3.验证注入：游戏左下角出现绿色文字（开发版），或按 `F1` 弹出帮助界面（玩家版）。

---

# <b>INI 文件基础</b>

## <b>文件结构</b>

INI 文件由三要素构成：

```toml
<em>; 注释 — 以分号开头，用于说明</em>
<em>; ====================================</em>

<b>[节名称]</b>             <em>； 方括号定义节（Section）</em>
键名 = 值            <em>； 节内的属性（Property）/ 键值对</em>
```

## <b>节类型分类</b>

<table>
<colgroup>
<col width="100"/>
<col width="296"/>
<col width="390"/>
</colgroup>
<tbody>
<tr><td><p><b>常规节</b></p></td><td><p>唯一键，后值覆盖前值 </p></td><td><p><code>[Loader]</code>， <code>[Logging]</code>， <code>[Constants]</code></p></td></tr>
<tr><td><p><b>命令列表节</b></p></td><td><p>允许多个相同键名，有序执行</p></td><td><p><code>[CommandListSkin]</code>， <code>[CommandListXxx]</code> </p></td></tr>
<tr><td><p><b>覆盖节</b></p></td><td><p> 以 <code>ShaderOverride</code> 或 <code>TextureOverride</code> 开头，可有多实例 </p></td><td><p><code>[TextureOverrideBody]</code>， <code>[ShaderOverrideRemove]</code> </p></td></tr>
<tr><td><p><b>资源节</b></p></td><td><p> 以 <code>Resource</code> 开头，定义外部资源</p></td><td><p><code>[ResourceBodyVB]</code>， <code>[ResourceDiffuse]</code> |</p></td></tr>
</tbody>
</table>

## <b>命名规范</b>

- 节名称 <b>**不区分大小写**</b>：`[textureoverridebody]` 等价于 `[TextureOverrideBody]`

- 自定义名称中建议使用字母、数字和下划线，避免特殊字符
- 注释以 英文`;` 开始（必须单独一行或行尾，行尾注释需注意兼容性）

## <b>包含机制</b>

`[Include]` 节允许模块化加载配置：

```toml
<b>[Include]</b>
include_recursive = Mods                        <em>; 递归加载 Mods 下所有 。ini 文件</em>
exclude_recursive = DISABLED*                   <em>; 排除以 DISABLED 开头的文件</em>
include = ShaderFixes\auto_convergence.ini      <em>; 加载特定文件</em>
namespace = MyMod                               <em>; 为包含文件设置命名空间前缀</em>
condition = (1==1)                              <em>; PCRE2 条件表达式，满足才加载</em>
---
```

# <b>主配置 d3dx.ini 详解</b>

## <b>[Loader] — 加载器设置</b>

```toml
<b>[Loader]</b>
target = ZenlessZoneZero.exe    <em>; 目标进程（必须配置）</em>
launch =                        <em>; 自动启动游戏的可执行文件路径</em>
timeout = 20                    <em>; 等待目标进程的超时时间（秒）</em>
```

## <b>[Logging] — 日志控制</b>

```toml
<b>[Logging]</b>
calls = 0               <em>; 记录所有 API 调用（1=开， 0=关）</em>
input = 0               <em>; 记录按键输入</em>
debug = 0               <em>; 超详细调试日志</em>
convergence = 0         <em>; 记录立体汇聚值变化</em>
separation = 0          <em>; 记录立体分离度变化</em>
debug_locks = 0         <em>; 死锁检测日志</em>
```

## <b>[Constants] — 全局常量与变量</b>

```toml
<b>[Constants]</b>
<em>; 全局变量（所有 INI 文件可见）</em>
global $costume_mods = 1    <em>; 服饰 Mod 总开关</em>

<em>; 持久化变量（自动保存到 d3dx_user.ini）</em>
global persist $my_setting = 0.5

<em>; IniParams（向着色器暴露为 t120 纹理）</em>
x = 0.8
y = 1.0
z = 1.2
w = 2.0
x1 = 3.5
y1 = 2.0

<em>; 在配置加载时执行命令列表</em>
run = CommandListInit
post run = CommandListPostInit    <em>; 在 d3dx_user.ini 加载后执行</em>
```

## <b>[Rendering] — 渲染管线设置</b>

```toml
<b>[Rendering]</b>
shader_hash = 3dmigoto/embedded/bytecode   <em>; Hash 计算方法</em>
texture_hash = 1                            <em>; 纹理 Hash 算法版本（1=新版）</em>
override_directory = ShaderFixes            <em>; 自定义着色器目录</em>
cache_shaders = 1                           <em>; 缓存编译后的着色器（提升加载速度）</em>
stereo_params = 125                         <em>; StereoParams 纹理寄存器槽（默认 t125）</em>
ini_params = 120                            <em>; IniParams 纹理寄存器槽（默认 t120）</em>
rasterizer_disable_scissor = 0              <em>; 全局禁用裁剪测试</em>
```

## <b>[Device] — 显示与分辨率</b>

```toml
<b>[Device]</b>
width = 1920                <em>; 强制宽度</em>
height = 1080               <em>; 强制高度</em>
full_screen = 0             <em>; 强制全屏（0=窗口， 1=全屏， 2=无边框）</em>
hide_cursor = 0             <em>; 隐藏硬件光标</em>
upscaling = 0               <em>; 启用升采样</em>
get_resolution_from = swap_chain    <em>; 分辨率来源</em>
```

## <b>[Present] — 每帧执行</b>

```toml
<b>[Present]</b>
run = CommandListPerFrame       <em>; 每帧开头执行的命令列表</em>
post run = CommandListPostFrame <em>; 每帧末尾执行的命令列表</em>
```

## <b>[System] — 运行时行为</b>

```toml
<b>[System]</b>
check_foreground_window = 1     <em>; 仅在游戏窗口在前台时处理输入</em>
load_library_redirect = 0       <em>; DLL 加载链控制</em>
hook = recommended              <em>; 使用钩子而非包装器</em>
---
```

# <b>Mod 文件夹结构</b>

## <b>标准布局</b>

每个 Mod 放在 `Mods` 目录下的独立子文件夹中：

```text
Mods/
├── MyZZZMod/                         ; Mod 文件夹（名称自定义）
│   ├── MyZZZMod.ini                  ; Mod 配置文件（核心）
│   ├── Body.vb                       ; 顶点缓冲文件（模型几何数据）
│   ├── Body.ib                       ; 索引缓冲文件（三角面连接信息）
│   ├── TextureDiffuse.dds            ; 漫反射贴图（颜色信息）
│   ├── TextureLightMap.dds           ; 光照贴图
│   └── TextureNormalMap.dds          ; 法线贴图（可选）
├── AnotherMod/
│   └── ...
└── DISABLED_OldMod/                  ; 文件名含 DISABLED 则被排除，不被加载
```

## <b>多部件 Mod 的推荐结构</b>

```toml
Mods/
├── CharacterName_Full/
│   ├── CharacterName_Full.ini
│   ├── Body.vb / Body.ib
│   ├── Hair.vb / Hair.ib
│   ├── Dress.vb / Dress.ib
│   ├── BodyDiffuse.dds
│   ├── BodyLightmap.dds
│   ├── HairDiffuse.dds
│   └── DressDiffuse.dds
```

## <b>加载规则</b>

- 3DMigoto 启动时递归加载 `Mods/` 下所有 `.ini` 文件

- 游戏内按 <b>**F10**</b> 热加载所有 Mod（无需重启游戏）

- 每个角色同一时间只能应用一个 Mod（因为共享 Hash 值会冲突）
- 禁用 Mod：将文件夹名或 `.ini` 文件名标记为 `DISABLED`（如 `DISABLED_OldMod.ini`）或添加 `.disabled` 后缀

---

# <b>TextureOverride — 纹理覆盖系统</b>

## <b>基本语法</b>

```toml
<b>[TextureOverrideCustomName]</b>     <em>; </em><b>CustomName</b><em>名称自定义，可任意起名</em>
hash = 12345678ABCDEF00         <em>; 要覆盖的纹理/缓冲 Hash 值（8位或16位进制）</em>
```

## <b>核心参数</b>

<table>
<colgroup>
<col width="240"/>
<col width="146"/>
<col width="434"/>
</colgroup>
<tbody>
<tr><td><p> <code>hash</code></p></td><td><p>UINT64 （hex）</p></td><td><p><b><strong>必需</strong></b>。要匹配的纹理/缓冲 Hash 值</p></td></tr>
<tr><td><p><code>handling</code></p></td><td><p>string </p></td><td><p><code>skip</code> = 跳过原始绘制；<code>default</code> = 正常绘制</p></td></tr>
<tr><td><p><code>drawindexed</code></p></td><td><p><code>auto</code> / 其他</p></td><td><p><code>auto</code> = 自动绘制自定义资源 </p></td></tr>
<tr><td><p><code>match_first_index</code></p></td><td><p>int</p></td><td><p>匹配第一个索引（用于同一缓冲中的多对象区分）</p></td></tr>
<tr><td><p><code>match_index_count</code></p></td><td><p>int</p></td><td><p>匹配索引数量 </p></td></tr>
<tr><td><p><code>match_first_vertex</code></p></td><td><p>int</p></td><td><p>匹配第一个顶点</p></td></tr>
<tr><td><p><code>match_vertex_count</code></p></td><td><p>int</p></td><td><p>匹配顶点数量</p></td></tr>
<tr><td><p><code>match_priority</code></p></td><td><p>int</p></td><td><p>匹配优先级（值越高越优先）</p></td></tr>
<tr><td><p><code>ib</code></p></td><td><p>Resource 引用</p></td><td><p>替换索引缓冲</p></td></tr>
<tr><td><p><code>vb0</code>， <code>vb1</code>， <code>vb2</code></p></td><td><p>Resource 引用</p></td><td><p>替换顶点缓冲（0/1/2）</p></td></tr>
<tr><td><p><code>ps-t0</code>～<code>ps-t7</code></p></td><td><p>Resource 引用</p></td><td><p>替换像素着色器纹理槽 0～7</p></td></tr>
<tr><td><p><code>ps-te</code></p></td><td><p>Resource 引用</p></td><td><p>像素着色器曲面细分/元素贴图</p></td></tr>
<tr><td><p><code>run</code></p></td><td><p>CommandList 名称</p></td><td><p>执行指定命令列表 |</p></td></tr>
<tr><td><p><code>post run</code></p></td><td><p>CommandList 名称</p></td><td><p>在绘制后执行命令列表</p></td></tr>
<tr><td><p><code>allow_duplicate_hashes</code></p></td><td><p><code>true</code>/<code>overrule</code></p></td><td><p>允许多个节匹配同一 Hash</p></td></tr>
<tr><td><p><code>filter_index</code></p></td><td><p>float </p></td><td><p>与 <code>checktextureoverride</code> 配合的过滤变量</p></td></tr>
<tr><td><p><code>width</code>/ <code>height</code></p></td><td><p>int</p></td><td><p>匹配纹理宽/高（模糊匹配</p></td></tr>
<tr><td><p><code>format</code></p></td><td><p>int</p></td><td><p>匹配纹理格式（如 <code>28</code> = DXGI_FORMAT_R8G8B8A8_UNORM）</p></td></tr>
<tr><td><p><code>deny_cpu_read</code></p></td><td><p>bool</p></td><td><p>阻止游戏从纹理读取数据（返回空白缓冲给游戏）</p></td></tr>
</tbody>
</table>

## <b>纹理槽 （ps-t） 说明</b>

<table>
<colgroup>
<col width="110"/>
<col width="272"/>
<col width="218"/>
</colgroup>
<tbody>
<tr><td><p>槽位</p></td><td><p>常见用途</p></td><td><p>说明</p></td></tr>
<tr><td><p><code>ps-t0</code></p></td><td><p>漫反射贴图 （Diffuse/Albedo）</p></td><td><p>颜色主贴图，最常替换</p></td></tr>
<tr><td><p><code>ps-t1</code></p></td><td><p>光照贴图 （LightMap）</p></td><td><p>预计算光照信息</p></td></tr>
<tr><td><p><code>ps-t2</code></p></td><td><p>法线贴图 （Normal Map）</p></td><td><p>表面凹凸细节</p></td></tr>
<tr><td><p><code>ps-t3</code></p></td><td><p>阴影贴图 （Shadow/SSS）</p></td><td><p>次表面散射/阴影</p></td></tr>
<tr><td><p><code>ps-t4</code></p></td><td><p>金属/粗糙度贴图 （Metal/Roughness）</p></td><td><p>PBR 材质参数</p></td></tr>
<tr><td><p><code>ps-t5</code></p></td><td><p>发光贴图 （Emission）</p></td><td><p>自发光区域</p></td></tr>
<tr><td><p><code>ps-t6</code></p></td><td><p>混合贴图 （Blend Mask）</p></td><td><p>纹理混合遮罩</p></td></tr>
<tr><td><p><code>ps-t7</code></p></td><td><p>预留/其他</p></td><td><p>特殊用途</p></td></tr>
</tbody>
</table>

各槽位的具体用途取决于游戏的着色器实现，建议通过 <b>**框架分析 （Frame Analysis）**</b> 确认。

## <b>基本替换示例</b>

```toml
<b>[TextureOverrideCharacterBody]</b>
hash = 12345678
match_first_index = 0
run = CommandListSkinTexture       <em>; 匹配从索引 0 开始的绘制</em>
ib = ResourceBodyIB
ps-t3 = ResourceBodyDiffuse
ps-t4 = ResourceBodyNormalMap
ps-t5 = ResourceBodyLightMap
ps-t6 = ResourceBodyMaterialMap
drawindexed = auto
```

## <b>跳过绘制（移除部件）</b>

```toml
<b>[TextureOverrideRemoveHat]</b>
hash = 87654321
handling = skip            <em>; 跳过该 Hash 对应的绘制，部件消失</em>
```

## <b>部件区分（match_first_index）</b>

当多个模型部件共享同一个顶点/索引缓冲时，通过 `match_first_index` 区分：

```toml
<em>; 身体部位 — 索引范围从 0 开始</em>
<b>[TextureOverrideBody]</b>
hash = AAAA0000
match_first_index = 0
match_index_count = 1500
ib = ResourceBodyIB
ps-t3 = ResourceBodyDiffuse
ps-t4 = ResourceBodyNormalMap
ps-t5 = ResourceBodyLightMap
ps-t6 = ResourceBodyMaterialMap
drawindexed = auto

<em>; 头发部位 — 索引范围从 1500 开始</em>
<b>[TextureOverrideHair]</b>
hash = AAAA0000
match_first_index = 1500
match_index_count = 600
ib = ResourceHairIB
ps-t3 = ResourceBodyDiffuse2
ps-t4 = ResourceBodyNormalMap2
ps-t5 = ResourceBodyLightMap2
ps-t6 = ResourceBodyMaterialMap2
drawindexed = auto
```

## <b>多纹理槽覆盖</b>

```toml
<b>[TextureOverrideComplex]</b>
hash = BBBB1111
ps-t3 = ResourceDiffuse
ps-t4 = ResourceNormalMap
ps-t5 = ResourceLightMap
ps-t6 = ResourceMaterialMap
ps-t17 = ResourceGlowMap
ps-t18 = ResourceFXMap
run = CommandListSkinTexture
```

# <b>ShaderOverride — 着色器覆盖系统</b>

## <b>基本语法</b>

```toml
<b>[ShaderOverrideCustomName]</b>
hash = 1122334455667788       <em>; 着色器的 Hash 值</em>
```

## <b>核心参数</b>

<table>
<colgroup>
<col width="300"/>
<col width="620"/>
</colgroup>
<tbody>
<tr><td><p>参数</p></td><td><p>说明</p></td></tr>
<tr><td><p><code>hash</code></p></td><td><p>要匹配的着色器 Hash（从狩猎模式获取）</p></td></tr>
<tr><td><p><code>handling = skip</code></p></td><td><p>跳过该着色器对应的所有绘制</p></td></tr>
<tr><td><p><code>handling = abort</code></p></td><td><p>中止命令列表</p></td></tr>
<tr><td><p><code>run = CommandListName</code></p></td><td><p>在绘制前执行命令列表</p></td></tr>
<tr><td><p><code>post run = CommandListName</code></p></td><td><p>在绘制后执行命令列表</p></td></tr>
<tr><td><p><code>depth_filter</code></p></td><td><p>按深度缓冲状态过滤</p></td></tr>
<tr><td><p><code>filter_index</code></p></td><td><p>与 <code>checktextureoverride</code> 配合</p></td></tr>
<tr><td><p><code>allow_duplicate_hashes</code></p></td><td><p>允许重复 Hash 匹配（用于多个条件下的同着色器）</p></td></tr>
<tr><td><p><code>preset = PresetName</code></p></td><td><p>激活预设节</p></td></tr>
<tr><td><p><code>disable_scissor = 1</code></p></td><td><p>禁用裁剪测试</p></td></tr>
<tr><td><p><code>model</code></p></td><td><p>限制着色器模型（如 <code>ps_5_0</code>）</p></td></tr>
<tr><td><p><code>ps-t0 = ResourceName</code></p></td><td><p>绑定自定义纹理资源</p></td></tr>
<tr><td><p><code>dump = options</code></p></td><td><p>转储着色器资源</p></td></tr>
</tbody>
</table>

## <b>跳过着色器（移除特效）</b>

```toml
<b>[ShaderOverrideRemoveOutline]</b>
hash = A1B2C3D4E5F60001
handling = skip
```

## 配合 TextureOverride 修复贴图丢失

当 `TextureOverride` 的贴图替换不生效时，通常需要为对应的着色器添加 `run = CommandListSkinTexture`：

```toml
<b>[ShaderOverrideFixTexture]</b>
hash = 对应 PS 的 Hash 值
run = CommandListSkinTexture
```

## <b>处理重复 Hash</b>

当多个着色器具有相同的 Hash 值但需要不同处理时：

```toml
<b>[ShaderOverrideCase1]</b>
hash = AAAA0000AAAA0000
allow_duplicate_hash = true
checktextureoverride = ps-t0     <em>; 当 ps-t0 被覆盖时匹配</em>
<b>[ShaderOverrideCase2]</b>
hash = AAAA0000AAAA0000
allow_duplicate_hash = true
checktextureoverride = ps-t2     <em>; 当 ps-t2 被覆盖时匹配</em>
```

# <b>Resource — 资源定义</b>

<b>纹理资源</b>

```toml
<b>[ResourceBodyDiffuse]</b>
filename = Texture/BodyDiffuse.dds           <em>; 文件路径（相对于 Mod 文件夹）</em>
<b>[ResourceBodyLightMap]</b>
filename = Texture/BodyLightMap.dds
```

支持的纹理格式：`.dds `（推荐，支持 DXT1/3/5、BC7(sRGB,DX 11+) 等压缩格式）。

## <b>顶点缓冲资源 （VB）</b>

```toml
<b>[ResourceBodyPosition]</b>
type = Buffer
stride = 40          <em>; 每个顶点的字节数（关键参数，需与原始一致）</em>
filename = Buffer/BodyPosition.buf  <em>; 顶点缓冲文件路径</em>

<b>[ResourceBodyTexcoord]</b>
type = Buffer
stride = 20
filename = Buffer/BodyTexcoord.buf

[Resource<b>BodyBlend</b>]
type = Buffer
stride = 32
filename = Buffer/BodyBlend.buf
```

- `stride`（步长）必须与原始缓冲完全一致，否则模型变形
- 顶点缓冲文件的二进制格式需通过 3DMigoto 的工具导出

## <b>索引缓冲资源 （IB）</b>

```toml
<b>[ResourceBodyIB]</b>
type = Buffer
format = DXGI_FORMAT_R32_UINT    <em>; 索引格式（32 位或 16 位）</em>
filename = Buffer/Body.ib               <em>; 索引缓冲文件路径</em>
```

常见格式：
| 格式 | 说明 |
|------|------|
| `DXGI_FORMAT_R32_UINT` | 32 位无符号整数（常用） |
| `DXGI_FORMAT_R16_UINT` | 16 位无符号整数（较少） |

## <b>内联数据资源</b>

```toml
<b>[ResourceInlineData]</b>
type = Buffer
format = DXGI_FORMAT_R32_UINT
data = "0x00000000 0x00000000 0x00000000"   <em>; 内联十六进制数据</em>
```

# <b>CommandList — 命令列表</b>

## <b>基本语法</b>

```toml
<b>[CommandListCustomName]</b>
<em>; 顺序执行的命令</em>
```

## <b>支持的命令</b>

<table>
<colgroup>
<col width="278"/>
<col width="476"/>
</colgroup>
<tbody>
<tr><td><p>命令</p></td><td><p>说明</p></td></tr>
<tr><td><p><code>checktextureoverride = ps-tX</code></p></td><td><p>检查指定纹理槽是否被覆盖</p></td></tr>
<tr><td><p><code>checktextureoverride = vbX</code></p></td><td><p>检查顶点缓冲是否被覆盖</p></td></tr>
<tr><td><p><code>checktextureoverride = ib</code></p></td><td><p>检查索引缓冲是否被覆盖</p></td></tr>
<tr><td><p><code>handling = skip</code></p></td><td><p>跳过当前绘制</p></td></tr>
<tr><td><p><code>x140 = 0</code></p></td><td><p>设置寄存器值（引擎特定）</p></td></tr>
<tr><td><p><code>run = AnotherCommandList</code></p></td><td><p>调用另一个命令列表（可嵌套）</p></td></tr>
<tr><td><p><code>$variable = value</code></p></td><td><p>设置自定义变量</p></td></tr>
<tr><td><p><code>dump = options</code></p></td><td><p>转储资源</p></td></tr>
</tbody>
</table>

## <b>条件控制</b>

```toml
<b>[CommandListConditional]</b>
if $costume_mods
    checktextureoverride = ps-t0
    checktextureoverride = ps-t1
else if $debug_mode
    <em>; 调试模式下的命令</em>
else
    <em>; 默认行为</em>
endif
```

支持 `if / else if / else / endif` 嵌套。条件表达式可以是：

- `$变量名` — 变量值为真（非零）时成立
- `$變量名 == 值` — 等于比较
- `$變量名 != 值` — 不等于比较
- `(条件1) && (条件2)` — 与运算
- `(条件1) || (条件2)` — 或运算

## <b>ZZZ 的标准 CommandListSkin</b>

这是 ZZZ Mod 运行的核心命令列表，确保贴图和缓冲替换生效：

```toml
[CommandListSkin]
if $costume_mods
        checktextureoverride = ps-t0
        checktextureoverride = vb0
        checktextureoverride = vb1
        checktextureoverride = vb2
        checktextureoverride = vb3
        checktextureoverride = ib
        x140 = 0
endif
```

## <b>CommandListSkinTexture</b>

与原神/GIMI 兼容的命令列表，按需运行在单个 TextureOverride 中：

```toml
[CommandListSkinTexture]
if $costume_mods
        checktextureoverride = ps-t1
        checktextureoverride = ps-t2
        checktextureoverride = ps-t3
        checktextureoverride = ps-t4
        checktextureoverride = ps-t5
        checktextureoverride = ps-t6
        checktextureoverride = ps-t7
        checktextureoverride = ps-t8
        checktextureoverride = ps-t9
        checktextureoverride = ps-t10
        x140 = 0
endif
```

在 Mod 的 INI 文件中通过 `run = CommandListSkinTexture` 调用。

# <b>Key / Preset — 按键绑定与预设</b>

## <b>基本语法</b>

```toml
<b>[Key_MyModToggle]</b>
key = F7                   <em>; 绑定的按键</em>
type = cycle               <em>; 按键模式：toggle / activate / hold / cycle</em>
$bottom = 0,1,2            <em>; 切换变量（三元表达式）</em>
```

## <b>按键模式 （type）</b>

<table>
<colgroup>
<col width="200"/>
<col width="200"/>
</colgroup>
<tbody>
<tr><td><p>模式</p></td><td><p>说明</p></td></tr>
<tr><td><p><code>activate</code></p></td><td><p>按下时执行一次（瞬发）</p></td></tr>
<tr><td><p><code>hold</code></p></td><td><p>按住时持续生效，释放时恢复</p></td></tr>
<tr><td><p><code>toggle</code></p></td><td><p>按下切换开/关状态</p></td></tr>
<tr><td><p><code>cycle</code></p></td><td><p>轮换遍历多个预设值</p></td></tr>
</tbody>
</table>

## <b>按键语法</b>

<table>
<colgroup>
<col width="200"/>
<col width="200"/>
<col width="200"/>
</colgroup>
<tbody>
<tr><td><p>语法</p></td><td><p>说明</p></td><td><p>示例</p></td></tr>
<tr><td><p><code>A</code> ~ <code>Z</code></p></td><td><p>字母键</p></td><td><p><code>F</code></p></td></tr>
<tr><td><p><code>0</code> ~ <code>9</code></p></td><td><p>数字键</p></td><td><p><code>5</code></p></td></tr>
<tr><td><p><code>VK_XX</code></p></td><td><p>虚拟键码</p></td><td><p><code>VK_OEM_PLUS</code>（等号/加号）</p></td></tr>
<tr><td><p><code>XB_XX</code></p></td><td><p>Xbox 手柄</p></td><td><p><code>XB_A</code>, <code>XB_LEFT_TRIGGER</code></p></td></tr>
<tr><td><p><code>Shift</code></p></td><td><p>Shift 组合</p></td><td><p><code>Shift F1</code></p></td></tr>
<tr><td><p><code>Ctrl</code></p></td><td><p>Ctrl 组合</p></td><td><p><code>Ctrl Q</code></p></td></tr>
<tr><td><p><code>Alt</code></p></td><td><p>Alt 组合</p></td><td><p><code>Alt 1</code></p></td></tr>
<tr><td><p><code>NO_MODIFIERS</code></p></td><td><p>无修饰键（避免冲突）</p></td><td><p><code>NO_MODIFIERS F1</code></p></td></tr>
</tbody>
</table>

## <b>过渡动画 （transition）</b>

用于立体参数（separation/convergence）的平滑过渡：

```toml
<b>[Key_ConvergenceAdjust]</b>
key = VK_OEM_PERIOD           <em>; 句号键</em>
type = hold
separation = -0.1
convergence = 0.01
transition = 300              <em>; 过渡时间（毫秒）</em>
release_transition = 200      <em>; 释放后恢复时间</em>
transition_type = cosine      <em>; linear / cosine（线性/余弦缓动）</em>
```

## <b>预设系统 （Preset）</b>

```toml
<b>[Preset_MyModStyleA]</b>
$outfit_style = 0
$color_scheme = 1

<b>[Preset_MyModStyleB]</b>
$outfit_style = 1
$color_scheme = 2

<b>[Key_CycleStyle]</b>
key = F6
type = cycle
preset = Preset_MyModStyleA, Preset_MyModStyleB
wrap = true       <em>; 到达末尾后回到开头</em>
```

## <b>实用示例：贴图切换</b>

```toml
<em>; 定义全局开关变量</em>
<b>[Constants]</b>
global $show_mod = 1

<em>; 定义按键切换</em>
<b>[Key_ToggleMod]</b>
key = F7
type = cycle
$socks = 0,1

<em>; 在 TextureOverride 中使用</em>
<b>[TextureOverrideBody]</b>
hash = 12345678ABCDEF00
if $socks == 0
    ps-t3 = ResourceModDiffuse
elseif $socks == 1
    ps-t3 = ResourceOriginalDiffuse
endif
```

# <b>Custom Variables / IniParams — 自定义变量与着色器参数</b>

## <b>变量作用域</b>

<table>
<colgroup>
<col width="100"/>
<col width="280"/>
<col width="380"/>
</colgroup>
<tbody>
<tr><td><p><b>全局</b></p></td><td><p><code>global $name = value</code></p></td><td><p>所有 INI 文件可见 </p></td></tr>
<tr><td><p><b>持久化</b></p></td><td><p>`global persist $name = valu</p></td><td><p>全局 + 自动保存到 <code>d3dx_user.ini</code></p></td></tr>
<tr><td><p><b>命名空间</b></p></td><td><p><code>$\namespace\name = value</code></p></td><td><p>带命名空间隔离的全局变量</p></td></tr>
<tr><td><p><b>局部</b></p></td><td><p><code>$name = value</code></p></td><td><p>仅在当前命令列表内有效</p></td></tr>
</tbody>
</table>

## <b>变量运算</b>

```toml
<b>[CommandListCalc]</b>
$count = $count + 1           <em>; 递增</em>
$enabled = $enabled ? 0 : 1   <em>; 切换（三元运算）</em>
$result = $$a + $$b * 2         <em>; 四则运算</em>
$value = ($x > 0.5) ? 1 : 0   <em>; 条件运算</em>
```

## <b>IniParams — 向着色器传递参数</b>

IniParams 通过 `t120` 纹理寄存器暴露给像素/顶点着色器：

```toml
<b>[Constants]</b>
<em>; 第 0 组 （x， y， z， w） — 对应 IniParams[0] （XMFLOAT4）</em>
x = 0.0          <em>; 向量第 0 个分量</em>
y = 0.5          <em>; 向量第 1 个分量</em>
z = 1.0          <em>; 向量第 2 个分量</em>
w = 0.0          <em>; 向量第 3 个分量</em>

<em>; 第 1 组 （x1， y1， z1， w1） — 对应 IniParams[1]</em>
x1 = 1.0
y1 = 2.0
z1 = 3.0
w1 = 4.0
```

## <b>实用变量示例</b>

```toml
<b>[Constants]</b>
global $costume_mods = 1        <em>; Mod 总开关</em>
global $show_hat = 1            <em>; 帽子显示开关</em>
global $skin_tone = 0           <em>; 肤色选项（0/1/2）</em>
global persist $volume = 0.8    <em>; 持久化设置（保存到用户配置文件）</em>

<em>; 通过命令列表设置</em>
<b>[CommandListSetVariables]</b>
$costume_mods = 1
$show_hat = 0
```

# <b>Hunting — 狩猎模式与 Hash 获取</b>

狩猎模式是 Mod 制作者定位游戏资源的核心功能。仅 <b>**ForDevelopment**</b> 版本可用。

## <b>进入狩猎模式</b>

- 游戏中按数字 `0`进入/退出狩猎模式

- 进入后游戏左下角显示绿色调试文字
- 屏幕上方显示当前浏览的资源类型和编号

## <b>快捷键速查</b>

<table>
<colgroup>
<col width="196"/>
<col width="584"/>
</colgroup>
<tbody>
<tr><td><p>按键</p></td><td><p>功能</p></td></tr>
<tr><td><p><code>/</code> 和<code>*</code>（小键盘）</p></td><td><p>循环浏览 <b><strong>VB （Vertex Buffer）</strong></b> — 顶点缓冲 </p></td></tr>
<tr><td><p><code>7</code> 和<code>8</code>（小键盘</p></td><td><p>循环浏览 <b><strong>IB （Index Buffer）</strong></b> — 索引缓冲</p></td></tr>
<tr><td><p><code>4</code> 和 <code>5</code>（小键盘）</p></td><td><p>循环浏览 <b><strong>VS （Vertex Shader）</strong></b> — 顶点着色器</p></td></tr>
<tr><td><p><code>1</code> 和 <code>2</code>（小键盘</p></td><td><p>循环浏览 <b><strong>PS （Pixel Shader）</strong></b> — 像素着色器</p></td></tr>
<tr><td><p><code>9</code>（小键盘）</p></td><td><p><b><strong>复制当前 IB 的 Hash</strong></b> 到剪贴板</p></td></tr>
<tr><td><p><code>6</code>（小键盘）</p></td><td><p><b><strong>复制当前 VS 的 Hash</strong></b> 到剪贴板 </p></td></tr>
<tr><td><p><code>3</code>（小键盘）</p></td><td><p><b><strong>复制当前 PS 的 Hash</strong></b> 到剪贴板</p></td></tr>
<tr><td><p><code>-</code>（小键盘减号）</p></td><td><p>标记当前资源</p></td></tr>
</tbody>
</table>

## <b>狩猎操作流程</b>

以替换角色身体贴图为例：

1. 进入游戏角色界面（按 C 键）
2. 按 `0` 进入狩猎模式
3. 按小键盘 `/` 和 `*` 遍历顶点缓冲（VB），观察模型哪个部分高亮消失
4. 定位到身体部位后，注意记住 VB 对应的索引
5. 切换到索引缓冲（按小键盘 `7`/`8`），按 `9` 复制 IB Hash
6. 按 `0` 退出狩猎模式
7. 将复制的 Hash 填入 `[TextureOverrideX]` 的 `hash =`

## <b>框架分析 （Frame Analysis）</b>

当狩猎模式不足以定位资源时，使用框架分析：

```toml
<em>; 在 Mod 的 INI 文件中添加</em>
<b>[CommandListAnalyse]</b>
dump = dump_rt dump_tex dump_cb dump_vb dump_ib buf txt dds
```

1. 将此命令列表添加到配置中
2. 按 `F10` 刷新，按 `F8` 执行转储
3. 在 `FrameAnalysis-YYYY-MM-DD-HHMMSS` 文件夹中查看分析结果
4. 搜索相关 Hash，确认 ps-t 槽位及着色器 Hash

## <b>关于 Hash 的注意事项</b>

- <b>**显存不同 Hash 不同**</b>：显卡显存 ≥ 4GB（高显）与 &lt; 4GB（低显）的 Hash 不同

- <b>**服务器版本影响**</b>：国服/国际服/亚服的 Hash 可能不同

- <b>**游戏版本影响**</b>：每次游戏更新后 Hash 可能变化

- Mod 作者分享时需注明对应版本，使用者需自行确认 Hash 是否一致

---

# <b>Present — 每帧执行</b>

## <b>基本用法</b>

```toml
<b>[Present]</b>
run = CommandListFrameStart    <em>; 每帧开始时执行</em>
post run = CommandListFrameEnd <em>; 每帧结束时执行</em>
```

## <b> 应用场景</b>

- 持续的变量监控和更新
- 每帧状态检查
- 动画控制（随时间变化的变量）

```toml
<b>[CommandListFrameStart]</b>
<em>; 每帧检查游戏状态</em>
if $show_mod
    <em>; 保持 Mod 处于激活状态</em>
endif
```

# <b>完整 Mod INI 模板</b>

## <b>纹理替换模板</b>

```toml
<em>; ====================================</em>
<em>; Mod 名称：示例角色纹理替换</em>
<em>; 适用游戏：Zenless Zone Zero</em>
<em>; 作者：YourName</em>
<em>; ====================================</em>
; Constants -------------------------
<b>[Constants]
</b>global $active = 0 <b>          </b>;活动状态判断

<b>[Present]</b>
post $active = 0
; Overrides -------------------------
[TextureOverrideAriaAriaHairBlend]
hash = 8183ba3e
handling = skip
vb2 = ResourceAriaAriaHairBlend
if DRAW_TYPE == 1
    vb0 = ResourceAriaAriaHairPosition
    draw = 5790, 0

    $active = 1
endif

[TextureOverrideAriaAriaHairTexcoord]
hash = bcde58e5
vb1 = ResourceAriaAriaHairTexcoord

[TextureOverrideAriaAriaHairVertexLimitRaise]
hash = 697c6c6a
override_vertex_count = 5790
override_byte_stride = 40

[TextureOverrideAriaAriaHairIB]<b>
</b>hash = 8a7ae9c2<b>
</b>handling = skip<b>

</b>[TextureOverrideAriaAriaHairA]<b>
</b>hash = 8a7ae9c2<b>
</b>match_first_index = 0<b>
</b>run = CommandListSkinTexture<b>
</b>ib = ResourceAriaAriaHairAIB<b>
</b>ps-t3 = ResourceAriaAriaHairADiffuse<b>
</b>ps-t5 = ResourceAriaAriaHairALightMap<b>
</b>ps-t6 = ResourceAriaAriaHairAMaterialMap<b>
</b>run = CommandList\ZZMI\SetTextures<b>
</b>drawindexed = 8292, 0, 0<b>

</b>[TextureOverrideAriaAriaHairB]<b>
</b>hash = 8a7ae9c2<b>
</b>match_first_index = 8292<b>
</b>run = CommandListSkinTexture<b>
</b>ib = ResourceAriaAriaHairBIB<b>
</b>ps-t3 = ResourceAriaAriaHairADiffuse<b>
</b>ps-t5 = ResourceAriaAriaHairALightMap<b>
</b>ps-t6 = ResourceAriaAriaHairAMaterialMap<b>
</b>run = CommandList\ZZMI\SetTextures<b>
</b>drawindexed = 14913, 0, 0

<em>; Resources -------------------------</em>

[ResourceAriaAriaHairPosition]<b>
</b>type = Buffer<b>
</b>stride = 40<b>
</b>filename = AriaAriaHairPosition.buf<b>

</b>[ResourceAriaAriaHairBlend]<b>
</b>type = Buffer<b>
</b>stride = 32<b>
</b>filename = AriaAriaHairBlend.buf<b>

</b>[ResourceAriaAriaHairTexcoord]<b>
</b>type = Buffer<b>
</b>stride = 20<b>
</b>filename = AriaAriaHairTexcoord.buf<b>

</b>[ResourceAriaAriaHairAIB]<b>
</b>type = Buffer<b>
</b>format = DXGI_FORMAT_R32_UINT<b>
</b>filename = AriaAriaHairA.ib<b>

</b>[ResourceAriaAriaHairBIB]<b>
</b>type = Buffer<b>
</b>format = DXGI_FORMAT_R32_UINT<b>
</b>filename = AriaAriaHairB.ib

[ResourceAriaAriaHairADiffuse]
filename = AriaAriaHairADiffuse.dds

[ResourceAriaAriaHairALightMap]
filename = AriaAriaHairALightMap.dds

[ResourceAriaAriaHairAMaterialMap]
filename = AriaAriaHairAMaterialMap.dds
```

## <b>带按键切换的模板</b>

```toml
[Constants]
global $active0
global persist $swapkey0 = 0

;----------------------------------------------------------

[Present]
post $active0 = 0

;----------------------------------------------------------

[KeySwap0]
condition = $active0 == 1
key = 8
type = cycle
$swapkey0 = 0,1

; e74620b5 -------------------------
[TextureOverridee74620b5Position]
hash = 5dc40184
vb2 = Resourcee74620b5Blend
vb0 = Resourcee74620b5Position
handling = skip
draw = 18458, 0
$active0 = 1

[TextureOverridee74620b5Texcoord]
hash = 4c6b7bda
vb1 = Resourcee74620b5Texcoord

[TextureOverridee74620b5Blend]
hash = aa71e514

[TextureOverridee74620b5_VertexLimitRaise]
hash = 2eb162ef

;----------------------------------------------------------

[TextureOverridee74620b5IB]
hash = e74620b5
handling = skip

[TextureOverridee74620b5Head]
hash = e74620b5
match_first_index = 0
run = CommandListSkinTexture
;Add slot check here to compatible with ZZMI if you manually add more ps slot replace for this IB's match_firt_index.
checktextureoverride = ps-t3 
checktextureoverride = ps-t4 
checktextureoverride = ps-t5 
checktextureoverride = ps-t6 
ib = Resourcee74620b5Index
ps-t3 = Resource_e74620b5-af9d845a-0-DiffuseMap
ps-t4 = Resource_e74620b5-e5e273fe-0-NormalMap
ps-t5 = Resource_e74620b5-75e05cdc-0-LightMap
ps-t6 = Resource_e74620b5-50a0faea-0-HighLightMap
if $swapkey0 == 0
  drawindexed = 31506,0,0
else if $swapkey0 == 1
  drawindexed = 33108,31506,0
endif

;----------------------------------------------------------

[Resourcee74620b5Index]
type = Buffer
format = DXGI_FORMAT_R32_UINT
filename = Buffer/e74620b5Index.buf

;----------------------------------------------------------

[Resourcee74620b5Position]
type = Buffer
stride = 40
filename = Buffer/e74620b5Position.buf

[Resourcee74620b5Texcoord]
type = Buffer
stride = 20
filename = Buffer/e74620b5Texcoord.buf

[Resourcee74620b5Blend]
type = Buffer
stride = 32
filename = Buffer/e74620b5Blend.buf

;----------------------------------------------------------

[Resource_e74620b5-af9d845a-0-DiffuseMap]
filename = Texture/e74620b5-af9d845a-0-DiffuseMap.dds

[Resource_e74620b5-e5e273fe-0-NormalMap]
filename = Texture/e74620b5-e5e273fe-0-NormalMap.dds

[Resource_e74620b5-75e05cdc-0-LightMap]
filename = Texture/e74620b5-75e05cdc-0-LightMap.dds

[Resource_e74620b5-50a0faea-0-HighLightMap]
filename = Texture/e74620b5-50a0faea-0-HighLightMap.dds
```

## <b>框架分析模板</b>

```toml
<b>[CommandListDumpAnalysis]</b>
dump = dump_rt dump_tex dump_cb dump_vb dump_ib buf txt dds
```

<em>; 使用方法：将此文件放入 Mods 文件夹，按 F10 刷新，</em>

<em>; 然后按 F8 执行转储。分析结果在 FrameAnalysis-* 文件夹中。</em>

# <b>常见问题与排错</b>

## <b>问题 1：3DMigoto 注入失败</b>

<b>**现象**</b>：游戏左下角无绿色文字，F1 无反应。

<b>**解决方案**</b>：

- 确认 `d3dx.ini` 中 `[Loader]` 的 `target = ZenlessZoneZero.exe` 已正确设置

- <b>**以管理员身份**</b> 运行 `3DMigoto Loader.exe`

- 检查游戏版本更新后是否需要更新 ZZMI
- 关闭杀毒软件或添加白名单
- 确保 3DMigoto 不在游戏根目录下

## <b>问题 2：贴图不生效（模型显示但无自定义贴图）</b>

<b>**现象**</b>：模型形状变了，但贴图还是游戏原版。

<b>**解决方案**</b>：

1. 在 `[TextureOverride]` 中添加 `run = CommandListSkinTexture`
2. 确认 `[CommandListSkin]` 中包含了所有必要的 `checktextureoverride` 条目
3. 添加 `[ShaderOverride]` 并设置 `run = CommandListSkinTexture`
4. 检查贴图文件格式是否为 `.dds` 且置于正确路径

```toml
[TextureOverrideNicoleSwim1Head]<b>
</b>$active = 1<b>
</b>hash = 5a4c1ef3<b>
</b>match_first_index = 0<b>
</b>run = CommandListSkinTexture<b>
</b>checktextureoverride = ps-t3<b>
</b>checktextureoverride = ps-t4<b>
</b>checktextureoverride = ps-t5<b>
</b>checktextureoverride = ps-t6
ib = Resource83243218cba6a3fbef57d306a2172372
```

## <b>问题 3：模型部分残留（阴影/轮廓还在）</b>

<b>**现象**</b>：主要模型已被替换或移除，但阴影、轮廓或某些部件还在。

<b>**解决方案**</b>：

- 进入狩猎模式，遍历所有 VS/PS，找到负责残留部分的着色器
- 用 `[ShaderOverrideX]` 配合 `handling = skip` 跳过

```toml
[Constants]
global $active = 0

[Present]
post $active = 0

[TextureOverride0YElegA]
hash = 4a178546
$active = 1

[ShaderOverridehideShadow]
hash = f476a5038c6c7bc1
allow_duplicate_hash = true
if $active == 1    
    handling = skip
    ib = null
endif
```

## <b>问题 4：模型变形</b>

<b>**现象**</b>：模型显示但顶点扭曲/拉伸。

<b>**解决方案**</b>：

- 检查 `stride`（步长）值是否与原始一致。VB 的 stride 必须精确匹配
- 重新导出模型数据，确认导出设置正确

## <b>问题 5：Hash 不同导致 Mod 不工作</b>

<b>**现象**</b>：别人能用，我用不了。

<b>**解决方案**</b>：

- 确认显存大小（4GB 分界线）
- 确认服务器版本（国服/国际服）
- 确认游戏版本
- 使用狩猎模式自行获取当前版本的 Hash

## <b>问题 6：游戏更新后 Mod 失效</b>

<b>**现象**</b>：游戏版本更新后 Mod 不工作。

<b>**解决方案**</b>：

- 等待 Mod 作者更新，或自行重新获取 Hash
- 查看 GameBanana 或踩蘑菇社区是否有 修复 工具
- 在 `Mods/` 文件夹名称中添加 `DISABLED` 前缀临时禁用所有 Mod，逐步排查

## <b>问题 7：按 F10 没有反应</b>

<b>**现象**</b>：游戏中按 F10 不能刷新 Mod。

<b>**解决方案**</b>：

- 先按 F6 再按 F10
- 确认 F6 打开 Mod 时左下角有提示
- 某些键盘需要配合 Fn 键

## <b>问题 8：帧率下降</b>

<b>**现象**</b>：使用 Mod 后游戏变卡。

<b>**解决方案**</b>：

- 使用 ForPlaying 版本替代 ForDevelopment
- 减少高分辨率贴图的使用
- 简化 INI 配置，减少不必要的覆盖

---

# <b>附录：快捷键速查表</b>

## <b>通用快捷键</b>

<table>
<colgroup>
<col width="200"/>
<col width="332"/>
</colgroup>
<tbody>
<tr><td><p>按键</p></td><td><p>功能</p></td></tr>
<tr><td><p><code>F1</code></p></td><td><p> 查看按键帮助界面</p></td></tr>
<tr><td><p><code>F6</code></p></td><td><p>开启/关闭所有 Mod</p></td></tr>
<tr><td><p><code>F10</code></p></td><td><p>刷新 Mod 列表（热加载 INI）</p></td></tr>
<tr><td><p><code>Ctrl+F8</code></p></td><td><p>重新加载着色器修</p></td></tr>
<tr><td><p><code>Ctrl+F1</code></p></td><td><p>重新加载配置文件</p></td></tr>
<tr><td><p><code>0</code></p></td><td><p> 进入/退出狩猎模式（开发版</p></td></tr>
</tbody>
</table>

## <b>狩猎模式快捷键</b>

<table>
<colgroup>
<col width="200"/>
<col width="312"/>
</colgroup>
<tbody>
<tr><td><p>按键</p></td><td><p>功能</p></td></tr>
<tr><td><p>小键盘 <code>/</code></p></td><td><p>向前循环 VB （Vertex Buffer）</p></td></tr>
<tr><td><p>小键盘 <code>*</code></p></td><td><p>向后循环 VB （Vertex Buffer）</p></td></tr>
<tr><td><p>小键盘 <code>7</code></p></td><td><p>向前循环 IB （Index Buffer）</p></td></tr>
<tr><td><p>小键盘 <code>8</code></p></td><td><p>向后循环 IB （Index Buffer</p></td></tr>
<tr><td><p>小键盘 <code>4</code></p></td><td><p>向前循环 VS （Vertex Shader</p></td></tr>
<tr><td><p>小键盘 <code>5</code></p></td><td><p>向前循环 VS （Vertex Shader）</p></td></tr>
<tr><td><p>小键盘 <code>1</code></p></td><td><p>向前循环 PS （Pixel Shader</p></td></tr>
<tr><td><p>小键盘 <code>2</code></p></td><td><p>向后循环 PS （Pixel Shader）</p></td></tr>
<tr><td><p>小键盘 <code>9</code></p></td><td><p>复制当前 IB Hash</p></td></tr>
<tr><td><p>小键盘 <code>6</code></p></td><td><p>复制当前 VS Hash</p></td></tr>
<tr><td><p>小键盘 <code>3</code></p></td><td><p>复制当前 PS Hash</p></td></tr>
<tr><td><p>小键盘 <code>-</code></p></td><td><p>标记当前资源 </p></td></tr>
</tbody>
</table>

&gt; <b>**注意**</b>：部分笔记本键盘没有独立小键盘，可能需要外接键盘或修改按键配置。

---

# <b>参考链接</b>

- [3DMigoto INI File Documentation （LeoTorrez）](https://leotorrez.github.io/modding/docs/) — 官方 INI 文档
- [Zelbert 的 3DMigoto 笔记 （语雀）](https://www.yuque.com/zelbert/egu6ei/otf4uvvo3slg63g9) — 中文社区笔记
- [小林小猪： 3DMigoto INI 文件解析](https://xiaolinxiaozhu.github.io/2024/10/26/3dmigoto%20ini%20%E6%96%87%E4%BB%B6%E8%A7%A3%E6%9E%90/) — 中文博客
- [SilentNightSound/GI-Model-Importer （GitHub）](https://github.com/SilentNightSound/GI-Model-Importer) — GIMI 官方仓库
- [3DMigoto Configuration System （DeepWiki）](https://deepwiki.com/bo3b/3Dmigoto/2.6-configuration-system-(d3dx.ini)) — 配置系统深度解析
- [ZZZ 绝区零 GIMI 安装教程 （Bilibili）](https://www.bilibili.com/opus/955753570527870999) — 视频教程
- [绝区零 GIMI 模型导入器 （游民星空）](https://patch.ali213.net/showpatch/255585.html) — 下载与安装指南
- [绝区零 Mod 社区 （踩蘑菇）](https://www.caimogu.org/post/15419.html) — Mod 下载与交流

---

&gt; <b>**免责声明**</b>：使用 Mod 修改游戏客户端存在账号封禁风险，请自行评估风险。本指南仅用于技术学习与交流，请勿用于任何违规用途。

