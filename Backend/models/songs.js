import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    artist: {
      type: String,
      required: [true, "Artist is required"],
      trim: true,
    },
    album: { type: String, trim: true },
    year: { type: Number, min: 1900, max: new Date().getFullYear() },
    genre: { type: String, trim: true },
    duration: { type: Number, min: 0 }, 
  },

  { timestamps: true }
);

export default mongoose.model("Song", songSchema);