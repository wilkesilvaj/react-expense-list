import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  // Set the start value to the first option's value (it should be dynamic and retrieve current year instead, but its fine for now)
  const [selectedYear, setSelectedYear] = useState("2022");

  // Local variable which takes the expenses and filters it down below
  let filteredExpenses = props.expenses.filter(
    (expense) => new Date(expense.date).getFullYear() == selectedYear
  );

  //Function which will be sent to a child component as a prop so that the child component can send data back to this component
  const filterByYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onFilterByYear={filterByYearHandler}
        />
       {/* {expensesContent}  */}
       <ExpensesList expenses={filteredExpenses} />
        {/* <ExpenseItem
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
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
