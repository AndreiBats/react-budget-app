import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Badge } from "../Badge/Badge";
import { CloseButton, Name, StyledExpensesItem } from "./styles";

interface IProps {
  name: string;
  cost: number;
  id: string;
}

export const ExpensesItem = ({ name, cost, id }: IProps) => {
  const { deleteExpenses } = useExpensesContext();

  const handleDeleteButton = () => {
    deleteExpenses(id);
  };

  return (
    <StyledExpensesItem>
      <Name>{name}</Name>
      <Badge cost={cost} />
      <CloseButton onClick={handleDeleteButton}>X</CloseButton>
    </StyledExpensesItem>
  );
};
