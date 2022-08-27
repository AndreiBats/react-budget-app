import { useInput } from "../../hooks/useInput";
import { Title } from "../BudgetApp/styles";
import { Input } from "../BudgetInput/BudgetInput";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  const expensesInput = useInput();

  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      <Input {...expensesInput} type="text" placeholder="search" />
      <ExpensesList />
    </StyledExpenses>
  );
};
