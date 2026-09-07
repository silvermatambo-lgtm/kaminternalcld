# Cloudflare Pages deployment

Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
Node.js: 20

The public/_redirects file provides SPA fallback for direct visits to /about, /services, /gallery and /contact.
The wrangler.toml file identifies dist as the Pages build output directory.
