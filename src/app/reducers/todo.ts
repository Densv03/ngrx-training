import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export const TODO_KEY = 'todo';

export const createTask = createAction('[TODO] Create task', props<{ name: string }>());
export const updateTask = createAction('[TODO] Update task');
export const deleteTask = createAction('[TODO] Delete task', props<{ id: number }>());

export interface TodoItem {
    name: string;
    isCompleted: boolean;
    id: number;
}

export interface TodoState {
    todos: TodoItem[];
}

export const initialState: TodoState = {
    todos: [
        {
            name: 'Task 1',
            isCompleted: false,
            id: 1,
        },
        {
            name: 'Task 2',
            isCompleted: true,
            id: 2,
        },
        {
            name: 'Task 3',
            isCompleted: false,
            id: 3,
        },
    ],
};

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
    }));

export const featureSelector = createFeatureSelector<TodoState>(TODO_KEY);

export const todoListSelector = createSelector(featureSelector, state => state.todos);