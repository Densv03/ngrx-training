import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { countSelector, decrement, increment, reset, updatedAtSelector } from "./reducers/counter";
import { map, Observable } from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public count$: Observable<number> = this.store.select(countSelector);
    public isNegative$ = this.count$.pipe(map(count => count <= 0));
    public updatedAt$ = this.store.select(updatedAtSelector);

    constructor(private store: Store) {
    }

    public increment(): void {
        this.store.dispatch(increment());
    }

    public decrement(): void {
        this.store.dispatch(decrement());
    }

    public reset(): void {
        this.store.dispatch(reset());
    }
}
