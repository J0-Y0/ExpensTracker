import { useState } from "react"

export default function NewExpenseForm({ onSave })  {
    const [input, setInput] = useState({
        'title': "",
        'amount': 0,
        'date': new Date   ()

    } )
   
    const handleChange = (event) => { 
        console.log(event.target.value)
        if (event.target.name === "date") {
            setInput({
                ...input, [event.target.name]: new Date(event.target.value)
            })
        }
        else {
            setInput({
                ...input, [event.target.name]: event.target.value
            })
        }
       
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onSave(input)
        setInput({
            'title': "",
            'amount': 0,
            'date': ''
        })
     }

    return (
        <div className = "expense-form">
            <form onSubmit={handleSubmit}>
            <input value={input.title}  onChange={handleChange} type="text" name="title" placeholder="Expanse name" />
            <input value={input.amount}  onChange={handleChange} type="number" min="1" step="1" name="amount" placeholder="Expanse Amount" />
            <input value={input.date} onChange={handleChange}  type="date" name="date" min="2024-01-01"/>
            <input type="submit"  />
            </form>
        </div>
        
        )
}