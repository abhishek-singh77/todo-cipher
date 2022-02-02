import React from 'react';

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack, onClickDelete } = props;
  return (
    <div className="font-bold text-center w-3/4 items-center text-white mt-4 mx-auto px-4 py-4 bg-teal-500">
      <p className='py-2'>Completed Tasks</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="bg-orange-300 border-2">
              <li>{todo}</li>
              <button
                onClick={() => onClickBack(index)}
                className="text-white text-sm rounded-3xl py-2 px-3 bg-black mt-4  hover:bg-gray-400 hover:text-black mr-3 "
              >
                Undo
              </button>
              <button
                onClick={() => onClickDelete(index)}
                className="text-white text-sm rounded-3xl py-2 px-3 bg-black mt-4  hover:bg-gray-400 hover:text-black mr-3  "
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