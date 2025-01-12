// models/PostDb2.js
import { client2 } from '../lib/mongodb';
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  foodtrack:{ type: String, required: false },
 stafname:{ type:String, required:false},
 stafconno:{ type:String, required:false},
});

const PostDb2 = client2.model('Post', postSchema);

export default PostDb2;
