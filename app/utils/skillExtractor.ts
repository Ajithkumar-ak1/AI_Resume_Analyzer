import { TECH_SKILLS } from "@/app/data/skills";
import { cleanText } from "./textCleaner";

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function extractSkills(text: string): string[] {
  if (!text || text.trim().length === 0) {
    return [];
  }

  const cleanedText = cleanText(text);
  const extractedSkills: string[] = [];
  const seen = new Set<string>();

  for (const skill of TECH_SKILLS) {
    const escapedSkill = escapeRegExp(skill);
    const skillPattern = new RegExp(`\\b${escapedSkill}\\b`);
    if (skillPattern.test(cleanedText)) {
      if (!seen.has(skill)) {
        extractedSkills.push(skill);
        seen.add(skill);
      }
    }
  }

  return extractedSkills;
}
