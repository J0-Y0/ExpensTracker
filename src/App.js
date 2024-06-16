
import Expense from "./components/Expense/Expense";
import Card from "./components/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
function App() {
  const initialExpenses = [
    { id:0, date: new Date(2022, 7, 14),amount: 232, title: "Some  expense 1" },
    { id:1, date: new Date(2023, 8 ,4), amount: 233, title: "Another some expense " },
    { id:2, date: new Date(2024, 6, 1), amount: 234, title: "The next expense " }
  ]
  const [expenses, setExpenses] = useState(initialExpenses)
      
  const handleSave = (data) => {

    setExpenses((previousExpense)=>[data,...previousExpense])
  };

  return (

    <Card>
      
      <NewExpense onSave={handleSave} />
      <Expense expenses={expenses} />
      
      
    </Card>
   
  )
}

export default App;
