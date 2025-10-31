# Installation :
## Ouvrir le terminal et suivre ces étapes :
Cloner le projet :
```powershell
git clone https://github.com/euloaz/foad-nodejs.git
```
Entrer dans le dossier du projet:
```powershell
cd foad-nodejs
```
Créer un container à l'aide des informations incluses dans le fichier ``` compose.yml ``` :
```powershell
docker compose up -d
```
Entrer dans le container :
```powershell
docker exec -it userapi sh
```
Faire les mises à jours des différentes librairies Node.js utilisées :
```powershell
npm i
```
Lancer le server :
```powershell
node index.js
```

Pour accéder à la page avec tout les utilisateurs : http://localhost:8002/

Pour accéder au json : http://localhost:8002/api/users


