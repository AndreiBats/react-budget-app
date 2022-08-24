import Select, { SingleValue } from "react-select";
import { IOption } from "../../types";
import { Currency } from "../../config";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

const options: IOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBP, label: "GBP" },
];

export const CustomSelect = () => {
  const { currency, setCurrency } = useCurrencyContext();
  const getValue = () => {
    return currency
      ? options.find((option) => option.value === currency)
      : options[0];
  };

  const handleCurrency = (option: SingleValue<IOption>): void => {
    if (option) setCurrency(option.value);
  };

  return (
    <Select
      options={options}
      isSearchable={false}
      value={getValue()}
      onChange={handleCurrency}
    />
  );
};
