import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { changeUpdatedAt, decrement, increment, reset } from "./reducers/counter";
import { map } from "rxjs";

@Injectable()
export class AppEffects {
    constructor(private actions$: Actions) {}

    public updatedAt$ = createEffect(() => this.actions$.pipe(
        ofType(increment, decrement, reset),
        map(() => changeUpdatedAt({updatedAt: Date.now()}))
    ))
}