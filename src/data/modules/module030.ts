import type { PPLModule } from '../../types/ppl';

export const module030: PPLModule = {
  id: '030',
  code: '030',
  name: 'Performances et Préparation du Vol',
  shortName: 'Performances & Centrage',
  iconName: 'Weight',
  color: 'emerald',
  description: 'Masse et centrage (effet du centrage avant/arrière), calculs de décollage et atterrissage (TODR, ASDR, LDR), altitude-densité, gestion du carburant et emports réglementaires.',
  examQuestionsCount: 16,
  examDurationMinutes: 35,
  chapters: [
    {
      id: '030-ch1',
      moduleId: '030',
      title: 'Masse et Centrage (Mass and Balance)',
      readTime: '7 min',
      diagramType: 'weight_balance',
      content: `### 1. Pourquoi le centrage est-il crucial ?
Le centre de gravité (CG) est le point d'application de la résultante des forces de pesanteur. Sa position longitudinale doit impérativement rester à l'intérieur des limites avant et arrière certifiées par le constructeur pendant TOUTE la durée du vol.

Formule fondamentale du moment :
\\[ \\text{Moment} = \\text{Masse} \\times \\text{Bras de levier} \\]
\\[ \\text{Position du CG} = \\frac{\\sum \\text{Moments}}{\\sum \\text{Masse totale}} \\]

### 2. Centrage Trop Avant (Nose-Heavy)
- Conséquences :
  - La gouverne de profondeur doit braquer davantage vers le haut pour créer une déportance accrue à l'empennage afin d'équilibrer l'avion.
  - Vitesse de décrochage plus **élevée** (car l'aile doit porter le poids de l'avion PLUS la déportance négative de l'empennage).
  - Traînée induite supérieure -> consommation plus forte, vitesse de croisière réduite.
  - Décollage difficile, et surtout **arrondi très difficile à l'atterrissage** avec risque d'impact de la roulette de nez avant le train principal.
  - Stabilité longitudinale très forte (l'avion est "lourd" aux commandes).

### 3. Centrage Trop Arrière (Tail-Heavy) - DANGER EXTRÊME !
- Conséquences :
  - Diminution drastique de la stabilité longitudinale (l'avion devient hypersensible, instable ou divergent).
  - En cas de décrochage, risque majeur d'incapacité à repousser le manche pour piquer : départ en **vrille à plat irrécupérable** !
  - Vitesse de décrochage légèrement diminuée, mais comportement incontrôlable en basses vitesses.`,
      keyTakeaways: [
        "Moment = Masse x Bras de levier.",
        "Centrage avant : grande stabilité, mais Vs plus élevée, consommation accrue, arrondi très dur.",
        "Centrage arrière : instabilité sévère, risque mortel de vrille à plat irrécupérable.",
        "Le centrage évolue en vol avec la consommation d'essence !"
      ]
    },
    {
      id: '030-ch2',
      moduleId: '030',
      title: 'Facteurs de Performance et Altitude-Densité',
      readTime: '8 min',
      content: `### 1. L'Altitude-Densité (Density Altitude)
L'altitude-densité correspond à l'altitude-pression corrigée des écarts de température par rapport à l'atmosphère standard.
- Un air chaud est moins dense.
- Un air humide est moins dense.
- Une basse pression signifie un air moins dense.

Effet d'une forte altitude-densité ("l'avion se croit beaucoup plus haut qu'il ne l'est") :
- Moins de portance sur les ailes (nécessite une plus grande vitesse sol pour voler).
- Moins de traction de l'hélice (moins de molécules d'air brassées).
- Moins de puissance moteur (mélange air-essence appauvri en comburant).
- **Conséquence directe : distances de roulement et de décollage considérablement allongées**, taux de montée anémique.

### 2. Facteurs allongeant la distance de décollage
- **Vent arrière** (augmente dramatiquement la distance de roulement au décollage et à l'atterrissage).
- **Piste en herbe haute ou mouillée** (+20% à +30% de roulement).
- **Pente de piste montante (QFU en montée)**.
- **Masse maximale élevée**.
- **Volets mal configurés**.

### 3. Emport de carburant réglementaire VFR
En VFR de jour : Carburant nécessaire pour l'étape (roulage + montée + croisière + descente + approche) **+ 30 minutes de réserve finale** à vitesse de croisière économique. (Passe à **45 minutes de nuit** ou si déroutement vers dégagement prévu).`,
      keyTakeaways: [
        "Air chaud, humide, basse pression = forte altitude-densité = performances très dégradées.",
        "Vent arrière : interdit ou très pénalisant au décollage et atterrissage.",
        "Réserve finale VFR de jour : 30 minutes de vol à vitesse de croisière économique.",
        "Réserve finale VFR de nuit : 45 minutes de vol."
      ]
    }
  ],
  summaryCards: [
    {
      id: '030-sc1',
      moduleId: '030',
      title: 'Effets du Centrage Avant vs Arrière',
      keyPoints: [
        'Centrage AVANT : Vitesse de décrochage augmente, très stable, arrondi difficile, traînée accrue',
        'Centrage ARRIÈRE : Moins stable voire instable, risque de vrille irrécupérable, commandes ultra-sensibles',
        'Règle d’or : Vérifier que le centre de gravité reste dans l’enveloppe du décollage à l’atterrissage'
      ],
      alertNote: 'Un centrage au-delà de la limite arrière rend l’avion potentiellement incontrôlable et impossible à sortir de décrochage !'
    },
    {
      id: '030-sc2',
      moduleId: '030',
      title: 'Emport réglementaire de Carburant (VFR)',
      keyPoints: [
        'Consommation de l’étape : Roulage + Trajet (croisière)',
        'Réserve d’attente ou imprévus selon le plan de vol',
        'Réserve finale obligatoire de JOUR : 30 minutes au régime économique',
        'Réserve finale obligatoire de NUIT : 45 minutes au régime économique'
      ],
      formula: 'Carburant total = Roulage + Trajet + Dégagement + Réserve finale (30 min jour / 45 min nuit)'
    }
  ],
  questions: [
    {
      id: '030-q1',
      moduleId: '030',
      question: 'Quelle est la conséquence aérodynamique d’un centrage très avant sur un avion léger ?',
      options: [
        'Une diminution de la vitesse de décrochage et une instabilité en tangage',
        'Une augmentation de la vitesse de décrochage et une force plus importante nécessaire à l’arrondi',
        'Un risque accru de vrille à plat incontrôlable',
        'Une diminution de la consommation de carburant en croisière'
      ],
      correctAnswer: 1,
      explanation: 'Un centrage avant oblige l’empennage horizontal à créer une déportance vers le bas plus importante pour équilibrer le couple piqueur. Les ailes doivent supporter ce surcroît de charge, ce qui élève la vitesse de décrochage et rend l’arrondi plus lourd et difficile.',
      difficulty: 'moyen'
    },
    {
      id: '030-q2',
      moduleId: '030',
      question: 'En vol VFR de jour, quelle est la réserve finale minimale de carburant obligatoire à l’arrivée de votre destination ?',
      options: ['15 minutes de vol', '30 minutes de vol au régime de croisière économique', '45 minutes de vol', '1 heure de vol'],
      correctAnswer: 1,
      explanation: 'Selon les règles de l’air européennes (Part-NCO), la réserve finale de carburant minimale utilisable pour un vol VFR de jour sur avion est de 30 minutes de vol à la vitesse de croisière normale/économique.',
      difficulty: 'facile'
    },
    {
      id: '030-q3',
      moduleId: '030',
      question: 'Par une chaude journée d’été sur un aérodrome d’altitude élevée, comment se comportera la distance de décollage de votre avion ?',
      options: [
        'Elle sera plus courte car l’air chaud monte plus facilement',
        'Elle sera inchangée car les volets compensent la densité',
        'Elle sera nettement allongée en raison d’une forte altitude-densité',
        'Elle dépend uniquement de la force du vent et non de la température'
      ],
      correctAnswer: 2,
      explanation: 'L’air chaud et l’altitude diminuent la masse volumique de l’air (altitude-densité élevée). La portance diminue, la poussée de l’hélice diminue et le moteur développe moins de puissance, ce qui allonge considérablement la distance de roulement au décollage.',
      difficulty: 'facile'
    },
    {
      id: '030-q4',
      moduleId: '030',
      question: 'Pourquoi un centrage situé au-delà de la limite arrière autorisée est-il extrêmement dangereux ?',
      options: [
        'L’avion risque de ne jamais pouvoir décoller même manche plein arrière',
        'La stabilité longitudinale est détruite et la sortie de vrille ou de décrochage peut devenir impossible',
        'Le train d’atterrissage principal casse sous le poids',
        'La vitesse maximale autorisée Vne est automatiquement dépassée'
      ],
      correctAnswer: 1,
      explanation: 'Un centrage trop arrière réduit ou détruit la marge statique de stabilité longitudinale. En cas de décrochage, le pilote peut se trouver en butée avant de commande de profondeur sans parvenir à faire piquer le nez, conduisant à une vrille à plat mortelle.',
      difficulty: 'moyen'
    }
  ]
};
