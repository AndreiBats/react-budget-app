import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { InputValues } from "../../context/ExpensesContext/types";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";
import { StyledExpensesList } from "./styled";

export const ExpensesList = () => {
  const { expenses } = useExpensesContext();
  return (
    <StyledExpensesList>
      {expenses.map(({ name, cost, id }: InputValues) => {
        return <ExpensesItem name={name} cost={cost} id={id} />;
      })}
    </StyledExpensesList>
  );
};
