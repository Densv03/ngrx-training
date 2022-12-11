import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { TodoItem } from "./store/todo.state";

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

    public get todoList$(): Observable<TodoItem[]> {
        return this.todosSubject.asObservable();
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

    constructor() {
    }
}
