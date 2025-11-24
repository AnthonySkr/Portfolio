# Portfolio - Anthony Skrzypczak

Bienvenue dans mon portfolio ! Ce site a été conçu pour présenter mon parcours, mes projets, et une mini application interactive.

## 🚀 Stack utilisée

- Vue 3
- Vite
- SCSS pour les styles
- Vue Router

## 🧑‍💻 Objectifs

- Présenter mon profil et mon parcours
- Mettre en avant mes projets
- Proposer une petite app interactive

## ▶️ Lancer le projet en local

```bash
# Cloner le repo
git clone https://github.com/AnthonySkr/Portfolio
cd Portfolio

# Installer les dépendances
cd frontend
npm install

# Lancer le serveur de développement
npm run dev

Accéder ensuite à http://localhost:5173
```

## 📁 Structure du projet

```
└── 📁Portfolio
    └── 📁.github
        └── 📁workflows           # GitHub Actions workflows
            └── issue-response.yml  → Réponse automatique aux issues
    └── 📁frontend
        └── 📁public
            ├── favicon.ico
        └── 📁src
            └── 📁assets            # Images et médias
            └── 📁components        # Composants réutilisables
            └── 📁router            # Définition des routes
            └── 📁stores            # Fichier pinia (si utilisé)
            └── 📁pages             # Pages principales du site
            └── 📁styles            # Fichiers SCSS
                ├── _variables.scss  → couleurs, tailles, etc.
                └── main.scss        → fichier principal importé dans App.vue
            ├── App.vue             # Composant racine
            ├── main.ts
        ├── index.html
    └── README.md
```

## ✨ À venir

- Ajouter une animation d’intro sur la page d’accueil

- Intégrer une mini app (type à définir)

- Déploiement
## 🤖 Automatisation

Ce projet utilise GitHub Actions pour automatiser certaines tâches :

- **Réponse automatique aux issues** : Lorsqu'une nouvelle issue est créée, un commentaire de confirmation est automatiquement ajouté pour confirmer la réception et tester les notifications par e-mail.

Plus d'informations dans le dossier [`.github/`](.github/README.md).
