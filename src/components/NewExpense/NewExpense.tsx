import { FunctionComponent, useState } from "react";
import { ExpenseItemType } from "./../Expenses/Expenses";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

interface NewExpenseProps {
  onAddExpenses: (props: ExpenseItemType) => void;
}

const NewExpense: FunctionComponent<NewExpenseProps> = ({ onAddExpenses }) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing((prev) => !prev);
  };

  const stopEditingHandler = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button type='button' onClick={startEditingHandler}>
          새 항목 추가하기
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={onAddExpenses}
        />
      )}
    </div>
  );
};

export default NewExpense;
