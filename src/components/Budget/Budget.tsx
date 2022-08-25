import { useState } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useInput } from "../../hooks/useInput";
import { useToggle } from "../../hooks/useToggle";
import { Input } from "../BudgetInput/BudgetInput";
import { SubTitle, StyledBudget, ButtonEdit } from "./styles";

export const Budget = () => {
  const budgetInput = useInput();
  const { budget } = useBudgetContext();
  const { currency } = useCurrencyContext();
  const [isEdit, toggleIsEdit] = useToggle();

  return (
    <StyledBudget>
      {isEdit ? (
        <Input
          {...budgetInput}
          type="number"
          placeholder="Enter budget..."
          min="0"
        />
      ) : (
        <SubTitle>
          Budget: {budget} {currency}
        </SubTitle>
      )}

      <ButtonEdit type="button" onClick={toggleIsEdit}>
        {isEdit ? "Save" : "Edit"}
      </ButtonEdit>
    </StyledBudget>
  );
};
