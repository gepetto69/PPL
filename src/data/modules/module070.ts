import type { PPLModule } from '../../types/ppl';

export const module070: PPLModule = {
  id: '070',
  code: '070',
  name: 'Procédures Opérationnelles (OPS)',
  shortName: 'Procédures Opérationnelles',
  iconName: 'ShieldCheck',
  color: 'violet',
  description: 'Part-NCO, intégration dans le tour de piste standard, gestion des pannes (moteur, feu, circuit électrique), amerrissage forcé, utilisation des gilets et balises ELT (121.5 / 406 MHz).',
  examQuestionsCount: 12,
  examDurationMinutes: 20,
  chapters: [
    {
      id: '070-ch1',
      moduleId: '070',
      title: 'Le Tour de Piste Standard et Intégration VFR',
      readTime: '7 min',
      diagramType: 'circuits',
      content: `### 1. La Géométrie du Tour de Piste Standard
Sauf indication contraire sur la carte VAC (Visual Approach Chart), le circuit d'aérodrome s'effectue par des **virages à GAUCHE** et à une hauteur standard de **1 000 ft AGL** (au-dessus du sol du terrain).

Les branches du tour de piste :
1. **Montée initiale (Upwind leg)** : Décollage dans l'axe de piste, accélération jusqu'à la vitesse de montée, palier de sécurité (minimum 500 ft sol avant premier virage).
2. **Étape vent traversier (Crosswind leg)** : Perpendiculaire à l'axe de piste.
3. **Étape vent arrière (Downwind leg)** : Parallèle à la piste en sens inverse de l'atterrissage. Vitesse stabilisée, vérifications avant atterrissage, sortie du premier cran de volets en milieu de vent arrière.
4. **Étape de base (Base leg)** : Perpendiculaire à l'axe de piste, début de la descente stabilisée, réduction moteur, deuxième cran de volets.
5. **Finale (Final approach)** : Alignement dans l'axe de piste, configuration atterrissage complète, plan de descente standard à 5% (environ 3° ou 300 ft par NM), vitesse d'approche stabilisée.

### 2. Intégration sur Aérodrome Non Contrôlé
- Si l'aérodrome est dépourvu de tour de contrôle (auto-information sur fréquence dédiée ou 123.500 MHz) :
  - **Arrivée par la verticale terrain** : À une hauteur minimale de **500 ft au-dessus du tour de piste** (généralement 1 500 ft AGL ou plus) pour observer la manche à air, déterminer la piste en service et repérer les aéronefs en tour de piste.
  - Ensuite, éloignement du côté opposé au tour de piste (secteur de dégagement) pour descendre à l'altitude du tour de piste et s'intégrer en début de vent arrière à 45°.`,
      keyTakeaways: [
        "Tour de piste standard : virages à GAUCHE à 1 000 ft sol (AGL).",
        "Verticale terrain non contrôlé : survol à +500 ft au-dessus du tour de piste (ex: 1500 ft AGL) pour voir la manche à air.",
        "Plan de descente normal : 5% (3°), soit 300 ft de perte d'altitude par mille nautique.",
        "Premier virage du tour de piste interdit avant 500 ft sol."
      ]
    },
    {
      id: '070-ch2',
      moduleId: '070',
      title: 'Gestion des Pannes et Procédures d’Urgence',
      readTime: '8 min',
      content: `### 1. Panne Moteur en Campagne (PFO - Panne Forcée en Campagne)
En cas de silence moteur en vol de croisière, le pilote applique immédiatement l'ordre chronologique vital :
1. **Pilotage (Aviate)** : Prendre et compenser immédiatement la **vitesse de finesse maximale** (Glide speed certifiée de l'avion). Ne jamais laisser chuter la vitesse !
2. **Choix du champ d'atterrissage (Navigate)** :
   - Champ dans le cône de plané (finesse standard de 8 à 10 : 1 000 ft de hauteur permet de planer environ 1,5 NM).
   - Dans le vent (atterrir face au vent pour réduire la vitesse sol au crash).
   - Longueur suffisante, dégagé d'arbres et de lignes électriques.
3. **Recherche de panne (Troubleshooting)** :
   - Pompe électrique ON.
   - Changer de réservoir (Sélecteur de carburant).
   - Réchauffe carburateur tirée à fond.
   - Manette des gaz à fond, mélange riche.
   - Magnétos sur BOTH ou tester L/R.
4. **Message de détresse (Communicate)** :
   - Transpondeur : **7700**.
   - Fréquence radio : Dernier contact avec le contrôle OU fréquence d'urgence internationale **121.500 MHz**.
   - Message : *"MAYDAY, MAYDAY, MAYDAY - F-XXXX - Panne moteur - Atterrissage forcé en cours 5 NM sud de..."*.
5. **Préparation à l'impact (Secure)** :
   - Ceintures et harnais serrés à bloc.
   - Couper le contact magnétos, le sélecteur d'essence et la batterie (Master switch) avant le toucher pour éviter l'incendie.
   - Déverrouiller la verrière / portière pour éviter le blocage après crash.

### 2. Balises de Détresse (ELT)
- Émettent sur la fréquence satellitaire de détresse internationale **406 MHz** (avec signal de localisation homing sur **121.5 MHz**).
- Déclenchement automatique par accéléromètre (choc supérieur à une valeur de G prédéfinie) ou manuel par bouton cockpit.`,
      keyTakeaways: [
        "Ordre d'or du pilote : AVIATE -> NAVIGATE -> COMMUNICATE.",
        "Premier réflexe absolu en panne moteur : afficher la vitesse de FINESSE MAXIMALE.",
        "Codes de détresse : 7700 au transpondeur, Mayday sur la fréquence ou sur 121.500 MHz.",
        "Avant impact : couper essence, magnétos et master batterie pour empêcher l'incendie."
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
