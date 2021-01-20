const mongoose = require("mongoose");

const ExchangeRateModel = new mongoose.Schema(
  {
    CAD: {
      type: String,
      required: true,
    },
    HKD: {
      type: String,
      required: true,
    },
    ISK: {
      type: String,
      required: true,
    },
    PHP: {
      type: String,
      required: true,
    },
    DKK: {
      type: String,
      required: true,
    },
    HUF: {
      type: String,
      required: true,
    },
    CZK: {
      type: String,
      required: true,
    },
    AUD: {
      type: String,
      required: true,
    },
    RON: {
      type: String,
      required: true,
    },
    SEK: {
      type: String,
      required: true,
    },
    IDR: {
      type: String,
      required: true,
    },
    INR: {
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
    RUB: {
      type: String,
      required: true,
    },
    HRK: {
      type: String,
      required: true,
    },
    JPY: {
      type: String,
      required: true,
    },
    THB: {
      type: String,
      required: true,
    },
    CHF: {
      type: String,
      required: true,
    },
    SGD: {
      type: String,
      required: true,
    },
    PLN: {
      type: String,
      required: true,
    },
    BGN: {
      type: String,
      required: true,
    },
    TRY: {
      type: String,
      required: true,
    },
    CNY: {
      type: String,
      required: true,
    },
    NOK: {
      type: String,
      required: true,
    },
    NZD: {
      type: String,
      required: true,
    },
    ZAR: {
      type: String,
      required: true,
    },
    MXN: {
      type: String,
      required: true,
    },
    ILS: {
      type: String,
      required: true,
    },
    GBP: {
      type: String,
      required: true,
    },
    KRW: {
      type: String,
      required: true,
    },
    MYR: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("rates", ExchangeRateModel);
