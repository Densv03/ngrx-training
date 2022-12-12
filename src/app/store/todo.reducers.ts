import { createReducer, on } from "@ngrx/store";
import { initialState } from "./todo.state";
import { createTaskSuccess, deleteTask, getActiveTaskSuccess, getTasksSuccess } from "./todo.actions";

export const todoReducer = createReducer(initialState,
    on(deleteTask, (state, {id}) => {
        const newTodos = state.todos.filter(item => item.id !== id);
        return {...state, todos: newTodos};
    }),
    on(getTasksSuccess, (state, {todos}) => ({...state, todos})),
    on(createTaskSuccess, (state, {todos}) => ({...state, todos})),
    on(getActiveTaskSuccess, (state, {activeTodo}) => ({...state, activeTodo})),
)