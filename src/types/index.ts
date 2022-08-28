import { Currency } from "../config";

export interface IOption {
  value: Currency;
  label: "EUR" | "USD" | "GBP";
}
