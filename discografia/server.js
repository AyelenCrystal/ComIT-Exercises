const express = require("express");
const path = require("path");
//const fs = require('fs');
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dbURL = "mongodb://127.0.0.1:27017";
const dbConfig = {useNewUrlParser: true, useUnifiedTopology: true, family: 4};
const dbName = "Discografia";
const exphbs = require('express-handlebars');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layout')
}));
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.render('home');
});

app.get("/discos", (req, res) => {
    MongoClient.connect(dbURL,dbConfig, (fail, client) => {
        if (!fail) {
            const discografiadb = client.db(dbName);
            const discos = discografiadb.collection("Discos");
            
            var filter = {};
            if (req.query.lanzamiento) filter.lanzamiento = parseInt(req.query.lanzamiento);
            if (req.query.artista) filter.artista = req.query.artista;

            discos.find(filter).toArray((fail, discos) => {
                client.close();
                res.render('discos', {
                    listaDiscos: discos,
                    titulo: "Discos-Consulta"
                });
            });
        } else {
            res.render("error",{
                mensajeError: fail
            });
        }
    });
});

app.listen(5000, () => { 
    console.log("Corriendo en puerto 5000"); 
});
