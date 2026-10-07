import { useState } from 'react';
import { PPL_MODULES, ALL_QUESTIONS, ALL_SUMMARY_CARDS, ALL_CHAPTERS } from './data/pplData';
import type { PPLModule } from './types/ppl';
import { usePPLProgress } from './context/usePPLProgress';
import { ModuleIcon } from './components/ModuleIcon';
import { TheoryView } from './components/TheoryView';
import { SummaryCardsView } from './components/SummaryCardsView';
import { ExercisesView } from './components/ExercisesView';
import { MockExamModal } from './components/MockExamModal';
import {
  BookOpen,
  FileText,
  HelpCircle,
  Award,
  CheckCircle2,
  BarChart3,
  Plane,
  RotateCcw,
  X,
  ChevronDown,
  Layers,
} from 'lucide-react';

export function App() {
  const {
    stats,
    toggleChapterCompletion,
    toggleCardMastered,
    toggleBookmark,
    recordAnswer,
    saveExamSession,
    resetAllProgress,
  } = usePPLProgress();

  const [selectedModuleId, setSelectedModuleId] = useState<string>('010');
  const [activeTab, setActiveTab] = useState<'theory' | 'summary' | 'exercises' | 'dashboard'>('theory');
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);
  const [examModalModule, setExamModalModule] = useState<PPLModule | undefined>(undefined);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentModule: PPLModule = PPL_MODULES.find((m: PPLModule) => m.id === selectedModuleId) || PPL_MODULES[0];

  // Overall statistics calculations
  const totalChapters = ALL_CHAPTERS.length;
  const completedChaptersCount = stats.completedChapters.length;
  const chaptersProgressPct = Math.round((completedChaptersCount / totalChapters) * 100);

  const totalCards = ALL_SUMMARY_CARDS.length;
  const masteredCardsCount = stats.masteredSummaryCards.length;
  const cardsProgressPct = Math.round((masteredCardsCount / totalCards) * 100);

  const answeredQuestionsCount = stats.history.length;
  const correctAnswersCount = stats.history.filter((h) => h.isCorrect).length;
  const questionsSuccessRate = answeredQuestionsCount > 0
    ? Math.round((correctAnswersCount / answeredQuestionsCount) * 100)
    : 0;

  const passedExams = stats.examSessions.filter((s) => s.passed).length;

  const handleStartExam = (module?: PPLModule) => {
    setExamModalModule(module);
    setIsExamModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const selectModule = (id: string) => {
    setSelectedModuleId(id);
    setIsMobileMenuOpen(false);
    if (activeTab === 'dashboard') {
      setActiveTab('theory');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans pb-20 lg:pb-0">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2">
          {/* Brand & Mobile Module Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-600/30 text-white shrink-0">
              <Plane className="w-5 h-5 transform -rotate-45" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-extrabold text-white text-sm sm:text-base tracking-tight truncate">
                  PPL(A) Théorie
                </span>
                <span className="bg-sky-500/20 text-sky-300 text-[9px] sm:text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-sky-500/30 shrink-0">
                  DGAC
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Programme complet de préparation à l’examen théorique
              </p>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Mobile Module Selector Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 active:bg-slate-700 transition"
              aria-label="Changer de module"
            >
              <ModuleIcon name={currentModule.iconName} className="w-3.5 h-3.5 text-sky-400" />
              <span className="max-w-[85px] truncate font-mono text-[11px]">
                {currentModule.code}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {/* Exam CTA */}
            <button
              onClick={() => handleStartExam(undefined)}
              className="flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 active:scale-95 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-500/20 transition cursor-pointer"
            >
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950 shrink-0" />
              <span className="hidden sm:inline">Examen Blanc Général</span>
              <span className="sm:hidden text-[11px]">Blanc</span>
            </button>

            {/* Dashboard Icon Button (Desktop only, Mobile has bottom tab) */}
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`hidden lg:flex p-2 rounded-xl border transition cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-sky-600 border-sky-500 text-white shadow-md shadow-sky-600/30'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
              title="Tableau de bord et progression"
            >
              <BarChart3 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Module Scroller Strip */}
        <div className="lg:hidden border-t border-slate-800/80 bg-slate-950/80 px-2 py-1.5 overflow-x-auto no-scrollbar flex items-center gap-1.5">
          {PPL_MODULES.map((m) => {
            const isSelected = m.id === selectedModuleId && activeTab !== 'dashboard';
            return (
              <button
                key={m.id}
                onClick={() => selectModule(m.id)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono shrink-0 transition ${
                  isSelected
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-800 text-slate-400 border border-slate-700/60'
                }`}
              >
                <span>{m.code}</span>
                <span className="hidden xs:inline text-[10px] font-sans font-medium">{m.shortName}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar: Modules Selector (Hidden on mobile, drawer replaces it) */}
        <aside className="hidden lg:block w-80 shrink-0 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                9 Modules Officiels
              </span>
              <span className="text-xs text-sky-400 font-semibold">
                {completedChaptersCount}/{totalChapters} cours
              </span>
            </div>

            <div className="space-y-1.5">
              {PPL_MODULES.map((mod: PPLModule) => {
                const isSelected = mod.id === selectedModuleId && activeTab !== 'dashboard';
                const modChapters = mod.chapters.map((c) => c.id);
                const completedInMod = modChapters.filter((id: string) => stats.completedChapters.includes(id)).length;
                const modProgress = Math.round((completedInMod / modChapters.length) * 100);

                return (
                  <button
                    key={mod.id}
                    onClick={() => selectModule(mod.id)}
                    className={`w-full text-left p-3 rounded-xl border transition cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-sky-950/70 border-sky-500 text-white shadow-md shadow-sky-950/50'
                        : 'bg-slate-950/50 border-slate-800/80 text-slate-300 hover:bg-slate-800/60 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className={`p-2 rounded-lg shrink-0 ${
                        isSelected ? 'bg-sky-500 text-slate-950 font-bold' : 'bg-slate-800 text-sky-400'
                      }`}>
                        <ModuleIcon name={mod.iconName} className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-mono text-slate-400 font-bold">{mod.code}</span>
                          <span className="text-xs font-bold truncate">{mod.shortName}</span>
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5">
                          {mod.chapters.length} chap. • {mod.summaryCards.length} fiches • {mod.questions.length} QCM
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1 text-right">
                      {modProgress === 100 ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <span className="text-[10px] font-mono text-slate-400">{modProgress}%</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Progress Widget */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
              État de préparation globale
            </h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Théorie assimilée</span>
                  <span className="text-sky-400 font-bold">{chaptersProgressPct}%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-500 rounded-full transition-all duration-500" style={{ width: `${chaptersProgressPct}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Fiches mémorisées</span>
                  <span className="text-amber-400 font-bold">{cardsProgressPct}%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full transition-all duration-500" style={{ width: `${cardsProgressPct}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Réussite aux QCM</span>
                  <span className={`font-bold ${questionsSuccessRate >= 75 ? 'text-emerald-400' : 'text-slate-300'}`}>
                    {questionsSuccessRate}% (seuil 75%)
                  </span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      questionsSuccessRate >= 75 ? 'bg-emerald-500' : 'bg-slate-600'
                    }`}
                    style={{ width: `${questionsSuccessRate}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 space-y-4 sm:space-y-6">
          {/* Desktop & Tablet Module Tabs Navigation */}
          {activeTab !== 'dashboard' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 shadow-lg flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1 sm:gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setActiveTab('theory')}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                    activeTab === 'theory'
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Théorie</span>
                </button>

                <button
                  onClick={() => setActiveTab('summary')}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                    activeTab === 'summary'
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Fiches Mémo</span>
                </button>

                <button
                  onClick={() => setActiveTab('exercises')}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                    activeTab === 'exercises'
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Exercices & QCM</span>
                </button>
              </div>

              {/* Module-specific mock exam CTA */}
              <button
                onClick={() => handleStartExam(currentModule)}
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 text-xs px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-amber-300 border border-amber-500/30 transition cursor-pointer font-medium"
              >
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Test Blanc Module {currentModule.code}</span>
              </button>
            </div>
          )}

          {/* Tab 1: Theory View */}
          {activeTab === 'theory' && (
            <TheoryView
              module={currentModule}
              completedChapters={stats.completedChapters}
              onToggleChapter={toggleChapterCompletion}
              onNavigateToExercises={() => setActiveTab('exercises')}
              onNavigateToSummaries={() => setActiveTab('summary')}
            />
          )}

          {/* Tab 2: Summary Cards View */}
          {activeTab === 'summary' && (
            <SummaryCardsView
              module={currentModule}
              masteredCards={stats.masteredSummaryCards}
              onToggleMastered={toggleCardMastered}
              onNavigateToExercises={() => setActiveTab('exercises')}
            />
          )}

          {/* Tab 3: Exercises / Questions View */}
          {activeTab === 'exercises' && (
            <ExercisesView
              module={currentModule}
              allQuestions={ALL_QUESTIONS}
              bookmarkedQuestions={stats.bookmarkedQuestions}
              history={stats.history}
              onToggleBookmark={toggleBookmark}
              onRecordAnswer={recordAnswer}
            />
          )}

          {/* Tab 4: Dashboard & Global Progress */}
          {activeTab === 'dashboard' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Tableau de Bord & Progression</h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Suivez en temps réel votre préparation pour être prêt le jour de l’examen DGAC.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('theory')}
                    className="w-full sm:w-auto px-4 py-2 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer"
                  >
                    Reprendre les révisions
                  </button>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <div className="bg-slate-950 p-3.5 sm:p-4 rounded-xl border border-slate-800">
                    <span className="text-[11px] sm:text-xs text-slate-400">Cours complétés</span>
                    <div className="text-xl sm:text-2xl font-bold text-sky-400 mt-1">
                      {completedChaptersCount} / {totalChapters}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">{chaptersProgressPct}% de la théorie</div>
                  </div>

                  <div className="bg-slate-950 p-3.5 sm:p-4 rounded-xl border border-slate-800">
                    <span className="text-[11px] sm:text-xs text-slate-400">Fiches mémorisées</span>
                    <div className="text-xl sm:text-2xl font-bold text-amber-400 mt-1">
                      {masteredCardsCount} / {totalCards}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">{cardsProgressPct}% des fiches</div>
                  </div>

                  <div className="bg-slate-950 p-3.5 sm:p-4 rounded-xl border border-slate-800">
                    <span className="text-[11px] sm:text-xs text-slate-400">Taux de réussite QCM</span>
                    <div className={`text-xl sm:text-2xl font-bold mt-1 ${questionsSuccessRate >= 75 ? 'text-emerald-400' : 'text-sky-400'}`}>
                      {questionsSuccessRate}%
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">{correctAnswersCount} / {answeredQuestionsCount} répondues</div>
                  </div>

                  <div className="bg-slate-950 p-3.5 sm:p-4 rounded-xl border border-slate-800">
                    <span className="text-[11px] sm:text-xs text-slate-400">Examens réussis</span>
                    <div className="text-xl sm:text-2xl font-bold text-purple-400 mt-1">
                      {passedExams} / {stats.examSessions.length}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">Note min. : 75%</div>
                  </div>
                </div>
              </div>

              {/* Progress per module grid */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-xl">
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Progression par Module</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {PPL_MODULES.map((mod: PPLModule) => {
                    const modChapters = mod.chapters.map((c) => c.id);
                    const completed = modChapters.filter((id: string) => stats.completedChapters.includes(id)).length;
                    const pct = Math.round((completed / modChapters.length) * 100);

                    return (
                      <div
                        key={mod.id}
                        className="p-3.5 sm:p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-mono font-bold text-sky-400">Module {mod.code}</span>
                          <span className="text-xs font-bold text-slate-300">{pct}%</span>
                        </div>
                        <h4 className="font-semibold text-white text-xs sm:text-sm mb-2 truncate">{mod.name}</h4>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3">
                          <div className="h-full bg-sky-500 rounded-full" style={{ width: `${pct}%` }} />
                        </div>
                        <button
                          onClick={() => {
                            setSelectedModuleId(mod.id);
                            setActiveTab('theory');
                          }}
                          className="w-full text-center py-2 rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-xs text-slate-300 transition cursor-pointer"
                        >
                          Accéder au module
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Reset Data Button */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={resetAllProgress}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 text-xs text-rose-400 hover:text-rose-300 bg-rose-950/20 hover:bg-rose-950/40 border border-rose-900/50 px-4 py-2.5 rounded-lg transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Réinitialiser les données de progression</span>
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Drawer (Bottom Sheet / Modal) for choosing module */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div
            className="fixed inset-0"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative bg-slate-900 border-t border-slate-700 rounded-t-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden z-10">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                <h3 className="font-bold text-white text-base">Choisir un Module PPL</h3>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 overflow-y-auto space-y-2">
              {PPL_MODULES.map((mod) => {
                const isSelected = mod.id === selectedModuleId;
                const modChapters = mod.chapters.map((c) => c.id);
                const completedInMod = modChapters.filter((id) => stats.completedChapters.includes(id)).length;
                const modProgress = Math.round((completedInMod / modChapters.length) * 100);

                return (
                  <button
                    key={mod.id}
                    onClick={() => selectModule(mod.id)}
                    className={`w-full text-left p-3 rounded-xl border flex items-center justify-between gap-3 active:scale-[0.99] transition ${
                      isSelected
                        ? 'bg-sky-950 border-sky-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-sky-400'}`}>
                        <ModuleIcon name={mod.iconName} className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-mono font-bold text-slate-400">{mod.code}</span>
                          <span className="text-xs font-bold text-white truncate">{mod.shortName}</span>
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {mod.chapters.length} chapitres • {mod.summaryCards.length} fiches • {mod.questions.length} QCM
                        </div>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold text-sky-400 shrink-0">
                      {modProgress}%
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sticky Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-2 py-1.5 flex items-center justify-around shadow-2xl">
        <button
          onClick={() => setActiveTab('theory')}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition ${
            activeTab === 'theory' ? 'text-sky-400 font-bold' : 'text-slate-400'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px]">Théorie</span>
        </button>

        <button
          onClick={() => setActiveTab('summary')}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition ${
            activeTab === 'summary' ? 'text-amber-400 font-bold' : 'text-slate-400'
          }`}
        >
          <FileText className="w-5 h-5" />
          <span className="text-[10px]">Fiches</span>
        </button>

        <button
          onClick={() => setActiveTab('exercises')}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition ${
            activeTab === 'exercises' ? 'text-emerald-400 font-bold' : 'text-slate-400'
          }`}
        >
          <HelpCircle className="w-5 h-5" />
          <span className="text-[10px]">QCM</span>
        </button>

        <button
          onClick={() => setActiveTab('dashboard')}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition ${
            activeTab === 'dashboard' ? 'text-purple-400 font-bold' : 'text-slate-400'
          }`}
        >
          <BarChart3 className="w-5 h-5" />
          <span className="text-[10px]">Stats</span>
        </button>
      </nav>

      {/* Mock Exam Modal */}
      <MockExamModal
        module={examModalModule}
        allQuestions={ALL_QUESTIONS}
        isOpen={isExamModalOpen}
        onClose={() => setIsExamModalOpen(false)}
        onSaveSession={saveExamSession}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950/80 py-4 sm:py-6 text-center text-[11px] sm:text-xs text-slate-500 px-4">
        <p>
          Programme d'entraînement pour l’examen théorique Pilote Privé d’Avion (PPL-A / LAPL) conforme aux normes
          EASA & DGAC.
        </p>
      </footer>
    </div>
  );
}

export default App;
