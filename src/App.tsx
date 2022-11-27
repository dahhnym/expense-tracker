import "./reset.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  return (
    <div
      className='App'
      style={{
        // border: "solid 1px red",
        width: "1000px",
        margin: "1rem auto 0",
      }}>
      <NewExpense />
      <Expenses />
    </div>
  );
}

export default App;
