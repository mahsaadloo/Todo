"use client";

import { TodoProps } from "@/Types";
import React, { useState } from "react";
import DateTodo from "./DateTodo";

const TodoCard = (props: TodoProps) => {
  const [title, setTitle] = useState(props.title);

  const editHandler = () => {
    setTitle("updated");
  };
  return (
    <div>
      <div className="border border-pink-600 shadow rounded-xl max-w-2xl mx-auto bg-pink-200 px-5 py-3">
        <div className="sm:flex justify-between items-center">
          <div className="sm:flex gap-10 items-center">
            <div>
              <DateTodo date={props.date} />
            </div>
            <div className="font-bold text-pink-700">{title}</div>
          </div>
          <div className="flex gap-3 text-slate-100 font-bold">
            <button
              onClick={editHandler}
              className="bg-pink-600 p-2 rounded-xl hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
            >
              Edit
            </button>
            <button className="bg-pink-600 p-2 rounded-xl hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
