import yaml from 'js-yaml';

import raw from '~/data/resume.yaml?raw';

// src/data/resume.yaml follows the JSON Resume schema (https://jsonresume.org/schema/).
// Only the fields this site uses are typed here.

export interface ResumeProfile {
  network: string;
  username?: string;
  url: string;
  label?: string;
  hide?: boolean;
}

export interface ResumeWork {
  company: string;
  position: string;
  website?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
}

export interface ResumeEducation {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate?: string;
}

export interface Resume {
  basics: {
    name: string;
    label?: string;
    picture?: string;
    email?: string;
    website?: string;
    summary?: string;
    location?: { city?: string; countryCode?: string };
    profiles?: Array<ResumeProfile>;
  };
  work?: Array<ResumeWork>;
  education?: Array<ResumeEducation>;
  publications?: Array<{ name: string; website?: string }>;
  skills?: Array<{ name: string; level?: string; keywords?: Array<string> }>;
  languages?: Array<{ language: string; fluency?: string }>;
  interests?: Array<{ name: string; keywords?: Array<string> }>;
}

export const resume = yaml.load(raw) as Resume;

const monthYear = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', timeZone: 'UTC' });

/** "Oct 2025 – present", "Nov 2021 – Sep 2022". */
export const resumeDates = (startDate: string, endDate?: string): string =>
  `${monthYear.format(new Date(startDate))} – ${endDate ? monthYear.format(new Date(endDate)) : 'present'}`;
