# Lianmin 状态页

- 入口：https://lianmin-status.pages.dev
- Worker：`lianmin-uptime-worker`，每分钟检查博客一次。
- D1：`lianmin-uptime`，Worker 与 Pages 共用。
- 免费范围：Workers Free、D1、SQLite Durable Objects；不启用付费套餐、R2 或自定义域名。
- 页面监控配置：`uptime.config.ts`。当前不发送外部通知。

## 更新

Node.js 22，先 `npm ci` 和 `npm ci --prefix worker`。Wrangler 登录需要 Workers、Pages、D1 权限。

Windows 上分两步构建，避免 next-on-pages 直接启动 npx 的兼容问题：

```powershell
$env:CI='1'
$env:PATH='C:\Program Files\Git\bin;'+$env:PATH
npx --yes vercel@41.7.8 build --yes
npx @cloudflare/next-on-pages --skip-build
npx wrangler deploy --config worker/wrangler.toml
npx wrangler pages deploy .vercel/output/static --project-name lianmin-status --branch main
```

首次建表使用根目录 `init.sql`。修改后提交并推送自己的 GitHub 仓库；推送本身不代表已经发布。上游 Terraform 工作流不适用于本实例。

## 验证

访问 `/` 和 `/api/data`，确认返回 200，且 `updatedAt` 持续更新。2026-09-17 已验证博客 `up=true`。Cloudflare 探测节点的结果不代表中国大陆所有网络都可访问。
