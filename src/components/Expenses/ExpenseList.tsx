import { FunctionComponent } from "react";
import ExpenseItem from "./ExpenseItem";
import { ExpenseItemType } from "./Expenses";
import "./ExpenseList.scss";

interface Props {
  filteredExpenses: ExpenseItemType[];
}

const ExpenseList: FunctionComponent<Props> = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <h2 className='expense-list__fallback'>표시할 내용이 없습니다.</h2>;
  }

  return (
    <ul>
      {filteredExpenses.map((expense) => {
        return <ExpenseItem key={expense.id} expenseData={expense} />;
      })}
    </ul>
  );
};

export default ExpenseList;
