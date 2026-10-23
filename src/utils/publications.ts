import yaml from 'js-yaml';

import raw from '~/data/publications.yaml?raw';

export type PublicationKind = 'journal' | 'conference' | 'preprint' | 'commentary' | 'editing' | 'other';

/** One entry of src/data/publications.yaml (the file describes each field). */
export interface Publication {
  title: string;
  authors: string;
  venue?: string;
  year: number;
  kind: PublicationKind;
  type?: string;
  note?: string;
  selected?: boolean;
  publisher?: string;
  pdf?: string;
  preprint?: string;
}

export const publications = yaml.load(raw) as Array<Publication>;

/** The filter buttons of the Publications page, in order. `all` and `selected` are not kinds. */
export const publicationFilters: Array<{ id: 'all' | 'selected' | PublicationKind; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'selected', label: 'Selected' },
  { id: 'journal', label: 'Journal' },
  { id: 'conference', label: 'Conference' },
  { id: 'preprint', label: 'Preprint' },
  { id: 'commentary', label: 'Commentary' },
  { id: 'editing', label: 'Editing' },
  { id: 'other', label: 'Other' },
];

const kindNames: Record<PublicationKind, string> = {
  journal: 'Journal article',
  conference: 'Conference paper',
  preprint: 'Preprint',
  commentary: 'Commentary',
  editing: 'Edited volume',
  other: 'Other',
};

/** What is printed after the venue: the entry's own `type`, or the usual name of its kind. */
export const publicationType = (pub: Publication): string => pub.type ?? kindNames[pub.kind] ?? kindNames.other;

/** An entry has up to three links, always in this order and under these names. */
export const publicationLinks = (pub: Publication): Array<{ text: string; href: string }> =>
  (
    [
      ['publisher', 'Publisher'],
      ['pdf', 'PDF'],
      ['preprint', 'Preprint'],
    ] as const
  )
    .filter(([key]) => pub[key])
    .map(([key, text]) => ({ text, href: pub[key] as string }));

/** The entries grouped by year, in the order they are listed in the file. */
export const publicationsByYear = (): Array<{ year: number; items: Array<Publication> }> => {
  const groups: Array<{ year: number; items: Array<Publication> }> = [];
  for (const pub of publications) {
    const last = groups[groups.length - 1];
    if (last && last.year === pub.year) last.items.push(pub);
    else groups.push({ year: pub.year, items: [pub] });
  }
  return groups;
};

/** The entry with exactly this title, if there is one. */
export const findPublication = (title: string): Publication | undefined =>
  publications.find((pub) => pub.title === title);
