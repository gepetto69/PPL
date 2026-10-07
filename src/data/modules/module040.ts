import type { PPLModule } from '../../types/ppl';

export const module040: PPLModule = {
  id: '040',
  code: '040',
  name: 'Performance Humaine et Limites',
  shortName: 'Performance Humaine',
  iconName: 'UserCheck',
  color: 'rose',
  description: 'Physiologie du vol (hypoxie, hyperventilation, barotraumatismes, vision nocturne et diurne), système vestibulaire et désorientation spatiale, intoxication (alcool, drogues, monoxyde de carbone), gestion du stress et modèle TEM.',
  examQuestionsCount: 12,
  examDurationMinutes: 20,
  chapters: [
    {
      id: '040-ch1',
      moduleId: '040',
      title: 'Physiologie du Vol : Hypoxie, Hyperventilation et Barotraumatismes',
      readTime: '9 min',
      content: `### 1. La Respiration et l'Hypoxie d'Altitude
L'atmosphère conserve une composition constante en gaz jusqu'à près de 80 km (environ 78% d'azote, **21% d'oxygène**, 1% d'argon et traces de CO2).
Cependant, la pression atmosphérique diminue de façon exponentielle avec l'altitude :
- Au niveau de la mer (MSL) : Pression totale = 1013,25 hPa -> Pression partielle d'O2 (\(P_{O2}\)) \(\approx 212\) hPa.
- À 18 000 ft (5 500 m) : Pression atmosphérique divisée par deux (\(\approx 500\) hPa) -> \(P_{O2}\) divisée par deux !
- **Définition de l'hypoxie** : Diminution de l'apport d'oxygène aux tissus de l'organisme, en particulier au cerveau et à la rétine.

#### Les 4 Formes d'Hypoxie :
1. **Hypoxie hypoxique** (la plus fréquente en vol) : baisse de la pression partielle d'oxygène dans l'air inspiré en altitude.
2. **Hypoxie anémique / hypohémique** : incapacité du sang à transporter l'oxygène (intoxication au **monoxyde de carbone CO**, tabagisme, anémie).
3. **Hypoxie stagnante** : mauvaise circulation sanguine (accélérations sous fort facteur de charge \(+G_z\), froid extrême, état de choc).
4. **Hypoxie histotoxique** : empoisonnement des cellules qui ne peuvent plus utiliser l'oxygène disponible (alcool, drogues, cyanure).

:::piege Les Symptômes Trompeurs de l'Hypoxie
L'hypoxie est redoutablement vicieuse car le cerveau ne ressent aucune douleur :
- Dès **8 000 à 10 000 ft** : baisse de l'acuité visuelle nocturne (les bâtonnets de la rétine sont très gourmands en O2).
- Entre **10 000 et 14 000 ft** : céphalées, euphorie trompeuse (le pilote rit de ses erreurs), jugement critique altéré, ralentissement psychomoteur.
- Au-delà de **15 000 ft** : cyanose (lèvres et ongles bleuâtres), somnolence, perte de conscience.
- **Temps de Conscience Utile (TUC)** : à 20 000 ft, le pilote ne dispose que de 5 à 12 minutes avant l'évanouissement ; à 30 000 ft, moins de 1 à 2 minutes !
:::

### 2. L'Hyperventilation (Crise d'Angoisse)
L'hyperventilation est une respiration anormalement rapide et profonde déclenchée par l'anxiété, la panique ou un stress aigu :
- **Mécanisme** : Le pilote élimine excessivement le dioxyde de carbone (\(CO_2\)) dissous dans le sang (hypocapnie), entraînant une alcalose respiratoire et une vasoconstriction cérébrale.
- **Symptômes (très proches de l'hypoxie)** : Vertiges, picotements et fourmillements dans les extrémités (mains, pieds, lèvres), contractures musculaires (tétanie, "mains d'accoucheur").
- **Conduite à tenir** : Réduire consciemment la fréquence respiratoire à 10-12 cycles/minute, parler à voix haute, ou respirer calmement dans un sac en papier pour réinhaler du \(CO_2\).

### 3. Les Barotraumatismes (Loi de Boyle-Mariotte)
La loi de Boyle-Mariotte stipule qu'à température constante, le volume d'un gaz varie en sens inverse de la pression (\(P \times V = \text{constante}\)) :
- **L'oreille moyenne** : Communique avec l'arrière-gorge par la **Trompe d'Eustache**.
  - *À la montée* : L'air de l'oreille moyenne se détend et s'échappe naturellement par la trompe sans effort.
  - *À la descente* : La pression extérieure augmente et repousse le tympan vers l'intérieur. Si la trompe d'Eustache est obstruée par un rhume, une sinusite ou une allergie, l'équilibrage est impossible : **douleur intolérable, surdité brutale et risque de perforation tympanique**.
  - *Manœuvres* : Déglutir, bailler, mâcher du chewing-gum, ou réaliser la manœuvre de **Valsalva** (souffler doucement nez pincé et bouche close).
- **Les sinus de la face (aéro-sinusite)** : Douleurs violentes au front ou aux maxillaires en descente si les orifices de drainage des sinus sont enflammés.
- **Les dents (aéro-odontalgie)** : Douleur dentaire vive due à l'expansion d'une bulle d'air piégée sous un amalgame défectueux.

:::definition Délais Réglementaires après Plongée Sous-Marine
Lors d'une plongée sous-marine en bouteille, l'azote se dissout sous pression dans les tissus corporels. En volant trop rapidement après la plongée, la chute de pression fait mousser l'azote dans le sang (embolie gazeuse / maladie de décompression) :
- **Plongée sans palier de décompression** : Attendre au moins **12 heures** avant de voler.
- **Plongée avec paliers de décompression ou plongées répétitives** : Attendre au moins **24 heures** avant de monter à bord d'un aéronef !
:::`,
      keyTakeaways: [
        "L'hypoxie est due à la baisse de pression partielle d'oxygène en altitude ; l'euphorie est son symptôme le plus insidieux.",
        "Hyperventilation : élimination excessive de CO2 par stress -> picotements, tétanie -> calmer le rythme respiratoire.",
        "Barotraumatisme de descente : ne JAMAIS voler avec un rhume ou une sinusite (risque de rupture tympanique).",
        "Plongée sous-marine : 12 heures d'attente minimale sans paliers, 24 heures avec paliers de décompression."
      ]
    },
    {
      id: '040-ch2',
      moduleId: '040',
      title: 'Système Sensoriel, Désorientation Spatiale et Vision en Vol',
      readTime: '9 min',
      content: `### 1. Le Système Vestibulaire (Oreille Interne)
Pour maintenir son équilibre sur Terre, le cerveau combine trois sources sensorielles : la vue (80%), les récepteurs proprioceptifs (muscles, articulations) et le système vestibulaire situé dans l'oreille interne :
- **Les Canaux Semi-Circulaires** : Trois anneaux disposés dans les 3 plans de l'espace, remplis d'endolymphe et dotés de cils sensoriels (cupule). Ils détectent les **accélérations angulaires** (rotations en roulis, tangage, lacet).
  - *Seuil de détection physiologique* : Environ **2°/s²**. Toute accélération angulaire inférieure à ce seuil passe totalement inaperçue pour le pilote !
  - *Adaptation* : En virage prolongé à inclinaison constante après 15 à 20 secondes, l'endolymphe rattrape la vitesse des parois : les cils reviennent au neutre et le cerveau perçoit que l'aéronef vole en ligne droite !
- **Les Organes Otolithiques (Utricule et Saccule)** : Contiennent des cristaux microscopiques (otolithes) sensibles à la **pesanteur terrestre et aux accélérations linéaires**.

### 2. Les Illusions Vestibulaires et le Danger IMC
En conditions de vol aux instruments (IMC) ou de nuit sans horizon visible, **l'oreille interne trompe inévitablement le pilote** :
- **Le Cimetière en Spirale (Graveyard Spiral)** :
  1. L'avion s'incline doucement dans un virage non détecté (sous le seuil vestibulaire).
  2. Le pilote jette un coup d'œil et remet les ailes horizontales.
  3. L'oreille interne perçoit ce retour à plat comme un virage violent dans l'autre sens !
  4. Cédant à son illusion corporelle, le pilote réincline l'avion dans le virage initial.
  5. L'avion perd de l'altitude : le pilote tire sur le manche pour compenser, ce qui resserre la spirale descendante fatale.
- **L'Illusion Somatogravique** :
  - Une forte accélération linéaire vers l'avant (ex: décollage de nuit sur une piste noire) fait basculer les otolithes vers l'arrière, exactement comme lors d'un cabré.
  - Le pilote a l'illusion physique très nette que l'avion est en fort cabré : il pousse violemment sur le manche et précipite l'avion dans le sol !
- **L'Illusion de Coriolis** : Mouvement brusque de la tête (ex: ramasser une carte tombée) pendant un virage incliné : déclenche une illusion de vrille violente et de nausée immédiate.

:::definition Règle Absolue face à la Désorientation Spatiale
En perte de repères visuels extérieurs, **LE CORPS HUMAIN MENT TOUJOURS**.
Le pilote VFR ne doit JAMAIS faire confiance à ses sensations physiques ("au feeling"). Il doit **CROIRE STRICTEMENT SES INSTRUMENTS DE BORD** (horizon artificiel, badin, bille-aiguille, altimètre) et faire demi-tour à 180° à plat vers les conditions VMC.
:::

### 3. La Vision en Vol et ses Pièges
La vision est le sens roi du pilote en vol VFR :
- **Vision diurne (Cônes)** : Concentrés sur la fovéa centrale de la rétine. Permettent la vision fine des détails et des couleurs de jour.
- **Vision nocturne (Bâtonnets)** : Situés en périphérie de la rétine, très sensibles à la faible luminosité mais insensibles aux couleurs.
  - *Temps d'adaptation à l'obscurité* : Il faut environ **30 minutes** à l'œil pour développer une sensibilité nocturne maximale. Un éclair lumineux blanc détruit cette adaptation instantanément (utiliser une lumière rouge tamisée).
  - *Tache aveugle fovéale de nuit* : De nuit, fixer un objet directement le fait disparaître ! Il faut regarder **légèrement à côté (vision décentrée de 10° à 15°)** pour activer les bâtonnets périphériques.
- **Détection du trafic en vol (Scan visuel)** :
  - L'œil humain ne voit nettement que dans un cône central de 2°. Pour repérer les autres aéronefs, le balayage visuel doit s'effectuer par **saccades successives de 10° à 15°**, en marquant un arrêt d'une seconde sur chaque secteur.
  - ⚠️ *Collision imminente* : Un avion aperçu à travers le pare-brise dont la position reste **rigoureusement fixe sans déplacement angulaire, mais dont la taille grossit**, est en trajectoire de collision directe avec vous !`,
      keyTakeaways: [
        "Oreille interne : canaux semi-circulaires (rotations) et otolithes (accélérations linéaires).",
        "En IMC ou de nuit, les sensations vestibulaires sont fausses : se fier exclusivement à l'horizon artificiel.",
        "Illusion somatogravique à l'accélération = faux cabré -> risque de pousser dans le relief.",
        "Scan visuel anti-abordage par paliers de 10° à 15°. Point fixe qui grossit = collision directe !",
        "Vision nocturne : 30 min d'adaptation, vision décentrée indispensable car la fovéa centrale est aveugle de nuit."
      ]
    },
    {
      id: '040-ch3',
      moduleId: '040',
      title: 'Facteurs Psychologiques, Intoxication et Gestion des Risques (TEM)',
      readTime: '8 min',
      content: `### 1. Intoxication, Alcool, Médicaments et Monoxyde de Carbone
- **Alcoolémie en vol** :
  - La réglementation européenne Part-NCO fixe la limite d'alcoolémie à **0,2 g/l de sang** (ou 0,1 mg/l dans l'air expiré), avec une règle de sécurité empirique d'au moins **8 à 12 heures entre la dernière prise d'alcool et le vol**.
  - L'altitude multiplie considérablement les effets de l'alcool : 1 verre à 10 000 ft produit les effets cognitifs de 2 à 3 verres au sol !
- **Médicaments** : Même des médicaments en vente libre (antihistaminiques pour le rhume des foins, sirops contre la toux, somnifères) provoquent une somnolence incompatible avec la sécurité des vols. Toujours consulter un médecin aéronautique avant de voler sous traitement.
- **Monoxyde de Carbone (CO)** :
  - Gaz incolore, inodore, insipide, extrêmement toxique issu des fuites d'échappement vers la boîte de chauffage cabine.
  - Se fixe sur l'hémoglobine avec une affinité **250 fois supérieure à celle de l'oxygène** (carboxyhémoglobine), provoquant une anoxie cellulaire foudroyante.
  - *Signes d'intoxication* : Maux de tête pulsatiles, nausées, pastille détectrice de CO qui vire au gris/noir.
  - *Action immédiate* : **COUPER LE CHAUFFAGE CABINE**, ouvrir tous les aérateurs d'air frais extérieur, et atterrir d'urgence.

### 2. Le Stress, la Fatigue et la Conscience de la Situation (SA)
- **Modèle de la courbe de performance (Loi de Yerkes-Dodson)** :
  - Un niveau de stress minimal est indispensable à la vigilance.
  - Un stress trop élevé ou la panique entraîne une surcharge cognitive, une vision en tunnel et un blocage décisionnel.
- **Conscience de la situation (Situational Awareness)** :
  - Compréhension en temps réel de ce qui s'est passé, de ce qui se passe actuellement et anticipation des 5 à 10 minutes à venir.
  - Sa perte est la cause première des accidents en aviation générale (déviation de trajectoire, panne d'essence, entrée accidentelle en IMC).

### 3. Les 5 Attitudes Dangereuses en Pilotage (et leurs Antidotes)
La FAA et l'EASA identifient cinq traits de comportement psychologique à risque :

| Attitude dangereuse | Pensée type | Antidote mental |
| :--- | :--- | :--- |
| **Anti-autorité** | *"Les règles ne s'appliquent pas à moi."* | Suivre les règles : elles sont écrites avec l'expérience et le sang des accidents passés. |
| **Impulsivité** | *"Fais quelque chose tout de suite !"* | Pas si vite : réfléchis d'abord, applique la méthode "Aviate, Navigate, Communicate". |
| **Invulnérabilité** | *"Les accidents, ça n'arrive qu'aux autres."* | Cela peut m'arriver à moi aussi : la physique ne fait pas d'exception. |
| **Macho** | *"Je vais leur montrer de quoi je suis capable."* | Prendre des risques inutiles est stupide, pas héroïque. |
| **Résignation** | *"À quoi bon, je n'y peux plus rien."* | Je ne suis pas impuissant : je cherche une solution active jusqu'au bout. |

### 4. Le Modèle TEM (Threat and Error Management)
Le cadre moderne de la sécurité des vols repose sur trois piliers :
1. **Menaces (Threats)** : Facteurs environnementaux externes imprévus (météo dégradée, rafales de vent, trafic dense, passager anxieux). Le pilote doit les anticiper.
2. **Erreurs (Errors)** : Déviations commises par le pilote (mauvaise sélection de fréquence, oubli d'un item de check-list, arrondi trop haut). Le pilote doit les détecter et les corriger.
3. **État Indésirable de l'Aéronef (Undesired Aircraft State - UAS)** : Conséquence d'une erreur non corrigée (vitesse trop basse en étape de base, avion non aligné). Nécessite une reprise en main immédiate (ex: remise de gaz).`,
      keyTakeaways: [
        "Limite d'alcoolémie : 0,2 g/l de sang, minimum 8 à 12h après absorption d'alcool.",
        "Monoxyde de carbone (CO) : inodore et mortel -> couper immédiatement le chauffage cabine et ventiler au maximum.",
        "Les 5 attitudes dangereuses : Anti-autorité, Impulsivité, Invulnérabilité, Macho, Résignation.",
        "Conscience de la situation : anticiper le vol avec un temps d'avance.",
        "Modèle TEM : Gérer les menaces externes pour éviter les erreurs conduisant à un état indésirable."
      ]
    }
  ],
  summaryCards: [
    {
      id: '040-sc1',
      moduleId: '040',
      title: 'Délais après Plongée Sous-Marine',
      keyPoints: [
        'Plongée loisir simple SANS palier de décompression : 12 heures minimum avant de voler',
        'Plongée profonde ou AVEC paliers de décompression : 24 heures minimum avant de voler',
        'Raison vitale : Prévenir le dégazage de l’azote dissous dans le sang (mal de décompression / embolie)'
      ],
      alertNote: 'Ne jamais voler après une plongée sans respecter ces délais au risque de paralysie ou d’accident vasculaire cérébral !'
    },
    {
      id: '040-sc2',
      moduleId: '040',
      title: 'Hypoxie vs Hyperventilation',
      keyPoints: [
        'Hypoxie : Déficit d’apport d’O2 en altitude (pression partielle d’O2 réduite). Symptôme clé : fausse sensation de bien-être (euphorie) et perte de jugement critique.',
        'Hyperventilation : Élimination excessive de CO2 due à l’angoisse ou au stress. Picotements aux extrémités, crampes.',
        'Action hyperventilation : Ralentir le rythme ventilatoire, respirer calmement.'
      ]
    }
  ],
  questions: [
    {
      id: '040-q1',
      moduleId: '040',
      question: 'Combien de temps un pilote doit-il attendre avant d’entreprendre un vol après avoir effectué une plongée sous-marine nécessitant des paliers de décompression ?',
      options: ['Au moins 4 heures', 'Au moins 8 heures', 'Au moins 12 heures', 'Au moins 24 heures'],
      correctAnswer: 3,
      explanation: 'Pour éviter un accident de décompression dû à la formation de bulles d’azote dans les tissus et vaisseaux sanguins, l’intervalle minimal recommandé est de 24 heures après une plongée avec paliers de décompression (et 12 heures après une plongée sans palier).',
      difficulty: 'facile'
    },
    {
      id: '040-q2',
      moduleId: '040',
      question: 'Quel est l’un des symptômes les plus insidieux et dangereux de l’hypoxie d’altitude pour un pilote ?',
      options: [
        'Une douleur aiguë et immédiate aux tympans',
        'Une sensation d’euphorie et d’invulnérabilité masquant la baisse des facultés cognitives',
        'Une perte subite de la vision périphérique sans baisse de jugement',
        'Une crise d’éternuements répétée'
      ],
      correctAnswer: 1,
      explanation: 'L’hypoxie provoque une sensation trompeuse d’euphorie et de bien-être, ce qui empêche le pilote de réaliser la dégradation rapide de ses performances intellectuelles, de ses réflexes et de sa prise de décision.',
      difficulty: 'moyen'
    },
    {
      id: '040-q3',
      moduleId: '040',
      question: 'En vol à vue (VFR), vous observez un autre avion dont la position relative sur votre pare-brise reste rigoureusement fixe. Que devez-vous en déduire ?',
      options: [
        'L’autre avion vole à la même vitesse dans la même direction que vous',
        'Les deux aéronefs sont sur une trajectoire de collision directe imminente',
        'L’avion est beaucoup trop loin pour présenter le moindre danger',
        'L’autre avion est en train de s’éloigner verticalement'
      ],
      correctAnswer: 1,
      explanation: 'Lorsqu’un aéronef en vol grossit sans déplacement angulaire par rapport à un point fixe de la verrière, la géométrie du rapprochement indique une trajectoire de collision constante.',
      difficulty: 'facile'
    },
    {
      id: '040-q4',
      moduleId: '040',
      question: 'Pourquoi est-il fortement déconseillé de piloter lorsqu’on souffre d’une rhinopharyngite ou d’une sinusite aiguë ?',
      options: [
        'L’odorat du pilote est indispensable pour vérifier la richesse du mélange',
        'La trompe d’Eustache bouchée empêche l’équilibrage des pressions, risquant de provoquer un barotraumatisme tympanique violent à la descente',
        'La température corporelle perturbe le fonctionnement du transpondeur',
        'La salive modifie la vision des couleurs sur les instruments de bord'
      ],
      correctAnswer: 1,
      explanation: 'L’inflammation des muqueuses obstrue la trompe d’Eustache reliant l’arrière-gorge à l’oreille moyenne. À la descente, l’air ne peut plus pénétrer dans l’oreille moyenne, provoquant une dépression douloureuse, une surdité temporaire et un risque de perforation tympanique.',
      difficulty: 'facile'
    }
  ]
};
