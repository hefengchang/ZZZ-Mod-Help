// scripts/find-new-docs.mjs
// 查找飞书新增但未添加到侧边栏的文档
// 运行: node scripts/find-new-docs.mjs

import { readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// 读取 docs.json
const docsJsonPath = resolve(root, 'docs', 'docs.json')
if (!existsSync(docsJsonPath)) {
  console.log('❌ docs/docs.json 不存在，请先运行 npm run sync')
  process.exit(1)
}

const docs = JSON.parse(readFileSync(docsJsonPath, 'utf-8'))

// 收集所有文档节点（平铺）
function flattenDocs(nodes, parent = '') {
  let result = []
  for (const node of nodes) {
    const slug = node.slug || ''
    result.push({
      title: node.title,
      filename: node.filename,
      slug: slug.replace(/\\/g, '/'),
      depth: node.depth,
      parentTitle: parent,
    })
    if (node.children && node.children.length > 0) {
      result = result.concat(flattenDocs(node.children, node.title))
    }
  }
  return result
}

const allDocs = flattenDocs(docs)

console.log('\n📋 所有文档列表：')
console.log('================\n')

for (const doc of allDocs) {
  // 跳过根节点
  if (doc.depth === 0) continue

  const indent = '  '.repeat(doc.depth - 1)
  const path = doc.slug.replace(/\.md$/, '')
  console.log(`${indent}${doc.title}`)
  console.log(`${indent}  link: /docs/${path}`)
  console.log('')
}

console.log('\n📌 使用方法：')
console.log('复制上面的 link 路径，粘贴到 .vitepress/config.mts 的 sidebar 对应位置即可。')
console.log('格式：{ text: \'文档标题\', link: \'/docs/路径\' },')
