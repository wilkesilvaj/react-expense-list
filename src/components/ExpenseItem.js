import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });    
  return (
    <div key={props.id} id={props.id} className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{priceFormatter.format(props.amount)}</div>
      </div>
    </div>
  );
};
new Intl.NumberFormat
export default ExpenseItem;
