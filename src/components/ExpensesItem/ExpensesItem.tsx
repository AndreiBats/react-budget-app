import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { InputValues } from "../../context/ExpensesContext/types";
import { Badge } from "../Badge/Badge";
import { CloseButton, Name, StyledExpensesItem } from "./styles";

interface IProps {
  name: string;
  cost: string;
  id: string;
}

export const ExpensesItem = ({ name, cost, id }: IProps) => {
  const { expenses, setExpenses } = useExpensesContext();

  const handleDeleteButton = () => {
    const newArray = expenses.filter(
      (element: InputValues): boolean => element.id !== id
    );

    setExpenses(newArray);
    console.log(newArray);
  };

  return (
    <StyledExpensesItem>
      <Name>{name}</Name>
      <Badge cost={cost} />
      <CloseButton onClick={handleDeleteButton}>X</CloseButton>
    </StyledExpensesItem>
  );
};
