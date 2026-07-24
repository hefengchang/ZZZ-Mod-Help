// scripts/generate-sidebar.mjs
// 从 docs.json 自动生成侧边栏配置
// 运行: node scripts/generate-sidebar.mjs

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const docsJsonPath = resolve(root, 'docs', 'docs.json')
const outputPath = resolve(root, '.vitepress', 'sidebar.mts')

// 节点头部图标映射
const ICON_MAP = {
  '绝区零mod常见问题': '❓',
  '游戏设置问题（优先选择）': '🛠️',
  '当Mod出现问题时的解决思路': '🧠',
  '必备工具': '🔧',
  '用了修复工具反而修坏了': '⚠️',
  '3dmigoto加载器相关问题': '🔧',
  '如何关闭红字报错': '🔕',
  'mod或贴图不生效': '🔍',
  '游戏异常': '💥',
  '贴图与模型相关问题': '🎨',
  '角色头发贴图异常发光或错误': '💇',
  '角色没有装mod，但贴图错误': '🖼️',
  '仰视靠近视角变暗': '🌑',
  '透明类mod仰视靠近变暗': '🔮',
  '脸部纹理或武器纹理异常': '👤',
  '高低显与槽位替换': '📊',
  '角色选择界面阴影异常': '👁️',
  '大地图的地板等模型消失': '🗺️',
  '录像店的所有录像带消失': '📼',
  '所有角色的眼睛变成黑色': '👀',
  '叶瞬光在某个视角会导致异常': '👁️',
  'RabbitFX相关问题': '✨',
  'npc靠近时脸部变黑，出现异常': '👺',
  '游戏切到某个mod时会崩溃': '💥',
  '发光太亮或太暗': '☀️',
  '某些部位异常发光': '✨',
  'RabbitFX6.0版本之后，发光失效': '❌',
  '玻璃颜色异常，特效异常': '🪟',
  'ini文件配置相关问题': '⚙️',
  '切换类MOD固定为特定形态': '🔄',
  '隐藏物品': '👻',
  'Mod的面板按键呼不出来': '⌨️',
  'Mod切换按键不在前台仍然切换': '🔀',
  'XXMI问题': '❌',
  '更新导致异常': '🔄',
  '启动后无法加载mod': '🚫',
  '更新时下载太慢或报错': '🐢',
  '如何使用在Steam中运行mod': '🎮',
  '游戏或角色崩溃卡顿相关问题': '💥',
  '快捷键命令说明': '⌨️',
  'mod相关教程': '📘',
  'mod制作相关软件': '🛠️',
  '绝区零mod获取网站': '🔗',
  '绝区零 XXMI  安装指南': '📖',
  '3Dmigoto各文件的中文注解': '📄',
  'd3dx.ini': '📝',
  'd3dx_user.ini': '📝',
}

function getIcon(title) {
  return ICON_MAP[title.trim()] || '📄'
}

function slugToLink(slug) {
  return '/docs/' + slug.replace(/\\/g, '/').replace(/\.md$/, '')
}

function buildItems(nodes, depth) {
  const items = []
  for (const node of nodes) {
    if (!node.filename) continue

    const link = slugToLink(node.filename)
    const icon = getIcon(node.title)
    const text = icon ? `${icon} ${node.title.trim()}` : node.title.trim()

    if (node.children && node.children.length > 0) {
      const children = buildItems(node.children, depth + 1)
      if (children.length > 0) {
        items.push({
          text,
          collapsed: depth >= 1,
          items: [
            { text: `📌 ${node.title.trim()}`, link },
            ...children,
          ]
        })
      } else {
        items.push({ text, link })
      }
    } else {
      items.push({ text, link })
    }
  }
  return items
}

function generateSidebar() {
  if (!existsSync(docsJsonPath)) {
    console.error('❌ docs/docs.json 不存在，请先运行 npm run sync')
    process.exit(1)
  }

  const docs = JSON.parse(readFileSync(docsJsonPath, 'utf-8'))
  const rootNode = docs[0]
  if (!rootNode || !rootNode.children) {
    console.error('❌ docs.json 格式不正确')
    process.exit(1)
  }

  const sections = buildItems(rootNode.children, 0)

  // 生成源码
  let code = `// 自动生成的侧边栏配置 - 由 scripts/generate-sidebar.mjs 生成
// 运行 node scripts/generate-sidebar.mjs 更新此文件
// 如需自定义分组，请手动编辑此文件

import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarItem[] = ${JSON.stringify(sections, null, 2)}

export default sidebar
`

  // 美化输出（去掉 JSON 字符串中的引号转义）
  code = code.replace(/"([^"]+)":/g, '$1:')

  writeFileSync(outputPath, code, 'utf-8')
  console.log(`✅ 侧边栏已生成: ${outputPath}`)
}

generateSidebar()
