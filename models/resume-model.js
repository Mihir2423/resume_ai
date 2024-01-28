import mongoose from "mongoose";

const { Schema } = mongoose;

const resumeSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  profile_image: { type: String },
  address: { type: String },
  skype: { type: String },
  linkedin: { type: String },
  github: { type: String },
  about_me: { type: String },
  education: [
    {
      school: { type: String },
      degree: { type: String },
      field_of_study: { type: String },
      start_year: { type: String },
      end_year: { type: String },
      description: { type: String },
    },
  ],
  experience: [
    {
      company: { type: String },
      position: { type: String },
      start_year: { type: String },
      end_year: { type: String },
      description: { type: String },
    },
  ],
  skills: [
    {
      skill: { type: String },
    },
  ],
  created_at: { type: Date, default: Date.now },
});

const Resume = mongoose.models.Resume || mongoose.model("Resume", resumeSchema);

export default Resume;
