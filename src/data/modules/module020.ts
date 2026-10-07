import type { PPLModule } from '../../types/ppl';

export const module020: PPLModule = {
  id: '020',
  code: '020',
  name: 'Connaissance Générale des Aéronefs (AGK)',
  shortName: 'Aéronefs & Systèmes',
  iconName: 'Wrench',
  color: 'amber',
  description: 'Cellule, gouvernes, moteur à piston 4 temps, hélice, circuits électrique/carburant/huile, instruments de bord (anémomètre, altimètre, variomètre, horizon artificiel).',
  examQuestionsCount: 16,
  examDurationMinutes: 25,
  chapters: [
    {
      id: '020-ch1',
      moduleId: '020',
      title: 'Le Moteur à Piston 4 Temps et Carburation',
      readTime: '8 min',
      content: `### 1. Le Cycle à 4 Temps (Cycle de Beau de Rochas)
Le moteur d'avion léger est généralement un moteur à combustion interne 4 temps, à plat (boxer), refroidi par air :
1. **Admission** : La soupape d'admission s'ouvre, le piston descend et aspire le mélange air-essence.
2. **Compression** : Les deux soupapes sont fermées, le piston remonte et comprime le mélange (échauffement).
3. **Combustion / Détente** : Un peu avant le point mort haut (PMH), les bougies créent une étincelle. L'explosion repousse violemment le piston vers le bas (seul temps moteur fournissant de la puissance !).
4. **Échappement** : La soupape d'échappement s'ouvre, le piston remonte et expulse les gaz brûlés.

### 2. Double allumage et Magnétos
- Les avions d'aéroclub disposent de **deux magnétos autonomes** indépendantes du circuit électrique de bord de la batterie.
- Si la batterie tombe en panne ou si l'alternateur lâche, **le moteur continue de tourner normalement**.
- Chaque cylindre possède **2 bougies** alimentées par des magnétos différentes pour assurer une combustion optimale et une redondance vitale.
- Sélecteur de magnétos : OFF - R (Right) - L (Left) - BOTH - START. En vol, toujours sur **BOTH**.

### 3. Givrage du carburateur
- Phénomène extrêmement dangereux provoqué par la détente de l'air dans le venturi du carburateur et la vaporisation de l'essence, provoquant une chute de température pouvant atteindre 15°C à 20°C.
- Il peut survenir même par temps chaud (jusqu'à +25°C !) par humidité relative élevée (>60%).
- Symptôme sur hélice à calage fixe : **Baisse de régime moteur (chute des RPM)** sans modification de la manette des gaz, puis vibrations et calage moteur.
- Remède : Tirer la **Réchauffe carburateur** (Carb Heat). Conséquence immédiate : chute supplémentaire des RPM (car air chaud moins dense), puis remontée progressive des RPM lorsque la glace fond.`,
      keyTakeaways: [
        "Temps moteur : Admission, Compression, Combustion/Détente, Échappement (seul le 3e est moteur).",
        "Les magnétos sont autonomes : une panne de batterie n'arrête pas le moteur.",
        "Givrage carbu possible entre -7°C et +25°C par forte humidité relative.",
        "Symptôme givrage : baisse continue des RPM sur hélice à pas fixe. Action : réchauffe carbu à fond."
      ]
    },
    {
      id: '020-ch2',
      moduleId: '020',
      title: 'Instruments Anémobarométriques et Gyroscopiques',
      readTime: '9 min',
      diagramType: 'altimeter',
      content: `### 1. Le Circuit Anémobarométrique (Pitot-Statique)
Les trois instruments raccordés aux prises d'air sont :
1. **L'Altimètre** : branché uniquement sur la prise **statique**. Mesure la pression atmosphérique extérieure et la traduit en altitude selon l'atmosphère type OACI (1 hPa = 27 ft au niveau de la mer).
2. **Le Variomètre** : branché uniquement sur la prise **statique** (avec une capsule munie d'une fuite calibrée). Indique le taux de montée ou de descente en pieds par minute (ft/min).
3. **L'Anémomètre (Badin)** : branché sur la prise de pression **totale** (tube Pitot) ET sur la prise **statique**. Mesure la pression dynamique : \\(P_{dyn} = P_{totale} - P_{statique} = \\frac{1}{2} \\rho V^2\\).

#### Conséquence de blocage des prises :
- Prise Pitot bouchée (glace) : l'anémomètre se comporte comme un altimètre (la vitesse indiquée augmente faussement en montée !).
- Prise statique bouchée : l'altimètre se fige à l'altitude du blocage, le variomètre revient à zéro, l'anémomètre sous-estime en montée et sur-estime en descente.

### 2. Calages de l'Altimètre
- **QNH** : Pression au niveau moyen de la mer. Au sol, l'altimètre indique **l'altitude** du terrain par rapport à la mer.
- **QFE** : Pression au niveau du terrain. Au sol, l'altimètre indique **zéro** (hauteur par rapport à la piste).
- **1013,25 hPa (Calage standard)** : Utilisé au-dessus de l'altitude de transition pour exprimer les **Niveaux de Vol (FL - Flight Levels)**. Ex : FL 65 = 6 500 ft en calage standard.

### 3. Instruments Gyroscopiques
- **Horizon artificiel** : Gyroscope à 2 degrés de liberté alimenté par pompe à vide (dépression) ou moteur électrique. Indique l'assiette (cabré/piqué) et l'inclinaison (roulis).
- **Directionnel (Conservateur de cap)** : Gyroscope horizontal insensible aux accélérations et virages, mais soumis à la précession (doit être recalé sur le compas magnétique toutes les 15 minutes en palier non accéléré).
- **Indicateur de virage / Bille-Aiguille** : La bille matérialise la résultante des forces (gravité + centrifuge). "Le pied chasse la bille" : si la bille part à droite, appuyer sur le palonnier droit pour coordonner le virage.`,
      keyTakeaways: [
        "Pitot = Pression totale. Statique = Pression atmosphérique ambiante.",
        "Anémomètre = Statique + Pitot ; Altimètre et Variomètre = Statique uniquement.",
        "QNH donne l'Altitude (AMSL), QFE donne la Hauteur (AGL), 1013 hPa donne le Niveau de Vol (FL).",
        "Règle de coordination en virage : 'Le pied chasse la bille'."
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
