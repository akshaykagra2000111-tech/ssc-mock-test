import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import { defaultSSCMockTest } from './src/data/defaultMockTest';
import { mockTestPresets } from './src/data/mockTestPresets';
import { SSCMockTest } from './src/types/sscTest';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json({ limit: '10mb' }));

// Helper to initialize GoogleGenAI safely
function getGenAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({ apiKey });
}

// Endpoint: Return default high-yield mock test
app.get('/api/default-test', (_req: Request, res: Response) => {
  res.json(defaultSSCMockTest);
});

// Endpoint: Return test presets
app.get('/api/presets', (_req: Request, res: Response) => {
  res.json(Object.keys(mockTestPresets).map(key => ({
    id: key,
    test_id: mockTestPresets[key].test_id,
    test_title: mockTestPresets[key].test_title,
    questionCount: mockTestPresets[key].sections.reduce((acc, s) => acc + s.questions.length, 0)
  })));
});

app.get('/api/preset/:id', (req: Request, res: Response) => {
  const preset = mockTestPresets[req.params.id];
  if (preset) {
    res.json(preset);
  } else {
    res.status(404).json({ error: 'Preset not found' });
  }
});

// Endpoint: Generate dynamic fresh SSC mock test using Gemini API
app.post('/api/generate-test', async (req: Request, res: Response) => {
  try {
    const {
      examType = 'SSC CGL/CHSL Tier-1',
      difficulty = 'SSC Actual Standard',
      questionsPerSection = 25, // default 25 per section (100 total full mock test)
      customPrompt = '',
      focusSection = 'all'
    } = req.body;

    const ai = getGenAIClient();

    if (!ai) {
      // If no valid Gemini key in environment, return a dynamic variant based on presets
      console.warn('GEMINI_API_KEY not configured. Returning 100-question default mock test.');
      const testVariant: SSCMockTest = JSON.parse(JSON.stringify(defaultSSCMockTest));
      testVariant.test_id = `SSC-MOCK-100Q-${Date.now()}`;
      testVariant.test_title = `${examType} 100-Question Mock Test (${difficulty})`;
      return res.json(testVariant);
    }

    const testId = `SSC-${examType.replace(/\s+/g, '-').toUpperCase()}-${Date.now().toString().slice(-6)}`;

    const systemPrompt = `You are an expert SSC Exam Content Engine and Quiz Architect.
Your task is to generate fresh, dynamic, and updated SSC-pattern Mock Tests in STRICT JSON format.

CORE REQUIREMENTS:
1. EXAM PATTERN:
   Create a comprehensive SSC Tier-1 Mock Test with 4 sections:
   - Section 1: General Intelligence & Reasoning (section_id: "reasoning")
   - Section 2: General Awareness (section_id: "general_awareness", includes Indian History, Polity, Geography, Economy, General Science, and Latest Current Affairs)
   - Section 3: Quantitative Aptitude (section_id: "quantitative_aptitude", Arithmetic + Advanced Maths like Geometry, Algebra, Trigonometry)
   - Section 4: English Comprehension & Grammar (section_id: "english_comprehension", Error spotting, Vocab, Idioms, One word substitution)

2. BILINGUAL SUPPORT:
   - Every single question, every option, and explanation MUST be provided in BOTH Hindi ("hi") and English ("en").
   - Use accurate SSC terminology in Hindi (e.g., साधारण ब्याज, कार्य और समय, मौलिक अधिकार, वर्णमाला परीक्षण).

3. DYNAMIC & FRESH CONTENT:
   - Generate ${questionsPerSection} questions per section (total ${questionsPerSection * 4} questions).
   - Ensure questions are non-repetitive, modern, high-yield, matching current SSC CGL/CHSL trend.
   - For Current Affairs, pick realistic events from recent national and international developments.

4. ANSWER KEY & STEP-BY-STEP EXPLANATION:
   - Include correct_option_index (0, 1, 2, or 3).
   - Include detailed bilingual explanations with formulas, shortcut tricks, and rules.

STRICT JSON SCHEMA REQUIRED:
{
  "test_id": "${testId}",
  "test_title": "${examType} Full Length Mock Test",
  "sections": [
    {
      "section_id": "reasoning",
      "section_name": {
        "en": "General Intelligence & Reasoning",
        "hi": "सामान्य बुद्धिमत्ता और तर्कशक्ति (General Intelligence & Reasoning)"
      },
      "time_limit_minutes": 15,
      "questions": [
        {
          "question_id": 1,
          "topic": "STRING",
          "question_text": {
            "en": "English question text here",
            "hi": "Hindi question text here"
          },
          "options": {
            "en": ["Option A", "Option B", "Option C", "Option D"],
            "hi": ["विकल्प A", "विकल्प B", "विकल्प C", "विकल्प D"]
          },
          "correct_option_index": 0,
          "explanation": {
            "en": "Detailed step-by-step solution in English",
            "hi": "हिन्दी में विस्तृत समाधान"
          }
        }
      ]
    }
  ]
}

Return ONLY valid JSON matching this schema without markdown fences.`;

    const userPromptText = `Generate a fresh, brand new SSC Tier-1 mock test.
Target Exam: ${examType}
Difficulty Level: ${difficulty}
Questions per section: ${questionsPerSection}
Section focus: ${focusSection}
Additional instructions: ${customPrompt || 'Include high-frequency SSC questions with exact formulas and shortcut tricks.'}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: userPromptText,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json',
      }
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error('Empty response received from Gemini model');
    }

    const cleanJson = responseText.trim().replace(/^```json\s*/i, '').replace(/```$/i, '').trim();
    const parsedTest: SSCMockTest = JSON.parse(cleanJson);

    // Validate structure
    if (!parsedTest.test_id || !Array.isArray(parsedTest.sections)) {
      throw new Error('Generated test does not conform to the required JSON structure');
    }

    return res.json(parsedTest);
  } catch (error: any) {
    console.error('Error generating mock test with Gemini:', error);
    // Fallback gracefully to default test so user is never stranded
    const fallbackTest: SSCMockTest = JSON.parse(JSON.stringify(defaultSSCMockTest));
    fallbackTest.test_id = `SSC-FALLBACK-${Date.now()}`;
    return res.json(fallbackTest);
  }
});

// Endpoint: Generate mock test strictly from user-uploaded YouTube link, PDF, Image, or Notes
app.post('/api/generate-from-source', async (req: Request, res: Response) => {
  try {
    const {
      sourceType = 'youtube',
      youtubeUrl = '',
      fileData = '',
      mimeType = '',
      textContent = '',
      questionCount = 10,
      targetExam = 'SSC CGL Tier-1',
      subjectArea = 'all',
      userNotes = '',
    } = req.body;

    const count = parseInt(String(questionCount)) || 10;
    const testId = `SSC-CUSTOM-${sourceType.toUpperCase()}-${Date.now().toString().slice(-6)}`;
    const title = `${targetExam} Mock from ${
      sourceType === 'youtube'
        ? 'YouTube Video'
        : sourceType === 'pdf'
        ? 'Uploaded PDF'
        : sourceType === 'image'
        ? 'Image Screenshot'
        : 'Uploaded Material'
    } (${count} Questions)`;

    const ai = getGenAIClient();

    if (!ai) {
      console.warn('GEMINI_API_KEY not configured. Generating customized slice from verified question bank.');
      const fallback: SSCMockTest = JSON.parse(JSON.stringify(defaultSSCMockTest));
      fallback.test_id = testId;
      fallback.test_title = title;

      const perSec = Math.max(1, Math.floor(count / fallback.sections.length));
      fallback.sections = fallback.sections.map((sec) => ({
        ...sec,
        time_limit_minutes: 15,
        questions: sec.questions.slice(0, perSec),
      }));
      return res.json(fallback);
    }

    const contentParts: any[] = [];

    // Multimodal image or PDF part
    if (fileData && mimeType) {
      const cleanBase64 = fileData.replace(/^data:[^;]+;base64,/, '');
      contentParts.push({
        inlineData: {
          mimeType: mimeType,
          data: cleanBase64,
        },
      });
    }

    const promptText = `You are an expert SSC Exam Content Engine and Quiz Architect.
Your task is to analyze the provided study material and generate a high-yield, authentic SSC Mock Test strictly grounded in it.

SOURCE TYPE: ${sourceType.toUpperCase()}
${youtubeUrl ? `YOUTUBE VIDEO LINK: ${youtubeUrl}` : ''}
${textContent ? `EXTRACTED TEXT / USER NOTES:\n${textContent}` : ''}
${userNotes ? `ADDITIONAL ASPIRANT GUIDANCE: ${userNotes}` : ''}
TARGET SSC EXAM: ${targetExam}
DESIRED QUESTION COUNT: Exactly ${count} questions.
SUBJECT FOCUS: ${subjectArea}

CRITICAL RULES:
1. STRICT GROUNDING: Every question MUST be based directly on the concepts, formulas, rules, GK facts, grammar principles, or reasoning logic found in the provided YouTube video, PDF, or image screenshot. Do not bring unrelated outside topics.
2. BILINGUAL MANDATE: Every single question, all 4 options, and the step-by-step detailed explanation MUST be provided in BOTH English ("en") AND Hindi ("hi").
3. ACCURATE SSC FORMAT:
   - Provide correct_option_index (0, 1, 2, or 3).
   - Step-by-step explanation teaching the shortcut / trick in English and Hindi.
   - Include appropriate sections with time_limit_minutes: 15. If a single subject (e.g. Maths) is targeted, place questions under quantitative_aptitude. If general/mixed, distribute among the 4 sections.
4. Total questions across all sections must sum up to exactly ${count}.

Return ONLY valid JSON matching this schema without markdown wrappers:
{
  "test_id": "${testId}",
  "test_title": "${title}",
  "sections": [
    {
      "section_id": "STRING (reasoning | general_awareness | quantitative_aptitude | english_comprehension)",
      "section_name": {
        "en": "STRING",
        "hi": "STRING"
      },
      "time_limit_minutes": 15,
      "questions": [
        {
          "question_id": 1,
          "topic": "STRING",
          "question_text": {
            "en": "English question text here",
            "hi": "Hindi question text here"
          },
          "options": {
            "en": ["Option A", "Option B", "Option C", "Option D"],
            "hi": ["विकल्प A", "विकल्प B", "विकल्प C", "विकल्प D"]
          },
          "correct_option_index": 0,
          "explanation": {
            "en": "Detailed step-by-step explanation in English",
            "hi": "हिन्दी में विस्तृत समाधान"
          }
        }
      ]
    }
  ]
}`;

    contentParts.push({ text: promptText });

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: { parts: contentParts },
      config: {
        responseMimeType: 'application/json',
      },
    });

    const responseText = response.text || '';
    const cleanJson = responseText.trim().replace(/^```json\s*/i, '').replace(/```$/i, '').trim();
    const parsedTest: SSCMockTest = JSON.parse(cleanJson);

    return res.json(parsedTest);
  } catch (error: any) {
    console.error('Error generating test from source:', error);
    const count = parseInt(String(req.body?.questionCount)) || 10;
    const fallbackTest: SSCMockTest = JSON.parse(JSON.stringify(defaultSSCMockTest));
    fallbackTest.test_id = `SSC-CUSTOM-FALLBACK-${Date.now()}`;
    fallbackTest.test_title = `${req.body?.targetExam || 'SSC'} Custom Study Material Test (${count} Questions)`;

    const perSec = Math.max(1, Math.floor(count / 4));
    fallbackTest.sections = fallbackTest.sections.map((s) => ({
      ...s,
      time_limit_minutes: 15,
      questions: s.questions.slice(0, perSec),
    }));
    return res.json(fallbackTest);
  }
});

// Endpoint: AI Doubt Resolver & Trick Explainer
app.post('/api/explain-doubt', async (req: Request, res: Response) => {
  try {
    const { question, userDoubt } = req.body;
    const ai = getGenAIClient();

    if (!ai) {
      return res.json({
        advice: {
          en: "Pro Tip: Break the question down into given components. For Quant, try digital sum or unit-digit elimination. For Reasoning, check differences and letter positions.",
          hi: "सुझाव: प्रश्न को उसके घटकों में विभाजित करें। गणित के लिए डिजिटल सम या इकाई अंक विधि का उपयोग करें। रीजनिंग के लिए पदों के अंतर और वर्णमाला स्थिति पर ध्यान दें।"
        }
      });
    }

    const prompt = `As an expert SSC faculty, clarify this doubt for an aspirant:
Question (EN): ${question?.question_text?.en}
Question (HI): ${question?.question_text?.hi}
Correct Option Index: ${question?.correct_option_index}
Explanation: ${question?.explanation?.en}

Student's Doubt: ${userDoubt || 'Explain shortcut tricks, elimination techniques, and common pitfalls for this question.'}

Provide a concise, motivating explanation in both English and Hindi with time-saving exam tricks in JSON:
{
  "trick_summary": "Short 1-line exam tip",
  "explanation_en": "Step-by-step breakdown with shortcuts",
  "explanation_hi": "हिन्दी में सरल और ट्रिकी समाधान"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json(parsed);
  } catch (err: any) {
    return res.json({
      trick_summary: "Elimination Technique",
      explanation_en: "Always eliminate obviously incorrect options first to increase your probability of success in negative marking exams.",
      explanation_hi: "नेगेटिव मार्किंग से बचने के लिए सबसे पहले स्पष्ट रूप से गलत विकल्पों को छांटें (Elimination Method)।"
    });
  }
});

// Vite middleware mounting or static serving
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
