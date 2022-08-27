import { Badge } from "../Badge/Badge";
import { CloseButton, Name, StyledExpensesItem } from "./styles";

interface IProps {
  name: string;
  cost: string;
}

export const ExpensesItem = ({ name, cost }: IProps) => {
  return (
    <StyledExpensesItem>
      <Name>{name}</Name>
      <Badge cost={cost} />
      <CloseButton>X</CloseButton>
    </StyledExpensesItem>
  );
};
