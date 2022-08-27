import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { InputValues } from "../../context/ExpensesContext/types";
import { SubTitle } from "../Remaining/styles";
import { StyledRemaining } from "./styles";

export const Remaining = () => {
  const { currency } = useCurrencyContext();
  const { expenses } = useExpensesContext();
  const { budget } = useBudgetContext();

  const totalRemaining =
    budget -
    expenses
      .map((array: InputValues) => array.cost)
      .reduce((total: number, cost: number) => +total + +cost, 0);

  return (
    <StyledRemaining $isNegative={totalRemaining}>
      <SubTitle>
        Remaining: {totalRemaining} {currency}
      </SubTitle>
    </StyledRemaining>
  );
};
