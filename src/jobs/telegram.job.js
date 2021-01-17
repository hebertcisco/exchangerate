const CronJob = require("cron").CronJob;
const telegramController = require("../controllers/TelegramController");

module.exports = new CronJob(
  "*/2 * * * * *",
  async () => {
    await telegramController.dolarhoje();
  },
  null,
  true,
  "America/Sao_Paulo"
);
