import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const changeYearHandler = (event) => {
    let selectedYear = event.target.value;
    // console.log('*==============================*');
    // console.log('Inside ExpensesFilter')
    // console.log(selectedYear);
    // console.log('*==============================*');

    // Calls the function which was passed on by the parent component
    props.onFilterByYear(selectedYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={changeYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
