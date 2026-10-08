import React, { useState } from 'react';
import { SSCMockTest } from '../types/sscTest';
import {
  Copy,
  Check,
  Download,
  Upload,
  CheckCircle2,
  AlertTriangle,
  Code2,
  FileJson,
  Play
} from 'lucide-react';

interface JsonEngineViewProps {
  test: SSCMockTest;
  onImportTest: (test: SSCMockTest) => void;
  onTakeExam: () => void;
}

export const JsonEngineView: React.FC<JsonEngineViewProps> = ({
  test,
  onImportTest,
  onTakeExam,
}) => {
  const [copied, setCopied] = useState(false);
  const [importText, setImportText] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const [importSuccess, setImportSuccess] = useState<string | null>(null);
  const [activeSubTab, setActiveSubTab] = useState<'view' | 'import'>('view');

  const formattedJson = JSON.stringify(test, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([formattedJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${test.test_id || 'ssc_mock_test'}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleValidateAndImport = () => {
    setImportError(null);
    setImportSuccess(null);

    try {
      if (!importText.trim()) {
        setImportError('Please paste valid JSON text.');
        return;
      }

      const parsed = JSON.parse(importText);

      // Validate schema
      if (!parsed.test_id || typeof parsed.test_id !== 'string') {
        throw new Error("Missing or invalid 'test_id' string.");
      }
      if (!parsed.test_title || typeof parsed.test_title !== 'string') {
        throw new Error("Missing or invalid 'test_title' string.");
      }
      if (!Array.isArray(parsed.sections) || parsed.sections.length === 0) {
        throw new Error("Missing or invalid 'sections' array.");
      }

      for (const sec of parsed.sections) {
        if (!sec.section_id || !sec.section_name?.en || !sec.section_name?.hi) {
          throw new Error(`Section '${sec.section_id || 'unknown'}' missing required bilingual section_name.`);
        }
        if (!Array.isArray(sec.questions) || sec.questions.length === 0) {
          throw new Error(`Section '${sec.section_id}' has no questions array.`);
        }
        for (const q of sec.questions) {
          if (!q.question_text?.en || !q.question_text?.hi) {
            throw new Error(`Question ${q.question_id || ''} missing bilingual question_text.`);
          }
          if (!Array.isArray(q.options?.en) || !Array.isArray(q.options?.hi)) {
            throw new Error(`Question ${q.question_id || ''} missing bilingual options array.`);
          }
          if (typeof q.correct_option_index !== 'number') {
            throw new Error(`Question ${q.question_id || ''} missing correct_option_index.`);
          }
          if (!q.explanation?.en || !q.explanation?.hi) {
            throw new Error(`Question ${q.question_id || ''} missing bilingual explanation.`);
          }
        }
      }

      onImportTest(parsed);
      setImportSuccess('Valid SSC Schema detected! Test imported successfully.');
    } catch (err: any) {
      setImportError(err.message || 'Invalid JSON format.');
    }
  };

  const totalQuestions = test.sections.reduce((acc, s) => acc + s.questions.length, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Title & Schema Verification Banner */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center gap-1">
              <FileJson className="w-3.5 h-3.5" />
              Strict JSON Output Engine
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Schema Validated
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            {test.test_title}
          </h2>
          <p className="text-xs text-slate-500 mt-1 font-mono">
            Test ID: {test.test_id} • {test.sections.length} Sections • {totalQuestions} Bilingual Questions
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors shadow"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Raw JSON'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors shadow"
          >
            <Download className="w-4 h-4" />
            <span>Download .json</span>
          </button>

          <button
            onClick={onTakeExam}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors shadow"
          >
            <Play className="w-4 h-4" />
            <span>Launch in CBT Simulator</span>
          </button>
        </div>
      </div>

      {/* Tabs: Raw JSON View vs Import / Custom JSON */}
      <div className="flex gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveSubTab('view')}
          className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${
            activeSubTab === 'view'
              ? 'bg-slate-900 text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Raw JSON Inspection
        </button>
        <button
          onClick={() => setActiveSubTab('import')}
          className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${
            activeSubTab === 'import'
              ? 'bg-slate-900 text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Import / Paste Custom JSON
        </button>
      </div>

      {activeSubTab === 'view' ? (
        /* JSON Code Viewer */
        <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-800 relative">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400 font-mono">
            <span>JSON Output (STRICT SCHEMA COMPLIANT)</span>
            <span>{formattedJson.length} characters</span>
          </div>

          <pre className="font-mono-code text-xs sm:text-sm text-emerald-400 overflow-x-auto max-h-[600px] leading-relaxed p-2 select-all">
            <code>{formattedJson}</code>
          </pre>
        </div>
      ) : (
        /* Import / Paste Custom JSON */
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Paste or Load Custom SSC Mock Test JSON
            </h3>
            <p className="text-xs text-slate-500">
              Ensure your JSON conforms strictly to the 4-section bilingual schema.
            </p>
          </div>

          <textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder={`{\n  "test_id": "CUSTOM-MOCK-01",\n  "test_title": "SSC CGL Custom Test",\n  "sections": [...]\n}`}
            rows={14}
            className="w-full font-mono text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
          />

          {importError && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{importError}</span>
            </div>
          )}

          {importSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-700 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{importSuccess}</span>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={handleValidateAndImport}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-colors shadow"
            >
              Validate &amp; Load into CBT
            </button>
            <button
              onClick={() => {
                setImportText(formattedJson);
                setImportError(null);
                setImportSuccess('Current test JSON loaded into editor.');
              }}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm rounded-xl transition-colors"
            >
              Populate with Current Test
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
