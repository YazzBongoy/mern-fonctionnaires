const mongoose = require("mongoose");

const fonctionnaireSchema = new mongoose.Schema({
  matricule: { type: String, required: true, unique: true },
  nom: { type: String, required: true },
  ministere: { type: String, required: true },
  statut: { type: String, enum: ["En activité", "Détaché", "En retraite", "Disponibilité"], required: true },
  grade: { type: String, required: true },
  service: { type: String, required: true },
  documents: [{ url: String, nom: String }],
}, { timestamps: true });

module.exports = mongoose.model("Fonctionnaire", fonctionnaireSchema);
