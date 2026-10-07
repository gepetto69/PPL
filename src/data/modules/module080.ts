import type { PPLModule } from '../../types/ppl';

export const module080: PPLModule = {
  id: '080',
  code: '080',
  name: 'Principes du Vol (Aérodynamique)',
  shortName: 'Aérodynamique',
  iconName: 'Wind',
  color: 'teal',
  description: 'Écoulement de l’air (Bernoulli, Venturi), portance (Cz), traînées (induite, parasite), décrochage et facteur de charge (virage incliné), polaire d’Eiffel, stabilité.',
  examQuestionsCount: 16,
  examDurationMinutes: 35,
  chapters: [
    {
      id: '080-ch1',
      moduleId: '080',
      title: 'Création de la Portance et Résultante Aérodynamique',
      readTime: '8 min',
      diagramType: 'aerodynamics',
      content: `### 1. Théorème de Bernoulli et Profil d'Aile
L'aile d'un avion possède un profil asymétrique :
- **Extrados** (face supérieure) : Courbure plus prononcée. Les filets d'air doivent accélérer -> augmentation de la vitesse d'écoulement -> **diminution de la pression statique (dépression)** selon le théorème de Bernoulli :
  \\[ P + \\frac{1}{2} \\rho V^2 = \\text{Constante} \\]
- **Intrados** (face inférieure) : Écoulement ralenti -> **surpression**.
- La dépression sur l'extrados fournit environ **70 à 80% de la portance totale** de l'aile ! L'aile est littéralement aspirée vers le haut.

### 2. Les Formules Clés de l'Aérodynamique
- **Portance (Rz ou L)** :
  \\[ R_z = \\frac{1}{2} \\rho S V^2 C_z \\]
  Où :
  - \\(\\rho\\) = masse volumique de l'air (kg/m³).
  - \\(S\\) = surface alaire (m²).
  - \\(V\\) = vitesse de l'air par rapport à l'aile (m/s).
  - \\(C_z\\) = coefficient de portance (dépend du profil et de l'**angle d'incidence**).
- **Traînée (Rx ou D)** :
  \\[ R_x = \\frac{1}{2} \\rho S V^2 C_x \\]
  La traînée totale est la somme de :
  1. **La traînée parasite** : frottement et forme de la cellule, antennes, train fixe. **Augmente comme le carré de la vitesse** (\\(V^2\\)).
  2. **La traînée induite** : conséquence directe de la création de portance et des tourbillons marginaux en bout d'aile. **Diminue quand la vitesse augmente** (proportionnelle à \\(1/V^2\\)).
  - La vitesse de traînée minimale correspond à la vitesse de **finesse maximale**.

### 3. La Finesse (f)
Rapport entre la distance horizontale parcourue et la hauteur perdue en plané sans moteur :
\\[ f = \\frac{R_z}{R_x} = \\frac{C_z}{C_x} = \\frac{\\text{Distance parcourue}}{\\text{Hauteur perdue}} \\]
Un avion ayant une finesse de 10 parcourt 10 km pour 1 000 mètres d'altitude perdue.`,
      keyTakeaways: [
        "70 à 80% de la portance provient de la dépression sur l'extrados.",
        "Portance proportionnelle au carré de la vitesse (V²) et au Cz.",
        "Traînée parasite augmente avec V² ; traînée induite diminue avec V².",
        "Finesse max = point de croisement des traînées (meilleur rapport Portance / Traînée)."
      ]
    },
    {
      id: '080-ch2',
      moduleId: '080',
      title: 'Le Décrochage et Facteur de Charge en Virage',
      readTime: '8 min',
      diagramType: 'turn_coordinator',
      content: `### 1. Le Phénomène du Décrochage (Stall)
- **Définition** : Le décrochage se produit lorsque l'**angle d'incidence (angle entre la corde de profil et le vent relatif)** dépasse l'incidence critique (généralement entre 15° et 18° selon le profil).
- **Attention piège d'examen** : Un avion peut décrocher à **N'IMPORTE QUELLE VITESSE**, à n'importe quelle assiette et à n'importe quelle puissance, dès lors que l'**incidence critique est dépassée** !
- Au-delà de l'incidence critique, les filets d'air se décollent de l'extrados, la portance s'effondre brutalement et la traînée explose.
- **Récupération** : Rendre la main (pousser sur le manche) pour réduire immédiatement l'angle d'incidence, puis remettre la puissance avec symétrie (bille au centre au palonnier).

### 2. Le Facteur de Charge (n) et Virage Incliné
En virage horizontal coordonné stabilisé à inclinaison \\(\\Phi\\) :
\\[ n = \\frac{1}{\\cos \\Phi} \\]
- À **0°** d'inclinaison : \\(n = 1\\) g.
- À **60°** d'inclinaison : \\(\\cos 60^\\circ = 0,5\\) -> \\(n = \\frac{1}{0,5} = \\mathbf{2\\ g}\\) ! (Le pilote et l'avion pèsent deux fois leur poids).
- À **75°** d'inclinaison : \\(n = 3,86\\) g.

#### Conséquence sur la Vitesse de Décrochage (Vs) :
La vitesse de décrochage sous facteur de charge \\(n\\) augmente selon la racine carrée de \\(n\\) :
\\[ V_s(n) = V_{s0} \\times \\sqrt{n} \\]
- Pour un avion dont la vitesse de décrochage à plat est de **50 kt** :
  - En virage à **60° d'inclinaison** (\\(n = 2\\)) :
  \\[ V_s = 50 \\times \\sqrt{2} = 50 \\times 1,414 \\approx \\mathbf{71\\ kt} ! \\]
  Si l'avion vole à 65 kt dans ce virage à 60°, **il décroche violemment en virage** même à plein régime !`,
      keyTakeaways: [
        "Le décrochage ne dépend QUE de l'incidence (dépassement de l'incidence critique).",
        "Facteur de charge en virage : n = 1 / cos(inclinaison). À 60°, n = 2 g.",
        "Vitesse de décrochage en virage : Vs(n) = Vs x racine(n). À 60°, Vs augmente de 41% !",
        "Sortie de décrochage : DIMINUER L'INCIDENCE en poussant sur le manche."
      ]
    }
  ],
  summaryCards: [
    {
      id: '080-sc1',
      moduleId: '080',
      title: 'Facteur de Charge et Inclinaison',
      keyPoints: [
        'Inclinaison 0° : n = 1 g | Vs = Vs normale',
        'Inclinaison 45° : n = 1,41 g | Vs augmente de +19%',
        'Inclinaison 60° : n = 2 g | Vs augmente de +41% (x 1,414)',
        'Formule fondamentale : n = 1 / cos(phi) et Vs(n) = Vs * sqrt(n)'
      ],
      formula: 'n = 1 / cos(angle) | Vs(virage) = Vs_plat x sqrt(n)'
    },
    {
      id: '080-sc2',
      moduleId: '080',
      title: 'Les Deux Traînées de l’Avion',
      keyPoints: [
        'Traînée Parasite : Forme, frottement, rugosité, train fixe. Augmente avec le carré de la vitesse (V²)',
        'Traînée Induite : Issue de la portance (tourbillons marginaux). Diminue quand la vitesse augmente (1/V²)',
        'Finesse Maximale : Se produit quand Traînée Parasite = Traînée Induite'
      ],
      alertNote: 'En dessous de la vitesse de finesse max (second régime), plus l’avion ralentit, plus la traînée augmente !'
    }
  ],
  questions: [
    {
      id: '080-q1',
      moduleId: '080',
      question: 'À quelle condition un profil d’aile entre-t-il obligatoirement en décrochage aérodynamique ?',
      options: [
        'Lorsque la vitesse tombe en dessous de 60 kt',
        'Dès que l’angle d’incidence dépasse l’angle d’incidence critique de décrochage',
        'Lorsque le moteur est réduit au ralenti',
        'Lorsque les volets sont entièrement rentrés'
      ],
      correctAnswer: 1,
      explanation: 'Le décrochage est un phénomène purement lié à l’incidence : il survient inévitablement lorsque l’angle d’incidence (angle entre la corde du profil et la direction du vent relatif) dépasse l’incidence de décrochage critique, quelle que soit la vitesse ou la trajectoire.',
      difficulty: 'facile'
    },
    {
      id: '080-q2',
      moduleId: '080',
      question: 'En palier horizontal stabilisé avec une inclinaison constante de 60 degrés, quel est le facteur de charge n subi par l’aéronef ?',
      options: ['1,0 g', '1,41 g', '2,0 g', '3,0 g'],
      correctAnswer: 2,
      explanation: 'Le facteur de charge en virage coordonné stabilisé en palier vaut n = 1 / cos(inclinaison). Comme cos(60°) = 0,5, le facteur de charge est n = 1 / 0,5 = 2,0 g.',
      difficulty: 'facile'
    },
    {
      id: '080-q3',
      moduleId: '080',
      question: 'Si la vitesse de décrochage d’un avion en vol rectiligne horizontal est de 50 nœuds, quelle sera sa vitesse de décrochage lors d’un virage serré à 60° d’inclinaison ?',
      options: ['50 nœuds (inchangée)', 'Environ 71 nœuds', '100 nœuds', '35 nœuds'],
      correctAnswer: 1,
      explanation: 'Sous facteur de charge n, la vitesse de décrochage est multipliée par racine(n). À 60° d’inclinaison, n = 2 g, donc Vs = 50 x racine(2) = 50 x 1,414 ≈ 70,7 kt (environ 71 nœuds).',
      difficulty: 'moyen'
    },
    {
      id: '080-q4',
      moduleId: '080',
      question: 'D’où provient la majeure partie (environ 75%) de la portance aérodynamique d’une aile d’avion subsonique ?',
      options: [
        'De la surpression exercée par l’air sur l’intrados',
        'De la dépression créée par l’accélération de l’écoulement sur l’extrados',
        'Du souffle hélicoïdal de l’hélice sur le fuselage',
        'Du calage angulaire de l’empennage horizontal'
      ],
      correctAnswer: 1,
      explanation: 'Conformément au principe de Bernoulli et aux équations de Navier-Stokes, l’accélération de l’écoulement sur la face supérieure courbée (extrados) génère une importante dépression qui aspire littéralement l’aile vers le haut et représente 70% à 80% de la portance.',
      difficulty: 'facile'
    }
  ]
};
