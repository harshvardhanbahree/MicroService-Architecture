const mongoose = require("mongoose");
require("dotenv").config();

async function mongooseConnect() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit the process with a failure code
  }
}

module.exports = {
  mongooseConnect,
};
