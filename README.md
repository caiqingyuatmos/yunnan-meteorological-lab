# 云南气象灾害重点实验室网站

云南气象灾害重点实验室（Yunnan Meteorological Lab）官方网站源码。面向气象灾害监测、早期预警、气候资源优化及大气科学研究与学术交流。

本仓库独立于 [ME-Lab](https://github.com/caiqingyuatmos/ME-Lab)，仅用于大湄公河 / 云南气象灾害重点实验室站点。

## 本地运行

需要已安装 Node.js。

```bash
npm install
npm run dev
```

开发服务器默认地址：<http://localhost:3000/>

如需调用 Gemini 相关能力，可复制 `.env.example` 为 `.env.local` 并填写 `GEMINI_API_KEY`。

## 构建

```bash
npm run build
```

静态产物输出到 `dist/`，可用于后续部署到阿里云静态网站托管。
