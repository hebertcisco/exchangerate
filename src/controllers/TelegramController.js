const fetch = require("node-fetch");
const { Telegraf } = require("telegraf");

class TelegramController {
  async dolarhoje() {
    const response_conversion_rates = await fetch(
      `https://ccurrencybot.now.sh/api/v1/latest/hoje?base=${"USD"}`
    );
    const conversion_rates = await response_conversion_rates.json();
    const brl = conversion_rates.BRL;
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
