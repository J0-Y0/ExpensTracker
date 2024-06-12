export default ExpenseDate(props){
    const month = props.toLocalString('en-US',{month:'long'})
    return month
} 