import cookieParser from "cookie-parser";
import express from "express";
// import mongoose from "mongoose";
import cors from "cors";
// import dotenv from "dotenv";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";


const app = express();

//! MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
};
app.use(cors(corsOptions));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));