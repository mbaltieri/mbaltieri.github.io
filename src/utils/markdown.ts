import { createMarkdownProcessor } from '@astrojs/markdown-remark';

let renderer: Awaited<ReturnType<typeof createMarkdownProcessor>> | undefined;

/** Renders Markdown from a data file as HTML. */
export const markdown = async (text = ''): Promise<string> => {
  renderer ??= await createMarkdownProcessor();
  return (await renderer.render(text.trim())).code.trim();
};

/** Renders a short Markdown text from a data file (a link, some emphasis) as inline HTML. */
export const inlineMarkdown = async (text = ''): Promise<string> =>
  (await markdown(text)).replace(/^<p>([\s\S]*)<\/p>$/, '$1');

/** Escapes text for the widgets whose props are HTML (titles and descriptions use `set:html`). */
export const escapeHtml = (text = ''): string =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
