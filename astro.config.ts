import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, fontProviders } from 'astro/config';

import { unified } from '@astrojs/markdown-remark';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',

  // Addresses of the Jekyll site whose pages have moved or gone. The About page is gone: its
  // positions are on the Resume page.
  redirects: {
    '/about': '/resume/',
    // Vision and the projects were folded into the questions of the Research programme page.
    '/vision': '/research/',
    '/projects': '/research/',
    '/projects/2019-11-03-uncertainty': '/research/#uncertainty',
    '/projects/2022-06-18-theories-of-agency': '/research/#theories-of-agency',
    '/projects/2023-06-18-hybrid-life': '/research/#hybrid-life',
    '/projects/2025-10-01-aria-safe-ai': '/research/#physical-and-intentional-stance',
    '/projects/2026-10-01-boundaries': '/research/#boundaries',
    '/projects/2026-10-01-causality': '/research/#causality',
    '/projects/2026-10-01-internal-model-principle': '/research/#internal-model-principle',
    '/projects/2026-10-01-world-models': '/research/#world-models',
    '/research/presentations': '/research/talks/',
    '/research/editing': '/research/publications/#editing',
    '/projects/2021-01-09-friston-blankets': '/research/#boundaries',
    '/news/2022-06-01-publication-bbs': '/research/#boundaries',
    '/projects/2024-11-25-distentangled-representations': '/research/#causality',
    '/news/2024-12-01-publication-polr': '/research/#causality',
    '/projects/2025-02-01-bayesian-IMP': '/research/#internal-model-principle',
    // News is retired: each post goes to where its paper, talk or role now is.
    '/news': '/research/',
    '/news/2020-02-24-hybrid-life-iii': '/research/#hybrid-life',
    '/news/2020-03-21-wcci': '/research/publications/',
    '/news/2020-06-22-alife': '/research/publications/',
    '/news/2021-01-09-friston-blankets': '/research/#boundaries',
    '/news/2021-02-14-hybrid-life-iv': '/research/#hybrid-life',
    '/news/2021-05-20-topic-editor-entropy': '/research/publications/#editing',
    '/news/2021-05-29-special-issue-entropy': '/research/publications/#editing',
    '/news/2022-03-01-alife-2022': '/resume/#service',
    '/news/2022-03-17-hybrid-life-v': '/research/#hybrid-life',
    '/news/2022-07-08-consciousness-club': '/research/talks/',
    '/news/2022-07-13-assc-25': '/research/talks/',
    '/news/2023-01-08-winter-school-agency': '/research/#theories-of-agency',
    '/news/2023-01-15-chain-invited-talk': '/research/talks/',
    '/news/2023-03-01-alife-2023': '/resume/#service',
    '/news/2023-05-30-publication-wires': '/research/#hybrid-life',
    '/news/2023-10-17-cogs-invited-talk': '/research/talks/',
    '/news/2024-02-12-isal': '/resume/#experience',
    '/news/2024-04-02-what-alife-podcast': '/research/talks/#podcasts',
    '/news/2024-04-06-tais': '/research/talks/',
    '/news/2024-07-08-aware-and-alive': '/research/talks/',
    '/news/2024-09-05-mindful-machines-podcast': '/research/talks/#podcasts',
    '/news/2024-10-10-futura': '/research/talks/',
    '/news/2024-10-17-goal-directedness': '/research/talks/',
    '/news/2024-11-25-distentangled-representations': '/research/#causality',
    '/news/2025-01-08-chain-invited-talk': '/research/talks/',
    '/news/2025-03-01-alife-2025': '/resume/#service',
    '/news/2025-03-01-bayesian-IMP': '/research/#internal-model-principle',
    '/news/2025-03-06-iob-event': '/research/talks/',
    '/news/2025-04-23-breakthrough': '/research/talks/',
    '/news/2025-05-21-rlc': '/research/#world-models',
    '/news/2025-05-30-unifiedtheory': '/research/talks/',
    '/news/2025-10-01-aria': '/research/#physical-and-intentional-stance',
    '/news/2025-10-04-moc': '/research/talks/',
    '/news/2025-11-24-ai-safety': '/research/talks/',
    '/news/2026-02-20-iulm-agency': '/research/talks/',
    '/news/2026-04-30-icml-state-abstraction': '/research/#world-models',
    '/news/2026-07-09-bayesian-determinisation-act': '/research/#physical-and-intentional-stance',
    '/news/2026-07-16-action-unaware-agents': '/research/publications/',
    '/news/2026-07-30-stream-computation': '/research/publications/',
    '/news/2026-08-17-braitenberg-habitat-alife': '/research/#artificial-life',
    '/news/2026-08-24-world-models': '/research/#world-models',
    '/news/2026-08-30-mathematical-agents': '/research/#theories-of-agency',
  },

  // Prefetch links as they enter the viewport for snappier navigations
  // (works together with <ClientRouter />, which enables prefetch by default).
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  // Native Fonts API: self-hosts + subsets + preloads Inter and generates
  // metric-adjusted fallbacks. Injected via <Font /> in Layout.astro and
  // consumed through the `--font-inter` CSS variable in CustomStyles.astro.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Space Grotesk',
      cssVariable: '--font-space-grotesk',
      weights: ['500', '600'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],

  integrations: [
    sitemap(),
    mdx(),
    icon({
      // Local SVG icons (used as <Icon name="file-name" />) live next to the other assets.
      iconDir: 'src/assets/icons',
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      // csso off on purpose: its parser doesn't understand the media range
      // syntax Tailwind v4 emits for breakpoints (`@media (width>=48rem)`) and
      // silently drops every one of those blocks — the site then renders as if
      // all `md:`/`lg:` classes were missing. lightningcss parses it correctly.
      CSS: { csso: false, lightningcss: { minify: true } },
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    // Astro's default Sharp service handles local images.
    //
    // Most remote CDN images (Unsplash, Cloudinary, Imgix…) are routed by
    // src/components/common/Image.astro through `unpic`, which rewrites the
    // URL with CDN-side query parameters and serves it straight from the
    // provider — Astro never downloads it, so they don't need to be listed.
    //
    // `domains` only matters for remote URLs that fall through to Astro's
    // native <Image /> (i.e. providers Unpic can't detect, like Pixabay).
    // Listed entries are authorized to be processed by Sharp.
    // Unsplash is listed so post covers can be rendered as real 1200×626 Open Graph images.
    domains: ['cdn.pixabay.com', 'images.unsplash.com'],

    // Emit responsive styles for the native <Image layout=…> used by
    // src/components/common/Image.astro (local images). Utility classes on
    // each usage still win, since these styles use low-specificity selectors.
    responsiveStyles: true,
  },

  markdown: {
    processor: unified({
      remarkPlugins: [readingTimeRemarkPlugin],
      rehypePlugins: [responsiveTablesRehypePlugin],
    }),
    shikiConfig: {
      // Code blocks follow the site theme; see the `.astro-code` rules in tailwind.css.
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
