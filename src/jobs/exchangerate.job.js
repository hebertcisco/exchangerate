const CronJob = require("cron").CronJob;
const exchangeRateModel = require("../database/schemas/ExchangeRateModel");
const { exchangeRates } = require("exchange-rates-api");

module.exports = new CronJob(
  "0 */1  * ** *",
  async () => {
    const { CAD, BRL, EUR, USD } = await exchangeRates()
      .latest()
      .base("USD")
      .fetch();
    console.log("Updating...");
    await exchangeRateModel.findOneAndUpdate(
      { _id: process.env.MONGODB_TABLE },
      {
        CAD,
        BRL,
        EUR,
        USD,
      }
    );
  },
  null,
  true,
  "America/Sao_Paulo"
);
