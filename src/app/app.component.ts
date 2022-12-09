import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public counter = 0;
    public updatedAt?: number;

    get isNegative(): boolean {
        return this.counter <= 0;
    }

    public increment(): void {
        this.updatedAt = Date.now();
        this.counter++;
    }

    public decrement(): void {
        this.updatedAt = Date.now();
        this.counter--;
    }

    public reset(): void {
        this.updatedAt = Date.now();
        this.counter = 0;
    }
}
