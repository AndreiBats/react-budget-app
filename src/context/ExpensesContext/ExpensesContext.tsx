import { createContext, FC, useContext, useState } from "react";
import { IExpensesContext, IExpensesProviderProps, InputValues } from "./types";

const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

const useContextExpensesValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>({
    expenses: [],
    setExpenses: (newExpenses) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: [...ctx.expenses, newExpenses],
      }));
    },
  });

  return expensesContext;
};

export const useExpensesContext = () =>
  useContext<IExpensesContext>(ExpensesContext);

export const ExpensesContextProvider: FC<IExpensesProviderProps> = ({
  children,
}) => {
  return (
    <ExpensesContext.Provider value={useContextExpensesValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
