import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
function Expense({ expenses }) {
    const [filteredYear, setFilteredYear] = useState('all')


    const handleFilterChange = (year) => {
        setFilteredYear(year)

    }
    const filteredExpenses = filteredYear === "all" ? expenses : expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    return (
        <div className="expense">
            <ExpenseFilter selected={filteredYear} onFilter={handleFilterChange} years={expenses.map((expense) => expense.date.getFullYear())} />
            {filteredExpenses.map((expense) => <ExpenseItem key={expense.id} expense={expense}  />)}

        </div>


    );
}

export default Expense;