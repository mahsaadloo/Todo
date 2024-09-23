"use client";

import { FilterTodos, NewTodos, Todos } from "@/Components";
import { useState } from "react";

const Test_Todos = [
  {
    id: "t1",
    date: new Date(2024, 6, 20, 12, 30),
    title: "English class",
  },
  {
    id: "t2",
    date: new Date(2024, 7, 21, 18, 30),
    title: "Ballet class",
  },
  {
    id: "t3",
    date: new Date(2024, 8, 20, 8, 0),
    title: "Study",
  },
  {
    id: "t4",
    date: new Date(2024, 8, 21, 10, 40),
    title: "Household chores",
  },
  {
    id: "t5",
    date: new Date(2024, 9, 5, 8, 0),
    title: "Exam",
  },
];

export default function Home() {
  const [todos, setTodos] = useState(Test_Todos)
  

  const addNewTodosHandler = (todo: any) => {
    setTodos((prevTodos) => {
      return [todo, ...prevTodos]
    })
  };

  return (
    <div>
      <NewTodos onAddNewTodos={addNewTodosHandler} />
      <Todos item={todos} />
    </div>
  );
}
