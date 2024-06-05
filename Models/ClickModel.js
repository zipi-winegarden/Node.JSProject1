import mongoose from "mongoose";

const ClickSchema = new mongoose.Schema({
  insertedAt: {
    type: Date,
    default: Date.now,
  },
  ipAddress: {
    type: String,
    required: true,
  },
  targetParamValue: {
    type: String,
    required: false
  }
});

export default mongoose.model("clicks", ClickSchema);
