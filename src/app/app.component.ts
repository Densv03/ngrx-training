import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { createTask, deleteTask, TodoItem, todoListSelector } from "./reducers/todo";
import { Observable } from "rxjs";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public todoList$: Observable<TodoItem[]>;
    public form: FormGroup = new FormGroup<{newTask: FormControl}>({
        newTask: new FormControl(''),
    });

    constructor(private store: Store) {
        this.todoList$ = this.store.select(todoListSelector);
    }

    public deleteTask(id: number): void {
        this.store.dispatch(deleteTask({id}));
    }

    public addTask(): void {
        this.store.dispatch(createTask({name: this.form.value.newTask}));
        this.form.reset()
    }
}
