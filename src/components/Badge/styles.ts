import styled from "styled-components";
import { Color } from "../../config";

const StyledBadge = styled.span`
  background: ${Color.LightBlue};
  color: ${Color.White};
  border-radius: 10px;
  padding: 3px 13px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;

export { StyledBadge };
