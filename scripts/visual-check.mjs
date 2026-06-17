import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const outDir = new URL("../visual-check/", import.meta.url);
await fs.mkdir(outDir, { recursive: true });
const desktopPath = fileURLToPath(new URL("desktop-home.png", outDir));
const mobilePath = fileURLToPath(new URL("mobile-home.png", outDir));

const browser = await chromium.launch({ headless: true });

const desktop = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
await desktop.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
await desktop.screenshot({ path: desktopPath, fullPage: false });
await desktop.locator(".mega-trigger").hover();
await desktop.waitForTimeout(350);
await desktop.screenshot({ path: fileURLToPath(new URL("desktop-mega-menu.png", outDir)), fullPage: false });
const megaMetrics = await desktop.evaluate(() => {
  const menu = document.querySelector(".mega-menu-inner")?.getBoundingClientRect();
  return menu
    ? {
        left: Math.round(menu.left),
        right: Math.round(menu.right),
        width: Math.round(menu.width),
        centeredOffset: Math.round(menu.left + menu.width / 2 - window.innerWidth / 2),
        overflowsViewport: menu.left < 0 || menu.right > window.innerWidth
      }
    : null;
});
const desktopMetrics = await desktop.evaluate(() => ({
  title: document.title,
  bodyWidth: document.body.scrollWidth,
  viewportWidth: window.innerWidth,
  h1: document.querySelector("h1")?.textContent,
  horizontalOverflow: document.body.scrollWidth > window.innerWidth
}));

const mobile = await browser.newPage({
  viewport: { width: 390, height: 900 },
  isMobile: true,
  deviceScaleFactor: 2
});
await mobile.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
await mobile.screenshot({ path: mobilePath, fullPage: false });
const mobileMetrics = await mobile.evaluate(() => ({
  bodyWidth: document.body.scrollWidth,
  viewportWidth: window.innerWidth,
  heroHeight: document.querySelector(".hero")?.getBoundingClientRect().height,
  horizontalOverflow: document.body.scrollWidth > window.innerWidth
}));

const routes = ["/", "/services", "/projects", "/design-styles", "/contact"];
const routeMetrics = [];
for (const route of routes) {
  const routePage = await browser.newPage({ viewport: { width: 1366, height: 900 } });
  await routePage.goto(`http://127.0.0.1:3000${route}`, { waitUntil: "networkidle" });
  routeMetrics.push(
    await routePage.evaluate((currentRoute) => ({
      route: currentRoute,
      title: document.title,
      bodyWidth: document.body.scrollWidth,
      viewportWidth: window.innerWidth,
      horizontalOverflow: document.body.scrollWidth > window.innerWidth,
      h1: document.querySelector("h1")?.textContent
    }), route)
  );
  await routePage.close();
}

await browser.close();

console.log(JSON.stringify({ desktopMetrics, mobileMetrics, megaMetrics, routeMetrics }, null, 2));
