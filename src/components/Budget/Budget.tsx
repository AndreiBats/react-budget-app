import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useInput } from "../../hooks/useInput";
import { useToggle } from "../../hooks/useToggle";
import { Input } from "../BudgetInput/BudgetInput";
import { SubTitle, StyledBudget, Button } from "./styles";

export const Budget = () => {
  const budgetInput = useInput();
  const { budget, setBudget } = useBudgetContext();
  const { currency } = useCurrencyContext();
  const [isActive, toggleIsActive] = useToggle(false);

  const handleButtonValue = () => {
    setBudget(+budgetInput.value);
    toggleIsActive();
  };

  const handleButtonEdit = () => {
    toggleIsActive();
  };

  return (
    <StyledBudget>
      {isActive ? (
        <>
          <Input
            {...budgetInput}
            type="number"
            placeholder="Enter budget..."
            min="0"
          />
          <Button type="button" onClick={handleButtonValue}>
            Save
          </Button>
        </>
      ) : (
        <>
          <SubTitle>
            Budget: {budget} {currency}
          </SubTitle>
          <Button type="button" onClick={handleButtonEdit}>
            Edit
          </Button>
        </>
      )}
    </StyledBudget>
  );
};
