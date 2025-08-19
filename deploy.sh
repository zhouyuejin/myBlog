#!/bin/bash

# 构建项目
pnpm docs:build

# 部署到服务器 - 替换为你的服务器信息
scp -r docs/.vuepress/dist/* root@your-server-ip:/usr/share/nginx/html/blog/

echo "部署成功！"