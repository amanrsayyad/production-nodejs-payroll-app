const recipientModal = require("../models/recipientModal");

const getAllRecipient = async (req, res) => {
  try {
    const recipient = await recipientModal.find({});
    res.status(200).json(recipient);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Recipient Address GET API",
      error,
    });
  }
};

const addRecipient = async (req, res) => {
  try {
    const { userId, recipient_address } = req.body;
    //  validation
    if (!userId) {
      return res.status(400).send({
        success: false,
        message: "User ID is required",
      });
    }
    if (!recipient_address) {
      return res.status(400).send({
        success: false,
        message: "Recipient Address is required",
      });
    }

    // category
    const recipient = await recipientModal({
      userId,
      recipient_address,
    }).save();

    return res.status(201).send({
      success: true,
      message: "Recipient Address Created",
      recipient,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Recipient Address API",
      error,
    });
  }
};

module.exports = { getAllRecipient, addRecipient };
