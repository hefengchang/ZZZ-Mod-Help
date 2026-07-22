import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 可以在这里插入自定义插槽内容
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 可以在这里注册全局组件
  },
}
