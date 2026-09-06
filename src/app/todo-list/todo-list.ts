import { Component, inject, signal } from '@angular/core';
import { TodoService } from '../../service/todo-service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  private readonly todoService = inject(TodoService);
  todos = this.todoService.todos;
  
  toggleTodo = (id: number) => this.todoService.toggle(id);
}
