import React , { useState }from 'react';
import ExpenseDate from './ExpenseDate';
import "./Expense.css"


export default function ExpenseItem({ expense }) {

    const { date: date, amount, title } = expense;
    const [title,setTitle] = useState(title)

    const handleClick = () => {
        console.log("title changed ")
        setTitle("new title update")
    }
    return (
        <div className='expense-item'>
            <ExpenseDate date={ date} />
            <div>{title}    <button onClick={handleClick} className='expense-item-amount' >Change title</button></div>
            <div className='expense-item-amount'>$ {amount}</div>
        </div>  
    )
}

