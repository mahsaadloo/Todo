"use client";

import React from "react";
import TodosForm from "./TodosForm";
import { ItemsTodos, TodoProps } from "@/Types";

const NewTodos = (props: any) => {
  const saveTodosInputsHandler = (enteredInputs: any) => {
    const inputsData = {
      ...enteredInputs,
      id: Math.random().toString(),
      date: new Date(enteredInputs.date)
    };
    console.log(inputsData);

    props.onAddNewTodos(inputsData);
  };
  return (
    <div className="border p-10 bg-pink-100 border-pink-600 shadow mx-40 my-10 rounded-lg">
      <TodosForm onSaveTodosInputs={saveTodosInputsHandler} />
    </div>
  );
};

export default NewTodos;
