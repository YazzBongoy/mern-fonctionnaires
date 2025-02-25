const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,         // Active le nouvel analyseur d'URL
      useUnifiedTopology: true,      // Utilise le moteur de découverte et de surveillance du serveur
      serverSelectionTimeoutMS: 5000 // Timeout en 5 secondes pour éviter le blocage
    });

    console.log("✅ MongoDB connecté avec succès !");
  } catch (error) {
    console.error("❌ Erreur de connexion MongoDB :", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
