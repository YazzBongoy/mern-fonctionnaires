const express = require("express");
const { getStats } = require("../controllers/adminController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/stats", protect, authorize(["Admin"]), getStats);

module.exports = router;
