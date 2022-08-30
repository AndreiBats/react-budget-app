import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { InputValues } from "../../context/ExpensesContext/types";

import { ExpensesItem } from "../ExpensesItem/ExpensesItem";
import { Oooops, StyledExpensesList } from "./styled";

interface IProps {
  filteredExpenses: InputValues[];
}

export const ExpensesList = ({ filteredExpenses }: IProps) => {
  const { expenses } = useExpensesContext();

  return (
    <StyledExpensesList>
      {expenses.length !== 0 ? (
        filteredExpenses.map(({ name, cost, id }: InputValues) => {
          return <ExpensesItem name={name} cost={cost} id={id} />;
        })
      ) : (
        <Oooops>Oooops 🙈</Oooops>
      )}
    </StyledExpensesList>
  );
};
