// scripts/post-sync.mjs
// =============================================
// 飞书文档同步后处理脚本
// 由 npm run sync 调用
// =============================================

import { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync, readdirSync } from 'fs'
import { resolve, dirname, sep, extname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const docsDir = resolve(root, 'docs')
const docsDocsDir = resolve(docsDir, 'docs')
const publicAssetsDir = resolve(docsDir, 'public', 'assets')
const exportedAssetsDir = resolve(docsDocsDir, 'assets')

let fixCount = 0

// =============================================
// 步骤 1: 修复 Markdown 中的反斜杠路径
// =============================================
console.log('🔧 [1/3] 修复反斜杠路径...')

function walkMdFiles(dir) {
  if (!existsSync(dir)) return
  const entries = readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = resolve(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.cache') {
        walkMdFiles(fullPath)
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      processMdFile(fullPath)
    }
  }
}

function processMdFile(filePath) {
  let content = readFileSync(filePath, 'utf-8')

  // 修复 []() 链接中的反斜杠
  let newContent = content.replace(
    /(\]\([^)]*?)\\([^)]*?\))/g,
    (match, prefix, suffix) => prefix + '/' + suffix
  )

  if (newContent !== content) {
    writeFileSync(filePath, newContent, 'utf-8')
    fixCount++
  }
}

walkMdFiles(docsDocsDir)
console.log(`   ✅ 已修复 ${fixCount} 个文件`)

// =============================================
// 步骤 2: 修复代码块格式
// =============================================
console.log('📝 [2/3] 修复代码块格式...')

function fixCodeBlock(fileRelPath, titlePattern) {
  const filePath = resolve(docsDocsDir, ...fileRelPath.split(/[\\/]/))
  if (!existsSync(filePath)) {
    console.log(`   ⏭️  ${fileRelPath} 不存在，跳过`)
    return
  }

  let content = readFileSync(filePath, 'utf-8')

  // 只在还没有代码围栏时修复
  if (content.includes('```ini')) {
    console.log(`   ⏭️  ${titlePattern} 已包含代码块，跳过`)
    return
  }

  // 提取 frontmatter
  const frontmatterMatch = content.match(/^---[\s\S]*?---/)
  if (!frontmatterMatch) {
    console.log(`   ⚠️  ${fileRelPath} 没有 frontmatter，跳过`)
    return
  }

  const frontmatter = frontmatterMatch[0]
  let body = content.slice(frontmatter.length).trim()

  // 移除 markdown 标题
  body = body.replace(new RegExp(`^#\\s*${escapeRegex(titlePattern)}\\s*`, 'm'), '')
  body = body.trim()

  // 压缩连续空行（保留单空行）
  const lines = body.split('\n')
  const cleaned = []
  let prevEmpty = false
  for (const line of lines) {
    const isEmpty = line.trim() === ''
    if (isEmpty && prevEmpty) continue
    cleaned.push(line)
    prevEmpty = isEmpty
  }
  body = cleaned.join('\n')

  // 包裹代码围栏
  const newContent = frontmatter + '\n\n```ini\n' + body + '\n```\n'
  writeFileSync(filePath, newContent, 'utf-8')
  console.log(`   ✅ 已修复 ${fileRelPath}`)
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

fixCodeBlock(
  'C4UUwlc9giThYmkh1qJcQWoKnYf\\VcyDwcktsictHGkUnEcc3MrqnOc\\Yqo6wj6M7itfakkKiUfcnyoRnqh.md',
  'd3dx.ini'
)
fixCodeBlock(
  'C4UUwlc9giThYmkh1qJcQWoKnYf\\VcyDwcktsictHGkUnEcc3MrqnOc\\LtLKwkS3uia9llkbJVgcl3v5nkf.md',
  'd3dx_user.ini'
)

// =============================================
// 步骤 3: 同步资源文件
// =============================================
console.log('🖼️  [3/3] 同步资源文件...')

if (existsSync(exportedAssetsDir)) {
  if (!existsSync(publicAssetsDir)) {
    mkdirSync(publicAssetsDir, { recursive: true })
  }

  const images = readdirSync(exportedAssetsDir).filter(
    f => f.match(/\.(png|jpg|jpeg|gif|webp|svg|ico)$/i)
  )

  let copied = 0
  for (const img of images) {
    const src = resolve(exportedAssetsDir, img)
    const dest = resolve(publicAssetsDir, img)
    copyFileSync(src, dest)
    copied++
  }
  console.log(`   ✅ 已同步 ${copied} 个资源文件`)
} else {
  console.log(`   ⚠️  资源目录不存在，跳过`)
}

console.log('')
console.log('========================================')
console.log('  ✅ 后处理完成！')
console.log('========================================')
console.log('')
console.log('现在可以运行: npm run docs:build 构建站点')
