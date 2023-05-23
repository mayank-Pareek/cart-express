import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    maxlength: 30,
    trim: true,
    index: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 30,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 10,
    trim: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
