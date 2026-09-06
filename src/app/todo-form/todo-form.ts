import { Component, inject, signal } from '@angular/core';
import { ToDo } from "../../models/todo.model"
import { TodoService } from '../../service/todo-service';
import { form, required } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
  private readonly todoService = inject(TodoService);

  readonly taskModel = signal<ToDo>({
    id: 0,
    title: "",
    completed: false
  })

  protected readonly myForm = form(this.taskModel, (schema) => {
    required(schema.title);
  })


  handleSubmit(): void {
    if(this.myForm().invalid()) return;

    const newTodo: ToDo = {
      ...this.taskModel(),
      id: Date.now()
    }

    this.todoService.addTodo(newTodo);

    this.taskModel.set({
      id: 0,
      title: '',
      completed: false
    })
  }
}
