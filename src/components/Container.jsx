import React from "react";
import ToDo from "./ToDo";

const Container = () => {
  return (
    <div className="mx-auto  bg-sky-300 border 4 container border-3 w-2/3 ">
          <form className="mt-4 px-2 w-5/6 px-auto">
            <input placeholder="Task" />
            <button type="submit" className="button inline rounded border-2 " > Add Task </button>
          </form>

          <ToDo />
    </div>
  );
};

export default Container;
