import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
    createTask,
    createTaskSuccess,
    deleteTask,
    deleteTaskSuccess,
    getTasks,
    getTasksSuccess
} from "./todo.actions";
import { map, mergeMap } from "rxjs";
import { TodoService } from "../services/todo.service";

@Injectable()
export class TodoEffects {
    constructor(private actions$: Actions,
                private todoService: TodoService) {
    }

    public getTasks$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getTasks),
            mergeMap(() => {
                return this.todoService.todoList$.pipe(
                    map(todos => getTasksSuccess({todos})),
                );
            }),
        );
    });

    public createTasks$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(createTask),
            mergeMap((action) => {
                return this.todoService.createTask$(action.name).pipe(
                    map(todos => createTaskSuccess({todos})),
                );
            }),
        );
    });

    public deleteTask$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteTask),
            mergeMap(actions => {
                return this.todoService.deleteTask$(actions.id).pipe(
                    map(todos => deleteTaskSuccess({todos})),
                );
            }),
        );
    });
}