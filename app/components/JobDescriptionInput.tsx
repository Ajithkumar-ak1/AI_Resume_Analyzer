export default function JobDescriptionInput() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col min-h-[260px]">
      <label htmlFor="job-desc" className="font-medium text-base mb-2 text-slate-700">Job Description</label>
      <textarea
        id="job-desc"
        rows={9}
        placeholder="Paste the job description here. Include requirements, responsibilities, and any key skills."
        className="w-full resize-none rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 p-3 text-slate-700 bg-slate-50 placeholder:text-slate-400 transition"
      />
    </div>
  );
}
