import yaml from 'js-yaml';

import raw from '~/data/research.yaml?raw';

// src/data/research.yaml: the areas of research of the Research programme page and their
// questions, as written there. Its own comments say what each field is.

export interface ResearchQuestionEntry {
  id: string;
  label: string;
  question: string;
  answer: Array<string>;
  aside?: string;
  papers?: Array<string>;
  links?: Array<{ text: string; href: string }>;
  linksNote?: string;
  drawing?: string;
}

export interface ResearchAreaEntry {
  id: string;
  name: string;
  keywords: string;
  title: string;
  text: string;
  questions: Array<ResearchQuestionEntry>;
  papers?: Array<string>;
}

export const research = yaml.load(raw) as Array<ResearchAreaEntry>;

/** The drawings an area can have on its tab, and those a question can have beside its answer. */
export const areaDrawings = ['control', 'cognition', 'artificial-life', 'agent-foundations-for-ai-safety'] as const;
export const answerDrawings = [
  'fundamental-questions',
  'agents-and-observers',
  'agents-without-observers',
  'origins-of-life',
] as const;
