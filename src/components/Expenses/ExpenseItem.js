import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title); // React hook
    const priceFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });    
    const clickHandler = () => {
      let newTitle = title + '!';
      setTitle(newTitle);
      // setTitle('Teeeeeest');
    }

  return (
    <Card key={props.id} id={props.id} className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{priceFormatter.format(props.amount)}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};
new Intl.NumberFormat
export default ExpenseItem;
