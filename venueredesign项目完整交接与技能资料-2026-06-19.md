# venueredesign.com 项目完整交接与 Codex 技能资料

更新时间：2026-06-19  
项目目录：`/Users/mac/Documents/宴会厅网站搭建项目`  
正式网站：`https://www.venueredesign.com`  
Vercel 备用地址：`https://venueredesign.vercel.app`  
GitHub 仓库：`https://github.com/18928484656/banquet-hall-independent-site`  
Vercel 项目：`https://vercel.com/leduss-team/venueredesign`

> 安全说明：QQ 邮箱 SMTP 授权码只保存在 Vercel 环境变量中，不写入 Markdown、GitHub 或 Codex 技能文件。

## 1. 项目定位

这是广东鼎胜设计有限公司的外贸 B2B 独立站，面向海外酒店、婚礼堂、宴会厅、活动中心、商业空间投资人、承包商和采购团队。

核心表达：

- 中国设计师和中国工程师负责宴会厅方案设计与工程深化。
- 中国工厂负责材料、灯光、软装、设备等一站式采购。
- 中国施工团队可到全球各地上门安装和交付。
- 设计、采购、施工、对接、安装、交付由一个中国团队统一负责，减少中间商和多供应商沟通成本。

核心服务：

- Luxury Banquet Hall Design
- Wedding Banquet Hall EPC Turnkey Solution
- Hotel Ballroom Renovation
- Lighting / AV / Scene Control Integration
- Construction & Interior Fit-out
- Operations Empowerment & Launch Support

## 2. 公司与联系方式

| 项目 | 内容 |
|---|---|
| 中文公司名 | 广东鼎胜设计有限公司 |
| 英文公司名 | Guangdong Dingsheng Design Co., Ltd. |
| 品牌名 | DINGSHENG |
| WhatsApp | `+86 18211506520` |
| WhatsApp 链接 | `https://wa.me/8618211506520` |
| 邮箱 | `347748243@qq.com` |
| 微信 | `18211506520` |
| 中文地址 | 广东省佛山市禅城区智慧新城T12栋502C |
| 英文地址 | Room 502C, Building T12, Zhihui New City, Chancheng District, Foshan City, Guangdong Province |

全站联系方式配置文件：

```text
app/data/company.js
```

## 3. 技术栈与运行命令

| 类型 | 当前配置 |
|---|---|
| 框架 | Next.js |
| 前端 | React |
| 图标 | lucide-react |
| 样式 | `app/globals.css` |
| 部署 | Vercel |
| 代码仓库 | GitHub |

常用命令：

```bash
npm run dev
npm run build
npm run start
```

如果系统 `npm` 不可用，可使用本机 bundled Node 构建：

```bash
/Users/mac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node node_modules/next/dist/bin/next build
```

本地开发地址：

```text
http://127.0.0.1:3000
```

## 4. 部署与域名

GitHub 仓库：

```text
https://github.com/18928484656/banquet-hall-independent-site
```

Vercel 项目：

```text
https://vercel.com/leduss-team/venueredesign
```

域名：

```text
venueredesign.com
www.venueredesign.com
```

NameSilo DNS 推荐记录：

| 类型 | 主机名 | 值 |
|---|---|---|
| A | `@` | `216.198.79.1` |
| CNAME | `www` | `cname.vercel-dns.com` |
| TXT | `_domainconnect` | `www.namesilo.com/domainconnect` |

上线流程：

1. 本地修改网站代码。
2. 构建验证。
3. 提交并推送到 GitHub `main` 分支。
4. Vercel 自动部署。
5. 正式域名同步更新，可能有短时间缓存。

## 5. 页面结构

| 页面 | URL | 文件 |
|---|---|---|
| 首页 | `/` | `app/page.jsx` |
| 服务页 | `/services` | `app/services/page.jsx` |
| 设计风格页 | `/design-styles` | `app/design-styles/page.jsx` |
| 工程案例列表 | `/projects` | `app/projects/page.jsx` |
| 工程案例详情 | `/projects/[slug]` | `app/projects/[slug]/page.jsx` |
| 博客列表 | `/blog` | `app/blog/page.jsx` |
| 博客详情 | `/blog/[slug]` | `app/blog/[slug]/page.jsx` |
| 关于我们 | `/about` | `app/about/page.jsx` |
| 询盘页 | `/inquiry` | `app/inquiry/page.jsx` |
| 联系我们 | `/contact` | `app/contact/page.jsx` |
| Google Ads 落地页 | `/google-ads-banquet-hall` | `app/google-ads-banquet-hall/page.jsx` |
| robots | `/robots.txt` | `app/robots.js` |
| sitemap | `/sitemap.xml` | `app/sitemap.js` |

## 6. 当前已完成功能

- 鼎胜 Logo 已替换为 `/assets/dingsheng-logo.jpg`。
- 首页使用高端宴会厅静态视觉首屏，不再使用打开即出现的视频弹窗。
- 2026-06-26 已将首页首屏调整为哈萨克斯坦投放版本：默认语言、`html lang`、默认 SEO Title 和首屏文案均改为哈萨克语，主标题为 `Қазақстандағы банкет залдарының дизайны және жаңартылуы`。
- 曾短暂参考 `grammywedding.com` 做过首页编辑式改版，已按用户要求撤回；当前正式站为原首页版本，但保留语言、地图、询盘、视频、WhatsApp 等功能。
- 顶部导航和超级菜单为黑金磨砂风格。
- 已删除重复的主菜单 `Engineering` 和首页重复工程栏目。
- 全站语言切换入口为 8 种：Қазақша、Русский、English、Bahasa Melayu、O'zbekcha、العربية、Español、中文。
- 手机端语言菜单已优化：中文可见，菜单不溢出。
- Google Translate 评分弹窗和原文提示已隐藏。
- 语言菜单已加 `notranslate`，避免被 Google 翻译乱改。
- 服务页文案已强化为“中国设计 + 中国采购 + 中国施工团队全球交付”的 EPC 一站式表达。
- 案例页加入 10 个中国城市工程视频案例。
- 案例视频已统一优化为 10 秒以内、960x540、24fps、H.264 + AAC 有声快速播放版本。
- 首页和 Contact 页都加入 OpenStreetMap 公司地址地图。
- 地图显示已提亮，手机端高度正常。
- 右下角加入 WhatsApp 固定联系按钮。
- B2B 询盘表单页已完成。
- 询盘表单已接入 QQ 邮箱 SMTP，收件邮箱为 `347748243@qq.com`。
- Google Ads 极简高转化落地页已完成。
- SEO 基础文件 `robots.js`、`sitemap.js` 已完成。
- 博客数据和博客页面结构已完成，包含 110 篇英文博客内容包。

## 7. 询盘与邮箱

询盘 API：

```text
app/api/inquiry/route.js
```

询盘表单组件：

```text
app/inquiry/InquiryForm.jsx
app/google-ads-banquet-hall/AdsLeadForm.jsx
```

收件邮箱：

```text
347748243@qq.com
```

Vercel 环境变量：

```text
SMTP_HOST=smtp.qq.com
SMTP_PORT=465
SMTP_USER=347748243@qq.com
SMTP_PASS=<只保存在 Vercel 的 QQ 邮箱 SMTP 授权码>
MAIL_FROM=347748243@qq.com
MAIL_TO=347748243@qq.com
```

注意：

- 不要把 `SMTP_PASS` 写进代码、Markdown、GitHub 或技能文件。
- 如果 QQ 邮箱授权码失效，需要在 QQ 邮箱后台重新生成授权码，并更新 Vercel 的 `SMTP_PASS`。

## 8. 语言切换

语言组件：

```text
app/components/LanguageSwitcher.jsx
```

当前语言顺序：

1. Қазақша
2. Русский
3. English
4. Bahasa Melayu
5. O'zbekcha
6. العربية
7. Español
8. 中文

实现方式：

- 顶部 Header 显示自定义黑金语言按钮。
- 底层通过 Google Translate 初始化全站语言切换。
- 默认页面语言为哈萨克语，并用 `site-language-default-version` 做一次性默认语言迁移，避免旧设备缓存继续显示旧国家语言。
- 阿拉伯语切换时设置 `dir="rtl"`。
- 用户选择语言后写入 `localStorage` 和 `googtrans` cookie。
- 语言菜单使用 `notranslate` 和 `translate="no"`，避免 Google 把语言选项翻译乱。
- CSS 隐藏 Google Translate 的评分弹窗、原文提示和蓝色高亮。

## 9. 地图模块

地图数据配置：

```text
app/data/company.js
```

地图展示位置：

- 首页底部：`app/page.jsx`
- 联系页面：`app/contact/page.jsx`

地图来源：

```text
OpenStreetMap
```

地图相关样式：

```text
app/globals.css
```

当前地图优化：

- 首页和 Contact 页均显示公司地址地图。
- iframe 透明度提高到 `0.95`，地图更清楚。
- 手机端地图高度约 429px，避免太小或不可见。
- 提供 `Open in OpenStreetMap` 和 `View larger map` 外链按钮。

## 10. 视频与视觉素材

首页视频：

```text
public/assets/home-hero-banquet-video.mp4
```

当前首页已不再打开即弹出视频，避免影响访问体验。

案例视频：

```text
public/assets/videos/dingsheng-case-01.mp4
public/assets/videos/dingsheng-case-02.mp4
public/assets/videos/dingsheng-case-03.mp4
public/assets/videos/dingsheng-case-04.mp4
public/assets/videos/dingsheng-case-05.mp4
public/assets/videos/dingsheng-case-06.mp4
public/assets/videos/dingsheng-case-07.mp4
public/assets/videos/dingsheng-case-08.mp4
public/assets/videos/dingsheng-case-09.mp4
public/assets/videos/dingsheng-case-10.mp4
```

案例视频标准：

- 最长 10 秒。
- 960x540 网页展示尺寸。
- 24fps。
- H.264 / AAC / MP4。
- `faststart`。
- 保留音频轨道，客户点击播放可听到声音。

主要图片素材：

```text
public/assets/dingsheng-logo.jpg
public/assets/hero-banquet-epc-premium.png
public/assets/hero-banquet-hall.jpg
public/assets/luxury-gold-hall.jpg
public/assets/classic-luxury-hall.png
public/assets/crystal-white-hall.png
public/assets/ocean-theme-hall.png
public/assets/ocean-breeze-hall.png
public/assets/red-theater-hall.png
public/assets/case-hotel-ballroom-renovation.png
public/assets/case-ocean-theme-wedding-hall.png
public/assets/case-technology-event-hall.png
```

旧品牌素材仍在项目中但不要主动使用：

```text
public/assets/leduss-logo.jpg
public/assets/leduss-logo-cropped.png
```

## 11. SEO / GEO / AIO 内容资产

SEO 策略和资料：

```text
LEDUSS-PROJECT-BRIEF.md
LEDUSS-page-map.csv
LEDUSS-宴会厅外贸独立站规划总案.md
banquet-hall-seo-strategy.md
keyword-library.csv
competitor-serp-analysis.csv
seo-audit-results.json
```

博客内容包：

```text
content/blog/leduss-30-blog-index.csv
content/blog/leduss-30-seo-blog-content-pack.md
content/blog/leduss-110-blog-index.csv
content/blog/leduss-110-seo-blog-content-pack.md
```

博客代码数据：

```text
app/blog/blogData.js
app/blog/page.jsx
app/blog/[slug]/page.jsx
```

## 12. 主要数据文件

公司信息：

```text
app/data/company.js
```

服务、案例、设计风格：

```text
app/data/site.js
```

全局布局和结构化数据：

```text
app/layout.jsx
```

全局样式：

```text
app/globals.css
```

## 13. 最近重要提交

```text
0f298df Revert "Redesign homepage with luxury banquet brand layout"
c5ff2d2 Redesign homepage with luxury banquet brand layout
a922480 Add complete project handoff markdown
484856a Add homepage map and improve map visibility
b02a8d6 Improve mobile language dropdown height
287d0f3 Hide Google translate popups and lock language menu
3b26f74 Remove French language option
63f7662 Improve mobile translation switching reliability
5abc1c1 Fix mobile language switching refresh
2c9f725 Remove duplicate engineering section
f16faa6 Fix mobile language menu overflow
3405cd8 Add Russian and optimize language switcher
c3c0bad Restore audio for optimized case videos
a60990a Optimize project case videos
011e431 Remove homepage video modal
```

## 14. Code Test / Codex 验证清单

后续每次修改网站，建议按以下顺序验证。

### 14.1 构建测试

优先使用：

```bash
/Users/mac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node node_modules/next/dist/bin/next build
```

通过标准：

- Next.js 编译成功。
- 静态页面生成成功。
- `/`、`/services`、`/projects`、`/contact`、`/inquiry`、`/blog`、`/sitemap.xml`、`/robots.txt` 正常生成。

### 14.2 首页检查

- 首页保持当前原版高端宴会厅静态首屏。
- 不恢复“一打开网站自动弹出视频播放”。
- 不恢复 Grammy 风格改版，除非用户再次明确要求。
- 首页保留询盘入口、项目案例入口、WhatsApp、地图模块。

### 14.3 语言切换检查

语言顺序必须保持：

1. Қазақша
2. Русский
3. English
4. Bahasa Melayu
5. O'zbekcha
6. العربية
7. Español
8. 中文

检查点：

- 手机端下拉框能看到 `中文`。
- 语言菜单不得出现 `Français / French`。
- Google Translate 评分弹窗和原文提示应隐藏。
- 语言菜单本身应保持 `notranslate`，避免被翻译乱。

### 14.4 地图检查

- 首页底部有 OpenStreetMap 地图。
- `/contact` 页面有 OpenStreetMap 地图。
- 地图 iframe 来源为 `company.mapEmbed`。
- 地图在手机端有足够高度，不能显示成空白块。

### 14.5 询盘检查

- `/inquiry` 表单可见。
- 首页和 Google Ads 落地页询盘表单可见。
- 必填项校验正常。
- Vercel 必须存在 QQ SMTP 环境变量。
- 不要把 `SMTP_PASS` 写入代码或 Markdown。

### 14.6 视频检查

- 首页不自动播放视频弹窗。
- 项目案例视频保留音频。
- 视频控制条可用。
- 案例视频应保持 10 秒以内、H.264 + AAC、faststart。

## 15. Codex 维护规则

后续 Codex 修改网站时应遵守：

- 优先读取技能：`venueredesign-b2b-website`。
- 先检查当前仓库，不要凭旧记忆直接改。
- 不要恢复旧 LEDUSS 品牌或旧 Logo。
- 不要把 QQ 邮箱授权码写入任何文件。
- 前端改动后尽量运行 Next.js build。
- 涉及手机端、地图、语言切换、表单、视频的改动，应做浏览器验证。
- 修改完成后提交并推送到 GitHub `main`，Vercel 会自动部署。
- 如果正式站没立刻更新，等待 Vercel 部署和浏览器缓存刷新。

## 16. 技能包位置

当前 Codex 技能包：

```text
/Users/mac/.codex/skills/venueredesign-b2b-website
```

核心文件：

```text
/Users/mac/.codex/skills/venueredesign-b2b-website/SKILL.md
/Users/mac/.codex/skills/venueredesign-b2b-website/references/project-brief.md
/Users/mac/.codex/skills/venueredesign-b2b-website/references/project-file-map.md
```

本文件可作为后续更新技能包和项目交接资料的主资料源。
