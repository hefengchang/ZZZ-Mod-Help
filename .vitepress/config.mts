import { defineConfig } from 'vitepress'
import sidebarZh from './sidebar.mts'

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
    socialLinks: [{ icon: 'github', link: 'https://github.com/hefengchang?tab=repositories' }],
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
    ['link', { rel: 'icon', href: '/ZZZ-Mod-Help/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#e84c22' }],
    ['meta', { name: 'application-name', content: '绝区零Mod帮助文档' }],
    ['meta', { property: 'og:title', content: '绝区零 Mod 帮助文档' }],
    ['meta', { property: 'og:description', content: '绝区零 Mod 安装、配置、故障排除与制作教程' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  cacheDir: '.vitepress/cache',
  outDir: '.vitepress/dist',
})
