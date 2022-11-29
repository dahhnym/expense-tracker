import {
  ChangeEventHandler,
  FormEventHandler,
  FunctionComponent,
  useState,
} from "react";
import { ExpenseItemType } from "./Expenses/Expenses";
import "./NewExpense.scss";

interface NewExpenseProps {
  onAddExpenses: (props: ExpenseItemType) => void;
}

const NewExpense: FunctionComponent<NewExpenseProps> = ({ onAddExpenses }) => {
  const today = new Date(Date.now());

  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState(0);
  const [dateInput, setDateInput] = useState(today);

  const titleChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitleInput(e.target.value);
  };

  const amountChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAmountInput(e.target.valueAsNumber);
  };

  const dateChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.valueAsDate !== null) {
      setDateInput(e.target.valueAsDate);
    }
  };

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const expenseData = {
      id: (Math.random() * 10000).toFixed(),
      title: titleInput,
      amount: amountInput,
      date: dateInput,
    };
    onAddExpenses(expenseData);
  };

  return (
    <div className='new-expense'>
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label htmlFor=''>항목</label>
            <input
              type='text'
              value={titleInput}
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
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <button type='submit' className='new-expense__actions'>
          추가하기
        </button>
      </form>
    </div>
  );
};

export default NewExpense;
