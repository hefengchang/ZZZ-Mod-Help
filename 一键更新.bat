@echo off
chcp 936 >nul
cd /d "%~dp0"
title 一键更新

set "CODE=0"

echo.
echo ========================================
echo   绝区零 Mod 帮助文档 - 一键更新
echo ========================================
echo.

where npm >nul 2>nul
if errorlevel 1 goto nonpm

call npm run deploy
set "CODE=%ERRORLEVEL%"
goto finish

:nonpm
echo 找不到 npm。请确认已安装 Node.js。
set "CODE=9009"
goto finish

:finish
echo.
if "%CODE%"=="0" echo 更新完成。
if not "%CODE%"=="0" echo 更新失败，退出码 %CODE%，看上面报错。
echo.
echo 按任意键关闭...
pause >nul
