import React from 'react';

export default function ExpenseDate({ date }) {
    const month = date.toLocaleString("en-US", { month: "long" })
    const day = date.toLocaleString("en-US", { day: "2-digit" })
    const year = date.toLocaleString("en-US", { year: "numeric" })
    return (
        <div className='expense-date'>
            <h4>{month}</h4>
            <h2>{day}</h2>
            <h5>{year}</h5>
        </div>
    )

} 