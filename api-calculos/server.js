const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname,`/index`)));

app.get("/",(require, response)=>{
    response.sendFile(path.join(__dirname, `/index.html`));
});

app.get("/adding", (require, response)=>{
    var req = require.query;
    //Parsea un argumento y devuelve un numero. Repetir en todas la ecuaciones
    response.send({
        result: (parseFloat(req.num1) + parseFloat(req.num2))
    });
});

app.get("/subtract",(require, response)=>{
    var req = require.query;
    response.send({
        result: (parseFloat(req.num1) - parseFloat(req.num2))
    });
});

app.get("/multiply",(require, response)=>{
    var req = require.query;
    response.send({
        result: (parseFloat(req.num1) * parseFloat(req.num2))
    });
    
});

app.get("/divide",(require, response)=>{
    var req = require.query;
    response.send({
        result: (parseFloat(req.num1) / parseFloat(req.num2))
    });
    
});

app.listen(5000,() => {
    console.log("Corriendo en puerto 5000");
});
