import "./Expenses.scss";
import { FunctionComponent } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Chart from "./Chart/Chart";

export type ExpenseProps = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

const Expenses: FunctionComponent<Array<ExpenseProps>> = (items) => {
  return (
    <article className='expenses'>
      <section>
        <h2 className='a11y-hidden'>연도별 지출금액 비교</h2>
        <ExpensesFilter />
        <Chart />
      </section>
      <section>
        <h2 className='a11y-hidden'>지출내역</h2>
        <ul>
          {Object.values(items).map((item) => {
            return (
              <li key={item.id}>
                <div className='expense-item'>
                  <p>{`${item.date.toLocaleDateString()}`}</p>
                  <div className='expense-item__description'>
                    <p className='expense-item__title'>{item.title}</p>
                    <p className='expense-item__amount'>
                      {item.amount.toLocaleString()} 원
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
