import { resume } from '~/utils/resume';

// The JSON Resume at /assets/resume.json, made from src/data/resume.yaml.
export const GET = () =>
  new Response(JSON.stringify(resume), {
    headers: { 'Content-Type': 'application/json' },
  });
