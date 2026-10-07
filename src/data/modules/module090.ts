import type { PPLModule } from '../../types/ppl';

export const module090: PPLModule = {
  id: '090',
  code: '090',
  name: 'Communications VFR',
  shortName: 'Communications',
  iconName: 'Radio',
  color: 'emerald',
  description: 'Phraséologie aéronautique VFR officielle (français et anglais), alphabet phonétique OACI, techniques d’émission radio VHF, collationnements obligatoires, messages d’urgence (PAN PAN) et de détresse (MAYDAY), procédures de panne de communication (NORDO) et signaux lumineux.',
  examQuestionsCount: 12,
  examDurationMinutes: 20,
  chapters: [
    {
      id: '090-ch1',
      moduleId: '090',
      title: 'L’Alphabet Phonétique OACI, Chiffres et Règles de Transmission',
      readTime: '8 min',
      content: `### 1. L'Alphabet Phonétique International OACI
Pour garantir une intelligibilité parfaite sur les ondes VHF et éliminer tout risque de confusion phonétique entre lettres proches (comme B, D, P, T) :

| Lettre | Mot code OACI | Prononciation | Lettre | Mot code OACI | Prononciation |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **A** | **Alfa** | AL-FAH | **N** | **November** | NO-VEM-BER |
| **B** | **Bravo** | BRAH-VOH | **O** | **Oscar** | OSS-CAH |
| **C** | **Charlie** | TCHAR-LEE | **P** | **Papa** | PAH-PAH |
| **D** | **Delta** | DELL-TAH | **Q** | **Quebec** | KEH-BECK |
| **E** | **Echo** | ECK-OH | **R** | **Romeo** | ROW-ME-OH |
| **F** | **Foxtrot** | FOKS-TROT | **S** | **Sierra** | SEE-AIR-RAH |
| **G** | **Golf** | GOLF | **T** | **Tango** | TANG-GO |
| **H** | **Hotel** | HOH-TELL | **U** | **Uniform** | YOU-NEE-FORM |
| **I** | **India** | IN-DEE-AH | **V** | **Victor** | VIK-TAH |
| **J** | **Juliett** | JEW-LEE-ETT | **W** | **Whiskey** | WISS-KEY |
| **K** | **Kilo** | KEY-LOH | **X** | **X-ray** | ECKS-RAY |
| **L** | **Lima** | LEE-MAH | **Y** | **Yankee** | YANG-KEY |
| **M** | **Mike** | MIKE | **Z** | **Zulu** | ZOO-LOO |

### 2. Transmission des Nombres et Éléments Chiffrés
- **Chiffre par chiffre** : Les éléments d'identification, caps, fréquences radio, codes transpondeur et pistes s'énoncent toujours chiffre par chiffre :
  - Cap 270 : *"Cap deux sept zéro"* (ou *"Heading two seven zero"*).
  - Piste 09 : *"Piste zéro neuf"* (ou *"Runway zero nine"*).
  - Fréquence 118,125 MHz : *"Un un huit décimale un deux cinq"*.
  - Transpondeur 7000 : *"Transpondeur sept zéro zéro zéro"*.
  - Vent 240° / 15 kt : *"Vent deux quatre zéro degrés, un cinq nœuds"*.
- **Altitudes et Niveaux** :
  - Les altitudes s'expriment en milliers et centaines de pieds :
    - 4 500 ft : *"Quatre mille cinq cents pieds"* (ou *"Four thousand five hundred feet"*).
  - Les niveaux de vol s'énoncent séparément :
    - FL 65 : *"Niveau six cinq"* (ou *"Flight level six five"*).

### 3. Les Termes Conventionnels de Phraséologie
- **Collationnez (Read back)** : Répétez-moi tout ou partie de ce message exactement comme vous l'avez reçu.
- **Affirmez (Affirm)** : Oui.
- **Négatif (Negative)** : Non, ou ce n'est pas correct.
- **Reçu (Roger)** : J'ai reçu et compris l'intégralité de votre transmission. (⚠️ *Attention : "Reçu" ne signifie JAMAIS une autorisation !*).
- **Attendez (Standby)** : Patientez, je vous rappelle sous peu.
- **Corrigez (Correction)** : Une erreur a été commise dans cette émission, la version correcte est...
- **Vérifiez (Check)** : Examinez un système ou une procédure.`,
      keyTakeaways: [
        "Alphabet OACI : mémoriser de Alfa à Zulu sans la moindre hésitation.",
        "Caps, pistes, fréquences et transpondeurs sont TOUJOURS transmis chiffre par chiffre.",
        "Altitudes en milliers/centaines de pieds (ex: 3 500 ft = trois mille cinq cents pieds) ; Niveaux de vol chiffre par chiffre (ex: FL 75 = niveau sept cinq).",
        "'Reçu' (Roger) confirme la bonne réception technique mais ne constitue EN AUCUN CAS une autorisation !"
      ]
    },
    {
      id: '090-ch2',
      moduleId: '090',
      title: 'Collationnements Obligatoires, Intégrations et Pannes Radio (NORDO)',
      readTime: '9 min',
      content: `### 1. Les Collationnements Strictement Obligatoires (Readback)
Le collationnement est la répétition intégrale et immédiate par le pilote d'une clairance ou instruction émise par le contrôle. Il permet au contrôleur de vérifier que son ordre a été fidèlement compris.

:::piege La Liste des Messages à Collationner Impérativement
Le pilote DOIT TOUJOURS collationner :
1. **Toutes les clairances de piste** : Atterrissage, décollage, alignement, traversée, attente avant piste (*"Autorisé atterrissage piste 27, F-CD"*).
2. **La désignation de la piste en service**.
3. **Le calage altimétrique (QNH ou QFE)**.
4. **Le code transpondeur assigné (Squawk)**.
5. **Les instructions de niveau de vol, altitude, cap et vitesse**.
6. **Les clairances de franchissement de zone et voies de circulation (Taxiways)**.
7. **La fréquence radio de transfert assignée**.
*En revanche, une simple information météo ou une information de trafic ne nécessite pas de collationnement (un simple "Reçu, F-CD" suffit).*
:::

### 2. Procédures d'Arrivée et de Tour de Piste en Phraséologie
- **Premier contact avec la Tour (TWR)** :
  *"Pontoise Tour, de F-GABC, bonjour. C172, en provenance de Rouen, à 2 minutes du point Sierra, 1 500 ft QNH 1018, avec l'information Bravo, pour un atterrissage complet."*
- **Réponse du contrôleur** :
  *"F-BC, bonjour, transpondeur 4521, intégrez début de vent arrière main gauche piste 05, rappelez vent arrière."*
- **Collationnement du pilote** :
  *"Transpondeur 4521, j'intègre début de vent arrière main gauche piste 05, je rappelle en vent arrière, F-BC."*

### 3. Panne des Télécommunications Radio (Code 7600)
Si la liaison radioélectrique est interrompue :
1. Vérifier la connectique casque, l'alternat (PTT), le squelch, le volume et la boîte de mélange audio.
2. Si la panne persiste : afficher immédiatement **7600 au transpondeur**.
3. **Transmission à l'aveugle** : Si l'émetteur est suspecté de fonctionner encore :
   - Émettre chaque message deux fois précédé de : *"TRANSMISSION À L'AVEUGLE PAR SUITE DE PANNE DE RÉCEPTEUR"*.
4. **En VMC** : Poursuivre le vol en restant à vue et atterrir sur l'aérodrome approprié le plus proche.
5. Observer attentivement les **signaux lumineux de la Tour de contrôle** :

| Signal lumineux émis par la TWR | Aéronef en vol | Aéronef au sol |
| :--- | :--- | :--- |
| **Vert continu** | **Autorisé à atterrir** | **Autorisé à décoller** |
| **Rouge continu** | **Cédez le passage**, continuez le circuit | **Arrêtez-vous** |
| **Vert intermittent** | Revenez pour atterrir | Autorisé à circuler (taxi) |
| **Rouge intermittent** | Aérodrome dangereux, n'atterrissez pas | Dégagez immédiatement la piste |
| **Blanc intermittent** | Atterrissez ici et gagnez le parking | Retournez à votre point de départ |
| **Fusée pyrotechnique rouge** | N'atterrissez pas pour le moment | - |`,
      keyTakeaways: [
        "Collationnement OBLIGATOIRE : clairances de piste, QNH, code transpondeur, niveau/altitude, cap, piste en service.",
        "Panne radio : afficher 7600 au transpondeur, émettre à l'aveugle (x2), rester VMC.",
        "Signaux lumineux TWR : Vert continu = autorisé atterrissage/décollage ; Rouge continu = cédez passage/arrêt.",
        "Feu pyrotechnique rouge = interdiction formelle d'atterrir."
      ]
    },
    {
      id: '090-ch3',
      moduleId: '090',
      title: 'Messages de Détresse (MAYDAY) et d’Urgence (PAN PAN)',
      readTime: '8 min',
      content: `### 1. La Hiérarchie des Priorités des Messages Radio
Selon l'Annexe 10 de l'OACI et les règles SERA.14095, les communications radio respectent une priorité absolue :
1. **Appels et messages de DÉTRESSE (MAYDAY)**.
2. **Messages d'URGENCE (PAN PAN)**.
3. Communications relatives aux relèvements radiogoniométriques.
4. Messages relatifs à la sécurité des vols.
5. Messages météorologiques.
6. Messages de régularité des vols.

### 2. Le Message de Détresse : MAYDAY
- **Condition légale** : Menace d'un **danger grave et/ou imminent, exigeant une assistance immédiate** (ex: panne moteur totale en campagne, incendie non maîtrisé, perte d'une gouverne de vol).
- **Signal phonétique** : Répéter trois fois le mot **MAYDAY** (de l'expression française *"Venez m'aider"*).
- **Structure réglementaire du message de détresse** :
  1. \`MAYDAY, MAYDAY, MAYDAY\`
  2. Nom de la station appelée (ou *"À toutes les stations"*).
  3. Indicatif d'appel complet de l'avion (\`F-GABC\`).
  4. Nature de la détresse (\`Panne moteur totale\`).
  5. Intentions du commandant de bord (\`Atterrissage forcé en campagne\`).
  6. Position géographique, altitude et cap (\`10 NM Sud-Est de Rouen, 2 500 ft\`).
  7. Renseignements complémentaires utiles : nombre de personnes à bord (\`POB 2\`), carburant restant (\`Autonomie 2 heures\`).

:::definition Priorité Absolue du MAYDAY
L'émission d'un appel MAYDAY suspend immédiatement toutes les autres communications sur la fréquence. Tous les autres aéronefs doivent garder un silence radio absolu (*"Silence Mayday"*).
:::

### 3. Le Message d'Urgence : PAN PAN
- **Condition légale** : Concerne la **sécurité d'un aéronef, d'un véhicule ou d'une personne à bord, mais n'exige PAS de secours immédiat** (ex: passager victime d'un malaise cardiaque en vol, égarement sans panne d'essence imminente, baisse anormale de pression d'huile avec moteur tournant encore).
- **Signal phonétique** : Répéter trois fois l'expression **PAN PAN** (du mot français *"Panne"*).
- **Structure du message d'urgence** :
  1. \`PAN PAN, PAN PAN, PAN PAN\`
  2. Station appelée et indicatif de l'avion.
  3. Nature du problème et assistance requise (ex: *"Demandons priorité pour atterrissage immédiat avec ambulance à l'arrivée pour malaise cardiaque passager"*).
  4. Position, niveau de vol et intentions.

### 4. Fréquences et Contacts d'Urgence
- **Fréquence de contact initial** : Émettre en priorité sur la fréquence de contrôle avec laquelle l'avion est déjà en contact.
- **Fréquence internationale de détresse VHF** : **121.500 MHz** (veillée en permanence 24h/24 par les centres de contrôle radar militaires et civils, ainsi que par les avions de ligne au-dessus du FL 200).
- **Code transpondeur de détresse** : **7700** (déclenche immédiatement une alarme visuelle et sonore sur les écrans radar des contrôleurs).`,
      keyTakeaways: [
        "MAYDAY (3x) : danger grave et imminent nécessitant secours immédiat (Code 7700).",
        "PAN PAN (3x) : condition concernant la sécurité sans détresse immédiate.",
        "Fréquence internationale de détresse : 121.500 MHz.",
        "Ordre du message : Appel 3x, indicatif, nature du problème, intentions, position/altitude, personnes à bord (POB)."
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
