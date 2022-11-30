import "./ExpenseForm.scss";
import {
  ChangeEventHandler,
  useState,
  FormEventHandler,
  FunctionComponent,
} from "react";
import { ExpenseItemType } from "../Expenses/Expenses";

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
        <div className='new-expense__control'>
          <label htmlFor=''>항목</label>
          <input
            type='text'
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>금액</label>
          <input type='number' min='0' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='' className='new-expense__date'>
            날짜
          </label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onKeyDown={(e) => e.preventDefault()}
            onChange={dateChangeHandler}
          />
        </div>
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
