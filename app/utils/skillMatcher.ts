export interface SkillMatchResult {
  matchedSkills: string[];
  missingSkills: string[];
  matchPercentage: number;
}

export function matchSkills(resumeSkills: string[], jdSkills: string[]): SkillMatchResult {
  if (!jdSkills || jdSkills.length === 0) {
    return {
      matchedSkills: [],
      missingSkills: [],
      matchPercentage: 0,
    };
  }

  const jdSkillSet = new Set(jdSkills.map((s) => s.toLowerCase()));
  const resumeSkillSet = new Set(resumeSkills.map((s) => s.toLowerCase()));

  const matchedSkills: string[] = [];
  const missingSkills: string[] = [];

  jdSkillSet.forEach((skill) => {
    if (resumeSkillSet.has(skill)) {
      matchedSkills.push(skill);
    } else {
      missingSkills.push(skill);
    }
  });

  const matchPercentage = Math.round((matchedSkills.length / jdSkillSet.size) * 100);

  return {
    matchedSkills,
    missingSkills,
    matchPercentage,
  };
}
