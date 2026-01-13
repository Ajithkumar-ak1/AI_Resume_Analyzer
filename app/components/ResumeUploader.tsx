"use client";

import { ChangeEvent, useState } from "react";
import pdfToText from "react-pdftotext";

interface ResumeUploaderProps {
  onTextExtracted: (text: string, filename: string) => void;
  onLoadingChange: (loading: boolean) => void;
  onErrorChange: (error: string | null) => void;
  isLoading: boolean;
}

export default function ResumeUploader({
  onTextExtracted,
  onLoadingChange,
  onErrorChange,
  isLoading,
}: ResumeUploaderProps) {
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const validateAndParsePDF = async (file: File) => {
    if (file.type !== "application/pdf") {
      onErrorChange("Please upload a valid PDF file");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      onErrorChange("File size must be less than 2MB");
      return;
    }

    try {
      onLoadingChange(true);
      onErrorChange(null);
      const text = await pdfToText(file);
      if (!text || text.trim().length === 0) {
        onErrorChange("Could not extract text from PDF");
        return;
      }
      onTextExtracted(text, file.name);
    } catch (err) {
      onErrorChange("Failed to extract text from PDF");
      console.error("PDF parsing error:", err);
    } finally {
      onLoadingChange(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (isLoading) return;

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      validateAndParsePDF(files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isLoading) return;

    const files = e.currentTarget.files;
    if (files && files[0]) {
      validateAndParsePDF(files[0]);
    }
  };

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={`bg-white rounded-xl shadow-sm border-2 p-6 flex flex-col items-center justify-center min-h-[260px] transition-all ${
        isDragActive
          ? "border-indigo-500 bg-indigo-50"
          : "border-slate-100 hover:shadow-md"
      } ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      {isLoading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600 mb-4"></div>
          <span className="text-slate-600 font-medium">Extracting resume…</span>
        </div>
      ) : (
        <>
          <label
            htmlFor="resume-upload"
            className="flex flex-col items-center justify-center w-full h-40 cursor-pointer group"
          >
            <div className="flex flex-col items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16v-8m0 8l-3-3m3 3l3-3m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium text-base">Drag & drop your PDF</span>
              <span className="text-xs text-slate-400 mt-1">or click to browse</span>
            </div>
            <input
              id="resume-upload"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleChange}
              disabled={isLoading}
            />
          </label>
          <p className="text-xs text-slate-400 mt-4">PDF format only. Max 2MB.</p>
        </>
      )}
    </div>
  );
}
