"use client";

import { TodoProps } from "@/Types";
import React, { useState } from "react";

const UpdateTodos = (props: TodoProps) => {
  const [updateTitle, setUpdateTitle] = useState(props.title);
  const [updateDate, setUpdateDate] = useState(props.date);

  const titleUpdateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateTitle(event.target.value);
  };
  const dateUpdateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateDate(new Date(event.target.value));
  };

  const submitUpdateHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const updateTodosData = {
      title: updateTitle,
      date: new Date(updateDate),
    };
  };

  return (
    <form onSubmit={submitUpdateHandler} className="max-w-sm mx-auto">
      <div className="mb-5">
        <label
          htmlFor="updatetitle"
          className="block mb-2 text-sm text-pink-700 font-bold dark:text-pink-500"
        >
          Title
        </label>
        <input
          type="text"
          id="updatetitle"
          className="bg-pink-100 border border-pink-400 text-pink-700 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:text-pink-500 dark:focus:ring-pink-500 dark:focus:border-pink-500"
          value={}
          onChange={titleUpdateHandler}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="updatedate"
          className="block mb-2 text-sm  text-pink-700 font-bold dark:text-pink-500"
        >
          Date
        </label>
        <input
          type="datetime-local"
          id="updatedate"
          className="bg-pink-100 border border-pink-400 text-pink-700 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:text-pink-500 dark:focus:ring-pink-500 dark:focus:border-pink-500"
          value={}
          onChange={dateUpdateHandler}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-pink-600 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateTodos;
