import Select from "react-select";
import { IOption } from "../../types";

export const CustomSelect = () => {
  const options: IOption[] = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "GBP", label: "GBP" },
  ];

  return <Select options={options} />;
};
