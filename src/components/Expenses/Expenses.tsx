import "./Expenses.scss";
import { FunctionComponent, useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card/Card";

export type ExpenseItemType = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

export type ExpenseProps = {
  items: ExpenseItemType[];
};

const Expenses: FunctionComponent<ExpenseProps> = ({ items }) => {
  const [filterYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear() === Number(filterYear)
  );

  return (
    <Card className='expenses'>
      <h2 className='a11y-hidden'>연도별 지출금액 비교</h2>
      <ExpensesFilter onFilterChange={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <h2 className='a11y-hidden'>지출내역</h2>
      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
