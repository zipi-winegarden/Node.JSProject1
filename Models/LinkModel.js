import mongoose from "mongoose";
import ClickModel from "./ClickModel.js";

const LinkSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: [true, "originalUrl is required"],
    default: "localhost:3000/"
  },
  clicks: [ClickModel.schema],
  targetParamName: {
    type: String,
    required: false,
    default: "src" 
  },
  targetValues: [
    {
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      }
    }
  ]
});

export default mongoose.model("links", LinkSchema);
