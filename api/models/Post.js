import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    username: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: [String],
    },
    view: {
      type: Number,
      default: 0,
    },
    like: {
      type: [String],
      default: [],
    },
    categories: {
      type: [String],
      default: "All",
    },
    like: {
      type: [String],
      default: [],
    },
    featured: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
