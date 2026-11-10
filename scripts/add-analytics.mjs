import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// Tag the final static export so public/grants.html and public/survey/index.html
// receive the same configuration as the Next.js routes.
const config = JSON.parse(await readFile(new URL("../analytics.config.json", import.meta.url), "utf8"));
const measurementId = (process.env.GA_MEASUREMENT_ID ?? config.measurementId ?? "").trim();
if (measurementId && !/^G-[A-Z0-9]+$/.test(measurementId)) {
  throw new Error("GA_MEASUREMENT_ID must be a Google Analytics measurement ID starting with G-.");
}

const start = "<!-- foundation-analytics:start -->";
const end = "<!-- foundation-analytics:end -->";
const block = /<!-- foundation-analytics:start -->[\s\S]*?<!-- foundation-analytics:end -->\s*/g;
const snippet = measurementId ? `${start}
<script>
(function () {
  // Local previews and Render preview URLs must not inflate production reports.
  if (!["montanakush.org", "www.montanakush.org"].includes(window.location.hostname)) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", "${measurementId}", {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
  var tag = document.createElement("script");
  tag.async = true;
  tag.src = "https://www.googletagmanager.com/gtag/js?id=${measurementId}";
  document.head.appendChild(tag);
})();
</script>
${end}
` : "";

let count = 0;
async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await visit(path);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      const original = await readFile(path, "utf8");
      const clean = original.replace(block, "");
      if (!/<\/head>/i.test(clean)) throw new Error(`Missing head element: ${path}`);
      const updated = clean.replace(/<\/head>/i, `${snippet}</head>`);
      if (updated !== original) await writeFile(path, updated);
      count++;
    }
  }
}
await visit(fileURLToPath(new URL("../out", import.meta.url)));
console.log(measurementId
  ? `Google Analytics ${measurementId}: tagged ${count} HTML pages (production domains only).`
  : `Google Analytics inactive: measurement ID not configured (${count} HTML pages checked).`);
