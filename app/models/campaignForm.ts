import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
    title: { type: String, required: true },
    name : {type : String, required : true},
    phone : {type : String, required : true}
}, { timestamps: true });


const Campaign =
  mongoose.models.Campaign || mongoose.model("Campaign", campaignSchema);

export default Campaign;
