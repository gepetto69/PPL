import type { PPLModule } from '../../types/ppl';

export const module040: PPLModule = {
  id: '040',
  code: '040',
  name: 'Performance Humaine et Limites',
  shortName: 'Performance Humaine',
  iconName: 'UserCheck',
  color: 'rose',
  description: 'Physiologie du vol (hypoxie, hyperventilation, barotraumatisme, désorientation spatiale, oreille interne), illusions sensorielles, fatigue, modèle TEM et prise de décision aéronautique.',
  examQuestionsCount: 12,
  examDurationMinutes: 20,
  chapters: [
    {
      id: '040-ch1',
      moduleId: '040',
      title: 'Physiologie du Vol : Hypoxie et Barotraumatismes',
      readTime: '7 min',
      content: `### 1. L'Hypoxie d'altitude (Hypoxie hypoxique)
L'hypoxie est le manque d'oxygène au niveau des tissus et des cellules de l'organisme.
- Bien que la proportion d'oxygène dans l'air reste constante (environ 21%) avec l'altitude, la **pression partielle d'oxygène diminue** proportionnellement à la pression atmosphérique totale.
- En vol non pressurisé sans oxygène de subsistance :
  - Dès **8 000 à 10 000 ft** : altération de la vision nocturne, perte de concentration, ralentissement du temps de réaction.
  - Vers **12 000 à 14 000 ft** : céphalées, somnolence, sensation d'euphorie trompeuse, perte de jugement critique.
  - Vers **18 000 ft et plus** : perte de conscience en quelques minutes (Temps de Conscience Utile très court).
- Facteurs aggravants : Tabagisme (le monoxyde de carbone se fixe 250 fois plus vite sur l'hémoglobine !), fatigue, froid, alcool.

### 2. Hyperventilation
- Respiration trop rapide et trop profonde (due au stress ou à la panique), provoquant une élimination excessive du dioxyde de carbone (\\(CO_2\\)) dans le sang (alcalose respiratoire).
- Symptômes similaires à l'hypoxie : picotements dans les doigts et lèvres, étourdissements, spasmes musculaires (tétanie).
- Remède immédiat : Ralentir volontairement le rythme respiratoire, parler à haute voix ou respirer dans un sac en papier.

### 3. Les Barotraumatismes
Effets mécaniques des variations de pression sur les cavités closes contenant de l'air (Loi de Boyle-Mariotte : \\(P \\times V = \\text{constante}\\)) :
- **Oreille moyenne** : Reliée au pharynx par la trompe d'Eustache.
  - À la montée : l'air se détend et s'échappe facilement.
  - À la descente : l'air extérieur appuie sur le tympan. Si la trompe est bouchée (rhume, sinusite), douleur violente et risque de déchirure du tympan.
  - Manœuvre : Manœuvre de Valsalva (souffler doucement nez pincé et bouche fermée) ou déglutition.
- Règle de plongée sous-marine :
  - Attendre au moins **12 heures** après une plongée sans décompression avant de voler.
  - Attendre au moins **24 heures** après une plongée avec paliers de décompression (risque d'accident de décompression / embolie gazeuse / bends).`,
      keyTakeaways: [
        "Hypoxie : causée par la baisse de pression partielle d'oxygène. Euphorie trompeuse très dangereuse.",
        "Le tabac aggrave l'hypoxie (taux élevé de carboxyhémoglobine).",
        "Hyperventilation : élimination excessive de CO2. Calmer sa respiration.",
        "Plongée sous-marine : 12h d'attente (sans paliers), 24h d'attente (avec paliers) avant de voler."
      ]
    },
    {
      id: '040-ch2',
      moduleId: '040',
      title: 'Illusions Sensorielles et Prise de Décision',
      readTime: '6 min',
      content: `### 1. L'Oreille Interne et Désorientation Spatiale
L'appareil vestibulaire comprend :
- **Les canaux semi-circulaires** (3 anneaux orthogonaux remplis d'endolymphe) : détectent les accélérations angulaires (rotations en roulis, tangage, lacet).
- **Les otolithes (utricule et saccule)** : détectent les accélérations linéaires et la gravité.

#### Illusions typiques sans repère visuel extérieur (IMC ou nuit noire) :
- **Le cimetière en spirale (Graveyard Spin / Spiral)** : Dans un virage prolongé stabilisé, l'endolymphe s'arrête de bouger et le pilote a la fausse sensation d'être à plat. En remettant les ailes à plat, il croit virer dans l'autre sens et remet l'avion en virage en tirant sur le manche, amplifiant la spirale descendante fatale.
- **Illusion somatogravique** : Une forte accélération linéaire au décollage stimule les otolithes comme un cabré. Le pilote a l'illusion de monter trop fort et risque de pousser le manche vers le sol !

### 2. La Vision et ses Pièges
- Point aveugle (tache de Mariotte) : zone de la rétine dépourvue de photorécepteurs où s'insère le nerf optique.
- Balayage visuel (Scan) : La recherche du trafic en vol doit se faire par secteurs successifs de 10° à 15° pendant au moins 1 seconde par secteur pour permettre à la fovéa de faire le point.
- Mauvais temps : Un aéronef immobile sur la verrière sans mouvement angulaire apparent est sur une **trajectoire de collision directe** !

### 3. Modèle TEM (Threat and Error Management) et Décision
- Menaces : Événements extérieurs non maîtrisés (météo imprévue, panne, passager indiscipliné).
- Erreurs : Actions ou inactions du pilote conduisant à un écart par rapport aux intentions.
- État indésirable de l'aéronef (UAS - Undesired Aircraft State) : Ex. vitesse basse en dernier virage.`,
      keyTakeaways: [
        "Dans la brume/nuages, le corps ment : SE FIER UNIQUEMENT AUX INSTRUMENTS DE BORD.",
        "Trafic convergent constant sur le pare-brise = RISQUE DE COLLISION IMMINENTE.",
        "Balayage visuel méthodique par secteurs de 10° à 15°.",
        "Attitude anti-autorité, invulnérabilité ou résignation sont des attitudes dangereuses à corriger."
      ]
    }
  ],
  summaryCards: [
    {
      id: '040-sc1',
      moduleId: '040',
      title: 'Délais après Plongée Sous-Marine',
      keyPoints: [
        'Plongée loisir simple SANS palier de décompression : 12 heures minimum avant de voler',
        'Plongée profonde ou AVEC paliers de décompression : 24 heures minimum avant de voler',
        'Raison vitale : Prévenir le dégazage de l’azote dissous dans le sang (mal de décompression / embolie)'
      ],
      alertNote: 'Ne jamais voler après une plongée sans respecter ces délais au risque de paralysie ou d’accident vasculaire cérébral !'
    },
    {
      id: '040-sc2',
      moduleId: '040',
      title: 'Hypoxie vs Hyperventilation',
      keyPoints: [
        'Hypoxie : Déficit d’apport d’O2 en altitude (pression partielle d’O2 réduite). Symptôme clé : fausse sensation de bien-être (euphorie) et perte de jugement critique.',
        'Hyperventilation : Élimination excessive de CO2 due à l’angoisse ou au stress. Picotements aux extrémités, crampes.',
        'Action hyperventilation : Ralentir le rythme ventilatoire, respirer calmement.'
      ]
    }
  ],
  questions: [
    {
      id: '040-q1',
      moduleId: '040',
      question: 'Combien de temps un pilote doit-il attendre avant d’entreprendre un vol après avoir effectué une plongée sous-marine nécessitant des paliers de décompression ?',
      options: ['Au moins 4 heures', 'Au moins 8 heures', 'Au moins 12 heures', 'Au moins 24 heures'],
      correctAnswer: 3,
      explanation: 'Pour éviter un accident de décompression dû à la formation de bulles d’azote dans les tissus et vaisseaux sanguins, l’intervalle minimal recommandé est de 24 heures après une plongée avec paliers de décompression (et 12 heures après une plongée sans palier).',
      difficulty: 'facile'
    },
    {
      id: '040-q2',
      moduleId: '040',
      question: 'Quel est l’un des symptômes les plus insidieux et dangereux de l’hypoxie d’altitude pour un pilote ?',
      options: [
        'Une douleur aiguë et immédiate aux tympans',
        'Une sensation d’euphorie et d’invulnérabilité masquant la baisse des facultés cognitives',
        'Une perte subite de la vision périphérique sans baisse de jugement',
        'Une crise d’éternuements répétée'
      ],
      correctAnswer: 1,
      explanation: 'L’hypoxie provoque une sensation trompeuse d’euphorie et de bien-être, ce qui empêche le pilote de réaliser la dégradation rapide de ses performances intellectuelles, de ses réflexes et de sa prise de décision.',
      difficulty: 'moyen'
    },
    {
      id: '040-q3',
      moduleId: '040',
      question: 'En vol à vue (VFR), vous observez un autre avion dont la position relative sur votre pare-brise reste rigoureusement fixe. Que devez-vous en déduire ?',
      options: [
        'L’autre avion vole à la même vitesse dans la même direction que vous',
        'Les deux aéronefs sont sur une trajectoire de collision directe imminente',
        'L’avion est beaucoup trop loin pour présenter le moindre danger',
        'L’autre avion est en train de s’éloigner verticalement'
      ],
      correctAnswer: 1,
      explanation: 'Lorsqu’un aéronef en vol grossit sans déplacement angulaire par rapport à un point fixe de la verrière, la géométrie du rapprochement indique une trajectoire de collision constante.',
      difficulty: 'facile'
    },
    {
      id: '040-q4',
      moduleId: '040',
      question: 'Pourquoi est-il fortement déconseillé de piloter lorsqu’on souffre d’une rhinopharyngite ou d’une sinusite aiguë ?',
      options: [
        'L’odorat du pilote est indispensable pour vérifier la richesse du mélange',
        'La trompe d’Eustache bouchée empêche l’équilibrage des pressions, risquant de provoquer un barotraumatisme tympanique violent à la descente',
        'La température corporelle perturbe le fonctionnement du transpondeur',
        'La salive modifie la vision des couleurs sur les instruments de bord'
      ],
      correctAnswer: 1,
      explanation: 'L’inflammation des muqueuses obstrue la trompe d’Eustache reliant l’arrière-gorge à l’oreille moyenne. À la descente, l’air ne peut plus pénétrer dans l’oreille moyenne, provoquant une dépression douloureuse, une surdité temporaire et un risque de perforation tympanique.',
      difficulty: 'facile'
    }
  ]
};
