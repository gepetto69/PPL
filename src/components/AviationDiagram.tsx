import React from 'react';
import {
  Gauge,
  Wind,
  Layers,
  Activity,
  CircleDot,
  Radio,
  CloudSun,
  Scale,
  Thermometer,
} from 'lucide-react';

interface DiagramProps {
  type: string;
}

export const AviationDiagram: React.FC<DiagramProps> = ({ type }) => {
  switch (type) {
    case 'aerodynamics':
      return (
        <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-3.5 sm:p-5 my-4 sm:my-6 shadow-xl">
          <div className="flex items-center gap-2 mb-2 sm:mb-3 text-sky-400 font-semibold text-xs sm:text-sm">
            <Wind className="w-4 h-4 shrink-0" />
            <span className="leading-tight">Schéma : Écoulement et Portance (Bernoulli)</span>
          </div>
          <div className="relative h-40 sm:h-48 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden p-2 sm:p-4">
            <svg className="w-full h-full" viewBox="0 0 500 200">
              <defs>
                <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="suctionGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.5" />
                </linearGradient>
              </defs>

              {/* Upper Streamlines (Extrados) */}
              <path d="M 20 60 Q 200 15, 480 65" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6 4" />
              <path d="M 20 75 Q 200 40, 480 80" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 3" />

              {/* Suction Area (Dépression) */}
              <path d="M 120 100 Q 230 45, 360 120 Z" fill="url(#suctionGrad)" />

              {/* Wing Profile (Airfoil) */}
              <path
                d="M 120 105 C 150 70, 260 70, 360 120 C 260 122, 170 120, 120 105 Z"
                fill="#334155"
                stroke="#94a3b8"
                strokeWidth="2.5"
              />

              {/* Lower Streamlines (Intrados) */}
              <path d="M 20 125 Q 200 135, 480 125" fill="none" stroke="#60a5fa" strokeWidth="2" />
              <path d="M 20 145 Q 200 150, 480 145" fill="none" stroke="#60a5fa" strokeWidth="1.5" />

              {/* Lift Vector */}
              <line x1="230" y1="80" x2="230" y2="25" stroke="#4ade80" strokeWidth="3" />
              <polygon points="230,15 224,28 236,28" fill="#4ade80" />
              <text x="240" y="30" fill="#4ade80" fontSize="13" fontWeight="bold">Rz (~75% extrados)</text>

              {/* Drag Vector */}
              <line x1="230" y1="80" x2="310" y2="80" stroke="#f87171" strokeWidth="2.5" />
              <polygon points="318,80 306,75 306,85" fill="#f87171" />
              <text x="325" y="84" fill="#f87171" fontSize="12" fontWeight="bold">Rx</text>

              {/* Labels */}
              <text x="140" y="60" fill="#38bdf8" fontSize="11" fontWeight="bold">Dépression extrados</text>
              <text x="170" y="145" fill="#93c5fd" fontSize="11">Surpression</text>
            </svg>
          </div>
          <p className="text-[11px] sm:text-xs text-slate-400 mt-2 text-center">
            La dépression sur l'extrados génère l'essentiel de la portance. Si l'incidence dépasse 16°, les filets décrochent.
          </p>
        </div>
      );

    case 'turn_coordinator':
      return (
        <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-3.5 sm:p-5 my-4 sm:my-6 shadow-xl">
          <div className="flex items-center gap-2 mb-2 sm:mb-3 text-amber-400 font-semibold text-xs sm:text-sm">
            <Activity className="w-4 h-4 shrink-0" />
            <span className="leading-tight">Facteur de Charge en Virage : n = 1 / cos(inclinaison)</span>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="bg-slate-950 p-2.5 sm:p-3 rounded-xl border border-slate-800 text-center">
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-mono">0°</span>
              <div className="text-base sm:text-2xl font-bold text-sky-400 my-0.5 sm:my-1">1.0 g</div>
              <div className="text-[10px] sm:text-xs text-slate-300">Vs norm.</div>
            </div>
            <div className="bg-slate-950 p-2.5 sm:p-3 rounded-xl border border-slate-800 text-center">
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-mono">45°</span>
              <div className="text-base sm:text-2xl font-bold text-amber-400 my-0.5 sm:my-1">1.41 g</div>
              <div className="text-[10px] sm:text-xs text-slate-300">Vs +19%</div>
            </div>
            <div className="bg-slate-950 p-2.5 sm:p-3 rounded-xl border border-amber-900/50 bg-amber-950/20 text-center">
              <span className="text-[10px] sm:text-xs text-amber-400 uppercase font-mono font-bold">60°</span>
              <div className="text-base sm:text-2xl font-bold text-rose-500 my-0.5 sm:my-1">2.0 g</div>
              <div className="text-[10px] sm:text-xs text-rose-300 font-bold">Vs +41% !</div>
            </div>
          </div>
        </div>
      );

    case 'altimeter':
      return (
        <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-3.5 sm:p-5 my-4 sm:my-6 shadow-xl">
          <div className="flex items-center gap-2 mb-2 sm:mb-3 text-cyan-400 font-semibold text-xs sm:text-sm">
            <Gauge className="w-4 h-4 shrink-0" />
            <span className="leading-tight">Repères Altimétriques : QNH, QFE et Calage Standard</span>
          </div>
          <div className="space-y-2.5 sm:space-y-3">
            <div className="bg-slate-950 p-3 sm:p-3.5 rounded-xl border-l-4 border-sky-500 border border-slate-800">
              <div className="flex flex-wrap justify-between items-center gap-1">
                <span className="font-bold text-sky-400 text-xs sm:text-sm">Calage QNH (Altitude)</span>
                <span className="text-[10px] bg-sky-950/80 text-sky-300 px-2 py-0.5 rounded border border-sky-800 font-mono">Niveau mer (MSL)</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1">
                Au sol sur le parking, l'altimètre indique <strong>l'altitude de l'aérodrome</strong> par rapport à la mer.
              </p>
            </div>
            <div className="bg-slate-950 p-3 sm:p-3.5 rounded-xl border-l-4 border-emerald-500 border border-slate-800">
              <div className="flex flex-wrap justify-between items-center gap-1">
                <span className="font-bold text-emerald-400 text-xs sm:text-sm">Calage QFE (Hauteur)</span>
                <span className="text-[10px] bg-emerald-950/80 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800 font-mono">Hauteur sol</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1">
                Au sol sur la piste, l'altimètre indique <strong>zéro pied (0 ft)</strong>.
              </p>
            </div>
            <div className="bg-slate-950 p-3 sm:p-3.5 rounded-xl border-l-4 border-purple-500 border border-slate-800">
              <div className="flex flex-wrap justify-between items-center gap-1">
                <span className="font-bold text-purple-400 text-xs sm:text-sm">Calage Standard 1013,25 hPa</span>
                <span className="text-[10px] bg-purple-950/80 text-purple-300 px-2 py-0.5 rounded border border-purple-800 font-mono">FL (Flight Levels)</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1">
                Affiché au-dessus de l'altitude de transition pour la séparation des vols (ex: FL 65 = 6 500 ft standard).
              </p>
            </div>
          </div>
        </div>
      );

    case 'airspaces':
      return (
        <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-3.5 sm:p-5 my-4 sm:my-6 shadow-xl">
          <div className="flex items-center gap-2 mb-2 sm:mb-3 text-indigo-400 font-semibold text-xs sm:text-sm">
            <Layers className="w-4 h-4 shrink-0" />
            <span className="leading-tight">Espaces Aériens OACI / SERA pour le VFR</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="bg-rose-950/40 border border-rose-800/60 p-2.5 sm:p-3 rounded-xl text-center">
              <div className="text-rose-400 font-bold text-sm sm:text-base mb-0.5">Classe A</div>
              <span className="bg-rose-900 text-rose-200 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">INTERDIT</span>
              <p className="text-slate-300 mt-1.5 text-[10px] sm:text-[11px] leading-tight">IFR uniquement.</p>
            </div>
            <div className="bg-sky-950/40 border border-sky-800/60 p-2.5 sm:p-3 rounded-xl text-center">
              <div className="text-sky-400 font-bold text-sm sm:text-base mb-0.5">B, C, D</div>
              <span className="bg-sky-900 text-sky-200 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">CLAIRANCE</span>
              <p className="text-slate-300 mt-1.5 text-[10px] sm:text-[11px] leading-tight">Radio + Transpondeur.</p>
            </div>
            <div className="bg-emerald-950/40 border border-emerald-800/60 p-2.5 sm:p-3 rounded-xl text-center">
              <div className="text-emerald-400 font-bold text-sm sm:text-base mb-0.5">Classe E</div>
              <span className="bg-emerald-900 text-emerald-200 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">LIBRE JOUR</span>
              <p className="text-slate-300 mt-1.5 text-[10px] sm:text-[11px] leading-tight">Pas de clairance VFR jour.</p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700 p-2.5 sm:p-3 rounded-xl text-center">
              <div className="text-slate-300 font-bold text-sm sm:text-base mb-0.5">Classe G</div>
              <span className="bg-slate-700 text-slate-200 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">NON CONTRÔLÉ</span>
              <p className="text-slate-300 mt-1.5 text-[10px] sm:text-[11px] leading-tight">Auto-information.</p>
            </div>
          </div>
        </div>
      );

    case 'circuits':
      return (
        <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-3.5 sm:p-5 my-4 sm:my-6 shadow-xl">
          <div className="flex items-center gap-2 mb-2 sm:mb-3 text-emerald-400 font-semibold text-xs sm:text-sm">
            <CircleDot className="w-4 h-4 shrink-0" />
            <span className="leading-tight">Circuit de Piste VFR (Virages à gauche à 1000 ft sol)</span>
          </div>
          <div className="relative h-48 sm:h-56 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center p-2 sm:p-3">
            <svg className="w-full h-full" viewBox="0 0 500 240">
              {/* Runway */}
              <rect x="180" y="165" width="140" height="18" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" rx="3" />
              <line x1="190" y1="174" x2="310" y2="174" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="8 6" />
              <text x="235" y="158" fill="#94a3b8" fontSize="10" fontWeight="bold">PISTE 27</text>

              {/* Circuit Path Rectangle */}
              <rect x="70" y="40" width="360" height="134" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="5 5" rx="20" />

              {/* Legs Labels */}
              <text x="180" y="30" fill="#38bdf8" fontSize="11" fontWeight="bold">3. Vent Arrière - 1000 ft</text>
              <polygon points="250,38 240,42 250,46" fill="#38bdf8" />

              <text x="15" y="110" fill="#38bdf8" fontSize="10" fontWeight="bold">4. Base</text>
              <polygon points="68,115 72,125 76,115" fill="#38bdf8" />

              <text x="95" y="195" fill="#4ade80" fontSize="11" fontWeight="bold">5. Finale</text>
              <polygon points="175,174 165,170 165,178" fill="#4ade80" />

              <text x="325" y="195" fill="#38bdf8" fontSize="10" fontWeight="bold">1. Montée Init.</text>
              <polygon points="350,174 360,170 360,178" fill="#38bdf8" />

              <text x="410" y="110" fill="#38bdf8" fontSize="10" fontWeight="bold">2. Traversier</text>
              <polygon points="428,95 432,85 436,95" fill="#38bdf8" />
            </svg>
          </div>
        </div>
      );

    case 'vor':
      return (
        <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-3.5 sm:p-5 my-4 sm:my-6 shadow-xl">
          <div className="flex items-center gap-2 mb-2 sm:mb-3 text-indigo-400 font-semibold text-xs sm:text-sm">
            <Radio className="w-4 h-4 shrink-0" />
            <span className="leading-tight">Radionavigation : L'Indicateur VOR et Radiales</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-xs">
            <div className="bg-slate-950 p-2.5 sm:p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-indigo-300">Radiale Magnétique</span>
              <p className="text-slate-300 mt-0.5 text-[11px] leading-tight">Rayonne DEPUIS la station de 000° à 359°.</p>
            </div>
            <div className="bg-slate-950 p-2.5 sm:p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-indigo-300">Aiguille CDI</span>
              <p className="text-slate-300 mt-0.5 text-[11px] leading-tight">1 point = 2° d'écart. 5 points = 10°.</p>
            </div>
            <div className="bg-slate-950 p-2.5 sm:p-3 rounded-xl border border-slate-800">
              <span className="font-bold text-indigo-300">Indépendance de Cap</span>
              <p className="text-slate-300 mt-0.5 text-[11px] leading-tight">Dépend de la position, jamais du cap de l'avion !</p>
            </div>
          </div>
        </div>
      );

    case 'metar':
      return (
        <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-3.5 sm:p-5 my-4 sm:my-6 shadow-xl">
          <div className="flex items-center gap-2 mb-2 sm:mb-3 text-sky-400 font-semibold text-xs sm:text-sm">
            <CloudSun className="w-4 h-4 shrink-0" />
            <span className="leading-tight">Anatomie d'un Message METAR Aéronautique</span>
          </div>
          <div className="bg-slate-950 p-3 sm:p-4 rounded-xl border border-slate-800 mb-3 font-mono text-xs sm:text-sm text-sky-200 overflow-x-auto whitespace-nowrap">
            <span className="text-amber-400 font-bold">LFPO</span>{' '}
            <span className="text-slate-400">121400Z</span>{' '}
            <span className="text-emerald-400 font-bold">24015G25KT</span>{' '}
            <span className="text-cyan-300 font-bold">9999</span>{' '}
            <span className="text-indigo-300">-RA</span>{' '}
            <span className="text-amber-300 font-bold">BKN018</span>{' '}
            <span className="text-rose-300">14/09</span>{' '}
            <span className="text-purple-400 font-bold">Q1018</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
            <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
              <span className="text-amber-400 font-semibold block">LFPO 121400Z</span>
              <span className="text-slate-400">Paris-Orly le 12 à 14h00 UTC</span>
            </div>
            <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
              <span className="text-emerald-400 font-semibold block">24015G25KT</span>
              <span className="text-slate-400">Vent du 240° / 15 kt, rafales 25 kt</span>
            </div>
            <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
              <span className="text-amber-300 font-semibold block">BKN018 (Plafond)</span>
              <span className="text-slate-400">5 à 7 octas à 1 800 ft / sol</span>
            </div>
            <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
              <span className="text-purple-400 font-semibold block">Q1018</span>
              <span className="text-slate-400">QNH 1018 hPa (calage altimètre)</span>
            </div>
          </div>
        </div>
      );

    case 'weight_balance':
      return (
        <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-3.5 sm:p-5 my-4 sm:my-6 shadow-xl">
          <div className="flex items-center gap-2 mb-2 sm:mb-3 text-amber-400 font-semibold text-xs sm:text-sm">
            <Scale className="w-4 h-4 shrink-0" />
            <span className="leading-tight">Principe du Masse et Centrage (Moment = Masse × Bras de Levier)</span>
          </div>
          <div className="relative h-44 sm:h-52 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center p-3">
            <svg className="w-full h-full" viewBox="0 0 500 180">
              {/* Reference datum line */}
              <line x1="60" y1="20" x2="60" y2="150" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 3" />
              <text x="35" y="15" fill="#f59e0b" fontSize="10" fontWeight="bold">RÉFÉRENCE (DATUM)</text>

              {/* Aircraft fuselage outline simplified */}
              <path d="M 60 70 C 120 40, 360 40, 440 60 L 450 40 L 455 70 L 410 80 C 330 85, 120 85, 60 70 Z" fill="#334155" stroke="#64748b" strokeWidth="2" />

              {/* Beam line */}
              <line x1="60" y1="110" x2="450" y2="110" stroke="#94a3b8" strokeWidth="3" />

              {/* Forward limit */}
              <line x1="180" y1="95" x2="180" y2="125" stroke="#38bdf8" strokeWidth="2" />
              <text x="145" y="140" fill="#38bdf8" fontSize="10">Limite Avant</text>

              {/* Aft limit */}
              <line x1="260" y1="95" x2="260" y2="125" stroke="#f43f5e" strokeWidth="2" />
              <text x="240" y="140" fill="#f43f5e" fontSize="10">Limite Arrière</text>

              {/* CG Safe Zone */}
              <rect x="180" y="103" width="80" height="14" fill="#10b981" fillOpacity="0.35" rx="3" />
              <text x="185" y="98" fill="#34d399" fontSize="10" fontWeight="bold">ZONE AUTORISÉE</text>

              {/* Fulcrum (CG) */}
              <polygon points="215,112 205,130 225,130" fill="#34d399" />
              <text x="207" y="145" fill="#34d399" fontSize="11" fontWeight="bold">CG</text>

              {/* Lever arm arrow */}
              <line x1="60" y1="45" x2="215" y2="45" stroke="#e2e8f0" strokeWidth="1.5" markerEnd="url(#arrow)" />
              <text x="110" y="38" fill="#e2e8f0" fontSize="10">Bras de levier</text>
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2 text-[11px]">
            <div className="bg-sky-950/40 border border-sky-800/40 p-2 rounded-lg">
              <span className="text-sky-300 font-semibold block">Centrage Trop Avant</span>
              <p className="text-slate-300 text-[10px]">Stabilité forte, mais décollage difficile et manque d'autorité à cabrer à l'atterrissage.</p>
            </div>
            <div className="bg-rose-950/40 border border-rose-800/40 p-2 rounded-lg">
              <span className="text-rose-300 font-semibold block">Centrage Trop Arrière (DANGER)</span>
              <p className="text-slate-300 text-[10px]">Instable, commandes hypersensibles, risque d'entrée en vrille à plat irrécupérable !</p>
            </div>
          </div>
        </div>
      );

    case 'atmosphere':
      return (
        <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-3.5 sm:p-5 my-4 sm:my-6 shadow-xl">
          <div className="flex items-center gap-2 mb-2 sm:mb-3 text-cyan-400 font-semibold text-xs sm:text-sm">
            <Thermometer className="w-4 h-4 shrink-0" />
            <span className="leading-tight">Profil de l'Atmosphère Type OACI (ISA)</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px] font-mono">NIVEAU DE LA MER</span>
              <div className="text-base font-bold text-sky-400 my-0.5">0 ft / 0 m</div>
              <div className="text-[11px] text-emerald-400 font-mono">+15 °C</div>
              <div className="text-[10px] text-slate-300 font-mono">1 013,25 hPa</div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px] font-mono">FL 100 (SEUIL VMC)</span>
              <div className="text-base font-bold text-sky-400 my-0.5">10 000 ft</div>
              <div className="text-[11px] text-cyan-400 font-mono">-5 °C</div>
              <div className="text-[10px] text-slate-300 font-mono">~700 hPa</div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px] font-mono">TROPOPAUSE</span>
              <div className="text-base font-bold text-sky-400 my-0.5">36 090 ft</div>
              <div className="text-[11px] text-purple-400 font-mono">-56,5 °C</div>
              <div className="text-[10px] text-slate-300 font-mono">226 hPa</div>
            </div>
          </div>
          <p className="text-[11px] text-slate-400 mt-2 text-center">
            Gradient thermique : <strong>-2 °C par 1 000 ft</strong> (-0,65 °C / 100 m). Gradient barométrique : <strong>1 hPa pour 27 ft</strong> au niveau de la mer.
          </p>
        </div>
      );

    default:
      return null;
  }
};
