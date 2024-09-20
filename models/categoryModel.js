import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,

  },
  // The slug field is used to store a URL-friendly 
  // version of the name field.
  slug: {
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("Category", categorySchema);