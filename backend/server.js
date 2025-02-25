const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const { protect, authorize } = require("./middleware/authMiddleware");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/fonctionnaires", protect, require("./routes/fonctionnaireRoutes"));

app.listen(5000, () => console.log("Serveur démarré sur le port 5000"));

app.use("/api/admin", require("./routes/adminRoutes"));
