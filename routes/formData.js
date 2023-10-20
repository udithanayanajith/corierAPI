const express = require("express");
const router = express.Router();

const FormData = require("../models/packages");

router.post("/saveFormData", async (req, res) => {
  const { senderName, senderContact, img1, img2 } = req.body;

  try {
    const existingData = await FormData.findOne({ senderContact });

    if (existingData) {
      return res.status(400).json({ message: "Sender contact already exists" });
    }

    const formData = new FormData({
      senderName,
      senderContact,
      img1,
      img2,
    });

    await formData.save();

    res.status(201).json({ message: "Form data saved successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while saving form data" });
  }
});

router.get("/getData", async (req, res) => {
  try {
    const data = await FormData.find();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching data" });
  }
});

router.post("/getDataByphone", async (req, res) => {
  try {
    const { senderContact } = req.body;

    if (!senderContact) {
      return res
        .status(400)
        .json({ message: "senderContact query parameter is required" });
    }

    const data = await FormData.find({ senderContact });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching data" });
  }
});

module.exports = router;
