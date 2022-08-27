import { ReactNode } from "react";

export type InputValues = {
  name: string;
  cost: string;
  id: string;
};

export interface IExpensesContext {
  expenses: any;
  setExpenses: (newExpenses: InputValues) => void;
}

export interface IExpensesProviderProps {
  children: ReactNode;
}
