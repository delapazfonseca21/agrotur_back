const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ where: { email } });
        if (userExists) return res.status(400).json({ message: "Email already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        console.log("user: ", user)
        const { password : contra, ...responseUser } = user.dataValues
        res.json({
            message: "Login successful",
            user: {
                token,
                ...responseUser
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { register, login };
