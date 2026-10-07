import type { PPLModule } from '../../types/ppl';

export const module080: PPLModule = {
  id: '080',
  code: '080',
  name: 'Principes du Vol (Aérodynamique)',
  shortName: 'Aérodynamique',
  iconName: 'Wind',
  color: 'teal',
  description: 'Écoulement de l’air subsonique (Bernoulli, Venturi), forces aérodynamiques (portance Cz, traînée Cx), traînée induite et parasite, polaire d’Eiffel, décrochage et facteur de charge en virage, stabilité et commandes de vol.',
  examQuestionsCount: 16,
  examDurationMinutes: 35,
  chapters: [
    {
      id: '080-ch1',
      moduleId: '080',
      title: 'Création de la Portance et Résultante Aérodynamique',
      readTime: '9 min',
      diagramType: 'aerodynamics',
      content: `### 1. Théorème de Bernoulli et Profil d'Aile
L'aile d'un avion possède un profil aérodynamique asymétrique caractérisé par :
- Le **bord d'attaque** (avant) et le **bord de fuite** (arrière effilé).
- La **corde de profil** : segment reliant le bord d'attaque au bord de fuite.
- La **ligne moyenne de cambrure** et la courbure de l'aile.
- L'**extrados** (surface supérieure) plus galbé, et l'**intrados** (surface inférieure) plus plat.

Lorsque l'aile fend l'air avec une vitesse relative \(V\) :
- **Sur l'extrados** : Les lignes de courant se resserrent au-dessus de la courbure. L'air doit accélérer pour contourner le profil.
  - Selon le **théorème de Bernoulli** pour un fluide incompressible :
    \\[ P_{\\text{statique}} + \\frac{1}{2} \\rho V^2 = \\text{Pression Totale} = \\text{Constante} \\]
  - L'augmentation de la vitesse d'écoulement (\(V\)) entraîne une **chute brutale de la pression statique : c'est la DÉPRESSION sur l'extrados**.
- **Sur l'intrados** : Les filets d'air sont ralentis, créant une légère **surpression**.
- **Répartition** : La dépression sur l'extrados génère **environ 70 à 80% de la portance totale** de l'aile ! L'avion est littéralement aspiré vers le haut, et non pas seulement poussé par dessous.

:::definition L'Angle d'Incidence (Angle of Attack - Alpha)
L'angle d'incidence est l'angle géométrique formé entre la **corde de profil de l'aile** et la **direction de l'écoulement de l'air non perturbé (le Vent Relatif)**.
⚠️ Ne jamais confondre l'incidence avec l'assiette de l'avion (qui est l'angle entre l'axe longitudinal de l'avion et l'horizon terrestre).
:::

### 2. Les Équations Clés de la Portance et de la Traînée
- **La Portance (Rz ou Lift - L)** : Force aérodynamique perpendiculaire au vent relatif :
  \\[ R_z = \\frac{1}{2} \\rho S V^2 C_z \\]
  - \(\\rho\) = masse volumique de l'air ambiant (kg/m³).
  - \(S\) = surface alaire totale de l'aile (m²).
  - \(V\) = vitesse propre par rapport à l'air (m/s).
  - \(C_z\) = coefficient de portance (sans dimension, déterminé par le profil et l'incidence).
- **La Traînée (Rx ou Drag - D)** : Force aérodynamique parallèle et de même sens que le vent relatif (résistance à l'avancement) :
  \\[ R_x = \\frac{1}{2} \\rho S V^2 C_x \\]
  - \(C_x\) = coefficient de traînée.
- **La Résultante Aérodynamique (Ra)** : Somme vectorielle de la portance et de la traînée (\(Ra = \sqrt{R_z^2 + R_x^2}\)), appliquée au **Centre de Poussée** de l'aile.

### 3. La Finesse Aérodynamique (f)
La finesse mesure le rendement aérodynamique global de l'aéronef :
\\[ f = \\frac{R_z}{R_x} = \\frac{C_z}{C_x} = \\frac{\\text{Distance horizontale franchie en plané}}{\\text{Perte de hauteur verticale}} \\]
- Un avion d'école classique (DR400 ou C172) a une finesse maximale d'environ **9 à 10** : en coupant le moteur à 1 000 mètres (environ 3 300 ft) de hauteur en air calme, il peut planer sur une distance de **10 kilomètres** (environ 5,4 NM).
- Un planeur de compétition peut dépasser une finesse de 50 à 60 !
- La finesse maximale est obtenue à une incidence unique optimale (\(\\approx 4^\\circ\\) à \(6^\\circ\)), correspondant à la vitesse de finesse max (meilleur plané).`,
      keyTakeaways: [
        "70% à 80% de la portance provient de la dépression d'extrados (Bernoulli).",
        "Incidence = angle entre corde de profil et vent relatif.",
        "Portance : Rz = 1/2 * rho * S * V² * Cz. Proportionnelle au carré de la vitesse (V²).",
        "Finesse f = Rz / Rx = Distance franchie / Hauteur perdue."
      ]
    },
    {
      id: '080-ch2',
      moduleId: '080',
      title: 'Les Deux Traînées et la Polaire d’Eiffel',
      readTime: '9 min',
      content: `### 1. La Traînée Parasite vs La Traînée Induite
La traînée totale opposée à la trajectoire de l'avion résulte de l'addition de deux composantes aux comportements strictement opposés :

#### A. La Traînée Parasite (\(R_{xp}\)) :
Composée de la traînée de forme de la cellule, du frottement de l'air sur le revêtement et de l'interférence entre les éléments (fuselage, train fixe, haubans, antennes).
- Elle ne dépend pas de la portance.
- **Elle augmente avec le carré de la vitesse (\(V^2\))** : plus l'avion va vite, plus la traînée parasite devient gigantesque !

#### B. La Traînée Induite (\(R_{xi}\)) :
C'est la rançon physique inévitable de la portance !
- En vol, l'intrados est en surpression et l'extrados en dépression.
- Aux extrémités des ailes (saumons), l'air contourne le bout d'aile du bas vers le haut, créant de gigantesques **tourbillons marginaux (vortex)**.
- Ces tourbillons dévient le flux d'air vers le bas (déflexion descendante - downwash), ce qui incline la résultante aérodynamique vers l'arrière : cette composante arrière est la traînée induite.
- **Elle diminue quand la vitesse augmente** (proportionnelle à \(1/V^2\)) et dépend de l'**allongement de l'aile** (\(\lambda = b^2/S\)).
  - Une aile longue et étroite (grand allongement comme un planeur) produit très peu de traînée induite.
  - Les ailettes de bout d'aile (Winglets) brisent ces tourbillons pour réduire la traînée induite.

:::formule Traînée Totale et Vitesse de Finesse Maximale
\\[ R_x(\\text{totale}) = R_{xp} (\\propto V^2) + R_{xi} \\left(\\propto \\frac{1}{V^2}\\right) \\]
- La courbe de traînée totale présente un minimum parfait là où **Traînée Parasite = Traînée Induite**.
- Cette vitesse minimale correspond exactement à la **Vitesse de Finesse Maximale** !
- *Au-dessus de cette vitesse (Premier Régime)* : La traînée augmente si l'on accélère (dominée par le parasite).
- *Au-dessous de cette vitesse (Second Régime)* : Plus l'on ralentit, **PLUS LA TRAÎNÉE INDUITE AUGMENTE** ! C'est le domaine du second régime (vol aux grands angles), où voler plus lentement exige de remettre du moteur !
:::

### 2. La Polaire d'Eiffel
La polaire aérodynamique d'une aile est la courbe représentant le coefficient de portance (\(C_z\)) en fonction du coefficient de traînée (\(C_x\)) pour chaque angle d'incidence :
- Le point le plus à gauche : traînée minimale (\(C_{x\_min}\)).
- La tangente à la courbe passant par l'origine : point de **Finesse Maximale** (rapport \(C_z / C_x\) maximal).
- Le sommet de la courbe : **Portance Maximale (\(C_{z\_max}\))**, juste avant le décrochage.
- Au-delà du sommet : la portance s'effondre et la traînée explose : c'est le **décrochage**.`,
      keyTakeaways: [
        "Traînée parasite augmente avec V² ; traînée induite diminue avec V².",
        "Traînée induite générée par les tourbillons marginaux aux saumons d'ailes.",
        "Finesse max atteinte quand Traînée parasite = Traînée induite.",
        "Second régime (basses vitesses) : plus l'avion ralentit, plus la traînée induite est forte."
      ]
    },
    {
      id: '080-ch3',
      moduleId: '080',
      title: 'Le Décrochage et Facteur de Charge en Virage Incliné',
      readTime: '10 min',
      diagramType: 'turn_coordinator',
      content: `### 1. Le Phénomène Physique du Décrochage (Stall)
- **Définition stricte** : Le décrochage se produit lorsque l'**angle d'incidence (Alpha)** dépasse l'incidence critique certifiée du profil (généralement entre **15° et 18°**).
- Au-delà de cette incidence limite, l'air ne parvient plus à épouser la courbure de l'extrados : la couche limite se décolle, le flux devient violemment tourbillonnaire, **la portance s'effondre brutalement et la traînée devient gigantesque**.
- **Signes annonciateurs du décrochage** :
  - Commandes de vol "molles" et peu efficaces (moins de souffle aérodynamique).
  - Avertisseur sonore de décrochage (Stall warning) qui retentit 5 à 10 kt avant le décrochage.
  - Vibrations (Buffeting) de la structure causées par les tourbillons d'extrados qui frappent la gouverne de profondeur.
- **Récupération immédiate du décrochage** :
  1. **Rendre la main (pousser sur le manche)** : Réduire l'incidence sous l'incidence critique pour recoller les filets d'air.
  2. Remettre la **puissance maximale (Plein Gaz)** pour reprendre de la vitesse.
  3. Maintenir la **symétrie au palonnier (bille au centre)** ! Ne JAMAIS tenter de relever une aile qui s'enfonce avec les ailerons (cela augmenterait l'incidence du côté enfoncé et déclencherait une vrille immédiate !).

:::piege Le Piège N°1 de l'Examen DGAC
Un avion peut décrocher à **N'IMPORTE QUELLE VITESSE, DANS N'IMPORTE QUELLE ASSIETTE ET AVEC N'IMPORTE QUELLE PUISSANCE MOTEUR** !
Il suffit que le pilote tire trop fort sur le manche et dépasse l'incidence critique. (Exemple : décrochage dynamique lors d'une ressource brutale à 120 kt).
:::

### 2. Le Facteur de Charge (n) et Virage Incliné
En virage coordonné horizontal en palier à l'inclinaison \(\\Phi\) :
La portance doit équilibrer à la fois le poids de l'avion ET la force centrifuge.
\\[ n = \\frac{1}{\\cos \\Phi} \\]
- À **0°** d'inclinaison : \\(n = 1\\) g (poids normal).
- À **30°** d'inclinaison : \\(\\cos 30^\\circ = 0,866\\) -> \\(n = 1,15\\) g.
- À **45°** d'inclinaison : \\(\\cos 45^\\circ = 0,707\\) -> \\(n = 1,41\\) g.
- À **60°** d'inclinaison : \\(\\cos 60^\\circ = 0,5\\) -> \\(n = \\mathbf{2,0\\ g}\\) ! (L'avion et ses occupants pèsent deux fois leur poids réel).
- À **75°** d'inclinaison : \\(n = 3,86\\) g.

#### Conséquence Mortelle sur la Vitesse de Décrochage (\(V_s\)) :
Sous facteur de charge \(n\), la vitesse de décrochage augmente proportionnellement à la **racine carrée de \(n\)** :
\\[ V_s(n) = V_{s0} \\times \\sqrt{n} \\]
- Pour un avion dont la vitesse de décrochage à plat est de **50 kt** :
  - En virage à **60° d'inclinaison** (\(n = 2\)) :
    \\[ V_s = 50 \\times \\sqrt{2} = 50 \\times 1,414 = \\mathbf{70,7\\ kt} ! \\]
- Si le pilote effectue ce virage à 65 kt sans incliner le nez vers le bas, **l'avion décroche brutalement en virage** alors qu'il vole 15 kt au-dessus de sa vitesse de décrochage normale !`,
      keyTakeaways: [
        "Décrochage = dépassement de l'incidence critique (~16°), indépendant de la vitesse brute.",
        "Sortie de décrochage : RENDRE LA MAIN (pousser le manche) + plein gaz + contrôler les ailes au palonnier.",
        "Facteur de charge en virage : n = 1 / cos(inclinaison). À 60°, n = 2 g.",
        "Vitesse de décrochage sous facteur de charge : Vs(n) = Vs * sqrt(n). À 60°, Vs augmente de 41% !",
        "Ne jamais utiliser les ailerons pour rattraper une aile qui décroche (utiliser le palonnier)."
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
