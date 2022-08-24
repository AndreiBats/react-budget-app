import { useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useInput } from "../../hooks/useInput";
import { Input } from "../BudgetInput/BudgetInput";
import { SubTitle, StyledBudget, ButtonEdit } from "./styles";

export const Budget = () => {
  const budgetInput = useInput();
  const { budget, setBudget } = useBudgetContext();
  const { currency } = useCurrencyContext();
  const [buttonValue, setButtonValue] = useState<boolean>(true);

  const handleButtonValue = () => {
    setBudget(+budgetInput.value);
    setButtonValue(!buttonValue);
  };

  return (
    <StyledBudget>
      {buttonValue ? (
        <SubTitle>
          Budget: {budget} {currency}
        </SubTitle>
      ) : (
        <Input
          {...budgetInput}
          type="number"
          placeholder="Enter budget..."
          min="0"
        />
      )}

      <ButtonEdit type="button" onClick={handleButtonValue}>
        {buttonValue ? "Edit" : "Save"}
      </ButtonEdit>
    </StyledBudget>
  );
};
