import "./ExpenseFilter.css"
function ExpenseFilter({selected,onFilter,years}) {

    const handleChange = (event)=>{
        onFilter(event.target.value)
    };
    return (  
        <div className = "filter" >
            
            <h3>Filter by year</h3>
            <select value = {selected}  onChange={handleChange} >
                            <option key="all" value="all">All Year</option>
                            { years.map((year) => <option key={year}  value={year}>{year}</option>)}
            </select>
        </div>
    )
}

export default ExpenseFilter;