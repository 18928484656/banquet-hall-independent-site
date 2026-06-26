# venueredesign.com 外贸独立站项目交接资料

更新时间：2026-06-18  
项目目录：`/Users/mac/Documents/宴会厅网站搭建项目`

## 1. 项目定位

这是广东鼎胜设计有限公司的外贸 B2B 独立站项目，面向海外酒店、婚礼堂、宴会厅、活动中心、商业空间投资人和项目方。

网站核心表达：

- 中国设计师 + 中国工程师负责空间方案设计。
- 中国工厂负责材料、灯光、软装、设备等一站式采购。
- 中国施工师傅可到全球各地上门安装。
- 从设计、采购、施工、交付、开业支持到询盘转化，尽量减少中间商和沟通成本。

核心服务：

- Luxury Banquet Hall Design
- Wedding Banquet Hall EPC Turnkey Solution
- Hotel Ballroom Renovation
- Lighting / AV / Scene Control Integration
- Construction & Interior Fit-out
- Operations Empowerment & Launch Support

## 2. 公司与品牌信息

中文公司名：广东鼎胜设计有限公司  
英文公司名：Guangdong Dingsheng Design Co., Ltd.  
品牌名：DINGSHENG  
网站域名：`venueredesign.com`  
正式网站：`https://venueredesign.com`  
Vercel 预览/备用地址：`https://venueredesign.vercel.app`

联系方式：

- WhatsApp：`+86 18211506520`
- WhatsApp 链接：`https://wa.me/8618211506520`
- 邮箱：`347748243@qq.com`
- 微信：`18211506520`
- 中文地址：广东省佛山市禅城区智慧新城T12栋502C
- 英文地址：Room 502C, Building T12, Zhihui New City, Chancheng District, Foshan City, Guangdong Province

网站代码中的公司配置文件：

- `/Users/mac/Documents/宴会厅网站搭建项目/app/data/company.js`

## 3. 技术栈

网站框架：Next.js  
前端：React  
图标：lucide-react  
部署平台：Vercel  
代码仓库：GitHub

主要命令：

```bash
npm run dev
npm run build
npm run start
```

本地开发地址：

```text
http://127.0.0.1:3000
```

构建命令：

```bash
npm run build
```

Vercel 输出目录：

```text
.next
```

## 4. GitHub 与 Vercel

GitHub 仓库：

```text
https://github.com/18928484656/banquet-hall-independent-site
```

Vercel 项目：

```text
https://vercel.com/leduss-team/venueredesign
```

Vercel 生产域名：

```text
https://venueredesign.vercel.app
```

后续更新流程：

1. 在本地修改网站代码。
2. 提交并推送到 GitHub。
3. Vercel 自动检测 GitHub 更新。
4. 自动重新部署网站。
5. 正式域名同步更新。

## 5. 域名 DNS 配置

域名：`venueredesign.com`  
域名商：NameSilo  
Vercel 已添加域名：

- `venueredesign.com`
- `www.venueredesign.com`

当前 DNS 记录应保持如下：

| 类型 | 主机名 | 值 |
|---|---|---|
| A | `@` | `216.198.79.1` |
| CNAME | `www` | `cname.vercel-dns.com` |
| TXT | `_domainconnect` | `www.namesilo.com/domainconnect` |

Nameserver 当前已切换为：

```text
NS1.DNSOWL.COM
NS2.DNSOWL.COM
NS3.DNSOWL.COM
```

注意：

- DNS 解析修改后不会立即全球生效，通常需要 30 分钟到数小时。
- Vercel 后台可能短时间显示 `DNS Change Recommended`，只要 DNS 记录已经一致，等待缓存刷新即可。
- 之前旧缓存可能返回 `198.18.*` 或 NameSilo parking 页面，这是缓存未刷新的表现。

## 6. 页面结构

当前主要页面：

| 页面 | 路径 | 文件 |
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

## 7. 已完成的网站功能

已完成内容：

- 鼎胜新 Logo 替换，主要使用 `/assets/dingsheng-logo.jpg`。
- 首页高端宴会厅静态视觉首屏体验。
- 已移除首页打开即出现的视频弹窗播放逻辑，避免影响客户第一屏浏览。
- 曾短暂参考 `grammywedding.com` 做过首页编辑式改版，已按用户要求撤回；当前正式站为原首页版本。
- 服务页文案强化为“中国设计 + 中国采购 + 中国施工团队全球交付”的一站式 EPC 表达。
- 顶部导航和超级菜单优化。
- 案例页加入 10 个中国城市工程案例。
- 每个案例包含视频、地点、时间、面积、工期、交付内容、项目挑战和结果。
- 10 个案例视频已统一优化为 10 秒以内、960x540、24fps、H.264 + AAC 有声快速播放版本，减少页面加载和弹窗播放卡顿。
- 联系页面加入 OpenStreetMap 地址展示。
- 右下角 WhatsApp 浮动按钮。
- B2B 询盘表单页。
- Google Ads 极简高转化落地页。
- 全站 8 种语言切换入口：Қазақша、Русский、English、Bahasa Melayu、O'zbekcha、العربية、Español、中文。
- 2026-06-26 首页首屏已调整为哈萨克斯坦投放版本，默认语言、`html lang` 和默认 SEO Title 为哈萨克语，主标题为 `Қазақстандағы банкет залдарының дизайны және жаңартылуы`。
- SEO 基础文件：`robots.js`、`sitemap.js`。
- 博客数据和博客页面结构。

Code Test 基础验证命令：

```bash
/Users/mac/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node node_modules/next/dist/bin/next build
```

## 8. 视频与素材

首页视频：

```text
public/assets/home-hero-banquet-video.mp4
```

案例视频目录：

```text
public/assets/videos/
```

当前案例视频：

- `dingsheng-case-01.mp4`
- `dingsheng-case-02.mp4`
- `dingsheng-case-03.mp4`
- `dingsheng-case-04.mp4`
- `dingsheng-case-05.mp4`
- `dingsheng-case-06.mp4`
- `dingsheng-case-07.mp4`
- `dingsheng-case-08.mp4`
- `dingsheng-case-09.mp4`
- `dingsheng-case-10.mp4`

视频优化标准：

- 案例视频最长 10 秒。
- 输出分辨率约 960x540。
- 帧率 24fps。
- H.264 / AAC / MP4，启用 faststart，适合网页快速播放。
- 保留音频轨道；案例视频不再默认静音，客户点击播放可听到声音。

案例数据位置：

```text
app/data/site.js
```

案例城市包括：

- 广州
- 杭州
- 武汉
- 上海
- 成都
- 深圳
- 南京
- 厦门
- 郑州
- 青岛

## 9. 询盘表单与邮箱

询盘接口文件：

```text
app/api/inquiry/route.js
```

当前收件邮箱：

```text
347748243@qq.com
```

表单校验字段：

- Name 必填
- Email 必填并校验格式
- Phone 必填并校验国际电话格式
- Company 可选
- Country / Region 可选
- Project Requirement 可选
- Message 可选

重要注意：

询盘表单邮件发送功能已在 Vercel 配置并测试通过。

配置与验证记录：

- 2026-06-18 已在 Vercel Environment Variables 配置 QQ 邮箱 SMTP。
- `SMTP_HOST`、`SMTP_PORT`、`SMTP_PASS` 已用于 Production 和 Preview 环境。
- `SMTP_PASS` 只保存在 Vercel 环境变量里，不写入代码、不写入 GitHub、不写入文档。
- 已通过正式域名接口 `https://www.venueredesign.com/api/inquiry` 提交测试询盘。
- 接口返回 `{"ok":true}`。
- 已在 QQ 邮箱确认收到测试邮件，标题为 `New Banquet Hall Inquiry - Codex Test Lead - China`。

当前环境变量配置方式：

```text
SMTP_HOST=smtp.qq.com
SMTP_PORT=465
SMTP_PASS=<只保存在 Vercel 的 QQ 邮箱 SMTP 授权码>
```

代码默认使用 `347748243@qq.com` 作为发件邮箱和收件邮箱，因此当前 Vercel 只需要保留以上 SMTP 关键配置即可。后续如需改成企业邮箱，可再增加 `SMTP_USER`、`MAIL_FROM`、`MAIL_TO`。

注意：`SMTP_PASS` 不是 QQ 邮箱登录密码，而是 QQ 邮箱后台生成的 SMTP 授权码。如果 QQ 邮箱后台关闭 SMTP 服务、撤销授权码或更换密码导致授权码失效，需要重新生成授权码并更新 Vercel 的 `SMTP_PASS`。

如果未来 `SMTP_PASS` 缺失或失效，网站表单会提示：

```text
Email service is not configured yet.
```

## 10. SEO / GEO / AIO 布局

已做方向：

- 首页和核心页面加入 SEO Title、Meta Description。
- 网站有 sitemap 和 robots。
- 服务页围绕外贸客户理解重写，突出一站式 EPC 交付。
- 内容结构偏向 Google SEO、AI Overview、GEO/AIO 可理解性。
- 博客主题围绕采购决策、工程案例、设计选择、施工交付、宴会厅投资、酒店宴会厅改造等方向。

已有相关资料文件：

- `LEDUSS-宴会厅外贸独立站规划总案.md`
- `banquet-hall-seo-strategy.md`
- `seo-audit-results.json`
- `keyword-library.csv`
- `competitor-serp-analysis.csv`
- `LEDUSS-page-map.csv`
- `blog-content/`

后续建议：

- 每周发布 2-3 篇英文博客。
- 优先发布采购决策类、案例类、对比类、FAQ 类内容。
- 每篇文章加入 CTA、询盘入口、图片 ALT、FAQ。
- 后续可继续扩展国家页面，例如 Malaysia、UAE、Saudi Arabia、Qatar。

## 11. Google Ads 落地页

广告落地页路径：

```text
/google-ads-banquet-hall
```

正式访问：

```text
https://venueredesign.com/google-ads-banquet-hall
```

用途：

- 用于 Google Ads 投放。
- 不用于 SEO 长内容。
- 极简结构，围绕询盘转化。
- 页面设置为 `noindex, nofollow`，避免和官网 SEO 页面冲突。

页面目标：

- 3 秒内让客户知道业务。
- 大按钮、大 CTA。
- 简短卖点。
- 快速提交询盘。

## 12. WhatsApp 按钮

组件文件：

```text
app/components/FloatingWhatsAppButton.jsx
```

链接格式：

```text
https://wa.me/8618211506520?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details.
```

要求：

- 固定在右下角。
- 桌面端和移动端都显示。
- 点击后打开 WhatsApp App 或网页版。

## 13. 下次继续开发时给 Codex 的提示词

可以直接复制以下内容给 Codex：

```text
请继续优化我的外贸独立站项目。
项目目录：/Users/mac/Documents/宴会厅网站搭建项目
品牌：DINGSHENG / 广东鼎胜设计有限公司
网站：venueredesign.com
Vercel 项目：https://vercel.com/leduss-team/venueredesign
GitHub 仓库：https://github.com/18928484656/banquet-hall-independent-site
核心业务：宴会厅设计、婚礼堂设计、酒店宴会厅改造、EPC 一站式交付，中国设计师、中国工程师、中国工厂采购、中国施工团队全球上门安装。
请先读取 项目交接资料-venueredesign.md，再继续操作。
```

## 14. 当前待办事项

高优先级：

- 等 DNS 全球缓存刷新后，确认 `https://venueredesign.com` 和 `https://www.venueredesign.com` 都正常打开。
- 在 Vercel Domains 页面确认两个正式域名变成 Valid Configuration。

中优先级：

- 继续补充真实项目照片、工厂照片、施工照片、材料细节图。
- 给每个案例补充更真实的工程过程图。
- 增加更多英文博客文章并做内链。
- 给服务页增加更多结构化 FAQ。

低优先级：

- 后续接入 Google Analytics / Google Search Console。
- 接入 Google Ads 转化追踪。
- 接入 Meta Pixel 或 TikTok Pixel。
- 增加多语言版本。

## 15. 不要随便改的地方

- 不要删除 `public/assets/videos/` 里的案例视频，除非确定要替换。
- 不要删除 `app/data/company.js`，这是全站联系方式和品牌信息来源。
- 不要随便修改 DNS，当前记录应保持 Vercel 推荐配置。
- 不要把 QQ 邮箱授权码写进 GitHub 代码里，只能放到 Vercel Environment Variables。
