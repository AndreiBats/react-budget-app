import React from "react";
import { SubTitle, StyledBudget, ButtonEdit } from "./styles";

export const Budget = () => {
  return (
    <StyledBudget>
      <SubTitle>Budget: 3000$</SubTitle>
      <ButtonEdit type="button">Edit</ButtonEdit>
    </StyledBudget>
  );
};
