import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";

export const increment = createAction('[COUNTER] Increase');
export const decrement = createAction('[COUNTER] Decrease');
export const reset = createAction('[COUNTER] Reset');

export interface CounterState {
    count: number;
}

export const initialState: CounterState = {
    count: 0,
};

export const counterReducer = createReducer(initialState,
    on(increment, state => ({...state, count: state.count + 1})),
    on(decrement, state => ({...state, count: state.count - 1})),
    on(reset, state => ({...state, count: 0})));

export const featureSelector = createFeatureSelector<CounterState>('counter');

export const countSelector = createSelector(featureSelector, state => state.count);