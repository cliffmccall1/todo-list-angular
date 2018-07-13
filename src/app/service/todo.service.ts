import { Injectable } from "@angular/core";
import { Todo } from "../model/todo";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todo: Todo[] = [
    {
      id: 0,
      title: "Walk the dog",
      details: "30 minute walk for you both to stretch legs"
    },
    {
      id: 1,
      title: "Wash the car",
      details: "Express car wash opens at 7 am"
    },
    {
      id: 2,
      title: "Take out the trash",
      details:
        "Trash needs to be outside by 8 pm for the valet service to pick it up"
    }
  ];

  getTodo = (): Observable<Todo[]> => {
    return of(this.todo);
  };

  constructor() {}
}
