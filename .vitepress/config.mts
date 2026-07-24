import { defineConfig } from 'vitepress'
import sidebarConfig from './sidebar.mts'

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
    sidebar: sidebarConfig,

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
