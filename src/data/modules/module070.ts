import type { PPLModule } from '../../types/ppl';

export const module070: PPLModule = {
  id: '070',
  code: '070',
  name: 'Procédures Opérationnelles (OPS)',
  shortName: 'Procédures Opérationnelles',
  iconName: 'ShieldCheck',
  color: 'violet',
  description: 'Réglementation opérationnelle Part-NCO, intégration dans le tour de piste standard, gestion des pannes et urgences (moteur au décollage et en campagne, feu en vol, panne électrique), survie et amerrissage forcé, utilisation des gilets et balises de détresse ELT (121.5 / 406 MHz).',
  examQuestionsCount: 12,
  examDurationMinutes: 20,
  chapters: [
    {
      id: '070-ch1',
      moduleId: '070',
      title: 'Le Tour de Piste Standard et Intégration VFR',
      readTime: '9 min',
      diagramType: 'circuits',
      content: `### 1. La Géométrie du Tour de Piste Standard
Sauf consigne contraire publiée sur la carte VAC (Visual Approach Chart) ou ordonnée par le contrôleur de la tour, le circuit de piste d'aérodrome est rectangulaire, s'effectue par des **virages à GAUCHE** et à une hauteur standard de **1 000 ft AGL** (au-dessus du sol de l'aérodrome) :

1. **Montée initiale (Upwind leg)** : Décollage dans l'axe de piste, maintien de l'axe, vitesse de meilleure pente (\(V_x\)) pour franchir un obstacle ou de meilleur taux (\(V_y\)). **Interdiction formelle de virer avant 500 ft sol (AGL)** pour des raisons de sécurité en cas de panne précoce.
2. **Étape vent traversier (Crosswind leg)** : Virage à 90° à gauche, montée continue vers 1 000 ft sol, palier et compensation, surveillance du trafic extérieur.
3. **Étape vent arrière (Downwind leg)** : Trajectoire parallèle à la piste en sens inverse de l'atterrissage à 1 000 ft sol.
   - Vitesse stabilisée de vol en palier.
   - *Message radio* : *"F-ABCD, vent arrière 27"*.
   - *Actions vitales* : Réchauffage carburateur ON, pompe électrique ON, volets 1er cran, vérification des paramètres moteur (secteur vert).
   - Travers du seuil de piste (repère du point de virage de base).
4. **Étape de base (Base leg)** : Virage à gauche, perpendiculaire à l'axe de piste. Réduction des gaz (ex: 1 500 RPM), prise du plan de descente, volets 2e cran, vitesse d'approche stabilisée.
5. **Finale (Final approach)** : Alignement dans l'axe de piste, configuration atterrissage complète (plein volets), plan de descente standard à 5% (3° ou 300 ft/NM).
   - Clairance d'atterrissage ou annonce en auto-information (*"F-CD en finale 27"*).
   - Vérification ultime des 3 voyants verts de train d'atterrissage s'il est rentrant.

:::piege Le Virage Dangereux Base - Finale
L'étape de virage de base vers la finale est statistiquement le moment le plus meurtrier du vol en aéroclub :
- Si l'avion dépasse l'axe de piste par vent arrière en base, le pilote est tenté d'incliner exagérément son avion et de "botter" au palonnier vers l'intérieur sans incliner suffisamment : **virage dérapé sous fort facteur de charge à basse vitesse** !
- Cela conduit directement à un **décrochage asymétrique avec départ en vrille engagée à 400 ft sol**, strictement irrécupérable !
- *Règle de sauvegarde* : Ne jamais incliner à plus de 30° en dernier virage. Si l'axe est dépassé, effectuer immédiatement une remise de gaz !
:::

### 2. Intégration sur un Aérodrome Non Contrôlé (CAP)
En l'absence de tour de contrôle en service (terrain en auto-information ou AFIS) :
1. **Verticale Terrain à +500 ft au-dessus du tour de piste** :
   - Arrivée à une altitude minimale de **1 500 ft AGL** (500 ft au-dessus des avions qui tournent à 1 000 ft).
   - Observer la **manche à air** pour déterminer le vent et la piste en service, scruter les signaux disposés sur l'aire à signaux (té d'atterrissage, croix blanches) et repérer les appareils déjà engagés dans le circuit.
2. **Rejoindre le tour de piste par le "Côté Mort"** :
   - Évacuer la verticale vers le secteur extérieur opposé au tour de piste (côté libre de trafic).
   - Descendre à l'altitude du tour de piste (1 000 ft sol).
   - S'intégrer en début de vent arrière à 45°.`,
      keyTakeaways: [
        "Tour de piste standard : virages à GAUCHE à 1 000 ft sol (AGL).",
        "Aucun virage avant 500 ft sol en montée initiale.",
        "Dernier virage base-finale : limiter l'inclinaison à 30°, ne jamais déraper au palonnier (danger de vrille irrécupérable).",
        "Verticale terrain non contrôlé à 1 500 ft sol (+500 ft au-dessus du circuit) pour lire la manche à air.",
        "Plan de descente standard : 5% (3°), soit une vitesse verticale de descente = Vitesse Sol x 5 (en ft/min)."
      ]
    },
    {
      id: '070-ch2',
      moduleId: '070',
      title: 'Gestion des Pannes : Moteur, Feu en Vol et Panne Électrique',
      readTime: '10 min',
      content: `### 1. La Panne Moteur au Décollage : Le "Virage Impossible"
Si le moteur s'arrête brutalement en montée initiale sous 800 à 1 000 ft sol :
- ⚠️ **INTERDICTION ABSOLUE DE TENTER UN DEMI-TOUR VERS LA PISTE !**
- Tenter un demi-tour à 180° exige une inclinaison forte (> 45°), ce qui augmente le facteur de charge, élève brutalement la vitesse de décrochage et provoque la vrille dans le sol.
- **Règle vitale impérative** :
  1. Pousser immédiatement sur le manche pour maintenir la vitesse de vol !
  2. Atterrir droit devant soi dans un secteur de **± 30° par rapport à l'axe de piste**.
  3. Sortir tous les volets pour toucher les roues à la vitesse sol minimale possible.
  4. Couper le contact batterie, magnétos et sélecteur d'essence avant l'impact.

### 2. Panne Moteur en Campagne (PFO - Atterrissage Forcé)
Si le moteur se coupe en croisière à 3 000 ou 5 000 ft sol, le pilote dispose de plusieurs minutes et applique la méthode chronologique standard :

1. **PILOTAGE (AVIATE)** :
   - Afficher immédiatement l'assiette pour obtenir la **Vitesse de Finesse Maximale (Glide Speed)** publiée au manuel de vol et **compenser** l'effort au manche.
2. **NAVIGATION (NAVIGATE)** :
   - Choisir un terrain d'atterrissage propice dans le cône de plané : surface plane, champ dégagé de lignes à haute tension et de fossés profonds, accessible **face au vent**.
   - Se positionner pour effectuer une prise de terrain adaptée (PTU en U ou encadrement en L).
3. **RECHERCHE DE PANNE (TROUBLESHOOTING)** :
   - Pompe à carburant électrique sur **ON**.
   - Changer de réservoir (Sélecteur carburant sur l'autre cuve).
   - Tirer à fond la commande de **Réchauffage Carburateur**.
   - Manette des gaz à fond, tirette de **Richesse sur Plein Riche**.
   - Vérifier les magnétos : basculer de BOTH à L puis R.
4. **COMMUNICATION (COMMUNICATE)** :
   - Transpondeur : **7700** (Détresse).
   - Message de détresse sur la fréquence en cours ou sur **121.500 MHz** :
     *"MAYDAY, MAYDAY, MAYDAY - F-ABCD - Panne moteur - Atterrissage en campagne 5 NM au Sud de Chartres - 2 personnes à bord"*.
5. **SÉCURITÉ AVANT IMPACT (SECURE)** :
   - Dès que le champ est assuré en courte finale :
   - Sortir les pleins volets pour ralentir l'avion au maximum.
   - Couper le **Sélecteur de Carburant sur OFF**.
   - Couper les **Magnétos sur OFF**.
   - Couper le **Master Électrique sur OFF**.
   - Déverrouiller la verrière / portière pour éviter son coincement en cas de déformation du fuselage.
   - Serrer les harnais de sécurité au maximum.

:::piege Priorité Absolue
"Un pilote ne meurt jamais du fait que son moteur est éteint ; il meurt s'il oublie de piloter son avion et le laisse décrocher avant le sol !"
Maintenez la vitesse de finesse max jusqu'à l'arrondi.
:::

### 3. Feu en Vol (Moteur ou Cabine)
- **Feu Moteur en vol** :
  1. Fermer immédiatement le robinet de carburant (Coupe-feu) : priver le feu de comburant.
  2. Couper la pompe électrique.
  3. Pousser la manette des gaz à fond pour consommer le reliquat d'essence dans le carburateur.
  4. Couper le chauffage cabine et les aérateurs pour éviter l'asphyxie des occupants par les fumées toxiques.
  5. Couper le master batterie et magnétos.
  6. Descendre en glissade ou piqué à grande vitesse (sans dépasser la Vne) pour tenter de souffler les flammes, puis atterrir immédiatement en campagne.
- **Feu Électrique cabine (odeur de plastique brûlé)** :
  1. Couper le **Master Switch (Batterie et Alternateur)**.
  2. Couper tous les interrupteurs avioniques et disjoncteurs.
  3. Ventiler la cabine en ouvrant les ouïes d'air frais extérieur.
  4. Utiliser l'extincteur embarqué (Halon ou équivalent certifié).

### 4. Panne d'Alimentation Électrique (Alternateur HS)
Si le voyant rouge "Alternator / Low Voltage" s'allume ou si l'ampèremètre indique une décharge continue :
- L'avion fonctionne désormais uniquement sur la batterie de secours (autonomie limitée à **30 à 45 minutes**).
- Couper immédiatement les consommateurs non essentiels : phares de navigation et stroboscopes, chauffage pitot (si hors givrage), deuxième radio VHF, GPS auxiliaire, transpondeur (sauf en espace contrôlé).
- Conserver la radio principale et préparer un déroutement vers l'aérodrome le plus proche avant que la batterie ne s'épuise (ce qui priverait le pilote des volets électriques et des communications).`,
      keyTakeaways: [
        "Panne moteur sous 500-800 ft sol : JAMAIS de demi-tour, atterrir droit devant soi dans un secteur de +/- 30°.",
        "Panne en croisière : 1) Aviate (Vitesse de finesse max), 2) Navigate (Champ face au vent), 3) Communicate (7700 et Mayday 121.5).",
        "Avant impact : couper essence, magnétos et batterie pour prévenir l'embrasement.",
        "Feu moteur : fermer le robinet de carburant immédiatement et couper le chauffage cabine.",
        "Panne alternateur : couper tous les consommateurs superflus pour préserver la batterie."
      ]
    },
    {
      id: '070-ch3',
      moduleId: '070',
      title: 'Survie, Amerrissage Forcé et Balises ELT',
      readTime: '8 min',
      content: `### 1. Amerrissage Forcé (Ditching)
Bien qu'exceptionnel, le survol de plans d'eau ou de zones maritimes impose de connaître les règles de survie :
- **Choix de l'amerrissage** :
  - Par forte houle et vent modéré : amerrir **parallèlement aux crêtes des vagues (sur le sommet ou le dos de la vague)** plutôt que face aux vagues, pour éviter d'enfourner le nez dans la crête suivante.
  - Par vent violent : amerrir face au vent pour minimiser la vitesse d'impact.
- **Configuration** : Plein volets pour amerrir à la vitesse la plus faible possible. Garder un filet de gaz si le moteur fonctionne encore pour arrondir tangentiellement à la surface de l'eau.
- **Évacuation et gilets de sauvetage** :
  - ⚠️ **NE JAMAIS GONFLER SON GILET DE SAUVETAGE À L'INTÉRIEUR DE LA CABINE !**
  - Si la cabine se remplit d'eau, le gilet gonflé plaque le passager au plafond et l'empêche de s'échapper par la portière (noyade assurée).
  - Gonfler le gilet **UNIQUEMENT UNE FOIS SORTI DE L'APPAREIL**.
- **Réglementation survol maritime (Part-NCO.IDE.A.175)** :
  - Des gilets de sauvetage individuels pour chaque occupant sont obligatoires pour tout vol au-delà de la distance de plané de la côte, ou à plus de **50 NM de la côte**.
  - Un ou plusieurs radeaux de sauvetage (Life Raft) sont exigés pour des survols plus étendus.

### 2. Les Balises de Détresse Aéronautiques (ELT - Emergency Locator Transmitter)
- Obligatoire à bord de tout aéronef motorisé (Part-NCO.IDE.A.170).
- **Fréquences d'émission** :
  - **406 MHz (Signal Numérique Satellitaire)** : Transmet aux satellites de la constellation internationale **Cospas-Sarsat** l'immatriculation unique de l'avion, la nationalité et la position GPS exacte en quelques minutes.
  - **121.5 MHz (Signal de Radioguidage VHF "Homing")** : Signal analogique de faible puissance permettant aux hélicoptères de secours (SAR) de localiser précisément l'épave au sol.
- **Déclenchement** :
  - Automatique par un accéléromètre à contacteur d'impact (G-switch) calibré lors d'un choc violent.
  - Manuel depuis l'interrupteur armé en cabine (*ON / ARM / TEST*).
- **Vérification en vol et au sol** :
  - En cas d'atterrissage dur : écouter la fréquence **121.500 MHz** avant de couper le moteur pour s'assurer que la balise ne s'est pas déclenchée intempestivement.
  - Tout essai technique au sol d'une balise ELT ne doit être réalisé que durant les **5 premières minutes de chaque heure**, et pour une durée maximale de 5 secondes après coordination.`,
      keyTakeaways: [
        "Amerrissage forcé : ne JAMAIS gonfler son gilet de sauvetage à l'intérieur de l'avion.",
        "Gilets de sauvetage obligatoires au-delà de la distance de plané ou 50 NM de la côte.",
        "ELT : émet sur 406 MHz (satellite Cospas-Sarsat) et 121.5 MHz (guidage final des secours).",
        "Vérifier l'absence d'émission intempestive de l'ELT sur 121.5 MHz après un atterrissage dur."
      ]
    }
  ],
  summaryCards: [
    {
      id: '070-sc1',
      moduleId: '070',
      title: 'Triptyque de Survie en Panne Moteur',
      keyPoints: [
        '1. AVIATE : Afficher la vitesse de meilleure finesse (glide speed) et compenser',
        '2. NAVIGATE : Choisir un champ face au vent sans obstacle, viser le plan',
        '3. COMMUNICATE : Transpondeur 7700 + Mayday sur 121.500 MHz',
        '4. SÉCURITÉ : Couper essence + magnétos + batterie avant l’impact'
      ],
      mnemonics: ['"A-N-C : Aviate, Navigate, Communicate"'],
      alertNote: 'Ne jamais tenter un demi-tour vers la piste en panne moteur au décollage sous 500-800 ft (virage impossible mortel) !'
    },
    {
      id: '070-sc2',
      moduleId: '070',
      title: 'Intégration Aérodrome Non Contrôlé',
      keyPoints: [
        'Verticale terrain à +500 ft au-dessus du tour de piste (ex: 1500 ft AGL)',
        'Observation : Manche à air, signaux au sol, avions en tour de piste',
        'Sortie vers le côté mort (secteur de dégagement) pour descendre à 1000 ft AGL',
        'Intégration normale en début de vent arrière virages à GAUCHE (sauf mention VAC)'
      ]
    }
  ],
  questions: [
    {
      id: '070-q1',
      moduleId: '070',
      question: 'En cas d’arrêt total du moteur en vol de croisière, quelle est la TOUTE PREMIÈRE action prioritaire du pilote ?',
      options: [
        'Émettre un appel Mayday sur 121.5 MHz',
        'Prendre et maintenir immédiatement la vitesse de finesse maximale de plané',
        'Essayer de redémarrer le moteur en coupant les magnétos',
        'Sortir le premier cran de volets pour ralentir'
      ],
      correctAnswer: 1,
      explanation: 'La priorité absolue est le pilotage (Aviate) : adopter immédiatement la vitesse de finesse maximale (vitesse de meilleur plané) pour conserver la plus grande distance franchissable possible et éviter un décrochage.',
      difficulty: 'facile'
    },
    {
      id: '070-q2',
      moduleId: '070',
      question: 'À quelle fréquence radio d’urgence internationale un pilote en détresse peut-il transmettre son message Mayday ?',
      options: ['118.000 MHz', '121.500 MHz', '123.500 MHz', '108.000 MHz'],
      correctAnswer: 1,
      explanation: 'La fréquence 121.500 MHz est la fréquence internationale d’urgence aéronautique en bande VHF (veille permanente par les centres de contrôle et les aéronefs de ligne).',
      difficulty: 'facile'
    },
    {
      id: '070-q3',
      moduleId: '070',
      question: 'Sauf consigne particulière indiquée sur la carte VAC, dans quel sens s’effectuent les virages dans un circuit de piste standard ?',
      options: ['Toujours par virages à DROITE', 'Toujours par virages à GAUCHE', 'Au choix libre du pilote selon le vent', 'Par virages alternés droite puis gauche'],
      correctAnswer: 1,
      explanation: 'Selon les règles de l’air internationales (OACI/SERA), le circuit d’aérodrome standard s’effectue avec des virages à GAUCHE, sauf avis contraire publié sur la carte VAC ou consigne du contrôle.',
      difficulty: 'facile'
    },
    {
      id: '070-q4',
      moduleId: '070',
      question: 'Pourquoi est-il impératif de couper le contact d’allumage (magnétos), la batterie (master) et le sélecteur de carburant juste avant le toucher des roues lors d’un atterrissage forcé en campagne ?',
      options: [
        'Pour éviter que les instruments ne se dérèglent',
        'Pour minimiser considérablement le risque d’incendie consécutif à l’impact',
        'Pour que les balises ELT puissent se déclencher plus rapidement',
        'Pour déverrouiller automatiquement les harnais des passagers'
      ],
      correctAnswer: 1,
      explanation: 'L’incendie après crash est la première cause de mortalité lors d’atterrissages forcés en campagne. Couper le carburant et supprimer toute source d’étincelle électrique ou d’allumage est une mesure de sauvegarde vitale.',
      difficulty: 'facile'
    }
  ]
};
