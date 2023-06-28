const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req,res){
    res.send("Minha página sobre o site - teste commit");
});

app.get("/habitos", function(req,res){
    res.sendFile(__dirname + "/html/habitos.html");
});

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog!");
});

app.get('/ola/:cargo/:nome', function(req, res){
    res.send("<h1> Oii "+ req.params.nome + "</h1><h2> seu cargo é " + req.params.cargo + "</h2>");
});

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});