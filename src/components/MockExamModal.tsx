import React, { useState, useEffect } from 'react';
import type { PPLModule, Question, ExamSession } from '../types/ppl';
import confetti from 'canvas-confetti';
import {
  Timer,
  AlertOctagon,
  CheckCircle2,
  XCircle,
  Award,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';

interface MockExamModalProps {
  module?: PPLModule;
  allQuestions: Question[];
  isOpen: boolean;
  onClose: () => void;
  onSaveSession: (session: ExamSession) => void;
}

export const MockExamModal: React.FC<MockExamModalProps> = ({
  module,
  allQuestions,
  isOpen,
  onClose,
  onSaveSession,
}) => {
  if (!isOpen) return null;

  // Prepare questions
  const pool = module ? module.questions : allQuestions;
  const examDurationSeconds = (module ? module.examDurationMinutes : 45) * 60;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [timeLeft, setTimeLeft] = useState<number>(examDurationSeconds);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Initialize random questions
  useEffect(() => {
    // Shuffle pool
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const count = Math.min(shuffled.length, module ? module.examQuestionsCount : 20);
    setQuestions(shuffled.slice(0, count));
    setUserAnswers({});
    setTimeLeft(examDurationSeconds);
    setIsFinished(false);
    setCurrentIndex(0);
  }, [module, pool, examDurationSeconds]);

  // Timer countdown
  useEffect(() => {
    if (isFinished || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isFinished, timeLeft]);

  const handleSelectAnswer = (qId: string, optionIdx: number) => {
    if (isFinished) return;
    setUserAnswers((prev) => ({
      ...prev,
      [qId]: optionIdx,
    }));
  };

  const handleFinishExam = () => {
    setIsFinished(true);

    let correctCount = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const scorePercentage = Math.round((correctCount / questions.length) * 100);
    const passed = scorePercentage >= 75; // Seuil officiel DGAC/EASA 75%

    if (passed) {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
      });
    }

    onSaveSession({
      id: 'exam-' + Date.now(),
      date: Date.now(),
      moduleId: module?.id,
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      scorePercentage,
      passed,
      timeSpentSeconds: examDurationSeconds - timeLeft,
      answers: userAnswers,
    });
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ = questions[currentIndex];
  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-hidden">
      <div className="bg-slate-900 border-t sm:border border-slate-700 w-full sm:max-w-3xl rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col h-[94vh] sm:h-auto sm:max-h-[90vh] overflow-hidden">
        {/* Exam Header */}
        <div className="p-3.5 sm:p-5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="min-w-0 pr-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-mono font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0">
                Mode DGAC
              </span>
              <span className="text-[11px] text-slate-400">75% requis</span>
            </div>
            <h2 className="text-sm sm:text-lg font-bold text-white mt-0.5 truncate">
              {module ? `Blanc : ${module.shortName}` : 'Examen Blanc Général'}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {!isFinished && (
              <div className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border font-mono text-xs sm:text-sm font-bold ${
                timeLeft < 300
                  ? 'bg-rose-950/70 text-rose-300 border-rose-600 animate-pulse'
                  : 'bg-slate-800 text-sky-400 border-slate-700'
              }`}>
                <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-xl bg-slate-800 transition"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-3.5 sm:p-6 overflow-y-auto flex-1 space-y-4 sm:space-y-6">
          {!isFinished ? (
            <>
              {/* Question progress pills with horizontal scroll on mobile */}
              <div className="flex overflow-x-auto no-scrollbar gap-1.5 pb-2 border-b border-slate-800 -mx-1 px-1">
                {questions.map((q, idx) => {
                  const isAnswered = userAnswers[q.id] !== undefined;
                  const isCurrent = idx === currentIndex;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-mono font-bold transition shrink-0 cursor-pointer ${
                        isCurrent
                          ? 'ring-2 ring-sky-400 bg-sky-600 text-white'
                          : isAnswered
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {currentQ && (
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Question {currentIndex + 1} / {questions.length}</span>
                    <span className="text-sky-400">{answeredCount} répondu(es)</span>
                  </div>

                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug">
                    {currentQ.question}
                  </h3>

                  <div className="space-y-2 sm:space-y-2.5 pt-1">
                    {currentQ.options.map((opt, optIdx) => {
                      const letter = String.fromCharCode(65 + optIdx);
                      const isSelected = userAnswers[currentQ.id] === optIdx;

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectAnswer(currentQ.id, optIdx)}
                          className={`w-full text-left p-3 sm:p-3.5 rounded-xl border flex items-center gap-2.5 sm:gap-3 transition cursor-pointer active:scale-[0.99] ${
                            isSelected
                              ? 'bg-sky-950/90 border-sky-500 text-sky-100 shadow-sm'
                              : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300'
                          }`}
                        >
                          <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                            isSelected ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400'
                          }`}>
                            {letter}
                          </span>
                          <span className="text-xs sm:text-sm leading-snug">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Results Screen */
            <div className="space-y-4 sm:space-y-6">
              {(() => {
                let correctCount = 0;
                questions.forEach((q) => {
                  if (userAnswers[q.id] === q.correctAnswer) {
                    correctCount++;
                  }
                });
                const percentage = Math.round((correctCount / questions.length) * 100);
                const passed = percentage >= 75;

                return (
                  <div>
                    <div className={`p-4 sm:p-6 rounded-2xl border text-center ${
                      passed
                        ? 'bg-emerald-950/40 border-emerald-500/60'
                        : 'bg-rose-950/40 border-rose-500/60'
                    }`}>
                      <div className="inline-flex p-2.5 sm:p-3 rounded-full mb-2 sm:mb-3 bg-slate-900 border border-slate-800">
                        {passed ? (
                          <Award className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
                        ) : (
                          <AlertOctagon className="w-8 h-8 sm:w-10 sm:h-10 text-rose-400" />
                        )}
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white">
                        {passed ? 'FÉLICITATIONS ! EXAMEN RÉUSSI' : 'AJOURNÉ (Seuil 75% non atteint)'}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1">
                        {passed
                          ? 'Vous avez franchi le niveau d’exigence requis par la DGAC.'
                          : 'Révisez les chapitres théoriques et les fiches mémo avant de retenter.'}
                      </p>

                      <div className="flex justify-center items-center gap-4 sm:gap-6 mt-4 sm:mt-6">
                        <div>
                          <div className="text-2xl sm:text-3xl font-black text-white">{percentage}%</div>
                          <span className="text-[10px] sm:text-xs text-slate-400">Score global</span>
                        </div>
                        <div className="h-8 sm:h-10 w-px bg-slate-800" />
                        <div>
                          <div className="text-2xl sm:text-3xl font-black text-sky-400">{correctCount} / {questions.length}</div>
                          <span className="text-[10px] sm:text-xs text-slate-400">Bonnes réponses</span>
                        </div>
                      </div>
                    </div>

                    {/* Review of all answers */}
                    <div className="mt-6 space-y-3">
                      <h4 className="font-bold text-white text-sm sm:text-base">Correction détaillée de l’examen :</h4>
                      {questions.map((q, idx) => {
                        const userAns = userAnswers[q.id];
                        const isCorrect = userAns === q.correctAnswer;
                        return (
                          <div key={q.id} className="p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <span className="font-bold text-white">
                                {idx + 1}. {q.question}
                              </span>
                              {isCorrect ? (
                                <span className="flex items-center gap-1 text-emerald-400 font-bold shrink-0 text-[11px]">
                                  <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                                </span>
                              ) : (
                                <span className="flex items-center gap-1 text-rose-400 font-bold shrink-0 text-[11px]">
                                  <XCircle className="w-3.5 h-3.5" /> Erreur
                                </span>
                              )}
                            </div>
                            <div className="text-slate-400 mb-1">
                              Votre réponse :{' '}
                              <span className={isCorrect ? 'text-emerald-300 font-semibold' : 'text-rose-300 font-semibold'}>
                                {userAns !== undefined ? q.options[userAns] : 'Non répondu'}
                              </span>
                            </div>
                            {!isCorrect && (
                              <div className="text-emerald-400 mb-1">
                                Bonne réponse : <strong>{q.options[q.correctAnswer]}</strong>
                              </div>
                            )}
                            <div className="p-2 bg-slate-900 rounded-lg border border-slate-800/80 text-slate-300 text-[11px] mt-1.5">
                              <strong className="text-sky-300">Explication : </strong> {q.explanation}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-3 sm:p-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between shrink-0">
          {!isFinished ? (
            <>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 disabled:opacity-40 text-white transition cursor-pointer"
                  aria-label="Précédent"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  disabled={currentIndex === questions.length - 1}
                  onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 disabled:opacity-40 text-white transition cursor-pointer"
                  aria-label="Suivant"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleFinishExam}
                className="px-3 sm:px-4 py-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-xl font-semibold text-xs sm:text-sm transition cursor-pointer shadow-md shadow-emerald-600/30"
              >
                Terminer ({answeredCount}/{questions.length})
              </button>
            </>
          ) : (
            <div className="flex justify-end w-full">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white rounded-xl font-semibold text-xs sm:text-sm transition cursor-pointer"
              >
                Fermer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
