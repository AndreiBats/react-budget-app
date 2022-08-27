import styled from "styled-components";
import { Color } from "../../config";

const StyledRemaining = styled.div<{ $negative: number }>`
  background-color: ${({ $negative: $isNegative }) =>
    $isNegative >= 0 ? Color.Lilac : Color.Red};
  border-radius: 10px;
  margin-bottom: 20px;
`;

const SubTitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  padding: 36px 70px 40px 20px;
`;
export { StyledRemaining, SubTitle };
