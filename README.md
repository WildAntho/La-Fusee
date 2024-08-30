# La Fusée

## Installation

1. Clonez le dépôt :
git@github.com:WildAntho/La-Fusee.git

2. Se placer dans le dossier clôné

3. Installer les dépendances :  
cd client  
npm install  
cd ../server  
npm install  

4. Configurer le fichier .env pour le serveur :
Créer le fichier .env dans le dossier serveur et renseigner les éléments fournis dans le fichier .env.sample
Voir .env.sample

## Lancement application 

4. Lancer le serveur:  
npm run dev  

5. Lancer ensuite le client:  
cd ../client  
npm run dev  

## Stack utilisée (librairie ...)

Front-end:
- ReactJS: Pour le développement de l'interface
- MaterialUI : Pour les formulaires d'inscription et de connexion
- React Router DOM: Pour la gestion de la navigation entre les différentes pages
- Sonner: Gestion de toast si une erreur serveur intervient

Back-End:
- Express: Pour la gestion des routes backend
- Nodemon: Pour relancer le serveur à chaque modification du code
- Cors: Pour restreindre les appels à mon API uniquement à mon localhost client
- MongoDB: Pour la gestion de la base de données
- Mongoose: Pour créer la connexion entre JavaScript et MongoDB
- Argon2: Pour le hashage de mot de passe
- Jsonwebtoken: Pour la gestion des jetons de connexion
- Cookieparser: Pour la création de cookie lors de la connexion
- Joi: Pour valider les champs saisis par l'utilisateur

   
