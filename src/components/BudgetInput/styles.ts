import styled from "styled-components";
import { Color } from "../../config";

export const StyledInput = styled.input`
  background-color: ${Color.LightBlue};
  border-radius: 10px;
  border: none;
  padding: 36px 38px 40px 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
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
