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

  const overspending = Math.abs(totalRemaining);

  return (
    <StyledRemaining $negative={totalRemaining}>
      {totalRemaining >= 0 ? (
        <SubTitle>
          Remaining: {totalRemaining} {currency}
        </SubTitle>
      ) : (
        <SubTitle>
          Overspending by {overspending} {currency}
        </SubTitle>
      )}
    </StyledRemaining>
  );
};
