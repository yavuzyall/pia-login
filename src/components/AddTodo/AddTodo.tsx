import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4} from 'uuid';
import { addTodo } from "../../features/todos/todoSlice";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const handleSubmitTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if(!title.trim()) return;

        const newTodoId = uuidv4(); 
        const newTodo = {
            id: newTodoId,
            title,
            completed: false,
        }

        dispatch(addTodo(newTodo));
        setTitle("");
        
    };
  return (
    <div className="todo-add-item relative max-w-96 w-96">
      <form action="" onSubmit={handleSubmitTodo}>
        <input
          type="text"
          className="w-full border border-indigo-500 hover:border-indigo-700 rounded-md min-w-32 focus:outline-double focus:outline-indigo-700 px-2 mt-4 py-1"
          placeholder="Add todo..."
          value={title}
          onChange={(e) => {setTitle(e.target.value)}}
        />
        <div className="flex items-center align-middle">
          <button type="submit">
            <div className="absolute top-4 right-0 border-indigo-500 hover:border-indigo-700 rounded-md p-0.5">
              <svg
                className="w-7 h-7 text-indigo-500 dark:text-white hover:text-indigo-700 bg-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
