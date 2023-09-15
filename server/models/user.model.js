const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { typeof: String, require: true },
    email: { typeof: String, require: true },
    password: { typeof: String, require: true },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
