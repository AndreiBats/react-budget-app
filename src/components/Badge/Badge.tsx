import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const Badge = () => {
  const { currency } = useCurrencyContext();

  return <div> 110 {currency}</div>;
};
