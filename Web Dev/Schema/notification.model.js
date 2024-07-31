import mongoose from "mongoose";

const notificationSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    type: { type: String }, // e.g., like, comment, connection, job
    message: { type: String },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Notification', notificationSchema);
