import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  // If expenses list is empty, return message
  if (props.expenses.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No expenses were found for the selected year
      </h2>
    );
  }

  // If there's data, return an unordered list of ExpenseItems
  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
