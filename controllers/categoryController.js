const categoryModal = require("../models/categoryModal");

const getAllCategory = async (req, res) => {
  try {
    const categorys = await categoryModal.find({});
    res.status(200).json(categorys);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Category GET API",
      error,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    await categoryModal.findOneAndDelete({ _id: req.body.categoryId });
    res.status(200).send("Category Deleted!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addCategory = async (req, res) => {
  try {
    const { positionName, department } = req.body;

    // validation
    if (!positionName) {
      return res.status(400).send({
        success: false,
        message: "Position Name is required",
      });
    }
    if (!department) {
      return res.status(400).send({
        success: false,
        message: "Department is required",
      });
    }

    // category
    const category = await categoryModal({
      positionName,
      department,
    }).save();

    return res.status(201).send({
      success: true,
      message: "Category Created",
      category,
    });
    
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Category API",
      error,
    });
  }
};

module.exports = { getAllCategory, addCategory, deleteCategory };
