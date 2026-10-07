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
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-600/30 text-white">
              <Plane className="w-5 h-5 transform -rotate-45" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-base tracking-tight">PPL(A) Théorie</span>
                <span className="bg-sky-500/20 text-sky-300 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-sky-500/30">
                  EASA / DGAC
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Programme complet de préparation à l’examen théorique Pilote Privé
              </p>
            </div>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleStartExam(undefined)}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition cursor-pointer"
            >
              <Award className="w-4 h-4 text-slate-950" />
              <span className="hidden sm:inline">Examen Blanc Général</span>
              <span className="sm:hidden">Examen</span>
            </button>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`p-2 rounded-xl border transition cursor-pointer ${
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
      </header>

      {/* Main Container Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar: Modules Selector */}
        <aside className="w-full lg:w-80 shrink-0 space-y-4">
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
                    onClick={() => {
                      setSelectedModuleId(mod.id);
                      if (activeTab === 'dashboard') setActiveTab('theory');
                    }}
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
        <main className="flex-1 space-y-6">
          {/* Main Module Tabs Navigation (Théorie, Fiches, Exercices) */}
          {activeTab !== 'dashboard' && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 shadow-lg flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => setActiveTab('theory')}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                    activeTab === 'theory'
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>1. Théorie Complète</span>
                </button>

                <button
                  onClick={() => setActiveTab('summary')}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                    activeTab === 'summary'
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>2. Fiches Récapitulatives</span>
                </button>

                <button
                  onClick={() => setActiveTab('exercises')}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                    activeTab === 'exercises'
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>3. Exercices & QCM</span>
                </button>
              </div>

              {/* Module-specific mock exam CTA */}
              <button
                onClick={() => handleStartExam(currentModule)}
                className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 transition cursor-pointer font-medium"
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
            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Tableau de Bord & Progression Globale</h2>
                    <p className="text-sm text-slate-400 mt-1">
                      Suivez en temps réel votre préparation pour être prêt le jour de l’examen DGAC.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('theory')}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-sm font-semibold transition cursor-pointer"
                  >
                    Reprendre les révisions
                  </button>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-400">Cours complétés</span>
                    <div className="text-2xl font-bold text-sky-400 mt-1">
                      {completedChaptersCount} / {totalChapters}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{chaptersProgressPct}% de la théorie</div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-400">Fiches mémorisées</span>
                    <div className="text-2xl font-bold text-amber-400 mt-1">
                      {masteredCardsCount} / {totalCards}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{cardsProgressPct}% des fiches</div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-400">Taux de réussite QCM</span>
                    <div className={`text-2xl font-bold mt-1 ${questionsSuccessRate >= 75 ? 'text-emerald-400' : 'text-sky-400'}`}>
                      {questionsSuccessRate}%
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{correctAnswersCount} / {answeredQuestionsCount} répondues</div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-400">Examens blancs réussis</span>
                    <div className="text-2xl font-bold text-purple-400 mt-1">
                      {passedExams} / {stats.examSessions.length}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Note minimale requise : 75%</div>
                  </div>
                </div>
              </div>

              {/* Progress per module grid */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <h3 className="text-lg font-bold text-white mb-4">Progression détaillée par Module</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {PPL_MODULES.map((mod: PPLModule) => {
                    const modChapters = mod.chapters.map((c) => c.id);
                    const completed = modChapters.filter((id: string) => stats.completedChapters.includes(id)).length;
                    const pct = Math.round((completed / modChapters.length) * 100);

                    return (
                      <div
                        key={mod.id}
                        className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono font-bold text-sky-400">Module {mod.code}</span>
                          <span className="text-xs font-bold text-slate-300">{pct}%</span>
                        </div>
                        <h4 className="font-semibold text-white text-sm mb-2 truncate">{mod.name}</h4>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3">
                          <div className="h-full bg-sky-500 rounded-full" style={{ width: `${pct}%` }} />
                        </div>
                        <button
                          onClick={() => {
                            setSelectedModuleId(mod.id);
                            setActiveTab('theory');
                          }}
                          className="w-full text-center py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition cursor-pointer"
                        >
                          Accéder au module
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Reset Data Button */}
              <div className="flex justify-end pt-4">
                <button
                  onClick={resetAllProgress}
                  className="flex items-center gap-2 text-xs text-rose-400 hover:text-rose-300 bg-rose-950/20 hover:bg-rose-950/40 border border-rose-900/50 px-4 py-2 rounded-lg transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Réinitialiser les données de progression</span>
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Mock Exam Modal */}
      <MockExamModal
        module={examModalModule}
        allQuestions={ALL_QUESTIONS}
        isOpen={isExamModalOpen}
        onClose={() => setIsExamModalOpen(false)}
        onSaveSession={saveExamSession}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950/80 py-6 text-center text-xs text-slate-500">
        <p>
          Programme d'entraînement pour l’examen théorique Pilote Privé d’Avion (PPL-A / LAPL) conforme aux normes
          EASA & DGAC.
        </p>
      </footer>
    </div>
  );
}

export default App;
