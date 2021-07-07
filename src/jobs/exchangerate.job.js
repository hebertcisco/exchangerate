const CronJob = require("cron").CronJob;
const exchangeRateModel = require("../database/schemas/ExchangeRateModel");
const fetch = require("node-fetch");

module.exports = new CronJob(
  "*/7 *  * * * *",
  async () => {
    const rates_response = await fetch(`${EXCHANGERATE_URL}`);
    const { conversion_rates } = rates_response.json();
    console.info("Updating...");
    await exchangeRateModel.findOneAndUpdate(
      { _id: process.env.MONGODB_TABLE },
      conversion_rates
    );
  },
  null,
  true,
  "America/Sao_Paulo"
);
