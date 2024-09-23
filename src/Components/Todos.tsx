import React, { useState } from "react";
import FilterTodos from "./FilterTodos";
import TodoList from "./TodoList";

const Todos = (props: any) => {
  const [filteredMonth, setFilteredMonth] = useState("choose");

  const filterChangeHandler = (selectedMonth: any) => {
    setFilteredMonth(selectedMonth);
  };

  const filteredTodos = props.item.filter((todo: any) => {
    // Show all todos
    if (filteredMonth === "choose") {
      return true;
    }
    return (
      todo.date.toLocaleDateString("en-US", { month: "long" }) === filteredMonth
    );
  });

  return (
    <li className="list-none">
      <FilterTodos
        selected={filteredMonth}
        onChangeFilter={filterChangeHandler}
      />
      <TodoList items={filteredTodos} />
    </li>
  );
};

export default Todos;
