const express = require("express");
const mongoose = require("mongoose");
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
    .catch((err) => console.error("Erreur de connextion à mongodb !", err));

app.use("/api/users", userRoutes);

app.listen(portServer, "0.0.0.0", () => {
    console.log(`Le serveur tourne sur port ${portServer}`);
});