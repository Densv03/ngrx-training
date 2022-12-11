import { createReducer, on } from "@ngrx/store";
import { initialState, TodoItem } from "./todo.state";
import { createTask, createTaskSuccess, deleteTask, getTasksSuccess } from "./todo.actions";

export const todoReducer = createReducer(initialState,
    on(deleteTask, (state, {id}) => {
        const newTodos = state.todos.filter(item => item.id !== id);
        return {...state, todos: newTodos};
    }),
    on(createTask, (state, {name}) => {
        const newTask: TodoItem = {
            id: Date.now(),
            isCompleted: false,
            name
        };
        return {...state, todos: [...state.todos, newTask]};
    }),
    on(getTasksSuccess, (state, {todos}) => ({...state, todos})),
    on(createTaskSuccess, (state, {todos}) => ({...state, todos})),
)