import { Title } from "../BudgetApp/styles";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      <ExpensesList />
    </StyledExpenses>
  );
};
