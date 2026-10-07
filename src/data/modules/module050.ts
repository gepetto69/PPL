import type { PPLModule } from '../../types/ppl';

export const module050: PPLModule = {
  id: '050',
  code: '050',
  name: 'Météorologie Aéronautique',
  shortName: 'Météorologie',
  iconName: 'CloudRain',
  color: 'cyan',
  description: 'Atmosphère standard OACI, pressions et altimétrie, masses d’air, fronts chaud/froid/occlus, classification des nuages, phénomènes dangereux (orages, givrage, turbulences, brouillards) et décodage complet METAR, TAF, TEMSI et WINTEM.',
  examQuestionsCount: 24,
  examDurationMinutes: 40,
  chapters: [
    {
      id: '050-ch1',
      moduleId: '050',
      title: 'L’Atmosphère Standard, Pression et Altimétrie',
      readTime: '9 min',
      diagramType: 'atmosphere',
      content: `### 1. L'Atmosphère Standard Internationale (ISA)
Pour calibrer les instruments de bord (altimètre, variomètre, anémomètre) et calculer les performances des avions, l'OACI a défini un modèle mathématique moyen appelé **Atmosphère Type OACI (ISA - International Standard Atmosphere)** au niveau moyen de la mer (MSL, 0 ft) :
- **Température** : **+15 °C** (288,15 K).
- **Pression atmosphérique** : **1 013,25 hPa** (ou 29,92 pouces de mercure inHg, ou 760 mm de mercure).
- **Masse volumique de l'air (\(\\rho\))** : **1,225 kg/m³**.
- **Gradient thermique vertical** : **-2 °C par tranche de 1 000 ft** (soit -0,65 °C pour 100 m) dans la troposphère jusqu'à la **tropopause** située à 11 000 m (36 090 ft).
- **Gradient barométrique vertical** : **1 hPa pour 28 ft** (environ 8,5 m) au voisinage du niveau de la mer.

:::formule Calcul Rapide de la Température Standard ISA
\\[ T_{ISA} = 15 - 2 \\times \\left(\\frac{\\text{Altitude en pieds}}{1000}\\right) \\]
*Exemples :*
- Au FL 50 (5 000 ft) : \\(T_{ISA} = 15 - (2 \\times 5) = +5\\ ^\\circ\\text{C}\\).
- Au FL 100 (10 000 ft) : \\(T_{ISA} = 15 - (2 \\times 10) = -5\\ ^\\circ\\text{C}\\).
- Au FL 150 (15 000 ft) : \\(T_{ISA} = 15 - (2 \\times 15) = -15\\ ^\\circ\\text{C}\\).
:::

### 2. Anticyclones, Dépressions et Vents
- **Anticyclone (Haute Pression - H)** : Zone où la pression centrale est supérieure aux pressions périphériques (courbes isobares fermées). L'air y est subsident (descendant), ce qui comprime et réchauffe l'air : temps généralement calme, ciel clair en été, mais risques de brouillards et stratus tenaces en hiver.
- **Dépression (Basse Pression - L)** : Zone de basse pression avec convergence et mouvements ascendants de l'air : formation de nébulosité dense, précipitations et vents forts.
- **Loi de Buys-Ballot (dans l'hémisphère Nord)** :
  - Le vent s'écoule autour des anticyclones dans le sens des **aiguilles d'une montre**, et autour des dépressions dans le **sens inverse**.
  - *"Si vous vous placez face au vent dans l'hémisphère Nord, la basse pression se trouve sur votre DROITE."* (Ou dos au vent, la dépression est à votre gauche).
- **Gradient de pression et frottement du sol** :
  - Plus les lignes isobares sont serrées sur la carte, plus le gradient de pression est fort et plus le vent est violent.
  - En altitude (> 2 000 ft sol), le vent souffle parallèlement aux isobares (**vent géostrophique**).
  - Au sol, le frottement ralentit le vent et le fait converger d'environ **20° à 30° vers le centre de la dépression** par rapport au vent d'altitude.

### 3. Humidité de l'Air et Point de Rosée
L'air ne peut contenir qu'une quantité maximale de vapeur d'eau à une température donnée :
- **Point de Rosée (Dew Point - Td)** : Température à laquelle il faut refroidir une masse d'air (à pression constante) pour qu'elle devienne saturée à 100% d'humidité et commence à condenser en gouttelettes d'eau liquide.
- **Écart Température - Point de Rosée (Spread)** :
  - Si \\(T - T_d \\le 2\\ ^\\circ\\text{C}\\), l'humidité relative dépasse 90% : **formation imminente de brume, brouillard ou plafond bas (stratus)** !
  - *Calcul de la base des cumulus de convection thermique* :
    \\[ \\text{Hauteur de la base (en ft)} = (T - T_d) \\times 400 \\]
    *(Ex: si T = 22°C et Td = 12°C, écart = 10°C -> base des cumulus à 4 000 ft sol).*`,
      keyTakeaways: [
        "ISA : 1013,25 hPa, +15 °C et 1,225 kg/m³ au niveau de la mer. Gradient -2 °C / 1000 ft.",
        "Gradient barométrique basse couche : 1 hPa = 28 pieds.",
        "Hémisphère Nord : vent horaire autour des anticyclones, antihoraire autour des dépressions.",
        "Écart Température / Point de rosée < 2 °C = condensation immédiate (brouillard / stratus).",
        "Base des cumulus = (T - Td) x 400 pieds."
      ]
    },
    {
      id: '050-ch2',
      moduleId: '050',
      title: 'Masses d’Air, Frontologie et Classification des Nuages',
      readTime: '10 min',
      content: `### 1. Classification Internationale des Nuages
Les nuages sont classés selon leur altitude de base et leur morphologie :
- **Nuages Supérieurs (base > 20 000 ft / 6 000 m - composés exclusivement de cristaux de glace)** :
  - **Cirrus (Ci)** : Filaments blancs fins et déchiquetés ("queues de cheval"), annoncent souvent l'arrivée d'un front chaud avec 24h d'avance.
  - **Cirrostratus (Cs)** : Voile laiteux transparent créant un phénomène de **halo lumineux** autour du soleil ou de la lune.
  - **Cirrocumulus (Cc)** : Ciel moutonné fin sans ombre portée.
- **Nuages Moyens (base entre 6 500 ft et 20 000 ft)** :
  - **Altostratus (As)** : Voile grisâtre épais laissant deviner le soleil comme à travers un verre dépoli. Précipitations continues légères.
  - **Altocumulus (Ac)** : Bancs de rouleaux ou galets gris-blanc. Les *Altocumulus Castellanus* indiquent une forte instabilité en moyenne altitude (signe précurseur d'orages).
- **Nuages Inférieurs (base du sol à 6 500 ft / 2 000 m)** :
  - **Stratus (St)** : Nappe uniforme grise très basse touchant parfois le relief (brouillard élevé), bruine.
  - **Stratocumulus (Sc)** : Nappe continue de rouleaux sombres à base bien dessinée.
  - **Cumulus (Cu)** : Nuages de convection isolés à base plate et sommet bourgeonnant ("choux-fleurs").
- **Nuages à Grand Développement Vertical (traversent tous les étages)** :
  - **Nimbostratus (Ns)** : Nuage sombre de pluie continue et dense (masse d'air stable de front chaud).
  - **Cumulonimbus (CB)** : Nuage d'orage géant à sommet en forme d'enclume, responsable des phénomènes les plus violents !

### 2. Les Systèmes Frontaux et Dépressions Tempérées
La rencontre entre une masse d'air chaud et humide d'origine tropicale et une masse d'air froid et dense d'origine polaire donne naissance à la perturbation d'ouest classique :

#### A. Le Front Chaud (Air chaud qui glisse au-dessus de l'air froid) :
- Pente faible (\(\approx 0,5\) à 1%).
- **Ordre d'apparition des nuages à l'arrivée du front** :
  1. *Cirrus* (à 800-1000 km en avant).
  2. *Cirrostratus* (halo).
  3. *Altostratus*.
  4. *Nimbostratus* avec pluies continues.
  5. *Stratus fractus* sous la pluie avec dégradation sévère de la visibilité et plafond très bas.
- Après le passage du front chaud : secteur chaud avec ciel gris, bruines et visibilité médiocre.

#### B. Le Front Froid (L'air froid dense s'engouffre sous l'air chaud et le soulève brutalement) :
- Pente forte (\(\approx 2\)%), déplacement rapide (20 à 30 kt).
- Nuages cumuliformes instables : Cumulus bourgeonnants (TCU), averses violentes et **Cumulonimbus (CB)** alignés le long du front.
- Caractéristiques au passage : **Chute brutale de température**, rotation brutale du vent vers la droite (ex: du Sud-Ouest vers le Nord-Ouest), rafales violentes, hausse rapide de la pression atmosphérique.
- À l'arrière du front froid : **Ciel de traîne** (air froid instable, excellente visibilité entre les averses de giboulées, cumulus et cumulus congestus).

#### C. L'Occlusion :
Le front froid se déplace plus vite que le front chaud et finit par le rattraper, rejetant la masse d'air chaud en altitude.

:::memo Résumé Pratique Frontologie
- **Front Chaud** : Nuages stratiformes étalés sur 1 000 km, pluies régulières et continues, plafonds bas et durables.
- **Front Froid** : Nuages cumuliformes étroits (100 km), passages brutaux, averses violentes, grains et orages, suivi d'un ciel de traîne à très bonne visibilité.
:::`,
      keyTakeaways: [
        "Cirrus = annonce front chaud ; Cirrostratus = halo autour du soleil.",
        "Altocumulus castellanus = instabilité moyenne couche, précurseur d'orages.",
        "Nimbostratus = pluie continue ; Cumulonimbus = averses violentes, orages et grêle.",
        "Front chaud : progression lente, nuages stratifiés, pluies continues, plafond bas.",
        "Front froid : pente raide, passage brutal, rafales, rotation du vent à droite, baisse de température, averses convectives.",
        "Ciel de traîne : excellente visibilité mais averses et turbulences."
      ]
    },
    {
      id: '050-ch3',
      moduleId: '050',
      title: 'Phénomènes Dangereux : Cumulonimbus, Givrage et Turbulences',
      readTime: '9 min',
      content: `### 1. Le Cumulonimbus (CB) : Danger Mortel pour le VFR
Le Cumulonimbus est le monstre météorologique par excellence. Son sommet peut dépasser 40 000 à 50 000 ft (FL 500) :
- **Trois ingrédients indispensables à sa genèse** :
  1. Une forte instabilité thermique de la masse d'air (gradient thermique élevé).
  2. Une humidité importante dans les basses couches.
  3. Un mécanisme déclencheur ascendant (convection solaire au sol, soulèvement orographique contre une montagne, ou front froid vigoureux).
- **Les dangers majeurs du CB en vol** :
  - **Courants ascendants et descendants destructeurs** : vitesses verticales pouvant dépasser 50 à 100 km/h (3 000 à 6 000 ft/min), capables de briser la structure d'un avion en vol !
  - **Rafales descendantes (Microbursts)** : vents divergents violents au sol pouvant dépasser 60 kt créant un cisaillement horizontal de vent foudroyant en finale.
  - **Givrage sévère et instantané** : eau surfondue massive gelant instantanément sur la cellule.
  - **Grêle géante** : capable de traverser le pare-brise, d'enfoncer les bords d'attaque et d'éteindre le moteur. Peut être éjectée à plus de 10 NM sous l'enclume !
  - **Foudre** : aveuglement temporaire du pilote, magnétisation des instruments et destruction de l'avionique.

:::definition Règle Impérative face à un Orage (CB)
Ne JAMAIS tenter de traverser un Cumulonimbus ni de passer sous sa base !
Contourner tout CB isolé avec une distance minimale de **10 milles nautiques (NM)**, et d'au moins **20 NM du côté sous le vent** (en direction de l'enclume où retombent les grêlons).
:::

### 2. Le Givrage de Cellule
Le givrage se produit lorsque l'aéronef vole dans un nuage ou une averse contenant des **gouttelettes d'eau surfondue** (eau restant liquide à des températures négatives) entre **0 °C et -20 °C** :
- **Givre blanc (Rime ice)** : Petites gouttelettes gelant instantanément au contact. Aspect opaque, rugueux, friable. Altère le profil aérodynamique.
- **Givre transparent (Clear ice / Verglas)** : Grosses gouttelettes d'eau surfondue qui s'étalent avant de geler lentement. Forme une couche de glace compacte, transparente, très lourde et très adhérente.
- **Conséquences aérodynamiques catastrophiques** :
  - **Augmentation massive du poids** de l'appareil.
  - **Diminution drastique de la portance maximale** (\(C_{z\_max}\) en chute libre).
  - **Augmentation spectaculaire de la traînée**.
  - **Élévation brutale de la vitesse de décrochage (\(V_s\))** (l'avion peut décrocher en palier à vitesse de croisière !).
  - Blocage des gouvernes, perte de visibilité sur pare-brise, obturation du tube Pitot et des prises statiques.
- **Pluie verglaçante (Freezing Rain)** : Gouttes de pluie tiède tombant d'une couche d'inversion supérieure dans une couche d'air sous 0 °C. C'est le givrage le plus foudroyant et mortel connu en aviation !

### 3. Les Brouillards et Phénomènes de Visibilité Réduite
- **Brouillard (FG - Fog)** : Visibilité horizontale inférieure à **1 000 mètres**.
- **Brume (BR - Mist)** : Visibilité horizontale comprise entre **1 000 m et 5 000 m**, humidité relative > 75%.
- **Brume sèche (HZ - Haze)** : Poussières ou pollution, humidité < 75%.
- **Les principaux types de brouillards** :
  - *Brouillard de rayonnement* : Se forme la nuit par ciel clair, vent faible (2 à 8 kt) et forte humidité. Le sol perd sa chaleur par rayonnement infrarouge et refroidit la couche d'air en contact sous le point de rosée. Il se dissipe 1 à 2 heures après le lever du soleil par réchauffement.
  - *Brouillard d'advection* : Masse d'air doux et humide qui glisse sur une surface maritime ou terrestre très froide. Très étendu, très épais, peut se former avec des vents jusqu'à 15 kt et persiste plusieurs jours sans faiblir.
  - *Brouillard de pente (orographique)* : Air humide forcé de s'élever le long d'un relief, qui se refroidit par détente adiabatique.`,
      keyTakeaways: [
        "Cumulonimbus (CB) : contournement à 10 NM minimum (20 NM côté enclume sous le vent).",
        "Microbursts : rafales descendantes destructrices à proximité des orages.",
        "Givrage de cellule : eau surfondue entre 0 °C et -20 °C -> augmentation du poids, explosion de la traînée et hausse majeure de la vitesse de décrochage.",
        "Brouillard si visibilité < 1 000 m ; Brume entre 1 000 m et 5 000 m.",
        "Brouillard de rayonnement : nuit claire, vent calme, se dissipe au soleil."
      ]
    },
    {
      id: '050-ch4',
      moduleId: '050',
      title: 'Observation et Prévision : METAR, TAF, Cartes TEMSI et WINTEM',
      readTime: '10 min',
      diagramType: 'metar',
      content: `### 1. Le Message d'Observation METAR
Le METAR est un bulletin régulier d'observation météorologique d'aérodrome diffusé toutes les 30 minutes (ou 1 heure selon le terrain) :

\`\`\`
METAR LFPG 141100Z 26018G30KT 220V300 4500 +RA BKN012 OVC035 14/13 Q1008 TEMPO 1500 TSRA BKN008CB=
\`\`\`

#### Décodage intégral groupe par groupe :
1. **LFPG** : Code OACI du terrain (Paris Charles de Gaulle).
2. **141100Z** : Le 14 du mois à 11h00 UTC (Zulu).
3. **26018G30KT** : Vent moyen du **260° VRAI** pour **18 nœuds**, avec rafales (**G**usts) à **30 nœuds**.
4. **220V300** : Vent variable en direction entre 220° et 300°.
5. **4500** : Visibilité dominante de 4 500 mètres (si 9999 = 10 km ou plus ; si 0400 = 400 mètres).
6. **+RA** : Pluie forte (\`+\` = fort, \`-\` = faible, sans signe = modéré, \`RA\` = Rain, \`DZ\` = Drizzle/bruine, \`SN\` = Snow/neige).
7. **BKN012 OVC035** : Couches nuageuses :
   - \`BKN012\` : 5 à 7 octas à **1 200 ft / sol** (constitue le premier **plafond** !).
   - \`OVC035\` : 8 octas (couvert complet) à 3 500 ft / sol.
8. **14/13** : Température extérieure sous abri **+14 °C**, Point de rosée **+13 °C** (écart de 1°C = air saturé à 95%).
9. **Q1008** : Calage altimétrique QNH = **1 008 hPa**.
10. **TEMPO 1500 TSRA BKN008CB** : Évolution temporaire (durant moins d'une heure à la fois) : visibilité réduite à 1 500 m avec orage et pluie modérée (\`TSRA\` = Thunderstorm Rain) et Cumulonimbus à 800 ft sol.

:::definition Les Abréviations de Nébulosité OACI
- **FEW** (Quelques) : 1 à 2 octas (huitièmes de ciel couvert).
- **SCT** (Épars / Scattered) : 3 à 4 octas.
- **BKN** (Fragmenté / Broken) : 5 à 7 octas -> **CONSTITUE UN PLAFOND**.
- **OVC** (Couvert / Overcast) : 8 octas -> **CONSTITUE UN PLAFOND**.
- **NSC** : No Significant Cloud (aucun nuage sous 5 000 ft et aucun CB/TCU).
- **CAVOK** : Conditions idéales réunissant : Visi \(\ge 10\\text{ km}\) + aucun nuage sous 5 000 ft (ou MSA) + aucun CB/TCU + aucun temps significatif.
:::

### 2. Le Message de Prévision TAF (Terminal Aerodrome Forecast)
Le TAF prévoit l'évolution des conditions météo sur un aérodrome pour une durée de 9h, 24h ou 30h :
- **BECMG (Becoming)** : Changement progressif et régulier des conditions météo durant la période horaire indiquée, devenant permanent.
- **TEMPO (Temporary)** : Fluctuations temporaires d'une durée inférieure à 1 heure à chaque occurrence, et couvrant moins de la moitié de la période.
- **PROB30 / PROB40** : Probabilité de 30% ou 40% qu'un phénomène météo survienne pendant la plage horaire (ex: \`PROB30 TEMPO 1418 2000 TSRA\`).

:::piege Différence Capitale METAR vs TAF
- Le **METAR** décrit ce qui s'est passé (observation passée à l'heure d'émission).
- Le **TAF** prédit ce qui va se passer dans les heures futures (prévision).
- Le vent écrit dans les METAR/TAF est toujours exprimé par rapport au **NORD VRAI**. Le vent donné à la radio par la Tour est par rapport au **NORD MAGNÉTIQUE** !
:::

### 3. Les Cartes Aéronautiques Météo-France : TEMSI et WINTEM
- **Carte TEMSI (Temps Significatif)** :
  - Publiée pour la France (TEMSI France basse altitude, sol au FL 120) toutes les 3 heures.
  - Représente les fronts (chauds, froids, occlus), les zones de nébulosité, les zones de turbulence modérée ou sévère (symboles en forme de chapeau ou pointe), et les zones de givrage.
  - Indique le niveau de l'**isotherme 0 °C** (altitude en centaines de pieds au-dessus de laquelle l'eau gèle).
- **Carte WINTEM (Wind and Temperature)** :
  - Fournit pour différents niveaux de vol (FL 020, FL 050, FL 100...) la direction du vent (flèches avec barbules : 1 fanion = 50 kt, 1 grande barbule = 10 kt, 1 petite = 5 kt) et la température de l'air en degrés Celsius.`,
      keyTakeaways: [
        "METAR = observation ; TAF = prévision avec indicateurs BECMG, TEMPO, PROB.",
        "Le vent écrit (METAR/TAF/WINTEM) est en degrés VRAIS ; le vent parlé (Tour/ATIS) est en degrés MAGNÉTIQUES.",
        "Nébulosité : FEW (1-2), SCT (3-4), BKN (5-7 = Plafond), OVC (8 = Plafond).",
        "CAVOK : Visibilité >= 10 km, aucun nuage sous 5 000 ft (ou MSA), pas de CB ni TCU, aucun temps significatif.",
        "TEMSI indique les fronts, la couverture nuageuse, les turbulences et l'isotherme 0 °C."
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
        'Le déclenchement automatique d’un phénomène d’onde orographique'
      ],
      correctAnswer: 1,
      explanation: 'Lorsque la température de l’air rejoint celle du point de rosée, l’humidité relative atteint 100%. L’air ne peut plus contenir sa vapeur d’eau sous forme invisible, provoquant la condensation sous forme de brouillard, brume ou nuages bas.',
      difficulty: 'facile'
    }
  ]
};
