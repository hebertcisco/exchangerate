const { Telegraf } = require("telegraf");

import { NowRequest, NowResponse } from "@vercel/node";
import { IConversionRates } from "../../../../utils/types";

export default async (req: NowRequest, res: NowResponse) => {
  const response_conversion_rates = await fetch(
    `https://cambiocurrency.now.sh/api/v1/latest?base=USD&clean=true`
  );
  const conversion_rates: IConversionRates = await response_conversion_rates.json();

  const bot = new Telegraf(process.env.BOT_TOKEN);
  let message = `1 dólar está à R$${conversion_rates.BRL} na cotação atual.`;
  bot.command("dolarhoje", ({ reply }) => reply(message));

  bot.launch();

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.json({ message: message });
};
