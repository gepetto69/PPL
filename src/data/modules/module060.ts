import type { PPLModule } from '../../types/ppl';

export const module060: PPLModule = {
  id: '060',
  code: '060',
  name: 'Navigation Aérienne',
  shortName: 'Navigation',
  iconName: 'Compass',
  color: 'indigo',
  description: 'Forme de la Terre, coordonnées géographiques, projections cartographiques (Lambert, Mercator), triangle des vitesses et calculs de dérive, conversion des caps (Rv, Cv, Cm, Cc), radionavigation (VOR, ADF, DME, ILS, GNSS/GPS) et gestion du vol.',
  examQuestionsCount: 24,
  examDurationMinutes: 45,
  chapters: [
    {
      id: '060-ch1',
      moduleId: '060',
      title: 'La Terre, Coordonnées et Projections Cartographiques',
      readTime: '9 min',
      content: `### 1. La Forme de la Terre et les Coordonnées Géographiques
La Terre est un ellipsoïde de révolution aplati aux pôles (géoïde) :
- **Rayon terrestre moyen** : Environ 6 371 km.
- **L'Équateur** : Grand cercle perpendiculaire à l'axe de rotation terrestre partageant la planète en hémisphères Nord et Sud.
- **La Latitude (\\(\\varphi\\))** : Angle mesuré au centre de la Terre entre le plan de l'Équateur et le point considéré, de **0° à 90° Nord ou Sud**.
  - *Équivalence fondamentale de navigation* : **1 minute d'arc de latitude (\(1'\)) = exactement 1 Mille Nautique (NM) = 1 852 mètres** !
  - 1 degré de latitude (\(1^\circ = 60'\)) = 60 NM.
- **La Longitude (\\(\\lambda\\))** : Angle dièdre mesuré le long de l'Équateur entre le méridien d'origine (**Méridien de Greenwich**) et le méridien du lieu, de **0° à 180° Est ou Ouest**.
  - ⚠️ *Piège d'examen* : Les méridiens convergent vers les pôles. Par conséquent, 1 minute de longitude ne vaut 1 NM qu'à l'Équateur et rétrécit vers les pôles selon la formule : \(1'\\text{ de longitude} = 1\\text{ NM} \\times \\cos(\\text{Latitude})\). **On ne mesure les distances sur une carte QUE sur l'échelle des latitudes (sur le côté vertical) !**

:::definition Loxodromie vs Orthodromie
- **Loxodromie (Rhumb line)** : Ligne coupant tous les méridiens sous un angle constant. L'avion vole à cap constant. Sur une carte Mercator, c'est une ligne droite. Elle est plus longue que le trajet minimal sur de grandes distances.
- **Orthodromie (Great Circle)** : Arc de grand cercle représentant la **distance la plus courte** entre deux points à la surface du globe. Son cap varie continuellement le long du parcours.
:::

### 2. Les Projections Cartographiques Aéronautiques
Pour représenter une sphère sur un plan papier sans distorsion excessive, l'aviation utilise deux projections majeures :
- **Projection Conique Conforme de Lambert (Carte OACI 1:500 000 et 1:1 000 000)** :
  - La Terre est projetée sur un cône sécant le long de deux parallèles de référence (parallèles standards).
  - Propriété essentielle : **Conforme** (les angles sont fidèlement conservés à tout endroit).
  - Sur cette carte, la **ligne droite tracée à la règle représente pratiquement une route orthodromique** (le chemin le plus court).
  - L'échelle est quasiment constante sur toute la feuille.
- **Projection Cylindrique de Mercator** :
  - Les méridiens et parallèles forment un quadrillage rectiligne parfait.
  - La ligne droite tracée est une **loxodromie** (cap constant).
  - Les surfaces sont très déformées en haute latitude (pôles étirés à l'infini). Utilisée surtout pour la marine et la navigation transocéanique.`,
      keyTakeaways: [
        "1 minute d'arc de latitude = 1 NM = 1 852 mètres. TOUJOURS mesurer les distances sur l'échelle des latitudes.",
        "Orthodromie = chemin le plus court (grand cercle). Loxodromie = route à cap constant.",
        "Carte OACI 1:500 000 = Projection conique conforme de Lambert (la ligne droite est une orthodromie)."
      ]
    },
    {
      id: '060-ch2',
      moduleId: '060',
      title: 'Le Triangle des Vitesses, Dérive et Conversion des Caps',
      readTime: '10 min',
      content: `### 1. La Chaîne Complète des Corrections de Cap
Pour guider son avion au compas du point de départ au point d'arrivée :

\`\`\`
Route Vraie (Rv) -> [Vent / Dérive X] -> Cap Vrai (Cv) -> [Déclinaison Dm] -> Cap Magnétique (Cm) -> [Déviation d] -> Cap Compas (Cc)
\`\`\`

1. **Route Vraie (Rv - True Track)** : Angle mesuré sur la carte Lambert au rapporteur entre le Nord Géographique (Vrai) et le segment tracé.
2. **Cap Vrai (Cv - True Heading)** : Orientation de l'axe longitudinal de l'avion par rapport au Nord Vrai pour contrer l'effet du vent.
   \\[ Cv = Rv - (\\pm X) \\]
   - **Dérive droite (+X)** : Le vent vient de la gauche et pousse l'avion vers la droite. L'avion doit virer vers la gauche pour compenser -> on **soustrait** la dérive (\(Cv = Rv - X\)).
   - **Dérive gauche (-X)** : Le vent vient de la droite et pousse l'avion vers la gauche -> on **ajoute** la correction à droite (\(Cv = Rv + |X|\)).
3. **Cap Magnétique (Cm - Magnetic Heading)** :
   \\[ Cm = Cv - Dm \\]
   - **Déclinaison Est (E / positive)** : Le Nord Magnétique est à l'Est du Nord Vrai -> on **soustrait** (\(Cm = Cv - Dm\)).
   - **Déclinaison Ouest (W / négative)** : Le Nord Magnétique est à l'Ouest du Nord Vrai -> on **ajoute** (\(Cm = Cv + |Dm|\)).
   - *Mnémonique international* : *"East is Least (-), West is Best (+)"*.
4. **Cap Compas (Cc - Compass Heading)** :
   \\[ Cc = Cm - d \\]
   - La déviation résiduelle \(d\) est causée par le champ magnétique propre de l'appareil (moteur, câbles, instruments) et se lit sur la carte de déviation fixée sous le compas.

:::formule Calcul Mental Rapide en Vol (Méthode du Facteur de Base)
Le **Facteur de Base (Fb)** est le temps (en minutes) nécessaire pour parcourir 1 NM à sa vitesse propre (\(V_p\)) :
\\[ Fb = \\frac{60}{V_p} \\]
- À **120 kt** : \\(Fb = 60 / 120 = 0,5\\) min/NM (on vole à 2 NM par minute).
- À **90 kt** : \\(Fb = 60 / 90 = 0,66\\) min/NM (on vole à 1,5 NM par minute).
- **Dérive Maximale (\(X_{max}\))** : Dérive subie si le vent est strictement traversier (\(90^\circ\)) :
  \\[ X_{max} = Fb \\times V_{vent} \\]
  *(Exemple : Avion à 120 kt avec 20 kt de vent : \\(X_{max} = 0,5 \\times 20 = 10^\\circ\\)).*
- **Dérive Réelle (\(X\))** pour un vent faisant un angle \(\\alpha\) avec la route :
  \\[ X = X_{max} \\times \\sin \\alpha \\]
  *(Règle pratique : pour \(\\alpha = 30^\\circ\\), \\(X = X_{max} \\times 0,5\\) ; pour \(\\alpha = 45^\\circ\\), \\(X = X_{max} \\times 0,7\\) ; pour \(\\alpha \ge 60^\\circ\\), \\(X \\approx X_{max}\\)).*
:::

### 2. Vitesse Propre (TAS / Vp) vs Vitesse Sol (GS / Vs)
- **Vitesse Indiquée (IAS / Vi)** : Vitesse lue au cadran de l'anémomètre (pression dynamique brute).
- **Vitesse Corrigée (CAS / Vc)** : Vitesse indiquée corrigée des erreurs instrumentales et de position de la sonde Pitot.
- **Vitesse Propre (TAS / Vp - True Airspeed)** : Vitesse réelle de l'avion dans la masse d'air. En altitude, la densité de l'air diminue, donc pour une même pression dynamique :
  \\[ V_p \\approx V_i + \\left(1\\% \\text{ par } 600\\text{ ft d'altitude}\\right) \\]
  *(Exemple : à 6 000 ft avec Vi = 100 kt, la Vp est d'environ 110 kt).*
- **Vitesse Sol (GS / Vs - Ground Speed)** : Vitesse de déplacement réel de l'avion par rapport à la surface terrestre. Elle est égale à la projection de la vitesse propre corrigée de la composante de vent effectif (vent debout = retard, vent arrière = gain).`,
      keyTakeaways: [
        "Ordre : Rv -> [Dérive X] -> Cv -> [Déclinaison Dm] -> Cm -> [Déviation d] -> Cc.",
        "Déclinaison Ouest s'ajoute au Cv pour donner le Cm (West is Best).",
        "Facteur de base : Fb = 60 / Vp. Dérive max = Fb x Vvent.",
        "Vitesse propre TAS augmente de ~1% par 600 ft d'altitude par rapport à l'IAS.",
        "Vitesse sol GS = vitesse propre corrigée du vent effectif."
      ]
    },
    {
      id: '060-ch3',
      moduleId: '060',
      title: 'Radionavigation : VOR, ADF/NDB, DME et GNSS (GPS)',
      readTime: '10 min',
      diagramType: 'vor',
      content: `### 1. Le VOR (VHF Omnidirectional Range)
Le VOR est la balise reine de la radionavigation conventionnelle terrestre (bande VHF **108.00 à 117.95 MHz**) :
- Émet **360 radiales magnétiques** espacées de 1° rayonnant TOUTES **depuis la station vers l'extérieur** (de 000° à 359° par rapport au Nord Magnétique).
- **L'instrument de bord comprend** :
  1. La couronne graduée avec le bouton sélecteur d'angle (**OBS - Omni Bearing Selector**).
  2. L'aiguille mobile d'écart de route (**CDI - Course Deviation Indicator**).
     - L'échelle comporte 5 points de part et d'autre du centre.
     - **Chaque point représente 2° d'écart angulaire** (l'échelle entière = 10°).
  3. L'indicateur de sens (**Drapeau TO / FROM**).
- **Règle d'or absolue du VOR** :
  - **L'INDICATION DU VOR NE DÉPEND JAMAIS DU CAP DE L'AVION !** Elle dépend exclusivement de la position géographique de l'avion par rapport à la balise.
- **Voler vers la station (Mode TO)** :
  - Afficher la route magnétique de rapprochement sur l'OBS. L'indicateur affiche **TO**. L'aiguille indique de quel côté se trouve la radiale désirée : voler vers l'aiguille (*Commandement direct*).
- **S'éloigner de la station (Mode FROM)** :
  - Afficher la radiale d'éloignement sur l'OBS. L'indicateur affiche **FROM**.

:::piege L'Inversion de Sens sur VOR (Reverse Sensing)
Si vous volez vers la balise avec un OBS affiché en éloignement (FROM) : l'aiguille fonctionne à l'envers ! Si l'aiguille part à gauche, la radiale est à droite !
Pour éviter toute inversion de commande : toujours afficher en haut de l'OBS la route magnétique que vous suivez vers la balise (drapeau TO) ou que vous suivez en vous éloignant (drapeau FROM).
:::

### 2. Le DME (Distance Measuring Equipment)
- Fonctionne dans la bande **UHF (960 à 1 215 MHz)** par échange d'impulsions radar avec le sol.
- Mesure la **Distance Oblique (Slant Range)** directe en ligne droite (hypoténuse) entre l'antenne de l'avion et la station au sol.
- ⚠️ *Erreur de hauteur oblique* :
  - À la verticale exacte d'une balise DME située au niveau de la mer, si un avion vole à **6 000 ft (soit exactement 1 NM de hauteur)**, le récepteur DME affiche **1.0 NM** (et non pas zéro !).
  - Plus l'avion est proche et haut, plus l'écart avec la distance sol horizontale est grand.

### 3. L'ADF et les Balises NDB
- **NDB (Non-Directional Beacon)** : Émetteur omnidirectionnel basse et moyenne fréquence (LF/MF de 190 à 1 750 kHz).
- **ADF (Automatic Direction Finder)** : Récepteur de bord dont l'aiguille pointe **directement vers la station NDB**.
- **Gisement (Gt)** : Angle entre l'axe longitudinal de l'avion (cap) et la direction de la station.
  \\[ \\text{Relevé Magnétique (Rm / QDM)} = \\text{Cap Magnétique (Cm)} + \\text{Gisement (Gt)} \\]
- *Limites de l'ADF* : Sensible aux parasites orageux (l'aiguille pointe vers les éclairs !) et à l'effet de nuit.

### 4. Le GNSS (GPS) et Navigation par Satellite
- Constellation américaine GPS (Navstar) : au moins 24 satellites opérationnels en orbite moyenne à 20 200 km d'altitude.
- **Nombre de satellites requis** :
  - **3 satellites** : position 2D (Latitude, Longitude) si le temps récepteur est synchronisé.
  - **4 satellites** : position **3D complète** (Latitude, Longitude, Altitude) + correction d'horloge du récepteur.
  - **5 satellites** : intégrité autonome de base (**RAIM - Receiver Autonomous Integrity Monitoring**) pour détecter un satellite défaillant.
  - **6 satellites** : RAIM avec exclusion automatique du satellite défaillant sans interruption du guidage.
- **Systèmes d'augmentation SBAS (EGNOS en Europe, WAAS aux USA)** : Utilise des stations sol de référence et des satellites géostationnaires pour corriger les erreurs ionosphériques et fournir une précision métrique permettant des approches de précision (LPV / RNP APCH).`,
      keyTakeaways: [
        "VOR : radiales émises depuis la station (000° à 359°). Indépendant du cap de l'avion.",
        "1 point VOR CDI = 2° d'écart angulaire. Pleine déviation = 10°.",
        "DME : mesure la distance oblique (affiche l'altitude de l'avion en NM à la verticale de la balise).",
        "QDM (approche balise) = Cap Magnétique + Gisement (QDM = Cm + Gt).",
        "GPS : 4 satellites pour la 3D, 5 satellites pour le RAIM (détection d'anomalie), 6 pour l'exclusion."
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
