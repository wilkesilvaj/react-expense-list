import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    

    const titleChangeHandler = (event) =>    {
        setTitle(event.target.value);
    }
    const amountChangeHandler = (event) =>    {
        setAmount(event.target.value);
    }
    const dateChangeHandler = (event) =>    {
        setDate(event.target.value);
    }

    console.log('Title: '+title+'  | Amount :'+amount+'  |Date: '+date);

  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input type="text" name="" id="" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input type="number" min="0.01" step="0.01" name="" id="" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" name="" id="" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
