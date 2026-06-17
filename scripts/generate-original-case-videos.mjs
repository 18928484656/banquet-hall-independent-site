import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const outDir = path.resolve("public/assets/videos");

const cases = [
  {
    slug: "ai-shenzhen-crystal-dream-hall",
    title: "Shenzhen Crystal Dream Wedding Hall",
    city: "Shenzhen, Guangdong",
    palette: ["#f8f6ee", "#d8b75d", "#6f8798", "#111111"],
    theme: "crystal-white",
    headline: "CRYSTAL DREAM",
    caption: "White crystal ceremony hall · 620 m2"
  },
  {
    slug: "ai-guangzhou-golden-royal-ballroom",
    title: "Guangzhou Golden Royal Ballroom",
    city: "Guangzhou, Guangdong",
    palette: ["#0b0907", "#d5a83a", "#8a5a1e", "#fff4cf"],
    theme: "black-gold",
    headline: "GOLDEN ROYAL",
    caption: "Luxury black-gold ballroom · 980 m2"
  },
  {
    slug: "ai-hangzhou-ocean-light-banquet-hall",
    title: "Hangzhou Ocean Light Banquet Hall",
    city: "Hangzhou, Zhejiang",
    palette: ["#061826", "#25b8d8", "#d7f8ff", "#0b5c84"],
    theme: "ocean",
    headline: "OCEAN LIGHT",
    caption: "Immersive blue ceremony hall · 760 m2"
  },
  {
    slug: "ai-chengdu-multifunction-event-hall",
    title: "Chengdu Multifunction Event Hall",
    city: "Chengdu, Sichuan",
    palette: ["#101214", "#e2bd65", "#7d8a90", "#f8f0dc"],
    theme: "multi-function",
    headline: "MULTI-FUNCTION",
    caption: "Wedding + conference operation · 540 m2"
  },
  {
    slug: "ai-suzhou-new-chinese-garden-hall",
    title: "Suzhou New Chinese Garden Hall",
    city: "Suzhou, Jiangsu",
    palette: ["#101612", "#caa769", "#efe1c3", "#2e5d4b"],
    theme: "new-chinese",
    headline: "NEW CHINESE",
    caption: "Garden-style wedding hall · 580 m2"
  },
  {
    slug: "ai-xian-guochao-crystal-hall",
    title: "Xi'an Guochao Crystal Banquet Hall",
    city: "Xi'an, Shaanxi",
    palette: ["#160807", "#d62828", "#d6aa52", "#f9ead7"],
    theme: "guochao",
    headline: "GUOCHAO CRYSTAL",
    caption: "Modern cultural banquet space · 880 m2"
  },
  {
    slug: "ai-wuhan-starry-technology-hall",
    title: "Wuhan Starry Technology Wedding Hall",
    city: "Wuhan, Hubei",
    palette: ["#070b1c", "#7357ff", "#2ad4ff", "#f8f7ff"],
    theme: "starry-tech",
    headline: "STARRY TECH",
    caption: "Immersive LED wedding hall · 1050 m2"
  },
  {
    slug: "ai-foshan-light-luxury-hall",
    title: "Foshan Light Luxury Banquet Hall",
    city: "Foshan, Guangdong",
    palette: ["#14110e", "#c8a058", "#e8dfcf", "#73675d"],
    theme: "light-luxury",
    headline: "LIGHT LUXURY",
    caption: "Compact premium venue · 480 m2"
  },
  {
    slug: "ai-nanjing-palace-wedding-ballroom",
    title: "Nanjing Palace Wedding Ballroom",
    city: "Nanjing, Jiangsu",
    palette: ["#120d12", "#cba24a", "#f0dcb4", "#7a1f2c"],
    theme: "palace",
    headline: "PALACE BALLROOM",
    caption: "Grand wedding banquet hall · 1000 m2"
  },
  {
    slug: "ai-sanya-resort-ocean-banquet-hall",
    title: "Sanya Resort Ocean Banquet Hall",
    city: "Sanya, Hainan",
    palette: ["#041f2f", "#12a7be", "#e8f6f1", "#d8b75d"],
    theme: "resort-ocean",
    headline: "RESORT OCEAN",
    caption: "Destination wedding venue · 720 m2"
  }
];

const html = String.raw`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      body { margin: 0; background: #000; }
      canvas { width: 1280px; height: 720px; display: block; }
    </style>
  </head>
  <body>
    <canvas id="stage" width="1280" height="720"></canvas>
    <script>
      const canvas = document.getElementById("stage");
      const ctx = canvas.getContext("2d");
      const W = canvas.width;
      const H = canvas.height;

      function ease(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      function hexToRgba(hex, alpha) {
        const clean = hex.replace("#", "");
        const bigint = parseInt(clean, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
      }

      function drawHallFrame(data, progress, posterMode = false) {
        const p = posterMode ? 0.62 : progress;
        const [bg, gold, light, accent] = data.palette;
        const zoom = 1 + ease(p) * 0.08;
        ctx.save();
        ctx.clearRect(0, 0, W, H);

        const grad = ctx.createRadialGradient(W * 0.5, H * 0.36, 60, W * 0.5, H * 0.48, 850);
        grad.addColorStop(0, hexToRgba(light, 0.42));
        grad.addColorStop(0.34, hexToRgba(gold, 0.18));
        grad.addColorStop(1, bg);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);

        ctx.translate(W / 2, H / 2);
        ctx.scale(zoom, zoom);
        ctx.translate(-W / 2, -H / 2);

        const centerX = W / 2;
        const horizon = H * 0.38;
        const floorY = H * 0.88;

        ctx.fillStyle = hexToRgba("#000000", 0.28);
        ctx.fillRect(0, 0, W, H);

        // Ceiling ribs and chandelier curtain.
        for (let i = -9; i <= 9; i++) {
          const x = centerX + i * 58;
          const sway = Math.sin(p * Math.PI * 2 + i) * 10;
          ctx.beginPath();
          ctx.moveTo(centerX, horizon - 45);
          ctx.quadraticCurveTo(x + sway, H * 0.16, x * 1.05 - centerX * 0.05, 0);
          ctx.strokeStyle = hexToRgba(gold, 0.35 + (Math.abs(i) < 4 ? 0.25 : 0));
          ctx.lineWidth = Math.max(1.5, 5 - Math.abs(i) * 0.25);
          ctx.stroke();
        }

        for (let i = 0; i < 72; i++) {
          const x = 90 + i * 15.4;
          const y = 36 + ((i * 37) % 95);
          const len = 38 + ((i * 19) % 86);
          ctx.strokeStyle = hexToRgba(light, 0.18 + ((i % 5) / 12));
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + Math.sin(p * 6 + i) * 4, y + len);
          ctx.stroke();
          ctx.fillStyle = hexToRgba(gold, 0.45);
          ctx.beginPath();
          ctx.arc(x, y + len + 4, 2.2 + (i % 3), 0, Math.PI * 2);
          ctx.fill();
        }

        // Stage arch.
        ctx.save();
        ctx.translate(centerX, horizon + 98);
        for (let r = 0; r < 6; r++) {
          ctx.beginPath();
          ctx.arc(0, 0, 164 + r * 28, Math.PI * 1.03, Math.PI * 1.97);
          ctx.strokeStyle = hexToRgba(r % 2 ? light : gold, 0.72 - r * 0.08);
          ctx.lineWidth = 12 - r;
          ctx.stroke();
        }
        ctx.restore();

        const stageGrad = ctx.createLinearGradient(centerX - 220, horizon + 150, centerX + 220, horizon + 280);
        stageGrad.addColorStop(0, hexToRgba(accent, 0.38));
        stageGrad.addColorStop(0.5, hexToRgba(gold, 0.82));
        stageGrad.addColorStop(1, hexToRgba(accent, 0.38));
        ctx.fillStyle = stageGrad;
        ctx.beginPath();
        ctx.ellipse(centerX, horizon + 238, 235, 48, 0, 0, Math.PI * 2);
        ctx.fill();

        // Aisle and floor depth.
        ctx.fillStyle = hexToRgba("#050505", 0.58);
        ctx.beginPath();
        ctx.moveTo(centerX - 86, horizon + 250);
        ctx.lineTo(centerX + 86, horizon + 250);
        ctx.lineTo(W * 0.78, floorY);
        ctx.lineTo(W * 0.22, floorY);
        ctx.closePath();
        ctx.fill();
        for (let i = 0; i < 9; i++) {
          const y = horizon + 280 + i * 43;
          const width = 110 + i * 52;
          ctx.strokeStyle = hexToRgba(gold, 0.42 - i * 0.025);
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(centerX - width, y);
          ctx.lineTo(centerX + width, y);
          ctx.stroke();
        }

        // Tables as glowing silhouettes.
        for (let row = 0; row < 5; row++) {
          const y = horizon + 285 + row * 66;
          const count = 5 + row * 2;
          for (let i = 0; i < count; i++) {
            const side = i < count / 2 ? -1 : 1;
            const offset = Math.abs(i - (count - 1) / 2);
            const x = centerX + side * (210 + offset * 78 + row * 15);
            const size = 26 + row * 3;
            ctx.fillStyle = hexToRgba("#050505", 0.52);
            ctx.beginPath();
            ctx.ellipse(x, y, size * 1.55, size * 0.58, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = hexToRgba(gold, 0.36);
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.fillStyle = hexToRgba(light, 0.34);
            ctx.beginPath();
            ctx.arc(x, y - 8, 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Theme-specific accents.
        if (data.theme.includes("ocean")) {
          for (let i = 0; i < 6; i++) {
            ctx.beginPath();
            ctx.arc(centerX, horizon + 90, 230 + i * 38, Math.PI * 1.06, Math.PI * 1.94);
            ctx.strokeStyle = hexToRgba("#55d7ff", 0.18);
            ctx.lineWidth = 6;
            ctx.stroke();
          }
        }
        if (data.theme.includes("chinese") || data.theme.includes("guochao")) {
          ctx.strokeStyle = hexToRgba(gold, 0.5);
          ctx.lineWidth = 6;
          for (let i = 0; i < 4; i++) {
            ctx.strokeRect(centerX - 370 + i * 245, horizon + 35, 120, 170);
          }
        }
        if (data.theme.includes("starry")) {
          for (let i = 0; i < 95; i++) {
            const x = (i * 97) % W;
            const y = 40 + ((i * 43) % 260);
            const twinkle = 0.2 + Math.abs(Math.sin(p * 8 + i)) * 0.65;
            ctx.fillStyle = hexToRgba("#ffffff", twinkle);
            ctx.fillRect(x, y, 2, 2);
          }
        }

        // Vignette.
        const vignette = ctx.createRadialGradient(centerX, H * 0.45, 180, centerX, H * 0.45, 750);
        vignette.addColorStop(0, "rgba(0,0,0,0)");
        vignette.addColorStop(1, "rgba(0,0,0,0.72)");
        ctx.fillStyle = vignette;
        ctx.fillRect(0, 0, W, H);

        // Project overlay.
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = hexToRgba("#000000", 0.42);
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = gold;
        ctx.fillRect(78, 86, 96, 7);
        ctx.font = "700 56px Arial, sans-serif";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(data.headline, 78, 170);
        ctx.font = "500 25px Arial, sans-serif";
        ctx.fillStyle = hexToRgba("#ffffff", 0.86);
        ctx.fillText(data.caption, 80, 215);
        ctx.font = "600 21px Arial, sans-serif";
        ctx.fillStyle = hexToRgba(gold, 0.96);
        ctx.fillText(data.city + " · 2025 DINGSHENG PROJECT CONCEPT", 80, 255);
        ctx.restore();
      }

      async function recordCase(data) {
        const durationMs = 6200;
        const fps = 30;
        const stream = canvas.captureStream(fps);
        const chunks = [];
        const recorder = new MediaRecorder(stream, {
          mimeType: "video/webm;codecs=vp9",
          videoBitsPerSecond: 6500000
        });
        recorder.ondataavailable = (event) => {
          if (event.data.size) chunks.push(event.data);
        };
        const done = new Promise((resolve) => {
          recorder.onstop = async () => {
            const blob = new Blob(chunks, { type: "video/webm" });
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
          };
        });
        recorder.start();
        const start = performance.now();
        await new Promise((resolve) => {
          function frame(now) {
            const progress = Math.min(1, (now - start) / durationMs);
            drawHallFrame(data, progress, false);
            if (progress < 1) requestAnimationFrame(frame);
            else resolve();
          }
          requestAnimationFrame(frame);
        });
        recorder.stop();
        const videoDataUrl = await done;
        drawHallFrame(data, 0.62, true);
        const posterDataUrl = canvas.toDataURL("image/png");
        return { slug: data.slug, videoDataUrl, posterDataUrl };
      }

      window.generateAll = async (items) => {
        const results = [];
        for (const item of items) {
          results.push(await recordCase(item));
        }
        return results;
      };
    </script>
  </body>
</html>`;

function decodeDataUrl(dataUrl) {
  return Buffer.from(dataUrl.split(",")[1], "base64");
}

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
await page.setContent(html, { waitUntil: "load" });
const results = await page.evaluate((items) => window.generateAll(items), cases);
await browser.close();

for (const result of results) {
  await fs.writeFile(path.join(outDir, `${result.slug}.webm`), decodeDataUrl(result.videoDataUrl));
  await fs.writeFile(path.join(outDir, `${result.slug}.png`), decodeDataUrl(result.posterDataUrl));
}

console.log(`Generated ${results.length} original case videos in ${outDir}`);
