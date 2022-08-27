import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { StyledBadge } from "./styles";

interface IProps {
  cost: string;
}

export const Badge = ({ cost }: IProps) => {
  const { currency } = useCurrencyContext();

  return (
    <StyledBadge>
      {cost} {currency}
    </StyledBadge>
  );
};
