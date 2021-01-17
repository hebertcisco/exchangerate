const mongoose = require("mongoose");

const ExchangeRateModel = new mongoose.Schema(
  {
    CAD: {
      type: String,
      required: true,
    },
    BRL: {
      type: String,
      required: true,
    },
    EUR: {
      type: String,
      required: true,
    },
    USD: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("rates", ExchangeRateModel);
