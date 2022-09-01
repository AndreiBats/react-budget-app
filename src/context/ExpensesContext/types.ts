import { ReactNode } from "react";

export type InputValues = {
  name: string;
  cost: number;
  id: string;
};

export interface IExpensesContext {
  expenses: InputValues[];
  setExpense: (newExpenses: InputValues) => void;
  deleteExpense: (id: string) => void;
}

export interface IExpensesProviderProps {
  children: ReactNode;
}
