const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const fs =require('fs').promises;
const userRoutes = require("./routes/userRoute");

const app = express();
const portServer = 8002;
app.use(express.json());

mongoose
    .connect("mongodb://host.docker.internal:27017/users")
    .then(() => {
        console.log("Connecté à mongodb")
        require('./seed');
    })
    .catch((err) => console.error("Erreur de connexion à mongodb !", err));

app.use(express.static(path.join(__dirname, '../frontend')))
app.use("/api/users", userRoutes);

app.get("/", async (req,res) => {
    try {
        const cheminFichier = path.join(__dirname, '../frontend/index.html');
        const content = await fs.readFile(cheminFichier,'utf8');
        res.send(content);
    } catch (err) {
        console.error('Erreur pou renvoyer index.html', err);
        res.status(500).send('Erreur serveur !');
    }
});


app.listen(portServer, "0.0.0.0", () => {
    console.log(`Le serveur tourne sur port ${portServer}`);
});