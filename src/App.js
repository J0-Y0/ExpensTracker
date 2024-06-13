
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";
function App() {
  const expenses = [
    { "date": new Date(2022, 1, 1), "amount": 232, "title": "some expense 1" },
    { "date": new Date(2023, 1, 1), "amount": 233, "title": "another some expense " },
    { "date": new Date(2024, 1, 1), "amount": 234, "title": "the next expense " }
  ]
  
  return (
    <Card>
      <div className="expense">
        {
          expenses.map((item) => <ExpenseItem key={item.amount} expense={item} />)
        }
      </div>
      
      
    </Card>
   
  )
}

export default App;
