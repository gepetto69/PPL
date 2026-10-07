export interface Question {
  id: string;
  moduleId: string;
  question: string;
  options: string[];
  correctAnswer: number; // index 0-3
  explanation: string;
  difficulty?: 'facile' | 'moyen' | 'difficile';
  reference?: string; // référence cours ou fiche
}

export interface SummaryCard {
  id: string;
  moduleId: string;
  title: string;
  keyPoints: string[];
  mnemonics?: string[];
  formula?: string;
  alertNote?: string;
}

export interface TheoryChapter {
  id: string;
  moduleId: string;
  title: string;
  readTime: string;
  content: string; // Markdown or rich structured text
  keyTakeaways: string[];
  subsections?: {
    id: string;
    title: string;
    content: string;
    badge?: string;
    examTip?: string;
  }[];
  diagramType?: 'metar' | 'altimeter' | 'atmosphere' | 'aerodynamics' | 'circuits' | 'airspaces' | 'weight_balance' | 'turn_coordinator' | 'vor';
}

export interface PPLModule {
  id: string;
  code: string;
  name: string;
  shortName: string;
  iconName: string; // Lucide icon key
  color: string; // tailwind color class prefix (e.g., 'sky', 'emerald', 'indigo')
  description: string;
  examQuestionsCount: number; // officiel DGAC/EASA
  examDurationMinutes: number;
  chapters: TheoryChapter[];
  summaryCards: SummaryCard[];
  questions: Question[];
}

export interface UserAnswerRecord {
  questionId: string;
  moduleId: string;
  selectedOption: number;
  isCorrect: boolean;
  timestamp: number;
}

export interface ExamSession {
  id: string;
  date: number;
  moduleId?: string; // undefined means all modules (Global mock exam)
  totalQuestions: number;
  correctAnswers: number;
  scorePercentage: number;
  passed: boolean; // >= 75%
  timeSpentSeconds: number;
  answers: Record<string, number>; // questionId -> selectedOption
}

export interface UserStats {
  completedChapters: string[]; // chapterIds
  masteredSummaryCards: string[]; // cardIds
  bookmarkedQuestions: string[]; // questionIds
  history: UserAnswerRecord[];
  examSessions: ExamSession[];
}
