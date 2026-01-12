export default function ResumeUploader() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col items-center justify-center min-h-[260px] transition-shadow hover:shadow-md">
      <label
        htmlFor="resume-upload"
        className="flex flex-col items-center justify-center w-full h-40 cursor-pointer group"
      >
        <div className="flex flex-col items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-3-3m3 3l3-3m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium text-base">Drag & drop your PDF</span>
          <span className="text-xs text-slate-400 mt-1">or click to browse</span>
        </div>
        <input
          id="resume-upload"
          type="file"
          accept=".pdf"
          className="hidden"
        />
      </label>
      <p className="text-xs text-slate-400 mt-4">PDF format only. Max 2MB.</p>
    </div>
  );
}
