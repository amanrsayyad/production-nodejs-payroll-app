const AttendenceModal = require("../models/attendenceModal");

const attendenceData = async (req, res) => {
  try {
    const attendence = await AttendenceModal.find({});
    res.status(200).json(attendence);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Attendence GET API",
      error,
    });
  }
};

const pressAttendence = async (req, res) => {
  try {
    const { userId, pickUp, dropOff, ridePay, date, employeeName } = req.body;

    // validation
    if (!userId) {
      return res.status(400).send({
        success: false,
        message: "User ID is required",
      });
    }
    if (!pickUp) {
      return res.status(400).send({
        success: false,
        message: "Latitude is required",
      });
    }
    if (!dropOff) {
      return res.status(400).send({
        success: false,
        message: "Longitude is required",
      });
    }
    if (!ridePay) {
      return res.status(400).send({
        success: false,
        message: "City is required",
      });
    }
    if (!date) {
      return res.status(400).send({
        success: false,
        message: "Date is required",
      });
    }
    if (!employeeName) {
      return res.status(400).send({
        success: false,
        message: "Employee Name is required",
      });
    }

    // category
    const attendence = await AttendenceModal({
      userId,
      pickUp,
      dropOff,
      ridePay,
      date,
      employeeName,
    }).save();

    return res.status(201).send({
      success: true,
      message: "Attendence Created",
      attendence,
    });
    
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Attendence API",
      error,
    });
  }
};

module.exports = { pressAttendence, attendenceData };
