import styled from "styled-components";
import { Color } from "../../config";

const StyledExpensesItem = styled.li`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 75% 20% 5%;
  padding: 15px 20px;
  border-bottom: 2px solid ${Color.Violet};
`;

const Name = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${Color.DarkPink};
  text-align: end;
`;

export { Name, StyledExpensesItem, CloseButton };
