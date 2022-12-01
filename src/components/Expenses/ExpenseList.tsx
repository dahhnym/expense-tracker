import { FunctionComponent } from "react";
import ExpenseItem from "./ExpenseItem";
import { ExpenseItemType } from "./Expenses";

interface Props {
  filteredExpenses: ExpenseItemType[];
}

const ExpenseList: FunctionComponent<Props> = ({ filteredExpenses }) => {
  return (
    <ul>
      {filteredExpenses.map((expense) => {
        return <ExpenseItem expenseData={expense} />;
      })}
    </ul>
  );
};

export default ExpenseList;
