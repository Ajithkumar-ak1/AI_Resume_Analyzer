import ResumeUploader from "./components/ResumeUploader";
import JobDescriptionInput from "./components/JobDescriptionInput";
import AnalyzeButton from "./components/AnalyzeButton";
import ResultsPlaceholder from "./components/ResultsPlaceholder";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center px-4 pb-12">
      <header className="w-full max-w-4xl mx-auto pt-12 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-2 tracking-tight">AI Resume Analyzer</h1>
        <p className="text-slate-500 text-center text-lg max-w-2xl mx-auto">Instantly see how your resume matches a job description. Upload your resume, paste a job description, and get actionable insights—trusted by recruiters and professionals.</p>
      </header>
      <section className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <ResumeUploader />
        <JobDescriptionInput />
      </section>
      <div className="w-full max-w-2xl flex justify-center mt-8">
        <AnalyzeButton />
      </div>
      <div className="w-full max-w-3xl">
        <ResultsPlaceholder />
      </div>
    </main>
  );
}
