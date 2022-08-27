import { useInput } from "../../hooks/useInput";
import { SearchInput } from "../SearchInput/SearchInput";
import { Title } from "../BudgetApp/styles";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  const searchInput = useInput();
  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      <SearchInput {...searchInput} type="text" placeholder="search..." />
      <ExpensesList />
    </StyledExpenses>
  );
};
