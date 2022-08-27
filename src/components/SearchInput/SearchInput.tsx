import { ChangeEvent } from "react";
import { StyledSearchInput } from "./styles";

export interface ISearchInput {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
}

export const SearchInput = ({
  value,
  onChange,
  type,
  placeholder,
}: ISearchInput) => {
  return (
    <StyledSearchInput
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};
