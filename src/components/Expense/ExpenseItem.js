import ExpenseDate from './ExpenseDate';
import "./Expense.css"


export default function ExpenseItem({ expense }) {
    // console.log("title before setTitle ")

    const { date, amount ,title} = expense;

  
    return (
        <div className='expense-item'>
            <ExpenseDate date={ date} />
            <div>
                {title}
            </div>
            <div className='expense-item-amount'>$ {amount}</div>
        </div>  
    )
}

