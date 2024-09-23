import React from "react";
import TodoCard from "./TodoCard";
import { ItemsTodos } from "@/Types";

const Todos = (props: ItemsTodos) => {
  return (
    <div className="bg-pink-100 border-pink-100 rounded-lg shadow flex flex-col gap-3 max-w-3xl  mx-auto sm:p-10">
      <TodoCard title={props.items[0].title} date={props.items[0].date} />
      <TodoCard title={props.items[1].title} date={props.items[1].date} />
      <TodoCard title={props.items[2].title} date={props.items[2].date} />
      <TodoCard title={props.items[3].title} date={props.items[3].date} />
      <TodoCard title={props.items[4].title} date={props.items[4].date} />
    </div>
  );
};

export default Todos;
