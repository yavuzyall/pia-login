import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import AddTodo from "../../components/AddTodo/AddTodo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { deleteTodo, Todo, updateTodo } from "../../features/todos/todoSlice";
import UpdateTodoModal from "../../components/UpdateTodoModal/UpdateTodoModal";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo>({
    id: "0",
    title: "",
    completed: false,
  });
  useEffect(() => {}, []);

  const handleEditTodo = (todo: Todo) => {
    setIsShowModal(true);
    setCurrentTodo(todo);
    dispatch(updateTodo(todo));
  };

  function handleCheckChange(todo: Todo): void {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  }

  return (
    <Layout title="Todos" description="View, edit, add, or delete todos">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold">Add</h1>
        <AddTodo />
        <hr className="border border-indigo-100 w-full mt-5 shadow-md" />
        <h3 className="text-xl font-bold">Your List</h3>

        <div className="todo-list-item mt-4 w-8/12">
          <ul className="mx-auto">
            {todos.map((todo) => (
              <li className="flex w-full mt-4">
                <div className="flex justify-between border border-indigo-300 p-2 rounded-lg w-full align-middle items-center m-auto">
                  <div className="flex gap-2 items-center">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={todo.completed}
                        onChange={() => handleCheckChange(todo)}
                      />
                      <div className="w-6 h-6 flex items-center justify-center bg-white border-2 rounded-md border-indigo-500">
                        {todo.completed && (
                          <svg
                            className="w-4 h-4 text-indigo-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        )}
                      </div>
                      <span className="ml-2">{todo.title}</span>
                    </label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <button
                      className="text-orange-500 hover:text-orange-700 border rounded border-orange-500 hover:border-orange-700 p-0 px-0"
                      onClick={() => handleEditTodo(todo)}
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        className="w-5 h-5"
                      >
                        <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                      </svg>
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 border rounded border-red-500 hover:border-red-700 p-0 px-0"
                      onClick={(e) => {
                        dispatch(deleteTodo(todo.id));
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        className="w-5 h-5"
                      >
                        <path d="M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            ))}
            <li></li>
          </ul>
        </div>
      </div>
      {isShowModal ? (
        <UpdateTodoModal todo={currentTodo} setIsShowModal={setIsShowModal} />
      ) : null}
    </Layout>
  );
};

export default Todos;
