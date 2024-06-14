import React , { useState }from 'react';
import ExpenseDate from './ExpenseDate';
import "./Expense.css"


export default function Expense({ expense }) {
    // console.log("title before setTitle ")

    const {  date, amount } = expense;
    const [title, setTitle] = useState(expense.title)

    const handleClick = () => {
        setTitle("Updated ")

    }
    return (
        <div className='expense-item'>
            <ExpenseDate date={ date} />
            <div>
                {title}
                <button onClick={handleClick} className='expense-item-amount' >Change title</button>
            </div>
            <div className='expense-item-amount'>$ {amount}</div>
        </div>  
    )
}

