# Sync-FeishuDocs.ps1
# =============================================
# 飞书云文档 → VitePress 站点同步脚本
# 运行: ./Sync-FeishuDocs.ps1
# =============================================

$ErrorActionPreference = "Continue"
$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition
$DocsDir = Join-Path $ProjectRoot "docs"
$DocsDocsDir = Join-Path $DocsDir "docs"
$PublicAssetsDir = Join-Path $DocsDir "public\assets"
$ExportedAssetsDir = Join-Path $DocsDocsDir "assets"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  绝区零 Mod 帮助文档 - 同步脚本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# =============================================
# 步骤 1: 从飞书导出最新文档
# =============================================
Write-Host "📥 [1/4] 正在从飞书导出最新文档..." -ForegroundColor Yellow
Set-Location $ProjectRoot
npx feishu-pages 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  feishu-pages 返回了非零退出码，继续执行..." -ForegroundColor DarkYellow
}
Write-Host "✅ 飞书文档导出完成" -ForegroundColor Green
Write-Host ""

# =============================================
# 步骤 2: 修复 Markdown 中的反斜杠路径
# =============================================
Write-Host "🔧 [2/4] 正在修复 Markdown 中的反斜杠路径..." -ForegroundColor Yellow

$mdFiles = Get-ChildItem -Path $DocsDocsDir -Recurse -Filter "*.md" | Where-Object { $_.FullName -notmatch '\\node_modules\\' }
$fixedCount = 0

foreach ($file in $mdFiles) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8

    # 修复 markdown 链接中的反斜杠: [text](/path\to\file) → [text](/path/to/file)
    $newContent = $content -replace '(\]\([^)]*)\\([^)]*\))', '$1/$2'

    # 修复 img src 中的反斜杠（虽然不应该出现，但以防万一）
    $newContent = $newContent -replace '(src="[^"]*)\\([^"]*")', '$1/$2'

    if ($newContent -ne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent, [System.Text.UTF8Encoding]::new($false))
        $fixedCount++
    }
}

Write-Host "✅ 已修复 $fixedCount 个文件中的反斜杠路径" -ForegroundColor Green
Write-Host ""

# =============================================
# 步骤 3: 修复代码块格式
# =============================================
Write-Host "📝 [3/4] 正在修复代码块格式..." -ForegroundColor Yellow

# 修复 d3dx.ini: 移除 # 标题，添加代码块围栏，去除多余空行
$d3dxIniFile = Join-Path $DocsDocsDir "C4UUwlc9giThYmkh1qJcQWoKnYf\VcyDwcktsictHGkUnEcc3MrqnOc\Yqo6wj6M7itfakkKiUfcnyoRnqh.md"
if (Test-Path $d3dxIniFile) {
    $content = Get-Content -Path $d3dxIniFile -Raw -Encoding UTF8

    # 只在还没有代码围栏时修复
    if ($content -notmatch '```ini') {
        # 提取 frontmatter
        if ($content -match '^---[\s\S]*?---') {
            $frontmatter = $matches[0]
            $body = $content.Substring($frontmatter.Length).Trim()

            # 移除 # d3dx.ini 标题
            $body = $body -replace '^# d3dx\.ini\s*', ''
            $body = $body.Trim()

            # 去除代码行之间的多余空行
            $lines = $body -split "`n"
            $cleaned = @()
            $prevLine = ""
            foreach ($line in $lines) {
                $trimmed = $line.Trim()
                # 保留空行，但压缩连续空行
                if ($trimmed -eq "" -and $prevLine -eq "") {
                    continue
                }
                $cleaned += $line
                $prevLine = $trimmed
            }
            $body = $cleaned -join "`n"

            # 添加代码围栏
            $newContent = $frontmatter + "`n`n" + "```ini" + "`n" + $body + "`n" + "```" + "`n"
            [System.IO.File]::WriteAllText($d3dxIniFile, $newContent, [System.Text.UTF8Encoding]::new($false))
            Write-Host "   ✅ 已修复 d3dx.ini 代码块" -ForegroundColor Green
        }
    } else {
        Write-Host "   ⏭️ d3dx.ini 已包含代码块，跳过" -ForegroundColor DarkGray
    }
}

# 修复 d3dx_user.ini
$d3dxUserIniFile = Join-Path $DocsDocsDir "C4UUwlc9giThYmkh1qJcQWoKnYf\VcyDwcktsictHGkUnEcc3MrqnOc\LtLKwkS3uia9llkbJVgcl3v5nkf.md"
if (Test-Path $d3dxUserIniFile) {
    $content = Get-Content -Path $d3dxUserIniFile -Raw -Encoding UTF8

    if ($content -notmatch '```ini') {
        if ($content -match '^---[\s\S]*?---') {
            $frontmatter = $matches[0]
            $body = $content.Substring($frontmatter.Length).Trim()

            # 移除 # d3dx_user.ini 标题
            $body = $body -replace '^# d3dx_user\.ini\s*', ''
            $body = $body.Trim()

            # 去除多余空行
            $lines = $body -split "`n"
            $cleaned = @()
            $prevLine = ""
            foreach ($line in $lines) {
                $trimmed = $line.Trim()
                if ($trimmed -eq "" -and $prevLine -eq "") { continue }
                $cleaned += $line
                $prevLine = $trimmed
            }
            $body = $cleaned -join "`n"

            $newContent = $frontmatter + "`n`n" + "```ini" + "`n" + $body + "`n" + "```" + "`n"
            [System.IO.File]::WriteAllText($d3dxUserIniFile, $newContent, [System.Text.UTF8Encoding]::new($false))
            Write-Host "   ✅ 已修复 d3dx_user.ini 代码块" -ForegroundColor Green
        }
    } else {
        Write-Host "   ⏭️ d3dx_user.ini 已包含代码块，跳过" -ForegroundColor DarkGray
    }
}

Write-Host ""

# =============================================
# 步骤 3b: 复制资源文件到 public 目录
# =============================================
Write-Host "🖼️  [3b/4] 正在同步资源文件..." -ForegroundColor Yellow

if (Test-Path $ExportedAssetsDir) {
    # 确保目标目录存在
    if (-not (Test-Path $PublicAssetsDir)) {
        New-Item -ItemType Directory -Path $PublicAssetsDir -Force | Out-Null
    }

    # 复制所有图片文件
    $images = Get-ChildItem -Path $ExportedAssetsDir -Recurse -File
    $copiedCount = 0
    foreach ($img in $images) {
        $destPath = Join-Path $PublicAssetsDir $img.Name
        Copy-Item -Path $img.FullName -Destination $destPath -Force
        $copiedCount++
    }
    Write-Host "✅ 已复制 $copiedCount 个资源文件到 public/assets/" -ForegroundColor Green
} else {
    Write-Host "⚠️  未找到导出的资源目录 ($ExportedAssetsDir)，跳过" -ForegroundColor DarkYellow
}

Write-Host ""

# =============================================
# 步骤 4: 构建站点
# =============================================
Write-Host "🏗️  [4/4] 正在构建 VitePress 站点..." -ForegroundColor Yellow
npm run docs:build 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 构建失败，请检查错误信息" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ✅ 同步完成！" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "运行以下命令预览站点：" -ForegroundColor White
Write-Host "  npm run docs:preview" -ForegroundColor Yellow
