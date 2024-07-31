import mongoose from "mongoose";

const postSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String },
    image: { type: String }, // Could be a reference to an image storage
    video: { type: String }, // Could be a reference to a video storage
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        text: String,
        createdAt: Date
    }],
    shares: { type: Number },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Post', postSchema);
