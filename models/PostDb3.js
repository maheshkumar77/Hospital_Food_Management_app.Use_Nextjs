// models/PostDb3.js
import { client3 } from '../lib/mongodb';
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const PostDb3 = client3.model('Post', postSchema);

export default PostDb3;
