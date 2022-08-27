import { createContext, FC, useContext, useState } from "react";
import { IBudgetContext, IBudgetProviderProps } from "./types";

const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);

const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>({
    budget: 0,
    setBudget: (newBudget) => {
      setBudgetContext((bdg) => ({ ...bdg, budget: newBudget }));
    },
  });
  return budgetContext;
};

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);

export const BudgetContextProvider: FC<IBudgetProviderProps> = ({
  children,
}) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
