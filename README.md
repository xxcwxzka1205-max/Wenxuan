# Mera Cai Portfolio

Mera Cai 的个人交互式作品集网站。项目以数字作品集为核心，展示艺术、时尚设计、品牌实践和视觉研究等内容，并通过复古工业风界面、动效和可交互的项目浏览方式，呈现设计师的工作经历与创作过程。

## 项目简介

网站主要包含以下内容：

- 个人介绍、简历入口和联系方式
- Art Seed 艺术集合资讯网站项目
- 《牡丹亭》戏曲文化融合时尚设计项目
- 贡㿟复古小众男装品牌工作经历
- 虚拟时尚和手工艺风格品牌相关研究
- 项目图片、过程稿、宣传视频和项目外链

首页采用交互式作品集布局：左侧用于查看个人信息和简历内容，右侧数字按钮用于切换不同作品。项目详情支持图片浏览、视频展示和分阶段内容查看。

## 技术栈

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion
- Lucide React
- Node.js 与 npm

## 环境要求

- Node.js 20 或更高版本
- npm 10 或更高版本

可以使用 `nvm` 安装并切换 Node.js：

```bash
nvm install --lts
nvm use --lts
```

## 本地运行

1. 安装项目依赖：

```bash
npm install
```

2. 启动开发服务器：

```bash
npm run dev
```

开发服务器默认运行在：

```text
http://localhost:3000
```

项目已配置监听 `0.0.0.0`，在同一局域网内也可以通过本机 IP 访问。

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动 Vite 开发服务器，端口为 3000 |
| `npm run lint` | 使用 TypeScript 检查项目类型 |
| `npm run build` | 构建生产版本到 `dist/` |
| `npm run preview` | 本地预览生产构建结果 |
| `npm run clean` | 删除 `dist/` 构建目录 |

## 生产构建与发布

### 构建生产版本

```bash
npm install
npm run lint
npm run build
```

构建完成后，生产文件位于 `dist/` 目录。

### 发布到静态托管平台

本项目是 Vite 单页应用，可以将 `dist/` 目录发布到 Vercel、Netlify、Cloudflare Pages 或其他静态托管服务。

常用配置如下：

- 构建命令：`npm run build`
- 发布目录：`dist`
- 安装命令：`npm install`

如果使用平台的 Git 自动部署功能，将项目连接到代码仓库后，按照以上配置创建部署即可。

### 本地预览生产版本

```bash
npm run preview
```

默认会启动 Vite 的生产预览服务。终端会显示实际访问地址。

## 资源说明

作品集中的部分图片和视频使用外部资源地址。正式发布前请确认这些资源地址持续可访问；如果需要完全自主部署，可以将资源下载到 `public/` 目录，并将代码中的外链替换为本地路径。

## 目录结构

```text
.
├── index.html          # HTML 入口
├── metadata.json       # 项目元信息
├── package.json        # 项目脚本与依赖
├── public/             # 静态资源目录
├── src/
│   ├── App.tsx         # 作品集页面与交互逻辑
│   ├── index.css       # 全局样式与视觉主题
│   └── main.tsx        # React 应用入口
├── tsconfig.json       # TypeScript 配置
└── vite.config.ts      # Vite 配置
```

## 许可证与内容版权

项目中的个人作品、图片、视频和品牌相关内容请以实际版权归属为准。未经授权，请勿复制、转载或用于商业用途。
