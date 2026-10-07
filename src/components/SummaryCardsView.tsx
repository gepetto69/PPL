import React, { useState } from 'react';
import type { PPLModule } from '../types/ppl';
import {
  FileText,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  BookmarkCheck,
  Search,
} from 'lucide-react';

interface SummaryCardsViewProps {
  module: PPLModule;
  masteredCards: string[];
  onToggleMastered: (cardId: string) => void;
  onNavigateToExercises: () => void;
}

export const SummaryCardsView: React.FC<SummaryCardsViewProps> = ({
  module,
  masteredCards,
  onToggleMastered,
  onNavigateToExercises,
}) => {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredCards = module.summaryCards.filter((card) =>
    card.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    card.keyPoints.some((p) => p.toLowerCase().includes(filterQuery.toLowerCase())) ||
    (card.mnemonics && card.mnemonics.some((m) => m.toLowerCase().includes(filterQuery.toLowerCase())))
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Fiches Récapitulatives & Mnémoniques
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
              Fiches Mémo : {module.name}
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-1">
              Les règles d’or, formules indispensables, pièges d’examen et astuces à retenir par cœur.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs text-slate-400">Fiches mémorisées</span>
              <div className="text-base font-bold text-amber-400">
                {module.summaryCards.filter((c) => masteredCards.includes(c.id)).length} / {module.summaryCards.length}
              </div>
            </div>
            <button
              onClick={onNavigateToExercises}
              className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs md:text-sm font-semibold transition cursor-pointer shadow-md shadow-sky-600/30"
            >
              Tester avec les QCM
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="mt-4 pt-4 border-t border-slate-800 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-6" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Rechercher une notion, formule, règle (ex: VFR, 7700, finesse, QNH)..."
            className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredCards.map((card) => {
          const isMastered = masteredCards.includes(card.id);

          return (
            <div
              key={card.id}
              className={`border rounded-xl p-5 shadow-lg flex flex-col justify-between transition relative overflow-hidden ${
                isMastered
                  ? 'bg-slate-900/90 border-emerald-500/40'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Corner badge if mastered */}
              {isMastered && (
                <div className="absolute top-0 right-0 bg-emerald-600/20 text-emerald-400 border-b border-l border-emerald-500/30 px-2.5 py-0.5 rounded-bl-lg text-[10px] font-bold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  <span>Maîtrisée</span>
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                  <h3 className="text-base font-bold text-white pr-16">{card.title}</h3>
                </div>

                {/* Key Points */}
                <ul className="space-y-2 mb-4 text-xs sm:text-sm text-slate-300">
                  {card.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Formula Box */}
                {card.formula && (
                  <div className="bg-slate-950 border border-slate-800 rounded-lg p-2.5 my-3 text-center">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono block mb-0.5">
                      Formule à retenir
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-amber-300">
                      {card.formula}
                    </span>
                  </div>
                )}

                {/* Mnemonics */}
                {card.mnemonics && card.mnemonics.length > 0 && (
                  <div className="bg-purple-950/20 border border-purple-800/40 rounded-lg p-3 my-3">
                    <div className="flex items-center gap-1.5 text-xs text-purple-300 font-semibold mb-1">
                      <Lightbulb className="w-3.5 h-3.5 text-purple-400" />
                      <span>Moyen Mnémonique :</span>
                    </div>
                    {card.mnemonics.map((mn, midx) => (
                      <p key={midx} className="text-xs text-purple-200/90 italic font-medium">
                        {mn}
                      </p>
                    ))}
                  </div>
                )}

                {/* Alert Warning */}
                {card.alertNote && (
                  <div className="bg-rose-950/30 border border-rose-800/50 rounded-lg p-3 my-3">
                    <div className="flex items-center gap-1.5 text-xs text-rose-400 font-semibold mb-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Piège Fréquent à l’Examen :</span>
                    </div>
                    <p className="text-xs text-rose-200/90">{card.alertNote}</p>
                  </div>
                )}
              </div>

              {/* Master toggle button */}
              <div className="pt-4 mt-3 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => onToggleMastered(card.id)}
                  className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                    isMastered
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-700 hover:bg-emerald-900'
                      : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <BookmarkCheck className={`w-3.5 h-3.5 ${isMastered ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span>{isMastered ? 'Fiche sue' : 'Marquer comme sue'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCards.length === 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center text-slate-400">
          Aucune fiche ne correspond à votre recherche "{filterQuery}".
        </div>
      )}
    </div>
  );
};
