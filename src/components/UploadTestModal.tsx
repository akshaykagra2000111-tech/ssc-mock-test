import React, { useState, useRef } from 'react';
import { SSCMockTest } from '../types/sscTest';
import { SSCExamCategory, sscExamsList } from '../data/sscExams';
import {
  Youtube,
  FileText,
  Image as ImageIcon,
  FileUp,
  Sparkles,
  X,
  Play,
  RotateCw,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  BookOpen,
  Link,
  Upload
} from 'lucide-react';

interface UploadTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTestCreated: (test: SSCMockTest) => void;
  activeExamCategory: SSCExamCategory;
}

export const UploadTestModal: React.FC<UploadTestModalProps> = ({
  isOpen,
  onClose,
  onTestCreated,
  activeExamCategory,
}) => {
  const [activeTab, setActiveTab] = useState<'youtube' | 'pdf' | 'image' | 'text'>('youtube');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [questionCount, setQuestionCount] = useState<10 | 20 | 30 | 40 | 50>(20);
  const [subjectArea, setSubjectArea] = useState<string>('all');
  const [targetExam, setTargetExam] = useState<string>('SSC CGL Tier-1');
  const [userNotes, setUserNotes] = useState('');
  const [textContent, setTextContent] = useState('');
  
  // File upload state
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileBase64, setFileBase64] = useState<string>('');
  const [filePreview, setFilePreview] = useState<string | null>(null);
  
  // Loading & Error states
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // Handle File Input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedFile(file);
    setErrorMessage(null);

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setFileBase64(result);
      if (file.type.startsWith('image/')) {
        setFilePreview(result);
      } else {
        setFilePreview(null);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleClearFile = () => {
    setUploadedFile(null);
    setFileBase64('');
    setFilePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const sampleYouTubeVideos = [
    {
      title: "SSC Maths Percentage & Profit Loss Complete Marathon",
      url: "https://www.youtube.com/watch?v=sample-percentage-ssc",
      subject: "quantitative_aptitude"
    },
    {
      title: "SSC CGL Modern History & Polity Complete Revision",
      url: "https://www.youtube.com/watch?v=sample-polity-history",
      subject: "general_awareness"
    },
    {
      title: "Reasoning Syllogisms & Coding Decoding Tricks",
      url: "https://www.youtube.com/watch?v=sample-reasoning-tricks",
      subject: "reasoning"
    },
    {
      title: "English Grammar Rules & Cloze Test Masterclass",
      url: "https://www.youtube.com/watch?v=sample-english-grammar",
      subject: "english_comprehension"
    }
  ];

  const handleGenerate = async () => {
    setErrorMessage(null);

    // Validation
    if (activeTab === 'youtube' && !youtubeUrl.trim()) {
      setErrorMessage('Please enter a valid YouTube video URL (e.g., https://www.youtube.com/watch?v=...)');
      return;
    }
    if ((activeTab === 'pdf' || activeTab === 'image') && !fileBase64) {
      setErrorMessage(`Please select and upload a ${activeTab.toUpperCase()} file to generate questions.`);
      return;
    }
    if (activeTab === 'text' && !textContent.trim()) {
      setErrorMessage('Please enter or paste study notes/questions.');
      return;
    }

    setIsLoading(true);
    setLoadingStep('Analyzing source material and key learning points...');

    try {
      setTimeout(() => {
        setLoadingStep(`Extracting ${questionCount} bilingual SSC questions with shortcut solutions...`);
      }, 1500);

      const response = await fetch('/api/generate-from-source', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourceType: activeTab,
          youtubeUrl,
          fileData: fileBase64,
          mimeType: uploadedFile?.type || (activeTab === 'pdf' ? 'application/pdf' : 'image/jpeg'),
          textContent,
          questionCount,
          targetExam,
          subjectArea,
          userNotes,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate mock test from provided source.');
      }

      setLoadingStep('Formatting bilingual Devanagari & English questions in CBT schema...');
      const testData: SSCMockTest = await response.json();

      setTimeout(() => {
        setIsLoading(false);
        onTestCreated(testData);
        onClose();
      }, 600);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Error processing source. Please try again or check internet connection.');
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 p-5 sm:p-6 text-white flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-white shadow-inner shrink-0">
              <Youtube className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-black/25 text-rose-100 uppercase tracking-wider">
                  AI Multimodal Engine
                </span>
                <span className="text-xs text-rose-100 hidden sm:inline">
                  YouTube • PDF • Screenshot
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-black mt-0.5">
                YouTube Link or PDF Upload Test
              </h2>
              <p className="text-xs sm:text-sm text-rose-100 mt-1">
                किसी भी यूट्यूब वीडियो, पीडीएफ नोट्स या स्क्रीनशॉट से सीधे 10, 20, 30, 40 या 50 प्रश्नों का द्विभाषी टेस्ट बनाएं।
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            disabled={isLoading}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer disabled:opacity-50"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Source Selection Tabs */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              1. Choose Source Type (कंटेंट का प्रकार चुनें)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('youtube');
                  setErrorMessage(null);
                }}
                className={`p-3 rounded-xl border-2 flex flex-col items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'youtube'
                    ? 'border-red-600 bg-red-50 text-red-700 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50'
                }`}
              >
                <Youtube className="w-5 h-5 text-red-600" />
                <span>YouTube Link</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('pdf');
                  setErrorMessage(null);
                }}
                className={`p-3 rounded-xl border-2 flex flex-col items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'pdf'
                    ? 'border-red-600 bg-red-50 text-red-700 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50'
                }`}
              >
                <FileText className="w-5 h-5 text-indigo-600" />
                <span>PDF Document</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('image');
                  setErrorMessage(null);
                }}
                className={`p-3 rounded-xl border-2 flex flex-col items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'image'
                    ? 'border-red-600 bg-red-50 text-red-700 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50'
                }`}
              >
                <ImageIcon className="w-5 h-5 text-emerald-600" />
                <span>Image / Screenshot</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('text');
                  setErrorMessage(null);
                }}
                className={`p-3 rounded-xl border-2 flex flex-col items-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'text'
                    ? 'border-red-600 bg-red-50 text-red-700 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50'
                }`}
              >
                <FileUp className="w-5 h-5 text-amber-600" />
                <span>Notes / Text</span>
              </button>
            </div>
          </div>

          {/* Active Tab Content Area */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-4">
            {activeTab === 'youtube' && (
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-1.5">
                    <Link className="w-3.5 h-3.5 text-red-600" />
                    <span>Paste YouTube Video URL (यूट्यूब लिंक दर्ज करें)</span>
                  </label>
                  <input
                    type="url"
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    placeholder="e.g. https://www.youtube.com/watch?v=XYZ123 or https://youtu.be/..."
                    className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    AI will analyze the lecture/class video and generate questions solely based on its content.
                  </p>
                </div>

                {/* Sample Video Chips */}
                <div>
                  <div className="text-[11px] font-semibold text-slate-600 mb-1.5">
                    Or select a popular class sample topic:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {sampleYouTubeVideos.map((sample, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setYoutubeUrl(sample.url);
                          setUserNotes(sample.title);
                          setSubjectArea(sample.subject);
                        }}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-red-400 text-slate-700 transition-colors"
                      >
                        ⚡ {sample.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {(activeTab === 'pdf' || activeTab === 'image') && (
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-1">
                  <Upload className="w-3.5 h-3.5 text-indigo-600" />
                  <span>
                    Upload {activeTab === 'pdf' ? 'PDF Notes / Study Material' : 'Image / Screenshot'}
                  </span>
                </label>

                <div className="border-2 border-dashed border-slate-300 rounded-xl p-5 text-center bg-white hover:bg-slate-50/50 transition-colors">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={activeTab === 'pdf' ? '.pdf,application/pdf' : 'image/*'}
                    onChange={handleFileChange}
                    className="hidden"
                    id="source-file-upload"
                  />
                  <label
                    htmlFor="source-file-upload"
                    className="cursor-pointer flex flex-col items-center justify-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                      <Upload className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">
                        Click to upload or drag &amp; drop
                      </span>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {activeTab === 'pdf' ? 'PDF documents up to 25MB' : 'PNG, JPG, WebP screenshots'}
                      </p>
                    </div>
                  </label>
                </div>

                {uploadedFile && (
                  <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs">
                    <div className="flex items-center gap-2 truncate">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-semibold text-emerald-900 truncate">
                        {uploadedFile.name}
                      </span>
                      <span className="text-slate-500">
                        ({(uploadedFile.size / 1024).toFixed(1)} KB)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleClearFile}
                      className="text-rose-600 hover:text-rose-800 font-bold ml-2 text-xs"
                    >
                      Remove
                    </button>
                  </div>
                )}

                {filePreview && (
                  <div className="mt-2 text-center">
                    <img
                      src={filePreview}
                      alt="Uploaded screenshot"
                      className="max-h-40 rounded-lg mx-auto border border-slate-300 shadow-xs"
                    />
                  </div>
                )}
              </div>
            )}

            {activeTab === 'text' && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-800">
                  Paste Study Material, Lecture Notes, or Questions:
                </label>
                <textarea
                  value={textContent}
                  onChange={(e) => setTextContent(e.target.value)}
                  placeholder="Paste formulas, historical summaries, English rules, or sample problems here..."
                  rows={5}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                />
              </div>
            )}

            {/* Optional Guidance */}
            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                Specific Instructions / Focus (Optional):
              </label>
              <input
                type="text"
                value={userNotes}
                onChange={(e) => setUserNotes(e.target.value)}
                placeholder="e.g. Focus only on Compound Interest formulas, or focus on modern history dates"
                className="w-full bg-white border border-slate-300 rounded-lg p-2 text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-red-500"
              />
            </div>
          </div>

          {/* 2. Question Count Selector (10, 20, 30, 40, 50 Qs) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                2. Number of Questions (प्रश्नों की संख्या चुनें)
              </label>
              <span className="text-xs font-bold text-red-600">
                {questionCount} Questions Selected
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {([10, 20, 30, 40, 50] as const).map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setQuestionCount(count)}
                  className={`py-2.5 text-xs font-bold rounded-xl border-2 transition-all cursor-pointer text-center ${
                    questionCount === count
                      ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white border-red-600 shadow-md transform scale-102'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div>{count} Qs</div>
                  <div className="text-[10px] font-normal opacity-80">
                    {count === 10 ? 'Sprint' : count === 50 ? 'Full Mock' : 'Practice'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Subject Focus & Target Exam */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Subject Focus (विषय)
              </label>
              <select
                value={subjectArea}
                onChange={(e) => setSubjectArea(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:ring-2 focus:ring-red-500 focus:outline-hidden"
              >
                <option value="all">Balanced (All 4 Sections in Equal Ratio)</option>
                <option value="quantitative_aptitude">Quantitative Aptitude (गणित / Maths)</option>
                <option value="reasoning">General Intelligence &amp; Reasoning (रीजनिंग)</option>
                <option value="general_awareness">General Awareness / GK (सामान्य ज्ञान)</option>
                <option value="english_comprehension">English Comprehension (अंग्रेजी व्याकरण)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Target SSC Exam (लक्षित परीक्षा)
              </label>
              <select
                value={targetExam}
                onChange={(e) => setTargetExam(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:ring-2 focus:ring-red-500 focus:outline-hidden"
              >
                <option value="SSC CGL Tier-1">SSC CGL Tier-1 (Graduate Level)</option>
                <option value="SSC CHSL Tier-1">SSC CHSL Tier-1 (10+2 Level)</option>
                <option value="SSC MTS &amp; Havaldar">SSC MTS &amp; Havaldar (Matric Level)</option>
                <option value="SSC CPO Sub-Inspector">SSC CPO Sub-Inspector</option>
                <option value="SSC GD Constable">SSC GD Constable</option>
                <option value="SSC Selection Post">SSC Selection Post</option>
              </select>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Bilingual Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>100% Bilingual Guarantee: </strong>
              Every question generated from your YouTube video, PDF, or image will be drafted in both Hindi (हिन्दी) and English with step-by-step solutions and TCS iON marking (+2 / -0.5).
            </div>
          </div>
        </div>

        {/* Modal Footer with Action Button */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            {isLoading ? (
              <span className="flex items-center gap-2 text-rose-600 font-semibold animate-pulse">
                <RotateCw className="w-4 h-4 animate-spin" />
                <span>{loadingStep}</span>
              </span>
            ) : (
              <span>Ready to synthesize custom mock test.</span>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs sm:text-sm flex-1 sm:flex-initial transition-colors disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleGenerate}
              disabled={isLoading}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 flex-1 sm:flex-initial cursor-pointer disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <RotateCw className="w-4 h-4 animate-spin" />
                  <span>Generating Mock Test...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Generate &amp; Start Test ({questionCount} Qs)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
