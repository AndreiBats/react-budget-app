import { Currency } from "../config";

export interface IOption {
  value: Currency;
  label: keyof typeof Currency;
}
