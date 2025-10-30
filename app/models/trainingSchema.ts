import mongoose from "mongoose";

const trainingSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    cnic: {
      type: String,
      required: true,
      maxlength: 13, // CNIC must be 13 characters or less
    },
    domicile: { type: String, required: false },
    contactNumber: { type: String, required: true },
    qualification: {
      type: String,
      required: true,
      enum: ["Matriculation", "Intermediate", "BS HONS"],
    },
    course: {
      type: String,
      required: true,
      enum: [
        "Pre-Production - Onsite",
        "Production - Onsite",
        "Post-Production - Onsite",
        "Unity - Offsite",
        "Unreal - Offsite",
        "3D Animation - Onsite",
      ], // Allowed course options
    },
    venue: {
      type: String,
      required: true,
      enum: ["Lahore", "Karachi"],
    },
    organizationPlatform: {
      type: String,
      required: true,
      enum: ["Unity", "Unreal", "Blender"],
    },
    email: { type: String, required: true },
    contactConsent: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Training =
  mongoose.models.Training || mongoose.model("Training", trainingSchema);

export default Training;
