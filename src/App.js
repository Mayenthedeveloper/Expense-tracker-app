import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <>
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
    </>
  );
}

export default App;
