import http from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), 'dist');
const port = Number(process.env.PORT || 3000);
const host = '0.0.0.0';

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
};

function safePath(urlPath) {
  const decoded = decodeURIComponent((urlPath || '/').split('?')[0]);
  const clean = normalize(decoded).replace(/^([.][.][/\\])+/, '').replace(/^[/\\]+/, '');
  return join(root, clean);
}

const server = http.createServer((req, res) => {
  if (!existsSync(root)) {
    res.writeHead(503, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Build not found. Run: npm run build');
    return;
  }

  let filePath = safePath(req.url);
  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, 'index.html');
  }

  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    filePath = join(root, 'index.html');
  }

  const ext = extname(filePath).toLowerCase();
  const headers = {
    'Content-Type': mime[ext] || 'application/octet-stream',
    'X-Content-Type-Options': 'nosniff',
  };

  if (filePath.includes(`${join(root, 'assets')}`)) {
    headers['Cache-Control'] = 'public, max-age=31536000, immutable';
  } else if (ext === '.html') {
    headers['Cache-Control'] = 'no-cache';
  }

  res.writeHead(200, headers);
  if (req.method === 'HEAD') return res.end();
  createReadStream(filePath).pipe(res);
});

server.listen(port, host, () => {
  console.log(`Server listening on ${host}:${port}`);
});
