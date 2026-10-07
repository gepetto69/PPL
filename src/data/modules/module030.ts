import type { PPLModule } from '../../types/ppl';

export const module030: PPLModule = {
  id: '030',
  code: '030',
  name: 'Performances et Préparation du Vol',
  shortName: 'Performances & Centrage',
  iconName: 'Weight',
  color: 'emerald',
  description: 'Masse et centrage (calcul des moments, bras de levier, enveloppe de vol), performances au décollage, en montée et à l’atterrissage, altitude-densité, calculs de carburant réglementaire (Part-NCO) et log de navigation.',
  examQuestionsCount: 16,
  examDurationMinutes: 35,
  chapters: [
    {
      id: '030-ch1',
      moduleId: '030',
      title: 'Masse et Centrage (Mass and Balance)',
      readTime: '9 min',
      diagramType: 'weight_balance',
      content: `### 1. Les Définitions Réglementaires des Masses
Avant chaque vol, le pilote doit s'assurer que les masses de l'avion respectent les limitations publiées dans le manuel de vol (POH / AFM) :
- **Masse à vide de base (BEM - Basic Empty Mass)** : Masse de la structure de l'avion, du moteur, des équipements fixes, de l'huile moteur et du **carburant non utilisable** (fond de réservoir et canalisations).
- **Masse sans carburant (ZFW - Zero Fuel Mass)** : Masse de l'avion chargé comprenant les passagers et les bagages, mais SANS le carburant utilisable.
- **Masse au décollage (TOW - Take-Off Mass)** : Masse totale de l'aéronef au lâcher des freins au décollage. Elle ne doit JAMAIS excéder la **MTOW (Maximum Take-Off Mass)** certifiée !
- **Masse à l'atterrissage (LW - Landing Mass)** : Masse au décollage diminuée de la masse de carburant consommé pendant le vol. Elle ne doit pas dépasser la **MLW (Maximum Landing Mass)**.

:::definition Les Densités des Fluides à Retenir
Pour convertir les volumes (litres) en masses (kg) :
- **Essence aviation AVGAS 100LL** : Densité \(\\approx 0,72\\) (100 litres = 72 kg).
- **Huile moteur aviation** : Densité \(\\approx 0,90\) (1 litre = 0,9 kg).
- **Eau / Kérosène Jet-A1** : Eau = 1,00 ; Jet-A1 = 0,80.
- **Passager type standard (règles EASA)** : 84 kg (ou 75 kg pour avion léger selon manuel).
:::

### 2. Le Principe Physique du Bras de Levier et des Moments
Le **Centre de Gravité (CG)** est le point géométrique où s'applique la résultante du poids de tous les éléments de l'avion.
- **Référence (Datum)** : Plan vertical fictif perpendiculaire à l'axe longitudinal choisi par le constructeur (ex: cloison pare-feu, bord d'attaque de l'aile, pointe avant du cône d'hélice).
- **Bras de levier (Arm)** : Distance horizontale séparant le point d'application d'une charge du Datum (en mètres ou en pouces).
- **Moment** : Produit de la masse par son bras de levier :
  \\[ \\text{Moment} = \\text{Masse} \\times \\text{Bras de levier} \\]
- **Position du Centre de Gravité Total** :
  \\[ X_{CG} = \\frac{\\sum \\text{Moments}}{\\sum \\text{Masses}} = \\frac{\\text{Moment Total}}{\\text{Masse Totale}} \\]

### 3. Centrage Trop Avant vs Centrage Trop Arrière
L'enveloppe de centrage définit la zone de tolérance entre la **Limite Avant** et la **Limite Arrière** :

#### A. Centrage Trop Avant (Nose-Heavy) :
- Le couple piqueur est très fort. Pour maintenir le palier, l'empennage horizontal doit générer une déportance vers le bas accrue.
- L'aile doit donc porter le poids réel de l'avion **PLUS la déportance vers le bas de l'empennage** !
- **Conséquences** :
  - **Vitesse de décrochage (\(V_s\)) plus élevée** (l'aile est plus chargée).
  - Traînée induite supérieure -> consommation plus importante, vitesse de croisière plus faible.
  - Effort important à cabrer au manche.
  - **Arrondi à l'atterrissage très difficile ou impossible** : risque d'impact violent de la roulette de nez sur la piste.
  - Stabilité longitudinale très forte (l'avion résiste aux changements d'assiette).

#### B. Centrage Trop Arrière (Tail-Heavy) - DANGER MORTEL !
- L'empennage horizontal doit générer une force portante vers le haut ou quasi-nulle.
- **Conséquences** :
  - Stabilité longitudinale dégradée voire inexistante (l'avion devient instable et divergent).
  - Commandes hypersensibles en tangage.
  - En cas de décrochage, le pilote peut se trouver en **butée avant du manche sans parvenir à faire piquer le nez** : l'appareil s'enfonce dans une **vrille à plat irrécupérable** !

:::piege Évolution du Centrage en Vol
Le centrage n'est pas figé : il varie en permanence à mesure que le carburant des réservoirs est consommé par le moteur !
Le pilote doit vérifier que le centre de gravité reste strictement dans l'enveloppe autorisée **au décollage ET à l'atterrissage** avec réservoirs vides.
:::`,
      keyTakeaways: [
        "Moment = Masse × Bras de levier. Position CG = Somme des moments / Somme des masses.",
        "Masse volumique AVGAS 100LL = 0,72 kg/L (ex: 50 L = 36 kg).",
        "Centrage AVANT : grande stabilité mais Vs augmentée, consommation en hausse, arrondi difficile avec risque de toucher de roulette de nez.",
        "Centrage ARRIÈRE : DANGER EXTRÊME d'instabilité et de vrille à plat irrécupérable.",
        "Vérifier le centrage au décollage ET à l'atterrissage après consommation du carburant."
      ]
    },
    {
      id: '030-ch2',
      moduleId: '030',
      title: 'Facteurs de Performance au Décollage, Montée et Atterrissage',
      readTime: '9 min',
      content: `### 1. Les Distances Réglementaires au Décollage et à l'Atterrissage
Sur les manuels de vol (POH), deux distances sont distinguées :
- **Distance de roulement au sol (Ground Roll)** : Distance parcourue entre le lâcher des freins et le décollage effectif des roues (ou entre le toucher des roues et l'arrêt complet).
- **Distance totale de passage d'obstacle (Distance to clear a 50 ft / 15 m obstacle)** : Distance horizontale totale nécessaire pour décoller et franchir une hauteur fictive de **15 mètres (50 pieds)** en bout de piste (ou distance depuis 15 m de hauteur jusqu'à l'arrêt complet à l'atterrissage).

:::definition Coefficients de Majoration Recommandés au Décollage
Pour tenir compte de l'usure de l'appareil et des aléas du pilotage, majorez la distance calculée sur le manuel de vol :
- Piste en herbe sèche et courte : **+ 15 à 20 %**.
- Piste en herbe haute (> 10 cm) ou mouillée : **+ 30 à 50 %** !
- Pente montante de 1% : **+ 10 %**.
- Marge de sécurité générale de l'aviation générale : toujours prévoir une distance disponible supérieure d'au moins **30 à 50%** par rapport à la distance théorique calculée.
:::

### 2. L'Altitude-Pression et l'Altitude-Densité
L'air froid et sec à haute pression est dense (nombreuses molécules d'air). L'air chaud et humide à basse pression est peu dense.
- **Altitude-Pression (\(Z_p\))** : Altitude lue sur l'altimètre calé sur 1013,25 hPa :
  \\[ Z_p = Z_{\\text{terrain}} + (1013,25 - QNH) \\times 28 \\]
- **Température Standard ISA à l'altitude \(Z\)** :
  \\[ T_{ISA} = 15 - 2 \\times \\frac{Z}{1000} \\]
- **Altitude-Densité (\(Z_d\))** : Altitude-pression corrigée des écarts de température :
  \\[ Z_d = Z_p + 120 \\times (T_{\\text{réelle}} - T_{ISA}) \\]

:::exemple Calcul Concret d'Altitude-Densité
Un aérodrome est situé à 2 000 ft AMSL. Le QNH est de 1000 hPa et la température de +31 °C.
1. Altitude-pression : \\(Z_p = 2000 + (1013 - 1000) \\times 28 = 2000 + 364 = 2364\\text{ ft}\\).
2. Température standard à 2 000 ft : \\(T_{ISA} = 15 - 2 \\times 2 = 11\\ ^\\circ\\text{C}\\).
3. Écart de température : \\(\\Delta T = 31 - 11 = +20\\ ^\\circ\\text{C}\\).
4. Altitude-densité : \\(Z_d = 2364 + 120 \\times 20 = 2364 + 2400 = 4764\\text{ ft}\\) !
Bien qu'au sol à 2 000 ft, **l'avion réagira aérodynamiquement comme s'il volait à près de 4 800 ft** !
:::

### 3. Effets de l'Altitude-Densité Élevée sur les Performances
Une altitude-densité élevée dégrade simultanément les trois éléments vitaux du vol :
1. **La Portance de l'aile diminue** : pour compenser le manque de molécules d'air (\(\\rho\)), l'avion doit atteindre une vitesse sol (\(GS\)) beaucoup plus élevée pour décoller -> le roulement s'allonge.
2. **La Traction de l'hélice diminue** : les pales de l'hélice brassent moins de masse d'air, le rendement propulsif s'effondre.
3. **La Puissance du moteur atmosphérique diminue** : la quantité d'oxygène admise par cylindre est réduite, le moteur développe nettement moins de chevaux.
- **Résultat global** : Distance de décollage doublée, taux de montée divisé par deux, plafond pratique inaccessible.

### 4. L'Influence Cruciale du Vent
- **Vent de face (Headwind)** : Raccourcit considérablement la distance sol au décollage et à l'atterrissage, augmente la pente de montée par rapport au sol (franchissement d'obstacles facilité).
- **Vent arrière (Tailwind)** : DANGEREUX ! Une composante de vent arrière égale à 10% de la vitesse de toucher augmente la distance de roulement à l'atterrissage d'au moins **20 à 30 %** ! Ne jamais décoller ni atterrir avec plus de 5 à 10 kt de vent arrière.
- **Vent de travers (Crosswind)** : Doit toujours rester inférieur à la **vitesse maximale de vent traversier démontrée** publiée au manuel de vol.`,
      keyTakeaways: [
        "Altitude-densité = altitude-pression corrigée de la température. Chaque degré au-dessus d'ISA ajoute ~120 ft d'altitude-densité.",
        "Air chaud + basse pression + humidité = performances moteur, hélice et aile lourdement dégradées.",
        "Vent arrière : augmente dramatiquement les distances de roulage.",
        "Piste en herbe haute/mouillée : majorer la distance de roulement de 30% à 50%."
      ]
    },
    {
      id: '030-ch3',
      moduleId: '030',
      title: 'Préparation du Vol, Bilan Carburant et Log de Navigation',
      readTime: '8 min',
      content: `### 1. Le Bilan Carburant Réglementaire (EASA Part-NCO.OP.125)
Avant de mettre en route, le commandant de bord doit calculer la quantité minimale de carburant utilisable nécessaire pour accomplir le vol en toute sécurité.

Le bilan carburant se décompose en :
1. **Carburant de Roulage (Taxi Fuel)** : Consommation prévisible pour la mise en route, le roulage au sol et les essais moteur avant alignement (généralement forfait de 5 à 10 litres selon l'appareil).
2. **Carburant d'Étape / Trajet (Trip Fuel)** : Consommation calculée pour la montée, le vol de croisière, la descente et l'approche jusqu'à l'atterrissage sur l'aérodrome de destination.
3. **Réserve pour Imprévus (Contingency Fuel)** : Marge pour faire face à un vent défavorable plus fort que prévu ou à un contournement météo (généralement 5% du Trip Fuel ou 10 minutes de vol).
4. **Carburant de Dégagement (Alternate Fuel)** : Consommation pour effectuer une remise de gaz à destination, monter et rejoindre l'aérodrome de dégagement prévu.
5. **Réserve Finale (Final Reserve Fuel - OBLIGATOIRE)** :
   - En vol **VFR de jour** : Au moins **30 minutes de vol** au régime de croisière normale / économique.
   - En vol **VFR de nuit** : Au moins **45 minutes de vol** au régime de croisière normale.

:::piege La Réserve Finale est INVIOLABLE !
À l'atterrissage sur votre terrain de destination (ou de dégagement), les réservoirs doivent ENCORE contenir la totalité des 30 minutes de réserve finale !
Si en cours de vol vous prévoyez d'atterrir avec moins que votre réserve finale, vous devez vous dérouter immédiatement vers le terrain le plus proche ou déclarer une situation d'urgence carburant (*PAN PAN PAN CARBURANT* ou *MAYDAY MAYDAY MAYDAY FUEL* si l'atterrissage immédiat est vital).
:::

### 2. Le Log de Navigation (Fiche de Navigation)
Le log de navigation est la feuille de route du pilote en vol visuel. Pour chaque tronçon (branche) entre deux repères identifiés, il consigne :
- La **Route Vraie (Rv)** et la **Route Magnétique (Rm)** corrigée de la déclinaison.
- La **Vitesse Propre (TAS / Vp)** et le vent prévu (direction / force).
- L'**Angle de dérive (X)** et le **Cap Magnétique (Cm)** à suivre au compas.
- La **Vitesse Sol estimée (GS / Vs)**.
- La distance du tronçon en Milles Nautiques (NM).
- Le **Temps Sans Vent (TSV)** et le **Temps Estimé (ETE)** en minutes.
- L'heure estimée de passage (ETO) et l'heure réelle de passage (ATO).
- La consommation de carburant estimée et restante.

### 3. Dossier Météo et NOTAM Prévol
Le pilote privé a l'obligation réglementaire (Part-NCO.GEN.105) de consulter avant tout départ :
- Les messages d'observation **METAR / SPECI** et de prévision **TAF** de tous les terrains concernés.
- Les cartes de prévision du temps significatif (**TEMSI**) et des vents en altitude (**WINTEM**).
- Les **NOTAM (Notices to Airmen)** et SUP-AIP pour vérifier la disponibilité des pistes, les pannes d'aides à la navigation et l'activité des zones militaires (RTBA).`,
      keyTakeaways: [
        "Réserve finale VFR : 30 minutes minimum de jour, 45 minutes de nuit (inviolable à l'atterrissage).",
        "Carburant total = Roulage + Trajet + Dégagement + Réserve finale + Imprévus.",
        "Le log de navigation relie distance, vitesse sol, cap magnétique et temps de vol par branche.",
        "Vérification prévol obligatoire : METAR, TAF, TEMSI, WINTEM et NOTAM."
      ]
    }
  ],
  summaryCards: [
    {
      id: '030-sc1',
      moduleId: '030',
      title: 'Effets du Centrage Avant vs Arrière',
      keyPoints: [
        'Centrage AVANT : Vitesse de décrochage augmente, très stable, arrondi difficile, traînée accrue',
        'Centrage ARRIÈRE : Moins stable voire instable, risque de vrille irrécupérable, commandes ultra-sensibles',
        'Règle d’or : Vérifier que le centre de gravité reste dans l’enveloppe du décollage à l’atterrissage'
      ],
      alertNote: 'Un centrage au-delà de la limite arrière rend l’avion potentiellement incontrôlable et impossible à sortir de décrochage !'
    },
    {
      id: '030-sc2',
      moduleId: '030',
      title: 'Emport réglementaire de Carburant (VFR)',
      keyPoints: [
        'Consommation de l’étape : Roulage + Trajet (croisière)',
        'Réserve d’attente ou imprévus selon le plan de vol',
        'Réserve finale obligatoire de JOUR : 30 minutes au régime économique',
        'Réserve finale obligatoire de NUIT : 45 minutes au régime économique'
      ],
      formula: 'Carburant total = Roulage + Trajet + Dégagement + Réserve finale (30 min jour / 45 min nuit)'
    }
  ],
  questions: [
    {
      id: '030-q1',
      moduleId: '030',
      question: 'Quelle est la conséquence aérodynamique d’un centrage très avant sur un avion léger ?',
      options: [
        'Une diminution de la vitesse de décrochage et une instabilité en tangage',
        'Une augmentation de la vitesse de décrochage et une force plus importante nécessaire à l’arrondi',
        'Un risque accru de vrille à plat incontrôlable',
        'Une diminution de la consommation de carburant en croisière'
      ],
      correctAnswer: 1,
      explanation: 'Un centrage avant oblige l’empennage horizontal à créer une déportance vers le bas plus importante pour équilibrer le couple piqueur. Les ailes doivent supporter ce surcroît de charge, ce qui élève la vitesse de décrochage et rend l’arrondi plus lourd et difficile.',
      difficulty: 'moyen'
    },
    {
      id: '030-q2',
      moduleId: '030',
      question: 'En vol VFR de jour, quelle est la réserve finale minimale de carburant obligatoire à l’arrivée de votre destination ?',
      options: ['15 minutes de vol', '30 minutes de vol au régime de croisière économique', '45 minutes de vol', '1 heure de vol'],
      correctAnswer: 1,
      explanation: 'Selon les règles de l’air européennes (Part-NCO), la réserve finale de carburant minimale utilisable pour un vol VFR de jour sur avion est de 30 minutes de vol à la vitesse de croisière normale/économique.',
      difficulty: 'facile'
    },
    {
      id: '030-q3',
      moduleId: '030',
      question: 'Par une chaude journée d’été sur un aérodrome d’altitude élevée, comment se comportera la distance de décollage de votre avion ?',
      options: [
        'Elle sera plus courte car l’air chaud monte plus facilement',
        'Elle sera inchangée car les volets compensent la densité',
        'Elle sera nettement allongée en raison d’une forte altitude-densité',
        'Elle dépend uniquement de la force du vent et non de la température'
      ],
      correctAnswer: 2,
      explanation: 'L’air chaud et l’altitude diminuent la masse volumique de l’air (altitude-densité élevée). La portance diminue, la poussée de l’hélice diminue et le moteur développe moins de puissance, ce qui allonge considérablement la distance de roulement au décollage.',
      difficulty: 'facile'
    },
    {
      id: '030-q4',
      moduleId: '030',
      question: 'Pourquoi un centrage situé au-delà de la limite arrière autorisée est-il extrêmement dangereux ?',
      options: [
        'L’avion risque de ne jamais pouvoir décoller même manche plein arrière',
        'La stabilité longitudinale est détruite et la sortie de vrille ou de décrochage peut devenir impossible',
        'Le train d’atterrissage principal casse sous le poids',
        'La vitesse maximale autorisée Vne est automatiquement dépassée'
      ],
      correctAnswer: 1,
      explanation: 'Un centrage trop arrière réduit ou détruit la marge statique de stabilité longitudinale. En cas de décrochage, le pilote peut se trouver en butée avant de commande de profondeur sans parvenir à faire piquer le nez, conduisant à une vrille à plat mortelle.',
      difficulty: 'moyen'
    }
  ]
};
