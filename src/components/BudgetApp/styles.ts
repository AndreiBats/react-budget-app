import styled from "styled-components";

const StyledBudgetApp = styled.div`
  display: flex;
  flex-direction: column;
`;

const BudgetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

export { Title, StyledBudgetApp, BudgetHeader };
