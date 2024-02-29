import './ExpenseItem.css';
function ExpenseItem(props){

    // const expenseData = new Date(2021, 2,28);
    // const expenseTitle = 'car Insurance';
    // const expenseAmount = 294.65;
    // const LocationOfExpenditure = "india";
    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
            <h2>{props.title}</h2>
            {/* <h2>{LocationOfExpenditure}</h2> */}
            <div className="expense-item__price">{props.Amount}</div>
            </div>
        </div>
        )
}
export default ExpenseItem;
