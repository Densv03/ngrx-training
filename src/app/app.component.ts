import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { FormControl, FormGroup } from "@angular/forms";
import { createTask, deleteTask, getTasks } from "./store/todo.actions";
import { TodoItem } from "./store/todo.state";
import { todoListSelector } from "./store/todo.selectors";

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
        this.store.dispatch(getTasks());
    }

    public deleteTask(id: number): void {
        this.store.dispatch(deleteTask({id}));
    }

    public addTask(): void {
        this.store.dispatch(createTask({name: this.form.value.newTask}));
        this.form.reset();
    }
}
