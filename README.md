# 我的 VuePress 博客

这是一个使用 VuePress 搭建的个人博客。

## 功能特点

- 简洁美观的界面
- 支持 Markdown 写作
- 自动部署到阿里云服务器
- 响应式设计，适配各种设备

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm docs:dev
```

## 部署

### 自动部署
推送到 `release` 分支会触发 GitHub Actions 自动部署到服务器。

### 手动部署
```bash
# 构建项目
pnpm docs:build

# 部署到服务器
./deploy.sh
```

## 目录结构