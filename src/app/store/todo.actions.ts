import { createAction, props } from "@ngrx/store";
import { TodoItem } from "./todo.state";

const GET_TASKS = '[TODO] Get tasks';
const GET_TASKS_SUCCESS = '[TODO] Get tasks success';

const GET_ACTIVE_TASK = '[TODO] Get task by id';
const GET_ACTIVE_TASK_SUCCESS = '[TODO] Get task by id success';

const UPDATE_ACTIVE_TASK = '[TODO] Update active task';
const UPDATE_ACTIVE_TASK_SUCCESS = '[TODO] Update active task success';

const CREATE_TASK = '[TODO] Create task';
const CREATE_TASK_SUCCESS = '[TODO] Create task success';

const DELETE_TASK = '[TODO] Delete task';
const DELETE_TASK_SUCCESS = '[TODO] Delete task success';

export const createTask = createAction(CREATE_TASK, props<{ name: string }>());
export const createTaskSuccess = createAction(CREATE_TASK_SUCCESS, props<{ todos: TodoItem[] }>());

// export const updateTask = createAction('[TODO] Update task');

export const deleteTask = createAction(DELETE_TASK, props<{ id: number }>());
export const deleteTaskSuccess = createAction(DELETE_TASK_SUCCESS, props<{ todos: TodoItem[] }>());

export const getActiveTask = createAction(GET_ACTIVE_TASK, props<{ id: number }>());
export const getActiveTaskSuccess = createAction(GET_ACTIVE_TASK_SUCCESS, props<{ activeTodo: TodoItem | null }>());

export const updateActiveTask = createAction(UPDATE_ACTIVE_TASK, props<{ activeTodo: TodoItem | null }>());
export const updateActiveTaskSuccess = createAction(UPDATE_ACTIVE_TASK_SUCCESS, props<{ activeTodo: TodoItem | null }>());

export const getTasks = createAction(GET_TASKS);
export const getTasksSuccess = createAction(GET_TASKS_SUCCESS, props<{ todos: TodoItem[] }>());