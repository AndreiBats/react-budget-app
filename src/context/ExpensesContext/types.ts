import { ReactNode } from "react";

export type InputValues = {
  name: string;
  cost: number;
  id: string;
};

export interface IExpensesContext {
  expenses: InputValues[];
  setExpenses: (newExpenses: InputValues) => void;
  deleteExpenses: (id: string) => void;
}

export interface IExpensesProviderProps {
  children: ReactNode;
}
