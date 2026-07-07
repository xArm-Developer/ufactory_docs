# UFACTORY 文档

[![VitePress](https://img.shields.io/badge/构建工具-VitePress-646cff?logo=vuedotjs)](https://vitepress.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/) [![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

> [English Version](./README.md) 

本仓库托管了 [UFACTORY Docs](https://docs.ufactory.cc/zhHans/) 文档网站的源代码 — [UFACTORY](https://cn.ufactory.cc) 机械臂产品的统一文档中心。  

文档覆盖 UFACTORY 全线产品，包括 **xArm5、xArm6、xArm7、UFACTORY 850 和 Lite6**，提供用户手册、API 文档、技术支持文章和常见问题解答。

## 功能特性

- **双语支持** — 英文与简体中文（zh-Hans）
- **简洁现代的界面** — 基于 [VitePress](https://vitepress.dev/) 构建，使用 [Ant Design Vue](https://antdv.com/) 美化
- **PDF 导出** — 一键生成 PDF 文档，支持离线阅读
- **本地全文搜索** — 快速、可离线使用的文档搜索
- **响应式设计** — 适配桌面端、平板端和移动端
- **自动生成侧边栏** — 根据文件结构自动生成导航


## 项目结构

本项目采用 Git 分支策略管理不同产品线的文档，各分支独立构建与部署：

```
main                        # 主分支（当前：用户手册）
├── doc_base_framework       # 文档基础框架（VitePress 主题、配置、公共资源）
├── ufactory_doc_850         # UFACTORY 850 产品文档
├── ufactory_doc_accessories # 配件文档
├── ufactory_doc_api         # API 参考文档（Python SDK、WebSocket、G-code 等）
├── ufactory_doc_lite6       # Lite6 产品文档
├── ufactory_doc_releasenote # 版本发布说明
├── ufactory_doc_support_article  # 技术支持文章
├── ufactory_doc_usermanual  # 用户手册（UFACTORY Studio 操作指南）
└── ufactory_doc_xarm        # xArm 系列产品文档
```

公共目录结构（以用户手册分支为例）：

```
.vitepress/                  # VitePress 配置与自定义主题
├── config.mts               # 主站点配置（国际化、导航、侧边栏）
├── theme/                   # 自定义主题（PDF 导出、样式覆盖）
└── vitepress-pdf.config_*.ts  # PDF 导出配置
en/                          # 英文文档
zhHans/                      # 简体中文文档
public/                      # 静态资源（Netlify 重定向、SVG 图标）
```

## 相关链接

- [UFACTORY 英文官网](https://www.ufactory.cc)
- [UFACTORY 中文官网](https://cn.ufactory.cc)
- [API 文档](http://docs.api.ufactory.cc/gcode/ufactory_Gcode.html)
- [技术支持文章](http://docs.support_article.ufactory.cc/support_articles/)

## 参与贡献

欢迎贡献！如有任何改进建议，请提交 Issue 或 Pull Request 来帮助完善文档。
