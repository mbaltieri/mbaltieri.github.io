import { getPermalink } from './utils/permalinks';

// Publications and Talks are reached from the Research page.
export const headerData = {
  links: [
    { text: 'Research', href: getPermalink('/research') },
    { text: 'Resume', href: getPermalink('/resume') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Site',
      links: [{ text: 'Resume', href: getPermalink('/resume') }],
    },
    {
      title: 'Research',
      links: [
        { text: 'Overview', href: getPermalink('/research') },
        { text: 'Publications', href: getPermalink('/research/publications') },
        { text: 'Talks', href: getPermalink('/research/talks') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:manuel_baltieri@araya.org' },
    {
      ariaLabel: 'Google Scholar',
      icon: 'tabler:school',
      href: 'https://scholar.google.com/citations?user=v6v1A_YAAAAJ',
    },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/mbaltieri' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/manuelbaltieri/' },
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/manuelbaltieri.bsky.social' },
    { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: 'https://mathstodon.xyz/@manuelbaltieri' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/manuelbaltieri' },
  ],
  footNote: `© 2026. All rights reserved.`,
};
