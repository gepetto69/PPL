import React, { useState } from 'react';
import type { PPLModule, Question, UserAnswerRecord } from '../types/ppl';
import confetti from 'canvas-confetti';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Bookmark,
  ChevronRight,
  RotateCcw,
  Award,
} from 'lucide-react';

interface ExercisesViewProps {
  module?: PPLModule; // if undefined, full mock exam or cross-module
  allQuestions: Question[];
  bookmarkedQuestions: string[];
  history: UserAnswerRecord[];
  onToggleBookmark: (questionId: string) => void;
  onRecordAnswer: (record: UserAnswerRecord) => void;
  onNavigateToTheory?: () => void;
}

export const ExercisesView: React.FC<ExercisesViewProps> = ({
  module,
  allQuestions,
  bookmarkedQuestions,
  history,
  onToggleBookmark,
  onRecordAnswer,
}) => {
  const targetQuestions = module ? module.questions : allQuestions;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [filterMode, setFilterMode] = useState<'all' | 'errors' | 'bookmarked'>('all');

  // Filter questions based on mode
  const filteredQuestions = targetQuestions.filter((q) => {
    if (filterMode === 'bookmarked') {
      return bookmarkedQuestions.includes(q.id);
    }
    if (filterMode === 'errors') {
      const pastAns = history.find((h) => h.questionId === q.id);
      return pastAns && !pastAns.isCorrect;
    }
    return true;
  });

  const currentQ: Question | undefined = filteredQuestions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (hasAnswered) return;
    setSelectedOption(idx);
    setHasAnswered(true);

    if (!currentQ) return;
    const isCorrect = idx === currentQ.correctAnswer;

    if (isCorrect) {
      setScore((prev) => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#38bdf8', '#4ade80', '#fbbf24'],
      });
    } else {
      setScore((prev) => ({ ...prev, total: prev.total + 1 }));
    }

    onRecordAnswer({
      questionId: currentQ.id,
      moduleId: currentQ.moduleId,
      selectedOption: idx,
      isCorrect,
      timestamp: Date.now(),
    });
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleResetSession = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore({ correct: 0, total: 0 });
  };

  const isBookmarked = currentQ ? bookmarkedQuestions.includes(currentQ.id) : false;

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Exercise Mode Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold block">
              QCM d’Entraînement Officiel DGAC / EASA
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-white mt-0.5">
              {module ? `Module ${module.code} : ${module.shortName}` : 'Toutes les questions théoriques PPL'}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Format officiel 4 choix (A, B, C, D). Seuil de réussite officiel : <strong>75%</strong>.
            </p>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-0 border-slate-800">
            <div className="bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 text-left sm:text-center">
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono block">Score session</span>
              <span className={`text-sm sm:text-base font-bold ${score.total > 0 && (score.correct / score.total) >= 0.75 ? 'text-emerald-400' : 'text-sky-400'}`}>
                {score.correct} / {score.total} {score.total > 0 ? `(${Math.round((score.correct / score.total) * 100)}%)` : ''}
              </span>
            </div>

            <button
              onClick={handleResetSession}
              title="Recommencer la série"
              className="p-2.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-300 rounded-xl transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filters bar with horizontal scroll on mobile */}
        <div className="flex overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-800 -mx-1 px-1">
          <button
            onClick={() => { setFilterMode('all'); setCurrentIndex(0); setHasAnswered(false); setSelectedOption(null); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap shrink-0 transition cursor-pointer ${
              filterMode === 'all'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Toutes ({targetQuestions.length})
          </button>
          <button
            onClick={() => { setFilterMode('bookmarked'); setCurrentIndex(0); setHasAnswered(false); setSelectedOption(null); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap shrink-0 transition cursor-pointer ${
              filterMode === 'bookmarked'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Favoris ({targetQuestions.filter((q) => bookmarkedQuestions.includes(q.id)).length})
          </button>
          <button
            onClick={() => { setFilterMode('errors'); setCurrentIndex(0); setHasAnswered(false); setSelectedOption(null); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap shrink-0 transition cursor-pointer ${
              filterMode === 'errors'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Erreurs à revoir
          </button>
        </div>
      </div>

      {/* Main Question Card */}
      {currentQ ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
          {/* Progress in series */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono bg-sky-950 text-sky-300 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-sky-800">
                {currentIndex + 1} / {filteredQuestions.length}
              </span>
              {currentQ.difficulty && (
                <span className={`text-[10px] sm:text-[11px] px-2 py-0.5 rounded-lg capitalize ${
                  currentQ.difficulty === 'facile'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : currentQ.difficulty === 'moyen'
                    ? 'bg-amber-950 text-amber-300 border border-amber-800'
                    : 'bg-rose-950 text-rose-300 border border-rose-800'
                }`}>
                  {currentQ.difficulty}
                </span>
              )}
            </div>

            <button
              onClick={() => onToggleBookmark(currentQ.id)}
              className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-xl transition cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-950 text-amber-300 border border-amber-700'
                  : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700 active:bg-slate-700'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span className="text-[11px]">{isBookmarked ? 'Sauvegardée' : 'Mettre de côté'}</span>
            </button>
          </div>

          {/* Question Text */}
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-6 leading-snug">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-2.5 sm:space-y-3">
            {currentQ.options.map((opt, oIndex) => {
              const letter = String.fromCharCode(65 + oIndex); // A, B, C, D
              let optionStyles = 'bg-slate-950 border-slate-800 hover:border-slate-700 active:bg-slate-800/80 text-slate-200';

              if (hasAnswered) {
                if (oIndex === currentQ.correctAnswer) {
                  optionStyles = 'bg-emerald-950/70 border-emerald-500 text-emerald-200 shadow-sm shadow-emerald-900/30';
                } else if (selectedOption === oIndex) {
                  optionStyles = 'bg-rose-950/70 border-rose-500 text-rose-200';
                } else {
                  optionStyles = 'bg-slate-950/50 border-slate-800/60 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={oIndex}
                  disabled={hasAnswered}
                  onClick={() => handleSelectOption(oIndex)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl border flex items-center justify-between gap-3 transition cursor-pointer ${optionStyles}`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center font-bold text-xs shrink-0">
                      {letter}
                    </span>
                    <span className="text-xs sm:text-sm md:text-base leading-snug">{opt}</span>
                  </div>

                  {hasAnswered && oIndex === currentQ.correctAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                  )}
                  {hasAnswered && selectedOption === oIndex && oIndex !== currentQ.correctAnswer && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Correction & Explanation */}
          {hasAnswered && (
            <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-slate-800 animate-fadeIn">
              <div className={`p-3.5 sm:p-4 rounded-xl border ${
                selectedOption === currentQ.correctAnswer
                  ? 'bg-emerald-950/30 border-emerald-800 text-emerald-100'
                  : 'bg-rose-950/30 border-rose-800 text-rose-100'
              }`}>
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm mb-1.5">
                  {selectedOption === currentQ.correctAnswer ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                      <span className="text-emerald-400">Excellente réponse !</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 shrink-0" />
                      <span className="text-rose-400">Réponse incorrecte</span>
                    </>
                  )}
                </div>
                <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-white">Explication théorique : </strong>
                  {currentQ.explanation}
                </div>
              </div>

              {/* Navigation button */}
              <div className="flex justify-end mt-4">
                {currentIndex < filteredQuestions.length - 1 ? (
                  <button
                    onClick={handleNextQuestion}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white rounded-xl font-semibold text-xs sm:text-sm transition cursor-pointer shadow-lg shadow-sky-600/30"
                  >
                    <span>Question suivante</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleResetSession}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-xl font-semibold text-xs sm:text-sm transition cursor-pointer shadow-lg shadow-emerald-600/30"
                  >
                    <Award className="w-4 h-4" />
                    <span>Série terminée ! Recommencer</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 text-center">
          <HelpCircle className="w-10 h-10 sm:w-12 sm:h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base sm:text-lg font-bold text-white mb-1">Aucune question dans ce filtre</h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-4 max-w-sm mx-auto">
            {filterMode === 'bookmarked'
              ? 'Vous n’avez pas encore ajouté de questions en favoris.'
              : filterMode === 'errors'
              ? 'Félicitations ! Aucune erreur enregistrée à revoir.'
              : 'Aucune question disponible.'}
          </p>
          <button
            onClick={() => setFilterMode('all')}
            className="w-full sm:w-auto px-4 py-2.5 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer"
          >
            Afficher toutes les questions
          </button>
        </div>
      )}
    </div>
  );
};
