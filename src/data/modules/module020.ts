import type { PPLModule } from '../../types/ppl';

export const module020: PPLModule = {
  id: '020',
  code: '020',
  name: 'Connaissance Générale des Aéronefs (AGK)',
  shortName: 'Aéronefs & Systèmes',
  iconName: 'Wrench',
  color: 'amber',
  description: 'Cellule, commandes de vol primaires et secondaires, groupe motopropulseur 4 temps, circuits d’allumage, carburation et réchauffage, circuit carburant et huile, génération électrique, instruments anémobarométriques et gyroscopiques.',
  examQuestionsCount: 16,
  examDurationMinutes: 25,
  chapters: [
    {
      id: '020-ch1',
      moduleId: '020',
      title: 'Cellule, Structures et Commandes de Vol',
      readTime: '9 min',
      content: `### 1. La Structure de la Cellule
La cellule d'un avion léger est conçue pour supporter les charges aérodynamiques et d'atterrissage tout en conservant une masse minimale.
- **Fuselage** :
  - *Structure treillis* : tubes d'acier soudés recouverts de toile (ex: Piper Cub, Robin DR400 pour le fuselage avant).
  - *Structure semi-monocoque* (la plus répandue sur avions modernes en aluminium comme Cessna ou Piper) : membrures, lisses et couples recouverts d'un revêtement métallique travaillant qui absorbe une grande partie des contraintes de torsion et de flexion.
  - *Matériaux composites* (fibre de verre, carbone, résine époxy - ex: Diamond DA20/DA40) : état de surface extrêmement lisse réduisant la traînée de frottement, résistance élevée à la fatigue et absence de corrosion.
- **Voilure (Ailes)** :
  - L'aile est traversée par un ou deux **longerons** principaux (poutres maîtresses encaissant les efforts de flexion de la portance).
  - Les **nervures** perpendiculaires aux longerons donnent au profil aérodynamique sa forme et transmettent les forces de portance du revêtement vers les longerons.

### 2. Les Commandes de Vol Primaires et leurs Axes
L'avion évolue dans l'espace selon trois axes perpendiculaires se croisant au **Centre de Gravité (CG)** :

| Axe de vol | Mouvement | Gouverne primaire | Commande cockpit | Effet induit |
| :--- | :--- | :--- | :--- | :--- |
| **Longitudinal** (du nez à la queue) | **Roulis** (Roll) | **Ailerons** (sur les ailes) | Manche à gauche / droite | Lacet inverse |
| **Transversal** (d'un bout d'aile à l'autre) | **Tangage** (Pitch) | **Gouverne de profondeur** | Manche avant (piquer) / arrière (cabrer) | Variation de vitesse |
| **Vertical** (de haut en bas) | **Lacet** (Yaw) | **Gouverne de direction** | Palonnier gauche / droit | Roulis induit |

:::piege Le Phénomène du Lacet Inverse (Adverse Yaw)
Lorsque vous braquez les ailerons pour virer (ex: virage à gauche) :
- L'aileron droit s'abaisse : il augmente la cambrure de l'aile droite, augmentant sa portance mais aussi sa **traînée induite** !
- L'aileron gauche se lève : il diminue la portance et la traînée induite de l'aile gauche.
- **Conséquence** : La sur-traînée de l'aile droite tire le nez de l'avion vers la droite (sens opposé au virage souhaité).
- **Solutions techniques** : Ailerons différentiels (l'aileron qui monte se déplace d'un angle plus grand que celui qui descend) et ailerons à bec Frise.
- **Action de pilotage** : Le pilote doit obligatoirement **conjuguer** son virage en mettant du palonnier du même côté que le manche.
:::

### 3. Dispositifs Hypersustentateurs et Compensateurs
- **Volets de courbure (Flaps)** :
  - Situés sur la partie interne du bord de fuite de l'aile.
  - En augmentant la courbure (et la surface pour les volets Fowler), ils augmentent le coefficient maximal de portance (\(C_{z\_max}\)), ce qui **diminue la vitesse de décrochage (\(V_s\))**.
  - Braqués au premier cran (10° à 15°) : fort gain de portance avec faible traînée (idéal pour le décollage court).
  - Plein volets (30° à 40°) : très forte augmentation de la traînée, permettant d'adopter une **pente de descente raide à l'atterrissage sans accélérer**, et de raccourcir la distance de roulement au sol.
- **Compensateurs (Trim tabs)** :
  - Petite surface articulée au bord de fuite de la gouverne de profondeur.
  - Braqué en sens inverse de la gouverne pour annuler les efforts aérodynamiques sur le manche ("voler les mains légères").

:::definition Le Flottement Aéroélastique (Flutter)
Vibration oscillatoire violente et destructrice des gouvernes provoquée par un couplage entre les forces aérodynamiques et l'élasticité de la structure à très grande vitesse.
Elle peut détruire une aile en quelques secondes. C'est la raison fondamentale de l'existence de la **Vne (Vitesse à ne jamais dépasser)**.
:::`,
      keyTakeaways: [
        "Axe longitudinal = Roulis (Ailerons). Axe transversal = Tangage (Profondeur). Axe vertical = Lacet (Direction).",
        "Lacet inverse : braquer les ailerons crée une traînée dissymétrique qui fait pivoter le nez du côté opposé au virage -> conjugaison au palonnier indispensable.",
        "Volets : réduisent la vitesse de décrochage Vs, augmentent la portance au décollage et permettent une approche raide sans prise de vitesse à l'atterrissage.",
        "Le compensateur (trim) annule l'effort musculaire continu sur les commandes.",
        "La Vne protège la cellule contre le flutter destructeur."
      ]
    },
    {
      id: '020-ch2',
      moduleId: '020',
      title: 'Groupe Motopropulseur : Moteur 4 Temps, Carburation et Allumage',
      readTime: '10 min',
      content: `### 1. Le Moteur à Piston Aéronautique 4 Temps
La quasi-totalité des avions légers (Lycoming, Continental, Rotax) utilise un moteur thermique à allumage commandé selon le **cycle de Beau de Rochas** en 4 temps :
1. **Admission** : La soupape d'admission s'ouvre, le piston descend du Point Mort Haut (PMH) au Point Mort Bas (PMB) en aspirant le mélange gazeux air-essence.
2. **Compression** : Les deux soupapes sont fermées, le piston remonte vers le PMH, comprimant le mélange gazeux (pression \(\approx 10\) bars, échauffement important).
3. **Combustion - Détente (TEMPS MOTEUR)** : Un peu avant le PMH (avance à l'allumage), les bougies créent une étincelle. L'explosion porte la pression des gaz à 50-60 bars et repousse brutalement le piston vers le bas. C'est l'unique temps fournissant de l'énergie mécanique !
4. **Échappement** : La soupape d'échappement s'ouvre, le piston remonte au PMH en refoulant les gaz brûlés vers la tuyère d'échappement.

:::memo Les 4 Temps du Moteur
Admission (descend), Compression (monte), Combustion-Détente (descend avec puissance), Échappement (remonte).
Seul le troisième temps produit de la puissance.
:::

### 2. Le Système de Double Allumage par Magnétos
Pour des raisons absolues de sécurité et de redondance :
- Les moteurs d'aviation possèdent **deux magnétos totalement indépendantes** entraînées par la distribution mécanique du moteur.
- Chaque cylindre possède **2 bougies** alimentées chacune par une magnéto différente.
- **Principe fondamental** : Les magnétos génèrent elles-mêmes leur propre courant haute tension à partir d'aimants permanents en rotation. Elles ne sont **ABSOLUMENT PAS reliées à la batterie** ni à l'alternateur de bord !
- En cas de panne électrique totale en vol (batterie à plat, alternateur grillé), le moteur continue de tourner sans la moindre perturbation.
- **Sélecteur d'allumage** : OFF - R (Right) - L (Left) - BOTH - START.
  - En vol normal : toujours sur **BOTH**.
  - Essais moteur au sol : test sur R puis L pour mesurer la chute de régime (chute normale entre 50 et 150 RPM).

:::piege Coupure de Magnéto au Sol (Le fil de masse P-Lead)
Sur une magnéto, le contacteur coupe l'allumage en **reliant le circuit primaire à la MASSE**.
Si le fil de mise à la masse (P-lead) est sectionné ou débranché, la magnéto reste ALIMENTÉE en permanence, même avec la clé sur OFF !
Dans cette situation, le moindre brassage de l'hélice à la main peut démarrer le moteur et provoquer un accident mortel ! Traiter TOUTE hélice comme susceptible de démarrer.
:::

### 3. La Carburation et la Commande de Richesse
Le carburateur dose et mélange l'essence pulvérisée avec l'air admis :
- L'air traverse un rétrécissement appelé **Venturi**. Selon le principe de Bernoulli, l'air accélère et sa pression statique s'effondre.
- Cette dépression aspire le carburant par le gicleur principal, qui se vaporise dans le flux d'air.
- **Rapport stœchiométrique optimal** : Environ **1 g d'essence pour 15 g d'air**.
- **La commande de richesse (Mixture - tirette rouge)** :
  - En montant en altitude, la densité de l'air diminue. La masse d'air aspirée chute alors que le volume de carburant aspiré reste identique. Le mélange devient **trop riche** (perte de puissance, encrassement des bougies, fumée noire à l'échappement).
  - Le pilote doit alors **appauvrir** la richesse en croisière au-dessus de 3 000 ft pour rétablir le rapport optimal (ajuster jusqu'à la puissance maximale ou pic EGT).
  - Avant toute descente ou atterrissage : repousser la tirette de richesse sur **PLEIN RICHE** pour garantir la pleine puissance disponible en cas de remise de gaz.

### 4. Le Givrage du Carburateur (Phénomène Redoutable)
Dans le carburateur, deux phénomènes physiques conjugués font chuter la température de l'air de **15 °C à 20 °C** par rapport à l'extérieur :
1. La détente adiabatique de l'air dans l'étranglement du venturi.
2. La vaporisation endothermique des gouttelettes d'essence.

- **Conditions propices** : Température extérieure comprise entre **-7 °C et +25 °C** par forte humidité relative (> 60%), brouillard, pluie ou à puissance réduite (descente).
- **Symptômes en vol (hélice à pas fixe)** :
  - **Baisse lente et progressive des tours moteur (chute des RPM)** sans toucher à la manette des gaz.
  - Vibrations, rugosité moteur, puis arrêt du moteur si aucune action n'est entreprise.
- **Procédure corrective immédiate** :
  - Tirer à fond la commande de **Réchauffage Carburateur** (air chaud prélevé autour de l'échappement).
  - *Conséquence immédiate normale* : Chute supplémentaire des RPM (l'air chaud est moins dense).
  - *Après quelques secondes* : Les tours remontent au fur et à mesure que la glace fond et est avalée par le moteur (crachotements possibles), jusqu'à dépasser le niveau initial.
  - Repousser la réchauffe une fois le givrage éliminé.`,
      keyTakeaways: [
        "Cycle 4 temps : Admission, Compression, Combustion-Détente (seul temps moteur), Échappement.",
        "Double allumage par magnétos indépendantes : le moteur n'a aucun besoin de la batterie pour fonctionner.",
        "Fil P-lead coupé = magnéto toujours active -> danger mortel lors du brassage de l'hélice.",
        "Appauvrir en altitude au-dessus de 3 000 ft pour compenser la baisse de densité de l'air ; repousser Plein Riche avant d'atterrir.",
        "Givrage carbu possible jusqu'à +25 °C par air humide : chute continue de RPM -> réchauffe carbu à fond."
      ]
    },
    {
      id: '020-ch3',
      moduleId: '020',
      title: 'Circuits de Bord : Électricité, Carburant, Huile et Hélice',
      readTime: '9 min',
      content: `### 1. Le Circuit Électrique de Bord
Le circuit de bord (généralement en 12V ou 24V continu) alimente la radio, le transpondeur, les feux de navigation, le démarreur, et certains instruments gyroscopiques :
- **L'Alternateur** : Entraîné par courroie sur le vilebrequin, c'est la source principale de génération électrique dès que le moteur tourne. Il fournit le courant de bord et recharge la batterie.
- **La Batterie au plomb ou lithium** : Fournit l'énergie nécessaire au démarrage du moteur au sol et assure une réserve de secours en vol (généralement 30 à 45 minutes) en cas de panne d'alternateur.
- **Les Disjoncteurs (Circuit Breakers)** : Protègent les faisceaux électriques contre les surintensités et départs de feu.
  - *Règle d'or de sécurité* : Si un disjoncteur saute en vol, ne tenter de le réarmer qu'**UNE SEULE FOIS**, après avoir attendu son refroidissement (2 minutes). S'il saute à nouveau, NE PAS insister !
- **L'Ampèremètre** :
  - *Ampèremètre de charge batterie* : indique le courant entrant (+) ou sortant (-) de la batterie. Une valeur négative en vol signale que l'alternateur ne charge plus et que la batterie se vide !

### 2. Le Circuit Carburant et Dangers de Contamination
- **Réservoirs** : Situés dans les ailes (ou fuselage), équipés d'une **mise à l'air libre (venting)**. Si la mise à l'air libre se bouche, la dépression créée par l'aspiration de la pompe peut écraser le réservoir et provoquer la panne sèche immédiate !
- **Types de carburants aéronautiques** :
  - **AVGAS 100LL** : Essence aviation au plomb, teintée en **BLEU**, densité \(\approx 0,72\).
  - **UL91 / UL96** : Essence sans plomb, teintée en **JAUNE / AMBRE**.
  - **MOGAS (Super 98 sans plomb)** : Autorisée sur certains moteurs (Rotax) sous STC.
  - **JET-A1 (Kérosène)** : Incolore ou légèrement paille, destiné aux moteurs Diesel ou turbopropulseurs.
  - ⚠️ *DANGER CRITIQUE D'AVITAILLEMENT* : Mettre du Jet-A1 dans un moteur à allumage commandé (Lycoming 100LL) provoque la destruction immédiate du moteur au décollage par auto-allumage destructeur !

:::definition La Purge Carburant Prévol (Vérification vitale)
Avant le premier vol de la journée (ou après un avitaillement), le pilote doit prélever un échantillon d'essence à chaque purge de fond de cuve et du filtre décanteur à l'aide d'une éprouvette transparente :
- L'eau est plus dense que l'essence (densité 1,0 contre 0,72) : elle tombe au fond sous forme de bulles distinctes.
- Toute présence d'eau ou de sédiment impose de purger jusqu'à obtention d'un liquide parfaitement limpide et coloré en bleu clair.
:::

### 3. Circuit de Lubrification (Huile Moteur)
L'huile moteur remplit 4 missions indispensables :
1. **Lubrifier** : Réduire le frottement entre les pièces mécaniques en mouvement (pistons, bielles, coussinets).
2. **Refroidir** : Évacuer jusqu'à 30% de la chaleur interne du moteur (radiateur d'huile).
3. **Nettoyer et protéger** : Capturer les suies et particules métalliques vers le filtre, protéger contre la corrosion interne.
4. **Étanchéifier** : Assurer l'étanchéité entre les segments de piston et les parois des cylindres.

:::piege Surveillance Température et Pression d'Huile
Lors de la mise en route du moteur, la pression d'huile doit monter dans le secteur vert dans les **30 secondes en été (60 secondes en hiver)**. Sinon, COUPER le moteur immédiatement !
En vol, si la **pression d'huile s'effondre vers zéro alors que la température monte en zone rouge**, la panne moteur par serrage mécanique est imminente : préparer immédiatement un atterrissage forcé en campagne !
:::

### 4. Les Hélices : Calage Fixe vs Pas Variable
- **Hélice à calage fixe** : Les pales sont calées à un angle figé. C'est un compromis entre la montée et la vitesse de croisière. Le régime dépend directement de la manette des gaz et de la vitesse de l'avion (survitesse en piqué).
- **Hélice à pas variable / Vitesse constante (Constant Speed)** :
  - Un régulateur hydraulique (Governor) modifie le calage des pales pour maintenir les RPM sélectionnés par le pilote via la manette bleue d'hélice.
  - La manette des gaz (noire) règle la **Pression d'Admission (PA - Manifold Pressure)** lue en pouces de mercure (inHg).
  - *Règle de manipulation* : Pour accélérer : Manette bleue d'hélice en avant (RPM), puis manette noire de gaz (PA). Pour réduire : Manette noire de gaz en arrière, puis manette bleue de pas.`,
      keyTakeaways: [
        "Alternateur = source électrique principale ; batterie = réserve de démarrage et secours en vol.",
        "Un disjoncteur sauté ne se réarme qu'UNE SEULE FOIS après refroidissement.",
        "AVGAS 100LL est de couleur BLEUE. Jet-A1 dans un moteur essence = panne fatale au décollage.",
        "Purge carburant : obligatoire à la prévol pour éliminer l'eau décantée au fond des réservoirs.",
        "Pression d'huile à zéro + température dans le rouge = coupure moteur imminente."
      ]
    },
    {
      id: '020-ch4',
      moduleId: '020',
      title: 'Instruments de Bord : Circuit Anémobarométrique et Gyroscopes',
      readTime: '10 min',
      diagramType: 'altimeter',
      content: `### 1. Le Circuit Anémobarométrique (Pitot-Statique)
Le circuit anémobarométrique mesure les pressions d'air pour alimenter trois instruments fondamentaux :
- **Prise Statique** : Mesure la pression atmosphérique ambiante (\(P_s\)), insensible au déplacement de l'avion. Elle alimente :
  1. **L'Altimètre**
  2. **Le Variomètre**
  3. **L'Anémomètre**
- **Tube Pitot (Prise Totale)** : Dirigé vers l'avant, il mesure la pression d'impact totale :
  \\[ P_{totale} = P_{statique} + P_{dynamique} \\]
  Il alimente **EXCLUSIVEMENT l'anémomètre**.

:::formule Calcul de la Vitesse à l'Anémomètre (Badin)
L'anémomètre mesure la différence entre pression totale et pression statique, soit la pression dynamique :
\\[ P_{dyn} = P_{totale} - P_{statique} = \\frac{1}{2} \\rho V^2 \\]
Cette capsule manométrique traduit la pression en nœuds (kt) ou km/h.
:::

#### Les Arcs de Couleur de l'Anémomètre :
- **Arc BLANC (de \(V_{s0}\) à \(V_{fe}\))** : Plage d'exploitation normale des volets hypersustentateurs.
  - \(V_{s0}\) : Vitesse de décrochage en configuration atterrissage (train et pleins volets sortis).
  - \(V_{fe}\) : Vitesse maximale avec volets sortis (Flaps Extended).
- **Arc VERT (de \(V_{s1}\) à \(V_{no}\))** : Plage d'utilisation normale en air turbulent.
  - \(V_{s1}\) : Vitesse de décrochage en configuration lisse.
  - \(V_{no}\) : Vitesse normale maximale d'utilisation (Normal Operating).
- **Arc JAUNE (de \(V_{no}\) à \(V_{ne}\))** : Plage de précaution, autorisée uniquement en air calme et sans manœuvres brusques.
- **Trait ROUGE (\(V_{ne}\))** : Vitesse à ne jamais dépasser (Never Exceed).

### 2. L'Altimètre et ses Calages
L'altimètre est un baromètre anéroïde étalonné selon l'atmosphère standard OACI (**1013,25 hPa**, gradient de **1 hPa = 28 pieds** en basse couche) :
- **Calage QNH** : Pression atmosphérique ramenée au niveau moyen de la mer. Au sol, l'altimètre indique **l'altitude officielle de l'aérodrome (AMSL)**. En vol, il indique l'altitude au-dessus de la mer.
- **Calage QFE** : Pression mesurée au niveau de la piste du terrain. Au sol sur la piste, l'aiguille indique **0 pied (hauteur nulle)**.
- **Calage Standard 1013,25 hPa** : Utilisé au-dessus de l'altitude de transition pour exprimer les **Niveaux de Vol (FL)**. (Ex: FL 70 = surface isobare 1013 affichée à 7 000 ft).

:::piege Du Chaud au Froid, du Haut vers le Bas !
"En volant des hautes vers les basses pressions (ou d'une zone chaude vers une zone froide) sans recaler son altimètre, l'altimètre SUR-ESTIME l'altitude réelle !"
L'avion vole plus bas que ce qu'affiche le cadran : risque mortel de collision avec le relief (CFIT) !
*Mnémonique en anglais : High to Low, look out below.*
:::

### 3. Les Instruments Gyroscopiques
Basés sur deux propriétés physiques d'une toupie en rotation rapide (rotor) : la **rigidité gyroscopique dans l'espace** et la **précession** :
- **Horizon Artificiel (Attitude Indicator)** : Gyroscope à deux degrés de liberté entraîné par pompe à vide (pneumatique) ou moteur électrique. Donne l'assiette (cabré/piqué) et l'inclinaison (roulis) sans délai, indispensable en vol sans visibilité.
- **Conservateur de Cap (Directionnel)** : Gyroscope horizontal insensible aux accélérations et virages, mais affecté par la précession et la rotation terrestre. Doit être **recalé manuellement sur le compas magnétique toutes les 15 minutes** en palier rectiligne non accéléré.
- **Indicateur de Virage et Bille** :
  - L'aiguille indique le taux de virage (Taux 1 standard = 3°/seconde, tour complet en 2 minutes).
  - La bille matérialise la pesanteur apparente (résultante du poids et de la force centrifuge).
  - Règle de pilotage : *"Le pied chasse la bille"* : si la bille part à gauche, appuyer sur le palonnier gauche pour corriger le dérapage.

### 4. Le Compas Magnétique et ses Erreurs
Le compas indique le Nord Magnétique mais subit deux erreurs en vol :
- **Erreur d'accélération** : Aux caps Est et Ouest dans l'hémisphère Nord, une accélération fait pivoter faussement l'aiguille vers le Nord ; une décélération fait pivoter vers le Sud (*Mnémonique ANDS : Accelerate North, Decelerate South*).
- **Erreur de virage** : En virant à partir d'un cap Nord, le compas commence par indiquer un virage en sens inverse ou prend du retard (*UNOS : Undershoot North, Overshoot South*).
- Par conséquent : **Le compas magnétique ne se lit qu'en palier rectiligne stabilisé à vitesse constante !**`,
      keyTakeaways: [
        "Prise statique = altimètre, variomètre, anémomètre. Tube Pitot = uniquement anémomètre.",
        "Arc blanc = volets (Vs0 à Vfe). Arc vert = normal (Vs1 à Vno). Arc jaune = précaution air calme. Trait rouge = Vne.",
        "QNH = altitude par rapport à la mer ; QFE = hauteur sol (0 sur la piste) ; 1013 = Niveaux de vol FL.",
        "En volant vers les basses pressions ou l'air froid sans recaler, l'altimètre sur-estime (l'avion est plus bas que l'indication).",
        "Le pied chasse la bille : appuyer au palonnier du côté où se trouve la bille pour coordonner.",
        "Compas magnétique : ne se lit qu'en ligne droite stabilisée non accélérée."
      ]
    }
  ],
  summaryCards: [
    {
      id: '020-sc1',
      moduleId: '020',
      title: 'Calages Altimétriques',
      keyPoints: [
        'QNH : Altitude par rapport au niveau de la mer (AMSL)',
        'QFE : Hauteur par rapport au sol/terrain (zéro sur la piste)',
        '1013,25 hPa : Calage standard utilisé pour les niveaux de vol (FL)',
        'Gradient standard : 1 hPa = 28 pieds (environ 30 ft) en basse couche'
      ],
      mnemonics: ['"QNH = Nautical Height (altitude mer)"', '"QFE = Field Elevation (hauteur sol = 0)"']
    },
    {
      id: '020-sc2',
      moduleId: '020',
      title: 'Arcs de l’Anémomètre (Badin)',
      keyPoints: [
        'Arc BLANC : Plage d’utilisation des volets (de Vs0 à Vfe)',
        'Arc VERT : Plage d’utilisation normale en air turbulent (de Vs1 à Vno)',
        'Arc JAUNE : Plage d’utilisation avec précaution en air calme uniquement (de Vno à Vne)',
        'Trait ROUGE : Vne (Vitesse à Ne Jamais Dépasser - Never Exceed)'
      ],
      alertNote: 'Ne jamais sortir les volets au-delà de la vitesse Vfe (fin de l’arc blanc) au risque de détérioration structurale.'
    },
    {
      id: '020-sc3',
      moduleId: '020',
      title: 'Magnétos et Sélecteur d’allumage',
      keyPoints: [
        'Les magnétos produisent leur propre courant grâce à la rotation du moteur',
        'Totalement indépendantes de la batterie et de l’alternateur',
        'Vérification des magnétos aux essais moteur : chute modérée autorisée (ex: ~100-150 RPM)',
        'Une absence totale de chute indique un fil de masse (P-lead) coupé : DANGER (moteur prêt à partir à la main même contact coupé)'
      ],
      alertNote: 'Si la batterie s’épuise complètement en vol, le moteur continuera de tourner grâce aux magnétos.'
    }
  ],
  questions: [
    {
      id: '020-q1',
      moduleId: '020',
      question: 'Quel instrument de bord utilise à la fois la pression totale (prise Pitot) et la pression statique ?',
      options: ['L’altimètre', 'Le variomètre', 'L’anémomètre (Badin)', 'L’horizon artificiel'],
      correctAnswer: 2,
      explanation: 'L’anémomètre mesure la pression dynamique, obtenue par la différence entre la pression totale fournie par le tube Pitot et la pression statique : P_dyn = P_totale - P_statique.',
      difficulty: 'facile'
    },
    {
      id: '020-q2',
      moduleId: '020',
      question: 'Lors d’un calage altimétrique sur le QNH du terrain, que doit indiquer l’altimètre lorsque l’avion est stationné sur le parking de l’aérodrome ?',
      options: ['Zéro pied', 'L’altitude officielle du terrain par rapport au niveau de la mer', 'L’épaisseur de la couche d’inversion', '1013,25 pieds'],
      correctAnswer: 1,
      explanation: 'Le calage QNH permet à l’altimètre d’afficher l’altitude par rapport au niveau moyen de la mer (AMSL). Au sol sur l’aérodrome, l’altimètre indique donc précisément l’altitude du terrain.',
      difficulty: 'facile'
    },
    {
      id: '020-q3',
      moduleId: '020',
      question: 'Que signifie l’arc blanc sur le cadran de l’anémomètre d’un avion de tourisme ?',
      options: [
        'La plage d’utilisation normale de croisière en atmosphère turbulente',
        'La plage d’utilisation des volets hypersustentateurs (de Vs0 à Vfe)',
        'La plage de vol interdite en atmosphère turbulente',
        'La plage de fonctionnement du train d’atterrissage uniquement'
      ],
      correctAnswer: 1,
      explanation: 'L’arc blanc délimite la plage de vitesse autorisée pour braquer les volets (de la vitesse de décrochage en configuration atterrissage Vs0 jusqu’à la vitesse maximale volets sortis Vfe).',
      difficulty: 'facile'
    },
    {
      id: '020-q4',
      moduleId: '020',
      question: 'Sur un avion équipé d’une hélice à calage fixe, quel est le premier symptôme caractéristique de l’apparition de givrage du carburateur en vol de croisière ?',
      options: [
        'Une augmentation brutale de la pression d’huile',
        'Une baisse progressive et inexpliquée du régime moteur (RPM)',
        'Un emballement immédiat du régime moteur',
        'Un blocage de la commande de profondeur'
      ],
      correctAnswer: 1,
      explanation: 'L’accumulation de givre dans le venturi du carburateur obstrue le passage du mélange gazeux, entraînant une diminution de la puissance et donc une perte progressive de tours par minute (RPM) à position constante des gaz.',
      difficulty: 'moyen'
    },
    {
      id: '020-q5',
      moduleId: '020',
      question: 'En cas de panne totale de l’alternateur et de décharge complète de la batterie en vol, que se passe-t-il pour le moteur de l’avion ?',
      options: [
        'Le moteur s’arrête immédiatement',
        'Le moteur continue de fonctionner normalement grâce aux magnétos autonomes',
        'Le moteur s’emballe et passe en survitesse',
        'Les volets se braquent automatiquement en position de sécurité'
      ],
      correctAnswer: 1,
      explanation: 'Le système d’allumage d’un moteur à piston d’aviation utilise des magnétos autonomes entraînées mécaniquement par le moteur. Le moteur ne dépend pas de la batterie pour produire les étincelles aux bougies.',
      difficulty: 'moyen'
    }
  ]
};
