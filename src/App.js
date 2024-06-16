
import Expense from "./components/ExpenseItem/Expense";
import Card from "./components/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseItem/ExpenseFilter"
function App() {
  const initialExpenses = [
    { "date": new Date(2022, 1, 1), "amount": 232, "title": "some expense 1" },
    { "date": new Date(2023, 1, 1), "amount": 233, "title": "another some expense " },
    { "date": new Date(2024, 1, 1), "amount": 234, "title": "the next expense " }
  ]
  const [expenses, setExpenses] = useState(initialExpenses)
  const [filteredYear, setFilteredYear] = useState('all')
      
  const handleSave = (data) => {
    setExpenses((previousExpense)=>[data,...previousExpense])
  };
  const handleFilterChange =(year)=>{
    setFilteredYear(year)
  }
  return (
    <Card>
      <NewExpense onSave={handleSave} />
      <ExpenseFilter selected = {filteredYear} onFilter = {handleFilterChange} years = {expenses.map((expense)=>expense.date.getFullYear())} />
      <div className="expense">
        {
          expenses.map((item) =>{

            if (item.date.getFullYear() == filteredYear || filteredYear == "all"){
              return <Expense key={item.amount} expense={item} />
            }
            


          } )
        }
      </div>
      
      
    </Card>
   
  )
}

export default App;
