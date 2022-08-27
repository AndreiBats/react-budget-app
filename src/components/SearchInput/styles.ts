import styled from "styled-components";
import { Color } from "../../config";

const StyledSearchInput = styled.input`
  width: 100%;
  padding: 15px 135px 15px 20px;
  margin: 30px 0 10px;
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

export { StyledSearchInput };
