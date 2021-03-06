import { Component, OnInit } from "@angular/core";
import { Todo } from "../../model/todo";

@Component({
  selector: "app-todo-input",
  templateUrl: "./todo-input.component.html",
  styleUrls: ["./todo-input.component.css"]
})
export class TodoInputComponent implements OnInit {
  model: Todo = new Todo();
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log("Submit Successful:", this.model);
  }
}
