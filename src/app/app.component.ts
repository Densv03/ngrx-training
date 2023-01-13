import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import {
  createTask,
  deleteTask,
  getTasks,
  updateActiveTask,
} from './store/todo.actions';
import { TodoItem } from './store/todo.state';
import { todoListSelector } from './store/todo.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngrx-training';
  public todoList$: Observable<TodoItem[]>;
  public form: FormGroup = new FormGroup<{ newTask: FormControl }>({
    newTask: new FormControl(''),
  });

  constructor(private store: Store, private router: Router) {
    this.todoList$ = this.store.select(todoListSelector);
    this.store.dispatch(getTasks());
  }

  public deleteTask(id: number): void {
    this.store.dispatch(deleteTask({ id }));
  }

  public addTask(): void {
    if (!this.form.value.newTask) return;
    this.store.dispatch(createTask({ name: this.form.value.newTask }));
    this.form.reset();
  }

  public redirect(id: number) {
    this.router.navigate(['task', id]);
  }

  public updateTodoItem(todoItem: TodoItem): void {
    this.store.dispatch(
      updateActiveTask({
        activeTodo: {
          ...todoItem,
          isCompleted: !todoItem.isCompleted,
        },
      })
    );
  }
}
