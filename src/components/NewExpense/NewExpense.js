import "./NewExpense.css"
import NewExpenseForm from "./NewExpenseForm";

function NewExpense({ onSave }) {

    return (
        <NewExpenseForm onSave={onSave} />
    );
}

export default NewExpense;