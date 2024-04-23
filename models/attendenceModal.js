const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "please add User Id"],
    },
    latitude: {
      type: String,
      required: [true, "please add latitude"],
    },
    longitude: {
      type: String,
      required: [true, "please add longitude"],
    },
    city: {
      type: String,
      required: [true, "please add city"],
    },
    time: {
      type: String,
      required: [true, "please add time"],
    },
    date: {
      type: String,
      required: [true, "please add date"],
    },
    employeeName: {
      type: String,
      required: [true, "please add Employee Name"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendence", attendenceSchema);
