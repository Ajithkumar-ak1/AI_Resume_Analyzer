export default function ResultsPlaceholder() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 flex flex-col items-center justify-center min-h-[220px] mt-8">
      <div className="mb-4">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mx-auto opacity-60">
          <rect x="8" y="16" width="48" height="32" rx="8" fill="#F1F5F9" />
          <rect x="16" y="24" width="32" height="4" rx="2" fill="#CBD5E1" />
          <rect x="16" y="32" width="24" height="4" rx="2" fill="#E2E8F0" />
          <rect x="16" y="40" width="12" height="4" rx="2" fill="#E2E8F0" />
        </svg>
      </div>
      <h2 className="font-semibold text-lg text-slate-700 mb-2">No Analysis Yet</h2>
      <p className="text-slate-500 text-center max-w-md">
        Upload your resume and paste a job description above, then click <span className="font-semibold text-indigo-600">Analyze Resume</span> to see how your resume matches the job.
      </p>
    </div>
  );
}
