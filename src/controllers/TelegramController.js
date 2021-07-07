const { Telegraf } = require("telegraf");
const axios = require("axios");

class TelegramController {
  async dolarhoje() {
    const bot = new Telegraf(process.env.ER_TELEGRAM_API_KEY);

    const rates_response = await axios({
      method: "GET",
      url: `${process.env.EXCHANGERATE_URL}`
    });
    const rates = rates_response.data;

    let message = (base, value) => {
      return `${base} está à *R$${value}* na cotação atual.`;
    };

    bot.command("start", ctx =>
      ctx.replyWithMarkdown(
        `Olá, _${ctx.message.from.username}_, seja bem vindo`
      )
    );
    bot.command("dolarhoje", async ctx => {
      try {
        ctx.replyWithMarkdown(
          message(`${rates?.conversion_rates.USD}USD`, String(rates.conversion_rates.BRL).slice(0, 4))
        );
      } catch (e) {
        ctx.replyWithMarkdown(
          `Desculpa _${ctx.message.from.username}_, não conseguimos realizar tal operação.`
        );
      }
    });
    bot.launch();
  }
}

module.exports = new TelegramController();
