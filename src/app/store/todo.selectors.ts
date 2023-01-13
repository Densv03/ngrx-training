import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODO_KEY } from '../reducers/todo';
import { TodoState } from './todo.state';

export const featureSelector = createFeatureSelector<TodoState>(TODO_KEY);

export const todoListSelector = createSelector(
  featureSelector,
  (state) => state.todos
);
export const activeTodoSelector = createSelector(
  featureSelector,
  (state) => state.activeTodo
);
