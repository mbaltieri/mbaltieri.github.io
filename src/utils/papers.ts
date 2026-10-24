import type { ImageMetadata } from 'astro';

// The pages of the papers shown on the home page, rendered from their PDFs into
// src/assets/papers/<name>/01.webp, 02.webp, ... by .scripts/render-papers.sh.

const pages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/papers/*/*.webp', { eager: true });

/** The pages of the paper in src/assets/papers/<name>/, in order. */
export const paperPages = (name: string): Array<ImageMetadata> =>
  Object.entries(pages)
    .filter(([path]) => path.startsWith(`/src/assets/papers/${name}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, page]) => page.default);
