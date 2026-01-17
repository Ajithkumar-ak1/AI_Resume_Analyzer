export function generateFeedback(missingSkills: string[]): string[] {
  if (!missingSkills || missingSkills.length === 0) {
    return [
      "Great job! Your resume covers all the key skills required for this job description. Consider tailoring your experience to highlight your strengths."
    ];
  }

  return missingSkills.map(
    (skill) => `Consider adding or emphasizing your experience with "${skill}" to better match the job requirements.`
  );
}
