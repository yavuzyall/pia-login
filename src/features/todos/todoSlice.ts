import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../services/axiosConfig";

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

interface TodosState {
    todos: Todo[];
    loading: boolean;
}

const initialState: TodosState = {
    todos: [],
    loading: false,
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id);
        },
        updateTodo: (state, action: PayloadAction<Todo>) => {
            const todo = action.payload;
            const index = state.todos.findIndex((t) => t.id === todo.id);
            if (index !== -1) {
                state.todos[index] = todo;
            }
        }
    },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
