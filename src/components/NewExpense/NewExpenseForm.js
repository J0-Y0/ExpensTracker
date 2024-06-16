import { useState } from "react"

export default function NewExpenseForm({ onSave })  {
    const [input, setInput] = useState({
        title: '',
        amount: '',
        date:''

    } )
   
    const handleChange = (event) => { 
        const { name, value } = event.target;

        const newInput = (name === "date") ? ({
            ...input, [name]: new Date(value).toISOString().slice(0, 10)
        }) : ({ ...input, [name]: value })




        // Now set the value of your date input:
        setInput(newInput)
    }

    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input.date)
        onSave({
            'title': input.title,
            'amount': input.amount,
            'date': new Date(input.date)
        })

        setInput({
            'title': "",
            'amount': "",
            'date': ""
        })
     }

    return (
        <div className="expense-form">
            <h2 className="title">Add new expense</h2>
            <form onSubmit={handleSubmit}>
            <input required key="title"  value={input.title}  onChange={handleChange} type="text" name="title" placeholder="Expanse name" />
                <input required key= "amount" value={input.amount}  onChange={handleChange} type="number" min="1" step="1" name="amount" placeholder="Expanse Amount" />
                <input required key="date" value={input.date} type="date" onChange={handleChange} min='2019-01-01' name="date"
                    max='2022-12-31' />
            <input type="submit" value="Add Expense" />
            </form>
        </div>
        
        )
}