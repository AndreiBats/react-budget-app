import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";
import { StyledExpensesList } from "./styled";

export const ExpensesList = () => {
  const { expenses } = useExpensesContext();
  return (
    <StyledExpensesList>
      {expenses.map(({ name, cost }: any) => {
        return <ExpensesItem name={name} cost={cost} />;
      })}
    </StyledExpensesList>
  );
};
