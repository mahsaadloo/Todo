import React from "react";
import TodoCard from "./TodoCard";
import { ItemsTodos } from "@/Types";

const TodoList = (props: ItemsTodos) => {
  if (props.items.length === 0) {
    return <h2 className="text-pink-700 font-semibold text-center text-3xl"> There is nothing to show </h2>;
  }

  return (
    <div className="bg-pink-100 border-pink-100 rounded-lg shadow flex flex-col gap-3 max-w-3xl mx-auto sm:p-10">
      <ul>
        {props.items.map((todo) => (
          <TodoCard key={todo.id} title={todo.title} date={todo.date} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
