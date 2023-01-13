import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { reducers } from './reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoEffects } from './store/todo.effects';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { TaskDetailsComponent } from './task-details/task-details.component';

@NgModule({
  declarations: [AppComponent, TaskDetailsComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AppEffects, TodoEffects]),
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
