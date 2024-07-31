import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    description: { type: String, },
    logo: { type: String, required: true },
    location: { type: String,},
    website: { type: String,},
    createdAt: { type: Date, default: Date.now }, 
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },      
}, { timestamps: true });

export default mongoose.model("Company", companySchema)
