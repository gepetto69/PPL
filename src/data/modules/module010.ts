import type { PPLModule } from '../../types/ppl';

export const module010: PPLModule = {
  id: '010',
  code: '010',
  name: 'Réglementation et Droit Aérien',
  shortName: 'Réglementation',
  iconName: 'Scale',
  color: 'blue',
  description: 'Règles de l’air OACI/EASA, SERA, licences de vol (PPL, LAPL), espaces aériens A à G, règles VFR, emports de documents et gestion des priorités.',
  examQuestionsCount: 24,
  examDurationMinutes: 35,
  chapters: [
    {
      id: '010-ch1',
      moduleId: '010',
      title: 'Licences, Qualifications et Aptitude Médicale',
      readTime: '6 min',
      content: `### 1. La Licence de Pilote Privé (PPL(A))
La licence PPL(A) délivrée conformément à la réglementation européenne Part-FCL autorise son titulaire à agir en tant que commandant de bord (PIC) ou copilote sur des avions ou motoplaneurs sans rémunération dans des vols non commerciaux.

#### Conditions de délivrance :
- **Âge minimum** : 17 ans révolus pour la délivrance (16 ans pour le premier solo).
- **Heures de vol minimales** : 45 heures d'instruction en vol, dont au moins 25 heures en double commande et au moins 10 heures en solo supervisé (dont 5 heures de navigation solo et un voyage solo d'au moins 270 km / 150 NM avec deux atterrissages complets sur deux aérodromes différents).
- **Validité de la qualification de classe SEP (Single Engine Piston)** : 24 mois.
- **Prorogation SEP** : Dans les 12 mois précédant l'expiration : effectuer 12 heures de vol (dont 6h comme PIC), 12 atterrissages et décollages, et 1 vol d'au moins 1 heure d'entraînement avec un instructeur (FI) ; OU passer un contrôle de compétences avec un examinateur (FE) dans les 3 mois précédant l'expiration.

### 2. Aptitude médicale et Certificat Médical
- Pour une licence PPL(A), un certificat médical de **Classe 2** (ou Classe 1) est obligatoire.
- Validité Classe 2 :
  - **60 mois** (5 ans) jusqu'à 40 ans (ou jusqu'au 42e anniversaire si délivré avant 40 ans).
  - **24 mois** (2 ans) entre 40 et 50 ans (ou jusqu'au 51e anniversaire).
  - **12 mois** (1 an) après 50 ans.
- Emport de passagers : Règle des 3 atterrissages/décollages dans les 90 jours précédents sur le même type/classe (de nuit pour emport de passagers de nuit sauf qualif IR).`,
      keyTakeaways: [
        "PPL(A) : 17 ans minimum, 45h de vol minimum.",
        "Validité SEP : 2 ans (24 mois). Prorogation par 12h + 1h FI dans la dernière année ou test FE.",
        "Certificat Classe 2 : 5 ans (<40 ans), 2 ans (40-50 ans), 1 an (>50 ans).",
        "Règle des 90 jours : 3 décollages et 3 atterrissages récents pour emporter des passagers."
      ]
    },
    {
      id: '010-ch2',
      moduleId: '010',
      title: 'Classification des Espaces Aériens et Conditions VMC (SERA)',
      readTime: '8 min',
      diagramType: 'airspaces',
      content: `### 1. Classification OACI / EASA des Espaces Aériens
L'espace aérien est divisé en classes de A à G :
- **Classe A** : Strictement interdit au vol VFR ! Réservé uniquement à l'IFR.
- **Classes B, C, D** : Espaces contrôlés. Clairance radio obligatoire, contact radio permanent (2-way), transpondeur obligatoire (Mode S). Séparation fournie :
  - En D : Séparation IFR/IFR, information de trafic fournie aux VFR concernant les autres IFR et VFR.
- **Classe E** : Espace contrôlé pour les IFR, mais les VFR y évoluent librement sans clairance radio (sauf de nuit ou zone d'obligation radio TMZ).
- **Classe G** : Espace aérien non contrôlé (auto-information sur 123.500 MHz ou fréquence locale, contact non obligatoire mais recommandé).

### 2. Règles VFR et visibilité minimale (VMC - Visual Meteorological Conditions)
#### Au-dessus du FL 100 (ou 10 000 ft AMSL) :
- Visibilité en vol : **8 km**.
- Distance aux nuages : 1 500 m horizontalement, 1 000 ft (300 m) verticalement.

#### Sous le FL 100 (et au-dessus de 3 000 ft AMSL ou 1 000 ft sol) :
- Visibilité en vol : **5 km**.
- Distance aux nuages : 1 500 m horizontalement, 1 000 ft (300 m) verticalement.

#### À ou sous 3 000 ft AMSL (ou 1 000 ft / sol, la plus élevée des deux) :
- En espace contrôlé (B, C, D, E) : Visibilité 5 km, hors nuages à 1 500 m horiz. et 1 000 ft verticaux.
- En espace non contrôlé (G) : Visibilité **5 km** (ou 1,5 km à vitesse indiquée ≤ 140 kt), **hors des nuages et en vue du sol ou de l'eau**.

### 3. VFR Spécial (en CTR contrôlée)
Permet d'évoluer en CTR quand les conditions météo sont inférieures aux minima VFR :
- Visi minimale au sol : **1 500 m** (ou en vol 1 500 m).
- Plafond minimum : **600 ft** (pour décollage/atterrissage).
- Vitesse maximale recommandée : 140 kt IAS, toujours en vue du sol/eau et hors des nuages.`,
      keyTakeaways: [
        "Classe A : INTERDIT aux VFR.",
        "Classes B, C, D : Clairance et contact radio obligatoires avant de pénétrer.",
        "Classe E : Contrôlé IFR, libre pour VFR de jour.",
        "Minima généraux VFR : 5 km de visibilité (8 km > FL 100), 1500 m horiz. et 1000 ft vertic. des nuages.",
        "En classe G à/sous 3000 ft AMSL : 1,5 km de visi si vitesse ≤ 140 kt, hors nuages en vue du sol."
      ]
    },
    {
      id: '010-ch3',
      moduleId: '010',
      title: 'Règles de l’Air, Priorités et Signaux de Détresse',
      readTime: '7 min',
      content: `### 1. Hauteurs minimales de survol VFR
- En règle générale : pas moins de **500 ft (150 m)** au-dessus du sol ou de l'eau, et à une distance d'au moins 150 m de toute personne, véhicule ou obstacle.
- Au-dessus des villes, agglomérations ou rassemblements de plein air : au moins **1 000 ft (300 m)** au-dessus de l'obstacle le plus élevé dans un rayon de 600 m, et permettant un atterrissage d'urgence en cas de panne sans mettre en danger les personnes au sol.

### 2. Priorités de passage en vol
- **Convergence** : L'aéronef qui vient de la **droite** a la priorité.
- **Règle de catégorie** : Plus un aéronef est manœuvrable, moins il est prioritaire :
  - Ballon libre > Planeur > Dirigeable > Avion remorqueur > Aéronef motopropulsé standard.
- **Face à face** : Chacun oblique vers sa **droite**.
- **Dépassement** : L'aéronef qui dépasse le fait par la **droite** et reste à l'écart.
- **Atterrissage** : L'aéronef le plus bas en finale a la priorité (mais il est interdit de couper la priorité à un aéronef déjà établi). Un aéronef en situation d'urgence a priorité absolue sur tous les autres.

### 3. Transpondeur et Codes d'urgence
- **7000** : Code VFR standard en Europe (sauf instruction ATC).
- **7700** : Détresse générale (Mayday - détresse grave et imminente).
- **7600** : Panne radio (Nordo / Communication Failure).
- **7500** : Acte d'intervention illicite (Détournement / Hijack).`,
      keyTakeaways: [
        "Hauteur min VFR normale : 500 ft/sol ; Villes : 1000 ft au-dessus du plus haut obstacle (rayon 600m).",
        "Face à face : les deux tournent à DROITE.",
        "Dépassement : toujours par la DROITE.",
        "Codes Transpondeur : 7700 Détresse, 7600 Panne radio, 7500 Détournement, 7000 VFR."
      ]
    }
  ],
  summaryCards: [
    {
      id: '010-sc1',
      moduleId: '010',
      title: 'Classification des Espaces (SERA)',
      keyPoints: [
        'Classe A : IFR uniquement (VFR STRICTEMENT INTERDIT)',
        'Classes B, C, D : Espace contrôlé, clairance et radio OBLIGATOIRES pour VFR',
        'Classe E : Contrôlé pour IFR, VFR libre sans clairance (sauf nuit ou TMZ)',
        'Classe G : Espace non contrôlé, auto-information, VFR libre'
      ],
      mnemonics: ['"A = Absolument interdit au VFR"', '"D = Demande de clairance obligatoire"'],
      alertNote: 'Attention aux CTR et TMA de classe D entourant les terrains contrôlés : clairance OBLIGATOIRE avant toute pénétration !'
    },
    {
      id: '010-sc2',
      moduleId: '010',
      title: 'Codes Transpondeur et Urgence',
      keyPoints: [
        '7000 : VFR standard en France et espace européen',
        '7500 : Détournement / Piraterie ("Seven-Five - Man with knife")',
        '7600 : Panne de communication radio ("Seven-Six - Radio fix")',
        '7700 : Détresse / Urgence absolue ("Seven-Seven - Going to heaven")'
      ],
      mnemonics: ['75 prise d’otage, 76 j’entends rien, 77 urgence vitale'],
      alertNote: 'En cas de panne radio (7600) en VFR : rester VMC, afficher 7600, atterrir sur l’aérodrome approprié le plus proche.'
    },
    {
      id: '010-sc3',
      moduleId: '010',
      title: 'Validité Médicale Classe 2 (PPL)',
      keyPoints: [
        'Moins de 40 ans : 60 mois (5 ans)',
        'Entre 40 et 50 ans : 24 mois (2 ans)',
        'Plus de 50 ans : 12 mois (1 an)'
      ],
      formula: 'Âge < 40 ans -> 5 ans | 40-50 ans -> 2 ans | > 50 ans -> 1 an'
    },
    {
      id: '010-sc4',
      moduleId: '010',
      title: 'Priorités de passage en vol',
      keyPoints: [
        'Face à face : les deux aéronefs virent vers la DROITE',
        'Convergence : priorité à droite (comme sur la route)',
        'Dépassement : l’aéronef dépasseur le fait par la DROITE',
        'Hiérarchie d’appareils : Ballon > Planeur > Dirigeable > Avion'
      ],
      alertNote: 'Un appareil en détresse a TOUJOURS la priorité absolue sur tous les autres aéronefs.'
    }
  ],
  questions: [
    {
      id: '010-q1',
      moduleId: '010',
      question: 'Dans quel espace aérien le vol VFR est-il STRICTEMENT interdit selon la réglementation SERA ?',
      options: ['Espace aérien de classe A', 'Espace aérien de classe B', 'Espace aérien de classe D', 'Espace aérien de classe E'],
      correctAnswer: 0,
      explanation: 'Selon la classification de l’OACI et le règlement européen SERA, l’espace aérien de classe A est réservé exclusivement aux vols aux instruments (IFR). Le vol VFR y est interdit.',
      difficulty: 'facile'
    },
    {
      id: '010-q2',
      moduleId: '010',
      question: 'Quel est le code transpondeur universel à afficher en cas de panne complète des communications radio (NORDO) ?',
      options: ['7000', '7500', '7600', '7700'],
      correctAnswer: 2,
      explanation: 'Le code transpondeur 7600 signale la panne radio (Loss of Radio Communication). Le 7500 est pour intervention illicite, le 7700 pour détresse/urgence et le 7000 pour le VFR standard.',
      difficulty: 'facile'
    },
    {
      id: '010-q3',
      moduleId: '010',
      question: 'Pour emporter des passagers en tant que commandant de bord PPL(A) de jour, le pilote doit avoir effectué au cours des 90 jours précédents :',
      options: [
        'Au moins 10 heures de vol comme commandant de bord',
        'Au moins 3 décollages et 3 atterrissages sur le même type ou classe d’aéronef',
        'Au moins 5 heures de navigation solo avec instructeur',
        'Un vol de contrôle de compétences avec un examinateur FE'
      ],
      correctAnswer: 1,
      explanation: 'Conformément au Part-FCL.060 (expérience récente), un pilote ne peut transporter de passagers que s’il a effectué au moins 3 décollages et 3 atterrissages sur un aéronef du même type ou de la même classe dans les 90 jours précédents.',
      difficulty: 'moyen'
    },
    {
      id: '010-q4',
      moduleId: '010',
      question: 'Deux avions motorisés se croisent face à face à la même altitude. Quelle manœuvre doivent-ils effectuer pour éviter la collision ?',
      options: [
        'Chacun doit monter de 500 ft',
        'Chacun doit obliquer vers sa gauche',
        'Chacun doit obliquer vers sa droite',
        'L’avion le plus rapide doit obliquer vers la droite, l’autre maintient son cap'
      ],
      correctAnswer: 2,
      explanation: 'Lorsque deux aéronefs se rapprochent de face ou presque de face et qu’il y a risque de collision, chacun doit modifier sa trajectoire vers sa droite.',
      difficulty: 'facile'
    },
    {
      id: '010-q5',
      moduleId: '010',
      question: 'Quelle est la durée de validité du certificat médical de Classe 2 pour un pilote âgé de 45 ans ?',
      options: ['60 mois (5 ans)', '24 mois (2 ans)', '12 mois (1 an)', '36 mois (3 ans)'],
      correctAnswer: 1,
      explanation: 'Pour un titulaire de licence PPL avec certificat médical Classe 2, la validité est de 60 mois jusqu’à 40 ans, puis passe à 24 mois entre 40 et 50 ans, et enfin à 12 mois au-delà de 50 ans.',
      difficulty: 'moyen'
    },
    {
      id: '010-q6',
      moduleId: '010',
      question: 'Sauf autorisation spéciale, quelle est la hauteur minimale de survol au-dessus de la campagne (hors agglomération et rassemblement de personnes) ?',
      options: ['150 m (500 ft) sol ou eau', '300 m (1 000 ft) sol', '50 m (150 ft) sol', '600 m (2 000 ft) sol'],
      correctAnswer: 0,
      explanation: 'En VFR, la hauteur minimale normale de sécurité est de 150 m (500 ft) au-dessus du sol ou de l’eau, et à une distance d’au moins 150 m de toute personne, véhicule ou structure.',
      difficulty: 'facile'
    }
  ]
};
