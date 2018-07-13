import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { TodoInputComponent } from "./components/todo-input/todo-input.component";

const routes: Routes = [
  {
    path: "todo/add",
    component: TodoInputComponent
  },
  {
    path: "todo",
    component: HeaderComponent
  },
  {
    path: "",
    redirectTo: "/todo",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
