import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      requied: true,
    },
    uuid: {
      type: String,
      requied: true,
    },
    Description: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const items = mongoose.model("Item", itemSchema);
export default items;
