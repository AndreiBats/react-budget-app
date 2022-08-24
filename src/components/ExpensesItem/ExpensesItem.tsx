import { Badge } from "../Badge/Badge";
import { Close, Name, StyledExpensesItem } from "./styles";

export const ExpensesItem = () => {
  return (
    <StyledExpensesItem>
      <Name>shopping</Name>
      <Badge />
      <Close>X</Close>
    </StyledExpensesItem>
  );
};
