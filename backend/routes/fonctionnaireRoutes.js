const express = require("express");
const { ajouterFonctionnaire, getFonctionnaires } = require("../controllers/fonctionnaireController");
const upload = require("../middleware/uploadMiddleware");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, ajouterFonctionnaire);
router.get("/", protect, getFonctionnaires);
router.post("/:id/upload", protect, upload.single("document"), async (req, res) => {
  try {
    const fonctionnaire = await Fonctionnaire.findById(req.params.id);
    if (!fonctionnaire) return res.status(404).json({ message: "Fonctionnaire non trouvé" });

    fonctionnaire.documents.push({ url: req.file.path, nom: req.file.filename });
    await fonctionnaire.save();
    res.status(200).json({ message: "Document ajouté avec succès", document: req.file.path });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'upload du document" });
  }
});

module.exports = router;
