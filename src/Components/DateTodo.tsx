import { DateTodoProps } from "@/Types";
import React from "react";

const DateTodo = (props: DateTodoProps) => {
  const day = props.date.toLocaleDateString("en-US", { day: "numeric" });
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const time = props.date.toLocaleTimeString("en-US", {hour: "numeric", minute: "numeric"});

  return (
    <div className="flex items-center gap-3">
      <div className="border border-pink-50 bg-pink-600 shadow rounded-xl p-3 flex flex-col justify-center items-center w-32">
        <div className="text-slate-100 font-bold">{month}</div>
        <div className="text-slate-200">{year}</div>
        <div className="text-slate-200 font-bold">{day}</div>
      </div>
      <div className="border border-pink-400 rounded-lg py-2 w-14 text-center">
        <div className="text-pink-400 font-semibold">{time}</div>
      </div>
    </div>
  );
};

export default DateTodo;
