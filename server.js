require('dotenv').config();
const mongoose = require('mongoose');

// ...existing code...

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
  // Removed deprecated options
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.error('❌ Erreur de connexion MongoDB :', err.message);
});

// ...existing code...
