# litecoinconnect.github.io

Landing page for [LiteConnect](https://github.com/litecoinconnect/liteconnect),
a self-custody Litecoin wallet for Android.

Vite + React + TypeScript.

## Where it lives

- **https://litecoinconnect.github.io** — GitHub Pages, built and deployed by
  [the workflow](.github/workflows/deploy.yml) on every push to `main`.
- Vercel, from the same source.

The repository is named after the account, which is what makes Pages serve it
at the root of the domain instead of from a subdirectory. Rename it and the
build needs `PAGES_BASE` set again, or every asset 404s — see
[`vite.config.ts`](vite.config.ts).

```
npm install
npm run dev      # local development
npm run build    # production build into dist/
```

## Keeping it honest

Every fact the page states — version, download URL, APK hash, signing
certificate fingerprints, donation address — lives in [`src/data.ts`](src/data.ts)
and nowhere else. **After each wallet release, update that file**, or the page
starts publishing a hash that no longer matches the binary it links to, which is
worse than publishing no hash at all.

The values there came from:

```
sha256sum app-release.apk
apksigner verify --print-certs app-release.apk
```

## Screenshots

`public/shots/` holds real captures of the running app, not rendered mock-ups.
The phone frames are drawn in CSS, so a new capture can be dropped in without
redrawing a bezel.
