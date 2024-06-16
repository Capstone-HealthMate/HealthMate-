// controllers/authController.js
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({ username, email, password });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });
    // res.cookie("token", token, { httpOnly: true, secure: false });
    res.cookie("token", token, {
      httpOnly: false,
      secure: false,
      expires: new Date(Date.now() + 3600000), // expires in 1 hour
    });
    
    res.json({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(200).json({ authenticated: false });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(200).json({ authenticated: false });
    }
    return res.status(200).json({ authenticated: true, user });
  });
};

export { register, login, getUser };
