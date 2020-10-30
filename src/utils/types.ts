export interface IConversionRates {
  USD: number;
  AED: number;
  ARS: number;
  AUD: number;
  BGN: number;
  BRL: number;
  BSD: number;
  CAD: number;
  CHF: number;
  CLP: number;
  CNY: number;
  COP: number;
  CZK: number;
  DKK: number;
  DOP: number;
  EGP: number;
  EUR: number;
  FJD: number;
  GBP: number;
  GTQ: number;
  HKD: number;
  HRK: number;
  HUF: number;
  IDR: number;
  ILS: number;
  INR: number;
  ISK: number;
  JPY: number;
  KRW: number;
  KZT: number;
  MVR: number;
  MXN: number;
  MYR: number;
  NOK: number;
  NZD: number;
  PAB: number;
  PEN: number;
  PHP: number;
  PKR: number;
  PLN: number;
  PYG: number;
  RON: number;
  RUB: number;
  SAR: number;
  SEK: number;
  SGD: number;
  THB: number;
  TRY: number;
  TWD: number;
  UAH: number;
  UYU: number;
  ZAR: number;
}
export interface IExchangeRate {
  result: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: IConversionRates;
}
export interface IcardInfos {
  ref: string;
  title: string;
  description: string;
}

export interface IInfoFooter {
  ref: string;
  title: string;
  image: string;
}
