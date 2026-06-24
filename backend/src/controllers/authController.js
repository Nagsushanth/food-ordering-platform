const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
    createUser,
    getUserByEmail
} = require("../models/userModel");

const register = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingUser =
    await getUserByEmail(email);

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword =
            await bcrypt.hash(password, 10);

        const user =
    await createUser(
        name,
        email,
        hashedPassword
    );

        res.status(201).json({
            message: "User Registered Successfully",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user =
    await getUserByEmail(email);

        if (!user) {
            return res.status(401).json({
                message: "Invalid Credentials"
            });
        }

        const isMatch =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid Credentials"
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.json({
            message: "Login Successful",
            token
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    register,
    login
};