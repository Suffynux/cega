import mongoose from "mongoose";

const coWorkingSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
      enum: ["Lahore", "Karachi"],
    },
    date: {
      type: Date,
      default: Date.now, // automatically sets submission date
    },
    time: {
      type: String,
      default: () => new Date().toLocaleTimeString(), // stores local time string
    },
  },
  { timestamps: true }
);


const coWorking =
  mongoose.models.coWorkingSchema || mongoose.model("coWorking", coWorkingSchema);

export default coWorking;
