# GitHub Actions Workflows

Ce dossier contient les workflows GitHub Actions pour automatiser certaines tâches du projet.

## Workflows disponibles

### Auto-respond to Issues (`issue-response.yml`)

Ce workflow répond automatiquement à toutes les nouvelles issues créées dans le dépôt.

**Déclencheur :** Création d'une nouvelle issue

**Action :** Ajoute automatiquement un commentaire de confirmation sur l'issue

**But :** 
- Confirmer la réception de l'issue
- Tester le système de notifications par e-mail de GitHub
- Fournir un retour immédiat aux utilisateurs qui créent des issues

**Configuration :**
- Utilise `actions/github-script@v7` pour interagir avec l'API GitHub
- Nécessite la permission `issues: write` (accordée automatiquement par GitHub Actions)

## Comment ça marche

Lorsqu'une nouvelle issue est créée, GitHub Actions déclenche automatiquement ce workflow qui :
1. Détecte la création de l'issue
2. Poste un commentaire automatique sur l'issue
3. Déclenche l'envoi d'un e-mail de notification à l'utilisateur

Cela permet de vérifier que les notifications GitHub fonctionnent correctement.
