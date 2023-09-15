
//importando la herramienta
const express = require("express");
const app = express();

//atendiendo peticiones
app.post('/api/habitaciones', function (req, res) {
  res.send("estoy guardando una habitacion");
});
app.get("/api/habitaciones", function (req, res) {
  res.send("estoy bucando todas las habitaciones");
});
app.get("/api/habitacion", function (req, res) {
  res.send("estoy  buscando una habitacion");   
});
app.put("/api/habitaciones", function (req, res) {
  res.send("estoy modificando una habitacion");
});
app.delete("/api/habitaciones", function (req, res) {
  res.send("estoy eliminando una habitacion");
});


//levantando un servidor
app.listen(3000,function(){
    console.log("servidor operando");
});
