// scripts/deploy.mjs
// 一键部署脚本 - 处理各种边界情况
// =============================================
// 运行: node scripts/deploy.mjs
// =============================================

import { execSync } from 'child_process'
import { existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

function run(cmd, label) {
  console.log(`\n▶ ${label}...`)
  try {
    execSync(cmd, { cwd: root, stdio: 'inherit', timeout: 120000 })
    return true
  } catch (e) {
    return false
  }
}

function runCapture(cmd) {
  try {
    return execSync(cmd, { cwd: root, encoding: 'utf8', timeout: 10000 }).trim()
  } catch {
    return ''
  }
}

console.log('')
console.log('========================================')
console.log('  绝区零 Mod 帮助文档 - 一键部署')
console.log('========================================')

// =============================================
// 步骤 0: 前置检查
// =============================================
console.log('\n📋 [0/6] 前置检查...')

// 检查是否为 git 仓库
if (!existsSync(resolve(root, '.git'))) {
  console.log('❌ 不是 Git 仓库，请先运行 git init')
  process.exit(1)
}

// 检查分支
const branch = runCapture('git rev-parse --abbrev-ref HEAD')
if (branch !== 'main') {
  console.log(`⚠️  当前分支为 "${branch}"，建议在 main 分支部署`)
  console.log('   运行: git checkout main')
  // 继续执行，不强制退出
}

// 检查未提交的更改
const hasChanges = runCapture('git status --porcelain')
if (hasChanges) {
  console.log('📝 检测到未提交的更改:')
  console.log(hasChanges.slice(0, 500))
  // 继续执行，会自动提交
} else {
  console.log('✅ 工作区干净')
}

// 检查 .env 是否存在
if (!existsSync(resolve(root, '.env'))) {
  console.log('❌ 缺少 .env 文件（飞书凭证），无法同步')
  process.exit(1)
}

// 检查 docs.json 是否存在（判断是否首次运行）
const isFirstRun = !existsSync(resolve(root, 'docs', 'docs.json'))

// =============================================
// 步骤 1: 从飞书同步文档
// =============================================
console.log('\n📥 [1/6] 从飞书同步文档...')
if (!run('npx feishu-pages', '同步飞书文档')) {
  console.log('❌ 飞书同步失败，请检查网络或 .env 配置')
  console.log('   继续使用本地已有文档...')
}

// =============================================
// 步骤 2: 后处理（修复路径、代码块、资源）
// =============================================
console.log('\n🔧 [2/6] 后处理修复...')
if (!run('node scripts/post-sync.mjs', '修复路径和代码块')) {
  console.log('⚠️  后处理出现问题，但不影响部署')
}

// =============================================
// 步骤 3: 自动生成侧边栏
// =============================================
console.log('\n📋 [3/6] 生成侧边栏...')
if (existsSync(resolve(root, 'docs', 'docs.json'))) {
  if (!run('node scripts/generate-sidebar.mjs', '生成侧边栏')) {
    console.log('⚠️  侧边栏生成失败，使用现有侧边栏')
  }
} else if (isFirstRun) {
  console.log('❌ docs.json 不存在，无法生成侧边栏')
  process.exit(1)
} else {
  console.log('⏭️  docs.json 不存在，跳过侧边栏生成')
}

// =============================================
// 步骤 4: 检查变更
// =============================================
console.log('\n📊 [4/6] 检查变更...')
const changes = runCapture('git status --porcelain')
if (changes) {
  const files = changes.split('\n').filter(Boolean)
  console.log(`   共 ${files.length} 个文件变更:`)

  // 分类统计
  const added = files.filter(f => f.startsWith('?') || f.startsWith('A')).length
  const modified = files.filter(f => f.startsWith(' M') || f.startsWith('M')).length
  const deleted = files.filter(f => f.startsWith(' D') || f.startsWith('D')).length
  if (added) console.log(`   🆕 新增: ${added}`)
  if (modified) console.log(`   📝 修改: ${modified}`)
  if (deleted) console.log(`   🗑️  删除: ${deleted}`)
} else {
  console.log('   没有变更需要部署')
  console.log('\n✅ 网站已是最新！')
  process.exit(0)
}

// =============================================
// 步骤 5: 构建站点
// =============================================
console.log('\n🏗️  [5/6] 构建站点...')
if (!run('npx vitepress build', '构建')) {
  console.log('❌ 构建失败，请检查错误信息')
  console.log('   修复后重新运行: node scripts/deploy.mjs')
  process.exit(1)
}

// =============================================
// 步骤 6: 提交并推送
// =============================================
console.log('\n📤 [6/6] 提交并推送到 GitHub...')

const now = new Date()
const dateStr = now.toLocaleString('zh-CN', {
  year: 'numeric', month: '2-digit', day: '2-digit',
  hour: '2-digit', minute: '2-digit'
})

// 如果有飞书同步，记录同步来源
const hasFeishuUpdate = changes.includes('docs/docs/') || changes.includes('docs/public/')
const commitMsg = hasFeishuUpdate
  ? `更新文档 ${dateStr}`
  : `更新配置/样式 ${dateStr}`

if (run(`git add -A && git commit -m "${commitMsg}"`, '提交')) {
  console.log('   ✅ 提交成功')

  if (run('git push', '推送到 GitHub')) {
    console.log('')
    console.log('========================================')
    console.log('  ✅ 部署完成！')
    console.log('========================================')
    console.log('')
    console.log('  GitHub Actions 正在自动构建...')
    console.log('  约 1-2 分钟后访问:')
    console.log('  https://hefengchang.github.io/ZZZ-Mod-Help/')
  } else {
    console.log('⚠️  推送失败，可能是网络问题或没有远程仓库')
    console.log('   手动推送: git push')
  }
} else {
  // 检查是否因为没有变更而提交失败
  const status = runCapture('git status --porcelain')
  if (!status) {
    console.log('   ℹ️  没有新变更，跳过提交')
    console.log('\n✅ 网站已是最新！')
  } else {
    console.log('❌ 提交失败')
    process.exit(1)
  }
}
