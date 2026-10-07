import type { PPLModule } from '../../types/ppl';

export const module050: PPLModule = {
  id: '050',
  code: '050',
  name: 'Météorologie Aéronautique',
  shortName: 'Météorologie',
  iconName: 'CloudRain',
  color: 'cyan',
  description: 'Atmosphère standard OACI, masses d’air et fronts, nuages et brouillards, altimétrie, orages (Cumulonimbus), turbulences et décodage METAR / TAF / TEMSI / WINTEM.',
  examQuestionsCount: 24,
  examDurationMinutes: 40,
  chapters: [
    {
      id: '050-ch1',
      moduleId: '050',
      title: 'L’Atmosphère Standard et Phénomènes Météo Majeurs',
      readTime: '8 min',
      diagramType: 'atmosphere',
      content: `### 1. L'Atmosphère Standard Internationale (ISA)
Les valeurs de référence au niveau moyen de la mer (MSL, 0 ft) sont :
- **Température** : **+15 °C** (288,15 K).
- **Pression** : **1 013,25 hPa** (ou 29,92 inHg).
- **Masse volumique de l'air (\\(\\rho\\))** : **1,225 kg/m³**.
- **Gradient vertical de température** : **-2 °C pour 1 000 ft** (soit -0,65 °C pour 100 m) dans la troposphère jusqu'à 11 000 m (36 000 ft), puis température constante à -56,5 °C.
- **Gradient de pression** : 1 hPa pour 28 ft (environ 8 mètres) en basse couche.

*Exemple de calcul* : Quelle est la température standard au FL 70 (7 000 ft) ?
\\(T = 15 - (7 \\times 2) = 15 - 14 = +1^\\circ\\text{C}\\).

### 2. Le Cumulonimbus (CB) : Le Roi des Dangers
Le CB est le nuage le plus dangereux pour l'aviation légère :
- **Dangers extrêmes** :
  - Turbulences sévères à destructrices (courants ascendants et descendants dépassant 50 kt).
  - Rafales descendantes et cisaillements de vent mortels au sol (Microbursts).
  - Givrage sévère et immédiat dans les parties supérieures.
  - Grêle destructrice pouvant être éjectée à plusieurs kilomètres sous l'enclume.
  - Foudre et perturbations magnétiques / radio.
- **Règle absolue** : Éviter tout CB d'au moins **10 à 20 milles nautiques (NM)**, surtout du côté sous le vent où l'enclume projette la grêle.

### 3. Les Brouillards et Brumes
- **Brouillard** : Visibilité horizontale < **1 000 m**.
- **Brume** : Visibilité horizontale entre **1 000 m et 5 000 m** avec humidité > 75%.
- Types de brouillards fréquents :
  - *Brouillard de rayonnement* : Nuit claire, vent faible (2 à 8 kt), sol froid, forte humidité. Se dissipe après le lever du soleil.
  - *Brouillard d'advection* : Masse d'air chaud et humide se déplaçant sur un sol froid (très fréquent en bord de mer et en hiver, très persistant).
  - *Brouillard d'évaporation* (fumée de mer) : Air froid glissant sur de l'eau tiède.`,
      keyTakeaways: [
        "Atmosphère standard : 1013,25 hPa, 15°C au niveau de la mer.",
        "Gradient thermique : -2°C tous les 1 000 ft.",
        "Cumulonimbus (CB) : Ne JAMAIS pénétrer, contourner à 10-20 NM minimum.",
        "Brouillard si visibilité < 1 km (1000 m)."
      ]
    },
    {
      id: '050-ch2',
      moduleId: '050',
      title: 'Décodage des Messages METAR et TAF',
      readTime: '9 min',
      diagramType: 'metar',
      content: `### 1. Structure d'un METAR
Exemple complet :
\`\`\`
METAR LFPG 121430Z 24015G25KT 210V270 9999 -RA SCT025 BKN040TCU 18/12 Q1018 NOSIG=
\`\`\`
Décryptage pas à pas :
1. **LFPG** : Code OACI de l'aérodrome (Paris Charles-de-Gaulle).
2. **121430Z** : Émis le 12 du mois à 14h30 UTC (Zulu).
3. **24015G25KT** : Vent moyen venant du **240° géographiques** à **15 nœuds**, avec rafales (**Gusts**) jusqu'à **25 nœuds**.
4. **210V270** : Le vent varie en direction entre 210° et 270°.
5. **9999** : Visibilité dominante supérieure ou égale à **10 km** (si 4 chiffres : distance en mètres, ex: 4500 = 4,5 km).
6. **-RA** : Phénomène météo récent : Pluie faible (\`-\` = faible, pas de signe = modéré, \`+\` = fort). \`RA\` = Rain.
7. **SCT025 BKN040TCU** : Nébulosité et nuages :
   - \`FEW\` (Quelques) : 1 à 2 octas (huitièmes de ciel couvert).
   - \`SCT\` (Épars / Scattered) : 3 à 4 octas.
   - \`BKN\` (Fragmenté / Broken) : 5 à 7 octas (**constitue un plafond / Ceiling**).
   - \`OVC\` (Couvert / Overcast) : 8 octas (**constitue un plafond**).
   - Les altitudes de base sont en centaines de pieds sol (AGL) : \`025\` = 2 500 ft AGL, \`040TCU\` = 4 000 ft de base avec Tour Bourgeonnante (Towering Cumulus).
8. **18/12** : Température sous abri **+18 °C**, point de rosée **+12 °C** (quand l'écart est proche de 0, risque imminent de brouillard).
9. **Q1018** : QNH = **1 018 hPa**.
10. **NOSIG** : No Significant Change (pas d'évolution significative prévue dans les 2 heures).
11. **CAVOK** : Clouds and Visibility OK (Visi ≥ 10 km, aucun nuage sous 5 000 ft ou sous l'altitude minimale de secteur, aucun CB ni TCU, aucun phénomène temps significatif).`,
      keyTakeaways: [
        "Vent METAR en degrés VRAIS (géographiques), alors que la tour donne des degrés MAGNÉTIQUES !",
        "Plafond officiel : première couche avec couverture BKN (5-7 octas) ou OVC (8 octas).",
        "CAVOK : Visi ≥ 10 km, aucun nuage sous 5000 ft (ou MSA), pas de CB/TCU, pas de temps présent.",
        "Point de rosée proche de la température = formation imminente de brouillard / stratus."
      ]
    }
  ],
  summaryCards: [
    {
      id: '050-sc1',
      moduleId: '050',
      title: 'Atmosphère Standard OACI (ISA)',
      keyPoints: [
        'Niveau de la mer : 1 013,25 hPa et +15 °C',
        'Masse volumique : 1,225 kg/m³',
        'Gradient de température : -2 °C / 1 000 ft (-0,65 °C / 100 m)',
        'Gradient de pression : 1 hPa = 28 ft (environ 8 mètres)'
      ],
      formula: 'T_std(FL) = 15 - 2 x (Altitude_en_pieds / 1000)'
    },
    {
      id: '050-sc2',
      moduleId: '050',
      title: 'Abréviations Nuages et Nébulosité',
      keyPoints: [
        'FEW : 1 à 2 octas (nuages rares)',
        'SCT (Scattered) : 3 à 4 octas (nuages épars)',
        'BKN (Broken) : 5 à 7 octas -> CONSTITUE UN PLAFOND',
        'OVC (Overcast) : 8 octas (ciel entièrement couvert) -> PLAFOND',
        'CB = Cumulonimbus (danger mortel) | TCU = Towering Cumulus'
      ],
      alertNote: 'Le plafond VFR officiel est défini par la hauteur de la base de la plus basse couche BKN ou OVC.'
    },
    {
      id: '050-sc3',
      moduleId: '050',
      title: 'Condition CAVOK dans un METAR',
      keyPoints: [
        'Visibilité supérieure ou égale à 10 kilomètres',
        'Aucun nuage au-dessous de 5 000 ft AGL ou de la MSA (la plus élevée)',
        'Aucun nuage convectif de type CB ou TCU présent',
        'Aucun phénomène de temps significatif (pas de pluie, brume, orage...)'
      ]
    }
  ],
  questions: [
    {
      id: '050-q1',
      moduleId: '050',
      question: 'Selon les conditions de l’atmosphère standard OACI (ISA), quelle est la température théorique à une altitude de 5 000 pieds ?',
      options: ['+10 °C', '+5 °C', '0 °C', '-5 °C'],
      correctAnswer: 1,
      explanation: 'Dans l’atmosphère standard, la température au niveau de la mer est de +15 °C et décroît de 2 °C par tranche de 1 000 ft. À 5 000 ft : 15 - (5 x 2) = 15 - 10 = +5 °C.',
      difficulty: 'facile'
    },
    {
      id: '050-q2',
      moduleId: '050',
      question: 'Dans un rapport météo METAR, quelle abréviation indique la présence d’un ciel couvert de 5 à 7 octas ?',
      options: ['FEW', 'SCT', 'BKN', 'OVC'],
      correctAnswer: 2,
      explanation: 'BKN (Broken) correspond à une couverture nuageuse fragmentée de 5 à 7 octas (huitièmes de ciel), ce qui constitue réglementairement un plafond (ceiling). OVC correspond à 8 octas.',
      difficulty: 'facile'
    },
    {
      id: '050-q3',
      moduleId: '050',
      question: 'Quelle est la différence fondamentale entre la direction du vent transmise dans un METAR et celle transmise par le contrôleur de la tour de contrôle ?',
      options: [
        'Le METAR donne le vent par rapport au Nord Géographique (Vrai), la Tour le donne par rapport au Nord Magnétique',
        'Le METAR donne le vent en km/h, la Tour en nœuds',
        'Le METAR donne le vent moyen sur 24h, la Tour donne la rafale instantanée',
        'Le METAR donne le vent par rapport au Nord Magnétique, la Tour par rapport au Nord Vrai'
      ],
      correctAnswer: 0,
      explanation: 'Règle mnémonique : "Si vous le lisez, c’est Vrai ; si vous l’entendez, c’est Magnétique". Les METAR et TAF écrits expriment la direction par rapport au Nord Vrai (géographique), alors que l’ATIS et le contrôleur radio l’expriment par rapport au Nord Magnétique orienté avec la piste.',
      difficulty: 'moyen'
    },
    {
      id: '050-q4',
      moduleId: '050',
      question: 'Lorsque la température extérieure sous abri est très proche de la température du point de rosée (écart inférieur à 2°C), quel risque météo devient imminent ?',
      options: [
        'L’apparition d’un front chaud d’altitude sans nuages',
        'La condensation de l’humidité sous forme de brume, brouillard ou stratus bas',
        'Une baisse brutale de la pression altimétrique QNH de plus de 20 hPa',
        'Une tempête de vent avec rafales convectives violentes'
      ],
      correctAnswer: 1,
      explanation: 'Le point de rosée est la température à laquelle l’air doit être refroidi à pression constante pour devenir saturé d’humidité (100% HR). Quand la température rejoint le point de rosée, la vapeur d’eau se condense immédiatement sous forme de gouttelettes (brume, brouillard ou stratus bas).',
      difficulty: 'facile'
    },
    {
      id: '050-q5',
      moduleId: '050',
      question: 'Quelle distance de sécurité minimale un pilote de VFR doit-il conserver par rapport à un orage constitué de type Cumulonimbus (CB) ?',
      options: ['Au moins 500 mètres', 'Au moins 2 NM', 'Au moins 10 à 20 NM (milles nautiques)', 'Il peut le traverser à mi-hauteur'],
      correctAnswer: 2,
      explanation: 'En raison des rafales descendantes violentes (microbursts), du risque de givrage sévère et de grêle pouvant être projetée à longue distance hors du nuage, il est impératif de contourner un cumulonimbus à une distance d’au moins 10 à 20 milles nautiques.',
      difficulty: 'facile'
    }
  ]
};
