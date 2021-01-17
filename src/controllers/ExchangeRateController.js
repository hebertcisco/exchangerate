const exchangeRateModel = require("../database/schemas/ExchangeRateModel");

class ExchangeRateController {
  async read(req, res) {
    const social = await exchangeRateModel.find({});

    return res.status(200).json(social);
  }
}

module.exports = new ExchangeRateController();
