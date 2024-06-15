
import Expense from "./components/ExpenseItem/Expense";
import Card from "./components/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
function App() {
  const initialExpenses = [
    { "date": new Date(2022, 1, 1), "amount": 232, "title": "some expense 1" },
    { "date": new Date(2023, 1, 1), "amount": 233, "title": "another some expense " },
    { "date": new Date(2024, 1, 1), "amount": 234, "title": "the next expense " }
  ]
  const [expenses, setExpenses] = useState(initialExpenses)
      
  const handleSave = (data) => {
    console.log("Expense saved:", data);
    setExpenses([...expenses, data])
  };


  return (
    <Card>
      <NewExpense onSave={handleSave} />

      <div className="expense">
        {
          expenses.map((item) => <Expense key={item.amount} expense={item} />)
        }
      </div>
      
      
    </Card>
   
  )
}

export default App;
