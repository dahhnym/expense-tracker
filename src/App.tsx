import "./reset.css";
import Expenses, { ExpenseItemType } from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "관리비",
      amount: 90000,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "화장지",
      amount: 15000,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "자동차 보험",
      amount: 600000,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "생수",
      amount: 12000,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpensesHandler = (expense: ExpenseItemType) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div
      className='App'
      style={{
        minWidth: "40rem",
        maxWidth: "50rem",
        margin: "1rem auto 0",
      }}
    >
      <NewExpense onAddExpenses={addExpensesHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
