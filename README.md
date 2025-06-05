# 🚀 Template CRM Next.js 15 avec TypeScript

> Un template moderne et prêt à l'emploi pour démarrer rapidement votre application CRM avec Next.js 15, TypeScript et PostgreSQL.

## ✨ Fonctionnalités

- 🏠 **Page d'accueil** avec présentation moderne
- 🔐 **Authentification complète** (connexion/inscription/déconnexion)
- 📊 **Tableau de bord utilisateur** interactif
- 🛡️ **Gestion sécurisée des sessions** avec JWT
- 🎨 **Interface utilisateur moderne** et responsive
- 📱 **Optimisé mobile** et desktop

## 🛠️ Technologies

| Technologie | Version | Description |
|-------------|---------|-------------|
| **Next.js** | 15 | Framework React avec SSR |
| **TypeScript** | Latest | Typage statique |
| **Prisma** | 6.6.7 | ORM moderne |
| **PostgreSQL** | Latest | Base de données relationnelle |
| **JWT** | Latest | Authentification sécurisée |

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** 18+ ([Télécharger](https://nodejs.org/))
- **PostgreSQL** ([Installation](https://www.postgresql.org/download/))
- **Git** ([Installation](https://git-scm.com/downloads))

## 🚀 Installation Rapide

### 1️⃣ Cloner le Projet

```bash
git clone https://github.com/anthonymarandon/crm-template.git
cd crm-template
```

### 2️⃣ Installer les Dépendances

Choisissez votre gestionnaire de paquets préféré :

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
```

### 3️⃣ Configuration de l'Environnement

Créez le fichier `.env` à la racine du projet :

```env
# Base de données PostgreSQL
DATABASE_URL="postgresql://postgres:votre_mot_de_passe@localhost:5432/nom_de_votre_db?schema=public"

# Clé secrète JWT (générez une clé forte)
JWT_SECRET="votre_clé_secrète_très_longue_et_sécurisée"
```

> 💡 **Conseil de sécurité** : Utilisez un générateur de mots de passe pour créer une JWT_SECRET forte (minimum 32 caractères)

### 4️⃣ Configuration de la Base de Données

```bash
# Générer le client Prisma
npx prisma generate

# Créer et appliquer les migrations
npx prisma migrate dev --name init

# (Optionnel) Visualiser la base de données
npx prisma studio
```

### 5️⃣ Lancer l'Application

```bash
npm run dev
# ou yarn dev
# ou pnpm dev
```

🎉 **Votre application est maintenant accessible sur** [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
📦 crm-template/
├── 📂 src/                     # Code source principal
│   ├── 📂 app/                 # App Router Next.js 15
│   │   ├── 📂 (auth)/          # Routes d'authentification
│   │   │   ├── 📄 login/       # Page de connexion
│   │   │   └── 📄 register/    # Page d'inscription  
│   │   ├── 📂 dashboard/       # Tableau de bord protégé
│   │   ├── 📂 api/             # Routes API
│   │   ├── 📄 layout.tsx       # Layout global
│   │   └── 📄 page.tsx         # Page d'accueil
│   ├── 📂 lib/                 # Bibliothèques et utils
│   │   ├── 📂 auth/            # Logique d'authentification
│   │   └── 📂 utils/           # Fonctions utilitaires
│   └── 📂 types/               # Types TypeScript
├── 📂 prisma/                  # Configuration BDD
│   ├── 📄 schema.prisma        # Schéma de données
│   └── 📂 migrations/          # Historique des migrations
├── 📂 public/                  # Fichiers statiques
├── 📄 .env                     # Variables d'environnement
├── 📄 next.config.ts           # Configuration Next.js
└── 📄 package.json             # Dépendances du projet
```

## 🚀 Déploiement sur Netlify

Le projet est pré-configuré pour Netlify avec le fichier `netlify.toml` inclus.

### Étapes de déploiement :

1. **Connecter le dépôt** : Liez votre repository GitHub à Netlify
2. **Configuration automatique** : Les paramètres de build sont détectés automatiquement
3. **Variables d'environnement** : Ajoutez vos variables dans l'interface Netlify :
   - `DATABASE_URL`
   - `JWT_SECRET`
4. **Déployer** : Le déploiement se lance automatiquement !

> ✅ **Déploiement automatique** : Chaque push sur votre branche principale déclenche un nouveau déploiement.

## 🔧 Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile l'application pour la production |
| `npm run start` | Lance l'application en production |
| `npm run lint` | Vérifie la qualité du code |
| `npx prisma studio` | Interface graphique pour la BDD |
| `npx prisma migrate dev` | Crée et applique une migration |

## 🛡️ Sécurité

### Bonnes Pratiques Implémentées :

- ✅ **JWT sécurisé** avec clés d'environnement
- ✅ **Validation des données** côté serveur
- ✅ **Protection des routes** sensibles
- ✅ **Hashage des mots de passe**
- ✅ **Variables d'environnement** pour les secrets

### Recommandations :

- 🔐 Ne jamais commiter le fichier `.env`
- 🔑 Utiliser des clés JWT fortes (32+ caractères)
- 🔄 Renouveler régulièrement vos clés secrètes
- 📝 Auditer régulièrement les dépendances

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. 🍴 Forker le projet
2. 🌿 Créer une branche pour votre fonctionnalité
3. ✨ Commiter vos changements
4. 📤 Pousser vers la branche
5. 🔄 Ouvrir une Pull Request

## 📞 Support

- 📧 **Email** : [votre-email@example.com]
- 🐛 **Issues** : [GitHub Issues](https://github.com/anthonymarandon/crm-template/issues)
- 📚 **Documentation** : [Wiki du projet](https://github.com/anthonymarandon/crm-template/wiki)

---

<div align="center">

**⭐ Si ce template vous aide, n'hésitez pas à lui donner une étoile !**

Made with ❤️ by [Anthony Marandon](https://github.com/anthonymarandon)

</div>
