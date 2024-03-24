import React, { useState } from "react";
import { Todo, updateTodo } from "../../features/todos/todoSlice";
import { useDispatch } from "react-redux";

const UpdateTodoModal: React.FC<{ todo: Todo, setIsShowModal: React.Dispatch<React.SetStateAction<boolean>> }> = ({ todo, setIsShowModal }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(todo.title);

  const handleSaveChanges = () => {
    dispatch(updateTodo({ ...todo, title }));
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-4 max-w-lg w-full">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">Update Todo</h2>
          <div className="flex border border-red-500 rounded-lg py-1 px-1 items-center align-middle cursor-pointer hover:border-red-700 text-red-500 hover:text-red-700"
          onClick={() => {setIsShowModal(false)}}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
              className="w-3 h-3"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
            </svg>
          </div>
        </div>

        <input
          type="text"
          className="w-full border border-gray-300 rounded-md px-2 py-1 mt-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => (handleSaveChanges(), setIsShowModal(false))}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTodoModal;
