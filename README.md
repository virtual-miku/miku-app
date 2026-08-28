<div align="center">

# Miku

Personal profile site for [miku.my.id](https://miku.my.id/)

[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)

</div>

## Commands

| Command             | Action                                       |
| :------------------ | :------------------------------------------- |
| `npm install`       | Install dependencies                         |
| `npm start`         | Start the dev server at `localhost:4321`     |
| `npm run dev`       | Start the dev server at `localhost:4321`     |
| `npm run build`     | Build the production site to `./dist/`       |
| `npm run preview`   | Preview the production build locally         |
| `npm run astro ...` | Run Astro CLI commands                       |

## Structure

```text
src/
├── assets/                   # SVG assets
├── components/
│   ├── Card/
│   │   ├── Card.astro        # profile card
│   │   └── Card.scss         # card styles
│   └── CursorTrail/
│       ├── CursorTrail.astro # cursor trail behavior
│       └── CursorTrail.scss  # cursor trail styles
├── pages/                    # index
├── styles/
│   └── global.scss           # base & body styles
└── env.d.ts
public/                       # Static assets