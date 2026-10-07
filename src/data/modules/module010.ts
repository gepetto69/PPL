import type { PPLModule } from '../../types/ppl';

export const module010: PPLModule = {
  id: '010',
  code: '010',
  name: 'Réglementation et Droit Aérien',
  shortName: 'Réglementation',
  iconName: 'Scale',
  color: 'blue',
  description: 'Conventions internationales (OACI), réglementation européenne (EASA Part-FCL, Part-NCO, SERA), licences PPL/LAPL, espaces aériens A à G, règles VFR, emport de documents et responsabilités du commandant de bord.',
  examQuestionsCount: 24,
  examDurationMinutes: 35,
  chapters: [
    {
      id: '010-ch1',
      moduleId: '010',
      title: 'Organisations, Licences (PPL/LAPL) et Aptitude Médicale',
      readTime: '9 min',
      content: `### 1. Le Cadre Réglementaire : OACI, EASA et DGAC
L'aviation civile mondiale et européenne s'organise autour d'institutions hiérarchisées :
- **OACI (Organisation de l'Aviation Civile Internationale)** : Créée par la **Convention de Chicago de 1944**, agence de l'ONU siégeant à Montréal. Elle édicte les **Annexes** (SARPs - Standards and Recommended Practices) qui harmonisent l'aviation mondiale : Annexe 1 (Licences du personnel), Annexe 2 (Règles de l'air), Annexe 6 (Exploitation technique), Annexe 8 (Navigabilité).
- **EASA (European Union Aviation Safety Agency)** : Agence européenne de la sécurité aérienne basée à Cologne. Elle rédige la réglementation commune applicable dans tous les pays membres :
  - **Part-FCL** (Flight Crew Licensing) : licences et qualifications des pilotes.
  - **Part-MED** : normes médicales.
  - **SERA** (Standardised European Rules of the Air) : règles de l'air unifiées.
  - **Part-NCO** (Non-Commercial Operations with other than complex motor-powered aircraft) : règles opérationnelles pour l'aviation générale privée.
- **DGAC (Direction Générale de l'Aviation Civile)** : Autorité nationale française (DSAC) chargée de veiller à l'application des règlements européens, de délivrer les titres aéronautiques et de gérer les espaces aériens nationaux.

:::definition Souveraineté de l'Espace Aérien (Convention de Chicago Art. 1)
Chaque État contractant possède la souveraineté complète et exclusive sur l'espace aérien au-dessus de son territoire et de ses eaux territoriales adjacentes.
:::

### 2. La Licence de Pilote Privé PPL(A) vs LAPL(A)
La licence PPL(A) permet de voler sans rémunération sur des avions ou motoplaneurs dans le monde entier, sous réserve du respect des privilèges de la licence.

#### Privilèges et conditions d'accès :
- **Âge minimal** : **16 ans révolus** pour effectuer le premier vol solo, **17 ans révolus** le jour de la délivrance de la licence.
- **Formation minimale requise (Part-FCL.210.A)** :
  - Au moins **45 heures d'instruction en vol** sur avion (dont un maximum de 5 heures peut être effectué sur simulateur certifié FSTD).
  - Au moins **25 heures en double commande** avec un instructeur qualifié (FI).
  - Au moins **10 heures en solo supervisé**, comprenant obligatoirement :
    - Au moins 5 heures de vol en campagne en solo.
    - Au moins **un vol de navigation solo d'au moins 270 km (150 NM)** au cours duquel deux atterrissages complets avec arrêt sont effectués sur deux aérodromes différents de celui de départ.

:::piege Différence PPL(A) vs LAPL(A) à l'Examen
- **LAPL(A)** (Light Aircraft Pilot Licence) : valable en Europe uniquement, 30 heures de vol requises, limité à 4 personnes à bord (pilote + 3 passagers) et masse maximale MTOW de 2 000 kg.
- **PPL(A)** : licence OACI reconnue mondialement, sans limitation intrinsèque de masse (dépend des qualifications de classe ou de type détenues), permet d'ajouter des qualifications IFR (vol aux instruments), multimoteurs (MEP), ou d'évoluer vers le CPL professionnel.
:::

### 3. La Qualification de Classe SEP (Single Engine Piston)
La qualification de classe monomoteur à piston terrestre SEP(terre) est rattachée à la licence :
- **Validité** : **24 mois (2 ans)**.
- **Prorogation (avant expiration)** : Pour proroger sa qualification SEP sans passer d'examen en vol, le pilote doit, dans les **12 mois précédant la date d'expiration** :
  1. Avoir accompli au moins **12 heures de vol** sur la classe SEP ou TMG, dont au moins **6 heures en tant que commandant de bord (PIC)**.
  2. Avoir effectué au moins **12 décollages et 12 atterrissages**.
  3. Avoir réalisé un **vol d'entraînement d'au moins 1 heure** avec un instructeur de vol (FI) (ce vol peut être remplacé par la réussite à un contrôle de compétences ou une épreuve pratique sur une autre classe/type).
  - *Alternative* : Passer un contrôle de compétences (Proficiency Check) avec un examinateur FE(A) dans les 3 mois précédant l'expiration.
- **Renouvellement (après expiration)** : Si la date de fin de validité est dépassée même d'un jour, la prorogation sur expérience n'est plus possible ! Le pilote doit obligatoirement suivre une évaluation/remise à niveau en aéroclub ou ATO/DTO puis réussir un contrôle de compétences avec un examinateur FE(A).

:::memo Prorogation vs Renouvellement
- **Prorogation** = La qualification est encore EN COURS de validité (expérience récente 12h + 1h FI dans la dernière année).
- **Renouvellement** = La qualification est PÉRIMÉE (test en vol obligatoire avec un FE).
:::

### 4. Emport de Passagers et Règle des 90 Jours
Un titulaire du PPL(A) ne peut agir comme commandant de bord transportant des passagers que s'il respecte l'expérience récente suivante (Part-FCL.060) :
- Avoir effectué, dans les **90 jours précédents**, au moins **3 décollages et 3 atterrissages** en tant que pilote aux commandes sur un avion du même type ou de la même classe.
- **Emport de passagers de nuit** : Au moins 1 de ces 3 décollages et atterrissages doit avoir été accompli **de nuit**, à moins que le pilote ne soit titulaire d'une qualification de vol aux instruments (IR).

### 5. Aptitude Médicale du Pilote (Part-MED)
Tout pilote en fonction de commandant de bord doit être titulaire d'un certificat médical aéronautique valide adapté à sa licence :
- **PPL(A)** : Certificat médical de **Classe 2** (ou Classe 1 professionnelle).
- **Périodicité de validité du certificat de Classe 2** :
  - **60 mois (5 ans)** : si le pilote a moins de 40 ans le jour de l'examen (ou jusqu'à son 42e anniversaire si délivré à 39 ans).
  - **24 mois (2 ans)** : entre 40 ans et 50 ans (ou jusqu'au 51e anniversaire).
  - **12 mois (1 an)** : après 50 ans révolus.

:::piege Diminution de l'Aptitude Médicale (Part-MED.A.020)
Le pilote a l'obligation légale de suspendre l'exercice de ses privilèges de vol sans attendre :
- En cas de maladie, blessure ou intervention chirurgicale de plus de 21 jours.
- En cas de grossesse constatée.
- Dès lors qu'il prend un traitement médicamenteux incompatible avec la sécurité des vols.
Le médecin agréé doit être consulté avant toute reprise des vols.
:::`,
      keyTakeaways: [
        "PPL(A) : 17 ans minimum pour la licence, 16 ans pour le solo, 45h de vol minimum dont 25h en double et 10h solo.",
        "Navigation solo obligatoire : au moins 270 km (150 NM) avec 2 atterrissages complets sur deux aérodromes extérieurs.",
        "Validité SEP : 24 mois. Prorogation par 12h de vol (dont 6h PIC) + 12 atterrissages + 1h FI dans les 12 derniers mois.",
        "Emport de passagers : 3 décollages et 3 atterrissages dans les 90 jours précédents sur le même type/classe.",
        "Validité Classe 2 : 5 ans (<40 ans), 2 ans (40 à 50 ans), 1 an (>50 ans)."
      ]
    },
    {
      id: '010-ch2',
      moduleId: '010',
      title: 'Règles de l’Air (SERA) et Classification des Espaces Aériens',
      readTime: '10 min',
      diagramType: 'airspaces',
      content: `### 1. Classification Internationale des Espaces Aériens (Classes A à G)
Le règlement européen SERA (SERA.6001) divise l'espace aérien en 7 classes de A à G :

| Classe | Statut | Accès VFR | Clairance ATC requise | Séparation fournie au VFR | Radio / Transpondeur |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **A** | Contrôlé | **INTERDIT** | Non applicable | Non applicable | Non applicable |
| **B** | Contrôlé | Autorisé | **OUI** | Séparé de TOUS les vols (IFR et VFR) | 2 voies + Mode S |
| **C** | Contrôlé | Autorisé | **OUI** | Séparé des IFR (info de trafic sur autres VFR) | 2 voies + Mode S |
| **D** | Contrôlé | Autorisé | **OUI** | Aucune séparation VFR (info de trafic sur IFR et VFR) | 2 voies + Mode S |
| **E** | Contrôlé | Autorisé | **NON** (de jour) | Aucune séparation VFR (info si charge ATC le permet) | Recommandée (TMZ si spécifié) |
| **F** | Non contrôlé | Autorisé | NON | Service consultatif (non utilisé en France) | - |
| **G** | Non contrôlé | Autorisé | **NON** | Information de vol et alerte uniquement | Non obligatoire (sauf TMZ/RMZ) |

:::definition Clairance Radio en Espace Contrôlé (B, C, D)
Une clairance de contrôle est une autorisation délivrée par un organisme de la circulation aérienne (ATC).
En VFR, vous ne devez **JAMAIS** pénétrer dans un espace de classe B, C ou D sans avoir reçu expressément la clairance du contrôleur (ex: "F-ABCD, transpondeur 4521, autorisé entrée de zone classe D via point S, 1500 ft QNH 1018"). Un simple accusé de réception de votre indicatif ne constitue PAS une clairance !
:::

### 2. Conditions Météorologiques de Vol à Vue (VMC - SERA.5001)
Pour voler sous régime VFR, le pilote doit impérativement maintenir les conditions VMC :

#### A. Au-dessus de 3 000 ft AMSL ou au-dessus de 1 000 ft sol (la valeur la plus élevée) :
- **Au-dessus du FL 100 (10 000 ft AMSL)** :
  - Visibilité en vol minimale : **8 km**.
  - Distance minimale aux nuages : **1 500 m horizontalement** et **1 000 ft (300 m) verticalement**.
- **Sous le FL 100** :
  - Visibilité en vol minimale : **5 km**.
  - Distance minimale aux nuages : **1 500 m horizontalement** et **1 000 ft (300 m) verticalement**.

#### B. À ou sous 3 000 ft AMSL ou à ou sous 1 000 ft sol (la valeur la plus élevée) :
- **En espace contrôlé (Classes B, C, D, E)** :
  - Visibilité en vol minimale : **5 km**.
  - Distance aux nuages : **1 500 m horizontalement** et **1 000 ft (300 m) verticalement**.
- **En espace non contrôlé (Classe G)** :
  - Visibilité minimale : **5 km** (réductible à **1 500 m** si la vitesse indiquée est \(\le 140\text{ kt}\) pour voir et éviter les obstacles).
  - Distance aux nuages : **Hors des nuages et en vue de la surface (sol ou eau)**.

:::piege Piège Examen DGAC sur la Classe E vs Classe G
En classe E, l'espace est CONTRÔLÉ pour les vols IFR. Par conséquent, même à 2 000 ft sol, les minima météo VFR exigent une visibilité de 5 km ET le respect strict de la distance aux nuages (1 500 m horizontal et 1 000 ft vertical) ! Seule la classe G autorise le régime "hors des nuages en vue du sol" sous 3 000 ft AMSL.
:::

### 3. Le VFR Spécial (SERA.5010)
Dans une zone de contrôle d'aérodrome (CTR) de classe B, C, D ou E, lorsque les conditions météo sont inférieures aux minima VMC, le contrôleur peut délivrer une clairance de **VFR Spécial** :
- **Minima stricts pour le pilote** :
  - Visibilité en vol minimale : **1 500 m** (ou au sol 1 500 m si l'information est rapportée).
  - Plafond nuageux minimal pour décoller ou atterrir : **600 ft (180 m)**.
  - Vol effectué **hors des nuages et constamment en vue de la surface**.
  - Vitesse indiquée maximale : **140 kt IAS** pour permettre une détection visuelle suffisante.

### 4. Zones à Statut Particulier (P, D, R, ZIT, TMZ, RMZ)
- **Zone P (Prohibited - Interdite)** : Pénétration strictement interdite à tout aéronef civil en tout temps (ex: bases militaires sensibles, sites stratégiques).
- **Zone R (Restricted - Réglementée)** : Pénétration subordonnée au respect de conditions strictes ou interdite pendant les créneaux d'activité publiés (consulter la carte VAC, les NOTAM et le réseau très basse altitude RTBA).
- **Zone D (Dangerous - Dangereuse)** : Danger pour la navigation (tirs d'artillerie, largages parachutistes, activités pyrotechniques). La pénétration n'est pas formellement interdite par la loi mais vivement déconseillée sans clairance ou coordination.
- **ZIT (Zone Interdite Temporaire)** : Établie notamment autour des centrales nucléaires (rayon typique 5 km, surface jusqu'à 3 500 ft sol).
- **TMZ (Transponder Mandatory Zone)** : Transpondeur Mode S actif obligatoire pour pénétrer.
- **RMZ (Radio Mandatory Zone)** : Contact radio bidirectionnel obligatoire avant pénétration.`,
      keyTakeaways: [
        "Classe A : strictement INTERDITE aux vols VFR.",
        "Classes B, C, D : clairance ATC et contact radio obligatoires avant de pénétrer.",
        "Classe E : contrôlé pour les IFR mais libre d'accès pour les VFR de jour sans clairance.",
        "Minima VMC : 8 km de visibilité au-dessus du FL 100 ; 5 km sous le FL 100 avec 1 500 m / 1 000 ft des nuages.",
        "En classe G sous 3 000 ft AMSL : 1 500 m de visibilité si IAS <= 140 kt, hors nuages en vue du sol.",
        "VFR Spécial en CTR : visibilité minimale 1 500 m, plafond minimal 600 ft, hors nuages en vue du sol."
      ]
    },
    {
      id: '010-ch3',
      moduleId: '010',
      title: 'Services ATS, Transpondeur, Altimétrie et Panne Radio',
      readTime: '9 min',
      diagramType: 'altimeter',
      content: `### 1. Les Trois Niveaux de Services de la Circulation Aérienne (ATS)
Les organismes au sol fournissent des services de niveau croissant :
1. **Service de Contrôle de la Circulation Aérienne (ATC)** : Assuré par une Tour de contrôle (TWR), un Contrôle d'approche (APP) ou un Centre de contrôle en route (ACC/CCR). Il émet des **instructions impératives et des clairances** pour prévenir les collisions entre aéronefs.
2. **Service d'Information de Vol (AFIS - Aerodrome Flight Information Service)** : Présent sur certains aérodromes non contrôlés. L'agent AFIS donne des paramètres essentiels (piste en service, vent, QNH, trafic connu) sous forme d'**informations**, mais ne délivre AUCUNE clairance ! La responsabilité de la séparation incombe intégralement au pilote.
3. **Auto-information** : En l'absence d'organisme AFIS ou de contrôleur (ou en dehors des heures d'ouverture), les pilotes s'informent mutuellement en diffusant leurs positions et intentions sur la fréquence d'auto-information publiée (ou sur la fréquence nationale **123.500 MHz** par défaut en France).

### 2. Le Transpondeur et ses Modes (SERA.13001)
Le transpondeur est un émetteur-récepteur secondaire embarqué qui répond aux interrogations radar au sol :
- **Mode A** : Transmet un code d'identification à 4 chiffres (de 0 à 7, soit 4096 combinaisons).
- **Mode C** : Transmet en plus l'**altitude-pression de l'aéronef** calée sur 1013,25 hPa par tranche de 100 ft.
- **Mode S** : Transmet une adresse d'immatriculation numérique unique à 24 bits, une altitude-pression avec une résolution fine de 25 ft, et des paramètres de vol (cap, vitesse). Obligatoire dans la plupart des TMA et TMZ en Europe.

:::memo Les 4 Codes Transpondeurs Vitaux de l'Examen
- **7000** : Code standard VFR en France et en Europe (quand aucun code n'est assigné par l'ATC).
- **7700** : Détresse générale / Urgence vitale (MAYDAY / PAN PAN).
- **7600** : Panne des télécommunications (NORDO - perte de communication radio).
- **7500** : Acte d'intervention illicite / Piraterie aérienne (Détournement d'aéronef).
*Mnémonique en anglais : 75 he's alive (knife), 76 radio fix, 77 going to heaven.*
:::

### 3. Altimétrie Réglementaire et Règle Semi-Circulaire
Pour éviter les collisions en croisière, l'altitude de vol est réglementée :
- **Altitude de Transition (TA)** : Altitude publiée au-dessus de laquelle on quitte le calage QNH pour adopter le calage standard international **1013,25 hPa**, exprimé en **Niveaux de Vol (FL - Flight Levels)**.
- **Niveau de Transition (TRL)** : Premier niveau de vol utilisable au-dessus de la surface de transition.
- **Couche de transition** : Espace aérien compris entre la TA et le TRL.

:::formule La Règle Semi-Circulaire en Vol VFR (au-dessus de 3 000 ft sol)
En vol VFR de croisière au-dessus de 3 000 ft AGL, le pilote doit choisir un niveau de vol conforme à sa **Route Magnétique (Rm)** :
- **Route Magnétique de 000° à 179° (Vers l'Est)** : Niveau de vol **IMPAIR + 500 ft** (ex: FL 35, FL 55, FL 75, FL 95).
- **Route Magnétique de 180° à 359° (Vers l'Ouest)** : Niveau de vol **PAIR + 500 ft** (ex: FL 45, FL 65, FL 85).
*(En IFR, les niveaux sont entiers : FL 50, FL 60, etc. Le décalage de +500 ft assure une séparation verticale de sécurité constante entre vols IFR et VFR).*
:::

### 4. Procédure en Cas de Panne Radio en VFR (Code 7600)
Si la liaison radioélectrique est perdue en cours de vol :
1. Afficher immédiatement le code **7600** au transpondeur.
2. Vérifier les connexions casque, potentiomètres de volume, sélecteur de boîte de mélange et fréquence active.
3. Émettre à l'aveugle ses intentions en répétant deux fois : *"Transmettant à l'aveugle par suite de panne récepteur..."*.
4. **Rester en conditions VMC** et poursuivre le vol vers l'aérodrome approprié le plus proche.
5. Scruter les signaux lumineux émis par la tour de contrôle de l'aérodrome d'atterrissage :

| Signal lumineux | Aéronef en vol | Aéronef au sol |
| :--- | :--- | :--- |
| **Vert continu** | Autorisé à atterrir | Autorisé à décoller |
| **Rouge continu** | Cédez le passage, continuez le circuit | Arrêtez-vous immédiatement |
| **Vert intermittent** | Revenez pour atterrir | Autorisé à circuler (taxi) |
| **Rouge intermittent** | Aérodrome dangereux, n'atterrissez pas | Dégagez la piste en service |
| **Blanc intermittent** | Atterrissez ici et gagnez l'aire de trafic | Retournez à votre point de départ |
| **Fusée pyrotechnique rouge** | N'atterrissez pas pour le moment (danger) | - |`,
      keyTakeaways: [
        "ATC délivre des ordres et des clairances ; l'AFIS ne donne que des informations ; en auto-information le pilote s'annonce.",
        "Codes Transpondeur : 7000 (VFR standard), 7700 (Détresse), 7600 (Panne radio), 7500 (Piraterie).",
        "Règle semi-circulaire VFR : Rm 000° à 179° = Impair + 500 ft ; Rm 180° à 359° = Pair + 500 ft.",
        "Signaux lumineux TWR : Vert continu = autorisé à atterrir / décoller ; Rouge continu = cédez le passage / stop."
      ]
    },
    {
      id: '010-ch4',
      moduleId: '010',
      title: 'Priorités, Documents de Bord et Responsabilités du Commandant de Bord',
      readTime: '8 min',
      content: `### 1. Hauteurs Minimales de Survol (SERA.5005)
Sauf pour les nécessités du décollage ou de l'atterrissage, le vol VFR ne doit pas être effectué :
- **Règle générale en campagne** : À une hauteur inférieure à **500 ft (150 m) au-dessus du sol ou de l'eau**, et à une distance minimale de 150 m de toute personne, véhicule, navire ou obstacle isolé.
- **Au-dessus des villes, agglomérations ou rassemblements de plein air** : À une hauteur minimale de **1 000 ft (300 m) au-dessus de l'obstacle le plus élevé** situé dans un rayon de **600 m** autour de l'aéronef, et permettant toujours en cas de panne de moteur un atterrissage d'urgence sans risque pour les personnes et biens au sol.
- **Parcs nationaux et réserves naturelles** : Hauteur minimale de survol généralement fixée à **1 000 m (3 300 ft)** au-dessus du sol.

### 2. Règles de Priorité de Passage en Vol (SERA.3210)
Lorsqu'il existe un risque d'abordage entre deux aéronefs :
- **Convergence de trajectoires** : L'aéronef qui a l'autre à sa **DROITE** doit lui céder le passage (priorité à droite).
- **Règle de catégorie d'aéronef** (le moins manœuvrable a la priorité) :
  1. **Ballons libres** (priorité absolue sur tous les autres engins).
  2. **Planeurs**.
  3. **Dirigeables**.
  4. **Avions remorqueurs** tirant un planeur ou une banderole.
  5. **Avions et hélicoptères motopropulsés standard**.
- **Face à face** : Lorsque deux aéronefs se rapprochent de face ou presque, chacun doit obliquer vers sa **DROITE**.
- **Dépassement** : Un aéronef qui en dépasse un autre par l'arrière doit le dépasser par sa **DROITE**, et l'aéronef dépassé conserve sa priorité de trajectoire.
- **Atterrissage** : L'aéronef le plus bas sur le plan d'approche finale a la priorité. Toutefois, un aéronef conscient qu'un autre se trouve en situation d'urgence doit s'effacer : un appareil en situation de détresse a **priorité absolue sur TOUS les aéronefs** sans exception !

### 3. Documents Obligatoires à Bord de l'Aéronef (Part-NCO.GEN.135)
Avant d'entreprendre un vol, le commandant de bord doit s'assurer de la présence physique ou électronique valide à bord :
- **Documents de l'aéronef** :
  1. Le **Certificat d'Immatriculation** (CI).
  2. Le **Certificat de Navigabilité** (CDN) accompagné de son **Certificat d'Examen de Navigabilité (ARC / CEN)** en état de validité.
  3. La **Licence de Station d'Aéronef (LSA)** pour les équipements radioélectriques.
  4. Le **Certificat de Limitation de Nuisances (CLN)** ou acoustique.
  5. Le **Manuel de Vol approuvé de l'avion (POH / AFM)** avec ses limites de masse et centrage.
  6. La **Fiche de Pesée** en cours de validité.
  7. L'attestation d'**Assurance Responsabilité Civile** conforme au règlement CE 785/2004.
  8. Le **Carnet de Route** de l'aéronef, complété après chaque vol.
- **Documents personnels du pilote** :
  1. Sa licence de vol valide avec la qualification de classe (SEP) en cours.
  2. Son certificat médical de Classe 2 (ou 1) en cours de validité.
  3. Une pièce d'identité officielle avec photographie.
  4. Les cartes aéronautiques de navigation à jour couvrant la route prévue et les dégagements.

:::definition Responsabilité Souveraine du Commandant de Bord (Part-NCO.GEN.105)
Le commandant de bord est responsable de la sécurité de tous les membres d'équipage, passagers et du chargement dès le moment où il monte à bord avec l'intention de voler jusqu'au moment où il quitte l'aéronef après le vol.
Il a l'autorité suprême pour refuser l'embarquement d'une personne ou dérouter le vol en cas de risque pour la sécurité.
:::`,
      keyTakeaways: [
        "Hauteur min : 500 ft sol en campagne ; 1 000 ft au-dessus de l'obstacle le plus haut (rayon 600 m) au-dessus des villes.",
        "Face à face : les deux aéronefs virent vers la DROITE.",
        "Convergence : priorité à DROITE. Dépassement : toujours par la DROITE.",
        "Hiérarchie : Ballon libre > Planeur > Dirigeable > Avion remorqueur > Avion motopropulsé standard.",
        "Priorité absolue en toutes circonstances à l'aéronef en détresse.",
        "Le commandant de bord a l'autorité souveraine pour la sécurité du vol."
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
        'Classe E : Contrôlé pour IFR, VFR libre sans clairance de jour',
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
        'Au moins 1 vol de contrôle de compétences avec un examinateur FE'
      ],
      correctAnswer: 1,
      explanation: 'La réglementation Part-FCL impose 3 atterrissages et 3 décollages dans les 90 jours précédents sur la même classe ou type pour pouvoir emporter des passagers de jour.',
      difficulty: 'moyen'
    },
    {
      id: '010-q4',
      moduleId: '010',
      question: 'Quelle est la durée de validité du certificat médical de Classe 2 pour un pilote âgé de 45 ans ?',
      options: ['12 mois (1 an)', '24 mois (2 ans)', '36 mois (3 ans)', '60 mois (5 ans)'],
      correctAnswer: 1,
      explanation: 'Pour un titulaire de certificat médical Classe 2, la validité est de 60 mois jusqu’à 40 ans, 24 mois entre 40 et 50 ans, et 12 mois au-delà de 50 ans.',
      difficulty: 'facile'
    },
    {
      id: '010-q5',
      moduleId: '010',
      question: 'En vol VFR, lorsque deux aéronefs de même catégorie se rapprochent de face, quelle manœuvre doivent-ils exécuter ?',
      options: [
        'L’aéronef le plus rapide oblique à droite, l’autre maintient son cap',
        'Chaque aéronef oblique vers sa droite',
        'Chaque aéronef oblique vers sa gauche',
        'L’aéronef le plus bas descend, le plus haut monte'
      ],
      correctAnswer: 1,
      explanation: 'Règle SERA 3210 : En rapprochement de face (face-à-face), chacun des deux aéronefs doit obliquer vers sa DROITE pour s’éloigner.',
      difficulty: 'facile'
    }
  ]
};
