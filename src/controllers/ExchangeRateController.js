const exchangeRateModel = require("../database/schemas/ExchangeRateModel");

class ExchangeRateController {
  async read(req, res) {
    const rates = await exchangeRateModel.find({});
    return res.status(200).json(rates);
  }
}

module.exports = new ExchangeRateController();
