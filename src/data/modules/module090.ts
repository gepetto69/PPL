import type { PPLModule } from '../../types/ppl';

export const module090: PPLModule = {
  id: '090',
  code: '090',
  name: 'Communications VFR',
  shortName: 'Communications',
  iconName: 'Radio',
  color: 'emerald',
  description: 'Phraséologie aéronautique VFR officielle, alphabet phonétique OACI, collationnements obligatoires, messages d’urgence (PAN PAN) et de détresse (MAYDAY), procédures de panne radio (NORDO).',
  examQuestionsCount: 12,
  examDurationMinutes: 20,
  chapters: [
    {
      id: '090-ch1',
      moduleId: '090',
      title: 'L’Alphabet Phonétique OACI et Règles de Transmission',
      readTime: '6 min',
      content: `### 1. L'Alphabet Phonétique International OACI
Pour éviter toute ambiguïté sur les fréquences radio VHF :
- **A** : Alfa | **B** : Bravo | **C** : Charlie | **D** : Delta | **E** : Echo
- **F** : Foxtrot | **G** : Golf | **H** : Hotel | **I** : India | **J** : Juliett
- **K** : Kilo | **L** : Lima | **M** : Mike | **N** : November | **O** : Oscar
- **P** : Papa | **Q** : Quebec | **R** : Romeo | **S** : Sierra | **T** : Tango
- **U** : Uniform | **V** : Victor | **W** : Whiskey | **X** : X-ray | **Y** : Yankee | **Z** : Zulu

#### Transmission des Nombres :
- Se prononcent chiffre par chiffre pour les caps, fréquences, transpondeurs.
  - Ex : Cap 250 -> *"Cap deux cinq zéro"* (ou *"Heading two five zero"*).
  - Ex : Fréquence 118.275 -> *"Un un huit décimale deux sept cinq"*.
  - Ex : Altitude 4 500 ft -> *"Quatre mille cinq cents pieds"*.
  - Ex : Niveau de vol FL 70 -> *"Niveau sept zéro"*.

### 2. Les Collationnements Obligatoires (Readback)
Le pilote doit TOUJOURS répéter intégralement :
1. **Les clairances de piste** : Atterrissage, décollage, alignement, traversée, attente avant piste.
2. **La piste en service**.
3. **Le calage altimétrique (QNH ou QFE)**.
4. **Le code transpondeur assigné (Squawk)**.
5. **Les instructions de niveau de vol, altitude, cap et vitesse**.
6. **Les clairances de franchissement de zone et voies de circulation (Taxiways)**.`,
      keyTakeaways: [
        "Alphabet OACI : mémoriser de Alfa à Zulu sans hésitation.",
        "Collationnement rigoureux et complet de toutes les clairances de sécurité.",
        "QNH, piste, clairance d'alignement/décollage/atterrissage et transpondeur sont à collationner OBLIGATOIREMENT."
      ]
    },
    {
      id: '090-ch2',
      moduleId: '090',
      title: 'Détresse (MAYDAY) vs Urgence (PAN PAN)',
      readTime: '7 min',
      content: `### 1. Le Signal de Détresse : MAYDAY
- **Définition** : Menace d'un danger grave et/ou imminent, et nécessitant un secours immédiat (ex : incendie à bord, panne moteur sans espoir de rallier une piste, perte de contrôle structurelle).
- **Appel** : Répéter 3 fois le mot **MAYDAY** :
  \\[ \\text{MAYDAY, MAYDAY, MAYDAY} \\]
- Ordre du message de détresse :
  1. Nom de la station appelée (ex : *Paris Information*).
  2. Indicatif de l'aéronef (ex : *F-GABC*).
  3. Nature de la détresse (ex : *Incendie cabine*).
  4. Intentions du commandant de bord (ex : *Atterrissage forcé immédiat*).
  5. Position actuelle, altitude et cap (ex : *10 NM au nord de Chartres, 2 500 ft, cap sud*).
  6. Nombre de personnes à bord (POB - Persons On Board) et carburant restant.

### 2. Le Signal d'Urgence : PAN PAN
- **Définition** : Condition concernant la sécurité d'un aéronef ou d'une personne à bord, mais n'exigeant pas de secours immédiat (ex : passager victime d'un malaise, égarement sans panne de carburant immédiate, baisse anormale de pression d'huile sans arrêt moteur).
- **Appel** : Répéter 3 fois l'expression **PAN PAN** :
  \\[ \\text{PAN PAN, PAN PAN, PAN PAN} \\]

### 3. Panne de Réception / Émission (NORDO)
- En cas de panne radio avérée en vol VFR :
  - Afficher le transpondeur **7600**.
  - Si l'émetteur fonctionne mais le récepteur est en panne : transmettre les messages à l'aveugle précédés de l'expression : *"TRANSMISSION À L'AVEUGLE PAR SUITE DE PANNE DE RÉCEPTEUR"*, répétés deux fois.
  - Rejoindre un terrain hors espace contrôlé ou respecter les consignes publiées VAC.`,
      keyTakeaways: [
        "MAYDAY (3x) : Danger grave et imminent, secours immédiat requis (Code 7700).",
        "PAN PAN (3x) : Sécurité menacée sans détresse immédiate.",
        "Fréquence de veille d'urgence : 121.500 MHz.",
        "Transpondeur panne radio : 7600."
      ]
    }
  ],
  summaryCards: [
    {
      id: '090-sc1',
      moduleId: '090',
      title: 'MAYDAY vs PAN PAN',
      keyPoints: [
        'MAYDAY (répété 3 fois) : Danger GRAVE et IMMINENT nécessitant une assistance immédiate (panne moteur, feu, etc.)',
        'PAN PAN (répété 3 fois) : Message d’URGENCE sans détresse immédiate (malaise passager, égarement, dysfonctionnement)',
        'Fréquence universelle d’urgence : 121.500 MHz'
      ],
      mnemonics: ['"Mayday = M’aider (vital)", "Pan Pan = Panne ou pépin sans crash immédiat"'],
      alertNote: 'L’appel Mayday confère la priorité absolue sur tous les autres aéronefs et communications.'
    },
    {
      id: '090-sc2',
      moduleId: '090',
      title: 'Collationnements Obligatoires (Readback)',
      keyPoints: [
        'Autorisations de décollage, atterrissage, alignement, traversée ou attente de piste',
        'Piste en service et niveau de vol / altitude autorisés',
        'Calage altimétrique (QNH) et code transpondeur (Squawk)',
        'Fréquence de transfert radio suivante'
      ]
    }
  ],
  questions: [
    {
      id: '090-q1',
      moduleId: '090',
      question: 'Quel est le préfixe radiotéléphonique réglementaire à utiliser pour annoncer une situation d’URGENCE (concernant la sécurité sans nécessiter un secours immédiat) ?',
      options: ['MAYDAY MAYDAY MAYDAY', 'PAN PAN, PAN PAN, PAN PAN', 'URGENCE, URGENCE, URGENCE', 'ATTENTION, ATTENTION, ATTENTION'],
      correctAnswer: 1,
      explanation: 'Le signal radiotéléphonique d’urgence est l’expression "PAN PAN" répétée trois fois consécutives. "MAYDAY" est réservé exclusivement aux situations de DÉTRESSE grave et imminente.',
      difficulty: 'facile'
    },
    {
      id: '090-q2',
      moduleId: '090',
      question: 'Parmi les messages suivants reçus du contrôleur de la tour, lequel DOIT obligatoirement faire l’objet d’un collationnement complet par le pilote ?',
      options: [
        'Une information de trafic signalant un ULM à 5 NM',
        'Une annonce d’heure UTC',
        'Une clairance d’alignement et d’attente sur la piste 26',
        'Une estimation météo indicative'
      ],
      correctAnswer: 2,
      explanation: 'Toutes les clairances relatives à l’occupation, l’alignement, la traversée, le décollage ou l’atterrissage sur une piste en service doivent obligatoirement être intégralement collationnées par le pilote pour éviter toute incursion de piste.',
      difficulty: 'facile'
    },
    {
      id: '090-q3',
      moduleId: '090',
      question: 'Comment s’énonce correctement l’immatriculation d’avion "F-GABC" selon l’alphabet aéronautique officiel OACI ?',
      options: [
        'Foxtrot - Golf - Alpha - Bravo - Charlie',
        'France - Golf - Air - Boeing - Cessna',
        'Fox - Gamma - Alfa - Bravo - Coca',
        'Foxtrot - George - Abel - Baker - Charlie'
      ],
      correctAnswer: 0,
      explanation: 'Dans l’alphabet phonétique international de l’OACI : F = Foxtrot, G = Golf, A = Alfa, B = Bravo, C = Charlie.',
      difficulty: 'facile'
    },
    {
      id: '090-q4',
      moduleId: '090',
      question: 'Si le pilote constate une panne totale de son récepteur radio tout en supposant que son émetteur fonctionne encore, comment doit-il précéder ses messages ?',
      options: [
        '"PAN PAN PAN - Panne totale de radio"',
        '"MAYDAY - Radio silencieuse"',
        '"TRANSMISSION À L’AVEUGLE PAR SUITE DE PANNE DE RÉCEPTEUR"',
        'Il a l’interdiction formelle d’émettre'
      ],
      correctAnswer: 2,
      explanation: 'Selon les procédures radio OACI, un pilote suspectant une panne de son récepteur doit transmettre ses messages d’intention en les précédant de la formule réglementaire : "TRANSMISSION À L’AVEUGLE PAR SUITE DE PANNE DE RÉCEPTEUR" (en répétant le message deux fois).',
      difficulty: 'moyen'
    }
  ]
};
