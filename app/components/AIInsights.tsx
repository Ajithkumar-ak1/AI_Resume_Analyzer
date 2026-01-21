import React from "react";

export interface AIInsightsProps {
  loading: boolean;
  error: string | null;
  insights: {
    overallSummary: string;
    resumeStrengths: string[];
    resumeWeaknesses: string[];
    improvementSuggestions: string[];
    recommendedJobRoles: string[];
  } | null;
}

export default function AIInsights({ loading, error, insights }: AIInsightsProps) {
  if (loading) {
    return (
      <div className="w-full max-w-3xl mx-auto mt-10 p-8 bg-white border border-slate-100 rounded-xl shadow flex flex-col items-center">
        <span className="animate-spin h-8 w-8 mb-4 border-4 border-indigo-200 border-t-indigo-600 rounded-full inline-block" />
        <p className="text-slate-700 text-lg font-medium">Generating AI-powered insights…</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full max-w-3xl mx-auto mt-10 p-8 bg-red-50 border border-red-200 rounded-xl shadow">
        <p className="text-red-700 text-base font-semibold">{error}</p>
      </div>
    );
  }
  if (!insights) return null;
  return (
    <section className="w-full max-w-3xl mx-auto mt-10 p-8 bg-white border border-slate-100 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">AI-Powered Resume Insights</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Overall Summary</h3>
        <p className="text-slate-700 text-base leading-relaxed">{insights.overallSummary}</p>
      </div>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-green-700 mb-2">Strengths</h4>
          <ul className="list-disc pl-5 space-y-1">
            {insights.resumeStrengths.length > 0 ? insights.resumeStrengths.map((item, i) => (
              <li key={i} className="text-green-800 text-sm">{item}</li>
            )) : <li className="text-slate-400 text-sm">None listed</li>}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-red-700 mb-2">Weaknesses</h4>
          <ul className="list-disc pl-5 space-y-1">
            {insights.resumeWeaknesses.length > 0 ? insights.resumeWeaknesses.map((item, i) => (
              <li key={i} className="text-red-800 text-sm">{item}</li>
            )) : <li className="text-slate-400 text-sm">None listed</li>}
          </ul>
        </div>
      </div>
      <div className="mb-6">
        <h4 className="font-semibold text-indigo-700 mb-2">Improvement Suggestions</h4>
        <ul className="list-disc pl-5 space-y-1">
          {insights.improvementSuggestions.length > 0 ? insights.improvementSuggestions.map((item, i) => (
            <li key={i} className="text-indigo-800 text-sm">{item}</li>
          )) : <li className="text-slate-400 text-sm">None listed</li>}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-slate-900 mb-2">Recommended Job Roles</h4>
        <ul className="list-disc pl-5 space-y-1">
          {insights.recommendedJobRoles.length > 0 ? insights.recommendedJobRoles.map((item, i) => (
            <li key={i} className="text-slate-800 text-sm">{item}</li>
          )) : <li className="text-slate-400 text-sm">None listed</li>}
        </ul>
      </div>
    </section>
  );
}
