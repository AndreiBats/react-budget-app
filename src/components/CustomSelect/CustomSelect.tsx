import Select from "react-select";
import { IOption } from "../../types";
import { Currency } from "../../config";

export const CustomSelect = () => {
  const options: IOption[] = [
    { value: Currency.USD, label: "USD" },
    { value: Currency.EUR, label: "EUR" },
    { value: Currency.GBP, label: "GBP" },
  ];

  return <Select options={options} />;
};
