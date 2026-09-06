import { Injectable, signal } from '@angular/core';
import { ToDo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly todoList = signal<ToDo[]>([]);
  readonly todos = this.todoList.asReadonly();

  addTodo(newTodo: ToDo){
    this.todoList.update((currentList) => [...currentList, newTodo]);
  } 

  toggle(id: number){
    this.todoList.update((currentList) => 
      currentList.map((todo) => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo)
    )
  }
}
