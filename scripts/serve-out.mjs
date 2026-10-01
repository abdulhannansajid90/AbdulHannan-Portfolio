import http from 'http';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, '..', 'out');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath.endsWith('/')) {
    reqPath += 'index.html';
  } else if (!path.extname(reqPath)) {
    if (fs.existsSync(path.join(outDir, reqPath, 'index.html'))) {
      reqPath = path.join(reqPath, 'index.html');
    } else if (fs.existsSync(path.join(outDir, reqPath + '.html'))) {
      reqPath += '.html';
    }
  }

  const filePath = path.join(outDir, reqPath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      const notFoundPath = path.join(outDir, '404.html');
      fs.readFile(notFoundPath, (err404, data404) => {
        if (!err404) {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(data404);
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        }
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const acceptEncoding = req.headers['accept-encoding'] || '';

    // Cache static assets immutable like Vercel/Netlify
    const isStaticAsset = reqPath.includes('_next/static') || ext === '.webp' || ext === '.woff2';
    const cacheControl = isStaticAsset
      ? 'public, max-age=31536000, immutable'
      : 'public, max-age=0, must-revalidate';

    const headers = {
      'Content-Type': contentType,
      'Cache-Control': cacheControl,
    };

    const isCompressible = /text|javascript|json|xml|svg/.test(contentType);

    if (isCompressible && acceptEncoding.includes('gzip')) {
      headers['Content-Encoding'] = 'gzip';
      res.writeHead(200, headers);
      const rawStream = fs.createReadStream(filePath);
      const gzip = zlib.createGzip({ level: 6 });
      rawStream.pipe(gzip).pipe(res);
    } else {
      headers['Content-Length'] = stats.size;
      res.writeHead(200, headers);
      fs.createReadStream(filePath).pipe(res);
    }
  });
});

const PORT = 3000;
server.listen(PORT, '127.0.0.1', () => {
  console.log(`Optimized static server running with gzip & caching at http://127.0.0.1:${PORT}`);
});
