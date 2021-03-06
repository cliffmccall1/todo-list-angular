import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { TodoInputComponent } from "./components/todo-input/todo-input.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { AppRoutingModule } from ".//app-routing.module";
import { TodoService } from "./service/todo.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoInputComponent,
    TodoItemComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
