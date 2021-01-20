const { Telegraf } = require("telegraf");

const exchangeRateModel = require("../database/schemas/ExchangeRateModel");
class TelegramController {
  async dolarhoje() {
    const conversion_rates = await exchangeRateModel.find({});
    const brl = conversion_rates[0].BRL;
    const eur = conversion_rates[0].EUR;
    const usd = conversion_rates[0].USD;

    const bot = new Telegraf(process.env.ER_TELEGRAM_API_KEY);
    let message = (base, value) => {
      return `${base} está à *R$${value.slice(0, 4)}* na cotação atual.`;
    };

    bot.command("start", (ctx) =>
      ctx.replyWithMarkdown(
        `Olá, _${ctx.message.from.username}_, seja bem vindo`
      )
    );
    bot.command("dolarhoje", (ctx) =>
      ctx.replyWithMarkdown(message(`${usd.slice(0, 4)}`, brl))
    );
    bot.command("eurohoje", (ctx) => {
      try {
        ctx.replyWithMarkdown(message(`${eur.slice(0, 4)}EUR`, brl));
      } catch {
        ctx.replyWithMarkdown(
          `Desculpa _${ctx.message.from.username}_, não conseguimos realizar tal operação.`
        );
      }
    });
    bot.launch();
  }
}

module.exports = new TelegramController();
