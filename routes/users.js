var mongoose = require("mongoose");

// connect with DATABASE
mongoose.connect("mongodb://localhost:27017/practice1");

var UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
