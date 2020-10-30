import { NowRequest, NowResponse } from "@vercel/node";
import { IExchangeRate } from "../../../../utils/types";

export default async (req: NowRequest, res: NowResponse) => {
  const {
    query: { base, b2b },
  } = req;
  const response = await fetch(
    `${process.env.BASE_URL}/${process.env.API_KEY}/latest/${base}`
  );
  const data: IExchangeRate = await response.json();

  switch (b2b) {
    case "AED":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.AED);
      break;
    case "ARS":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.ARS);
      break;
    case "AUD":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.AUD);
      break;
    case "BRL":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.BRL);
      break;
    case "BSD":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.BSD);
      break;
    case "CAD":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.CAD);
      break;
    case "CHF":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.CHF);
      break;
    case "CLP":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.CLP);
      break;
    case "CNY":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.CNY);
      break;
    case "COP":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.COP);
      break;
    case "CZK":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.CZK);
      break;
    case "DKK":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.DKK);
      break;
    case "DOP":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.DOP);
      break;
    case "EGP":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.EGP);
      break;
    case "EUR":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.EUR);
      break;
    case "FJD":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.FJD);
      break;
    case "GBP":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.GBP);
      break;
    case "GTQ":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.GTQ);
      break;
    case "HKD":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.HKD);
      break;
    case "HRK":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.HRK);
      break;
    case "HUF":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.HUF);
      break;
    case "IDR":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.IDR);
      break;
    case "ILS":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.ILS);
      break;
    case "INR":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.INR);
      break;
    case "ISK":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.ISK);
      break;
    case "JPY":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.JPY);
      break;
    case "KRW":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.KRW);
      break;
    case "KZT":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.KZT);
      break;
    case "MVR":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.MVR);
      break;
    case "MXN":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.MXN);
      break;
    case "MYR":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.MYR);
      break;
    case "NOK":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.NOK);
      break;
    case "NZD":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.NZD);
      break;
    case "PAB":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.PAB);
      break;
    case "PEN":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.PEN);
      break;
    case "PHP":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.PHP);
      break;
    case "PKR":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.PKR);
      break;
    case "PLN":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.PLN);
      break;
    case "PYG":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.PYG);
      break;
    case "RON":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.RON);
      break;
    case "RUB":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.RUB);
      break;
    case "SAR":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.SAR);
      break;
    case "SEK":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.SEK);
      break;
    case "SGD":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.SGD);
      break;
    case "THB":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.THB);
      break;
    case "TRY":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.TRY);
      break;
    case "TWD":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.TWD);
      break;
    case "UAH":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.UAH);
      break;
    case "USD":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.USD);
      break;
    case "UYU":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.UYU);
      break;
    case "ZAR":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.json(data.conversion_rates.ZAR);
      break;
    default:
      if (base === "BRL") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.json({
          error: `${base} cannot be converted to itself`,
        });
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.json({
          default: `${base} to BRL`,
          base: `${base}: ${data.conversion_rates.USD}`,
          BRL: data.conversion_rates.BRL,
        });
      }
  }
};
