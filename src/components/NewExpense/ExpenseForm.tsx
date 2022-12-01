import "./ExpenseForm.scss";
import {
  ChangeEventHandler,
  useState,
  FormEventHandler,
  FunctionComponent,
} from "react";
import { ExpenseItemType } from "../Expenses/Expenses";
import Input from "../UI/Input/Input";

interface Props {
  onCancel: () => void;
  onSaveExpenseData: (expenseData: ExpenseItemType) => void;
}

interface UserInput {
  title: string;
  amount: number;
  date: Date;
}

const ExpenseForm: FunctionComponent<Props> = ({
  onCancel,
  onSaveExpenseData,
}) => {
  const defaultInput = {
    title: "",
    amount: 0,
    date: new Date(Date.now()),
  };

  const [userInput, setUserInput] = useState<UserInput>(defaultInput);

  const titleChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const amountChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: e.target.valueAsNumber };
    });
  };

  const dateChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    let dateInput: Date;
    if (e.target.valueAsDate !== null) {
      dateInput = e.target.valueAsDate;
    }
    setUserInput((prevState) => {
      return { ...prevState, date: dateInput };
    });
  };

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const expenseData = {
      ...userInput,
      id: (Math.random() * 10000).toFixed(),
    };
    onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <Input type='text' onChange={titleChangeHandler} label='항목' />
        <Input
          type='number'
          min='0'
          onChange={amountChangeHandler}
          label='금액'
        />
        <Input
          type='date'
          min='2019-01-01'
          max='2022-12-31'
          label='날짜'
          onKeydown={(e) => e.preventDefault()}
          onChange={dateChangeHandler}
        />
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>추가</button>
        <button type='button' onClick={onCancel}>
          취소
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
