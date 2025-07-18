import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TasksComponent } from "./tasks.component";

@NgModule({
    declarations: [TasksComponent],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class TasksModule {

}