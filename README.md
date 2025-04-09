**Pour télécharger cliquer sur l'une des étiquettes ci-dessous**

[![GitHub release](https://img.shields.io/github/v/release/Casimodo/my-app.svg)](https://github.com/Casimodo/my-app/releases)
[![Github All Releases](https://img.shields.io/github/downloads/Casimodo/my-app/total.svg)](https://github.com/Casimodo/my-app/releases)


# 🧩 Objectif

Réaliser un serveur web structuré avec des techno simple est complète avec une base de donnée mongodb (utilisation de prisma afin de changer de db très rapidement)

# ✅ Technos utilisées

- Node.js + Express (serveur)

- Socket.IO (temps réel)

- EJS (moteur de template) + Bootstrap (responsive design)

- MongoDB via Prisma (ORM pour changer de base plus tard si besoin)

- bcrypt pour hachage de mots de passe

- TailwindCSS pour un design responsive moderne

- dotenv pour la configuration

- express-session pour la gestion de session

- Helmet pour sécuriser les headers HTTP

# Installation système

## 📦 Pré-requis (Packages à installer)

- Node.js
- MongoDB

```bash
npm install
```

## 🔧 Configuration / fichiers

### Authentification
Les utilisateurs sont définis dans `config/users.json`, avec mot de passe hashé.

### ORM
Utilise Prisma pour MongoDB.

### 📦 Base de données avec Prisma
```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model UserData {
  id    String @id @default(auto()) @map("_id")
  name  String
  data  String
}

```

### 📂 Structure du projet
```bash
my-app/
│
├── prisma/                  # Schéma de la BDD
│   └── schema.prisma
│
├── public/                 # Fichiers statiques
│   └── css/
│       └── style.css
│
├── routes/                 # Routes Express
│   └── index.js
│   └── auth.js
│
├── views/                  # Templates EJS
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── login.ejs
│   ├── dashboard.ejs
│   └── error.ejs
│
├── config/
│   └── users.json          # Utilisateurs (login/password/droits)
│   └── socket.js
│
├── middleware/
│   └── auth.js             # Vérif de session et droits
│
├── .env                    # Variables d'environnement
├── app.js                  # Point d'entrée principal
├── package.json
└── README.md

```



# 🖥️ let's go, start !

Tu peux maintenant :

- Lancer avec ``npm run dev``

- Naviguer sur http://localhost:3000

# 💡 Tu peux maintenant te connecter avec :

- compte admin: ``admin / admin123``

- compte invite: ``invite / invite123``

# 💡 Tu peux maintenant aller sur la route ci-dessous si tu veux avoir d'autre mot de passe à changer dans le config :

```js
http://localhost:3000/debug/hash
```
