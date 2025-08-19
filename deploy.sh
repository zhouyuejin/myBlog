#!/bin/bash

# 配置变量
SERVER_IP="121.199.53.140"  # 替换为你的服务器IP
SERVER_USER="root"
TARGET_DIR="/usr/share/nginx/html/blog/dist"  # 修改为指向dist目录
SOURCE_DIR="docs/.vuepress/dist"

# 函数：显示错误信息并退出
function error_exit {
    echo "错误: $1" >&2
    exit 1
}

# 检查是否安装了pnpm
if ! command -v pnpm &> /dev/null
then
    error_exit "未找到pnpm，请先安装pnpm"
fi

# 构建项目
echo "开始构建项目..."
pnpm docs:build || error_exit "项目构建失败"

# 检查构建结果
if [ ! -d "$SOURCE_DIR" ]; then
    error_exit "构建目录不存在: $SOURCE_DIR"
fi

# 部署到服务器
echo "开始部署到服务器 $SERVER_USER@$SERVER_IP..."
# 确保目标目录存在
ssh "$SERVER_USER@$SERVER_IP" "mkdir -p $TARGET_DIR"
scp -r "$SOURCE_DIR"/* "$SERVER_USER@$SERVER_IP:$TARGET_DIR/" || error_exit "部署失败"

# 可选：同步Nginx配置
// 同步Nginx配置
echo "同步Nginx配置..."
scp nginx-config/blog.conf "$SERVER_USER@$SERVER_IP:/etc/nginx/sites-available/" || error_exit "Nginx配置同步失败"
ssh "$SERVER_USER@$SERVER_IP" 'ln -sf /etc/nginx/sites-available/blog.conf /etc/nginx/sites-enabled/ && nginx -t && systemctl reload nginx'

echo "部署成功！博客已更新到服务器 $SERVER_IP"