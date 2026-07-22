import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 使用 docs/ 作为源目录（feishu-pages 输出目录）
  srcDir: 'docs',

  // 基础 URL（GitHub Pages 部署到子路径）
  base: '/ZZZ-Mod-Help/',

  // 站点元信息
  title: '绝区零 Mod 帮助文档',
  description: '绝区零 Mod 安装、配置、故障排除与制作教程',
  lang: 'zh-CN',

  // 美化 URL（去掉 .html 后缀）
  cleanUrls: true,

  // 显示最后更新时间
  lastUpdated: true,

  // 忽略死链接（feishu-pages 导出可能包含无法解析的路径）
  ignoreDeadLinks: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // 网站 logo（可替换为实际图标）
    logo: '/logo.png',

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '帮助文档', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf' },
      { text: '常见问题', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy' },
    ],

    // 侧边栏 - 基于 SUMMARY.md 文档树结构
    sidebar: [
      {
        text: '📖 快速导航',
        items: [
          { text: '🏠 首页', link: '/' },
          { text: '📚 全部文档', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf' },
        ]
      },
      {
        text: '❓ 绝区零 Mod 常见问题',
        collapsed: false,
        items: [
          { text: '概述', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy' },
          {
            text: '🛠️ 基础问题排查',
            collapsed: true,
            items: [
              { text: '游戏设置问题（优先选择）', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/AndqwzHf4iQ0WwkhSCIcEIMNnec' },
              { text: '当 Mod 出现问题时的解决思路', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/Q2p5wjNTUiTP6vkWi26cbshJnze' },
              { text: '必备工具', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/LowJw9ZiKijKXIkeCq7cyt4onxf' },
              { text: '用了修复工具反而修坏了', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/Yv45wzUfTijAwMkldP0c7lmFnLe' },
            ]
          },
          {
            text: '🔧 3dmigoto 加载器问题',
            collapsed: true,
            items: [
              { text: '3dmigoto 加载器相关问题', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/EPpFwcOYLiewj0k3l23cHjySnKl' },
              { text: '如何关闭红字报错', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/EPpFwcOYLiewj0k3l23cHjySnKl/QEOWwyywYi9rLSk4mAzcPTJsnLf' },
              { text: 'Mod 或贴图不生效', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/EPpFwcOYLiewj0k3l23cHjySnKl/QM9XwrIPWiyA9fk9JDFc1kdLn0b' },
              { text: '游戏异常', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/EPpFwcOYLiewj0k3l23cHjySnKl/VoSGwe1OcikxrJkJPoBcSyIqnTh' },
            ]
          },
          {
            text: '🎨 贴图与模型问题',
            collapsed: true,
            items: [
              { text: '贴图与模型相关问题', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX' },
              { text: '角色头发贴图异常发光或错误', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/StCLwEIPviv3Drk6N4Mc2gjFnRb' },
              { text: '角色没有装 mod，但贴图错误', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/XEGvwNId7ikoEhkmk7Mczwjbnze' },
              { text: '仰视靠近视角变暗', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/NeHVwukVKiaQrakKmYcctQcmnQb' },
              { text: '透明类 mod 仰视靠近变暗', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/SsLUwk4JRiiQlPkpu4kcg336nYc' },
              { text: '脸部纹理或武器纹理异常', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/EjoEwOHvpivSzTkBhpXc2qs1nUz' },
              { text: '高低显与槽位替换', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/NLPEwE2udiORazkwflpc1qWXnlb' },
              { text: '角色选择界面阴影异常', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/RDQLwakuhiXD9ykOGYwcasH4nVe' },
              { text: '大地图的地板等模型消失', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/Uo2ZwDLktittKMkhVglc0PP5nFd' },
              { text: '录像店的所有录像带消失', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/OF3jwza08iqAb6kuiKccVHjPnmc' },
              { text: '所有角色的眼睛变成黑色', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/UmggwTIMTisDnTkWTcLcMcTwnuf' },
            ]
          },
          {
            text: '✨ RabbitFX 问题',
            collapsed: true,
            items: [
              { text: 'RabbitFX 相关问题', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/CCDZwL1p5iVyRHkgmdAclUX0n1e' },
              { text: 'NPC 靠近时脸部变黑', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/CCDZwL1p5iVyRHkgmdAclUX0n1e/RhqBwxnq3i2N0HkLwmAcJyJInlg' },
              { text: '游戏切到某个 mod 时会崩溃', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/CCDZwL1p5iVyRHkgmdAclUX0n1e/XWxywlpoEi5XGgkYyoRcoDmsnph' },
              { text: '发光太亮或太暗', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/CCDZwL1p5iVyRHkgmdAclUX0n1e/K4cPwfG3sitbbSksS4rcr7FCnwb' },
              { text: '某些部位异常发光', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/CCDZwL1p5iVyRHkgmdAclUX0n1e/Ph4fwJ6CRiUm48kIuWpcwZ8NnIe' },
              { text: 'RabbitFX 6.0 之后发光失效', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/CCDZwL1p5iVyRHkgmdAclUX0n1e/EHz8wk8mHiogYKkCGikcaDgvnUg' },
            ]
          },
          {
            text: '⚙️ ini 配置问题',
            collapsed: true,
            items: [
              { text: '玻璃颜色异常，特效异常', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/TMC4w5Zp5iGM7ckExuGcjUHenec' },
              { text: 'ini 文件配置相关问题', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/AbbZwebuBiwVyVkH9AbcFCo7nBe' },
              { text: '切换类 MOD 固定为特定形态', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/AbbZwebuBiwVyVkH9AbcFCo7nBe/FTkjwxQpsisc22kasPCcQHSvnJe' },
              { text: '隐藏物品', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/AbbZwebuBiwVyVkH9AbcFCo7nBe/EylHwR7Wxi0Z4BkFx93cdsG8npg' },
              { text: 'Mod 的面板按键呼不出来', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/AbbZwebuBiwVyVkH9AbcFCo7nBe/O3BwwPqf0iNZask4W6YcnM0jnBd' },
              { text: 'Mod 切换按键不在前台仍然切换', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/AbbZwebuBiwVyVkH9AbcFCo7nBe/Uw1iwndleiL4l6k6VWDc3AnGnAc' },
            ]
          },
          {
            text: '❌ XXMI 问题',
            collapsed: true,
            items: [
              { text: 'XXMI 问题', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/XVV9wT4HpifAhAks5YIc7HDenog' },
              { text: '更新导致异常', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/XVV9wT4HpifAhAks5YIc7HDenog/QZEUwm29ziUg1lklef0cYOu6nTg' },
              { text: '启动后无法加载 mod', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/XVV9wT4HpifAhAks5YIc7HDenog/EvJ0wylGFiFKB1kmLWZcXuZmnvf' },
              { text: '更新时下载太慢或报错', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/XVV9wT4HpifAhAks5YIc7HDenog/ZpF7w0VHqiNC7pkMQvbcgRaanth' },
              { text: '如何在 Steam 中运行 mod', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/XVV9wT4HpifAhAks5YIc7HDenog/OKFSwpfRBiFykfkREsYcChivnTg' },
            ]
          },
          { text: '💥 游戏或角色崩溃卡顿', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/UF4lwZOktirrmbkEpubcKKSInQh' },
          { text: '⌨️ 快捷键命令说明', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/M9ytwWsXziywL3kpaoGc9JkKnlg' },
        ]
      },
      {
        text: '📘 Mod 相关网站',
        collapsed: true,
        items: [
          { text: '教程', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/VqhswFYobiaorqkaL0FcbV9wn3b' },
          { text: '制作软件', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/WFcVwhuERitAikkoHrZcGCYrngg' },
          { text: '绝区零 Mod 获取网站', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/KeT1wllfliwwAckUjvTcjyZenwd' },
        ]
      },
      {
        text: '📄 3Dmigoto 文件注解',
        collapsed: true,
        items: [
          { text: '3Dmigoto 各文件的中文注解', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/VcyDwcktsictHGkUnEcc3MrqnOc' },
          { text: 'd3dx.ini', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/VcyDwcktsictHGkUnEcc3MrqnOc/Yqo6wj6M7itfakkKiUfcnyoRnqh' },
          { text: 'd3dx_user.ini', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/VcyDwcktsictHGkUnEcc3MrqnOc/LtLKwkS3uia9llkbJVgcl3v5nkf' },
        ]
      },
      ],

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/hefengchang/ZZZ-Mod-Help/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    // 页脚
    footer: {
      message: '基于 VitePress 构建 | 内容仅供参考',
      copyright: 'Copyright © 2024-2025 绝区零 Mod 帮助文档',
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    // 大纲（右侧目录）
    outline: {
      level: [2, 3],
      label: '本页内容',
    },

    // 返回顶部
    returnToTopLabel: '返回顶部',

    // 搜索（本地搜索）
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除搜索条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    // 上次更新时间文本
    lastUpdated: {
      text: '最后更新于',
    },

    // 文档底部"上一页/下一页"文本
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // 深色模式切换
    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切换至浅色模式',
    darkModeSwitchTitle: '切换至深色模式',
    sidebarMenuLabel: '菜单',
  },

  // 自定义 head 标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#e84c22' }],
    ['meta', { name: 'application-name', content: '绝区零Mod帮助文档' }],
    ['meta', { property: 'og:title', content: '绝区零 Mod 帮助文档' }],
    ['meta', { property: 'og:description', content: '绝区零 Mod 安装、配置、故障排除与制作教程' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  // 缓存目录
  cacheDir: '.vitepress/cache',

  // 构建输出目录
  outDir: '.vitepress/dist',
})
