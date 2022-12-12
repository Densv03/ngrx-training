import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";
import { TodoItem } from "../store/todo.state";

const initialState: TodoItem[] = [
    {
        name: 'Task 1',
        isCompleted: false,
        id: 1,
    },
    {
        name: 'Task 2',
        isCompleted: true,
        id: 2,
    },
    {
        name: 'Task 3',
        isCompleted: false,
        id: 3,
    },
];

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private todosSubject: BehaviorSubject<TodoItem[]> = new BehaviorSubject<TodoItem[]>(initialState);

    private activeTodoSubject: BehaviorSubject<TodoItem | null> = new BehaviorSubject<TodoItem | null>(null);

    public get todoList$(): Observable<TodoItem[]> {
        return this.todosSubject.asObservable();
    }

    public get activeTodo$(): Observable<TodoItem | null> {
        return this.activeTodoSubject.asObservable();
    }

    public findTodoById$(id: number): Observable<TodoItem | null> {
        const foundTodo = this.todosSubject.getValue().find(todo => todo.id === id);
        return foundTodo ? of(foundTodo) : of(null);
    }

    public createTask$(name: string): Observable<TodoItem[]> {
        const newTask: TodoItem = {
            name,
            isCompleted: false,
            id: Date.now(),
        };
        this.todosSubject.next([...this.todosSubject.getValue(), newTask]);
        return this.todoList$;
    }

    public deleteTask$(id: number): Observable<TodoItem[]> {
        this.todosSubject.next(this.todosSubject.getValue().filter(item => item.id !== id));
        return this.todoList$;
    }

    public updateActiveTask$(activeTodo: TodoItem | null): Observable<TodoItem | null> {
        this.activeTodoSubject.next(activeTodo);
        return this.activeTodo$
    }
}