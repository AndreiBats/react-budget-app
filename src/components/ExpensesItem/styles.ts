import styled from "styled-components";
import { Color } from "../../config";

const StyledExpensesItem = styled.li`
  display: flex;
  justify-content: space-between;
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
`;

export { Name, StyledExpensesItem, CloseButton };
