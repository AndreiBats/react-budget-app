import { SubmitHandler, useForm } from "react-hook-form";
import { Title } from "./styles";
import {
  DoneButton,
  ExpensesCost,
  ExpensesName,
  StyledAddExpenses,
} from "./styles";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";

type DoneFormValues = {
  name: string;
  cost: number;
};

export const AddExpenses = () => {
  const { expenses, setExpenses } = useExpensesContext();
  const { register, handleSubmit, reset } = useForm<DoneFormValues>();
  const onSubmit: SubmitHandler<DoneFormValues> = (formValues) => {
    const newExpenses = { ...formValues, id: uuidv4() };
    setExpenses(newExpenses);

    reset();
  };

  return (
    <StyledAddExpenses onSubmit={handleSubmit(onSubmit)}>
      <Title>Add Expenses</Title>
      <ExpensesName
        type="text"
        placeholder="enter name..."
        {...register("name")}
      />
      <ExpensesCost
        type="number"
        placeholder="enter cost..."
        {...register("cost")}
      />
      <DoneButton type="submit">Done</DoneButton>
    </StyledAddExpenses>
  );
};
