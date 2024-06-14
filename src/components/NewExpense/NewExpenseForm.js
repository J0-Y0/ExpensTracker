import { useState } from "react"

export default function NewExpenseForm ()  {
    const [input, setInput] = useState({
        'title': "",
        'amount': 0,
        'date': ''

    } )
   
    const handleChange = (event) => { 
        console.log(event.target.value)
        setInput({
            ...input, [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)
        setInput({
            'title': "",
            'amount': 0,
            'date': ''
        })
     }

    return (
        <div className = "expense-form">
            <form onSubmit={handleSubmit}>
            <input value={input.amount}  onChange={handleChange} type="text" name="title" placeholder="Expanse name" />
            <input value={input.amount}  onChange={handleChange} type="number" min="1" step="1" name="amount" placeholder="Expanse Amount" />
            <input value={input.date} onChange={handleChange}  type="date" name="date" min="2024-01-01"/>
            <input type="submit"  />
            </form>
        </div>
        
        )
}