const mongoose = require("mongoose");

const AuthMicroSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const AuthMicroModel = mongoose.model("AuthMicro", AuthMicroSchema);

module.exports = { AuthMicroModel };
