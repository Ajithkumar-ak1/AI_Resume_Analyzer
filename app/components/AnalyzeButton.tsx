export default function AnalyzeButton() {
  return (
    <button
      disabled
      className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition hover:bg-indigo-700 disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-200"
      aria-disabled="true"
    >
      <svg className="h-5 w-5 mr-1 opacity-70" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 4h-1v-4h-1m-4 4h-1v-4h-1" />
      </svg>
      Analyze Resume
    </button>
  );
}
