import mongoose from "mongoose";


import LinkModel from "./LinkModel.js";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    default: "new user",
    minlength: [3, "Name must be at least 3 characters long"],
    maxlength: [50, "Name cannot be more than 50 characters long"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    maxlength: [100, "Email cannot be more than 100 characters long"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
    maxlength: [128, "Password cannot be more than 128 characters long"]
  },
  links: {
    type: [String],
    required: [true, "Links are required"],
    default: []
  },

});

export default mongoose.model("users", UserSchema);
