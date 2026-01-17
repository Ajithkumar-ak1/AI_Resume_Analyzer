"use client";

import { useState, useEffect } from "react";
import ResumeUploader from "./components/ResumeUploader";
import JobDescriptionInput from "./components/JobDescriptionInput";

import AnalyzeButton from "./components/AnalyzeButton";
import ResultsPlaceholder from "./components/ResultsPlaceholder";
import Results from "./components/Results";
import { extractSkills } from "./utils/skillExtractor";
import { matchSkills } from "./utils/skillMatcher";
import { generateFeedback } from "./utils/feedbackGenerator";

export default function Home() {

  const [resumeText, setResumeText] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [jobDescription, setJobDescription] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [matchPercentage, setMatchPercentage] = useState<number>(0);
  const [matchedSkills, setMatchedSkills] = useState<string[]>([]);
  const [missingSkills, setMissingSkills] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string[]>([]);


  const handleAnalyze = () => {
    setShowResults(false);
    const resumeSkills = extractSkills(resumeText);
    const jdSkills = extractSkills(jobDescription);
    const { matchedSkills, missingSkills, matchPercentage } = matchSkills(resumeSkills, jdSkills);
    setMatchedSkills(matchedSkills);
    setMissingSkills(missingSkills);
    setMatchPercentage(matchPercentage);
    setFeedback(generateFeedback(missingSkills));
    setShowResults(true);
  };

  const handleTextExtracted = (text: string, filename: string) => {
    setResumeText(text);
    setFileName(filename);
    console.log("Resume text extracted successfully:", text.substring(0, 200) + "...");
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center px-4 pb-12">
      <header className="w-full max-w-4xl mx-auto pt-12 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-2 tracking-tight">
          AI Resume Analyzer
        </h1>
        <p className="text-slate-500 text-center text-lg max-w-2xl mx-auto">
          Instantly see how your resume matches a job description. Upload your resume, paste a job description, and get actionable insights—trusted by recruiters and professionals.
        </p>
      </header>
      <section className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <ResumeUploader
          onTextExtracted={handleTextExtracted}
          onLoadingChange={setLoading}
          onErrorChange={setError}
          isLoading={loading}
        />
        <JobDescriptionInput value={jobDescription} onChange={setJobDescription} />
      </section>
      {error && (
        <div className="w-full max-w-2xl mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm font-medium">{error}</p>
        </div>
      )}
      <div className="w-full max-w-2xl flex justify-center mt-8">
        <AnalyzeButton
          onAnalyze={handleAnalyze}
          disabled={loading || !resumeText || !jobDescription}
          loading={loading}
        />
      </div>
      <div className="w-full max-w-3xl">
        {showResults ? (
          <Results
            matchPercentage={matchPercentage}
            matchedSkills={matchedSkills}
            missingSkills={missingSkills}
            feedback={feedback}
          />
        ) : resumeText ? (
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 mt-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Uploaded Resume</h2>
              <p className="text-sm text-slate-600 font-medium bg-slate-50 inline-block px-3 py-1 rounded-lg">
                📄 {fileName}
              </p>
            </div>
            <div className="border-t border-slate-100 pt-6">
              <h3 className="font-semibold text-slate-900 mb-4">Extracted Text</h3>
              <div className="bg-slate-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {resumeText}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <ResultsPlaceholder />
        )}
      </div>
    </main>
  );
}
