import React from 'react';

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className=" bg-blue-800 font-bold text-center w-3/4 text-white mt-4 px-4 py-4 mx-auto">
      <p className='py-2'>Todo List App</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="bg-orange-300 border-2">
              <li>{todo}</li>
              <button
                onClick={() => onClickComplete(index)}
                className="text-white rounded-3xl py-2 px-3 bg-black  hover:bg-gray-400 hover:text-black mr-3 "
              >
                Complete
              </button>
              <button
                onClick={() => onClickDelete(index)}
                className="text-white rounded-3xl py-2 px-3 bg-black  hover:bg-gray-400 hover:text-black mr-3 "
              >
                Remove
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};