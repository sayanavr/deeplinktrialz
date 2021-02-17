import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoItemComponent } from './todo-item/todo-item.component';

import { TodosComponent } from './todos.component';

const routes: Routes = [{ path: '', component: TodosComponent },{path:':id', component: TodoItemComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
