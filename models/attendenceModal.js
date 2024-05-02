const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "please add User Id"],
    },
    pickUp: {
      type: String,
      required: [true, "please add pick up"],
    },
    dropOff: {
      type: String,
      required: [true, "please add drop off"],
    },
    ridePay: {
      type: String,
      required: [true, "please add ride pay"],
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
