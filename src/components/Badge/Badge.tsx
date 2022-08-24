import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const Badge = () => {
  const { currency } = useCurrencyContext();

  return <div>{currency} 110</div>;
};
