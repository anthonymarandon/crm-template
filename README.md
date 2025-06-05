# Template d'Application Next.js 15 avec TypeScript

Ce template offre une base solide pour démarrer rapidement un projet Next.js avec TypeScript.

## 🚀 Étape 1&nbsp;: Installation

Dans un terminal, exécutez&nbsp;:

1. **Clonez le dépôt puis placez‑vous dans le dossier**
   ```bash
   git clone https://github.com/anthonymarandon/crm-template.git
   cd crm-template
   ```

2. **Installez les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Configurez la base de données**

   Le projet utilise Prisma comme ORM. Ajoutez un fichier `.env` à la racine avec l'URL de connexion (PostgreSQL doit être installé localement ou disponible en ligne) :

   ```env
   DATABASE_URL="postgresql://postgres:(votre_mot_de_passe)@localhost:5432/(nom_db)?schema=public"
   ```

4. **Générez le schéma Prisma**

   ```bash
   npx prisma generate
   ```

5. **Initialisez la base de données**

   ```bash
   npx prisma migrate dev --name init
   ```

6. **Lancez le serveur de développement**

   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

7. **Sécurité nécessaire pour la connexion**

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

Le projet s'articule principalement autour du dossier `src`.  
Vous trouverez ci-dessous un résumé des fonctionnalités ainsi qu'un aperçu de l'arborescence :

### Fonctionnalités principales

- Page d'accueil avec présentation
- Système d'authentification complet (connexion/inscription)
- Tableau de bord utilisateur
- Gestion des sessions
- Système de déconnexion

### Arborescence des dossiers

```
📦 crm-template
├── src/                 # Code source principal
│   ├── app/             # Routes et pages Next.js
│   │   ├── (auth)/      # Groupe de routes d'authentification
│   │   │   ├── login/       # Page de connexion
│   │   │   └── register/    # Page d'inscription
│   │   ├── dashboard/   # Tableau de bord utilisateur
│   │   ├── api/         # Routes API Next.js
│   │   └── layout.tsx   # Layout principal de l'application
│   ├── lib/             # Utilitaires et fonctions partagées
│   │   ├── auth/        # Fonctions d'authentification
│   │   └── utils/       # Fonctions utilitaires
│   └── types/           # Définitions TypeScript
├── prisma/              # Configuration de la base de données
│   ├── schema.prisma    # Schéma de la base de données
│   └── migrations/      # Migrations Prisma
├── public/              # Fichiers statiques
│   └── assets/          # Images, fonts, etc.
├── .env                 # Variables d'environnement
├── next.config.ts       # Configuration Next.js
├── package.json         # Dépendances et scripts
└── tsconfig.json        # Configuration TypeScript
```

## 🚀 Démarrage Rapide

Après avoir suivi les étapes ci-dessus, ouvrez votre navigateur à l'adresse :
- http://localhost:3000 pour voir l'application

## 📝 Notes

- Assurez-vous d'avoir Node.js 18 ou supérieur installé
- Le projet utilise TypeScript pour une meilleure maintenabilité

## 🚀 Déploiement avec Netlify

Le projet est prêt pour un déploiement simple sur Netlify.

- Le fichier `netlify.toml` est déjà fourni
- Les paramètres de build sont préconfigurés
- Les variables d'environnement se définissent directement dans l'interface Netlify

Pour déployer&nbsp;:
1. Connectez ce dépôt GitHub à Netlify
2. Laissez Netlify détecter automatiquement la configuration
3. Renseignez vos variables d'environnement
4. Lancez le déploiement

À chaque push sur la branche principale, un nouveau déploiement sera effectué automatiquement.
