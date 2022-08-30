import { useInput } from "../../hooks/useInput";
import { SearchInput } from "../SearchInput/SearchInput";
import { Title } from "../BudgetApp/styles";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { StyledExpenses } from "./styles";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { useEffect, useState } from "react";

export const Expenses = () => {
  const searchInput = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setfilteredExpenses] = useState(expenses);

  useEffect((): void => {
    searchInput.value
      ? setfilteredExpenses(
          expenses.filter((expense) =>
            expense.name
              .toLowerCase()
              .includes(searchInput.value.toLocaleLowerCase())
          )
        )
      : setfilteredExpenses(expenses);
  }, [expenses, searchInput.value]);

  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      <SearchInput {...searchInput} type="text" placeholder="search..." />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </StyledExpenses>
  );
};
