import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { SubTitle } from "../Remaining/styles";

import { StyledRemaining } from "./styles";

export const Remaining = () => {
  const { currency } = useCurrencyContext();

  const a = -200;

  return (
    <StyledRemaining $isNegative={a}>
      <SubTitle>
        Remaining: {a} {currency}
      </SubTitle>
    </StyledRemaining>
  );
};
