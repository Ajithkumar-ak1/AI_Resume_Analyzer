import { generateContent } from "../ai/geminiClient";

export interface AIAnalyzerInput {
  resumeSkills: string[];
  jdSkills: string[];
  matchedSkills: string[];
  missingSkills: string[];
  matchPercentage: number;
}

export interface AIAnalyzerResult {
  overallSummary: string;
  resumeStrengths: string[];
  resumeWeaknesses: string[];
  improvementSuggestions: string[];
  recommendedJobRoles: string[];
}

function buildPrompt(input: AIAnalyzerInput): string {
  return `You are an expert career coach and resume analyst. Given the following structured data, provide a JSON response with the following fields: overallSummary (string), resumeStrengths (string[]), resumeWeaknesses (string[]), improvementSuggestions (string[]), recommendedJobRoles (string[]). Do not include any text outside the JSON.\n\nResume Skills: ${JSON.stringify(input.resumeSkills)}\nJob Description Skills: ${JSON.stringify(input.jdSkills)}\nMatched Skills: ${JSON.stringify(input.matchedSkills)}\nMissing Skills: ${JSON.stringify(input.missingSkills)}\nMatch Percentage: ${input.matchPercentage}\n\nReturn only valid JSON in this format:\n{\n  "overallSummary": "",
  "resumeStrengths": [],
  "resumeWeaknesses": [],
  "improvementSuggestions": [],
  "recommendedJobRoles": []
}`;
}

export async function analyzeWithAI(input: AIAnalyzerInput): Promise<AIAnalyzerResult | null> {
  const prompt = buildPrompt(input);
  try {
    const aiResponse = await generateContent(prompt);
    const jsonStart = aiResponse.indexOf("{");
    const jsonEnd = aiResponse.lastIndexOf("}") + 1;
    const jsonString = aiResponse.slice(jsonStart, jsonEnd);
    const parsed: AIAnalyzerResult = JSON.parse(jsonString);
    return parsed;
  } catch (err) {
    return null;
  }
}
