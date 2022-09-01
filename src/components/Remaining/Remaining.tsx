import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { SubTitle } from "../Remaining/styles";
import { StyledRemaining } from "./styles";

export const Remaining = () => {
  const { currency } = useCurrencyContext();
  const { expenses } = useExpensesContext();
  const { budget } = useBudgetContext();

  const totalRemaining =
    budget - expenses.reduce((total: number, { cost }) => total + cost, 0);

  const overspending = totalRemaining > 0;

  return (
    <StyledRemaining $negative={totalRemaining}>
      {overspending ? (
        <SubTitle>
          Remaining: {totalRemaining} {currency}
        </SubTitle>
      ) : (
        <SubTitle>
          Overspending by {Math.abs(totalRemaining)} {currency}
        </SubTitle>
      )}
    </StyledRemaining>
  );
};
