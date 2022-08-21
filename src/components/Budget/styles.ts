import styled from "styled-components";
import { Color } from "../../types";

const StyledBudget = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${Color.LightBlue};
  border-radius: 10px;
  margin-bottom: 20px;
`;

const SubTitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  padding: 36px 70px 40px 20px;
`;

const ButtonEdit = styled.button`
  border-radius: 10px;
  border: none;
  padding: 10px 30px;
  max-height: 36px;
  background-color: ${Color.White};
  margin: 30px 20px 0 0;
`;

export { SubTitle, StyledBudget, ButtonEdit };
