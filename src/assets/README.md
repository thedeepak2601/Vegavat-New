# `src/assets`

Local files that are **imported into components** and processed by the bundler /
`next/image` (hashing, optimization, dimension inference).

```tsx
import logo from "@/assets/images/logo.svg";
import Image from "next/image";

<Image src={logo} alt="Vegavat" />;
```

- `images/`, logos, illustrations, photos shipped with the app.
- Drop your brand logo here as `images/logo.png` and import it where needed.

## `assets/` vs `public/`

| Need | Folder | How it's referenced |
| --- | --- | --- |
| Imported + optimized (component images) | `src/assets` | `import img from "@/assets/..."` |
| Served by a fixed public URL (favicon, robots.txt, og-image, downloads) | `public/` | `/favicon.ico`, `<img src="/og.png">` |

The current UI logo is an inline SVG component ([`src/components/Logo.tsx`](../components/Logo.tsx))
so it can be themed and animated; `images/logo.svg` here is the same mark as a
standalone, importable asset.
