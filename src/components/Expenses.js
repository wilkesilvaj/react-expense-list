import ExpenseItem from "./ExpenseItem";
const Expenses = (props) => {
  return (
    <div className="expenses">
      <ExpenseItem
        id={props.expenses[0].id}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        key={props.expenses[0].id}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        id={props.expenses[1].id}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        key={props.expenses[1].id}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        id={props.expenses[2].id}
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        key={props.expenses[2].id}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        id={props.expenses[3].id}
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        key={props.expenses[3].id}
        date={props.expenses[3].date}
      />
    </div>
  );
};

export default Expenses;
