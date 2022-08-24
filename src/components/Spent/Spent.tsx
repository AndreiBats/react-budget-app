import React from "react";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { SubTitle } from "../Spent/styles";
import { StyledSpent } from "./styles";

export const Spent = () => {
  const { currency } = useCurrencyContext();
  return (
    <StyledSpent>
      <SubTitle>Spent so far: 1000 {currency}</SubTitle>
    </StyledSpent>
  );
};
