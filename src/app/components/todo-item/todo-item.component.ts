import { Component, OnInit } from "@angular/core";
import { Todo } from "../../model/todo";
import { TodoService } from "../../service/todo.service";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  todo: Todo[];
  dataService: TodoService;

  constructor(private todoService: TodoService) {
    this.dataService = this.todoService;
  }

  ngOnInit(): void {
    this.dataService.getTodo().subscribe(todo => (this.todo = todo));
  }
}
