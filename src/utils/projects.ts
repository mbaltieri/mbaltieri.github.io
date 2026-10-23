import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

import { getPermalink } from '~/utils/permalinks';

export type Project = CollectionEntry<'project'>;

/** The projects that are not drafts, newest first. */
export const fetchProjects = async (): Promise<Array<Project>> =>
  (await getCollection('project', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

/** /projects/<file name>/, the address the project had on the Jekyll site. */
export const getProjectPermalink = (project: Project): string => getPermalink(`/projects/${project.id}`);

/** A project as an item of the Projects widget. */
export const projectCard = (project: Project) => ({
  title: project.data.title,
  description: project.data.description,
  image: project.data.image ? { src: project.data.image, alt: project.data.imageAlt ?? '' } : undefined,
  href: getProjectPermalink(project),
  linkText: 'Read more',
});
