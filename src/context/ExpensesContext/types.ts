import { ReactNode } from "react";

export type InputValues = {
  name: string;
  cost: number;
  id: string;
};

export interface IExpensesContext {
  expenses: any;
  setExpenses: (newExpenses: InputValues) => void;
}

export interface IExpensesProviderProps {
  children: ReactNode;
}
