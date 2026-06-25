# VenueRedesign.com 项目全量 Markdown 资料包

更新时间：2026-06-18  
项目目录：`/Users/mac/Documents/宴会厅网站搭建项目`  
品牌：DINGSHENG / 广东鼎胜设计有限公司  
网站：`https://www.venueredesign.com`  
GitHub：`https://github.com/18928484656/banquet-hall-independent-site`  
Vercel：`https://vercel.com/leduss-team/venueredesign`

> 本文件是当前外贸独立站项目的完整 Markdown 资料索引。它记录项目定位、技术栈、页面结构、功能模块、素材文件、内容资产、SEO/GEO/AIO、询盘邮箱、部署方式、维护规则和文件清单。  
> 安全说明：QQ 邮箱 SMTP 授权码只保存在 Vercel 环境变量中，不写入本文档、不写入 GitHub。

## 1. 项目定位

这是广东鼎胜设计有限公司的外贸 B2B 独立站，面向海外酒店、婚礼堂、宴会厅、活动中心、商业空间投资人和项目方。

核心业务表达：

- 中国设计师和中国工程师负责宴会厅方案设计与工程深化。
- 中国工厂负责材料、灯光、软装、设备等一站式采购。
- 中国施工师傅可到全球各地上门安装和交付。
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
| 正式网站 | `https://www.venueredesign.com` |
| 备用域名 | `https://venueredesign.vercel.app` |
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

## 3. 技术栈与运行方式

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

当前本机没有直接暴露系统 `npm` 时，可用 bundled Node 执行构建：

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

更新流程：

1. Codex 修改本地项目文件。
2. 提交并推送到 GitHub `main` 分支。
3. Vercel 自动检测 GitHub 更新。
4. Vercel 自动部署正式网站。
5. 正式域名同步刷新，可能有短时间缓存。

## 5. 页面地图

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

## 6. 已完成功能

- 鼎胜 Logo 已替换为 `/assets/dingsheng-logo.jpg`。
- 首页使用高端宴会厅静态视觉首屏，不再使用打开即出现的视频弹窗。
- 已移除首页视频弹窗播放入口，避免影响客户第一屏浏览。
- 曾短暂参考 `grammywedding.com` 做过首页编辑式改版，已按用户要求撤回；当前正式站为原首页版本。
- 顶部导航和超级菜单已优化为黑金磨砂风格。
- 全站语言切换入口已加入，顺序为：Русский、English、Bahasa Melayu、O'zbekcha、العربية、Español、中文。
- 2026-06-25 首页首屏已调整为吉尔吉斯斯坦投放版本，默认语言、`html lang` 和默认 SEO Title 为俄语，主标题为 `Дизайн и обновление банкетных залов в Кыргызстане`。
- 服务页文案已强化为“中国设计 + 中国采购 + 中国施工团队全球交付”的 EPC 一站式表达。
- 案例页已加入 10 个中国城市工程视频案例。
- 每个案例包含视频、地点、时间、面积、工期、交付内容、项目挑战和结果。
- 10 个案例视频已统一优化为 10 秒以内、960x540、24fps、H.264 + AAC 有声快速播放版本，减少弹窗和详情页播放卡顿。
- 联系页加入 OpenStreetMap 地址展示。
- 右下角加入 WhatsApp 固定联系按钮。
- B2B 询盘表单页已完成。
- 询盘表单已接入 QQ 邮箱 SMTP，并测试能发送到 `347748243@qq.com`。
- Google Ads 极简高转化落地页已完成。
- SEO 基础文件 `robots.js`、`sitemap.js` 已完成。
- 博客数据和博客页面结构已完成，包含 110 篇英文博客内容包。

Code Test 基础验证命令：

```bash
/Users/mac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node node_modules/next/dist/bin/next build
```

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
SMTP_PASS=<只保存在 Vercel 的 QQ 邮箱 SMTP 授权码>
```

验证记录：

- 2026-06-18 已通过正式域名接口 `https://www.venueredesign.com/api/inquiry` 提交测试询盘。
- 接口返回 `{"ok":true}`。
- 已在 QQ 邮箱确认收到测试邮件。

注意：

- 不要把 `SMTP_PASS` 写进任何代码、Markdown、GitHub 或技能文件。
- 如果 QQ 邮箱授权码失效，需要在 QQ 邮箱后台重新生成授权码，并更新 Vercel 的 `SMTP_PASS`。

## 8. 语言切换

语言组件：

```text
app/components/LanguageSwitcher.jsx
```

当前语言顺序：

1. Русский
2. English
3. Bahasa Melayu
4. O'zbekcha
5. العربية
6. Español
7. 中文

实现方式：

- 顶部 Header 中显示自定义黑金语言按钮。
- 底层通过 Google Translate 初始化全站语言切换。
- 默认页面语言为俄语，并用 `site-language-default-version` 做一次性默认语言迁移，避免旧设备缓存继续显示英文。
- 阿拉伯语切换时设置 `dir="rtl"`。
- 用户选择语言后写入 `localStorage` 和 `googtrans` cookie。

## 9. 视频与视觉素材

首页视频：

```text
public/assets/home-hero-banquet-video.mp4
```

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

案例视频优化标准：

- 最长 10 秒。
- 960x540 网页展示尺寸。
- 24fps。
- H.264 / AAC / MP4。
- `faststart`，方便浏览器快速开始播放。
- 保留音频轨道；网站案例视频不再默认静音，客户点击播放可听到声音。

案例封面：

```text
public/assets/videos/dingsheng-case-01.png
public/assets/videos/dingsheng-case-02.png
public/assets/videos/dingsheng-case-03.png
public/assets/videos/dingsheng-case-04.png
public/assets/videos/dingsheng-case-05.png
public/assets/videos/dingsheng-case-06.png
public/assets/videos/dingsheng-case-07.png
public/assets/videos/dingsheng-case-08.png
public/assets/videos/dingsheng-case-09.png
public/assets/videos/dingsheng-case-10.png
```

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

## 10. 内容与 SEO 资产

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
```

SEO / GEO / AIO 原则：

- 每个核心页面要有清晰 SEO Title 和 Meta Description。
- 每个页面只保留一个 H1。
- H2/H3 用于合理分层。
- 图片使用描述性 ALT。
- FAQ 回答真实客户问题。
- 文案强调工程能力、采购能力、施工交付、案例、信任信息。
- 避免空泛营销词和关键词堆砌。

## 11. 源资料提取记录

源资料抽取结果：

```text
extracted-source-notes/pptx_text.txt
extracted-source-notes/pptx_text.json
extracted-source-notes/image_inventory.json
extracted-source-notes/image-contact-sheet.jpg
extracted-source-notes/宴会厅关键词表格xlsx.xlsx.txt
extracted-source-notes/宴会厅关键词表格xlsx.xlsx.json
extracted-source-notes/宴会厅独立站表格-Codex外贸独立站信息填写表(2).xlsx.txt
extracted-source-notes/宴会厅独立站表格-Codex外贸独立站信息填写表(2).xlsx.json
```

这些文件用于记录用户上传 PPT、表格、关键词库和图片素材的提取结果。

## 12. 脚本文件

```text
scripts/generate-blog-content-pack.mjs
scripts/generate-original-case-videos.mjs
scripts/visual-check.mjs
```

用途：

- `generate-blog-content-pack.mjs`：生成博客内容包。
- `generate-original-case-videos.mjs`：生成或处理案例视频相关素材。
- `visual-check.mjs`：页面视觉检查脚本。

## 13. 核心源码文件清单

```text
app/layout.jsx
app/page.jsx
app/globals.css
app/robots.js
app/sitemap.js
app/data/company.js
app/data/site.js
app/components/SiteHeader.jsx
app/components/SiteFooter.jsx
app/components/FloatingWhatsAppButton.jsx
app/components/LanguageSwitcher.jsx
app/services/page.jsx
app/design-styles/page.jsx
app/projects/page.jsx
app/projects/[slug]/page.jsx
app/blog/page.jsx
app/blog/[slug]/page.jsx
app/blog/blogData.js
app/about/page.jsx
app/contact/page.jsx
app/inquiry/page.jsx
app/inquiry/InquiryForm.jsx
app/google-ads-banquet-hall/page.jsx
app/google-ads-banquet-hall/AdsLeadForm.jsx
app/api/inquiry/route.js
```

## 14. 配置文件清单

```text
.gitignore
jsconfig.json
next.config.mjs
package.json
package-lock.json
vercel.json
```

## 15. 视觉检查文件

`visual-check/` 目录保存了历史页面截图、移动端截图、视频控件截图、案例页截图、询盘页截图、广告落地页截图等，用于回看改版效果和做视觉 QA。

代表文件：

```text
visual-check/dingsheng-home-desktop.png
visual-check/home-video-modal-playing-controls.png
visual-check/services-hero-china-team.png
visual-check/projects-dingsheng-real-videos-desktop.png
visual-check/inquiry-page-desktop.png
visual-check/google-ads-landing-desktop.png
visual-check/floating-whatsapp-mobile.png
```

## 16. Codex 技能包

当前项目技能已安装在：

```text
/Users/mac/.codex/skills/venueredesign-b2b-website
```

技能入口：

```text
/Users/mac/.codex/skills/venueredesign-b2b-website/SKILL.md
```

技能资料：

```text
/Users/mac/.codex/skills/venueredesign-b2b-website/references/project-brief.md
/Users/mac/.codex/skills/venueredesign-b2b-website/references/project-file-map.md
```

后续只要用户说“继续优化 venueredesign 网站 / 鼎胜宴会厅独立站 / 询盘 / SEO / Vercel / 多语言 / 案例视频”，Codex 应使用该技能。

## 17. 下次给 Codex 的提示词

```text
请继续优化我的外贸独立站项目。
项目目录：/Users/mac/Documents/宴会厅网站搭建项目
品牌：DINGSHENG / 广东鼎胜设计有限公司
网站：https://www.venueredesign.com
GitHub：https://github.com/18928484656/banquet-hall-independent-site
Vercel：https://vercel.com/leduss-team/venueredesign
核心业务：宴会厅设计、婚礼堂设计、酒店宴会厅改造、EPC 一站式交付，中国设计师、中国工程师、中国工厂采购、中国施工团队全球上门安装。
请使用 venueredesign-b2b-website 技能，先读取项目交接资料和项目全量资料包，再继续操作。
```

## 18. 维护注意事项

- 不要把 QQ 邮箱 SMTP 授权码写进代码、GitHub 或 Markdown。
- 不要把旧 LEDUSS 品牌重新放回前台页面。
- 不要随便删除 `public/assets/videos/` 的案例视频。
- 不要随便删除 `app/data/company.js`，全站联系方式依赖它。
- 不要随便修改 DNS，除非明确是在处理域名解析。
- 重要改动后必须运行构建检查。
- 推送到 GitHub 后，等待 Vercel 自动部署并检查正式域名。
