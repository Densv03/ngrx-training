import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { filter, map, Observable } from "rxjs";
import { getActiveTask, updateActiveTask } from "../store/todo.actions";
import { TodoItem } from "../store/todo.state";
import { activeTodoSelector } from "../store/todo.selectors";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
    public activeTodo$: Observable<TodoItem | null>;
    public form: FormGroup;

    constructor(private store: Store,
                private route: ActivatedRoute) {
        this.activeTodo$ = this.store.select(activeTodoSelector);
        this.form = new FormGroup({
            name: new FormControl(''),
            isCompleted: new FormControl(''),
        })
    }

    public ngOnInit() {
        this.route.url.pipe(
            map(url => url[1].path)
        ).subscribe(id => {
            this.store.dispatch(getActiveTask({id: parseInt(id)}));
        });

        this.activeTodo$.pipe(
            filter(todoItem => todoItem !== null)
        ).subscribe((todoItem: TodoItem | null) => this.form.patchValue({...todoItem}));
    }

    public saveChanges(todoItem: { name: string, isCompleted: boolean }, id: number): void {
        this.store.dispatch(updateActiveTask({
            activeTodo: {
                ...todoItem,
                id,
            }
        }));
    }

    public cancel(): void {

    }
}
