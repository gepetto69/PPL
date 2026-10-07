import { useState, useEffect } from 'react';
import type { UserStats, UserAnswerRecord, ExamSession } from '../types/ppl';

const STORAGE_KEY = 'ppl_theory_user_stats_v1';

const defaultStats: UserStats = {
  completedChapters: [],
  masteredSummaryCards: [],
  bookmarkedQuestions: [],
  history: [],
  examSessions: [],
};

export function usePPLProgress() {
  const [stats, setStats] = useState<UserStats>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load stats from localStorage', e);
    }
    return defaultStats;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (e) {
      console.error('Failed to save stats to localStorage', e);
    }
  }, [stats]);

  const toggleChapterCompletion = (chapterId: string) => {
    setStats((prev) => {
      const exists = prev.completedChapters.includes(chapterId);
      return {
        ...prev,
        completedChapters: exists
          ? prev.completedChapters.filter((id) => id !== chapterId)
          : [...prev.completedChapters, chapterId],
      };
    });
  };

  const toggleCardMastered = (cardId: string) => {
    setStats((prev) => {
      const exists = prev.masteredSummaryCards.includes(cardId);
      return {
        ...prev,
        masteredSummaryCards: exists
          ? prev.masteredSummaryCards.filter((id) => id !== cardId)
          : [...prev.masteredSummaryCards, cardId],
      };
    });
  };

  const toggleBookmark = (questionId: string) => {
    setStats((prev) => {
      const exists = prev.bookmarkedQuestions.includes(questionId);
      return {
        ...prev,
        bookmarkedQuestions: exists
          ? prev.bookmarkedQuestions.filter((id) => id !== questionId)
          : [...prev.bookmarkedQuestions, questionId],
      };
    });
  };

  const recordAnswer = (record: UserAnswerRecord) => {
    setStats((prev) => ({
      ...prev,
      history: [record, ...prev.history.filter((h) => h.questionId !== record.questionId)],
    }));
  };

  const saveExamSession = (session: ExamSession) => {
    setStats((prev) => ({
      ...prev,
      examSessions: [session, ...prev.examSessions],
    }));
  };

  const resetAllProgress = () => {
    if (window.confirm('Voulez-vous vraiment réinitialiser toute votre progression de révision ?')) {
      setStats(defaultStats);
    }
  };

  return {
    stats,
    toggleChapterCompletion,
    toggleCardMastered,
    toggleBookmark,
    recordAnswer,
    saveExamSession,
    resetAllProgress,
  };
}
