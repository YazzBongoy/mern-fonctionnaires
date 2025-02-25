const Fonctionnaire = require("../models/Fonctionnaire");

exports.getStats = async (req, res) => {
  try {
    const totalFonctionnaires = await Fonctionnaire.countDocuments();
    const parStatut = await Fonctionnaire.aggregate([
      { $group: { _id: "$statut", count: { $sum: 1 } } },
    ]);

    res.status(200).json({ totalFonctionnaires, parStatut });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des statistiques" });
  }
};
