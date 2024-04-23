const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    // user_id: {
    //   type: mongoose.Schema.Types.ObjectId, // This will be the users own id
    // },
    positionName: {
      type: String,
      required: [true, "please add position name"],
      trim: true,
    },
    department: {
      type: String,
      required: [true, "please add department"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
