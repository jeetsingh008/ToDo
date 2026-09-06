import { Component } from '@angular/core';
import { ToDo } from "../../models/todo.model"
@Component({
  selector: 'app-todo-form',
  imports: [],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
  task: ToDo = {
    id: 0,
    title: "",
    completed: false
  }
}
