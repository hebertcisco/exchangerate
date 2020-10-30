import { NowRequest, NowResponse } from "@vercel/node";
import { IExchangeRate } from "../../../../utils/types";

export default async (req: NowRequest, res: NowResponse) => {
  const {
    query: { base, clean },
  } = req;
  const response = await fetch(
    `${process.env.BASE_URL}/${process.env.API_KEY}/latest/${base}`
  );
  const data: IExchangeRate = await response.json();

  const allResponse = {
    result: data.result,
    time_last_update_unix: data.time_last_update_unix,
    time_last_update_utc: data.time_last_update_utc,
    time_next_update_unix: data.time_next_update_unix,
    time_next_update_utc: data.time_next_update_utc,
    base_code: data.base_code,
    conversion_rates: data.conversion_rates,
  };
  if (clean === "true" || "1") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.json(data.conversion_rates);
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.json(allResponse);
  }
};
