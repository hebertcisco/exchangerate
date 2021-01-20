const CronJob = require("cron").CronJob;
const exchangeRateModel = require("../database/schemas/ExchangeRateModel");
const { exchangeRates } = require("exchange-rates-api");

module.exports = new CronJob(
  "*/7 *  * * * *",
  async () => {
    const {
      CAD,
      HKD,
      ISK,
      PHP,
      DKK,
      HUF,
      CZK,
      AUD,
      RON,
      SEK,
      IDR,
      INR,
      BRL,
      RUB,
      HRK,
      JPY,
      THB,
      CHF,
      SGD,
      PLN,
      BGN,
      TRY,
      CNY,
      NOK,
      NZD,
      ZAR,
      USD,
      MXN,
      ILS,
      GBP,
      KRW,
      MYR,
    } = await exchangeRates()
      .latest()
      .base("BRL")
      .fetch();
    console.log("Updating...");
    await exchangeRateModel.findOneAndUpdate(
      { _id: process.env.MONGODB_TABLE },
      {
        CAD,
        HKD,
        ISK,
        PHP,
        DKK,
        HUF,
        CZK,
        AUD,
        RON,
        SEK,
        IDR,
        INR,
        BRL,
        RUB,
        HRK,
        JPY,
        THB,
        CHF,
        SGD,
        PLN,
        BGN,
        TRY,
        CNY,
        NOK,
        NZD,
        ZAR,
        USD,
        MXN,
        ILS,
        GBP,
        KRW,
        MYR,
      }
    );
  },
  null,
  true,
  "America/Sao_Paulo"
);
