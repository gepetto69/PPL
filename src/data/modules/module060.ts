import type { PPLModule } from '../../types/ppl';

export const module060: PPLModule = {
  id: '060',
  code: '060',
  name: 'Navigation Aérienne',
  shortName: 'Navigation',
  iconName: 'Compass',
  color: 'indigo',
  description: 'Géodésie et cartes aéronautiques (Lambert, Mercator), dérive au vent et triangle des vitesses, déclinaison magnétique et déviation compas, radionavigation (VOR, ADF, DME, GPS).',
  examQuestionsCount: 24,
  examDurationMinutes: 45,
  chapters: [
    {
      id: '060-ch1',
      moduleId: '060',
      title: 'Les Angles Fondamentaux de la Navigation (Caps et Routes)',
      readTime: '9 min',
      content: `### 1. Du Tracé sur la Carte au Cap au Compas
Pour naviguer d'un point A à un point B, le pilote applique une série de corrections fondamentales :

#### Étape 1 : Route Vraie (Rv) et Vent -> Cap Vrai (Cv)
- **Route Vraie (Rv)** : Angle mesuré sur la carte aéronautique entre le **Nord Géographique (Vrai)** et la trajectoire désirée sur le sol.
- **Facteur de dérive (X)** : Le vent pousse l'avion sur le côté.
  - Formule : \\( \\text{Cv} = \\text{Rv} - (\\pm X) \\)
  - Si le vent vient de la **droite** : l'avion dérive vers la **gauche**, la dérive est négative, on doit corriger en virant à droite (Cv > Rv).
  - Si le vent vient de la **gauche** : l'avion dérive vers la **droite**, la dérive est positive, on doit corriger en virant à gauche (Cv < Rv).

#### Étape 2 : Déclinaison Magnétique (Dm) -> Cap Magnétique (Cm)
- La Terre a un pôle Nord magnétique distinct du pôle Nord géographique.
- L'écart angulaire entre les deux est la **Déclinaison Magnétique (Dm)** (notée D ou VAR).
- Formule :
  \\[ \\text{Cm} = \\text{Cv} - \\text{Dm} \\]
  - Si la déclinaison est **Est (E)** : Dm est comptée positive (+), donc \\( \\text{Cm} = \\text{Cv} - \\text{Dm} \\).
  - Si la déclinaison est **Ouest (W)** : Dm est comptée négative (-), donc \\( \\text{Cm} = \\text{Cv} + |\\text{Dm}| \\).
  - Mnémonique anglo-saxon : *"East is Least, West is Best"* (On soustrait l'Est, on ajoute l'Ouest).

#### Étape 3 : Déviation du Compas (d) -> Cap Compas (Cc)
- Le compas magnétique subit des perturbations causées par les masses métalliques et circuits électriques de bord de l'avion. Cet angle d'erreur s'appelle la **Déviation (d)** (lue sur la fiche de compensation dans le cockpit).
- Formule :
  \\[ \\text{Cc} = \\text{Cm} - d \\]

### 2. Le Facteur de Base (Fb) et Calcul Mental du Temps
- **Facteur de Base (Fb)** : Temps mis par l'avion pour parcourir 1 NM à sa vitesse propre (Vp en kt).
  \\[ Fb = \\frac{60}{Vp} \\]
  - À 120 kt : \\(Fb = 60/120 = 0,5\\) min/NM (on parcourt 1 NM en 30 secondes ou 2 NM par minute).
  - À 90 kt : \\(Fb = 60/90 = 0,66\\) min/NM.
  - Dérive maximale : \\(X_{max} = Fb \\times V_{vent}\\).`,
      keyTakeaways: [
        "Enchaînement rigoureux : Route Vraie -> Cap Vrai -> Cap Magnétique -> Cap Compas.",
        "Formule : Cm = Cv - Dm (Déclinaison Est se retranche, Ouest s'ajoute).",
        "Formule : Cc = Cm - d (Déviation compas).",
        "Facteur de base : Fb = 60 / Vp (en minutes par NM)."
      ]
    },
    {
      id: '060-ch2',
      moduleId: '060',
      title: 'Radionavigation : VOR, DME et GPS',
      readTime: '8 min',
      diagramType: 'vor',
      content: `### 1. Le VOR (VHF Omnidirectional Range)
- Émetteur au sol opérant dans la bande **VHF (108.00 à 117.95 MHz)**.
- Émet 360 radiales magnétiques rayonnant depuis la balise (de 000° à 359° par rapport au Nord Magnétique).
- **L'indicateur VOR de bord comprend** :
  1. Le sélecteur d'angle d'approche (**OBS - Omni Bearing Selector**).
  2. L'aiguille d'écart de route (**CDI - Course Deviation Indicator**) : chaque point équivaut à **2° d'écart**. (Plein débattement = 10° d'écart).
  3. Le drapeau de sens (**TO / FROM / OFF**).
- **Principe fondamental du VOR** :
  - L'indication de l'aiguille est **TOTALEMENT INDÉPENDANTE DU CAP DE L'AVION** ! Elle dépend uniquement de la position spatiale géographique de l'avion par rapport à la balise.
  - Pour rejoindre la radiale sans inversion de sens (sens direct) : afficher en haut de l'OBS la radiale souhaitée en rapprochement (TO) ou en éloignement (FROM) et voler vers l'aiguille ("Follow the needle").

### 2. Le DME (Distance Measuring Equipment)
- Fonctionne en **UHF (960 à 1 215 MHz)** par interrogation/réponse d'impulsions.
- Indique la **Distance Oblique (Slant Range)** en milles nautiques (NM) entre l'avion et l'antenne au sol.
- Conséquence vitale : À la verticale exacte d'une balise DME située au niveau de la mer, si l'avion vole à 6 000 ft (soit environ 1 NM de hauteur), le DME indiquera **1.0 NM** et non pas zéro !

### 3. Le Transpondeur et Surveillance Radar
- Mode A : identité (code 4 chiffres à base 8, de 0000 à 7777).
- Mode C : identité + altitude-pression codée par pas de 100 ft (Flight Level standard 1013 hPa).
- Mode S : transmission d'adresse 24 bits unique par avion, sélectivité anticollision TCAS.`,
      keyTakeaways: [
        "Un VOR fournit des radiales magnétiques émises DEPUIS la station.",
        "L'indicateur VOR ne dépend jamais du cap de l'aéronef, seulement de sa position par rapport à la balise.",
        "1 point CDI sur indicateur VOR = 2° d'écart angulaire.",
        "DME mesure la distance oblique : à la verticale de la balise, le DME affiche l'altitude de l'avion en NM !"
      ]
    }
  ],
  summaryCards: [
    {
      id: '060-sc1',
      moduleId: '060',
      title: 'La Règle des Caps et Routes',
      keyPoints: [
        'Route Vraie (Rv) mesurée sur la carte à la règle rapporteur',
        'Cap Vrai (Cv) = Route Vraie - (± Dérive X)',
        'Cap Magnétique (Cm) = Cap Vrai - Déclinaison Magnétique (Dm)',
        'Cap Compas (Cc) = Cap Magnétique - Déviation propre (d)'
      ],
      mnemonics: ['"Rv -> Cv -> Cm -> Cc" (Vrai avant Magnétique, Magnétique avant Compas)'],
      formula: 'Cm = Cv - Dm | Cc = Cm - d'
    },
    {
      id: '060-sc2',
      moduleId: '060',
      title: 'Distance Oblique DME (Slant Range)',
      keyPoints: [
        'Le DME mesure la ligne droite hypoténuse entre l’avion et l’émetteur au sol',
        'Plus l’avion est haut et proche de la balise, plus l’erreur avec la distance sol est grande',
        'À la verticale exacte d’une balise DME à 6 000 ft d’altitude, le DME affiche 1.0 NM !'
      ],
      alertNote: 'Attention : le DME ne donne pas la distance sol horizontale mais la distance oblique directe !'
    }
  ],
  questions: [
    {
      id: '060-q1',
      moduleId: '060',
      question: 'Votre Route Vraie (Rv) est de 090°. La déclinaison magnétique est de 3° Ouest (3°W) et la dérive due au vent est nulle. Quel est votre Cap Magnétique (Cm) ?',
      options: ['087°', '090°', '093°', '180°'],
      correctAnswer: 2,
      explanation: 'La formule est Cm = Cv - Dm. Une déclinaison Ouest (W) est comptée négativement (-3°), donc : Cm = 090° - (-3°) = 090° + 3° = 093° (règle "West is Best, East is Least").',
      difficulty: 'moyen'
    },
    {
      id: '060-q2',
      moduleId: '060',
      question: 'Sur un indicateur de radionavigation VOR standard, quelle valeur d’écart angulaire représente chaque point (graduations) de l’échelle de déviation CDI ?',
      options: ['1 degré par point', '2 degrés par point', '5 degrés par point', '10 degrés par point'],
      correctAnswer: 1,
      explanation: 'Sur un récepteur VOR standard d’aviation générale, chaque point de part et d’autre du centre représente 2° d’écart angulaire. L’échelle complète de 5 points correspond à 10° d’écart maximal.',
      difficulty: 'facile'
    },
    {
      id: '060-q3',
      moduleId: '060',
      question: 'Vous survolez exactement à la verticale une balise VOR/DME à une altitude de 12 000 pieds (environ 2 NM de hauteur sol). Que va afficher votre récepteur DME ?',
      options: ['0.0 NM', 'Environ 2.0 NM', '99.9 NM avec drapeau NAV', 'La vitesse sol de l’avion'],
      correctAnswer: 1,
      explanation: 'Le DME mesure la distance oblique (slant range) en ligne directe antenne-avion. À la verticale de la station, la distance mesurée correspond à la hauteur de l’avion, soit environ 2.0 NM.',
      difficulty: 'moyen'
    },
    {
      id: '060-q4',
      moduleId: '060',
      question: 'À une vitesse propre (Vp) de 120 nœuds, quel est le Facteur de Base (Fb) de votre avion pour estimer les temps de vol ?',
      options: ['0,25 min/NM', '0,5 min/NM (soit 30 secondes par nautique)', '1 min/NM', '2 min/NM'],
      correctAnswer: 1,
      explanation: 'Le Facteur de Base Fb est défini par la formule Fb = 60 / Vp. Pour 120 kt : Fb = 60 / 120 = 0,5 minute par mille nautique (l’avion parcourt 1 NM en 30 secondes).',
      difficulty: 'facile'
    }
  ]
};
