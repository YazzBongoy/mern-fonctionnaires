const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Admin", "RH", "Fonctionnaire"], default: "Fonctionnaire" },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
