# zerone

基于 Nuxt.js 开发的链接聚合（link in bio/linktree）主页。

> *感谢开源项目 [L33Z22L11/homepage-v5](https://github.com/L33Z22L11/homepage-v5)*

## 快速开始

### 安装依赖

```sh
pnpm i
```

### 运行开发环境

```sh
pnpm dev
```

### 构建生产环境

```sh
pnpm generate
pnpm preview
```

### 部署指南

推荐使用 Vercel 进行部署，同时也支持 Netlify、Cloudflare Pages 等平台。建议采用静态（SSG）部署方式，也可直接使用“Nuxt 预设”部署。我的部署配置如下：

- 构建命令: `pnpm generate`
- 输出目录: `dist`
- 安装命令: `pnpm i`

## 贡献

欢迎参与项目：如果有具体问题或功能建议，可以发起 Issue；如果愿意在已确定的方向上增加功能或修复问题，可以提交 Pull Request。

## 许可证

- 项目本体：[MIT](LICENSE)
