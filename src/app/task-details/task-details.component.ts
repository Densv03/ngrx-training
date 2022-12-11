import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { updateActiveTask } from "../store/todo.actions";

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
    constructor(private store: Store,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.url.pipe(
            map(url => url[1].path)
        ).subscribe(id => {
            this.store.dispatch(updateActiveTask({id: parseInt(id)}));
        });
    }
}
