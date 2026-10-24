import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

// Publications, Talks and Projects are reached from the Research page.
export const headerData = {
  links: [
    { text: 'News', href: getBlogPermalink() },
    { text: 'Research', href: getPermalink('/research') },
    { text: 'Vision', href: getPermalink('/vision') },
    { text: 'Resume', href: getPermalink('/resume') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Site',
      links: [
        { text: 'News', href: getBlogPermalink() },
        { text: 'Vision', href: getPermalink('/vision') },
        { text: 'Resume', href: getPermalink('/resume') },
      ],
    },
    {
      title: 'Research',
      links: [
        { text: 'Overview', href: getPermalink('/research') },
        { text: 'Publications', href: getPermalink('/research/publications') },
        { text: 'Talks', href: getPermalink('/research/talks') },
        { text: 'Projects', href: getPermalink('/projects') },
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
    { ariaLabel: 'News feed', icon: 'tabler:rss', href: getAsset('/feed.xml') },
  ],
  footNote: `© 2026. All rights reserved.`,
};
