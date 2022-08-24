import React from "react";
import { AddExpenses } from "./components/AddExpenses/AddExpenses";
import { BudgetApp } from "./components/BudgetApp/BudgetApp";
import { Expenses } from "./components/Expenses/Expenses";

import { Wrapper } from "./styles";

export const App = () => {
  return (
    <Wrapper>
      <BudgetApp />
      <Expenses />
      <AddExpenses />
    </Wrapper>
  );
};
