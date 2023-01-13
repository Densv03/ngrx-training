import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TODO_KEY } from './todo';
import { todoReducer } from '../store/todo.reducers';
import { TodoState } from '../store/todo.state';

export interface State {
  [TODO_KEY]: TodoState;
}

export const reducers: ActionReducerMap<State> = {
  [TODO_KEY]: todoReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
