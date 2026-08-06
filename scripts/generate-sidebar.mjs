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

// 关键词规则：新文档根据标题关键词自动匹配图标
// 规则按优先级排列，先匹配先生效
const KEYWORD_RULES = [
  // 角色与身体部位
  { keywords: ['头发', '发丝', '发型', 'hair'], icon: '💇' },
  { keywords: ['眼睛', '瞳孔', '眼珠', 'eye'], icon: '👀' },
  { keywords: ['脸部', '脸', '面部', 'face'], icon: '👤' },
  { keywords: ['嘴巴', '嘴唇', 'mouth'], icon: '👄' },
  { keywords: ['手部', '手掌', '手指', 'hand'], icon: '✋' },
  { keywords: ['腿部', '腿', 'leg'], icon: '🦵' },
  { keywords: ['身体', '身材', 'body'], icon: '🧍' },
  { keywords: ['服装', '衣服', '皮肤', '服装', 'outfit', 'costume', 'skin'], icon: '👗' },
  { keywords: ['帽子', '头饰', 'hat'], icon: '🎩' },
  { keywords: ['眼镜', '墨镜', 'glasses'], icon: '👓' },
  { keywords: ['面具', '面罩', 'mask'], icon: '🎭' },
  { keywords: ['邦布', '机甲', '机器人', 'robot', 'mech'], icon: '🤖' },
  { keywords: ['npc', '怪物', '敌人', 'enemy'], icon: '👾' },

  // 游戏表现与画面
  { keywords: ['贴图', '纹理', '材质', 'texture'], icon: '🖼️' },
  { keywords: ['模型', 'mesh', '建模'], icon: '🧊' },
  { keywords: ['发光', '光效', 'glow', 'emission', '灯效'], icon: '✨' },
  { keywords: ['阴影', '影子', 'shadow'], icon: '🌑' },
  { keywords: ['变暗', '变黑', '黑色', 'dark', 'black'], icon: '🌚' },
  { keywords: ['透明', '半透明', 'transparent'], icon: '🔮' },
  { keywords: ['玻璃', 'glasses', 'glass'], icon: '🪟' },
  { keywords: ['颜色', '色差', '变色', 'color'], icon: '🎨' },
  { keywords: ['特效', '效果', 'effect'], icon: '🪄' },
  { keywords: ['画面', '显示', '屏幕', '屏', 'display', 'screen'], icon: '🖥️' },
  { keywords: ['镜头', '视角', '视角', 'camera', 'view'], icon: '📷' },
  { keywords: ['截图', 'screenshot'], icon: '📸' },

  // 问题类型
  { keywords: ['崩溃', '闪退', 'crash'], icon: '💥' },
  { keywords: ['卡顿', '掉帧', 'lag', 'fps', '帧率'], icon: '🐢' },
  { keywords: ['丢失', '消失', '不见', 'missing'], icon: '🗑️' },
  { keywords: ['异常', '错误', '报错', '红字', 'error'], icon: '⚠️' },
  { keywords: ['失效', '不生效', '无效', 'broken'], icon: '🚫' },
  { keywords: ['冲突', 'conflict'], icon: '⚡' },
  { keywords: ['闪屏', '花屏', '黑屏', '白屏'], icon: '🖥️' },
  { keywords: ['延迟', 'ping', '网络'], icon: '📶' },

  // 武器与装备
  { keywords: ['武器', '专武', 'weapon'], icon: '⚔️' },
  { keywords: ['装备', 'equipment'], icon: '🛡️' },
  { keywords: ['道具', '物品', 'item'], icon: '🎒' },

  // Mod 相关功能
  { keywords: ['槽位', 'slot', '高低显', 'lod', 'lod'], icon: '📊' },
  { keywords: ['ini', '配置', 'config', '参数'], icon: '⚙️' },
  { keywords: ['按键', '快捷键', '热键', 'hotkey', 'key'], icon: '⌨️' },
  { keywords: ['切换', 'switch', 'toggle'], icon: '🔀' },
  { keywords: ['隐藏', 'hide'], icon: '👻' },
  { keywords: ['更新', '升级', 'update'], icon: '🔄' },
  { keywords: ['下载', 'download'], icon: '📥' },
  { keywords: ['安装', 'install'], icon: '📖' },
  { keywords: ['启动', '加载', '载入', 'load', 'start'], icon: '🚀' },
  { keywords: ['steam', '蒸汽'], icon: '🎮' },
  { keywords: ['存档', 'save', '备份', 'backup'], icon: '💾' },
  { keywords: ['插件', 'plugin', '扩展'], icon: '🧩' },
  { keywords: ['驱动', 'driver'], icon: '🔌' },
  { keywords: ['汉化', '翻译', '中文', 'translate'], icon: '🌏' },

  // 资源与教程分类
  { keywords: ['教程', 'tutorial', '教学'], icon: '📘' },
  { keywords: ['软件', '工具', 'tool'], icon: '🛠️' },
  { keywords: ['网站', '获取', '下载地址', 'site', '网址'], icon: '🔗' },
  { keywords: ['d3dx', '3dmigoto', '注解', '解析'], icon: '📄' },
  { keywords: ['文件', '目录', '文件夹', 'file', 'folder'], icon: '📁' },
  { keywords: ['问题', '常见问题', 'faq', '排查'], icon: '❓' },
  { keywords: ['攻略', '心得', '经验', 'guide'], icon: '💡' },
  { keywords: ['制作', '修改', '改造', 'create', 'modify'], icon: '🛠️' },
  { keywords: ['rabbitfx'], icon: '✨' },
  { keywords: ['xxmi', 'zzmi'], icon: '🚀' },
]

function getIcon(title) {
  const trimmed = title.trim()
  // 先查精确匹配
  if (ICON_MAP[trimmed]) return ICON_MAP[trimmed]

  // 再按关键词匹配
  const lower = trimmed.toLowerCase()
  for (const rule of KEYWORD_RULES) {
    if (rule.keywords.some(kw => lower.includes(kw.toLowerCase()))) {
      return rule.icon
    }
  }

  // 默认图标
  return '📄'
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
