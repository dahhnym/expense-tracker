import { FunctionComponent } from "react";
import { ExpenseItemType } from "./Expenses";
import "./ExpenseItem.scss";

interface Props {
  expenseData: ExpenseItemType;
}

const ExpenseItem: FunctionComponent<Props> = ({ expenseData }) => {
  const { id, date, title, amount } = expenseData;

  return (
    <li key={id}>
      <div className='expense-item'>
        <p>{`${date.toLocaleDateString()}`}</p>
        <div className='expense-item__description'>
          <p className='expense-item__title'>{title}</p>
          <p className='expense-item__amount'>{amount.toLocaleString()} 원</p>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
