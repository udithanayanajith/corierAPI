const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const formDataRoutes = require("./routes/formData");
const mDbConfig = require("./lib/db");

const app = express();
app.use(express.json({ limit: "10mb" }));

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mDbConfig();

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", formDataRoutes);

app.listen(3001, () => {
  console.log(`Server is running on port ${3001}`);
});
