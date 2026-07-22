// scripts/git-push.mjs
// 自动提交并推送到 GitHub
import { execSync } from 'child_process'

try {
  // 获取当前时间作为提交信息
  const now = new Date()
  const dateStr = now.toLocaleString('zh-CN', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit'
  })

  console.log('📤 提交并推送到 GitHub...')

  execSync('git add -A', { stdio: 'inherit' })
  execSync(`git commit -m "更新文档 ${dateStr}"`, { stdio: 'inherit' })
  execSync('git push', { stdio: 'inherit' })

  console.log('')
  console.log('========================================')
  console.log('  ✅ 部署完成！等待 GitHub Actions 构建...')
  console.log('========================================')
  console.log('')
  console.log('约 1-2 分钟后访问：')
  console.log('https://hefengchang.github.io/ZZZ-Mod-Help/')
} catch (e) {
  // 如果没有变更可提交，git commit 会报错，忽略即可
  if (e.message.includes('nothing to commit')) {
    console.log('ℹ️  没有新变更，跳过提交')
  } else if (e.message.includes('git push')) {
    console.log('⚠️  推送失败，请检查网络或 GitHub 认证')
  } else {
    console.log('⚠️ ', e.message)
  }
}
