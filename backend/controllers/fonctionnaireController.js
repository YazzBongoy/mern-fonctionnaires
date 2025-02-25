const Fonctionnaire = require("../models/Fonctionnaire");

exports.ajouterFonctionnaire = async (req, res) => {
  try {
    const newFonctionnaire = new Fonctionnaire(req.body);
    await newFonctionnaire.save();
    res.status(201).json(newFonctionnaire);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getFonctionnaires = async (req, res) => {
  try {
    const fonctionnaires = await Fonctionnaire.find();
    res.status(200).json(fonctionnaires);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
