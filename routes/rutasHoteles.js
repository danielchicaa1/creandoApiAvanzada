//Espacio para definir las rutas
// o endpoint especificos de su API

import express from 'express';

export let rutasAPI=express.Router()

//Aca pone sus EndPoints
rutasAPI.post('/api/habitaciones');
rutasAPI.get("/api/habitaciones");
rutasAPI.get("/api/habitacion/:id");
rutasAPI.put("/api/habitaciones/:id",);
rutasAPI.delete("/api/habitaciones/:id");
//Reservas
rutasAPI.post("/api/reservas");
rutasAPI.get("/api/reservas");
rutasAPI.get("/api/reserva/:id");
rutasAPI.put("/api/reservas/:id");
rutasAPI.delete("/api/reservas/:id");
