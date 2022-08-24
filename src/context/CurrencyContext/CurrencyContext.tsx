import { createContext, FC, useContext, useState } from "react";
import { Currency } from "../../config";
import { ICurrencyContext, ICurrencyProviderProps } from "./types";

const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);

const useContextBudgetValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>({
    currency: Currency.USD,
    setCurrency: (newCurrency) => {
      setCurrencyContext((ctx) => ({ ...ctx, currency: newCurrency }));
    },
  });

  return currencyContext;
};

export const useCurrencyContext = () =>
  useContext<ICurrencyContext>(CurrencyContext);

export const CurrencyContextProvider: FC<ICurrencyProviderProps> = ({
  children,
}) => {
  return (
    <CurrencyContext.Provider value={useContextBudgetValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
