const mongoose = require('mongoose');

const personaSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  dni: Number,
  celular: Number,
  nacimiento: Number,
  departamento: String,
  distrito: String,
  observaciones: String,


});
module.exports = mongoose.model('Persona', personaSchema,'form_persona')