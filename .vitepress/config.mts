import { defineConfig } from 'vitepress'
import sidebarZh from './sidebar.mts'

const sidebarEn = [
  {
    text: '📖 Quick Navigation',
    items: [
      { text: '🏠 Home', link: '/en/' },
      { text: '📚 All Documents', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf' },
    ]
  },
  {
    text: '❓ ZZZ Mod FAQ',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy' },
      { text: '🛠️ Basic Troubleshooting', collapsed: true, items: [
        { text: 'Game Settings', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/AndqwzHf4iQ0WwkhSCIcEIMNnec' },
        { text: 'Troubleshooting Guide', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/Q2p5wjNTUiTP6vkWi26cbshJnze' },
        { text: 'Essential Tools', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/LowJw9ZiKijKXIkeCq7cyt4onxf' },
        { text: 'Fix Tool Issues', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/Yv45wzUfTijAwMkldP0c7lmFnLe' },
      ]},
      { text: '🔧 3dmigoto Loader', collapsed: true, items: [
        { text: 'Loader Issues', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/EPpFwcOYLiewj0k3l23cHjySnKl' },
        { text: 'Disable Red Text', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/EPpFwcOYLiewj0k3l23cHjySnKl/QEOWwyywYi9rLSk4mAzcPTJsnLf' },
        { text: 'Mod Not Working', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/EPpFwcOYLiewj0k3l23cHjySnKl/QM9XwrIPWiyA9fk9JDFc1kdLn0b' },
        { text: 'Game Abnormal', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/EPpFwcOYLiewj0k3l23cHjySnKl/VoSGwe1OcikxrJkJPoBcSyIqnTh' },
      ]},
      { text: '🎨 Texture & Model', collapsed: true, items: [
        { text: 'Overview', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX' },
        { text: 'Hair Glow Error', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/StCLwEIPviv3Drk6N4Mc2gjFnRb' },
        { text: 'No-Mod Texture Error', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/XEGvwNId7ikoEhkmk7Mczwjbnze' },
        { text: 'Dark When Looking Up', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/NeHVwukVKiaQrakKmYcctQcmnQb' },
        { text: 'Transparent Mod Dark', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/SsLUwk4JRiiQlPkpu4kcg336nYc' },
        { text: 'Face/Weapon Error', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/EjoEwOHvpivSzTkBhpXc2qs1nUz' },
        { text: 'LOD & Slot Replace', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/NLPEwE2udiORazkwflpc1qWXnlb' },
        { text: 'Shadow Error', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/RDQLwakuhiXD9ykOGYwcasH4nVe' },
        { text: 'Floor Missing', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/Uo2ZwDLktittKMkhVglc0PP5nFd' },
        { text: 'VHS Tapes Missing', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/OF3jwza08iqAb6kuiKccVHjPnmc' },
        { text: 'Black Eyes', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/UmggwTIMTisDnTkWTcLcMcTwnuf' },
        { text: 'Yeh Shiguang Glitch', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/K7EJwHMjJiJMMckZK5Ac8e7AndX/DQORwGBY6isTBFkUsqwcif6hnvg' },
      ]},
      { text: '✨ RabbitFX', collapsed: true, items: [
        { text: 'Overview', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/CCDZwL1p5iVyRHkgmdAclUX0n1e' },
        { text: 'NPC Face Dark', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/CCDZwL1p5iVyRHkgmdAclUX0n1e/RhqBwxnq3i2N0HkLwmAcJyJInlg' },
        { text: 'Mod Crashes', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/CCDZwL1p5iVyRHkgmdAclUX0n1e/XWxywlpoEi5XGgkYyoRcoDmsnph' },
        { text: 'Glow Brightness', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/CCDZwL1p5iVyRHkgmdAclUX0n1e/K4cPwfG3sitbbSksS4rcr7FCnwb' },
        { text: 'Abnormal Glow', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/CCDZwL1p5iVyRHkgmdAclUX0n1e/Ph4fwJ6CRiUm48kIuWpcwZ8NnIe' },
        { text: 'RabbitFX 6.0 No Glow', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/CCDZwL1p5iVyRHkgmdAclUX0n1e/EHz8wk8mHiogYKkCGikcaDgvnUg' },
      ]},
      { text: '🪟 Glass/Effect', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/TMC4w5Zp5iGM7ckExuGcjUHenec' },
      { text: '⚙️ INI Config', collapsed: true, items: [
        { text: 'Overview', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/AbbZwebuBiwVyVkH9AbcFCo7nBe' },
        { text: 'Switch Mod Form', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/AbbZwebuBiwVyVkH9AbcFCo7nBe/FTkjwxQpsisc22kasPCcQHSvnJe' },
        { text: 'Hide Items', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/AbbZwebuBiwVyVkH9AbcFCo7nBe/EylHwR7Wxi0Z4BkFx93cdsG8npg' },
        { text: 'Panel Hotkey', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/AbbZwebuBiwVyVkH9AbcFCo7nBe/O3BwwPqf0iNZask4W6YcnM0jnBd' },
        { text: 'BG Hotkey Issue', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/AbbZwebuBiwVyVkH9AbcFCo7nBe/Uw1iwndleiL4l6k6VWDc3AnGnAc' },
      ]},
      { text: '❌ XXMI', collapsed: true, items: [
        { text: 'Overview', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/XVV9wT4HpifAhAks5YIc7HDenog' },
        { text: 'Update Issues', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/XVV9wT4HpifAhAks5YIc7HDenog/QZEUwm29ziUg1lklef0cYOu6nTg' },
        { text: 'Not Loading', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/XVV9wT4HpifAhAks5YIc7HDenog/EvJ0wylGFiFKB1kmLWZcXuZmnvf' },
        { text: 'Slow Download', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/XVV9wT4HpifAhAks5YIc7HDenog/ZpF7w0VHqiNC7pkMQvbcgRaanth' },
        { text: 'Steam Mods', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/XVV9wT4HpifAhAks5YIc7HDenog/OKFSwpfRBiFykfkREsYcChivnTg' },
      ]},
      { text: '💥 Crash & Lag', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/UF4lwZOktirrmbkEpubcKKSInQh' },
      { text: '⌨️ Hotkeys', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy/M9ytwWsXziywL3kpaoGc9JkKnlg' },
    ]
  },
  { text: '📘 Mod Related', collapsed: true, items: [
    { text: 'Tutorials', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/VqhswFYobiaorqkaL0FcbV9wn3b' },
    { text: 'Tools', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/WFcVwhuERitAikkoHrZcGCYrngg' },
    { text: 'Download Sites', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/KeT1wllfliwwAckUjvTcjyZenwd' },
  ]},
  { text: '📄 3Dmigoto', collapsed: true, items: [
    { text: 'File Reference', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/VcyDwcktsictHGkUnEcc3MrqnOc' },
    { text: 'd3dx.ini', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/VcyDwcktsictHGkUnEcc3MrqnOc/Yqo6wj6M7itfakkKiUfcnyoRnqh' },
    { text: 'd3dx_user.ini', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/VcyDwcktsictHGkUnEcc3MrqnOc/LtLKwkS3uia9llkbJVgcl3v5nkf' },
  ]},
]

export default defineConfig({
  srcDir: 'docs',
  base: '/ZZZ-Mod-Help/',
  title: '绝区零 Mod 指南',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,

  locales: {
    '/en/': {
      lang: 'en',
      label: 'English',
    },
  },

  themeConfig: {
    logo: '/logo.png',
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    nav: [
      { text: '🏠 首页 / Home', link: '/' },
      { text: '📚 文档 / Docs', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf' },
      { text: '❓ FAQ', link: '/docs/C4UUwlc9giThYmkh1qJcQWoKnYf/AnovwsEzbirYjUk0ilPcq2U4ncy' },
      {
        text: '🌐 中文 / English',
        items: [
          { text: '中文', link: '/' },
          { text: 'English', link: '/en/' },
        ],
      },
    ],
    sidebar: sidebarZh,
    editLink: { pattern: 'https://github.com/hefengchang/ZZZ-Mod-Help/edit/main/docs/:path', text: '在 GitHub 上编辑此页' },
    footer: { message: '基于 VitePress 构建 | 内容仅供参考', copyright: 'Copyright © 2024-2025 绝区零 Mod 指南' },
    outline: { level: [2, 3], label: '本页内容' },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切换至浅色模式',
    darkModeSwitchTitle: '切换至深色模式',
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdated: { text: '最后更新于' },
    search: { provider: 'local', options: { translations: { button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' }, modal: { noResultsText: '未找到相关结果', resetButtonTitle: '清除搜索条件', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } } } } },
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#e84c22' }],
    ['meta', { name: 'application-name', content: '绝区零Mod帮助文档' }],
    ['meta', { property: 'og:title', content: '绝区零 Mod 帮助文档' }],
    ['meta', { property: 'og:description', content: '绝区零 Mod 安装、配置、故障排除与制作教程' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  cacheDir: '.vitepress/cache',
  outDir: '.vitepress/dist',
})
