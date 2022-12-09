import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export const COUNTER_KEY = 'counter';

export const increment = createAction('[COUNTER] Increase');
export const decrement = createAction('[COUNTER] Decrease');
export const reset = createAction('[COUNTER] Reset');
export const changeUpdatedAt = createAction('[COUNTER] Change Updated At', props<{ updatedAt: number }>());

export interface CounterState {
    count: number;
    updatedAt?: number;
}

export const initialState: CounterState = {
    count: 0,
};

export const counterReducer = createReducer(initialState,
    on(increment, state => ({...state, count: state.count + 1})),
    on(decrement, state => ({...state, count: state.count - 1})),
    on(reset, state => ({...state, count: 0})),
    on(changeUpdatedAt, (state, action) => ({...state, updatedAt: action.updatedAt})));

export const featureSelector = createFeatureSelector<CounterState>(COUNTER_KEY);

export const countSelector = createSelector(featureSelector, state => state.count);
export const updatedAtSelector = createSelector(featureSelector, state => state.updatedAt)