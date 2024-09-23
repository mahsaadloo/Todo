import React from "react";

const FilterTodos = (props: any) => {
  const dropDownChangeHandler = (event: any) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="sm:flex items-center justify-between mb-5 max-w-lg mx-auto">
      <label
        htmlFor="month"
        className="block mb-2 text-sm font-bold text-pink-700 dark:text-pink-200"
      >
        Select a Month
      </label>
      <select
        id="month"
        value={props.selected}
        onChange={dropDownChangeHandler}
        className="bg-pink-50 border max-w-sm border-pink-400 text-pink-700 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
      >
        <option value="choose" selected>
          Choose a Month
        </option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
    </div>
  );
};

export default FilterTodos;
