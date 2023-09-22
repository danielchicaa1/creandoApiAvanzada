//Espacio para definir las rutas
// o endpoint especificos de su API

import express from 'express';

export let rutasAPI=express.Router()

//Aca pone sus EndPoints
rutasAPI.post('/api/habitaciones', function (req, res) {
    res.send("estoy guardando una habitacion");
  });
rutasAPI.get("/api/habitaciones", function (req, res) {
    res.send("estoy bucando todas las habitaciones");
  });
rutasAPI.get("/api/habitacion", function (req, res) {
    res.send("estoy  buscando una habitacion");   
  });
rutasAPI.put("/api/habitaciones", function (req, res) {
    res.send("estoy modificando una habitacion");
  });
rutasAPI.delete("/api/habitaciones", function (req, res) {
    res.send("estoy eliminando una habitacion");
  });