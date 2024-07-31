import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: [{ type: String }],
    salary: { type: Number, required: true },
    location: { type: String, required: true },
    jobType: { type: String, enum: ["full-time", "part-time", "remote", "internship"], required: true },
    position: { type: Number, required: true },
    status: { type: String, enum: ["open", "closed"], default: "open", required: true },
    url: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }],
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);
