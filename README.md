# Manuel Baltieri Website

Personal academic website for Manuel Baltieri, built with [Astro](https://astro.build) and the [AstroWind](https://github.com/onwidget/astrowind) template.

## Requirements

- Node.js 22, tracked in `.nvmrc`. AstroWind asks for 22.22.3 or newer and npm warns on older 22.x releases. The locked Astro version (7.3.1) builds on 22.12.
- Ruby, only for the link check below.

## Local development

Install the dependencies from the lockfile:

```sh
npm ci
```

Run the development server, at `http://localhost:4321/`:

```sh
npm run dev
```

Build the site into `dist/` and look at the result:

```sh
npm run build
npm run preview
```

Check types, lint and formatting, then the internal links and assets of the build:

```sh
npm run check
LC_ALL=en_US.UTF-8 ruby .scripts/check-built-site.rb dist
```

## Where things are

| What                                   | Where                                                                    |
| -------------------------------------- | ------------------------------------------------------------------------ |
| Site name, address, blog switch        | `src/config.yaml`                                                        |
| Menu and footer                        | `src/navigation.ts`                                                      |
| Publications                           | `src/data/publications.yaml`                                             |
| Areas of research and their questions  | `src/data/research.yaml`                                                 |
| Resume (and `/assets/resume.json`)     | `src/data/resume.yaml`                                                   |
| Home, Research, Publications, Resume   | `src/pages/index.astro`, `src/pages/research/`, `src/pages/resume.astro` |
| Talks and podcasts                     | `src/data/talks.yaml`                                                    |
| PDFs and images linked by address      | `public/assets/`, served at `/assets/...`                                |
| Page images                            | `src/assets/images/`, optimised at build time                            |
| Pages of the papers in Selected work   | `src/assets/papers/`, made from the PDFs by `.scripts/render-papers.sh`  |
| Share previews of the main pages       | `src/assets/images/social/`, made by `.scripts/render-social-cards.sh`   |
| Redirects from old addresses           | `astro.config.ts`                                                        |
| Visit counts (off until set)           | `analytics.vendors.goatcounter.code` in `src/config.yaml`                |

The addresses of the Jekyll site are kept. News, the projects and Vision are retired, and their addresses redirect to where their content now is (`astro.config.ts`).

## Deployment

GitHub Actions (`.github/workflows/astro-gh-pages.yml`) checks and builds the site and deploys `dist/` to GitHub Pages on pushes to `master`. Pull requests run the same build without deploying.

## Credits

The template is AstroWind (copyright onWidget, MIT licence, see `LICENSE.md`), taken from `onwidget/astrowind` at commit `14e1a691`.
