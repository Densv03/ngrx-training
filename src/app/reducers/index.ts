import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { TODO_KEY, todoReducer, TodoState } from "./todo";

export interface State {
    [TODO_KEY]: TodoState,
}

export const reducers: ActionReducerMap<State> = {
    [TODO_KEY]: todoReducer,
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];