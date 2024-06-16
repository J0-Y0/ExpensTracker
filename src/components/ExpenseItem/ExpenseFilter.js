import "./ExpenseFilter.css"
function ExpenseFilter({selected,onFilter,years}) {

    const handleChange = (event)=>{
        onFilter(event.target.value)
    };
    return (  
        <div className = "filter" >

            <select value = {selected}  onChange={handleChange} >
                            <option  value="all">All Year</option>
                            { years.map((year) => <option  value={year}>{year}</option>)}

            </select>
        
        </div>





    )
}

export default ExpenseFilter;