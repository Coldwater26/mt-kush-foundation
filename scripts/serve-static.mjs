import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../out", import.meta.url));
const port = Number(process.env.PORT || 3000);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".ico": "image/x-icon"
};

function resolvePath(urlPath) {
  const raw = decodeURIComponent(urlPath.split("?")[0]);
  const clean = normalize(raw === "/" ? "index.html" : raw).replace(/^[/\\]/, "").replace(/^(\.\.[/\\])+/, "");
  const direct = join(root, clean);
  const flatHtml = join(root, `${clean}.html`);
  const html = join(root, clean, "index.html");
  const fallback = join(root, "index.html");

  if (existsSync(direct)) return direct;
  if (existsSync(flatHtml)) return flatHtml;
  if (existsSync(html)) return html;
  return fallback;
}

createServer(async (request, response) => {
  try {
    const filePath = resolvePath(request.url || "/");
    const info = await stat(filePath);

    if (!info.isFile()) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": types[extname(filePath)] || "application/octet-stream",
      "Content-Length": info.size
    });
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(500);
    response.end("Server error");
  }
}).listen(port, () => {
  console.log(`MT Kush Foundation preview: http://localhost:${port}`);
});
