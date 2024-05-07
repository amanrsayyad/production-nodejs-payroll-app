const mongoose = require("mongoose");

const recipientSchema = new mongoose.Schema(
  {
    recipient_address: {
      type: String,
      required: [true, "please add recipient address"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipient", recipientSchema);
