import mongoose, { Schema } from "mongoose";
import validator from "validator";

const startupApplicationSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
      trim: true,
      minlength: [3, "Full Name must be at least 3 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Please enter a valid email address"],
    },

    whatsappNumber: {
      type: String,
      required: [true, "Whatsapp Number is required"],
      trim: true,
      validate: {
        validator: function (value) {
          // Allow formats like +92..., +1..., etc.
          return /^\+\d{1,3}\d{7,14}$/.test(value);
        },
        message:
          "Please enter a valid WhatsApp number with country code (e.g., +923001234567)",
      },
    },

    linkedInProfile: {
      type: String,
      trim: true,
   
    },

    startupName: {
      type: String,
      trim: true,
    },

    productTitle: {
      type: String,
      required: [true, "Product / Game Title is required"],
      trim: true,
    },

    websiteOrPortfolio: {
      type: String,
      trim: true,
      validate: {
        validator: function (value) {
          if (!value) return true;
          return validator.isURL(value);
        },
        message: "Please enter a valid website or portfolio URL",
      },
    },

    startupOriginCity: {
      type: String,
      trim: true,
      enum:[
        "Karachi",
        "Lahore"
      ],
      default : "Lahore"
    },

    teamMembersCount: {
      type: Number,
      required: [true, "Number of Team Members is required"],
      min: [1, "Team must have at least one member"],
    },

    currentStage: {
      type: String,
      trim: true,
      enum: [
        "Idea",
        "Prototype",
        "MVP",
        "Launched",
        "Revenue Generating",
        "Scaling",
        "Other",
      ],
      default: "Idea",
    },

    vertical: {
      type: String,
      trim: true,
      enum : [
        "Ai/Automation",
        "Other Creative Tech",
        "Animation"
      ]
    },

    challengesFaced: {
      type: String,
      trim: true,
    },

    problemStatement: {
      type: String,
      trim: true,
    },

    solutionSummary: {
      type: String,
      trim: true,
    },

    previousIncubationExperience: {
      type: String,
      trim: true,
    },

    revenueLast12Months: {
      type: Number,
      required: [true, "Revenue for last 12 months is required"],
      min: [0, "Revenue cannot be negative"],
    },

    motivationToApply: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

// Prevent model overwrite in Next.js
const signUp =
  mongoose.models.StartupApplication ||
  mongoose.model("StartupApplication", startupApplicationSchema);

export default signUp;
