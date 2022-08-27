import styled from "styled-components";
import { Color } from "../../config";

const StyledAddExpenses = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
`;

const ExpensesName = styled.input`
  padding: 15px 135px 15px 20px;
  margin-bottom: 20px;
  background: ${Color.White};
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
`;

const ExpensesCost = styled.input`
  padding: 15px 135px 15px 20px;
  margin-bottom: 20px;
  background: ${Color.White};
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`;

const DoneButton = styled.button`
  background: ${Color.LightBlue};
  border-radius: 10px;
  color: ${Color.White};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding: 15px 148px;
  border: none;
  margin-bottom: 50px;
`;

export { StyledAddExpenses, ExpensesCost, ExpensesName, DoneButton, Title };
