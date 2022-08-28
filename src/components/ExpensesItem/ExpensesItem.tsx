import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { InputValues } from "../../context/ExpensesContext/types";
import { Badge } from "../Badge/Badge";
import { CloseButton, Name, StyledExpensesItem } from "./styles";

interface IProps {
  name: string;
  cost: number;
  id: string;
}

export const ExpensesItem = ({ name, cost, id }: IProps) => {
  const { deleteItem } = useExpensesContext();

  const handleDeleteButton = () => {
    deleteItem(id);
  };

  return (
    <StyledExpensesItem>
      <Name>{name}</Name>
      <Badge cost={cost} />
      <CloseButton onClick={handleDeleteButton}>X</CloseButton>
    </StyledExpensesItem>
  );
};
