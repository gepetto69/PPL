import React, { useState, useMemo } from 'react';
import type { PPLModule, TheoryChapter } from '../types/ppl';
import { AviationDiagram } from './AviationDiagram';
import {
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Lightbulb,
  Search,
  BookOpen,
  AlertTriangle,
  BookmarkCheck,
  ListOrdered,
  Sparkles,
  Layers,
  Calculator,
  Compass,
  ArrowRight,
  HelpCircle,
  FileText,
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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showTableOfContents, setShowTableOfContents] = useState<boolean>(false);
  const [studyMode, setStudyMode] = useState<'standard' | 'focused'>('standard');

  const currentChapter: TheoryChapter | undefined =
    module.chapters.find((c) => c.id === selectedChapterId) || module.chapters[0];

  const isCurrentCompleted = currentChapter ? completedChapters.includes(currentChapter.id) : false;

  const currentChapterIndex = module.chapters.findIndex((c) => c.id === currentChapter?.id);
  const prevChapter = currentChapterIndex > 0 ? module.chapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < module.chapters.length - 1 ? module.chapters[currentChapterIndex + 1] : null;

  // Extract headings (H3) for dynamic Table of Contents
  const tableOfContents = useMemo(() => {
    if (!currentChapter) return [];
    const lines = currentChapter.content.split('\n');
    return lines
      .filter((line) => line.startsWith('### '))
      .map((line, idx) => ({
        id: `section-${idx}`,
        title: line.replace('### ', '').trim(),
      }));
  }, [currentChapter]);

  // Parse paragraphs and callout blocks
  const parsedBlocks = useMemo(() => {
    if (!currentChapter) return [];
    const rawParagraphs = currentChapter.content.split('\n\n');
    return rawParagraphs.map((block, index) => {
      // Check for custom callout containers :::type Title
      if (block.startsWith(':::definition')) {
        const firstLineEnd = block.indexOf('\n');
        const title = block.slice(13, firstLineEnd).trim();
        const content = block.slice(firstLineEnd + 1).replace(/:::\s*$/, '').trim();
        return { type: 'definition', title, content, id: `block-${index}` };
      }
      if (block.startsWith(':::piege')) {
        const firstLineEnd = block.indexOf('\n');
        const title = block.slice(8, firstLineEnd).trim();
        const content = block.slice(firstLineEnd + 1).replace(/:::\s*$/, '').trim();
        return { type: 'piege', title, content, id: `block-${index}` };
      }
      if (block.startsWith(':::formule')) {
        const firstLineEnd = block.indexOf('\n');
        const title = block.slice(10, firstLineEnd).trim();
        const content = block.slice(firstLineEnd + 1).replace(/:::\s*$/, '').trim();
        return { type: 'formule', title, content, id: `block-${index}` };
      }
      if (block.startsWith(':::memo')) {
        const firstLineEnd = block.indexOf('\n');
        const title = block.slice(7, firstLineEnd).trim();
        const content = block.slice(firstLineEnd + 1).replace(/:::\s*$/, '').trim();
        return { type: 'memo', title, content, id: `block-${index}` };
      }
      if (block.startsWith(':::exemple')) {
        const firstLineEnd = block.indexOf('\n');
        const title = block.slice(10, firstLineEnd).trim();
        const content = block.slice(firstLineEnd + 1).replace(/:::\s*$/, '').trim();
        return { type: 'exemple', title, content, id: `block-${index}` };
      }
      if (block.startsWith('### ')) {
        return { type: 'h3', content: block.replace('### ', '').trim(), id: `block-${index}` };
      }
      if (block.startsWith('#### ')) {
        return { type: 'h4', content: block.replace('#### ', '').trim(), id: `block-${index}` };
      }
      if (block.startsWith('| ')) {
        return { type: 'table', content: block, id: `block-${index}` };
      }
      if (block.startsWith('```')) {
        const clean = block.replace(/```[a-z]*\n?/g, '').replace(/```$/g, '');
        return { type: 'code', content: clean, id: `block-${index}` };
      }
      if (block.startsWith('- ')) {
        return { type: 'list', content: block, id: `block-${index}` };
      }
      return { type: 'paragraph', content: block, id: `block-${index}` };
    });
  }, [currentChapter]);

  // Filter blocks if search is active
  const filteredBlocks = useMemo(() => {
    if (!searchQuery.trim()) return parsedBlocks;
    const q = searchQuery.toLowerCase();
    return parsedBlocks.filter((b) => {
      const matchContent = b.content?.toLowerCase().includes(q);
      const matchTitle = (b as any).title?.toLowerCase().includes(q);
      return matchContent || matchTitle;
    });
  }, [parsedBlocks, searchQuery]);

  return (
    <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
      {/* Chapter Selection and Module Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold block">
                Module {module.code} — Cours Théorique EASA / DGAC
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">
                <BookOpen className="w-3 h-3 text-sky-400" />
                {module.chapters.length} chapitres
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">{module.name}</h2>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onNavigateToSummaries}
              className="flex-1 sm:flex-initial text-center text-xs px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 active:bg-amber-500/30 transition cursor-pointer flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Fiches ({module.summaryCards.length})</span>
            </button>
            <button
              onClick={onNavigateToExercises}
              className="flex-1 sm:flex-initial text-center text-xs px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/30 hover:bg-sky-500/20 active:bg-sky-500/30 transition cursor-pointer flex items-center justify-center gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
              <span>QCM ({module.questions.length})</span>
            </button>
          </div>
        </div>

        {/* Chapters Tabs with Responsive Flex Wrap */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
          {module.chapters.map((chap, idx) => {
            const isCompleted = completedChapters.includes(chap.id);
            const isSelected = chap.id === currentChapter?.id;
            return (
              <button
                key={chap.id}
                onClick={() => {
                  setSelectedChapterId(chap.id);
                  setSearchQuery('');
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium shrink-0 transition cursor-pointer ${
                  isSelected
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30 font-semibold'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-emerald-400'}`} />
                ) : (
                  <span className={`w-4 h-4 rounded-full border text-[10px] flex items-center justify-center shrink-0 ${
                    isSelected ? 'border-white text-white' : 'border-slate-500 text-slate-400'
                  }`}>
                    {idx + 1}
                  </span>
                )}
                <span className="whitespace-nowrap">{chap.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Study Control Bar : Search, Sommaire, Mode Focus */}
      <div className="bg-slate-900/90 backdrop-blur border border-slate-800 rounded-xl p-2.5 sm:p-3 flex flex-wrap items-center justify-between gap-2.5">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher une notion, formule, piège dans ce chapitre..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {tableOfContents.length > 0 && (
            <button
              onClick={() => setShowTableOfContents(!showTableOfContents)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition cursor-pointer ${
                showTableOfContents
                  ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <ListOrdered className="w-3.5 h-3.5 text-sky-400" />
              <span>Sommaire ({tableOfContents.length})</span>
            </button>
          )}

          <button
            onClick={() => setStudyMode(studyMode === 'standard' ? 'focused' : 'standard')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition cursor-pointer ${
              studyMode === 'focused'
                ? 'bg-indigo-600 text-white border-indigo-500'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
            title="Masquer les éléments secondaires pour une lecture concentrée"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Mode Focus</span>
          </button>
        </div>
      </div>

      {/* Sommaire interactif déroulant */}
      {showTableOfContents && tableOfContents.length > 0 && (
        <div className="bg-slate-900 border border-sky-900/50 rounded-xl p-3.5 shadow-lg animate-in fade-in">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              Sommaire du Chapitre
            </span>
            <button
              onClick={() => setShowTableOfContents(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              Fermer
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {tableOfContents.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(item.id);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                  setShowTableOfContents(false);
                }}
                className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-800/80 text-xs text-slate-300 hover:text-sky-300 transition"
              >
                <span className="w-4 h-4 rounded bg-sky-950 text-sky-400 text-[10px] font-mono flex items-center justify-center shrink-0 border border-sky-800/60">
                  {idx + 1}
                </span>
                <span className="truncate">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Main Chapter Content */}
      {currentChapter && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
          {/* Chapter Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                <span className="flex items-center gap-1 text-sky-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Temps estimé : {currentChapter.readTime}</span>
                </span>
                <span>•</span>
                <span className="text-slate-400">Programme Officiel EASA Part-FCL</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-white leading-tight">{currentChapter.title}</h1>
            </div>

            <button
              onClick={() => onToggleChapter(currentChapter.id)}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                isCurrentCompleted
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-700 hover:bg-emerald-900 active:bg-emerald-800 shadow-md shadow-emerald-950/40'
                  : 'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 active:bg-slate-600 hover:text-white'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${isCurrentCompleted ? 'text-emerald-400' : 'text-slate-400'}`} />
              <span>{isCurrentCompleted ? 'Chapitre Validé' : 'Marquer comme lu & compris'}</span>
            </button>
          </div>

          {/* Interactive diagram if present and standard mode */}
          {currentChapter.diagramType && (
            <AviationDiagram type={currentChapter.diagramType} />
          )}

          {/* Result count when searching */}
          {searchQuery && (
            <div className="bg-sky-950/40 border border-sky-800/60 rounded-xl p-3 text-xs text-sky-200 flex items-center justify-between mt-4">
              <span>{filteredBlocks.length} élément(s) correspondent à votre recherche : <strong>"{searchQuery}"</strong></span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-sky-400 hover:underline cursor-pointer"
              >
                Réinitialiser
              </button>
            </div>
          )}

          {/* Render Rich Chapter Blocks */}
          <div className="space-y-4 sm:space-y-5 text-slate-300 leading-relaxed mt-5 sm:mt-6">
            {filteredBlocks.map((block) => {
              // Custom Callouts
              if (block.type === 'definition') {
                return (
                  <div key={block.id} className="bg-sky-950/30 border-l-4 border-sky-400 border border-sky-900/40 rounded-xl p-3.5 sm:p-4 my-3">
                    <div className="flex items-center gap-2 text-sky-300 font-bold text-xs sm:text-sm mb-1.5">
                      <BookOpen className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{block.title || 'Définition Réglementaire'}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed"
                       dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(block.content, searchQuery) }}
                    />
                  </div>
                );
              }

              if (block.type === 'piege') {
                return (
                  <div key={block.id} className="bg-rose-950/30 border-l-4 border-rose-500 border border-rose-900/40 rounded-xl p-3.5 sm:p-4 my-3">
                    <div className="flex items-center gap-2 text-rose-300 font-bold text-xs sm:text-sm mb-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{block.title || 'Piège Classique de l’Examen DGAC'}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-rose-100/90 space-y-1.5 leading-relaxed"
                         dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(block.content, searchQuery) }}
                    />
                  </div>
                );
              }

              if (block.type === 'formule') {
                return (
                  <div key={block.id} className="bg-amber-950/30 border-l-4 border-amber-400 border border-amber-900/40 rounded-xl p-3.5 sm:p-4 my-3">
                    <div className="flex items-center gap-2 text-amber-300 font-bold text-xs sm:text-sm mb-1.5">
                      <Calculator className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{block.title || 'Formule et Calcul Aéronautique'}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-amber-100/90 space-y-1.5 leading-relaxed"
                         dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(block.content, searchQuery) }}
                    />
                  </div>
                );
              }

              if (block.type === 'memo') {
                return (
                  <div key={block.id} className="bg-emerald-950/30 border-l-4 border-emerald-400 border border-emerald-900/40 rounded-xl p-3.5 sm:p-4 my-3">
                    <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs sm:text-sm mb-1.5">
                      <BookmarkCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{block.title || 'Mémo & Règle Mémotechnique'}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-emerald-100/90 space-y-1.5 leading-relaxed"
                         dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(block.content, searchQuery) }}
                    />
                  </div>
                );
              }

              if (block.type === 'exemple') {
                return (
                  <div key={block.id} className="bg-purple-950/30 border-l-4 border-purple-400 border border-purple-900/40 rounded-xl p-3.5 sm:p-4 my-3">
                    <div className="flex items-center gap-2 text-purple-300 font-bold text-xs sm:text-sm mb-1.5">
                      <Layers className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{block.title || 'Exemple Pratique'}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-purple-100/90 space-y-1.5 leading-relaxed"
                         dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(block.content, searchQuery) }}
                    />
                  </div>
                );
              }

              if (block.type === 'h3') {
                // Find matching index in TOC for anchor
                const tocIndex = tableOfContents.findIndex(t => t.title === block.content);
                const anchorId = tocIndex !== -1 ? `section-${tocIndex}` : undefined;
                return (
                  <h3
                    key={block.id}
                    id={anchorId}
                    className="text-base sm:text-lg font-bold text-sky-400 pt-4 pb-1.5 border-b border-slate-800 flex items-center gap-2 scroll-mt-20"
                  >
                    <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                    <span>{block.content}</span>
                  </h3>
                );
              }

              if (block.type === 'h4') {
                return (
                  <h4 key={block.id} className="text-sm sm:text-base font-semibold text-slate-200 pt-2 mb-1">
                    {block.content}
                  </h4>
                );
              }

              if (block.type === 'table') {
                return (
                  <div key={block.id} className="overflow-x-auto my-3 rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-3">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      {renderMarkdownTable(block.content, searchQuery)}
                    </table>
                  </div>
                );
              }

              if (block.type === 'code') {
                return (
                  <pre key={block.id} className="bg-slate-950 border border-slate-800 rounded-xl p-3 sm:p-4 font-mono text-[11px] sm:text-xs text-sky-300 overflow-x-auto my-3">
                    {block.content}
                  </pre>
                );
              }

              if (block.type === 'list') {
                return (
                  <ul key={block.id} className="list-disc pl-4 sm:pl-5 space-y-1.5 text-slate-300 my-2 text-xs sm:text-sm md:text-base">
                    {block.content.split('\n').map((li, lidx) => (
                      <li key={lidx}>
                        <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(li.replace(/^- /, ''), searchQuery) }} />
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={block.id} className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed"
                   dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(block.content, searchQuery) }}
                />
              );
            })}
          </div>

          {/* Key Takeaways Box */}
          {currentChapter.keyTakeaways && currentChapter.keyTakeaways.length > 0 && (
            <div className="mt-8 bg-sky-950/30 border border-sky-800/60 rounded-2xl p-4 sm:p-6 shadow-inner">
              <div className="flex items-center gap-2 text-sky-300 font-bold text-xs sm:text-sm mb-3">
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0" />
                <span>Points Clés Incontournables pour l’Examen Théorique DGAC</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentChapter.keyTakeaways.map((point, pidx) => (
                  <li key={pidx} className="flex items-start gap-2 text-xs sm:text-sm text-sky-100/90 bg-slate-900/80 p-2.5 rounded-xl border border-sky-900/40">
                    <ChevronRight className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Chapter Navigation (Précédent / Suivant) */}
          <div className="mt-8 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {prevChapter ? (
              <button
                onClick={() => {
                  setSelectedChapterId(prevChapter.id);
                  setSearchQuery('');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition cursor-pointer border border-slate-700"
              >
                <ChevronLeft className="w-4 h-4 text-sky-400 shrink-0" />
                <div className="text-left">
                  <span className="block text-[10px] text-slate-400 font-normal">Chapitre précédent</span>
                  <span className="truncate max-w-[200px] block">{prevChapter.title}</span>
                </div>
              </button>
            ) : <div />}

            {nextChapter && (
              <button
                onClick={() => {
                  setSelectedChapterId(nextChapter.id);
                  setSearchQuery('');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-end gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-sky-600/20 text-sky-200 hover:bg-sky-600/30 hover:text-white transition cursor-pointer border border-sky-500/40"
              >
                <div className="text-right">
                  <span className="block text-[10px] text-sky-300/80 font-normal">Chapitre suivant</span>
                  <span className="truncate max-w-[200px] block">{nextChapter.title}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-sky-400 shrink-0" />
              </button>
            )}
          </div>

          {/* Bottom Next Actions : QCM et Fiches */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Prêt pour valider vos connaissances sur ce module ?
            </div>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={onNavigateToSummaries}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 active:bg-amber-500/30 transition cursor-pointer"
              >
                <span>Réviser les Fiches</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onNavigateToExercises}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-sky-600 text-white hover:bg-sky-500 active:bg-sky-700 shadow-md shadow-sky-600/30 transition cursor-pointer"
              >
                <span>S'entraîner aux QCM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Render markdown tables
function renderMarkdownTable(markdown: string, query?: string) {
  const lines = markdown.trim().split('\n').filter(l => l.trim().length > 0);
  if (lines.length < 2) return null;

  const headerLine = lines[0];
  const bodyLines = lines.slice(2); // Skip separator line |---|---|

  const headers = headerLine.split('|').map(c => c.trim()).filter(c => c.length > 0);

  return (
    <>
      <thead>
        <tr className="border-b border-slate-800 text-sky-300 font-semibold text-xs">
          {headers.map((h, i) => (
            <th key={i} className="py-2 px-3">
              <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(h, query) }} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800/60 text-slate-300 text-xs">
        {bodyLines.map((line, rIdx) => {
          const cells = line.split('|').map(c => c.trim()).filter(c => c.length > 0);
          return (
            <tr key={rIdx} className="hover:bg-slate-800/40 transition">
              {cells.map((c, cIdx) => (
                <td key={cIdx} className="py-2 px-3">
                  <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(c, query) }} />
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </>
  );
}

// Helper for bold, italic, code and math notation rendering with search highlighting
function formatInlineMarkdown(text: string, query?: string): string {
  if (!text) return '';
  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-slate-200 italic">$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-slate-800 text-sky-300 px-1.5 py-0.5 rounded text-[11px] sm:text-xs font-mono">$1</code>')
    .replace(/\\\[(.*?)\\\]/g, '<div class="my-2 p-2 bg-slate-950/80 border border-slate-800 rounded font-mono text-center text-sky-300 text-xs sm:text-sm overflow-x-auto">$1</div>')
    .replace(/\\\((.*?)\\\)/g, '<span class="font-mono text-sky-300 text-xs">$1</span>');

  if (query && query.trim().length > 1) {
    const escaped = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Highlight occurrences outside HTML tags
    const regex = new RegExp(`(?![^<]*>)(${escaped})`, 'gi');
    formatted = formatted.replace(regex, '<mark class="bg-amber-400 text-slate-950 font-semibold px-1 rounded">$1</mark>');
  }

  return formatted;
}
