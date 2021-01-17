const { Telegraf } = require("telegraf");

const exchangeRateModel = require("../database/schemas/ExchangeRateModel");
class TelegramController {
  async dolarhoje() {
    const conversion_rates = await exchangeRateModel.find({});
    const brl = conversion_rates[0].BRL;
    const bot = new Telegraf(process.env.ER_TELEGRAM_API_KEY);
    let message = `1 ${"USD"} está à *R$${brl.slice(0, 4)}* na cotação atual.`;

    bot.command("start", (ctx) =>
      ctx.replyWithMarkdown(
        `Olá, _${ctx.message.from.username}_, seja bem vindo`
      )
    );
    bot.command("dolarhoje", (ctx) => ctx.replyWithMarkdown(message));

    bot.launch();

    console.log(JSON.stringify({ message: message }));
  }
}

module.exports = new TelegramController();
