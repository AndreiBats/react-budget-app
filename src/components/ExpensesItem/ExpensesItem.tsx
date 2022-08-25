import { Badge } from "../Badge/Badge";
import { CloseButton, Name, StyledExpensesItem } from "./styles";

export const ExpensesItem = () => {
  return (
    <StyledExpensesItem>
      <Name>shopping</Name>
      <Badge />
      <CloseButton>X</CloseButton>
    </StyledExpensesItem>
  );
};
