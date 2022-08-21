import styled from "styled-components";
import { Color } from "../../types";

const StyledBudgetApp = styled.div`
  padding: 10px 15px;
  background-color: ${Color.White};
  margin-top: 30px;
`;

const BudgetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

export { Title, StyledBudgetApp, BudgetHeader };
