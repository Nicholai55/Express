const mongoose = require("mongoose");

const Person = new mongoose.Schema(
  {
    school: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    guardian: {
      type: String,
      required: true,
    },
    paid: {
      type: String,
      required: true,
    },
  },
  { collection: "alcool" }
);

module.exports = mongoose.model("Person", Person);
