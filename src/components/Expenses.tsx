import "./Expenses.scss";
import { FunctionComponent, useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Chart from "./Chart/Chart";

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
    <article className='expenses'>
      <section>
        <h2 className='a11y-hidden'>연도별 지출금액 비교</h2>
        <ExpensesFilter onFilterChange={filterChangeHandler} />
        <Chart selectedYear={"2021"} />
      </section>
      <section>
        <h2 className='a11y-hidden'>지출내역</h2>
        <ul>
          {filteredExpenses.map((expense) => {
            const { id, date, title, amount } = expense;
            return (
              <li key={id}>
                <div className='expense-item'>
                  <p>{`${date.toLocaleDateString()}`}</p>
                  <div className='expense-item__description'>
                    <p className='expense-item__title'>{title}</p>
                    <p className='expense-item__amount'>
                      {amount.toLocaleString()} 원
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
};

export default Expenses;
