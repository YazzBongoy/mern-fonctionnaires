const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { nom, email, password, role } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: "Utilisateur déjà existant" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ nom, email, password: hashedPassword, role });

  await newUser.save();
  res.status(201).json({ message: "Utilisateur créé avec succès" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Identifiants incorrects" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Mot de passe incorrect" });

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.json({ token, role: user.role });
};
