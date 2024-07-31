import mongoose from "mongoose";

const messageSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    recipient: { type: Schema.Types.ObjectId, ref: 'User' },
    text: { type: String },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Message', messageSchema);
