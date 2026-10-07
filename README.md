# ✈️ PPL Théorie — Application de Préparation à l'Examen Pilote Privé d'Avion (EASA / DGAC)

Une application complète et moderne conçue pour réviser et réussir les examens théoriques du **PPL(A)** (Private Pilot Licence) et **LAPL(A)** selon le programme officiel européen EASA et la DGAC.

---

## 🌟 Fonctionnalités Principales

### 1. Les 9 Modules Officiels EASA / DGAC
Chaque module officiel dispose de son espace dédié avec son code standard et son contenu structuré :
- **010 — Réglementation et Droit Aérien** (SERA, licences, espaces A à G, VMC, priorités, hauteurs)
- **020 — Connaissance Générale des Aéronefs** (moteur 4 temps, double allumage magnétos, instruments Pitot-statique, gyroscopes)
- **030 — Performances et Préparation du Vol** (masse & centrage, CG avant/arrière, altitude-densité, réserves carburant)
- **040 — Performance Humaine et Limites** (hypoxie, barotraumatismes, oreille interne, illusions, délais plongée)
- **050 — Météorologie Aéronautique** (atmosphère ISA, cumulonimbus CB, brouillards, décodage METAR / TAF / TEMSI)
- **060 — Navigation Aérienne** (angles Rv -> Cv -> Cm -> Cc, facteur de base Fb, VOR, CDI, DME)
- **070 — Procédures Opérationnelles** (tour de piste standard, panne moteur en campagne, balises ELT)
- **080 — Principes du Vol (Aérodynamique)** (Bernoulli, Cz/Cx, finesse max, décrochage, facteur de charge virage $n = 1/\cos\phi$)
- **090 — Communications VFR** (alphabet OACI, collationnements obligatoires, PAN PAN vs MAYDAY, panne radio 7600)

### 2. Les 3 Volets d'Apprentissage par Module
1. 📖 **Théorie Complète** : Cours détaillés avec notions réglementaires, explications scientifiques et schémas dynamiques.
2. 📝 **Fiches Récapitulatives** : Mémos condensés, règles d'or, formules mathématiques indispensables et alertes pièges d'examen.
3. 🎯 **Exercices & QCM d'Entraînement** : QCM au format officiel 4 choix (A, B, C, D) avec correction immédiate et explications didactiques. Filtres pour revoir les erreurs et les questions sauvegardées.

### 3. Mode Examen Blanc Officiel
- Épreuve chronométrée simulant les conditions réelles de l'examen DGAC.
- Barème officiel : seuil de réussite fixé à **75%**.
- Choix entre examen blanc par module spécifique ou examen blanc général combinant tous les modules.
- Bilan détaillé des réponses avec explications complètes.

### 4. Suivi de Progression & Tableau de Bord
- Sauvegarde locale automatique (LocalStorage).
- Suivi du pourcentage de cours lus, de fiches mémorisées et du taux de réussite aux questions.
- Historique des sessions d'examens blancs.

---

## 🛠️ Stack Technique

- **Framework** : React 19 + TypeScript
- **Bundler** : Vite 8
- **Styles** : Tailwind CSS v4
- **Icônes** : Lucide React
- **Animations / Effets** : Canvas Confetti

---

## 🚀 Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Compiler pour la production
npm run build
```
