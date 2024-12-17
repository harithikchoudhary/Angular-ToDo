import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos = [
    { text: 'Learn Angular 16', completed: false },
    { text: 'Build a Todo App', completed: false }
  ];

  newTodo: string = '';

  // Method to add a new todo
  addTodo(event?: KeyboardEvent): void {
    if (this.newTodo.trim() && (!event || event.key === 'Enter')) {
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = ''; // Clear input field
    }
  }

  // Method to remove a todo
  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }
}
