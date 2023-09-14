const mongoose = require("mongoose");

const packagesSchema = new mongoose.Schema({
  senderName: { type: String, required: true },
  senderContact: { type: String, required: true, unique: true },
  img1: { type: String, required: true },
  img2: { type: String, required: true },
});

const collection = new mongoose.model("packages", packagesSchema);
module.exports = collection;
