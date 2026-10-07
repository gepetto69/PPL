import React, { useState } from 'react';
import type { PPLModule, TheoryChapter } from '../types/ppl';
import { AviationDiagram } from './AviationDiagram';
import {
  Clock,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
} from 'lucide-react';

interface TheoryViewProps {
  module: PPLModule;
  completedChapters: string[];
  onToggleChapter: (id: string) => void;
  onNavigateToExercises: () => void;
  onNavigateToSummaries: () => void;
}

export const TheoryView: React.FC<TheoryViewProps> = ({
  module,
  completedChapters,
  onToggleChapter,
  onNavigateToExercises,
  onNavigateToSummaries,
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>(module.chapters[0]?.id || '');

  const currentChapter: TheoryChapter | undefined =
    module.chapters.find((c) => c.id === selectedChapterId) || module.chapters[0];

  const isCurrentCompleted = currentChapter ? completedChapters.includes(currentChapter.id) : false;

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Chapter Selection Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold block">
              Module {module.code} — Cours Théorique EASA / DGAC
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">{module.name}</h2>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onNavigateToSummaries}
              className="flex-1 sm:flex-initial text-center text-xs px-2.5 py-1.5 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 active:bg-amber-500/30 transition cursor-pointer"
            >
              Fiches ({module.summaryCards.length})
            </button>
            <button
              onClick={onNavigateToExercises}
              className="flex-1 sm:flex-initial text-center text-xs px-2.5 py-1.5 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/30 hover:bg-sky-500/20 active:bg-sky-500/30 transition cursor-pointer"
            >
              QCM ({module.questions.length})
            </button>
          </div>
        </div>

        {/* Chapters Tabs with Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pt-2 border-t border-slate-800 -mx-1 px-1">
          {module.chapters.map((chap, idx) => {
            const isCompleted = completedChapters.includes(chap.id);
            const isSelected = chap.id === currentChapter?.id;
            return (
              <button
                key={chap.id}
                onClick={() => setSelectedChapterId(chap.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium shrink-0 transition cursor-pointer ${
                  isSelected
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-emerald-400'}`} />
                ) : (
                  <span className="w-4 h-4 rounded-full border border-slate-500 text-[10px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                )}
                <span className="whitespace-nowrap">{chap.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Chapter Content */}
      {currentChapter && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>Temps estimé : {currentChapter.readTime}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-white leading-tight">{currentChapter.title}</h1>
            </div>

            <button
              onClick={() => onToggleChapter(currentChapter.id)}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition cursor-pointer ${
                isCurrentCompleted
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-700 hover:bg-emerald-900 active:bg-emerald-800'
                  : 'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 active:bg-slate-600 hover:text-white'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${isCurrentCompleted ? 'text-emerald-400' : 'text-slate-400'}`} />
              <span>{isCurrentCompleted ? 'Chapitre validé' : 'Marquer comme lu & compris'}</span>
            </button>
          </div>

          {/* Interactive diagram if present */}
          {currentChapter.diagramType && (
            <AviationDiagram type={currentChapter.diagramType} />
          )}

          {/* Chapter Body Markdown Render */}
          <div className="prose prose-invert max-w-none text-slate-300 space-y-4 leading-relaxed mt-5 sm:mt-6">
            {currentChapter.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-base sm:text-lg font-bold text-sky-400 mt-5 sm:mt-6 mb-2 border-b border-slate-800 pb-1">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('#### ')) {
                return (
                  <h4 key={index} className="text-sm sm:text-base font-semibold text-slate-200 mt-3 sm:mt-4 mb-1.5">
                    {paragraph.replace('#### ', '')}
                  </h4>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={index} className="list-disc pl-4 sm:pl-5 space-y-1.5 text-slate-300 my-2 text-xs sm:text-sm md:text-base">
                    {paragraph.split('\n').map((li, lidx) => (
                      <li key={lidx}>
                        <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(li.replace(/^- /, '')) }} />
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('```')) {
                const codeContent = paragraph.replace(/```[a-z]*\n?/g, '').replace(/```$/g, '');
                return (
                  <pre key={index} className="bg-slate-950 border border-slate-800 rounded-xl p-3 sm:p-4 font-mono text-[11px] sm:text-xs text-sky-300 overflow-x-auto my-3">
                    {codeContent}
                  </pre>
                );
              }
              return (
                <p key={index} className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed"
                   dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(paragraph) }}
                />
              );
            })}
          </div>

          {/* Key Takeaways Box */}
          {currentChapter.keyTakeaways && currentChapter.keyTakeaways.length > 0 && (
            <div className="mt-6 sm:mt-8 bg-sky-950/30 border border-sky-800/60 rounded-xl p-4 sm:p-5 shadow-inner">
              <div className="flex items-center gap-2 text-sky-300 font-bold text-xs sm:text-sm mb-2.5">
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0" />
                <span>Points Clés pour l’Examen Théorique DGAC</span>
              </div>
              <ul className="space-y-1.5 sm:space-y-2">
                {currentChapter.keyTakeaways.map((point, pidx) => (
                  <li key={pidx} className="flex items-start gap-2 text-xs sm:text-sm text-sky-100/90">
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Helper for bold and simple markdown rendering
function formatInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-slate-200 italic">$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-slate-800 text-sky-300 px-1.5 py-0.5 rounded text-[11px] sm:text-xs font-mono">$1</code>');
}
