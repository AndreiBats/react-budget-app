import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { InputValues } from "../../context/ExpensesContext/types";
import { SubTitle } from "../Spent/styles";
import { StyledSpent } from "./styles";

export const Spent = () => {
  const { expenses } = useExpensesContext();
  const { currency } = useCurrencyContext();
  const totalSpent = expenses
    .map((array: InputValues) => array.cost)
    .reduce((total: number, cost: number) => +total + +cost, 0);

  return (
    <StyledSpent>
      <SubTitle>
        Spent so far: {totalSpent} {currency}
      </SubTitle>
    </StyledSpent>
  );
};
