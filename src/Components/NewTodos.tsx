import React from "react";

const NewTodos = () => {
  return (
    <div className="border p-10 bg-pink-100 border-pink-600 shadow mx-40 my-10 rounded-lg">
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm text-pink-700 font-bold dark:text-pink-500"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-pink-100 border border-pink-400 text-pink-700 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:text-pink-500 dark:focus:ring-pink-500 dark:focus:border-pink-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block mb-2 text-sm  text-pink-700 font-bold dark:text-pink-500"
          >
            Date
          </label>
          <input
            type="datetime-local"
            id="date"
            className="bg-pink-100 border border-pink-400 text-pink-700 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:text-pink-500 dark:focus:ring-pink-500 dark:focus:border-pink-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-pink-600 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
        >
          Add todo
        </button>
      </form>
    </div>
  );
};

export default NewTodos;
