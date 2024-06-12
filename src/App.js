
import { dark } from "@mui/material/styles/createPalette";
import ExpenseItems from "./components/ExpenseItem";
import { Container } from '@mui/material';
function App() {
  const expenses = [
    { "date": new Date(2022, 1, 1), "amount": 232, "title": "title 1" },
    { "date": new Date(2023, 1, 1), "amount": 233, "title": "title 2" },
    { "date": new Date(2024, 1, 1), "amount": 234, "title": "title 3" }
        
  ]
  
  return (


    <Container maxWidth="md" >
      {
        expenses.map((item) => <ExpenseItems expense={item} />)

      }

    </Container>
   
  )
}

export default App;
