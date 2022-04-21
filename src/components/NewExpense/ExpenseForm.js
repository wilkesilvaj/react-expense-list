import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //#region MultipleStatesSolution
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  //#endregion

  //#region oneStateSolution
  // const [userInput, setUserInput] = useState({
  //     title: '',
  //     amount: '',
  //     date: ''
  // });

  /** Whenever updating one main "Object-state", instead of multiple individual ones, it is:
   *  @ref @amountChangeHandler - BETTER to pass an anonymous function which then returns the desired previous state + your modifications. This is better because
   * that anonymous function will always have the latest state of this component being passed to it @ref @prevState , thus preventing any issues due to
   * updating the state again using an outdated former state.
   *
   *  @ref @titleChangeHandler - WORSE to directly use your setFunction to update the state directly, without an anonymous function. This because
   * React calls these functions and relies on the request at that time, so if React is processing multiple data/state updates at a given time
   * and you're simply trying to update the state WITHOUT an arrow function, React may be relying on an older data-version from a previous state update.
   *
   *
   */
  // const titleChangeHandler = (event) =>    {
  //     setUserInput({
  //         ...userInput,
  //         title: event.target.value
  //     });
  // }
  // const amountChangeHandler = (event) =>    {
  //     setUserInput((prevState) =>   {
  //         return {
  //             ...prevState,
  //             date: event.target.value
  //         }
  //     });
  // }
  // const dateChangeHandler = (event) =>    {
  //     setUserInput({
  //         ...userInput,
  //         date: event.target.value
  //     });
  // }
  //#endregion

  // Submit form handler
  const submitHandler = (event) => {
    // Prevents page refresh
    event.preventDefault();

    // Creates new object to hold all data in an organized manner
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    // console.log('*==============================*');
    // console.log('Inside ExpenseForm')
    // console.log(expenseData);
    // console.log('*==============================*');

    // Calls the function which was passed on by the parent component
    props.onSaveExpenseData(expenseData);

    /** Resets all states to their original values so the form data is reset once all data processing is done
     *  This relies on two-way binding, which is assinging a value to each input corresponding to my constants "title","amout" and "date"
    */
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name=""
            id=""
            value={title} // Enables two-way binding, which means that once I send this to the DB, for example, I could set the state for each variable to empty and it'll reset the form data
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name=""
            id=""
            value={amount} // Enables two-way binding, which means that once I send this to the DB, for example, I could set the state for each variable to empty and it'll reset the form data
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name=""
            id=""
            value={date} // Enables two-way binding, which means that once I send this to the DB, for example, I could set the state for each variable to empty and it'll reset the form data
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
