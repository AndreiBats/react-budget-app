import React, { ChangeEvent } from "react";
import { StyledInput } from "./styles";

export interface IInput {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
  min?: string;
}

export const Input = ({ value, onChange, type, placeholder, min }: IInput) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      min={min}
    />
  );
};
