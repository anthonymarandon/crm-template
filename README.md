# Template d'Application Next.js 15 avec TypeScript

Ce template est prêt à l'emploi et offre une base prête à l'emploi pour démarrer votre projet Next.js avec TypeScript.

## 🚀 Etape 1 : Installation

## Ouvez votre éditeur de code ou terminal au dossier de votre choix et exécutez les commandes suivantes :

1. Clonez le dépôt :
```bash
git clone https://github.com/anthonymarandon/crm-template.git
```

## Une fois le dépôt cloné, ouvrez le dossier et exécutez les commandes suivantes :

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Configuration de la Base de Données

Le projet utilise Prisma comme ORM. Vous pouvez configurer votre base de données en ajoutant le fichier `.env` dans le dossier racine du projet (Assurez vous au préalable d'avoir installé Postgres sur votre machine ou d'utiliser un service de base de données en ligne) :

```env
DATABASE_URL="postgresql://postgres:(votre_mot_de_passe)@localhost:5432/(nom_db)?schema=public"
```

4. générez le schema prisma pour que prisma puisse comprendre le schema de la base de données :
```bash
npx prisma generate
```

5. initialisez la base de données et le schema prisma :
```bash
npx prisma migrate dev --name init
```

6. Lancez le serveur de développement :
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

7. Sécurité nécessaire pour les fonctionnalités de connexion :

- Utilisez une clé JWT_SECRET forte dans votre fichier `.env`
```env
JWT_SECRET="votre_clé_secrète_pour_jwt"
```
- Ne partagez jamais vos clés d'environnement
- Suivez les bonnes pratiques de sécurité pour la gestion des sessions

## 🛠️ Technologies Utilisées

- Next.js 15
- TypeScript
- Prisma 6.6.7
- PostgreSQL
- JWT pour l'authentification

## 📁 Structure du Projet

Le projet est organisé dans un dossier `src` avec les fonctionnalités suivantes :

- Page d'accueil avec présentation
- Système d'authentification complet (connexion/inscription)
- Tableau de bord utilisateur
- Gestion des sessions
- Système de déconnexion

```
📦 crm-template (Racine du projet)
├── 📂 src (Code source principal)
│   ├── 📂 app (Routes et pages Next.js)
│   │   ├── 📂 (auth) (Groupe de routes authentification)
│   │   │   ├── 📂 login (Page de connexion)
│   │   │   └── 📂 register (Page d'inscription)
│   │   ├── 📂 dashboard (Tableau de bord utilisateur)
│   │   ├── 📂 api (Routes API Next.js)
│   │   └── 📄 layout.tsx (Layout principal de l'application)
│   ├── 📂 lib (Utilitaires et fonctions partagées)
│   │   ├── 📂 auth (Fonctions d'authentification)
│   │   └── 📂 utils (Fonctions utilitaires)
│   └── 📂 types (Définitions TypeScript)
├── 📂 prisma (Configuration de la base de données)
│   ├── 📄 schema.prisma (Schéma de la base de données)
│   └── 📄 migrations (Migrations de la base de données)
├── 📂 public (Fichiers statiques)
│   └── 📂 assets (Images, fonts, etc.)
├── 📄 .env (Variables d'environnement)
├── 📄 next.config.ts (Configuration Next.js)
├── 📄 package.json (Dépendances et scripts)
└── 📄 tsconfig.json (Configuration TypeScript)
```

## 🚀 Démarrage Rapide

Une fois l'installation terminée, accédez à :
- http://localhost:3000 pour voir l'application

## 📝 Notes

- Assurez-vous d'avoir Node.js 18+ installé
- Le projet utilise TypeScript pour une meilleure maintenabilité

## 🚀 Déploiement avec Netlify

Le projet est déjà configuré pour un déploiement facile sur Netlify :

- Le fichier `netlify.toml` est inclus dans le projet
- Les paramètres de build sont préconfigurés
- Les variables d'environnement peuvent être configurées directement dans l'interface Netlify

Pour déployer :
1. Connectez votre dépôt GitHub à Netlify
2. Les paramètres de build seront automatiquement détectés
3. Configurez vos variables d'environnement dans l'interface Netlify
4. Déployez !

Le déploiement se fera automatiquement à chaque push sur votre branche principale.
