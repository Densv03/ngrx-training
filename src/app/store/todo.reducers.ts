import { createReducer, on } from "@ngrx/store";
import { initialState } from "./todo.state";
import { createTaskSuccess, deleteTaskSuccess, getActiveTaskSuccess, getTasksSuccess } from "./todo.actions";

export const todoReducer = createReducer(initialState,
    on(deleteTaskSuccess, (state, {todos}) => ({...state, todos})),
    on(getTasksSuccess, (state, {todos}) => ({...state, todos})),
    on(createTaskSuccess, (state, {todos}) => ({...state, todos})),
    on(getActiveTaskSuccess, (state, {activeTodo}) => ({...state, activeTodo})),
)