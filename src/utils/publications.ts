import yaml from 'js-yaml';

import raw from '~/data/publications.yaml?raw';

export type PublicationKind = 'journal' | 'conference' | 'preprint' | 'commentary' | 'editorial' | 'editing' | 'other';

/** One entry of src/data/publications.yaml (the file describes each field). */
export interface Publication {
  title: string;
  authors: string;
  venue?: string;
  published?: string;
  released?: string;
  kind: PublicationKind;
  type?: string;
  note?: string;
  invited?: boolean;
  selected?: boolean;
  informal?: boolean;
  publisher?: string;
  pdf?: string;
  preprint?: string;
  /** The date it is listed by: when it was published, or else when its preprint came out. */
  date: string;
  /** The year of that date. */
  year: number;
}

// A date as the file has it. Without quotes, YAML reads 2026-07-07 as a date and 2026 as a number.
const dateText = (value: unknown): string | undefined =>
  value instanceof Date ? value.toISOString().slice(0, 10) : value == null ? undefined : String(value);

/** Every entry, newest first. Entries of the same date keep the order of the file. */
export const publications: Array<Publication> = (yaml.load(raw) as Array<Record<string, unknown>>)
  .map((entry) => {
    const published = dateText(entry.published);
    const released = dateText(entry.released);
    const date = published ?? released;
    if (!date) throw new Error(`src/data/publications.yaml: "${entry.title}" has neither published nor released`);
    return { ...entry, published, released, date, year: Number(date.slice(0, 4)) } as Publication;
  })
  .sort((a, b) => b.date.localeCompare(a.date));

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

/** The list an entry belongs to on the page: the papers, the commentaries and editorials, the
 *  edited proceedings and special issues, or the writing that was neither refereed nor given a DOI. */
export const publicationList = (pub: Publication): 'papers' | 'commentaries' | 'editing' | 'other' =>
  pub.informal
    ? 'other'
    : pub.kind === 'commentary' || pub.kind === 'editorial'
      ? 'commentaries'
      : pub.kind === 'editing'
        ? 'editing'
        : 'papers';

/** Entries, newest first, grouped by year. */
export const publicationsByYear = (items: Array<Publication>): Array<{ year: number; items: Array<Publication> }> => {
  const groups: Array<{ year: number; items: Array<Publication> }> = [];
  for (const pub of items) {
    const last = groups[groups.length - 1];
    if (last && last.year === pub.year) last.items.push(pub);
    else groups.push({ year: pub.year, items: [pub] });
  }
  return groups;
};

/** The entry with exactly this title, if there is one. */
export const findPublication = (title: string): Publication | undefined =>
  publications.find((pub) => pub.title === title);
