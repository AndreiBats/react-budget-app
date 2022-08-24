import { Budget } from "../Budget/Budget";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Expenses } from "../Expenses/Expenses";
import { Remaining } from "../Remaining/Remaining";
import { Spent } from "../Spent/Spent";
import { Title, StyledBudgetApp, BudgetHeader } from "./styles";

export const BudgetApp = () => {
  return (
    <>
      <StyledBudgetApp>
        <BudgetHeader>
          <Title>Budget App</Title>
          <CustomSelect />
        </BudgetHeader>
        <Budget />
        <Remaining />
        <Spent />
        <Expenses />
      </StyledBudgetApp>
    </>
  );
};
