// models/PostDb1.js
import { client1 } from '../lib/mongodb';
import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  mealName: { type: String, required: true },
  ingredients: { type: String, required: true },
  specificInstructions: { type: String, required: true },
  mealtime: {
    morning: { type: Boolean, default: false },
    evening: { type: Boolean, default: false },
    night: { type: Boolean, default: false }
  },
  count: { type: Number, default: 0 }  // Count of how many times this meal was ordered
});

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  diseases: { type: String, required: true },
  allergies: { type: String, required: true },
  roomno: { type: String, required: true },
  bedno: { type: String, required: true },
  florno: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  contactinfo: { type: String, required: true },
  emergencycontact: { type: String, required: true },
  other: { type: String, required: true },
  food: [foodSchema],
  delname:{type:String, },
  delconno:{type:String, },
  trackfood:{type:String}
});

const PostDb1 = client1.model('Post', postSchema);

export default PostDb1;
