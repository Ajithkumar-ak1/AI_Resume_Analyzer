import React from "react";

interface ResultsProps {
  matchPercentage: number;
  matchedSkills: string[];
  missingSkills: string[];
  feedback: string[];
}

export default function Results({
  matchPercentage,
  matchedSkills,
  missingSkills,
  feedback,
}: ResultsProps) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-slate-100 p-8 mt-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-1">Skill Match</h2>
          <p className="text-slate-600 text-sm">How well your resume matches the job description</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-extrabold text-indigo-600">{matchPercentage}%</span>
          <span className="text-slate-500 font-medium">match</span>
        </div>
      </div>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-green-700 mb-2">Matched Skills</h3>
          <div className="flex flex-wrap gap-2">
            {matchedSkills.length > 0 ? (
              matchedSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium border border-green-200"
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-slate-400 text-xs">No matched skills</span>
            )}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-red-700 mb-2">Missing Skills</h3>
          <div className="flex flex-wrap gap-2">
            {missingSkills.length > 0 ? (
              missingSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium border border-red-200"
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-slate-400 text-xs">None 🎉</span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="font-semibold text-slate-900 mb-3">Actionable Feedback</h3>
        <ul className="list-disc pl-6 space-y-2">
          {feedback.map((item, idx) => (
            <li key={idx} className="text-slate-700 text-sm leading-relaxed">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
