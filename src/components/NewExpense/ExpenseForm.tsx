import "./ExpenseForm.scss";
import {
  ChangeEventHandler,
  useState,
  FormEventHandler,
  FunctionComponent,
  useRef,
} from "react";
import { ExpenseItemType } from "../Expenses/Expenses";
import Input, { InputRefHandle } from "../UI/Input/Input";

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
    date: new Date(1900, 1, 1),
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

  const titleInputRef = useRef<InputRefHandle>(null);
  const amountInputRef = useRef<InputRefHandle>(null);
  const dateInputRef = useRef<InputRefHandle>(null);

  const checkValidation = () => {
    if (userInput.title.trim().length === 0) {
      titleInputRef.current?.activate();
      alert("지출항목을 입력하세요");
      return false;
    }
    if (userInput.amount === 0 || isNaN(userInput.amount)) {
      amountInputRef.current?.activate();
      alert("지출금액을 입력하세요");
      return false;
    }
    if (userInput.date.getFullYear() === 1900) {
      dateInputRef.current?.activate();
      alert("지출날짜를 입력하세요");
      return false;
    }
    return true;
  };

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const isValid = checkValidation();
    if (isValid) {
      const expenseData = {
        ...userInput,
        id: (Math.random() * 10000).toFixed(),
      };
      onSaveExpenseData(expenseData);
    } else return;
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <Input
          type='text'
          onChange={titleChangeHandler}
          label='항목'
          ref={titleInputRef}
        />
        <Input
          type='number'
          min='0'
          onChange={amountChangeHandler}
          label='금액'
          ref={amountInputRef}
        />
        <Input
          type='date'
          min='2019-01-01'
          max='2022-12-31'
          label='날짜'
          onKeydown={(e) => e.preventDefault()}
          onChange={dateChangeHandler}
          ref={dateInputRef}
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
