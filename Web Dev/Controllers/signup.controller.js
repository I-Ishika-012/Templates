import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async(req, res) => {
    try {
        const { name, username, email, password } = req.body;

        //? no response/empty fields
        if (!name || !username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        //? email validation
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }

        //? username validation
        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: "Username already exists" });
        }

        //? password validation
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        //? hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //? create user
        const user = new User({
            name,
            username,
            email,
            password: hashedPassword
        })

        await user.save();

        //? create token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "3d" });

        //? send cookie
        res.cookie("jwt-matrix", token, {
            httpOnly: true, //! for security from XSS attacks
            maxAge: 3 * 24 * 60 * 60 * 1000,
            sameSite: "strict", //! for security from CSRF attacks
            secure: process.env.NODE_ENV === "production", //! prevents M-I-M
        } );

        //?success
        res.status(201).json({ message: "User created successfully" });

        //?postman
        //! todo: send welcome email
    } catch (error) {
        console.log("Error in signup",error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
