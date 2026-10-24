import yaml from 'js-yaml';

import raw from '~/data/talks.yaml?raw';

// src/data/talks.yaml: talks and podcasts. Its own comments say what each field is.

export interface TalkLinks {
  slides?: string;
  recording?: string;
  link?: string;
}

export interface Talk extends TalkLinks {
  title?: string;
  event: string;
  place?: string;
  date: string;
  kind: 'invited' | 'contributed' | 'podcast';
  note?: string;
  parts?: Array<TalkLinks & { title: string }>;
  occasions?: Array<{ event: string; place?: string; date: string }>;
}

export const talks = yaml.load(raw) as Array<Talk>;

const kindNames: Record<Talk['kind'], string> = {
  invited: 'Invited talk',
  contributed: 'Contributed talk',
  podcast: 'Podcast',
};

/** How a talk is described after its date: "Invited talk", "Contributed talk", "Podcast". */
export const talkType = (talk: Talk): string => kindNames[talk.kind];

/** The links of a talk, or of a part of one, in a fixed order and under fixed names. */
export const talkLinks = (item: TalkLinks, kind?: Talk['kind']): Array<{ text: string; href: string }> =>
  [
    item.slides ? { text: 'Slides', href: item.slides } : undefined,
    item.recording ? { text: 'Recording', href: item.recording } : undefined,
    item.link ? { text: kind === 'podcast' ? 'Podcast' : 'Event', href: item.link } : undefined,
  ].filter((link): link is { text: string; href: string } => Boolean(link));

const monthYear = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', timeZone: 'UTC' });

/** "Feb 2026" for "2026-02". */
export const talkDate = (date: string): string => monthYear.format(new Date(`${date}-01T00:00:00Z`));

/** All talks, newest first (talks of the same month keep the order of the file). */
export const talksByDate = (): Array<Talk> =>
  talks
    .map((talk, index) => ({ talk, index }))
    .sort((a, b) => b.talk.date.localeCompare(a.talk.date) || a.index - b.index)
    .map(({ talk }) => talk);

/** The talks grouped by year, newest first. */
export const talksByYear = (): Array<{ year: number; items: Array<Talk> }> => {
  const years = new Map<number, Array<Talk>>();
  talksByDate().forEach((talk) => {
    const year = Number(talk.date.slice(0, 4));
    years.set(year, [...(years.get(year) ?? []), talk]);
  });
  return [...years].map(([year, items]) => ({ year, items }));
};

/** The filter buttons of the Talks page. The podcasts' filter is #podcasts, which old addresses use. */
export const talkFilters = (): Array<{ id: string; label: string }> => [
  { id: 'all', label: 'All' },
  { id: 'invited', label: 'Invited' },
  { id: 'contributed', label: 'Contributed' },
  { id: 'podcasts', label: 'Podcasts' },
];
