import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  //Function which will be sent to a child component as a prop so that the child component can send data back to this component
  const saveExpenseDataHandler = (inputExpenseData) => {
    const expenseData = {
      ...inputExpenseData,
      id: Math.random().toString(), // Dummy unique id for this simple project
    };
    // console.log("*==============================*");
    // console.log("Inside NewExpense");
    // console.log(expenseData);
    // console.log("*==============================*");

    // Calls on function passed on by parent component to send data back to it
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
